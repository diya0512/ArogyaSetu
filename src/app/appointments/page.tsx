"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

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

function BookingQR({ bookingId }: { bookingId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const SIZE = 180; const M = 21; const CELL = SIZE / M;
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, SIZE, SIZE);
    const hash = (s: string, r: number, c: number) => {
      let h = 0;
      for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
      return Math.abs(h ^ (r * 1234567) ^ (c * 9876543)) % 3 !== 0;
    };
    for (let r = 0; r < M; r++) {
      for (let c = 0; c < M; c++) {
        const tl = r < 7 && c < 7, tr = r < 7 && c >= M - 7, bl = r >= M - 7 && c < 7;
        let dark = false;
        if (tl || tr || bl) {
          const lr = tl ? r : tr ? r : r - (M - 7), lc = tl ? c : tr ? c - (M - 7) : c;
          if (lr === 0 || lr === 6 || lc === 0 || lc === 6) dark = true;
          else if (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4) dark = true;
        } else { dark = hash(bookingId, r, c); }
        if (dark) {
          ctx.fillStyle = "#0f2d52";
          const x = c * CELL + 1, y = r * CELL + 1, s = CELL - 2;
          ctx.beginPath(); ctx.roundRect(x, y, s, s, 1); ctx.fill();
        }
      }
    }
    const cx = SIZE / 2, cy = SIZE / 2;
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.roundRect(cx - 14, cy - 14, 28, 28, 4); ctx.fill();
    ctx.fillStyle = "#0f2d52"; ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText("GOI", cx, cy);
  }, [bookingId]);
  return <canvas ref={canvasRef} width={SIZE} height={SIZE} style={{ display: "block", imageRendering: "pixelated" }} />;
}

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
            width: 48, height: 52, textAlign: "center", fontSize: 20, fontWeight: 700,
            background: "#fff",
            border: `2px solid ${hasError ? "#fca5a5" : digit ? "#0f2d52" : "#e2e8f0"}`,
            borderRadius: 6, color: digit ? "#0f2d52" : "#111827",
            outline: "none", caretColor: "#0f2d52", padding: 0,
            transition: "border-color 0.15s", boxSizing: "border-box"
          }} />
      ))}
    </div>
  );
}

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
      setTimer(t => { if (t <= 1) { clearInterval(timerRef.current!); setCanResend(true); return 0; } return t - 1; });
    }, 1000);
  };

  // ── Send OTP via Twilio ──
  const sendOTP = async () => {
    setOtpStage("sending"); setOtpErr("");
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: form.phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send OTP");
      setOtp(["", "", "", "", "", ""]);
      setOtpStage("verifying");
      startTimer();
    } catch (e: any) {
      setOtpErr(e.message || "Failed to send OTP. Please check the phone number.");
      setOtpStage("idle");
    }
  };

  // ── Verify OTP via Twilio ──
  const verifyOTP = async () => {
    const code = otp.join("");
    if (code.length < 6) { setOtpErr("Please enter the complete 6-digit OTP."); return; }
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: form.phone, code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Invalid OTP");
      clearInterval(timerRef.current!);
      setOtpStage("done");
    } catch (e: any) {
      setOtpErr(e.message || "Incorrect OTP. Please try again.");
    }
  };

  const resendOTP = () => {
    setOtp(["", "", "", "", "", ""]); setOtpErr("");
    sendOTP();
  };

  const confirmBooking = async () => {
    if (otpStage !== "done") return;
    setSaving(true); setSaveError("");
    try {
      await addDoc(collection(db, "appointments"), {
        bookingId, bookingDate,
        hospital: hospital?.name, hospitalCity: hospital?.city, hospitalState: hospital?.state,
        doctor: doctor?.name, department: doctor?.dept, slot: selSlot,
        patientName: form.name, patientAge: form.age, patientGender: form.gender,
        patientPhone: form.phone, patientAadhaar: form.aadhaar || null,
        reason: form.reason || null, status: "confirmed", createdAt: new Date().toISOString(),
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
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .appt-spinner { width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite; }
        .confirmed-wrap { animation: fadeIn 0.4s ease both; }
      `}</style>

      {/* Page Header */}
      <div style={{ background: "#0f2d52", padding: "28px 24px", borderBottom: "3px solid #c6902a" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span>Book Appointment</span>
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, fontWeight: 400, color: "#fff", margin: 0 }}>Book a Free Appointment</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 4 }}>OTP-verified bookings • QR code pass • Zero cost for every Indian citizen</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px", background: "#f7f8fa", minHeight: "70vh" }}>

        {/* Step Indicator */}
        {!booked && (
          <div style={{ display: "flex", alignItems: "center", marginBottom: 28, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "16px 24px" }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 13,
                    background: step > s.num ? "#14532d" : step === s.num ? "#0f2d52" : "#f7f8fa",
                    color: step >= s.num ? "#fff" : "#9ca3af",
                    border: step < s.num ? "1px solid #e2e8f0" : "none"
                  }}>{step > s.num ? "✓" : s.num}</div>
                  <span style={{ fontSize: 13, fontWeight: step === s.num ? 700 : 500, color: step >= s.num ? "#0f2d52" : "#9ca3af", whiteSpace: "nowrap" }}>{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ flex: 1, height: 1.5, background: step > s.num ? "#14532d" : "#e2e8f0", margin: "0 12px", borderRadius: 1 }} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* CONFIRMED */}
        {booked ? (
          <div className="confirmed-wrap">
            <div style={{ textAlign: "center", marginBottom: 24, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "32px 24px" }}>
              <div style={{ width: 56, height: 56, background: "#f0fdf4", border: "2px solid #bbf7d0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: 24 }}>✓</div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: "#0f2d52", marginBottom: 6 }}>Appointment Confirmed!</h2>
              <p style={{ color: "#6b7280", fontSize: 14 }}>Your booking has been saved. Show the QR code at the hospital counter.</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "#14532d", fontWeight: 600 }}>
                ✓ Saved to database
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
              <div className="card">
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Booking Details</div>
                {[
                  { lbl: "Hospital", val: hospital?.name },
                  { lbl: "Doctor", val: doctor?.name },
                  { lbl: "Department", val: doctor?.dept },
                  { lbl: "Date", val: bookingDate },
                  { lbl: "Time", val: selSlot },
                  { lbl: "Patient", val: form.name },
                  { lbl: "Mobile", val: `+91 ${form.phone}` },
                  { lbl: "Consultation Fee", val: "FREE", color: "#14532d" },
                ].map(r => (
                  <div key={r.lbl} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f7f8fa", fontSize: 13 }}>
                    <span style={{ color: "#6b7280" }}>{r.lbl}</span>
                    <span style={{ color: (r as any).color || "#111827", fontWeight: 600, textAlign: "right" }}>{r.val}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Digital Pass</div>
                <div style={{ display: "inline-block", padding: 12, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 6 }}>
                  <BookingQR bookingId={bookingId} />
                </div>
                <div style={{ marginTop: 14, padding: "10px 14px", background: "#e8eef7", border: "1px solid #c3d0e8", borderRadius: 6 }}>
                  <div style={{ fontSize: 10, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Booking ID</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0f2d52", letterSpacing: 2 }}>{bookingId}</div>
                </div>
                <div style={{ marginTop: 10, fontSize: 12, color: "#6b7280", lineHeight: 1.6 }}>
                  OTP Verified • Valid for this visit only<br />Present at hospital reception
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 20 }}>
              <Link href="/" className="btn-primary">Back to Home</Link>
              <Link href="/hospitals" className="btn-outline">View Hospitals</Link>
            </div>
          </div>

        ) : (
          <div className="card">

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <h2 style={{ fontWeight: 600, color: "#0f2d52", fontSize: 17, marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>Select Hospital</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {hospitals.map(h => (
                    <div key={h.id} onClick={() => setSelHospital(h.id)} style={{
                      border: `1.5px solid ${selHospital === h.id ? "#0f2d52" : "#e2e8f0"}`,
                      background: selHospital === h.id ? "#e8eef7" : "#fff",
                      borderRadius: 6, padding: "14px 18px", cursor: "pointer", transition: "all 0.15s",
                      display: "flex", justifyContent: "space-between", alignItems: "center"
                    }}>
                      <div>
                        <div style={{ fontWeight: 600, color: "#111827", fontSize: 14 }}>{h.name}</div>
                        <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{h.city}, {h.state}</div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ fontWeight: 700, color: "#c6902a", fontSize: 13 }}>★ {h.rating}</div>
                        <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{h.doctors.toLocaleString()} doctors • Free</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, paddingTop: 16, borderTop: "1px solid #f1f5f9" }}>
                  <button onClick={() => selHospital && setStep(2)} className="btn-primary" style={{ opacity: !selHospital ? 0.5 : 1 }}>
                    Next: Choose Doctor →
                  </button>
                </div>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
                  <h2 style={{ fontWeight: 600, color: "#0f2d52", fontSize: 17 }}>Select Doctor & Slot</h2>
                  <div style={{ background: "#e8eef7", border: "1px solid #c3d0e8", borderRadius: 4, padding: "4px 12px", fontSize: 12, color: "#0f2d52", fontWeight: 600 }}>
                    {hospital?.name}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {doctors.map(d => (
                    <div key={d.id} style={{ border: `1.5px solid ${selDoctor === d.id ? "#0f2d52" : "#e2e8f0"}`, background: selDoctor === d.id ? "#e8eef7" : "#fff", borderRadius: 6, padding: 18 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: selDoctor === d.id ? 14 : 0 }}>
                        <div>
                          <div style={{ fontWeight: 600, color: "#111827", fontSize: 14 }}>{d.name}</div>
                          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{d.dept} • {d.exp} experience</div>
                        </div>
                        <button onClick={() => { setSelDoctor(d.id); setSelSlot(""); }} style={{
                          background: selDoctor === d.id ? "#0f2d52" : "#fff",
                          border: `1px solid ${selDoctor === d.id ? "#0f2d52" : "#e2e8f0"}`,
                          color: selDoctor === d.id ? "#fff" : "#374151",
                          padding: "5px 14px", borderRadius: 4, cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit"
                        }}>{selDoctor === d.id ? "✓ Selected" : "Select"}</button>
                      </div>
                      {selDoctor === d.id && (
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Available Slots</div>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {d.slots.map(sl => (
                              <button key={sl} onClick={() => setSelSlot(sl)} style={{
                                padding: "6px 16px", borderRadius: 4,
                                border: `1.5px solid ${selSlot === sl ? "#0f2d52" : "#e2e8f0"}`,
                                background: selSlot === sl ? "#0f2d52" : "#fff",
                                color: selSlot === sl ? "#fff" : "#374151",
                                fontSize: 13, cursor: "pointer", fontWeight: 500, fontFamily: "inherit"
                              }}>{sl}</button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, paddingTop: 16, borderTop: "1px solid #f1f5f9" }}>
                  <button onClick={() => setStep(1)} className="btn-outline">← Back</button>
                  <button onClick={() => selDoctor && selSlot && setStep(3)} className="btn-primary" style={{ opacity: !selDoctor || !selSlot ? 0.5 : 1 }}>
                    Next: Patient Details →
                  </button>
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h2 style={{ fontWeight: 600, color: "#0f2d52", fontSize: 17, marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>Patient Details</h2>
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
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, paddingTop: 16, borderTop: "1px solid #f1f5f9" }}>
                  <button onClick={() => setStep(2)} className="btn-outline">← Back</button>
                  <button onClick={() => form.name && form.phone && form.gender && setStep(4)} className="btn-primary"
                    style={{ opacity: !form.name || !form.phone || !form.gender ? 0.5 : 1 }}>
                    Review & Confirm →
                  </button>
                </div>
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <h2 style={{ fontWeight: 600, color: "#0f2d52", fontSize: 17, marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>Review & Confirm</h2>

                <div style={{ background: "#f7f8fa", border: "1px solid #e2e8f0", borderRadius: 6, padding: 18, marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Appointment Summary</div>
                  {[
                    { lbl: "Hospital", val: hospital?.name },
                    { lbl: "Doctor", val: `${doctor?.name} (${doctor?.dept})` },
                    { lbl: "Time Slot", val: selSlot },
                    { lbl: "Patient Name", val: form.name },
                    { lbl: "Age / Gender", val: `${form.age} yrs / ${form.gender}` },
                    { lbl: "Mobile", val: `+91 ${form.phone}` },
                    { lbl: "Reason", val: form.reason || "—" },
                    { lbl: "Consultation Fee", val: "FREE", color: "#14532d" },
                  ].map(r => (
                    <div key={r.lbl} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f1f5f9", fontSize: 13 }}>
                      <span style={{ color: "#6b7280" }}>{r.lbl}</span>
                      <span style={{ color: (r as any).color || "#111827", fontWeight: 600 }}>{r.val}</span>
                    </div>
                  ))}
                </div>

                {/* OTP Section */}
                <div style={{ background: "#f7f8fa", border: "1px solid #e2e8f0", borderRadius: 6, padding: 20, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <div style={{ width: 28, height: 28, background: "#e8eef7", border: "1px solid #c3d0e8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f2d52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#0f2d52", textTransform: "uppercase", letterSpacing: "0.06em" }}>Mobile Verification</span>
                    {otpStage === "done" && <span style={{ marginLeft: "auto", fontSize: 12, color: "#14532d", fontWeight: 700, background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "2px 10px", borderRadius: 20 }}>✓ Verified</span>}
                  </div>

                  {otpStage === "idle" && (
                    <div>
                      <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 14, lineHeight: 1.6 }}>
                        A 6-digit OTP will be sent to <strong style={{ color: "#0f2d52" }}>+91 {form.phone}</strong> to confirm this booking.
                      </p>
                      <button onClick={sendOTP} className="btn-primary" style={{ fontSize: 13 }}>Send OTP</button>
                    </div>
                  )}

                  {otpStage === "sending" && (
                    <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#6b7280", fontSize: 13 }}>
                      <div className="appt-spinner" style={{ borderColor: "#e2e8f0", borderTopColor: "#0f2d52" }} />
                      Sending OTP to +91 {form.phone}...
                    </div>
                  )}

                  {otpStage === "verifying" && (
                    <>
                      <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}>
                        Enter the OTP sent to <strong style={{ color: "#0f2d52" }}>+91 {form.phone}</strong>
                      </p>
                      <OTPBoxes value={otp} onChange={setOtp} hasError={!!otpErr} />
                      {otpErr && (
                        <div style={{ textAlign: "center", marginTop: 10, padding: "8px 12px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, fontSize: 13, color: "#dc2626" }}>
                          {otpErr}
                        </div>
                      )}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
                        <div style={{ fontSize: 13, color: "#6b7280" }}>
                          {canResend
                            ? <button onClick={resendOTP} style={{ background: "none", border: "none", color: "#0f2d52", cursor: "pointer", fontWeight: 600, fontFamily: "inherit", fontSize: 13 }}>Resend OTP</button>
                            : <>Resend in <strong style={{ color: "#0f2d52" }}>00:{String(timer).padStart(2, "0")}</strong></>}
                        </div>
                        <button onClick={verifyOTP} className="btn-primary" style={{ fontSize: 13 }}>Verify OTP</button>
                      </div>
                    </>
                  )}

                  {otpStage === "done" && (
                    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#dcfce7", border: "1px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>✓</div>
                      <div>
                        <div style={{ fontWeight: 600, color: "#14532d", fontSize: 13 }}>Mobile Verified</div>
                        <div style={{ fontSize: 12, color: "#6b7280", marginTop: 1 }}>+91 {form.phone} has been verified successfully.</div>
                      </div>
                    </div>
                  )}
                </div>

                {saveError && (
                  <div style={{ marginBottom: 14, padding: "10px 14px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, color: "#dc2626", fontSize: 13 }}>
                    {saveError}
                  </div>
                )}

                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6, padding: "10px 14px", fontSize: 13, color: "#14532d", marginBottom: 18 }}>
                  This appointment is free under Ayushman Bharat. A QR code pass will be generated after confirmation.
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid #f1f5f9" }}>
                  <button onClick={() => setStep(3)} className="btn-outline">← Back</button>
                  <button onClick={confirmBooking} className="btn-primary"
                    style={{ opacity: otpStage !== "done" || saving ? 0.5 : 1, cursor: otpStage !== "done" || saving ? "not-allowed" : "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
                    {saving ? <><div className="appt-spinner" /> Saving...</> : "Confirm & Get QR Pass"}
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
