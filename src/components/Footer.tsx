import Link from "next/link";

const services = ["Hospital Directory", "Book Appointment", "Disease Tracker", "Health Dashboard"];
const schemes  = ["Ayushman Bharat", "PM-JAY", "NHM", "ESI Scheme"];
const helplines = [
  { label: "Health Helpline", number: "104" },
  { label: "Ambulance",       number: "108" },
  { label: "Women's Helpline",number: "1091" },
  { label: "Child Helpline",  number: "1098" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a1f3c", borderTop: "3px solid #c6902a", marginTop: "auto" }}>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2.2fr 1fr 1fr 1.2fr; gap: 48px; margin-bottom: 40px; }
        .footer-link { font-size: 13px; color: rgba(255,255,255,0.6); text-decoration: none; }
        .footer-link:hover { color: #fff; }
        .footer-bottom-link { font-size: 12px; color: rgba(255,255,255,0.35); text-decoration: none; }
        .footer-bottom-link:hover { color: rgba(255,255,255,0.7); }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 0" }}>
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, background: "#c6902a", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: "#fff", lineHeight: 1 }}>ArogyaSetu</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>आरोग्य सेतु · Health Bridge</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 260 }}>
              India's unified government healthcare portal. An initiative of the Ministry of Health &amp; Family Welfare, Government of India.
            </p>
            <div style={{ marginTop: 20 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "5px 10px", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                All systems operational
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Services</div>
            {services.map(l => (
              <div key={l} style={{ marginBottom: 10 }}>
                <Link href="/" className="footer-link">{l}</Link>
              </div>
            ))}
          </div>

          {/* Schemes */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Schemes</div>
            {schemes.map(l => (
              <div key={l} style={{ marginBottom: 10 }}>
                <Link href="/" className="footer-link">{l}</Link>
              </div>
            ))}
          </div>

          {/* Helplines */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Emergency Helplines</div>
            {helplines.map(h => (
              <div key={h.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{h.label}</span>
                <a href={`tel:${h.number}`} style={{ fontSize: 15, fontWeight: 700, color: "#c6902a", textDecoration: "none" }}>{h.number}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
            © 2026 Ministry of Health &amp; Family Welfare, Government of India. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Use", "Accessibility", "RTI"].map(l => (
              <Link key={l} href="/" className="footer-bottom-link">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
