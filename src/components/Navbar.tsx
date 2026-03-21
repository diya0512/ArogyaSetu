"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

const links = [
  { href: "/", label: "Home", external: false },
  { href: "/hospital_directory.html", label: "Hospital Directory", external: true },
  { href: "/disease-tracker", label: "Disease Tracker", external: false },
  { href: "/appointments", label: "Appointments", external: false },
  { href: "/dashboard", label: "Dashboard", external: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setDropdownOpen(false);
    router.push("/");
  };

  const firstName = user?.displayName?.split(" ")[0] || user?.email?.split("@")[0] || "Account";

  return (
    <>
      <style>{`
        .dropdown { position:absolute; top:calc(100% + 8px); right:0; background:#fff; border:1px solid #dde3ed; border-radius:6px; padding:6px; min-width:200px; box-shadow:0 4px 16px rgba(0,0,0,0.1); z-index:200; }
        .dropdown a, .dropdown button { display:flex; align-items:center; gap:8px; width:100%; padding:8px 12px; border-radius:4px; font-size:13px; color:#4a5568; background:none; border:none; cursor:pointer; font-family:inherit; text-align:left; text-decoration:none; }
        .dropdown a:hover, .dropdown button:hover { background:#f4f6fb; color:#1a3a6b; }
        .dropdown-divider { border:none; border-top:1px solid #dde3ed; margin:4px 0; }
        .logout:hover { color:#b91c1c !important; background:#fef2f2 !important; }
        @media(max-width:1024px){ .nav-desktop{display:none!important;} .nav-mobile{display:flex!important;} }
        @media(min-width:1025px){ .nav-mobile{display:none!important;} }
        .mobile-menu { position:fixed; top:108px; left:0; right:0; background:#fff; border-bottom:2px solid #1a3a6b; z-index:99; padding:12px 16px; display:flex; flex-direction:column; gap:4px; box-shadow:0 4px 16px rgba(0,0,0,0.1); }
      `}</style>

      <header style={{ background: "#fff", borderBottom: "2px solid #1a3a6b", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 64, gap: 8 }}>

          {/* Back button */}
          {pathname !== "/" && (
            <button onClick={() => router.back()} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "1px solid #dde3ed", color: "#4a5568", padding: "6px 12px", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer", marginRight: 4, flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Back
            </button>
          )}

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12, flexShrink: 0, marginRight: 16 }}>
            <div style={{ width: 40, height: 40, background: "#1a3a6b", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#1a3a6b", letterSpacing: "-0.3px" }}>ArogyaSetu</div>
              <div style={{ fontSize: 10, color: "#718096" }}>आरोग्य सेतु • Health Bridge</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
            {links.map(l => (
              l.external
                ? <a key={l.href} href={l.href} className="nav-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, padding: "6px 10px", whiteSpace: "nowrap" }}>{l.label}</a>
                : <Link key={l.href} href={l.href} className={`nav-link ${pathname === l.href ? "active" : ""}`} style={{ fontSize: 13, padding: "6px 10px", whiteSpace: "nowrap" }}>{l.label}</Link>
            ))}
          </nav>

          <div style={{ flex: 1 }} />

          {/* Right actions */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {user ? (
              <div style={{ position: "relative" }}>
                <button onClick={() => setDropdownOpen(o => !o)} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e8eef7", border: "1px solid #dde3ed", color: "#1a3a6b", padding: "7px 14px", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#1a3a6b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff" }}>
                    {firstName[0].toUpperCase()}
                  </div>
                  {firstName}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                {dropdownOpen && (
                  <div className="dropdown">
                    <div style={{ padding: "8px 12px 10px", borderBottom: "1px solid #dde3ed", marginBottom: 4 }}>
                      <div style={{ fontSize: 11, color: "#718096", marginBottom: 2 }}>Signed in as</div>
                      <div style={{ fontSize: 13, color: "#1a3a6b", fontWeight: 600 }}>{user.email}</div>
                    </div>
                    <Link href="/dashboard" onClick={() => setDropdownOpen(false)}>My Dashboard</Link>
                    <Link href="/appointments" onClick={() => setDropdownOpen(false)}>My Appointments</Link>
                    <hr className="dropdown-divider" />
                    <button onClick={handleLogout} className="logout">Sign Out</button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#e8eef7", border: "1px solid #c3d0e8", color: "#1a3a6b", padding: "7px 16px", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Login / Sign Up
              </Link>
            )}
            <Link href="/appointments" className="btn-primary" style={{ fontSize: 13, padding: "7px 16px" }}>Book Appointment</Link>
          </div>

          {/* Mobile hamburger */}
          <div className="nav-mobile" style={{ alignItems: "center", gap: 8, marginLeft: "auto" }}>
            {!user && (
              <Link href="/auth" style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#e8eef7", border: "1px solid #c3d0e8", color: "#1a3a6b", padding: "6px 12px", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Login</Link>
            )}
            <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "1px solid #dde3ed", color: "#4a5568", padding: "7px 10px", borderRadius: 6, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          {links.map(l => (
            l.external
              ? <a key={l.href} href={l.href} className="nav-link" target="_blank" rel="noopener noreferrer">{l.label}</a>
              : <Link key={l.href} href={l.href} className={`nav-link ${pathname === l.href ? "active" : ""}`}>{l.label}</Link>
          ))}
          <div style={{ paddingTop: 8, borderTop: "1px solid #dde3ed", marginTop: 4 }}>
            <Link href="/appointments" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Book Appointment</Link>
          </div>
        </div>
      )}
    </>
  );
}