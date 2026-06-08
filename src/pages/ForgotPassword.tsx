import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://kinetiq-core.onrender.com";

export default function ForgotPassword() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!email) { setError("Email is required"); return; }
    setLoading(true);
    setError("");
    try {
      await axios.post(`${API}/auth/forgot-password`, { email });
      setSent(true);
    } catch (e: any) {
      setError(e.response?.data?.error || "Something went wrong");
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
        .card{background:#0B1A2E;border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:48px 40px;width:100%;max-width:420px;}
        .logo{font-family:'Syne',sans-serif;font-size:24px;font-weight:800;letter-spacing:5px;text-align:center;margin-bottom:32px;color:#F0F4FF;}
        .logo em{color:#00D4A0;font-style:normal;}
        .title{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;margin-bottom:10px;}
        .sub{font-size:14px;color:#8A9BB0;line-height:1.6;margin-bottom:28px;}
        .field{margin-bottom:18px;}
        .field label{display:block;font-size:12px;font-weight:600;color:#8A9BB0;margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px;}
        .field input{width:100%;padding:13px 16px;background:#071428;border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#F0F4FF;font-size:14px;outline:none;transition:border .2s;font-family:'DM Sans',sans-serif;}
        .field input:focus{border-color:#00D4A0;}
        .err{background:rgba(240,80,80,.1);border:1px solid rgba(240,80,80,.2);border-radius:8px;padding:10px 14px;font-size:13px;color:#F05050;margin-bottom:16px;}
        .success{background:rgba(0,212,160,.08);border:1px solid rgba(0,212,160,.2);border-radius:12px;padding:24px;text-align:center;}
        .success h3{font-family:'Syne',sans-serif;font-size:16px;font-weight:700;color:#00D4A0;margin-bottom:8px;}
        .success p{font-size:13px;color:#8A9BB0;line-height:1.6;}
        .btn{width:100%;padding:14px;background:#00D4A0;color:#040D1C;border:none;border-radius:10px;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;cursor:pointer;transition:all .2s;margin-top:8px;}
        .btn:hover{background:#00B589;}
        .btn:disabled{opacity:.6;cursor:not-allowed;}
        .back{text-align:center;margin-top:20px;font-size:13px;color:#6A7A90;cursor:pointer;}
        .back:hover{color:#F0F4FF;}
      `}</style>
      <div className="wrap">
        <div className="card">
          <div className="logo">KINET<em>IQ</em></div>
          {sent ? (
            <div className="success">
              <h3>Check your email</h3>
              <p>If an account exists for {email}, a password reset link has been sent. Check your inbox and spam folder.</p>
            </div>
          ) : (
            <>
              <div className="title">Forgot your password?</div>
              <div className="sub">Enter your email address and we'll send you a link to reset your password.</div>
              <div className="field">
                <label>Email Address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  placeholder="your@email.com" />
              </div>
              {error && <div className="err">{error}</div>}
              <button className="btn" onClick={handleSubmit} disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </>
          )}
          <div className="back" onClick={() => nav("/login")}>← Back to Login</div>
        </div>
      </div>
    </>
  );
}