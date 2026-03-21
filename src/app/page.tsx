import Link from "next/link";

const liveAlerts = [
  { disease: "Dengue", state: "Maharashtra", cases: "12,400", risk: "HIGH", riskColor: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
  { disease: "Influenza H3N2", state: "Delhi NCR", cases: "3,800", risk: "MEDIUM", riskColor: "#d97706", bg: "#fffbeb", border: "#fde68a" },
  { disease: "Cholera", state: "Odisha", cases: "142", risk: "LOW", riskColor: "#15803d", bg: "#f0fdf4", border: "#bbf7d0" },
];

const stats = [
  { value: "25,778", label: "Government Hospitals" },
  { value: "13.2L+", label: "Doctors Registered" },
  { value: "4.8M+", label: "Citizens Served Daily" },
  { value: "36", label: "States & UTs Covered" },
];

const features = [
  { title: "Disease Tracker", desc: "Real-time disease surveillance across all states. Monitor outbreaks, get risk alerts, and check symptoms.", href: "/disease-tracker", color: "#1d4ed8" },
  { title: "Hospital Directory", desc: "25,000+ government hospitals with beds, specialities, and real-time availability.", href: "/hospitals", color: "#0369a1" },
  { title: "Book Appointment", desc: "Zero-queue digital appointment booking at any government hospital. Available 24×7 for all citizens.", href: "/appointments", color: "#0f766e" },
  { title: "Health Dashboard", desc: "Personal health records, vaccination schedule, prescription history, and family health tracking.", href: "/dashboard", color: "#7c3aed" },
];

const schemes = [
  { name: "Ayushman Bharat PM-JAY", desc: "₹5 lakh health cover for 50 crore citizens", color: "#1d4ed8" },
  { name: "National Health Mission", desc: "Universal access to healthcare across rural India", color: "#0f766e" },
  { name: "PMJAY Sehat", desc: "Extension to J&K residents", color: "#7c3aed" },
  { name: "ESI Scheme", desc: "Social security for organized sector workers", color: "#d97706" },
];

const steps = [
  { num: "01", title: "Find Hospital", desc: "Search our directory of 25,000+ government hospitals by state, city, or speciality." },
  { num: "02", title: "Choose Doctor & Slot", desc: "View available doctors, check their experience, and pick a convenient time slot." },
  { num: "03", title: "Confirm & Visit", desc: "Get instant confirmation. Show your booking ID at the hospital — zero waiting." },
];

export default function Home() {
  return (
    <div style={{ background: "#f4f6fb" }}>

      {/* HERO */}
      <section style={{ background: "#fff", borderBottom: "1px solid #dde3ed", padding: "56px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>

          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 4, padding: "4px 12px", fontSize: 12, color: "#1d4ed8", marginBottom: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Ministry of Health & Family Welfare — Government of India
            </div>
            <h1 style={{ fontSize: 40, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.5px" }}>
              India's Unified<br />
              <span style={{ color: "#1a3a6b" }}>Government Healthcare</span><br />
              Portal
            </h1>
            <p style={{ fontSize: 16, color: "#4a5568", lineHeight: 1.75, marginBottom: 28, maxWidth: 460 }}>
              Access 25,000+ government hospitals, disease tracking, zero-wait appointments, and your personal health records — all in one place.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/hospitals" style={{ background: "#1a3a6b", color: "#fff", fontWeight: 700, padding: "11px 22px", borderRadius: 6, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Find Hospital
              </Link>
              <Link href="/appointments" style={{ background: "#fff", color: "#1a3a6b", fontWeight: 700, padding: "11px 22px", borderRadius: 6, fontSize: 14, textDecoration: "none", border: "1.5px solid #1a3a6b", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Book Appointment
              </Link>
              <Link href="/disease-tracker" style={{ background: "#fff", color: "#4a5568", fontWeight: 600, padding: "11px 22px", borderRadius: 6, fontSize: 14, textDecoration: "none", border: "1px solid #dde3ed", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Check Symptoms
              </Link>
            </div>
          </div>

          {/* Right — Live Alerts */}
          <div style={{ background: "#fff", border: "1px solid #dde3ed", borderRadius: 8, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>
                <div style={{ width: 8, height: 8, background: "#22c55e", borderRadius: "50%" }} />
                Live Disease Alerts
              </div>
              <span style={{ fontSize: 11, color: "#94a3b8" }}>Updated now</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
              {liveAlerts.map(a => (
                <div key={a.disease} style={{ background: a.bg, border: `1px solid ${a.border}`, borderRadius: 6, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontWeight: 600, color: "#1a1a2e", fontSize: 14 }}>{a.disease}</div>
                    <div style={{ fontSize: 12, color: "#718096", marginTop: 2 }}>📍 {a.state}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 700, color: a.riskColor, fontSize: 18 }}>{a.cases}</div>
                    <div style={{ fontSize: 11, color: a.riskColor, fontWeight: 600, marginTop: 2 }}>{a.risk} RISK</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "1px solid #f1f5f9", paddingTop: 14 }}>
              {[{ val: "2.4L", lbl: "Active Cases" }, { val: "18.9L", lbl: "Recovered" }, { val: "36", lbl: "States" }].map((s, i) => (
                <div key={s.lbl} style={{ textAlign: "center", borderRight: i < 2 ? "1px solid #f1f5f9" : "none" }}>
                  <div style={{ fontWeight: 800, fontSize: 18, color: "#1a3a6b" }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#1a3a6b", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", padding: "8px 16px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#93b4dc", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 24px", background: "#f4f6fb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>Our Services</h2>
            <p style={{ color: "#718096", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>A single platform for all government healthcare services — free and accessible to every Indian citizen.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {features.map(f => (
              <Link key={f.title} href={f.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", border: "1px solid #dde3ed", borderRadius: 8, padding: 24, height: "100%", transition: "all 0.15s", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", borderTop: `3px solid ${f.color}` }}>
                  <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 15, marginBottom: 10 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#718096", lineHeight: 1.65, marginBottom: 16 }}>{f.desc}</div>
                  <span style={{ color: f.color, fontSize: 13, fontWeight: 600 }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "60px 24px", background: "#fff", borderTop: "1px solid #dde3ed", borderBottom: "1px solid #dde3ed" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>Book in 3 Simple Steps</h2>
            <p style={{ color: "#718096", fontSize: 15 }}>Getting government healthcare has never been this easy</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 6, background: "#eff6ff", border: "1px solid #bfdbfe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: "#1a3a6b", flexShrink: 0 }}>{s.num}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 15, marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "#718096", lineHeight: 1.65 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/appointments" style={{ background: "#1a3a6b", color: "#fff", fontWeight: 700, padding: "13px 32px", borderRadius: 6, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Book Free Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* SCHEMES */}
      <section style={{ padding: "60px 24px", background: "#f4f6fb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>Government Health Schemes</h2>
              <p style={{ color: "#718096", fontSize: 14 }}>Free healthcare benefits you are entitled to as an Indian citizen</p>
            </div>
            <Link href="/dashboard" style={{ color: "#1a3a6b", fontSize: 13, fontWeight: 600, textDecoration: "none", border: "1px solid #c3d0e8", padding: "7px 16px", borderRadius: 6, background: "#fff" }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {schemes.map(s => (
              <div key={s.name} style={{ background: "#fff", border: "1px solid #dde3ed", borderRadius: 8, padding: 20, borderLeft: `3px solid ${s.color}` }}>
                <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 14, marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: "#718096", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1a3a6b", padding: "56px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 10 }}>Ready to get started?</h2>
          <p style={{ fontSize: 15, color: "#93b4dc", marginBottom: 28, lineHeight: 1.7 }}>
            Join millions of citizens already using ArogyaSetu for free government healthcare access.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/appointments" style={{ background: "#fff", color: "#1a3a6b", fontWeight: 700, padding: "12px 28px", borderRadius: 6, fontSize: 14, textDecoration: "none" }}>
              Book Free Appointment
            </Link>
            <Link href="/auth" style={{ background: "transparent", color: "#fff", fontWeight: 600, padding: "12px 28px", borderRadius: 6, fontSize: 14, textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.35)" }}>
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section style={{ background: "#7f1d1d", padding: "40px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 6 }}>Medical Emergency?</h3>
          <p style={{ color: "#fca5a5", marginBottom: 20, fontSize: 14 }}>24×7 ambulance service across all 36 states and UTs.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:108" style={{ background: "#fff", color: "#7f1d1d", fontWeight: 800, padding: "11px 28px", borderRadius: 6, fontSize: 15, textDecoration: "none" }}>108 — Ambulance</a>
            <a href="tel:104" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, padding: "11px 20px", borderRadius: 6, fontSize: 14, textDecoration: "none" }}>Health Helpline: 104</a>
          </div>
        </div>
      </section>

    </div>
  );
}