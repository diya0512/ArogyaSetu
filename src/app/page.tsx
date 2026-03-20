import Link from "next/link";

const liveAlerts = [
  { disease: "Dengue", state: "Maharashtra", cases: "12,400", risk: "HIGH RISK", riskColor: "#f87171", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)", arrow: "↗" },
  { disease: "Influenza H3N2", state: "Delhi NCR", cases: "3,800", risk: "MEDIUM RISK", riskColor: "#fbbf24", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", arrow: "↗" },
  { disease: "Cholera", state: "Odisha", cases: "142", risk: "LOW RISK", riskColor: "#4ade80", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)", arrow: "↘" },
];

const stats = [
  { value: "25,778", label: "Government Hospitals", icon: "🏥" },
  { value: "13.2L+", label: "Doctors Registered", icon: "👨‍⚕️" },
  { value: "4.8M+", label: "Citizens Served Daily", icon: "👥" },
  { value: "36", label: "States & UTs Covered", icon: "🗺️" },
];

const features = [
  { badge: "AI Powered", icon: "🧠", title: "AI Disease Tracker", desc: "Real-time AI-powered disease surveillance across all states. Monitor outbreaks, get risk alerts, and check symptoms.", href: "/disease-tracker", color: "#8b5cf6" },
  { badge: "25,000+ Hospitals", icon: "🏥", title: "Hospital Directory", desc: "Comprehensive database of 25,000+ government hospitals with beds, specialities, and real-time availability.", href: "/hospitals", color: "#06b6d4" },
  { badge: "Free Service", icon: "📅", title: "Book Appointment", desc: "Zero-queue digital appointment booking at any government hospital. Available 24×7 for all citizens.", href: "/appointments", color: "#22c55e" },
  { badge: "Personalized", icon: "👤", title: "Health Dashboard", desc: "Personal health records, vaccination schedule, prescription history, and family health tracking.", href: "/dashboard", color: "#f59e0b" },
];

const schemes = [
  { icon: "🏥", name: "Ayushman Bharat PM-JAY", desc: "₹5 lakh health cover for 50 crore citizens", color: "#06b6d4" },
  { icon: "🌿", name: "National Health Mission", desc: "Universal access to healthcare across rural India", color: "#22c55e" },
  { icon: "🏔️", name: "PMJAY Sehat", desc: "Extension to J&K residents", color: "#8b5cf6" },
  { icon: "🏭", name: "ESI Scheme", desc: "Social security for organized sector workers", color: "#f59e0b" },
];

const steps = [
  { num: "01", title: "Find Hospital", desc: "Search our directory of 25,000+ government hospitals by state, city, or speciality." },
  { num: "02", title: "Choose Doctor & Slot", desc: "View available doctors, check their experience, and pick a convenient time slot." },
  { num: "03", title: "Confirm & Visit", desc: "Get instant confirmation via SMS. Show your booking ID at the hospital — zero waiting." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#0f172a 0%,#1a2744 50%,#0f172a 100%)", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 500, background: "radial-gradient(circle,rgba(6,182,212,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 24, padding: "6px 16px", fontSize: 13, color: "#22d3ee", marginBottom: 24, fontWeight: 500 }}>
              <span>⚡</span> Now with AI-Powered Disease Intelligence
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 800, color: "#f1f5f9", lineHeight: 1.12, marginBottom: 20, letterSpacing: "-1px" }}>
              India's Unified{" "}
              <span style={{ background: "linear-gradient(135deg,#22d3ee,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Government Healthcare
              </span>{" "}
              Portal
            </h1>
            <p style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
              Access 25,000+ government hospitals, AI disease tracking, zero-wait appointments, and your personal health records — all in one place.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/hospitals" className="btn-primary" style={{ padding: "13px 28px", fontSize: 15 }}>🔍 Search Hospitals</Link>
              <Link href="/appointments" style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#0f172a", fontWeight: 700, padding: "13px 24px", borderRadius: 10, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>📅 Book Appointment</Link>
              <Link href="/disease-tracker" className="btn-outline" style={{ padding: "13px 24px", fontSize: 15 }}>🔬 Check Symptoms</Link>
              <Link href="/hospitals" className="btn-outline" style={{ padding: "13px 24px", fontSize: 15 }}>🏥 Find Hospital</Link>
            </div>
          </div>

          {/* Right — Live Alerts */}
          <div className="glass-card" style={{ padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 15, color: "#f1f5f9" }}>
                <span className="pulse-dot" style={{ width: 8, height: 8, background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
                Live Disease Alerts
              </div>
              <span style={{ fontSize: 11, color: "#475569" }}>Updated now</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {liveAlerts.map(a => (
                <div key={a.disease} style={{ background: a.bg, border: `1px solid ${a.border}`, borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 15 }}>{a.disease}</div>
                    <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>📍 {a.state}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 800, color: a.riskColor, fontSize: 20 }}>{a.arrow} {a.cases}</div>
                    <div style={{ fontSize: 10, color: a.riskColor, fontWeight: 700, marginTop: 2, letterSpacing: 0.5 }}>{a.risk}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
              {[{ val: "2.4L", lbl: "Active Cases" }, { val: "18.9L", lbl: "Recovered" }, { val: "36 States", lbl: "Monitored" }].map((s, i) => (
                <div key={s.lbl} style={{ textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <div style={{ fontWeight: 800, fontSize: 20, color: "#22d3ee" }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 3 }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#1e293b", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", padding: "8px 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
              <div className="stat-number">{s.value}</div>
              <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#f1f5f9", marginBottom: 10 }}>Everything You Need for Better Health</h2>
          <p style={{ color: "#64748b", fontSize: 15 }}>A single platform for all government healthcare services — free, accessible, and available to every Indian citizen.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {features.map(f => (
            <Link key={f.title} href={f.href} style={{ textDecoration: "none" }}>
              <div className="card card-hover" style={{ height: "100%" }}>
                <div style={{ display: "inline-block", background: `${f.color}18`, color: f.color, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, marginBottom: 16, border: `1px solid ${f.color}28`, letterSpacing: 0.5 }}>{f.badge}</div>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 16, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>{f.desc}</p>
                <span style={{ color: f.color, fontSize: 13, fontWeight: 600 }}>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SCHEMES */}
      <section style={{ background: "#1e293b", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>Government Health Schemes</h2>
              <p style={{ color: "#64748b", fontSize: 15 }}>Free healthcare benefits you are entitled to as an Indian citizen</p>
            </div>
            <Link href="/dashboard" className="btn-outline">View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {schemes.map(s => (
              <div key={s.name} className="card card-hover" style={{ padding: 20 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: `${s.color}15`, border: `1px solid ${s.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 14, marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: "#64748b" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>Book in 3 Simple Steps</h2>
          <p style={{ color: "#64748b", fontSize: 15 }}>Getting healthcare has never been this easy</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40, marginBottom: 48 }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ textAlign: "center", position: "relative" }}>
              {i < 2 && <div style={{ position: "absolute", top: 28, left: "55%", right: "-45%", height: 1, background: "linear-gradient(90deg,rgba(34,211,238,0.4),transparent)" }} />}
              <div style={{ position: "relative" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg,#06b6d4,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "white", margin: "0 auto 16px", boxShadow: "0 8px 24px rgba(6,182,212,0.3)" }}>{s.num}</div>
                <h3 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/appointments" className="btn-primary" style={{ padding: "14px 36px", fontSize: 16 }}>📅 Book Your Appointment Now — It's Free</Link>
        </div>
      </section>

      {/* EMERGENCY */}
      <section style={{ background: "linear-gradient(135deg,#7f1d1d,#991b1b)", padding: "60px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🚨</div>
          <h3 style={{ fontWeight: 800, fontSize: 24, color: "#fff", marginBottom: 8 }}>Medical Emergency? Act Fast.</h3>
          <p style={{ color: "#fca5a5", marginBottom: 28, fontSize: 15 }}>Our 24×7 ambulance service covers all 36 states and UTs.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="tel:108" style={{ background: "white", color: "#991b1b", fontWeight: 800, padding: "13px 36px", borderRadius: 10, fontSize: 16, textDecoration: "none" }}>📞 108 — Ambulance</a>
            <a href="tel:104" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "white", fontWeight: 600, padding: "13px 24px", borderRadius: 10, fontSize: 15, textDecoration: "none" }}>Health Helpline: 104</a>
          </div>
        </div>
      </section>
    </div>
  );
}
