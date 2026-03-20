"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

const links = [
  { href: "/", label: "Home", icon: "🏠", external: false },
  { href: "/hospital_directory.html", label: "Hospitals", icon: "🏥", external: true },
  { href: "/disease-tracker", label: "Disease Tracker", icon: "📈", external: false },
  { href: "/appointments", label: "Appointments", icon: "📅", external: false },
  { href: "/dashboard", label: "Dashboard", icon: "👤", external: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setUserLoading(false);
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setDropdownOpen(false);
    router.push("/");
  };

  const firstName = user?.displayName?.split(" ")[0] || user?.email?.split("@")[0] || "User";

  return (
    <>
      <style>{`
        .nav-desktop-nav { display: flex; }
        .nav-desktop-actions { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 1100px) {
          .nav-desktop-nav { display: none !important; }
          .nav-desktop-actions { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        .mobile-menu { position: fixed; top: 68px; left: 0; right: 0; background: #1e293b; border-bottom: 1px solid rgba(255,255,255,0.08); z-index: 99; padding: 12px 16px 20px; display: flex; flex-direction: column; gap: 4px; box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
        .mobile-menu .nav-link { font-size: 15px !important; padding: 12px 16px !important; border-radius: 10px !important; }
        .mobile-menu-actions { display: flex; gap: 10px; padding: 12px 4px 0; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 8px; }
        .login-btn:hover { background: rgba(34,211,238,0.18) !important; border-color: rgba(34,211,238,0.7) !important; }
        .back-btn:hover { color: #f1f5f9 !important; border-color: rgba(255,255,255,0.25) !important; background: rgba(255,255,255,0.06) !important; }
        .user-dropdown { position: absolute; top: calc(100% + 10px); right: 0; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 8px; min-width: 180px; box-shadow: 0 8px 32px rgba(0,0,0,0.4); z-index: 200; }
        .user-dropdown a, .user-dropdown button { display: flex; align-items: center; gap: 8px; width: 100%; padding: 9px 12px; border-radius: 8px; font-size: 13px; color: #94a3b8; text-decoration: none; background: none; border: none; cursor: pointer; font-family: inherit; transition: all 0.15s; text-align: left; }
        .user-dropdown a:hover, .user-dropdown button:hover { background: rgba(255,255,255,0.06); color: #f1f5f9; }
        .logout-btn:hover { color: #f87171 !important; background: rgba(239,68,68,0.08) !important; }
      `}</style>

      <header style={{ background: "#1e293b", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", height: 68, gap: 8 }}>

          {/* Back Button */}
          {pathname !== "/" && (
            <button onClick={() => router.back()} className="back-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0, background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8", padding: "7px 12px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Back
            </button>
          )}

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0, marginRight: 8 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#06b6d4,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>💙</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#f1f5f9", letterSpacing: "-0.3px", lineHeight: 1.1 }}>ArogyaSetu</div>
              <div style={{ fontSize: 10, color: "#64748b" }}>आरोग्य सेतु • Health Bridge</div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-desktop-nav" style={{ alignItems: "center", gap: 0 }}>
            {links.map(l => (
              l.external
                ? <a key={l.href} href={l.href} className="nav-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, padding: "6px 9px", whiteSpace: "nowrap" }}>
                    <span style={{ fontSize: 12 }}>{l.icon}</span>{l.label}
                  </a>
                : <Link key={l.href} href={l.href} className={`nav-link ${pathname === l.href ? "active" : ""}`} style={{ fontSize: 13, padding: "6px 9px", whiteSpace: "nowrap" }}>
                    <span style={{ fontSize: 12 }}>{l.icon}</span>{l.label}
                  </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Desktop Right Actions */}
          <div className="nav-desktop-actions" style={{ alignItems: "center", gap: 8, flexShrink: 0 }}>
            {!userLoading && (
              user ? (
                /* ── LOGGED IN — show user avatar + dropdown ── */
                <div style={{ position: "relative" }}>
                  <button
                    onClick={() => setDropdownOpen(o => !o)}
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.3)", color: "#f1f5f9", padding: "7px 14px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "inherit" }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#06b6d4,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff" }}>
                      {firstName[0].toUpperCase()}
                    </div>
                    {firstName}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="user-dropdown">
                      <div style={{ padding: "8px 12px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 6 }}>
                        <div style={{ fontSize: 12, color: "#475569", marginBottom: 2 }}>Signed in as</div>
                        <div style={{ fontSize: 13, color: "#f1f5f9", fontWeight: 600, wordBreak: "break-all" }}>{user.email}</div>
                      </div>
                      <Link href="/dashboard" onClick={() => setDropdownOpen(false)}>
                        <span>👤</span> My Dashboard
                      </Link>
                      <Link href="/appointments" onClick={() => setDropdownOpen(false)}>
                        <span>📅</span> My Appointments
                      </Link>
                      <button onClick={handleLogout} className="logout-btn">
                        <span>🚪</span> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* ── LOGGED OUT — show Login button ── */
                <Link href="/auth" className="login-btn" style={{
                  display: "inline-flex", alignItems: "center", gap: 7, flexShrink: 0,
                  background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.4)",
                  color: "#22d3ee", padding: "8px 18px", borderRadius: 10,
                  fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", transition: "all 0.2s"
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  Login / Sign Up
                </Link>
              )
            )}

            <Link href="/appointments" className="btn-primary" style={{ fontSize: 13, padding: "8px 14px", whiteSpace: "nowrap", flexShrink: 0 }}>
              📅 Book Now
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <div className="nav-hamburger" style={{ alignItems: "center", gap: 8, marginLeft: "auto" }}>
            {!userLoading && (
              user ? (
                <button onClick={handleLogout} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171", padding: "7px 12px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  🚪 Logout
                </button>
              ) : (
                <Link href="/auth" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.4)", color: "#22d3ee", padding: "7px 12px", borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  Login
                </Link>
              )
            )}
            <button onClick={() => setMenuOpen(o => !o)}
              style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", padding: "8px 10px", borderRadius: 10, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          {links.map(l => (
            l.external
              ? <a key={l.href} href={l.href} className="nav-link" target="_blank" rel="noopener noreferrer">
                  <span>{l.icon}</span> {l.label}
                </a>
              : <Link key={l.href} href={l.href} className={`nav-link ${pathname === l.href ? "active" : ""}`}>
                  <span>{l.icon}</span> {l.label}
                </Link>
          ))}
          <div className="mobile-menu-actions">
            <Link href="/appointments" className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>📅 Book Now</Link>
          </div>
        </div>
      )}
    </>
  );
}