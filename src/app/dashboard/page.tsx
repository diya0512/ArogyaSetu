"use client";
import Link from "next/link";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const healthMetrics = [
  { label: "Blood Pressure", value: "128/82", unit: "mmHg", status: "normal", icon: "❤️", color: "#ef4444" },
  { label: "Blood Sugar", value: "110", unit: "mg/dL", status: "borderline", icon: "🩸", color: "#f59e0b" },
  { label: "BMI", value: "24.6", unit: "kg/m²", status: "normal", icon: "⚖️", color: "#22c55e" },
  { label: "Hemoglobin", value: "13.2", unit: "g/dL", status: "normal", icon: "🔬", color: "#06b6d4" },
  { label: "Oxygen Level", value: "98", unit: "%", status: "normal", icon: "💨", color: "#8b5cf6" },
  { label: "Heart Rate", value: "72", unit: "bpm", status: "normal", icon: "💓", color: "#ec4899" },
];

const bpHistory = [
  { date: "Oct", systolic: 135, diastolic: 88 },
  { date: "Nov", systolic: 130, diastolic: 85 },
  { date: "Dec", systolic: 132, diastolic: 84 },
  { date: "Jan", systolic: 128, diastolic: 83 },
  { date: "Feb", systolic: 126, diastolic: 82 },
  { date: "Mar", systolic: 128, diastolic: 82 },
];

const vaccinations = [
  { name: "COVID-19 (Booster)", date: "12 Jan 2025", status: "done", due: "" },
  { name: "Influenza (Flu Shot)", date: "15 Oct 2024", status: "done", due: "" },
  { name: "Hepatitis B (Dose 3)", date: "22 Mar 2024", status: "done", due: "" },
  { name: "Typhoid", date: "—", status: "due", due: "22 Mar 2026" },
  { name: "Tetanus (Td Booster)", date: "—", status: "due", due: "Jun 2026" },
];

const prescriptions = [
  { med: "Metformin 500mg", for: "Type 2 Diabetes", by: "Dr. Anil Mehta", date: "10 Mar 2026", till: "10 Jun 2026", active: true },
  { med: "Amlodipine 5mg", for: "Hypertension", by: "Dr. Ramesh Kumar", date: "28 Feb 2026", till: "28 May 2026", active: true },
  { med: "Vitamin D3 (60K)", for: "Deficiency", by: "Dr. Sunita Sharma", date: "15 Feb 2026", till: "15 Apr 2026", active: false },
];

const appointments = [
  { hospital: "AIIMS New Delhi", doctor: "Dr. Ramesh Kumar", dept: "Cardiology", date: "22 Mar 2026", time: "10:30 AM", status: "upcoming" },
  { hospital: "Safdarjung Hospital", doctor: "Dr. Anil Mehta", dept: "General Medicine", date: "05 Mar 2026", time: "9:00 AM", status: "completed" },
  { hospital: "AIIMS New Delhi", doctor: "Dr. Sunita Sharma", dept: "Neurology", date: "12 Jan 2026", time: "11:00 AM", status: "completed" },
];

const schemes = [
  { name: "Ayushman Bharat PM-JAY", status: "Active", cover: "₹5,00,000", used: "₹12,400", remaining: "₹4,87,600", color: "#22d3ee" },
  { name: "National Health Mission", status: "Active", cover: "Unlimited", used: "Free", remaining: "—", color: "#22c55e" },
  { name: "ESI Scheme", status: "Not Enrolled", cover: "—", used: "—", remaining: "—", color: "#64748b" },
];

const chartStyle = {
  contentStyle: { background: "#1e293b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#f1f5f9" },
  labelStyle: { color: "#94a3b8" }
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "📊 Overview" },
    { id: "appointments", label: "📅 Appointments" },
    { id: "prescriptions", label: "💊 Prescriptions" },
    { id: "vaccinations", label: "💉 Vaccinations" },
    { id: "schemes", label: "🏥 Schemes" },
  ];

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ fontSize: 13, color: "#64748b", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
        <Link href="/" style={{ color: "#22d3ee", textDecoration: "none" }}>Home</Link>
        <span>›</span><span>Health Dashboard</span>
      </div>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg,#06b6d4,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>👤</div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", margin: 0 }}>Health Dashboard</h1>
            <p style={{ color: "#64748b", fontSize: 14, marginTop: 4 }}>Welcome, Citizen. Here is your personal health overview.</p>
          </div>
        </div>
        <Link href="/appointments" className="btn-primary">+ Book Appointment</Link>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, background: "#1e293b", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 4, marginBottom: 32, width: "fit-content", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
            padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
            background: activeTab === t.id ? "linear-gradient(135deg,#06b6d4,#3b82f6)" : "transparent",
            color: activeTab === t.id ? "white" : "#64748b", whiteSpace: "nowrap"
          }}>{t.label}</button>
        ))}
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === "overview" && (
        <>
          {/* Health Metrics */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 16 }}>Health Metrics</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14, marginBottom: 32 }}>
            {healthMetrics.map(m => (
              <div key={m.label} className="card card-hover" style={{ padding: 18, textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{m.icon}</div>
                <div style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>{m.label}</div>
                <div style={{ fontWeight: 800, color: m.color, fontSize: 20 }}>{m.value}</div>
                <div style={{ fontSize: 11, color: "#475569" }}>{m.unit}</div>
                <span style={{
                  display: "inline-block", marginTop: 8, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20,
                  background: m.status === "normal" ? "rgba(34,197,94,0.12)" : "rgba(245,158,11,0.12)",
                  color: m.status === "normal" ? "#4ade80" : "#fbbf24"
                }}>{m.status}</span>
              </div>
            ))}
          </div>

          {/* BP Chart */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
            <div className="card">
              <h3 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Blood Pressure History</h3>
              <p style={{ fontSize: 12, color: "#64748b", marginBottom: 20 }}>Last 6 months — mmHg</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={bpHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="date" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} />
                  <YAxis tick={{ fill: "#64748b", fontSize: 11 }} domain={[60, 150]} axisLine={false} />
                  <Tooltip {...chartStyle} />
                  <Line type="monotone" dataKey="systolic" stroke="#ef4444" strokeWidth={2} dot={{ fill: "#ef4444", r: 4 }} name="Systolic" />
                  <Line type="monotone" dataKey="diastolic" stroke="#22d3ee" strokeWidth={2} dot={{ fill: "#22d3ee", r: 4 }} name="Diastolic" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Info */}
            <div className="card">
              <h3 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 16 }}>Quick Summary</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { lbl: "Next Appointment", val: "22 Mar 2026 — Dr. Ramesh Kumar", color: "#22d3ee" },
                  { lbl: "Active Medications", val: "2 medications", color: "#f59e0b" },
                  { lbl: "Pending Vaccinations", val: "2 due soon", color: "#f87171" },
                  { lbl: "Ayushman Cover Left", val: "₹4,87,600 remaining", color: "#4ade80" },
                  { lbl: "Last Check-up", val: "05 Mar 2026", color: "#94a3b8" },
                  { lbl: "Health Score", val: "78 / 100 (Good)", color: "#a78bfa" },
                ].map(r => (
                  <div key={r.lbl} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 13 }}>
                    <span style={{ color: "#64748b" }}>{r.lbl}</span>
                    <span style={{ color: r.color, fontWeight: 600 }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* APPOINTMENTS TAB */}
      {activeTab === "appointments" && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9" }}>My Appointments</h2>
            <Link href="/appointments" className="btn-primary">+ New Appointment</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {appointments.map((a, i) => (
              <div key={i} className="card card-hover" style={{ padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 16, marginBottom: 4 }}>{a.doctor}</div>
                    <div style={{ fontSize: 13, color: "#64748b" }}>{a.dept} — {a.hospital}</div>
                    <div style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>📅 {a.date} &nbsp; 🕐 {a.time}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
                    <span style={{
                      padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                      background: a.status === "upcoming" ? "rgba(34,211,238,0.12)" : "rgba(255,255,255,0.06)",
                      color: a.status === "upcoming" ? "#22d3ee" : "#64748b",
                      border: a.status === "upcoming" ? "1px solid rgba(34,211,238,0.3)" : "1px solid rgba(255,255,255,0.08)"
                    }}>
                      {a.status === "upcoming" ? "🔵 Upcoming" : "✓ Completed"}
                    </span>
                    {a.status === "upcoming" && (
                      <button style={{ background: "transparent", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171", padding: "4px 12px", borderRadius: 6, fontSize: 12, cursor: "pointer" }}>Cancel</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* PRESCRIPTIONS TAB */}
      {activeTab === "prescriptions" && (
        <>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 20 }}>Prescription History</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {prescriptions.map((p, i) => (
              <div key={i} className="card card-hover" style={{ padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 16 }}>💊 {p.med}</span>
                      <span style={{
                        padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                        background: p.active ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.06)",
                        color: p.active ? "#4ade80" : "#64748b"
                      }}>{p.active ? "Active" : "Expired"}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#64748b" }}>For: {p.for}</div>
                    <div style={{ fontSize: 13, color: "#64748b", marginTop: 3 }}>Prescribed by: {p.by}</div>
                  </div>
                  <div style={{ textAlign: "right", fontSize: 13 }}>
                    <div style={{ color: "#64748b" }}>Prescribed: <span style={{ color: "#94a3b8" }}>{p.date}</span></div>
                    <div style={{ color: "#64748b", marginTop: 4 }}>Valid till: <span style={{ color: p.active ? "#22d3ee" : "#64748b" }}>{p.till}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* VACCINATIONS TAB */}
      {activeTab === "vaccinations" && (
        <>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 20 }}>Vaccination Schedule</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {vaccinations.map((v, i) => (
              <div key={i} className="card card-hover" style={{ padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: v.status === "done" ? "rgba(34,197,94,0.12)" : "rgba(245,158,11,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                      {v.status === "done" ? "✅" : "⏰"}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 14 }}>{v.name}</div>
                      <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
                        {v.status === "done" ? `Administered: ${v.date}` : `Due: ${v.due}`}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{
                      padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                      background: v.status === "done" ? "rgba(34,197,94,0.12)" : "rgba(245,158,11,0.12)",
                      color: v.status === "done" ? "#4ade80" : "#fbbf24"
                    }}>
                      {v.status === "done" ? "✓ Done" : "Due Soon"}
                    </span>
                    {v.status === "due" && (
                      <Link href="/appointments" className="btn-primary" style={{ fontSize: 12, padding: "6px 14px" }}>Book Slot</Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* SCHEMES TAB */}
      {activeTab === "schemes" && (
        <>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 20 }}>Government Health Schemes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {schemes.map((s, i) => (
              <div key={i} className="card card-hover" style={{ padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 16 }}>{s.name}</span>
                      <span style={{
                        padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                        background: s.status === "Active" ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.06)",
                        color: s.status === "Active" ? "#4ade80" : "#64748b"
                      }}>{s.status}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,160px)", gap: 16 }}>
                      {[
                        { lbl: "Total Cover", val: s.cover },
                        { lbl: "Used This Year", val: s.used },
                        { lbl: "Remaining", val: s.remaining },
                      ].map(r => (
                        <div key={r.lbl}>
                          <div style={{ fontSize: 11, color: "#64748b", marginBottom: 3 }}>{r.lbl}</div>
                          <div style={{ fontWeight: 700, color: s.color, fontSize: 16 }}>{r.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, padding: 16, background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.12)", borderRadius: 12, fontSize: 13, color: "#94a3b8" }}>
            💡 To enroll in new schemes or check eligibility, visit your nearest government hospital or call <strong style={{ color: "#22d3ee" }}>1800-111-565</strong>.
          </div>
        </>
      )}
    </div>
  );
}
