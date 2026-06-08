import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://kinetiq-core.onrender.com";

export default function AdminLogin() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(`${API}/auth/login`, { email, password });
      if (res.data.user.userType !== "admin") {
        setError("Access denied. Admin credentials required.");
        return;
      }
      localStorage.setItem("kinetiq_token", res.data.token);
      localStorage.setItem("kinetiq_user", JSON.stringify(res.data.user));
      window.location.href = "/admin";
    } catch (e: any) {
      setError(e.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:#040D1C;color:#F0F4FF;font-family:'DM Sans',sans-serif;}
        .wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;}
        .card{background:#0B1A2E;border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:48px 40px;width:100%;max-width:400px;}
        .logo{font-family:'Syne',sans-serif;font-size:24px;font-weight:800;letter-spacing:5px;text-align:center;margin-bottom:6px;}
        .logo em{color:#00D4A0;font-style:normal;}
        .badge{text-align:center;margin-bottom:36px;}
        .badge span{background:rgba(240,165,0,.1);border:1px solid rgba(240,165,0,.3);border-radius:100px;padding:4px 14px;font-size:11px;color:#F0A500;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;}
        .field{margin-bottom:18px;}
        .field label{display:block;font-size:12px;font-weight:600;color:#8A9BB0;margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px;}
        .field input{width:100%;padding:13px 16px;background:#071428;border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#F0F4FF;font-size:14px;outline:none;transition:border .2s;font-family:'DM Sans',sans-serif;}
        .field input:focus{border-color:#00D4A0;}
        .err{background:rgba(240,80,80,.1);border:1px solid rgba(240,80,80,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:#F05050;margin-bottom:16px;}
        .btn{width:100%;padding:14px;background:#00D4A0;color:#040D1C;border:none;border-radius:10px;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;cursor:pointer;transition:all .2s;margin-top:8px;}
        .btn:hover{background:#00B589;}
        .btn:disabled{opacity:.6;cursor:not-allowed;}
        .back{text-align:center;margin-top:20px;font-size:13px;color:#6A7A90;cursor:pointer;}
        .back:hover{color:#F0F4FF;}
      `}</style>
      <div className="wrap">
        <div className="card">
          <div className="logo">KINET<em>IQ</em></div>
          <div className="badge"><span>Admin Portal</span></div>
          <div className="field">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="admin@kineticfinancials.group" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              placeholder="••••••••••••" />
          </div>
          {error && <div className="err">{error}</div>}
          <button className="btn" onClick={handleLogin} disabled={loading}>
            {loading ? "Authenticating..." : "Access Admin Portal"}
          </button>
          <div className="back" onClick={() => nav("/")}>← Back to KINETIQ</div>
        </div>
      </div>
    </>
  );
}