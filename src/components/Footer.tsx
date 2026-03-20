import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0f1e", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 64 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#06b6d4,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center" }}>💙</div>
              <div>
                <div style={{ fontWeight: 800, color: "#f1f5f9", fontSize: 16 }}>ArogyaSetu</div>
                <div style={{ fontSize: 11, color: "#475569" }}>आरोग्य सेतु</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, marginBottom: 12 }}>
              India's unified government healthcare portal. AI-powered disease tracking, hospital directory, and appointment booking.
            </p>
            <p style={{ fontSize: 12, color: "#475569" }}>
              Health Helpline: <a href="tel:104" style={{ color: "#22d3ee" }}>104</a> &nbsp;|&nbsp; Ambulance: <a href="tel:108" style={{ color: "#22d3ee" }}>108</a>
            </p>
          </div>
          <div>
            <h4 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Services</h4>
            {[{href:"/hospitals",l:"Hospital Directory"},{href:"/appointments",l:"Book Appointment"},{href:"/disease-tracker",l:"AI Disease Tracker"},{href:"/dashboard",l:"Health Dashboard"}].map(s=>(
              <div key={s.href} style={{ marginBottom: 10 }}>
                <Link href={s.href} style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>{s.l}</Link>
              </div>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Government Links</h4>
            {["Ministry of Health & Family Welfare","AYUSHMAN BHARAT","National Health Mission","ICMR","AIIMS Portals"].map(l=>(
              <div key={l} style={{ marginBottom: 10 }}><a href="#" style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>{l}</a></div>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Emergency Helplines</h4>
            {[{l:"Ambulance",n:"108"},{l:"Health Helpline",n:"104"},{l:"Women Helpline",n:"181"},{l:"Child Helpline",n:"1098"},{l:"COVID Helpline",n:"1075"}].map(h=>(
              <div key={h.n} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 13 }}>
                <span style={{ color: "#64748b" }}>{h.l}</span>
                <a href={`tel:${h.n}`} style={{ color: "#22d3ee", fontWeight: 700, textDecoration: "none" }}>{h.n}</a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "#475569" }}>© 2026 ArogyaSetu — Government of India. Ministry of Health &amp; Family Welfare. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy","Terms of Use","Accessibility","Sitemap"].map(l=>(
              <a key={l} href="#" style={{ fontSize: 12, color: "#475569", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
