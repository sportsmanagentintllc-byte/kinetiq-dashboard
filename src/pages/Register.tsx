import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://kinetiq-core.onrender.com";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [userType, setUserType] = useState("athlete");
  const [country, setCountry] = useState("NG");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister() {
    if (!email || !password || !confirm) {
      setError("All fields are required");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await axios.post(`${API}/users`, { email, password, userType, country });
navigate("/login");
    } catch (e: any) {
      setError(e.response?.data?.error || "Registration failed");
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
            <label style={s.label}>Email address</label>
            <input
              style={s.input}
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div style={s.field}>
            <label style={s.label}>I am a</label>
            <select
              style={s.select}
              value={userType}
              onChange={e => setUserType(e.target.value)}
            >
              <option value="athlete">Athlete</option>
              <option value="agent">Agent</option>
              <option value="sme">SME / Business</option>
              <option value="individual">Individual</option>
              <option value="club">Club</option>
              <option value="scout">Scout</option>
            </select>
          </div>

          <div style={s.field}>
            <label style={s.label}>Country</label>
            <select
              style={s.select}
              value={country}
              onChange={e => setCountry(e.target.value)}
            >
              <option value="NG">Nigeria</option>
              <option value="GH">Ghana</option>
              <option value="KE">Kenya</option>
              <option value="ZA">South Africa</option>
              <option value="SN">Senegal</option>
              <option value="CI">Côte d'Ivoire</option>
              <option value="GB">United Kingdom</option>
              <option value="ES">Spain</option>
              <option value="US">United States</option>
              <option value="SE">Sweden</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
            </select>
          </div>

          <div style={s.field}>
            <label style={s.label}>Password</label>
            <input
              style={s.input}
              type="password"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div style={s.field}>
            <label style={s.label}>Confirm password</label>
            <input
              style={s.input}
              type="password"
              placeholder="Repeat your password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleRegister()}
            />
          </div>

          {error && <div style={s.error}>{error}</div>}

          <button
            style={loading ? { ...s.button, opacity: 0.7 } : s.button}
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <div style={s.loginLink}>
            Already have an account?{" "}
            <span style={s.link} onClick={() => navigate("/login")}>
              Sign in
            </span>
          </div>
        </div>

        <div style={s.footer}>
          NGN and USD wallets created automatically · Secure banking infrastructure
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
    padding: "40px 20px",
  },
  card: {
    background: "#ffffff",
    borderRadius: 16,
    padding: "48px 40px",
    width: 440,
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
    marginBottom: 32,
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
  select: {
    padding: "12px 16px",
    borderRadius: 8,
    border: "1.5px solid #ddd",
    fontSize: 14,
    background: "#fff",
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
  loginLink: {
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
    fontSize: 11,
    color: "#999",
    lineHeight: 1.5,
  },
};