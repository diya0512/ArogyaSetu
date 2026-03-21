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

  const firstName =
    user?.displayName?.split(" ")[0] ||
    user?.email?.split("@")[0] ||
    "Account";

  return (
    <>
      <style>{`
        /* ── Topbar ── */
        .topbar {
          background: #0f2d52;
          color: rgba(255,255,255,0.7);
          font-size: 12px;
          padding: 6px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .topbar a { color: #fff; text-decoration: none; font-weight: 600; }
        .topbar-left { display: flex; align-items: center; gap: 6px; }
        .topbar-right { display: flex; align-items: center; gap: 16px; }
        .topbar-divider { width: 1px; height: 12px; background: rgba(255,255,255,0.2); }

        /* ── Navbar ── */
        .navbar {
          background: #fff;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          height: 60px;
          gap: 6px;
        }

        /* logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
          margin-right: 12px;
        }
        .logo-mark {
          width: 36px; height: 36px;
          background: #0f2d52;
          border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
        }
        .logo-name {
          font-family: 'DM Serif Display', serif;
          font-size: 17px;
          color: #0f2d52;
          letter-spacing: -0.3px;
          line-height: 1;
        }
        .logo-sub {
          font-size: 10px;
          color: #6b7280;
          margin-top: 2px;
          font-family: 'DM Sans', sans-serif;
        }

        /* nav links */
        .nav-desktop { display: flex; align-items: center; gap: 2px; flex: 1; }
        .spacer { flex: 1; }

        /* active indicator */
        .nav-link-wrap { position: relative; }
        .nav-link-wrap.active::after {
          content: '';
          position: absolute;
          bottom: -18px;
          left: 50%; transform: translateX(-50%);
          width: 20px; height: 2px;
          background: #0f2d52;
          border-radius: 99px;
        }

        /* right actions */
        .nav-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

        /* user button */
        .user-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #f0f4fa; border: 1px solid #e2e8f0;
          color: #0f2d52; padding: 6px 14px;
          border-radius: 6px; font-size: 13px; font-weight: 600;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
        }
        .user-btn:hover { background: #e8eef7; }
        .avatar {
          width: 24px; height: 24px; border-radius: 50%;
          background: #0f2d52; display: flex;
          align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; color: #fff;
        }

        /* dropdown */
        .dropdown {
          position: absolute; top: calc(100% + 8px); right: 0;
          background: #fff; border: 1px solid #e2e8f0;
          border-radius: 8px; padding: 6px;
          min-width: 210px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
          z-index: 200;
        }
        .dropdown-header {
          padding: 10px 12px 12px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 4px;
        }
        .dropdown-label { font-size: 11px; color: #9ca3af; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.04em; }
        .dropdown-email { font-size: 13px; color: #0f2d52; font-weight: 600; }
        .dropdown a, .dropdown button {
          display: flex; align-items: center; gap: 8px;
          width: 100%; padding: 8px 12px;
          border-radius: 5px; font-size: 13px;
          color: #374151; background: none; border: none;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          text-align: left; text-decoration: none; font-weight: 500;
        }
        .dropdown a:hover, .dropdown button:hover { background: #f7f8fa; color: #0f2d52; }
        .dropdown-divider { border: none; border-top: 1px solid #f1f5f9; margin: 4px 0; }
        .logout:hover { color: #991b1b !important; background: #fef2f2 !important; }

        /* back button */
        .back-btn {
          display: inline-flex; align-items: center; gap: 5px;
          background: none; border: 1px solid #e2e8f0;
          color: #6b7280; padding: 5px 11px;
          border-radius: 5px; font-size: 12px; font-weight: 600;
          cursor: pointer; margin-right: 6px; flex-shrink: 0;
          font-family: 'DM Sans', sans-serif;
        }
        .back-btn:hover { background: #f7f8fa; color: #374151; }

        /* mobile */
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-actions { display: none !important; }
          .nav-mobile-actions { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .nav-mobile-actions { display: none !important; }
          .topbar { display: flex !important; }
        }

        .nav-mobile-actions {
          display: none;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }
        .hamburger {
          background: none; border: 1px solid #e2e8f0;
          color: #374151; padding: 6px 10px;
          border-radius: 5px; cursor: pointer;
          font-size: 16px; line-height: 1;
        }
        .mobile-menu {
          position: fixed; top: 95px; left: 0; right: 0;
          background: #fff; border-bottom: 1px solid #e2e8f0;
          z-index: 99; padding: 12px 20px 16px;
          display: flex; flex-direction: column; gap: 4px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .mobile-menu .nav-link {
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 14px;
        }
        .mobile-menu-footer {
          border-top: 1px solid #f1f5f9;
          margin-top: 8px; padding-top: 10px;
        }
      `}</style>

      {/* ── Topbar ── */}
      <div className="topbar">
        <div className="topbar-left">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          Official Portal &mdash; Ministry of Health &amp; Family Welfare
        </div>
        <div className="topbar-right">
          <a href="tel:104">Health Helpline: 104</a>
          <div className="topbar-divider" />
          <a href="tel:108">Ambulance: 108</a>
        </div>
      </div>

      {/* ── Navbar ── */}
      <header className="navbar">
        <div className="navbar-inner">

          {/* Back */}
          {pathname !== "/" && (
            <button onClick={() => router.back()} className="back-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Back
            </button>
          )}

          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-mark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div>
              <div className="logo-name">ArogyaSetu</div>
              <div className="logo-sub">आरोग्य सेतु · Health Bridge</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            {links.map(l => (
              <div key={l.href} className={`nav-link-wrap ${pathname === l.href ? "active" : ""}`}>
                {l.external ? (
                  <a href={l.href} className="nav-link" target="_blank" rel="noopener noreferrer">{l.label}</a>
                ) : (
                  <Link href={l.href} className={`nav-link${pathname === l.href ? " active" : ""}`}>{l.label}</Link>
                )}
              </div>
            ))}
          </nav>

          <div className="spacer" />

          {/* Desktop actions */}
          <div className="nav-actions">
            {user ? (
              <div style={{ position: "relative" }}>
                <button className="user-btn" onClick={() => setDropdownOpen(o => !o)}>
                  <div className="avatar">{firstName[0].toUpperCase()}</div>
                  {firstName}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                {dropdownOpen && (
                  <div className="dropdown">
                    <div className="dropdown-header">
                      <div className="dropdown-label">Signed in as</div>
                      <div className="dropdown-email">{user.email}</div>
                    </div>
                    <Link href="/dashboard" onClick={() => setDropdownOpen(false)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                      My Dashboard
                    </Link>
                    <Link href="/appointments" onClick={() => setDropdownOpen(false)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                      My Appointments
                    </Link>
                    <hr className="dropdown-divider" />
                    <button onClick={handleLogout} className="logout">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth" className="btn-ghost" style={{ fontSize: 13, padding: "7px 14px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Sign in
              </Link>
            )}
            <Link href="/appointments" className="btn-primary" style={{ fontSize: 13, padding: "7px 16px" }}>
              Book Appointment
            </Link>
          </div>

          {/* Mobile */}
          <div className="nav-mobile-actions">
            {!user && (
              <Link href="/auth" className="btn-ghost" style={{ fontSize: 13, padding: "6px 12px" }}>Sign in</Link>
            )}
            <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          {links.map(l =>
            l.external ? (
              <a key={l.href} href={l.href} className="nav-link" target="_blank" rel="noopener noreferrer">{l.label}</a>
            ) : (
              <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? " active" : ""}`}>{l.label}</Link>
            )
          )}
          <div className="mobile-menu-footer">
            <Link href="/appointments" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
