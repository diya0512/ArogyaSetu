"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { db, auth } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";

declare global {
  interface Window {
    apptRecaptcha?: RecaptchaVerifier;
    apptConfirmation?: ConfirmationResult;
  }
}

/* ─── Data ─────────────────────────────────────────────────────────── */
const hospitals = [
  { id: "h1", name: "AIIMS New Delhi", city: "New Delhi", state: "Delhi", rating: 4.8, doctors: 1200 },
  { id: "h2", name: "Safdarjung Hospital", city: "New Delhi", state: "Delhi", rating: 4.2, doctors: 680 },
  { id: "h3", name: "AIIMS Bhopal", city: "Bhopal", state: "Madhya Pradesh", rating: 4.5, doctors: 380 },
  { id: "h4", name: "King George's Medical University", city: "Lucknow", state: "Uttar Pradesh", rating: 4.6, doctors: 1800 },
  { id: "h5", name: "Grant Medical College & Sir JJ Hospital", city: "Mumbai", state: "Maharashtra", rating: 4.3, doctors: 620 },
  { id: "h6", name: "NIMHANS", city: "Bengaluru", state: "Karnataka", rating: 4.7, doctors: 290 },
  { id: "h7", name: "Rajiv Gandhi Government General Hospital", city: "Chennai", state: "Tamil Nadu", rating: 4.1, doctors: 950 },
  { id: "h8", name: "IPGMER & SSKM Hospital", city: "Kolkata", state: "West Bengal", rating: 4.4, doctors: 820 },
  { id: "h9", name: "ESI Model Hospital Hyderabad", city: "Hyderabad", state: "Telangana", rating: 3.9, doctors: 180 },
  { id: "h10", name: "PGIMER Chandigarh", city: "Chandigarh", state: "Punjab", rating: 4.7, doctors: 960 },
];

const doctorData: Record<string, { id: string; name: string; dept: string; exp: string; slots: string[] }[]> = {
  h1: [
    { id: "d1", name: "Dr. Ramesh Kumar", dept: "Cardiology", exp: "22 yrs", slots: ["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM"] },
    { id: "d2", name: "Dr. Sunita Sharma", dept: "Neurology", exp: "18 yrs", slots: ["9:30 AM", "11:00 AM", "3:00 PM"] },
    { id: "d3", name: "Dr. Pradeep Nair", dept: "Oncology", exp: "15 yrs", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
  ],
  h2: [
    { id: "d4", name: "Dr. Anil Mehta", dept: "General Medicine", exp: "15 yrs", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
    { id: "d5", name: "Dr. Kavita Rao", dept: "Gynecology", exp: "12 yrs", slots: ["9:00 AM", "11:30 AM", "2:30 PM"] },
  ],
};

const fallbackDoctors = [
  { id: "dx1", name: "Dr. Priya Nair", dept: "General Medicine", exp: "12 yrs", slots: ["9:00 AM", "11:00 AM", "3:00 PM", "4:30 PM"] },
  { id: "dx2", name: "Dr. Vikram Singh", dept: "Orthopedics", exp: "10 yrs", slots: ["10:30 AM", "1:00 PM", "4:30 PM"] },
];

const STEPS = [
  { num: 1, label: "Hospital" },
  { num: 2, label: "Doctor & Slot" },
  { num: 3, label: "Patient Details" },
  { num: 4, label: "Confirm" },
];

/* ─── QR Code Canvas ─────────────────────────────────────────────── */
function BookingQR({ bookingId }: { bookingId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const SIZE = 180;
  const M = 21;
  const CELL = SIZE / M;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, SIZE, SIZE);

    const hash = (s: string, r: number, c: number) => {
      let h = 0;
      for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
      return Math.abs(h ^ (r * 1234567) ^ (c * 9876543)) % 3 !== 0;
    };

    for (let r = 0; r < M; r++) {
      for (let c = 0; c < M; c++) {
        const tl = r < 7 && c < 7;
        const tr = r < 7 && c >= M - 7;
        const bl = r >= M - 7 && c < 7;
        let dark = false;
        if (tl || tr || bl) {
          const lr = tl ? r : tr ? r : r - (M - 7);
          const lc = tl ? c : tr ? c - (M - 7) : c;
          if (lr === 0 || lr === 6 || lc === 0 || lc === 6) dark = true;
          else if (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4) dark = true;
        } else {
          dark = hash(bookingId, r, c);
        }
        if (dark) {
          ctx.fillStyle = "#22d3ee";
          const x = c * CELL + 1, y = r * CELL + 1, s = CELL - 2;
          ctx.beginPath();
          ctx.roundRect(x, y, s, s, 2);
          ctx.fill();
        }
      }
    }

    const cx = SIZE / 2, cy = SIZE / 2;
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.roundRect(cx - 15, cy - 15, 30, 30, 6);
    ctx.fill();
    ctx.font = "20px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("💙", cx, cy);
  }, [bookingId]);

  return <canvas ref={canvasRef} width={SIZE} height={SIZE} style={{ display: "block", imageRendering: "pixelated" }} />;
}

/* ─── OTP Input ──────────────────────────────────────────────────── */
function OTPBoxes({ value, onChange, hasError }: { value: string[]; onChange: (v: string[]) => void; hasError: boolean }) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const change = (idx: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...value]; next[idx] = val; onChange(next);
    if (val && idx < 5) refs.current[idx + 1]?.focus();
  };
  const keydown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !value[idx] && idx > 0) refs.current[idx - 1]?.focus();
  };
  const paste = (e: React.ClipboardEvent) => {
    const p = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (p.length === 6) { onChange(p.split("")); refs.current[5]?.focus(); e.preventDefault(); }
  };
  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
      {value.map((digit, idx) => (
        <input key={idx} ref={el => { refs.current[idx] = el; }}
          type="text" inputMode="numeric" maxLength={1} value={digit}
          onChange={e => change(idx, e.target.value)}
          onKeyDown={e => keydown(idx, e)}
          onPaste={idx === 0 ? paste : undefined}
          style={{
            width: 50, height: 56, textAlign: "center", fontSize: 22, fontWeight: 700,
            background: "#0f172a",
            border: `2px solid ${hasError ? "rgba(239,68,68,0.6)" : digit ? "rgba(34,211,238,0.55)" : "rgba(255,255,255,0.1)"}`,
            borderRadius: 12, color: digit ? "#22d3ee" : "#f1f5f9",
            outline: "none", caretColor: "#22d3ee", padding: 0, transition: "border-color 0.2s"
          }} />
      ))}
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────────── */
export default function AppointmentsPage() {
  const [step, setStep] = useState(1);
  const [selHospital, setSelHospital] = useState("");
  const [selDoctor, setSelDoctor] = useState("");
  const [selSlot, setSelSlot] = useState("");
  const [form, setForm] = useState({ name: "", age: "", gender: "", phone: "", aadhaar: "", reason: "" });

  const [otpStage, setOtpStage] = useState<"idle" | "sending" | "verifying" | "done">("idle");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpErr, setOtpErr] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [booked, setBooked] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [bookingId] = useState("ARG-2026-" + Math.random().toString(36).substr(2, 6).toUpperCase());
  const [bookingDate] = useState(
    new Date(Date.now() + 2 * 86400000).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
  );

  const hospital = hospitals.find(h => h.id === selHospital);
  const doctors = selHospital ? (doctorData[selHospital] ?? fallbackDoctors) : [];
  const doctor = doctors.find(d => d.id === selDoctor);

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

  // 🔥 REAL Firebase SMS OTP
  const sendOTP = async () => {
    setOtpStage("sending");
    setOtpErr("");
    try {
      if (!window.apptRecaptcha) {
        window.apptRecaptcha = new RecaptchaVerifier(auth, "appt-recaptcha", {
          size: "invisible", callback: () => {},
        });
      }
      const confirmation = await signInWithPhoneNumber(auth, `+91${form.phone}`, window.apptRecaptcha);
      window.apptConfirmation = confirmation;
      setOtp(["", "", "", "", "", ""]);
      setOtpStage("verifying");
      startTimer();
    } catch (e: any) {
      setOtpErr(e.message || "Failed to send OTP. Please check the phone number.");
      setOtpStage("idle");
      window.apptRecaptcha?.clear();
      window.apptRecaptcha = undefined;
    }
  };

  const verifyOTP = async () => {
    const token = otp.join("");
    if (token.length < 6) { setOtpErr("Please enter the complete 6-digit OTP."); return; }
    try {
      await window.apptConfirmation!.confirm(token);
      clearInterval(timerRef.current!);
      setOtpStage("done");
    } catch {
      setOtpErr("Incorrect OTP. Please try again.");
    }
  };

  const resendOTP = () => {
    setOtp(["", "", "", "", "", ""]);
    setOtpErr("");
    window.apptRecaptcha?.clear();
    window.apptRecaptcha = undefined;
    sendOTP();
  };

  // 🔥 Save booking to Firestore
  const confirmBooking = async () => {
    if (otpStage !== "done") return;
    setSaving(true);
    setSaveError("");
    try {
      await addDoc(collection(db, "appointments"), {
        bookingId,
        bookingDate,
        hospital: hospital?.name,
        hospitalCity: hospital?.city,
        hospitalState: hospital?.state,
        doctor: doctor?.name,
        department: doctor?.dept,
        slot: selSlot,
        patientName: form.name,
        patientAge: form.age,
        patientGender: form.gender,
        patientPhone: form.phone,
        patientAadhaar: form.aadhaar || null,
        reason: form.reason || null,
        status: "confirmed",
        createdAt: new Date().toISOString(),
      });
      setBooked(true);
    } catch (err) {
      console.error("Firebase save error:", err);
      setSaveError("Failed to save booking. Please try again.");
    }
    setSaving(false);
  };

  return (
    <>
      {/* Invisible reCAPTCHA anchor for Firebase Phone Auth */}
      <div id="appt-recaptcha" />

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes scanLine { 0%{top:6px;opacity:1} 90%{top:calc(100% - 6px);opacity:1} 100%{top:calc(100% - 6px);opacity:0} }
        @keyframes popIn { 0%{transform:scale(0.85);opacity:0} 60%{transform:scale(1.03)} 100%{transform:scale(1);opacity:1} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 24px rgba(34,211,238,0.1)} 50%{box-shadow:0 0 48px rgba(34,211,238,0.3)} }
        .spinner { width:18px;height:18px;border:2px solid rgba(255,255,255,0.2);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite; }
        .scan-beam { position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#22d3ee,transparent);animation:scanLine 2.5s ease-in-out infinite;border-radius:1px; }
        .confirm-card { animation: popIn 0.55s cubic-bezier(0.16,1,0.3,1) both; }
        .qr-wrap { animation: glowPulse 3s ease-in-out infinite; border-radius: 18px; }
      `}</style>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ fontSize: 13, color: "#64748b", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ color: "#22d3ee", textDecoration: "none" }}>Home</Link>
          <span>›</span><span>Book Appointment</span>
        </div>

        <h1 style={{ fontSize: 34, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>📅 Book a Free Appointment</h1>
        <p style={{ color: "#64748b", fontSize: 15, marginBottom: 36 }}>OTP-verified bookings • QR code pass • Zero cost for every Indian citizen</p>

        {/* Step Indicator */}
        {!booked && (
          <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 14,
                    background: step > s.num ? "linear-gradient(135deg,#22c55e,#16a34a)" : step === s.num ? "linear-gradient(135deg,#06b6d4,#3b82f6)" : "rgba(255,255,255,0.06)",
                    color: step >= s.num ? "white" : "#475569",
                    boxShadow: step === s.num ? "0 4px 16px rgba(6,182,212,0.4)" : "none"
                  }}>{step > s.num ? "✓" : s.num}</div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: step >= s.num ? "#f1f5f9" : "#475569", whiteSpace: "nowrap" }}>{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ flex: 1, height: 2, background: step > s.num ? "linear-gradient(90deg,#22c55e,#06b6d4)" : "rgba(255,255,255,0.06)", margin: "0 12px", borderRadius: 1 }} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── CONFIRMED ── */}
        {booked ? (
          <div className="confirm-card">
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 52, marginBottom: 10 }}>🎉</div>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", marginBottom: 6 }}>Appointment Confirmed!</h2>
              <p style={{ color: "#64748b", fontSize: 14 }}>Your booking has been saved. Show the QR code at the hospital counter.</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 20, padding: "5px 14px", fontSize: 12, color: "#4ade80", fontWeight: 600 }}>
                🔥 Saved to Firebase
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
              <div className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Booking Details</div>
                {[
                  { icon: "🏥", lbl: "Hospital", val: hospital?.name },
                  { icon: "👨‍⚕️", lbl: "Doctor", val: doctor?.name },
                  { icon: "🏷️", lbl: "Department", val: doctor?.dept },
                  { icon: "📅", lbl: "Date", val: bookingDate },
                  { icon: "🕐", lbl: "Time", val: selSlot },
                  { icon: "👤", lbl: "Patient", val: form.name },
                  { icon: "📱", lbl: "Mobile", val: `+91 ${form.phone}` },
                  { icon: "💰", lbl: "Fee", val: "FREE ✓", color: "#4ade80" },
                ].map(r => (
                  <div key={r.lbl} style={{ display: "flex", gap: 8, padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 13, alignItems: "center" }}>
                    <span style={{ width: 20, flexShrink: 0 }}>{r.icon}</span>
                    <span style={{ color: "#64748b", flex: 1 }}>{r.lbl}</span>
                    <span style={{ color: (r as any).color || "#f1f5f9", fontWeight: 600, textAlign: "right", fontSize: 12 }}>{r.val}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Your Digital Pass</div>
                <div className="qr-wrap" style={{ display: "inline-block", padding: 12, background: "#0f172a", border: "2px solid rgba(34,211,238,0.25)", position: "relative", overflow: "hidden" }}>
                  <BookingQR bookingId={bookingId} />
                  <div className="scan-beam" style={{ top: 6 }} />
                </div>
                <div style={{ marginTop: 16, padding: "10px 14px", background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.15)", borderRadius: 10 }}>
                  <div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Booking ID</div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#22d3ee", letterSpacing: 3 }}>{bookingId}</div>
                </div>
                <div style={{ marginTop: 10, fontSize: 12, color: "#475569", lineHeight: 1.6 }}>
                  🔒 OTP Verified • Valid for this visit only<br />Present at hospital reception
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
              <Link href="/" className="btn-primary">🏠 Back to Home</Link>
              <Link href="/hospitals" className="btn-outline">🏥 View Hospitals</Link>
            </div>
          </div>

        ) : (
          <div className="card">

            {/* ── STEP 1 ── */}
            {step === 1 && (
              <>
                <h2 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 18, marginBottom: 20 }}>Select Hospital</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {hospitals.map(h => (
                    <div key={h.id} onClick={() => setSelHospital(h.id)} style={{
                      border: `2px solid ${selHospital === h.id ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.06)"}`,
                      background: selHospital === h.id ? "rgba(34,211,238,0.06)" : "rgba(255,255,255,0.02)",
                      borderRadius: 12, padding: "16px 20px", cursor: "pointer", transition: "all 0.15s",
                      display: "flex", justifyContent: "space-between", alignItems: "center"
                    }}>
                      <div>
                        <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 15 }}>{h.name}</div>
                        <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>📍 {h.city}, {h.state}</div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ fontWeight: 700, color: "#f59e0b", fontSize: 14 }}>★ {h.rating}</div>
                        <div style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>{h.doctors.toLocaleString()} doctors • Free</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
                  <button onClick={() => selHospital && setStep(2)} className="btn-primary" style={{ opacity: !selHospital ? 0.5 : 1 }}>
                    Next: Choose Doctor →
                  </button>
                </div>
              </>
            )}

            {/* ── STEP 2 ── */}
            {step === 2 && (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <h2 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 18 }}>Select Doctor & Slot</h2>
                  <div style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)", borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "#22d3ee" }}>
                    🏥 {hospital?.name}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {doctors.map(d => (
                    <div key={d.id} style={{ border: `1px solid ${selDoctor === d.id ? "rgba(34,211,238,0.3)" : "rgba(255,255,255,0.06)"}`, background: selDoctor === d.id ? "rgba(34,211,238,0.04)" : "transparent", borderRadius: 12, padding: 20 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: selDoctor === d.id ? 16 : 0 }}>
                        <div>
                          <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 15 }}>{d.name}</div>
                          <div style={{ fontSize: 13, color: "#64748b", marginTop: 3 }}>{d.dept} • {d.exp} experience</div>
                        </div>
                        <button onClick={() => { setSelDoctor(d.id); setSelSlot(""); }} style={{
                          background: selDoctor === d.id ? "rgba(34,211,238,0.15)" : "transparent",
                          border: `1px solid ${selDoctor === d.id ? "rgba(34,211,238,0.4)" : "rgba(255,255,255,0.12)"}`,
                          color: selDoctor === d.id ? "#22d3ee" : "#94a3b8",
                          padding: "6px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "Inter, sans-serif"
                        }}>{selDoctor === d.id ? "✓ Selected" : "Select"}</button>
                      </div>
                      {selDoctor === d.id && (
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 10 }}>AVAILABLE SLOTS</div>
                          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            {d.slots.map(sl => (
                              <button key={sl} onClick={() => setSelSlot(sl)} style={{
                                padding: "8px 18px", borderRadius: 8,
                                border: `1px solid ${selSlot === sl ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.1)"}`,
                                background: selSlot === sl ? "rgba(34,211,238,0.12)" : "rgba(255,255,255,0.03)",
                                color: selSlot === sl ? "#22d3ee" : "#94a3b8",
                                fontSize: 13, cursor: "pointer", fontWeight: 600, fontFamily: "Inter, sans-serif"
                              }}>🕐 {sl}</button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
                  <button onClick={() => setStep(1)} className="btn-outline">← Back</button>
                  <button onClick={() => selDoctor && selSlot && setStep(3)} className="btn-primary" style={{ opacity: !selDoctor || !selSlot ? 0.5 : 1 }}>
                    Next: Patient Details →
                  </button>
                </div>
              </>
            )}

            {/* ── STEP 3 ── */}
            {step === 3 && (
              <>
                <h2 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 18, marginBottom: 20 }}>Patient Details</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { key: "name", label: "Full Name *", placeholder: "As per Aadhaar card", type: "text" },
                    { key: "age", label: "Age *", placeholder: "e.g. 35", type: "number" },
                    { key: "phone", label: "Mobile Number *", placeholder: "10-digit number", type: "tel" },
                    { key: "aadhaar", label: "Aadhaar Number (optional)", placeholder: "XXXX XXXX XXXX", type: "text" },
                  ].map(f => (
                    <div key={f.key}>
                      <label>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder}
                        value={(form as Record<string, string>)[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
                    </div>
                  ))}
                  <div>
                    <label>Gender *</label>
                    <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })}>
                      <option value="">Select gender</option>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label>Reason for Visit</label>
                    <input type="text" placeholder="Brief description of symptoms" value={form.reason}
                      onChange={e => setForm({ ...form, reason: e.target.value })} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
                  <button onClick={() => setStep(2)} className="btn-outline">← Back</button>
                  <button onClick={() => form.name && form.phone && form.gender && setStep(4)} className="btn-primary"
                    style={{ opacity: !form.name || !form.phone || !form.gender ? 0.5 : 1 }}>
                    Review & Confirm →
                  </button>
                </div>
              </>
            )}

            {/* ── STEP 4 ── */}
            {step === 4 && (
              <>
                <h2 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 18, marginBottom: 20 }}>Confirm Your Appointment</h2>
                <div style={{ background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.12)", borderRadius: 14, padding: 20, marginBottom: 20 }}>
                  {[
                    { lbl: "Hospital", val: hospital?.name },
                    { lbl: "Doctor", val: `${doctor?.name} (${doctor?.dept})` },
                    { lbl: "Time Slot", val: selSlot },
                    { lbl: "Patient Name", val: form.name },
                    { lbl: "Age / Gender", val: `${form.age} yrs / ${form.gender}` },
                    { lbl: "Mobile", val: `+91 ${form.phone}` },
                    { lbl: "Reason", val: form.reason || "—" },
                    { lbl: "Consultation Fee", val: "FREE ✓", color: "#4ade80" },
                  ].map(r => (
                    <div key={r.lbl} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 14 }}>
                      <span style={{ color: "#64748b", fontWeight: 500 }}>{r.lbl}</span>
                      <span style={{ color: (r as any).color || "#f1f5f9", fontWeight: 600 }}>{r.val}</span>
                    </div>
                  ))}
                </div>

                {/* OTP Block */}
                <div style={{ background: "#0f172a", borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", padding: 22, marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <span style={{ fontSize: 16 }}>🔐</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.07em" }}>Mobile Verification</span>
                    {otpStage === "done" && <span style={{ marginLeft: "auto", fontSize: 12, color: "#4ade80", fontWeight: 700 }}>✅ Verified</span>}
                  </div>

                  {otpStage === "idle" && (
                    <div>
                      <p style={{ fontSize: 14, color: "#64748b", marginBottom: 14, lineHeight: 1.6 }}>
                        We'll send a 6-digit OTP to <strong style={{ color: "#22d3ee" }}>+91 {form.phone}</strong> to confirm this booking.
                      </p>
                      <button onClick={sendOTP} style={{ background: "linear-gradient(135deg,#06b6d4,#0891b2)", border: "none", color: "white", padding: "11px 24px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "Inter, sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>
                        📲 Send OTP
                      </button>
                    </div>
                  )}

                  {otpStage === "sending" && (
                    <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#94a3b8", fontSize: 14 }}>
                      <div className="spinner" /> Sending OTP to +91 {form.phone}…
                    </div>
                  )}

                  {otpStage === "verifying" && (
                    <>
                      <p style={{ fontSize: 13, color: "#64748b", marginBottom: 16 }}>
                        Enter the OTP sent to <strong style={{ color: "#22d3ee" }}>+91 {form.phone}</strong>
                      </p>
                      <OTPBoxes value={otp} onChange={setOtp} hasError={!!otpErr} />
                      {otpErr && (
                        <div style={{ textAlign: "center", marginTop: 10, padding: "8px", background: "rgba(239,68,68,0.08)", borderRadius: 8, fontSize: 13, color: "#f87171" }}>⚠️ {otpErr}</div>
                      )}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
                        <div style={{ fontSize: 13, color: "#64748b" }}>
                          {canResend
                            ? <button onClick={resendOTP} style={{ background: "transparent", border: "none", color: "#22d3ee", cursor: "pointer", fontWeight: 600, fontFamily: "Inter, sans-serif", fontSize: 13 }}>🔄 Resend OTP</button>
                            : <>Resend in <strong style={{ color: "#f1f5f9" }}>00:{String(timer).padStart(2, "0")}</strong></>}
                        </div>
                        <button onClick={verifyOTP} style={{ background: "linear-gradient(135deg,#06b6d4,#0891b2)", border: "none", color: "white", padding: "10px 22px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                          ✅ Verify
                        </button>
                      </div>
                    </>
                  )}

                  {otpStage === "done" && (
                    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 12 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(34,197,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>✅</div>
                      <div>
                        <div style={{ fontWeight: 700, color: "#4ade80", fontSize: 14 }}>Number Verified</div>
                        <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>+91 {form.phone} verified. Ready to confirm your appointment.</div>
                      </div>
                    </div>
                  )}
                </div>

                {saveError && (
                  <div style={{ marginBottom: 16, padding: "12px 16px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 10, color: "#f87171", fontSize: 13 }}>
                    ⚠️ {saveError}
                  </div>
                )}

                <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: 10, padding: 13, fontSize: 13, color: "#86efac", marginBottom: 20 }}>
                  ✅ Free under Ayushman Bharat. A QR code pass will be generated immediately after confirmation.
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button onClick={() => setStep(3)} className="btn-outline">← Back</button>
                  <button onClick={confirmBooking} className="btn-primary"
                    style={{ padding: "12px 28px", opacity: otpStage !== "done" || saving ? 0.45 : 1, cursor: otpStage !== "done" || saving ? "not-allowed" : "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
                    {saving ? <><div className="spinner" /> Saving...</> : "✅ Confirm & Get QR Pass"}
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}