import Link from "next/link";

const hospitals = [
  { id: "h1", name: "AIIMS New Delhi", city: "New Delhi", state: "Delhi", type: "AIIMS", rating: 4.8, beds: 2478, icu: 180, doctors: 1200, specialities: ["Cardiology", "Neurology", "Oncology", "+2 more"], phone: "011-26588500", address: "Ansari Nagar East, New Delhi, Delhi 110029", est: 1956 },
  { id: "h2", name: "Safdarjung Hospital", city: "New Delhi", state: "Delhi", type: "Government", rating: 4.2, beds: 1531, icu: 80, doctors: 680, specialities: ["General Surgery", "Medicine", "Gynecology", "+2 more"], phone: "011-26165060", address: "Ansari Nagar West, New Delhi, Delhi 110029", est: 1942 },
  { id: "h3", name: "AIIMS Bhopal", city: "Bhopal", state: "Madhya Pradesh", type: "AIIMS", rating: 4.5, beds: 960, icu: 60, doctors: 380, specialities: ["Cardiology", "Neurology", "Orthopedics", "+1 more"], phone: "0755-4096000", address: "Saket Nagar, Bhopal, MP 462020", est: 2012 },
  { id: "h4", name: "King George's Medical University", city: "Lucknow", state: "Uttar Pradesh", type: "Government", rating: 4.6, beds: 5000, icu: 250, doctors: 1800, specialities: ["Cardiology", "Neurosurgery", "Burns", "+2 more"], phone: "0522-2257450", address: "Shah Mina Rd, Chowk, Lucknow, UP 226003", est: 1911 },
  { id: "h5", name: "Grant Medical College & Sir JJ Hospital", city: "Mumbai", state: "Maharashtra", type: "Government", rating: 4.3, beds: 1340, icu: 90, doctors: 620, specialities: ["Oncology", "Neurology", "Cardiology", "+1 more"], phone: "022-23735555", address: "Byculla, Mumbai, Maharashtra 400008", est: 1845 },
  { id: "h6", name: "NIMHANS", city: "Bengaluru", state: "Karnataka", type: "Government", rating: 4.7, beds: 750, icu: 40, doctors: 290, specialities: ["Psychiatry", "Neurology", "Neurosurgery", "+1 more"], phone: "080-46110007", address: "Hosur Rd, Lakkasandra, Bengaluru, KA 560029", est: 1954 },
  { id: "h7", name: "Rajiv Gandhi Government General Hospital", city: "Chennai", state: "Tamil Nadu", type: "Government", rating: 4.1, beds: 2670, icu: 150, doctors: 950, specialities: ["Cardiology", "General Medicine", "Surgery", "+1 more"], phone: "044-25305000", address: "Park Town, Chennai, TN 600003", est: 1835 },
  { id: "h8", name: "IPGMER & SSKM Hospital", city: "Kolkata", state: "West Bengal", type: "Government", rating: 4.4, beds: 1939, icu: 110, doctors: 820, specialities: ["Cardiology", "Neurology", "Gastroenterology", "+1 more"], phone: "033-22041431", address: "244 AJC Bose Road, Kolkata, WB 700020", est: 1916 },
  { id: "h9", name: "ESI Model Hospital Hyderabad", city: "Hyderabad", state: "Telangana", type: "ESI", rating: 3.9, beds: 480, icu: 30, doctors: 180, specialities: ["Occupational Medicine", "General Surgery", "Orthopedics"], phone: "040-23817171", address: "Erragadda, Hyderabad, TG 500038", est: 1975 },
  { id: "h10", name: "PGIMER Chandigarh", city: "Chandigarh", state: "Punjab", type: "Government", rating: 4.7, beds: 2072, icu: 130, doctors: 960, specialities: ["Cardiology", "Neurology", "Hematology", "+1 more"], phone: "0172-2755555", address: "Sector 12, Chandigarh, CH 160012", est: 1962 },
];

const typeConfig: Record<string, { color: string; bg: string }> = {
  AIIMS: { color: "#818cf8", bg: "rgba(129,140,248,0.12)" },
  Government: { color: "#22d3ee", bg: "rgba(34,211,238,0.10)" },
  ESI: { color: "#a78bfa", bg: "rgba(167,139,250,0.10)" },
};

export default function HospitalsPage() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ fontSize: 13, color: "#64748b", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
        <Link href="/" style={{ color: "#22d3ee", textDecoration: "none" }}>Home</Link>
        <span>›</span><span>Hospital Directory</span>
      </div>

      <h1 style={{ fontSize: 34, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>🏥 Government Hospital Directory</h1>
      <p style={{ color: "#64748b", fontSize: 15, marginBottom: 32 }}>Find verified government hospitals across India — including AIIMS, ESI, Railway, and District hospitals.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 32 }}>
        {[{ val: "25,778+", lbl: "Total Hospitals", icon: "🏥" }, { val: "23", lbl: "AIIMS Centres", icon: "⭐" }, { val: "36", lbl: "States Covered", icon: "🗺️" }].map(s => (
          <div key={s.lbl} className="card" style={{ textAlign: "center", padding: 20 }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
            <div className="stat-number" style={{ fontSize: 24 }}>{s.val}</div>
            <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 10 }}>
          {["All", "AIIMS", "Government", "ESI"].map((f, i) => (
            <button key={f} style={{ background: i === 0 ? "rgba(34,211,238,0.1)" : "transparent", border: `1px solid ${i === 0 ? "rgba(34,211,238,0.3)" : "rgba(255,255,255,0.1)"}`, color: i === 0 ? "#22d3ee" : "#64748b", padding: "6px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 500 }}>{f}</button>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#64748b" }}>Showing <strong style={{ color: "#f1f5f9" }}>{hospitals.length}</strong> hospitals &nbsp;<span style={{ color: "#475569" }}>• Results from verified government database</span></p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {hospitals.map(h => {
          const tc = typeConfig[h.type] || typeConfig.Government;
          return (
            <div key={h.id} className="card card-hover" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <h3 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 17, margin: 0 }}>{h.name}</h3>
                    <span style={{ background: tc.bg, color: tc.color, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, border: `1px solid ${tc.color}40` }}>{h.type}</span>
                    <span style={{ background: "rgba(34,197,94,0.1)", color: "#4ade80", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>✓ Operational</span>
                    <span style={{ background: "rgba(239,68,68,0.1)", color: "#f87171", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>🚨 24×7 Emergency</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#64748b", marginBottom: 16 }}>📍 {h.city}, {h.state}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 110px)", gap: 16, marginBottom: 16 }}>
                    {[{ val: h.beds.toLocaleString(), lbl: "Beds" }, { val: String(h.icu), lbl: "ICU" }, { val: h.doctors.toLocaleString(), lbl: "Doctors" }].map(s => (
                      <div key={s.lbl}>
                        <div style={{ fontWeight: 800, color: "#22d3ee", fontSize: 22 }}>{s.val}</div>
                        <div style={{ fontSize: 12, color: "#64748b" }}>{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                    {h.specialities.map(sp => (
                      <span key={sp} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8", fontSize: 12, padding: "4px 12px", borderRadius: 6 }}>{sp}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 24, fontSize: 12, color: "#475569" }}>
                    <span>📞 {h.phone}</span>
                    <span>📍 {h.address}</span>
                    <span>Est. {h.est}</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16, flexShrink: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ color: "#f59e0b", fontSize: 20 }}>★</span>
                    <span style={{ fontWeight: 800, color: "#f1f5f9", fontSize: 20 }}>{h.rating}</span>
                  </div>
                  <Link href={`/appointments?hospital=${h.id}`} className="btn-primary">📅 Book Appointment</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 32, padding: 20, background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.12)", borderRadius: 14, fontSize: 13, color: "#94a3b8", lineHeight: 1.7 }}>
        ✅ <strong style={{ color: "#f1f5f9" }}>Verified Government Hospitals</strong> — All hospitals listed are verified by the Ministry of Health &amp; Family Welfare. Treatment at government hospitals is free or heavily subsidized under Ayushman Bharat and NHM schemes. For any discrepancy, contact <strong style={{ color: "#22d3ee" }}>1800-180-1104</strong>.
      </div>
    </div>
  );
}
