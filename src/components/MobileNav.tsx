import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { path: "/dashboard", label: "Dashboard", icon: "⬡" },
  { path: "/transfer", label: "Transfer", icon: "↗" },
  { path: "/fx", label: "FX Rates", icon: "◈" },
];

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) return null;

  const userRaw = localStorage.getItem("kinetiq_user");
  const user = userRaw ? JSON.parse(userRaw) : null;

  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  return (
    <div>
      <div style={s.topBar}>
        <div style={s.logo}>KINETIQ</div>
        <button style={s.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={s.overlay} onClick={() => setMenuOpen(false)}>
          <div style={s.drawer} onClick={e => e.stopPropagation()}>
            <div style={s.userBox}>
              <div style={s.avatar}>{user?.email?.[0]?.toUpperCase() || "U"}</div>
              <div>
                <div style={s.userEmail}>{user?.email}</div>
                <div style={s.userType}>{user?.userType}</div>
              </div>
            </div>

            {links.map(link => (
              <div
                key={link.path}
                style={location.pathname === link.path ? { ...s.link, ...s.activeLink } : s.link}
                onClick={() => { navigate(link.path); setMenuOpen(false); }}
              >
                <span>{link.icon}</span>
                {link.label}
              </div>
            ))}

            <div style={s.logoutBtn} onClick={logout}>Sign Out</div>
          </div>
        </div>
      )}
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0A1F44",
    padding: "16px 20px",
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 200,
  },
  logo: { color: "#fff", fontSize: 20, fontWeight: 900, letterSpacing: 3 },
  menuBtn: {
    background: "none", border: "none",
    color: "#fff", fontSize: 24, cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    top: 56, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 199,
  },
  drawer: {
    background: "#0A1F44",
    padding: "24px 20px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  userBox: {
    display: "flex", alignItems: "center", gap: 12,
    padding: "16px 0",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    marginBottom: 8,
  },
  avatar: {
    width: 40, height: 40, borderRadius: "50%",
    background: "#00C896", color: "#0A1F44",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 800, fontSize: 16,
  },
  userEmail: { color: "#fff", fontSize: 13, fontWeight: 600 },
  userType: { color: "#7A8FA6", fontSize: 11, textTransform: "capitalize" },
  link: {
    display: "flex", alignItems: "center", gap: 12,
    color: "#7A8FA6", fontSize: 15, fontWeight: 500,
    padding: "14px 16px", borderRadius: 10, cursor: "pointer",
  },
  activeLink: { background: "rgba(255,255,255,0.1)", color: "#fff" },
  logoutBtn: {
    color: "#7A8FA6", fontSize: 14, cursor: "pointer",
    padding: "14px 16px", borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center", marginTop: 8,
  },
};