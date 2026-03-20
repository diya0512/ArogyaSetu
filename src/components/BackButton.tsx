"use client";
import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show on homepage
  if (pathname === "/") return null;

  return (
    <div style={{
      maxWidth: 1280,
      margin: "0 auto",
      padding: "14px 24px 0",
    }}>
      <button
        onClick={() => router.back()}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#94a3b8",
          padding: "7px 16px 7px 12px",
          borderRadius: 50,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
          transition: "all 0.2s",
          lineHeight: 1,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(34,211,238,0.4)";
          (e.currentTarget as HTMLButtonElement).style.color = "#22d3ee";
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(34,211,238,0.06)";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateX(-2px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
          (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateX(0)";
        }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5l-7 5 7 5" />
        </svg>
        Back
      </button>
    </div>
  );
}
