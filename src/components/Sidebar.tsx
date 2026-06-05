import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { path: "/dashboard", label: "Dashboard", icon: "⬡" },
  { path: "/transfer", label: "Transfer", icon: "↗" },
  { path: "/fx", label: "FX Rates", icon: "◈" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;

  if (isMobile) return null;

  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  const userRaw = localStorage.getItem("kinetiq_user");
  const user = userRaw ? JSON.parse(userRaw) : null;

  return (
    <div style={s.sidebar}>
      <div style={s.logo}>KINETIQ</div>
      <div style={s.tagline}>Money at the Speed of Ambition</div>

      <div style={s.nav}>
        {links.map(link => (
          <div
            key={link.path}
            style={location.pathname === link.path ? { ...s.link, ...s.activeLink } : s.link}
            onClick={() => navigate(link.path)}
          >
            <span style={s.icon}>{link.icon}</span>
            {link.label}
          </div>
        ))}
      </div>

      <div style={s.bottom}>
        <div style={s.userBox}>
          <div style={s.avatar}>{user?.email?.[0]?.toUpperCase() || "U"}</div>
          <div style={s.userInfo}>
            <div style={s.userEmail}>{user?.email}</div>
            <div style={s.userType}>{user?.userType}</div>
          </div>
        </div>
        <button style={s.logoutBtn} onClick={logout}>Sign Out</button>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  sidebar: {
    width: 260,
    height: "100vh",
    background: "#0A1F44",
    display: "flex",
    flexDirection: "column",
    padding: "32px 20px 24px 20px",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 100,
  },
  logo: { color: "#ffffff", fontSize: 24, fontWeight: 900, letterSpacing: 4, marginBottom: 4 },
  tagline: { color: "#00C896", fontSize: 11, fontStyle: "italic", marginBottom: 40 },
  nav: { display: "flex", flexDirection: "column", gap: 4, flex: 1 },
  link: {
    display: "flex", alignItems: "center", gap: 12,
    color: "#7A8FA6", fontSize: 14, fontWeight: 500,
    padding: "12px 16px", borderRadius: 10, cursor: "pointer",
  },
  activeLink: { background: "rgba(255,255,255,0.1)", color: "#ffffff" },
  icon: { fontSize: 18, width: 20, textAlign: "center" },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: 16,
    marginTop: "auto",
  },
  userBox: { display: "flex", alignItems: "center", gap: 12, marginBottom: 12 },
  avatar: {
    width: 36, height: 36, borderRadius: "50%",
    background: "#00C896", color: "#0A1F44",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 800, fontSize: 14, flexShrink: 0,
  },
  userInfo: { flex: 1, overflow: "hidden" },
  userEmail: {
    color: "#fff", fontSize: 12, fontWeight: 600,
    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
  },
  userType: { color: "#7A8FA6", fontSize: 11, textTransform: "capitalize" },
  logoutBtn: {
    width: "100%",
    padding: "10px 16px",
    background: "rgba(255,0,0,0.2)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: 8,
    fontSize: 13,
    cursor: "pointer",
    textAlign: "center",
  },
};