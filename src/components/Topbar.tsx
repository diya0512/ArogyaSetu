"use client";
export default function Topbar() {
  return (
    <div style={{ background: "#122856", borderBottom: "1px solid #1a3a6b" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "7px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#93b4dc" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#93b4dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
          Official Government of India Healthcare Portal — Ministry of Health &amp; Family Welfare
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 12, alignItems: "center" }}>
          <a href="tel:104" style={{ color: "#93b4dc", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
            Health Helpline: <strong style={{ color: "#ffffff", marginLeft: 3 }}>104</strong>
          </a>
          <span style={{ color: "#1a3a6b" }}>|</span>
          <a href="tel:108" style={{ color: "#93b4dc", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
            Ambulance: <strong style={{ color: "#ffffff", marginLeft: 3 }}>108</strong>
          </a>
        </div>
      </div>
    </div>
  );
}