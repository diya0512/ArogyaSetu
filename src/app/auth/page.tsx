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
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f4f6fb" }}>
        <div style={{ textAlign: "center", background: "#fff", border: "1px solid #dde3ed", borderRadius: 8, padding: "48px 40px", maxWidth: 400, width: "100%", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ width: 56, height: 56, background: "#f0fdf4", border: "2px solid #bbf7d0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 24, color: "#15803d" }}>✓</div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1a3a6b", marginBottom: 8 }}>
            {mode === "signup" ? "Account Created!" : "Welcome Back!"}
          </h2>
          <p style={{ fontSize: 14, color: "#4a5568" }}>Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  // ── OTP SCREEN ──
  if (step === "otp") {
    return (
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f4f6fb", padding: "40px 16px" }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ background: "#fff", border: "1px solid #dde3ed", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden" }}>
            {/* Header */}
            <div style={{ background: "#1a3a6b", padding: "24px 32px" }}>
              <button onClick={() => { setStep("entry"); setError(""); window.recaptchaVerifier?.clear(); window.recaptchaVerifier = undefined; }}
                style={{ background: "transparent", border: "none", color: "#93b4dc", cursor: "pointer", fontSize: 13, marginBottom: 12, padding: 0, display: "flex", alignItems: "center", gap: 6 }}>
                ← Back
              </button>
              <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Verify Your Mobile</h2>
              <p style={{ color: "#93b4dc", fontSize: 13 }}>
                OTP sent to <strong style={{ color: "#fff" }}>+91 {phone}</strong>
              </p>
            </div>

            <div style={{ padding: "28px 32px" }}>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 20 }}>
                {otp.map((digit, idx) => (
                  <input key={idx} ref={el => { otpRefs.current[idx] = el; }}
                    type="text" inputMode="numeric" maxLength={1} value={digit}
                    onChange={e => handleOtpChange(idx, e.target.value)}
                    onKeyDown={e => handleOtpKey(idx, e)}
                    onPaste={idx === 0 ? e => {
                      const p = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
                      if (p.length === 6) { setOtp(p.split("")); otpRefs.current[5]?.focus(); e.preventDefault(); }
                    } : undefined}
                    style={{
                      width: 48, height: 54, textAlign: "center", fontSize: 22, fontWeight: 700,
                      background: "#f4f6fb", border: `2px solid ${digit ? "#1a3a6b" : "#dde3ed"}`,
                      borderRadius: 6, color: "#1a3a6b", outline: "none", caretColor: "#1a3a6b", padding: 0,
                      boxSizing: "border-box"
                    }} />
                ))}
              </div>

              {error && (
                <div style={{ marginBottom: 16, background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, padding: "10px 14px", color: "#b91c1c", fontSize: 13 }}>
                  {error}
                </div>
              )}

              <div style={{ textAlign: "center", fontSize: 13, color: "#718096", marginBottom: 16 }}>
                {canResend
                  ? <button onClick={handleSendOTP} style={{ background: "transparent", border: "none", color: "#1a3a6b", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Resend OTP</button>
                  : <>Resend in <strong style={{ color: "#1a3a6b" }}>00:{String(timer).padStart(2, "0")}</strong></>
                }
              </div>

              <button onClick={handleVerifyOTP} disabled={loading} className="btn-primary"
                style={{ width: "100%", padding: "12px", justifyContent: "center", fontSize: 14, opacity: loading ? 0.7 : 1 }}>
                {loading ? "Verifying..." : "Verify & Continue"}
              </button>

              <div style={{ marginTop: 14, padding: "10px 12px", background: "#f4f6fb", border: "1px solid #dde3ed", borderRadius: 6, fontSize: 12, color: "#718096", textAlign: "center" }}>
                OTP is valid for 10 minutes. Do not share it with anyone.
              </div>
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
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f4f6fb", padding: "40px 16px" }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ background: "#fff", border: "1px solid #dde3ed", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden" }}>

            {/* Header */}
            <div style={{ background: "#1a3a6b", padding: "24px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.15)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <h1 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: 0 }}>
                    {mode === "login" ? "Sign In to ArogyaSetu" : "Create Your Account"}
                  </h1>
                  <p style={{ color: "#93b4dc", fontSize: 12, margin: 0 }}>Government Healthcare Portal</p>
                </div>
              </div>
            </div>

            <div style={{ padding: "28px 32px" }}>
              {/* Login / Signup toggle */}
              <div style={{ display: "flex", background: "#f4f6fb", borderRadius: 6, padding: 3, marginBottom: 20, border: "1px solid #dde3ed" }}>
                {(["login", "signup"] as Mode[]).map(m => (
                  <button key={m} onClick={() => switchMode(m)}
                    style={{ flex: 1, padding: "8px", borderRadius: 4, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "inherit", transition: "all 0.15s",
                      background: mode === m ? "#1a3a6b" : "transparent",
                      color: mode === m ? "#fff" : "#4a5568" }}>
                    {m === "login" ? "Sign In" : "Register"}
                  </button>
                ))}
              </div>

              {/* Email / Phone toggle */}
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                {(["email", "phone"] as Method[]).map(m => (
                  <button key={m} onClick={() => switchMethod(m)}
                    style={{ flex: 1, padding: "9px", border: `1.5px solid ${method === m ? "#1a3a6b" : "#dde3ed"}`,
                      background: method === m ? "#e8eef7" : "#fff",
                      color: method === m ? "#1a3a6b" : "#4a5568",
                      borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 600,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: "inherit" }}>
                    {m === "email" ? "Email" : "Phone OTP"}
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {mode === "signup" && (
                  <div>
                    <label>Full Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="As per Aadhaar card" />
                  </div>
                )}

                {method === "email" ? (
                  <>
                    <div>
                      <label>Email Address</label>
                      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email" onKeyDown={e => e.key === "Enter" && handleEmailSubmit()} />
                    </div>
                    <div>
                      <label>Password</label>
                      <div style={{ position: "relative" }}>
                        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Min. 6 characters"
                          type={showPass ? "text" : "password"} onKeyDown={e => e.key === "Enter" && handleEmailSubmit()}
                          style={{ paddingRight: 44 }} />
                        <button onClick={() => setShowPass(s => !s)}
                          style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#718096", cursor: "pointer", fontSize: 14 }}>
                          {showPass ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <label>Mobile Number</label>
                    <div style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 13, color: "#4a5568", fontWeight: 600, pointerEvents: "none" }}>+91</span>
                      <input value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        placeholder="10-digit number" type="tel" maxLength={10}
                        onKeyDown={e => e.key === "Enter" && handleSendOTP()}
                        style={{ paddingLeft: 48 }} />
                    </div>
                  </div>
                )}
              </div>

              {error && (
                <div style={{ marginTop: 14, background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, padding: "10px 14px", color: "#b91c1c", fontSize: 13 }}>
                  {error}
                </div>
              )}

              <button onClick={method === "email" ? handleEmailSubmit : handleSendOTP} disabled={loading}
                className="btn-primary"
                style={{ width: "100%", marginTop: 20, padding: "12px", justifyContent: "center", fontSize: 14, opacity: loading ? 0.7 : 1 }}>
                {loading ? "Please wait..."
                  : method === "phone" ? `Send OTP to +91 ${phone || "XXXXXXXXXX"}`
                  : mode === "login" ? "Sign In" : "Create Account"}
              </button>

              <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#718096" }}>
                {mode === "login" ? "Don't have an account? " : "Already registered? "}
                <button onClick={() => switchMode(mode === "login" ? "signup" : "login")}
                  style={{ background: "none", border: "none", color: "#1a3a6b", cursor: "pointer", fontWeight: 600, fontSize: 13, fontFamily: "inherit" }}>
                  {mode === "login" ? "Register here" : "Sign in"}
                </button>
              </p>

              <p style={{ textAlign: "center", marginTop: 12, fontSize: 11, color: "#94a3b8", lineHeight: 1.6 }}>
                This is a secure government portal. Your data is protected under the IT Act 2000.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}