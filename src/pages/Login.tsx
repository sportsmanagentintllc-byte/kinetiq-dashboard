import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://web-production-51e3b.up.railway.app";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(`${API}/auth/login`, { email, password });
      localStorage.setItem("kinetiq_token", res.data.token);
      localStorage.setItem("kinetiq_user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (e: any) {
      setError(e.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={s.container}>
      <div style={s.card}>
        <div style={s.logo}>KINETIQ</div>
        <div style={s.tagline}>Money at the Speed of Ambition</div>

        <div style={s.form}>
          <div style={s.field}>
            <label style={s.label}>Email</label>
            <input
              style={s.input}
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div style={s.field}>
            <label style={s.label}>Password</label>
            <input
              style={s.input}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
            />
          </div>

          {error && <div style={s.error}>{error}</div>}

          <button
            style={loading ? { ...s.button, opacity: 0.7 } : s.button}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div style={s.registerRow}>
            No account yet?{" "}
            <span style={s.link} onClick={() => navigate("/register")}>
              Create one
            </span>
          </div>
        </div>

        <div style={s.footer}>
          Secure banking infrastructure for African athletes
        </div>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    background: "#0A1F44",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    background: "#ffffff",
    borderRadius: 16,
    padding: "48px 40px",
    width: 400,
    boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
  },
  logo: {
    fontSize: 32,
    fontWeight: 800,
    color: "#0A1F44",
    letterSpacing: 3,
    textAlign: "center",
    marginBottom: 6,
  },
  tagline: {
    fontSize: 13,
    color: "#00695C",
    textAlign: "center",
    marginBottom: 36,
    fontStyle: "italic",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: "#333",
  },
  input: {
    padding: "12px 16px",
    borderRadius: 8,
    border: "1.5px solid #ddd",
    fontSize: 15,
    outline: "none",
  },
  button: {
    marginTop: 8,
    padding: "14px",
    background: "#0A1F44",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: 1,
  },
  error: {
    background: "#fff0f0",
    color: "#cc0000",
    padding: "10px 14px",
    borderRadius: 8,
    fontSize: 13,
  },
  registerRow: {
    textAlign: "center",
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
  link: {
    color: "#0A1F44",
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "underline",
  },
  footer: {
    marginTop: 28,
    textAlign: "center",
    fontSize: 12,
    color: "#999",
  },
};