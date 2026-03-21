import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#122856", color: "#93b4dc", borderTop: "3px solid #1a3a6b", marginTop: "auto" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 32 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 8 }}>ArogyaSetu</div>
            <div style={{ fontSize: 12, marginBottom: 12 }}>आरोग्य सेतु • Health Bridge</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>
              India's unified government healthcare portal by the Ministry of Health & Family Welfare, Government of India.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Services</div>
            {["Hospital Directory", "Book Appointment", "Disease Tracker", "Health Dashboard"].map(l => (
              <div key={l} style={{ fontSize: 13, marginBottom: 8 }}><Link href="/" style={{ color: "#93b4dc", textDecoration: "none" }}>{l}</Link></div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Schemes</div>
            {["Ayushman Bharat", "PM-JAY", "NHM", "ESI Scheme"].map(l => (
              <div key={l} style={{ fontSize: 13, marginBottom: 8 }}><Link href="/" style={{ color: "#93b4dc", textDecoration: "none" }}>{l}</Link></div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Helplines</div>
            <div style={{ fontSize: 13, marginBottom: 8 }}>Health: <strong style={{ color: "#fff" }}>104</strong></div>
            <div style={{ fontSize: 13, marginBottom: 8 }}>Ambulance: <strong style={{ color: "#fff" }}>108</strong></div>
            <div style={{ fontSize: 13, marginBottom: 8 }}>Women: <strong style={{ color: "#fff" }}>1091</strong></div>
            <div style={{ fontSize: 13 }}>Child: <strong style={{ color: "#fff" }}>1098</strong></div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1a3a6b", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12 }}>© 2026 Ministry of Health & Family Welfare, Government of India. All rights reserved.</div>
          <div style={{ display: "flex", gap: 20, fontSize: 12 }}>
            <Link href="/" style={{ color: "#93b4dc" }}>Privacy Policy</Link>
            <Link href="/" style={{ color: "#93b4dc" }}>Terms of Use</Link>
            <Link href="/" style={{ color: "#93b4dc" }}>Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}