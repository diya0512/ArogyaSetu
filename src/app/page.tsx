import Link from "next/link";

const liveAlerts = [
  { disease: "Dengue", state: "MH", stateFull: "Maharashtra", cases: "12,400", risk: "High", riskColor: "#991b1b", riskBg: "#fef2f2", dot: "#dc2626" },
  { disease: "Influenza H3N2", state: "DL", stateFull: "Delhi NCR", cases: "3,800", risk: "Medium", riskColor: "#92400e", riskBg: "#fffbeb", dot: "#f59e0b" },
  { disease: "Cholera", state: "OD", stateFull: "Odisha", cases: "142", risk: "Low", riskColor: "#14532d", riskBg: "#f0fdf4", dot: "#22c55e" },
];

const stats = [
  { value: "25,778", label: "Govt. Hospitals" },
  { value: "13.2L+", label: "Registered Doctors" },
  { value: "4.8M+", label: "Citizens Daily" },
  { value: "36", label: "States & UTs" },
];

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    title: "Disease Tracker",
    desc: "Real-time surveillance across all states. Monitor outbreaks and get risk alerts.",
    href: "/disease-tracker",
    tag: "Live data",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    title: "Hospital Directory",
    desc: "25,000+ government hospitals with beds, specialities, and real-time availability.",
    href: "/hospitals",
    tag: "25K+ hospitals",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    ),
    title: "Book Appointment",
    desc: "Zero-queue digital booking at any government hospital, available 24×7.",
    href: "/appointments",
    tag: "Free service",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    title: "Health Dashboard",
    desc: "Personal health records, vaccination schedule, and family health tracking.",
    href: "/dashboard",
    tag: "Personalised",
  },
];

const steps = [
  { n: "1", title: "Find a hospital", desc: "Search 25,000+ government hospitals by state, city, or speciality." },
  { n: "2", title: "Choose a slot", desc: "Pick a convenient date, time, and doctor from live availability." },
  { n: "3", title: "Show up & get seen", desc: "Present your booking ID. No waiting, no paperwork." },
];

const schemes = [
  { name: "Ayushman Bharat PM-JAY", desc: "₹5 lakh cover for 50 crore citizens", color: "#0f2d52" },
  { name: "National Health Mission", desc: "Universal healthcare across rural India", color: "#0f766e" },
  { name: "PMJAY Sehat", desc: "Extended coverage for J&K residents", color: "#6d28d9" },
  { name: "ESI Scheme", desc: "Social security for organised sector workers", color: "#92400e" },
];

export default function Home() {
  return (
    <div style={{ background: "#f7f8fa" }}>

      {/* ── HERO ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>

          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "#0f2d52", background: "#e8eef7", border: "1px solid #c3d0e8", borderRadius: 3, padding: "3px 10px", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
              Ministry of Health &amp; Family Welfare
            </div>

            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#0f2d52", lineHeight: 1.1, marginBottom: 20, fontWeight: 400 }}>
              Free healthcare<br />
              <em style={{ fontStyle: "italic", color: "#c6902a" }}>for every</em><br />
              Indian citizen.
            </h1>

            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75, marginBottom: 32, maxWidth: 440 }}>
              Access 25,000+ government hospitals, real-time disease tracking, zero-wait appointments, and your personal health records — all in one place, at no cost.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/hospitals" className="btn-primary">
                Find a hospital
              </Link>
              <Link href="/appointments" className="btn-outline">
                Book appointment
              </Link>
              <Link href="/disease-tracker" className="btn-ghost">
                Disease tracker
              </Link>
            </div>

            {/* Trust strip */}
            <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid #f1f5f9", display: "flex", gap: 32 }}>
              {[{ v: "2.4L", l: "Active cases tracked" }, { v: "18.9L", l: "Recoveries logged" }, { v: "36", l: "States covered" }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "#0f2d52" }}>{s.v}</div>
                  <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Live Alerts card */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
            {/* Header */}
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#111827" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e" }} className="pulse-dot" />
                Live Disease Alerts
              </div>
              <span style={{ fontSize: 11, color: "#9ca3af", background: "#f7f8fa", border: "1px solid #f1f5f9", borderRadius: 3, padding: "2px 8px" }}>Updated now</span>
            </div>

            {/* Alert rows */}
            {liveAlerts.map((a, i) => (
              <div key={a.disease} style={{ padding: "14px 20px", borderBottom: i < liveAlerts.length - 1 ? "1px solid #f9fafb" : "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.dot, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>{a.disease}</div>
                    <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 1, display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ background: "#f0f4fa", color: "#374151", fontWeight: 700, fontSize: 10, padding: "1px 6px", borderRadius: 2 }}>{a.state}</span>
                      {a.stateFull}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#111827" }}>{a.cases}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: a.riskColor, background: a.riskBg, padding: "1px 7px", borderRadius: 2, display: "inline-block", marginTop: 2 }}>{a.risk} risk</div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div style={{ padding: "12px 20px", background: "#f7f8fa", borderTop: "1px solid #f1f5f9" }}>
              <Link href="/disease-tracker" style={{ fontSize: 13, fontWeight: 600, color: "#0f2d52", textDecoration: "none" }}>
                View all states &amp; districts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: "#0f2d52", padding: "24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", padding: "12px 16px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: "#fff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 5, letterSpacing: "0.02em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "72px 24px", background: "#f7f8fa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#c6902a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>What we offer</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: "#0f2d52", fontWeight: 400, maxWidth: 400, lineHeight: 1.2 }}>One platform for all government healthcare</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: "#e2e8f0", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
            {services.map((s, i) => (
              <Link key={s.title} href={s.href} style={{ textDecoration: "none", background: "#fff", padding: "32px", display: "block", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#fafbfc")}
                onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, background: "#f0f4fa", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#0f2d52" }}>
                    {s.icon}
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#6b7280", background: "#f7f8fa", border: "1px solid #e2e8f0", borderRadius: 3, padding: "3px 8px", letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.tag}</span>
                </div>
                <div style={{ fontWeight: 600, fontSize: 16, color: "#111827", marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, marginBottom: 20 }}>{s.desc}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#0f2d52" }}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "72px 24px", background: "#fff", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#c6902a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>How it works</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: "#0f2d52", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
              Book a government hospital appointment in minutes
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, marginBottom: 32 }}>
              No middlemen, no queues, no costs. Direct access to government doctors across India.
            </p>
            <Link href="/appointments" className="btn-primary">
              Book free appointment
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: "flex", gap: 20, paddingBottom: i < steps.length - 1 ? 28 : 0, position: "relative" }}>
                {/* step line */}
                {i < steps.length - 1 && (
                  <div style={{ position: "absolute", left: 16, top: 36, width: 1, height: "calc(100% - 8px)", background: "#e2e8f0" }} />
                )}
                <div style={{ width: 33, height: 33, borderRadius: "50%", background: "#0f2d52", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'DM Serif Display', serif", fontSize: 15, color: "#fff", zIndex: 1 }}>
                  {s.n}
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "#111827", marginBottom: 5 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEMES ── */}
      <section style={{ padding: "72px 24px", background: "#f7f8fa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#c6902a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Entitlements</div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: "#0f2d52", fontWeight: 400, lineHeight: 1.2 }}>Government health schemes</h2>
            </div>
            <Link href="/dashboard" style={{ fontSize: 13, fontWeight: 600, color: "#0f2d52", textDecoration: "none", border: "1px solid #c3d0e8", padding: "7px 16px", borderRadius: 5, background: "#fff" }}>
              View all schemes →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
            {schemes.map(s => (
              <div key={s.name} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "22px 20px", borderTop: `3px solid ${s.color}` }}>
                <div style={{ fontWeight: 600, color: "#111827", fontSize: 14, marginBottom: 6, lineHeight: 1.35 }}>{s.name}</div>
                <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0f2d52", padding: "72px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: "#fff", fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>
              Healthcare is your right.<br />
              <em style={{ color: "#c6902a" }}>Use it.</em>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              Crores of citizens already access free government healthcare through ArogyaSetu. Your entitlement is waiting.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
            <Link href="/appointments" style={{ background: "#c6902a", color: "#fff", fontWeight: 700, padding: "12px 24px", borderRadius: 6, fontSize: 14, textDecoration: "none", textAlign: "center", whiteSpace: "nowrap" }}>
              Book appointment
            </Link>
            <Link href="/auth" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", fontWeight: 500, padding: "12px 24px", borderRadius: 6, fontSize: 14, textDecoration: "none", textAlign: "center", border: "1px solid rgba(255,255,255,0.12)" }}>
              Create account
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY STRIP ── */}
      <section style={{ background: "#7f1d1d", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fca5a5" }} className="pulse-dot" />
            <span style={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>Medical Emergency?</span>
            <span style={{ fontSize: 13, color: "#fca5a5" }}>24×7 ambulance across all 36 states and UTs</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="tel:108" style={{ background: "#fff", color: "#7f1d1d", fontWeight: 800, padding: "8px 20px", borderRadius: 5, fontSize: 14, textDecoration: "none" }}>108 — Ambulance</a>
            <a href="tel:104" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 600, padding: "8px 18px", borderRadius: 5, fontSize: 14, textDecoration: "none" }}>104 — Health</a>
          </div>
        </div>
      </section>

    </div>
  );
}
