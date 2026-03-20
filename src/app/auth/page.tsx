"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

type Mode = "login" | "signup";
type Method = "email" | "phone";
type Step = "entry" | "otp" | "success";

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: ConfirmationResult;
  }
}

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [method, setMethod] = useState<Method>("email");
  const [step, setStep] = useState<Step>("entry");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [phone, setPhone] = useState("");

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startTimer = () => {
    setTimer(30); setCanResend(false);
    clearInterval(timerRef.current!);
    timerRef.current = setInterval(() => {
      setTimer(t => { if (t <= 1) { clearInterval(timerRef.current!); setCanResend(true); return 0; } return t - 1; });
    }, 1000);
  };

  const switchMode = (m: Mode) => { setMode(m); setError(""); setStep("entry"); };
  const switchMethod = (m: Method) => { setMethod(m); setError(""); setStep("entry"); };

  // ── Email ──
  const handleEmailSubmit = async () => {
    setError("");
    if (!email || !email.includes("@")) { setError("Please enter a valid email address."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    if (mode === "signup" && !name.trim()) { setError("Please enter your full name."); return; }
    setLoading(true);
    try {
      if (mode === "signup") {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name.trim() });
        await setDoc(doc(db, "users", cred.user.uid), {
          name: name.trim(), email, createdAt: new Date().toISOString(),
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setStep("success");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (e: any) {
      const msg: Record<string, string> = {
        "auth/email-already-in-use": "This email is already registered. Try logging in.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        "auth/invalid-credential": "Incorrect email or password.",
        "auth/too-many-requests": "Too many attempts. Please try again later.",
      };
      setError(msg[e.code] || "Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  // ── Phone: Send OTP ──
  const handleSendOTP = async () => {
    setError("");
    if (phone.length !== 10) { setError("Enter a valid 10-digit mobile number."); return; }
    if (mode === "signup" && !name.trim()) { setError("Please enter your full name."); return; }
    setLoading(true);
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible", callback: () => {},
        });
      }
      const confirmation = await signInWithPhoneNumber(auth, `+91${phone}`, window.recaptchaVerifier);
      window.confirmationResult = confirmation;
      setOtp(["", "", "", "", "", ""]);
      setStep("otp");
      startTimer();
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } catch (e: any) {
      const msg: Record<string, string> = {
        "auth/invalid-phone-number": "Invalid phone number. Please check and retry.",
        "auth/too-many-requests": "Too many attempts. Please wait before retrying.",
      };
      setError(msg[e.code] || e.message || "Failed to send OTP.");
      window.recaptchaVerifier?.clear();
      window.recaptchaVerifier = undefined;
    }
    setLoading(false);
  };

  // ── Phone: Verify OTP ──
  const handleVerifyOTP = async () => {
    setError("");
    const token = otp.join("");
    if (token.length < 6) { setError("Enter the complete 6-digit OTP."); return; }
    setLoading(true);
    try {
      const result = await window.confirmationResult!.confirm(token);
      if (mode === "signup" && name.trim()) {
        await updateProfile(result.user, { displayName: name.trim() });
        await setDoc(doc(db, "users", result.user.uid), {
          name: name.trim(), phone: `+91${phone}`, createdAt: new Date().toISOString(),
        });
      }
      clearInterval(timerRef.current!);
      setStep("success");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch {
      setError("Invalid OTP. Please try again.");
    }
    setLoading(false);
  };

  const handleOtpChange = (idx: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp]; next[idx] = val; setOtp(next); setError("");
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };
  const handleOtpKey = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) otpRefs.current[idx - 1]?.focus();
  };

  // ── SUCCESS ──
  if (step === "success") {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f172a" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
          <h2 style={{ color: "#f1f5f9", fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
            {mode === "signup" ? "Account Created!" : "Welcome Back!"}
          </h2>
          <p style={{ color: "#64748b", fontSize: 15 }}>Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  // ── OTP SCREEN ──
  if (step === "otp") {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f172a", padding: "40px 16px" }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ background: "#1e293b", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "36px 32px", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
            <button onClick={() => { setStep("entry"); setError(""); window.recaptchaVerifier?.clear(); window.recaptchaVerifier = undefined; }}
              style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer", fontSize: 13, marginBottom: 24, padding: 0, display: "flex", alignItems: "center", gap: 6 }}>
              ← Back
            </button>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(34,211,238,0.1)", border: "2px solid rgba(34,211,238,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, margin: "0 auto 16px" }}>📱</div>
              <h2 style={{ color: "#f1f5f9", fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Verify Your Number</h2>
              <p style={{ color: "#64748b", fontSize: 14 }}>
                OTP sent to <span style={{ color: "#22d3ee", fontWeight: 700 }}>+91 {phone}</span>
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 16 }}>
              {otp.map((digit, idx) => (
                <input key={idx} ref={el => { otpRefs.current[idx] = el; }}
                  type="text" inputMode="numeric" maxLength={1} value={digit}
                  onChange={e => handleOtpChange(idx, e.target.value)}
                  onKeyDown={e => handleOtpKey(idx, e)}
                  onPaste={idx === 0 ? e => {
                    const p = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
                    if (p.length === 6) { setOtp(p.split("")); otpRefs.current[5]?.focus(); e.preventDefault(); }
                  } : undefined}
                  style={{ width: 48, height: 54, textAlign: "center", fontSize: 22, fontWeight: 700, background: "#0f172a",
                    border: `2px solid ${digit ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.1)"}`,
                    borderRadius: 12, color: digit ? "#22d3ee" : "#f1f5f9", outline: "none", caretColor: "#22d3ee", padding: 0 }} />
              ))}
            </div>

            {error && <div style={{ marginBottom: 14, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, padding: "10px 14px", color: "#f87171", fontSize: 13 }}>⚠️ {error}</div>}

            <div style={{ textAlign: "center", fontSize: 13, color: "#64748b", marginBottom: 16 }}>
              {canResend
                ? <button onClick={handleSendOTP} style={{ background: "transparent", border: "none", color: "#22d3ee", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>🔄 Resend OTP</button>
                : <>Resend in <strong style={{ color: "#f1f5f9" }}>00:{String(timer).padStart(2, "0")}</strong></>
              }
            </div>

            <button onClick={handleVerifyOTP} disabled={loading}
              style={{ width: "100%", padding: "13px", borderRadius: 10, border: "none", cursor: loading ? "not-allowed" : "pointer", fontSize: 15, fontWeight: 700, color: "#fff", background: loading ? "#334155" : "linear-gradient(135deg,#06b6d4,#3b82f6)" }}>
              {loading ? "Verifying..." : "✅ Verify & Continue"}
            </button>

            <div style={{ marginTop: 14, padding: "10px 12px", background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.1)", borderRadius: 10, fontSize: 12, color: "#64748b", textAlign: "center" }}>
              🔒 OTP is valid for 10 minutes. Do not share it with anyone.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── ENTRY SCREEN ──
  return (
    <>
      <div id="recaptcha-container" />
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f172a", padding: "40px 16px" }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ background: "#1e293b", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "36px 32px", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>

            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#06b6d4,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, margin: "0 auto 16px" }}>💙</div>
              <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 800, margin: "0 0 6px" }}>ArogyaSetu</h1>
              <p style={{ color: "#64748b", fontSize: 14, margin: 0 }}>आरोग्य सेतु • Secure Health Access</p>
            </div>

            {/* Login / Sign Up toggle */}
            <div style={{ display: "flex", background: "#0f172a", borderRadius: 10, padding: 4, marginBottom: 20 }}>
              {(["login", "signup"] as Mode[]).map(m => (
                <button key={m} onClick={() => switchMode(m)}
                  style={{ flex: 1, padding: "8px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 700, transition: "all 0.2s",
                    background: mode === m ? "linear-gradient(135deg,#06b6d4,#3b82f6)" : "transparent",
                    color: mode === m ? "#fff" : "#64748b" }}>
                  {m === "login" ? "🔐 Login" : "✨ Sign Up"}
                </button>
              ))}
            </div>

            {/* Email / Phone toggle */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {(["email", "phone"] as Method[]).map(m => (
                <button key={m} onClick={() => switchMethod(m)}
                  style={{ flex: 1, padding: "9px", border: `1px solid ${method === m ? "rgba(34,211,238,0.4)" : "rgba(255,255,255,0.08)"}`,
                    background: method === m ? "rgba(34,211,238,0.08)" : "transparent",
                    color: method === m ? "#22d3ee" : "#64748b",
                    borderRadius: 9, cursor: "pointer", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  {m === "email" ? "✉️ Email" : "📱 Phone OTP"}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {mode === "signup" && (
                <div>
                  <label style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600, display: "block", marginBottom: 6 }}>FULL NAME</label>
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Rahul Sharma"
                    style={{ width: "100%", background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px", color: "#f1f5f9", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                </div>
              )}

              {method === "email" ? (
                <>
                  <div>
                    <label style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600, display: "block", marginBottom: 6 }}>EMAIL ADDRESS</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email"
                      onKeyDown={e => e.key === "Enter" && handleEmailSubmit()}
                      style={{ width: "100%", background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px", color: "#f1f5f9", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600, display: "block", marginBottom: 6 }}>PASSWORD</label>
                    <div style={{ position: "relative" }}>
                      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Min. 6 characters"
                        type={showPass ? "text" : "password"} onKeyDown={e => e.key === "Enter" && handleEmailSubmit()}
                        style={{ width: "100%", background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 44px 11px 14px", color: "#f1f5f9", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                      <button onClick={() => setShowPass(s => !s)}
                        style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: 16 }}>
                        {showPass ? "🙈" : "👁️"}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600, display: "block", marginBottom: 6 }}>MOBILE NUMBER</label>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "#64748b", fontWeight: 600, pointerEvents: "none" }}>🇮🇳 +91</span>
                    <input value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      placeholder="10-digit number" type="tel" maxLength={10}
                      onKeyDown={e => e.key === "Enter" && handleSendOTP()}
                      style={{ width: "100%", background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px 11px 76px", color: "#f1f5f9", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div style={{ marginTop: 14, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, padding: "10px 14px", color: "#f87171", fontSize: 13 }}>
                ⚠️ {error}
              </div>
            )}

            <button onClick={method === "email" ? handleEmailSubmit : handleSendOTP} disabled={loading}
              style={{ width: "100%", marginTop: 20, padding: "13px", borderRadius: 10, border: "none", cursor: loading ? "not-allowed" : "pointer", fontSize: 15, fontWeight: 700, color: "#fff",
                background: loading ? "#334155" : "linear-gradient(135deg,#06b6d4,#3b82f6)", transition: "all 0.2s" }}>
              {loading
                ? "Please wait..."
                : method === "phone"
                  ? `📲 Send OTP to +91 ${phone || "XXXXXXXXXX"}`
                  : mode === "login" ? "🔐 Login" : "✨ Create Account"
              }
            </button>

            <p style={{ textAlign: "center", marginTop: 18, fontSize: 13, color: "#64748b" }}>
              {mode === "login" ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => switchMode(mode === "login" ? "signup" : "login")}
                style={{ background: "none", border: "none", color: "#22d3ee", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
                {mode === "login" ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}