"use client";
import Link from "next/link";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const healthMetrics = [
  { label: "Blood Pressure", value: "128/82", unit: "mmHg", status: "normal", color: "#dc2626" },
  { label: "Blood Sugar", value: "110", unit: "mg/dL", status: "borderline", color: "#d97706" },
  { label: "BMI", value: "24.6", unit: "kg/m²", status: "normal", color: "#15803d" },
  { label: "Hemoglobin", value: "13.2", unit: "g/dL", status: "normal", color: "#0369a1" },
  { label: "Oxygen Level", value: "98", unit: "%", status: "normal", color: "#7c3aed" },
  { label: "Heart Rate", value: "72", unit: "bpm", status: "normal", color: "#be185d" },
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
  { name: "Ayushman Bharat PM-JAY", status: "Active", cover: "₹5,00,000", used: "₹12,400", remaining: "₹4,87,600", color: "#1a3a6b" },
  { name: "National Health Mission", status: "Active", cover: "Unlimited", used: "Free", remaining: "—", color: "#15803d" },
  { name: "ESI Scheme", status: "Not Enrolled", cover: "—", used: "—", remaining: "—", color: "#718096" },
];

const chartStyle = {
  contentStyle: { background: "#fff", border: "1px solid #dde3ed", borderRadius: 6, color: "#1a1a2e", fontSize: 13 },
  labelStyle: { color: "#4a5568" }
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "appointments", label: "Appointments" },
    { id: "prescriptions", label: "Prescriptions" },
    { id: "vaccinations", label: "Vaccinations" },
    { id: "schemes", label: "Health Schemes" },
  ];

  return (
    <div style={{ background: "#f4f6fb", minHeight: "100vh" }}>

      {/* Page Header */}
      <div style={{ background: "#1a3a6b", padding: "28px 24px", borderBottom: "3px solid #122856" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#93b4dc", marginBottom: 8 }}>
            <Link href="/" style={{ color: "#93b4dc", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span>Health Dashboard</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <h1 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: 0 }}>My Health Dashboard</h1>
                <p style={{ color: "#93b4dc", fontSize: 13, marginTop: 2 }}>Personal health overview — Ministry of Health & Family Welfare</p>
              </div>
            </div>
            <Link href="/appointments" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff", fontSize: 13 }}>
              + Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px" }}>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 2, background: "#fff", border: "1px solid #dde3ed", borderRadius: 6, padding: 4, marginBottom: 28, width: "fit-content", flexWrap: "wrap", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              padding: "7px 18px", borderRadius: 4, border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 600, fontFamily: "inherit", transition: "all 0.15s",
              background: activeTab === t.id ? "#1a3a6b" : "transparent",
              color: activeTab === t.id ? "#fff" : "#4a5568",
              whiteSpace: "nowrap"
            }}>{t.label}</button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a3a6b", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.04em" }}>Health Metrics</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12, marginBottom: 28 }}>
              {healthMetrics.map(m => (
                <div key={m.label} className="card" style={{ padding: 16, textAlign: "center", borderTop: `3px solid ${m.color}` }}>
                  <div style={{ fontSize: 11, color: "#718096", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{m.label}</div>
                  <div style={{ fontWeight: 800, color: m.color, fontSize: 22 }}>{m.value}</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 8 }}>{m.unit}</div>
                  <span style={{
                    display: "inline-block", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20,
                    background: m.status === "normal" ? "#f0fdf4" : "#fffbeb",
                    color: m.status === "normal" ? "#15803d" : "#d97706",
                    border: `1px solid ${m.status === "normal" ? "#bbf7d0" : "#fde68a"}`
                  }}>{m.status}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
              <div className="card">
                <h3 style={{ fontWeight: 700, color: "#1a3a6b", marginBottom: 4, fontSize: 15 }}>Blood Pressure History</h3>
                <p style={{ fontSize: 12, color: "#718096", marginBottom: 20 }}>Last 6 months — mmHg</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={bpHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" tick={{ fill: "#718096", fontSize: 12 }} axisLine={false} />
                    <YAxis tick={{ fill: "#718096", fontSize: 11 }} domain={[60, 150]} axisLine={false} />
                    <Tooltip {...chartStyle} />
                    <Line type="monotone" dataKey="systolic" stroke="#dc2626" strokeWidth={2} dot={{ fill: "#dc2626", r: 3 }} name="Systolic" />
                    <Line type="monotone" dataKey="diastolic" stroke="#1a3a6b" strokeWidth={2} dot={{ fill: "#1a3a6b", r: 3 }} name="Diastolic" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="card">
                <h3 style={{ fontWeight: 700, color: "#1a3a6b", marginBottom: 16, fontSize: 15 }}>Quick Summary</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { lbl: "Next Appointment", val: "22 Mar 2026 — Dr. Ramesh Kumar", color: "#1a3a6b" },
                    { lbl: "Active Medications", val: "2 medications", color: "#d97706" },
                    { lbl: "Pending Vaccinations", val: "2 due soon", color: "#dc2626" },
                    { lbl: "Ayushman Cover Left", val: "₹4,87,600 remaining", color: "#15803d" },
                    { lbl: "Last Check-up", val: "05 Mar 2026", color: "#4a5568" },
                    { lbl: "Health Score", val: "78 / 100 — Good", color: "#7c3aed" },
                  ].map((r, i) => (
                    <div key={r.lbl} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: 13 }}>
                      <span style={{ color: "#718096" }}>{r.lbl}</span>
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
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a3a6b", textTransform: "uppercase", letterSpacing: "0.04em" }}>My Appointments</h2>
              <Link href="/appointments" className="btn-primary" style={{ fontSize: 13 }}>+ New Appointment</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {appointments.map((a, i) => (
                <div key={i} className="card" style={{ padding: 20, borderLeft: `3px solid ${a.status === "upcoming" ? "#1a3a6b" : "#dde3ed"}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 15, marginBottom: 4 }}>{a.doctor}</div>
                      <div style={{ fontSize: 13, color: "#718096" }}>{a.dept} — {a.hospital}</div>
                      <div style={{ fontSize: 13, color: "#718096", marginTop: 6 }}>{a.date} &nbsp;|&nbsp; {a.time}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                      <span style={{
                        padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600,
                        background: a.status === "upcoming" ? "#eff6ff" : "#f4f6fb",
                        color: a.status === "upcoming" ? "#1d4ed8" : "#718096",
                        border: `1px solid ${a.status === "upcoming" ? "#bfdbfe" : "#dde3ed"}`
                      }}>
                        {a.status === "upcoming" ? "Upcoming" : "Completed"}
                      </span>
                      {a.status === "upcoming" && (
                        <button style={{ background: "#fff", border: "1px solid #fecaca", color: "#dc2626", padding: "4px 12px", borderRadius: 4, fontSize: 12, cursor: "pointer" }}>Cancel</button>
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
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a3a6b", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.04em" }}>Prescription History</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {prescriptions.map((p, i) => (
                <div key={i} className="card" style={{ padding: 20, borderLeft: `3px solid ${p.active ? "#1a3a6b" : "#dde3ed"}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 15 }}>{p.med}</span>
                        <span style={{
                          padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                          background: p.active ? "#f0fdf4" : "#f4f6fb",
                          color: p.active ? "#15803d" : "#718096",
                          border: `1px solid ${p.active ? "#bbf7d0" : "#dde3ed"}`
                        }}>{p.active ? "Active" : "Expired"}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "#718096" }}>For: {p.for}</div>
                      <div style={{ fontSize: 13, color: "#718096", marginTop: 2 }}>Prescribed by: {p.by}</div>
                    </div>
                    <div style={{ textAlign: "right", fontSize: 13 }}>
                      <div style={{ color: "#718096" }}>Prescribed: <span style={{ color: "#4a5568", fontWeight: 500 }}>{p.date}</span></div>
                      <div style={{ color: "#718096", marginTop: 4 }}>Valid till: <span style={{ color: p.active ? "#1a3a6b" : "#718096", fontWeight: 500 }}>{p.till}</span></div>
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
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a3a6b", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.04em" }}>Vaccination Schedule</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {vaccinations.map((v, i) => (
                <div key={i} className="card" style={{ padding: 18, borderLeft: `3px solid ${v.status === "done" ? "#15803d" : "#d97706"}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: v.status === "done" ? "#f0fdf4" : "#fffbeb", border: `1px solid ${v.status === "done" ? "#bbf7d0" : "#fde68a"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                        {v.status === "done" ? "✓" : "!"}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: "#1a1a2e", fontSize: 14 }}>{v.name}</div>
                        <div style={{ fontSize: 12, color: "#718096", marginTop: 2 }}>
                          {v.status === "done" ? `Administered: ${v.date}` : `Due: ${v.due}`}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{
                        padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600,
                        background: v.status === "done" ? "#f0fdf4" : "#fffbeb",
                        color: v.status === "done" ? "#15803d" : "#d97706",
                        border: `1px solid ${v.status === "done" ? "#bbf7d0" : "#fde68a"}`
                      }}>
                        {v.status === "done" ? "Completed" : "Due Soon"}
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
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a3a6b", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.04em" }}>Government Health Schemes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {schemes.map((s, i) => (
                <div key={i} className="card" style={{ padding: 24, borderLeft: `3px solid ${s.color}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 16 }}>{s.name}</span>
                        <span style={{
                          padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                          background: s.status === "Active" ? "#f0fdf4" : "#f4f6fb",
                          color: s.status === "Active" ? "#15803d" : "#718096",
                          border: `1px solid ${s.status === "Active" ? "#bbf7d0" : "#dde3ed"}`
                        }}>{s.status}</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,160px)", gap: 20 }}>
                        {[
                          { lbl: "Total Cover", val: s.cover },
                          { lbl: "Used This Year", val: s.used },
                          { lbl: "Remaining", val: s.remaining },
                        ].map(r => (
                          <div key={r.lbl}>
                            <div style={{ fontSize: 11, color: "#718096", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600 }}>{r.lbl}</div>
                            <div style={{ fontWeight: 700, color: s.color, fontSize: 16 }}>{r.val}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: "14px 18px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 6, fontSize: 13, color: "#1d4ed8" }}>
              To enroll in new schemes or check eligibility, visit your nearest government hospital or call <strong>1800-111-565</strong>.
            </div>
          </>
        )}
      </div>
    </div>
  );
}