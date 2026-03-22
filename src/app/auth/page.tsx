"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInAnonymously,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

type Mode = "login" | "signup";
type Method = "email" | "phone";
type Step = "entry" | "otp" | "success";

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
      setTimer(t => {
        if (t <= 1) { clearInterval(timerRef.current!); setCanResend(true); return 0; }
        return t - 1;
      });
    }, 1000);
  };

  const switchMode = (m: Mode) => { setMode(m); setError(""); setStep("entry"); };
  const switchMethod = (m: Method) => { setMethod(m); setError(""); setStep("entry"); };

  // ── Email auth ──
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

  // ── Send OTP via Twilio ──
  const handleSendOTP = async () => {
    setError("");
    if (phone.length !== 10) { setError("Enter a valid 10-digit mobile number."); return; }
    if (mode === "signup" && !name.trim()) { setError("Please enter your full name."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send OTP");
      setOtp(["", "", "", "", "", ""]);
      setStep("otp");
      startTimer();
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } catch (e: any) {
      setError(e.message || "Failed to send OTP. Please try again.");
    }
    setLoading(false);
  };

  // ── Verify OTP via Twilio ──
  const handleVerifyOTP = async () => {
    setError("");
    const code = otp.join("");
    if (code.length < 6) { setError("Enter the complete 6-digit OTP."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Invalid OTP");

      // Sign in anonymously to Firebase to create a session
      const cred = await signInAnonymously(auth);
      await updateProfile(cred.user, { displayName: name.trim() || `+91${phone}` });
      await setDoc(doc(db, "users", cred.user.uid), {
        name: name.trim() || "", phone: `+91${phone}`, createdAt: new Date().toISOString(),
      });

      clearInterval(timerRef.current!);
      setStep("success");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (e: any) {
      setError(e.message || "Invalid OTP. Please try again.");
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
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f7f8fa" }}>
        <div style={{ textAlign: "center", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "48px 40px", maxWidth: 400, width: "100%" }}>
          <div style={{ width: 56, height: 56, background: "#f0fdf4", border: "2px solid #bbf7d0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 24, color: "#15803d" }}>✓</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "#0f2d52", marginBottom: 8 }}>
            {mode === "signup" ? "Account Created!" : "Welcome Back!"}
          </h2>
          <p style={{ fontSize: 14, color: "#6b7280" }}>Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  // ── OTP SCREEN ──
  if (step === "otp") {
    return (
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f7f8fa", padding: "40px 16px" }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ background: "#0f2d52", padding: "24px 32px", borderBottom: "3px solid #c6902a" }}>
              <button onClick={() => { setStep("entry"); setError(""); }}
                style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 13, marginBottom: 12, padding: 0, display: "flex", alignItems: "center", gap: 6, fontFamily: "inherit" }}>
                ← Back
              </button>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", color: "#fff", fontSize: 20, fontWeight: 400, marginBottom: 4 }}>Verify your mobile</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
                OTP sent to <strong style={{ color: "#fff" }}>+91 {phone}</strong>
              </p>
            </div>

            <div style={{ padding: "28px 32px" }}>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 20 }}>
                {otp.map((digit, idx) => (
                  <input key={idx}
                    ref={el => { otpRefs.current[idx] = el; }}
                    type="text" inputMode="numeric" maxLength={1} value={digit}
                    onChange={e => handleOtpChange(idx, e.target.value)}
                    onKeyDown={e => handleOtpKey(idx, e)}
                    onPaste={idx === 0 ? e => {
                      const p = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
                      if (p.length === 6) { setOtp(p.split("")); otpRefs.current[5]?.focus(); e.preventDefault(); }
                    } : undefined}
                    style={{
                      width: 48, height: 54, textAlign: "center", fontSize: 22, fontWeight: 700,
                      background: "#f7f8fa", border: `2px solid ${digit ? "#0f2d52" : "#e2e8f0"}`,
                      borderRadius: 6, color: "#0f2d52", outline: "none", padding: 0, boxSizing: "border-box",
                    }} />
                ))}
              </div>

              {error && (
                <div style={{ marginBottom: 16, background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, padding: "10px 14px", color: "#b91c1c", fontSize: 13 }}>
                  {error}
                </div>
              )}

              <div style={{ textAlign: "center", fontSize: 13, color: "#6b7280", marginBottom: 16 }}>
                {canResend
                  ? <button onClick={handleSendOTP} style={{ background: "transparent", border: "none", color: "#0f2d52", cursor: "pointer", fontWeight: 700, fontSize: 13, fontFamily: "inherit" }}>Resend OTP</button>
                  : <>Resend in <strong style={{ color: "#0f2d52" }}>00:{String(timer).padStart(2, "0")}</strong></>
                }
              </div>

              <button onClick={handleVerifyOTP} disabled={loading} className="btn-primary"
                style={{ width: "100%", padding: "12px", justifyContent: "center", fontSize: 14, opacity: loading ? 0.7 : 1 }}>
                {loading ? "Verifying..." : "Verify & continue"}
              </button>

              <div style={{ marginTop: 14, padding: "10px 12px", background: "#f7f8fa", border: "1px solid #e2e8f0", borderRadius: 6, fontSize: 12, color: "#9ca3af", textAlign: "center" }}>
                OTP valid for 10 minutes. Do not share with anyone.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── ENTRY SCREEN ──
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f7f8fa", padding: "40px 16px" }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>

          <div style={{ background: "#0f2d52", padding: "24px 32px", borderBottom: "3px solid #c6902a" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <h1 style={{ fontFamily: "'DM Serif Display', serif", color: "#fff", fontSize: 18, fontWeight: 400, margin: 0 }}>
                  {mode === "login" ? "Sign in to ArogyaSetu" : "Create your account"}
                </h1>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: 0 }}>Government Healthcare Portal</p>
              </div>
            </div>
          </div>

          <div style={{ padding: "28px 32px" }}>
            {/* Mode toggle */}
            <div style={{ display: "flex", background: "#f7f8fa", borderRadius: 6, padding: 3, marginBottom: 20, border: "1px solid #e2e8f0" }}>
              {(["login", "signup"] as Mode[]).map(m => (
                <button key={m} onClick={() => switchMode(m)}
                  style={{ flex: 1, padding: "8px", borderRadius: 4, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "inherit", transition: "all 0.15s",
                    background: mode === m ? "#0f2d52" : "transparent",
                    color: mode === m ? "#fff" : "#6b7280" }}>
                  {m === "login" ? "Sign in" : "Register"}
                </button>
              ))}
            </div>

            {/* Method toggle */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {(["email", "phone"] as Method[]).map(m => (
                <button key={m} onClick={() => switchMethod(m)}
                  style={{ flex: 1, padding: "9px", border: `1.5px solid ${method === m ? "#0f2d52" : "#e2e8f0"}`,
                    background: method === m ? "#e8eef7" : "#fff",
                    color: method === m ? "#0f2d52" : "#6b7280",
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
                        style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>
                        {showPass ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label>Mobile Number</label>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 13, color: "#374151", fontWeight: 600, pointerEvents: "none" }}>+91</span>
                    <input value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      placeholder="10-digit mobile number" type="tel" maxLength={10}
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
                : method === "phone" ? "Send OTP →"
                : mode === "login" ? "Sign in" : "Create account"}
            </button>

            <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#6b7280" }}>
              {mode === "login" ? "Don't have an account? " : "Already registered? "}
              <button onClick={() => switchMode(mode === "login" ? "signup" : "login")}
                style={{ background: "none", border: "none", color: "#0f2d52", cursor: "pointer", fontWeight: 600, fontSize: 13, fontFamily: "inherit" }}>
                {mode === "login" ? "Register here" : "Sign in"}
              </button>
            </p>

            <p style={{ textAlign: "center", marginTop: 12, fontSize: 11, color: "#9ca3af", lineHeight: 1.6 }}>
              Secure government portal. Data protected under IT Act 2000.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
