"use client";
import Link from "next/link";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from "recharts";

const diseases = [
  { name: "Dengue Fever", risk: "HIGH RISK", riskLevel: "high", cases: "48,230", deaths: "142", recovered: "45,100", icon: "" },
  { name: "Tuberculosis", risk: "HIGH RISK", riskLevel: "high", cases: "21,00,000", deaths: "61,000", recovered: "19,00,000", icon: "" },
  { name: "Malaria", risk: "MEDIUM RISK", riskLevel: "medium", cases: "1,67,000", deaths: "380", recovered: "1,63,000", icon: "" },
  { name: "COVID-19", risk: "LOW RISK", riskLevel: "low", cases: "12,400", deaths: "8", recovered: "12,100", icon: "" },
  { name: "Typhoid", risk: "MEDIUM RISK", riskLevel: "medium", cases: "92,000", deaths: "220", recovered: "89,000", icon: "" },
  { name: "Cholera", risk: "MEDIUM RISK", riskLevel: "medium", cases: "3,200", deaths: "18", recovered: "3,100", icon: "" },
  { name: "Influenza (H3N2)", risk: "MEDIUM RISK", riskLevel: "medium", cases: "28,400", deaths: "22", recovered: "28,200", icon: "" },
  { name: "Japanese Encephalitis", risk: "HIGH RISK", riskLevel: "high", cases: "1,840", deaths: "312", recovered: "1,480", icon: "" },
];

const trendData = [
  { month: "Oct", cases: 380000 }, { month: "Nov", cases: 420000 }, { month: "Dec", cases: 390000 },
  { month: "Jan", cases: 450000 }, { month: "Feb", cases: 470000 }, { month: "Mar", cases: 440000 }, { month: "Apr", cases: 460000 },
];

const pieData = [
  { name: "Tuberculosis", value: 2100000, color: "#ef4444" },
  { name: "Malaria", value: 167000, color: "#f59e0b" },
  { name: "Dengue", value: 48230, color: "#22d3ee" },
  { name: "Typhoid", value: 92000, color: "#22c55e" },
  { name: "Others", value: 33000, color: "#64748b" },
];

const barData = [
  { month: "Oct", Dengue: 8200, Malaria: 22000, TB: 180000 },
  { month: "Nov", Dengue: 9800, Malaria: 25000, TB: 185000 },
  { month: "Dec", Dengue: 11200, Malaria: 23000, TB: 190000 },
  { month: "Jan", Dengue: 13400, Malaria: 28000, TB: 195000 },
  { month: "Feb", Dengue: 10800, Malaria: 26000, TB: 200000 },
  { month: "Mar", Dengue: 12400, Malaria: 27000, TB: 210000 },
];

const symptoms = [
  { disease: "Dengue", symptoms: ["High fever (104°F)", "Severe headache", "Eye pain", "Joint/muscle pain", "Skin rash", "Nausea"], treatment: "Supportive care, fluids, paracetamol. Avoid aspirin/ibuprofen.", prevention: "Mosquito repellent, eliminate standing water, use nets." },
  { disease: "Malaria", symptoms: ["Cyclic fever & chills", "Sweating", "Headache", "Muscle aches", "Fatigue", "Nausea/vomiting"], treatment: "Antimalarial drugs (chloroquine, artemisinin). Early diagnosis critical.", prevention: "Bed nets, repellents, prophylactic antimalarials while travelling." },
  { disease: "Cholera", symptoms: ["Watery diarrhea", "Vomiting", "Leg cramps", "Rapid dehydration", "Dry mouth", "Low blood pressure"], treatment: "Oral rehydration salts (ORS), IV fluids in severe cases, antibiotics.", prevention: "Safe drinking water, proper sanitation, food hygiene, vaccination." },
];

const riskBadgeStyle = (level: string) => {
  if (level === "high") return { background: "rgba(239,68,68,0.15)", color: "#f87171", border: "1px solid rgba(239,68,68,0.3)" };
  if (level === "medium") return { background: "rgba(245,158,11,0.15)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.3)" };
  return { background: "rgba(34,197,94,0.15)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" };
};

const chartTooltipStyle = {
  contentStyle: { background: "#1e293b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#f1f5f9" },
  labelStyle: { color: "#94a3b8" }
};

export default function DiseaseTrackerPage() {
  const [activeTab, setActiveTab] = useState<"tracker" | "checker">("tracker");
  const [checkerStep, setCheckerStep] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const commonSymptoms = ["Fever", "Headache", "Cough", "Fatigue", "Nausea", "Vomiting", "Diarrhea", "Rash", "Body ache", "Chills", "Sore throat", "Breathlessness"];

  const toggleSymptom = (s: string) => {
    setSelectedSymptoms(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ fontSize: 13, color: "#64748b", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
        <Link href="/" style={{ color: "#22d3ee", textDecoration: "none" }}>Home</Link>
        <span>›</span><span>AI Disease Tracker</span>
      </div>

      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 24, padding: "6px 16px", fontSize: 12, color: "#a78bfa", marginBottom: 16, fontWeight: 600 }}>
        🤖 AI-Powered Disease Intelligence
      </div>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>National Disease Surveillance</h1>
      <p style={{ color: "#64748b", fontSize: 15, marginBottom: 4 }}>Real-time outbreak tracking across all states. AI symptom checker. Disease trend analysis powered by ICMR data.</p>
      <p style={{ fontSize: 12, color: "#475569", marginBottom: 32 }}>🔴 Live Data — Updated 17/3/2026</p>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, background: "#1e293b", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 4, width: "fit-content", marginBottom: 32 }}>
        {[["tracker", " Disease Tracker"], ["checker", " AI Symptom Checker"]].map(([tab, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab as "tracker" | "checker")} style={{
            padding: "10px 24px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600,
            background: activeTab === tab ? "linear-gradient(135deg,#06b6d4,#3b82f6)" : "transparent",
            color: activeTab === tab ? "white" : "#64748b", transition: "all 0.2s"
          }}>{label}</button>
        ))}
      </div>

      {activeTab === "tracker" && (
        <>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9", marginBottom: 20 }}>Active Disease Alerts</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 40 }}>
            {diseases.map(d => (
              <div key={d.name} className="card card-hover" style={{ padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{ fontSize: 24 }}>{d.icon}</span>
                  <span style={{ ...riskBadgeStyle(d.riskLevel), fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 20 }}>{d.risk}</span>
                </div>
                <h3 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 14, marginBottom: 12 }}>{d.name}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[{ lbl: "Cases", val: d.cases, color: "#22d3ee" }, { lbl: "Deaths", val: d.deaths, color: "#f87171" }, { lbl: "Recovered", val: d.recovered, color: "#4ade80" }].map(r => (
                    <div key={r.lbl} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                      <span style={{ color: "#64748b" }}>{r.lbl}</span>
                      <span style={{ fontWeight: 700, color: r.color }}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <div className="card">
              <h3 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Disease Trend — Last 7 Months</h3>
              <p style={{ fontSize: 12, color: "#64748b", marginBottom: 20 }}>Cumulative active cases across India</p>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} />
                  <YAxis tick={{ fill: "#64748b", fontSize: 11 }} tickFormatter={v => `${(v/1000).toFixed(0)}k`} axisLine={false} />
                  <Tooltip {...chartTooltipStyle} formatter={(v: number) => [v.toLocaleString(), "Cases"]} />
                  <Line type="monotone" dataKey="cases" stroke="#22d3ee" strokeWidth={2.5} dot={{ fill: "#22d3ee", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="card">
              <h3 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Disease Distribution</h3>
              <p style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Total active cases by disease</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <ResponsiveContainer width="55%" height={200}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={85} innerRadius={40}>
                      {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
                    </Pie>
                    <Tooltip {...chartTooltipStyle} formatter={(v: number) => [v.toLocaleString(), "Cases"]} />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ flex: 1 }}>
                  {pieData.map(p => (
                    <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: "#94a3b8", flex: 1 }}>{p.name}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#f1f5f9" }}>{p.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginBottom: 32 }}>
            <h3 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Monthly Case Comparison</h3>
            <p style={{ fontSize: 12, color: "#64748b", marginBottom: 20 }}>Active cases per month across top diseases</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} tickFormatter={v => `${(v/1000).toFixed(0)}k`} axisLine={false} />
                <Tooltip {...chartTooltipStyle} formatter={(v: number) => [v.toLocaleString(), ""]} />
                <Legend wrapperStyle={{ color: "#94a3b8", fontSize: 13 }} />
                <Bar dataKey="Dengue" fill="#22d3ee" radius={[4,4,0,0]} />
                <Bar dataKey="Malaria" fill="#22c55e" radius={[4,4,0,0]} />
                <Bar dataKey="TB" fill="#ef4444" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Disease Info */}
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9", marginBottom: 20 }}>Disease Information & Prevention</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 32 }}>
            {symptoms.map(d => (
              <div key={d.disease} className="card" style={{ padding: 20 }}>
                <h4 style={{ fontWeight: 700, color: "#22d3ee", fontSize: 15, marginBottom: 12 }}>{d.disease}</h4>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8", marginBottom: 8 }}>SYMPTOMS</div>
                  {d.symptoms.map(s => (
                    <div key={s} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, fontSize: 13, color: "#cbd5e1" }}>
                      <span style={{ color: "#f87171", fontSize: 10 }}>●</span> {s}
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8", marginBottom: 6 }}>TREATMENT</div>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{d.treatment}</p>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8", marginBottom: 6 }}>PREVENTION</div>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{d.prevention}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              { icon: "", title: "Stay Hydrated", desc: "Drink 8-10 glasses of clean water daily. Use filtered or boiled water in outbreak zones.", color: "#06b6d4" },
              { icon: "", title: "Get Vaccinated", desc: "Keep vaccinations up-to-date. Free vaccines available at all government health centres.", color: "#22c55e" },
              { icon: "", title: "Use Mosquito Nets", desc: "Use bed nets and repellents. Drain standing water to prevent mosquito breeding.", color: "#f59e0b" },
            ].map(t => (
              <div key={t.title} style={{ background: `${t.color}0d`, border: `1px solid ${t.color}20`, borderRadius: 14, padding: 20 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{t.icon}</div>
                <h4 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 6 }}>{t.title}</h4>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "checker" && (
        <div style={{ maxWidth: 700 }}>
          <div className="card" style={{ marginBottom: 20 }}>
            <h2 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 18, marginBottom: 8 }}> AI Symptom Checker</h2>
            <p style={{ color: "#64748b", fontSize: 14, marginBottom: 24 }}>Select your symptoms below and our AI will help identify potential conditions. This is not a substitute for medical advice.</p>

            {checkerStep === 0 && (
              <>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 12 }}>SELECT YOUR SYMPTOMS</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                  {commonSymptoms.map(s => (
                    <button key={s} onClick={() => toggleSymptom(s)} style={{
                      padding: "8px 16px", borderRadius: 24, border: `1px solid ${selectedSymptoms.includes(s) ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.1)"}`,
                      background: selectedSymptoms.includes(s) ? "rgba(34,211,238,0.12)" : "transparent",
                      color: selectedSymptoms.includes(s) ? "#22d3ee" : "#94a3b8",
                      fontSize: 13, cursor: "pointer", fontWeight: 500, transition: "all 0.15s"
                    }}>
                      {selectedSymptoms.includes(s) ? "✓ " : ""}{s}
                    </button>
                  ))}
                </div>
                <button onClick={() => selectedSymptoms.length > 0 && setCheckerStep(1)} className="btn-primary" style={{ opacity: selectedSymptoms.length === 0 ? 0.5 : 1 }}>
                  Analyse Symptoms →
                </button>
              </>
            )}

            {checkerStep === 1 && (
              <>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 13, color: "#64748b", marginBottom: 8 }}>Selected symptoms: {selectedSymptoms.map(s => <span key={s} style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", padding: "2px 8px", borderRadius: 12, fontSize: 12, marginRight: 6 }}>{s}</span>)}</div>
                </div>
                <div style={{ background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.15)", borderRadius: 12, padding: 20, marginBottom: 16 }}>
                  <div style={{ fontWeight: 700, color: "#22d3ee", marginBottom: 12 }}>AI Analysis Result</div>
                  <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, marginBottom: 16 }}>
                    Based on your symptoms ({selectedSymptoms.join(", ")}), you may be experiencing signs of a viral or bacterial infection. The most likely conditions to consider include:
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { name: "Dengue Fever", prob: 68, color: "#ef4444" },
                      { name: "Influenza", prob: 55, color: "#f59e0b" },
                      { name: "Typhoid", prob: 32, color: "#22d3ee" },
                    ].map(r => (
                      <div key={r.name}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                          <span style={{ color: "#f1f5f9", fontWeight: 600 }}>{r.name}</span>
                          <span style={{ color: r.color, fontWeight: 700 }}>{r.prob}% match</span>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 4, height: 6, overflow: "hidden" }}>
                          <div style={{ width: `${r.prob}%`, height: "100%", background: r.color, borderRadius: 4 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: 14, fontSize: 13, color: "#fca5a5", marginBottom: 16 }}>
                   <strong>Disclaimer:</strong> This AI analysis is for informational purposes only. Please consult a qualified doctor for proper diagnosis and treatment.
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <Link href="/appointments" className="btn-primary">Book Doctor Appointment</Link>
                  <button onClick={() => { setCheckerStep(0); setSelectedSymptoms([]); }} className="btn-outline">Check Again</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
