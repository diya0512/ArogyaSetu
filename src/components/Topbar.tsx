"use client";
export default function Topbar() {
  return (
    <div style={{ background: "#0a0f1e", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "8px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#64748b" }}>
          <span style={{ color: "#22d3ee" }}>⊕</span>
          Official Government of India Healthcare Portal — Ministry of Health &amp; Family Welfare
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 12 }}>
          <a href="tel:104" style={{ color: "#94a3b8", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
            📞 Health Helpline: <strong style={{ color: "#f1f5f9", marginLeft: 3 }}>104</strong>
          </a>
          <span style={{ color: "#334155" }}>|</span>
          <a href="tel:108" style={{ color: "#94a3b8", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
            🚑 Ambulance: <strong style={{ color: "#f1f5f9", marginLeft: 3 }}>108</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
