import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://kinetiq-core.onrender.com";

interface User {
  id: string; email: string; userType: string;
  kycStatus: string; country: string; createdAt: string;
}
interface Transaction {
  id: string; amount: string; currency: string;
  txType: string; status: string; reference: string; createdAt: string;
}
interface Stats {
  totalUsers: number; totalTransactions: number;
  totalAccounts: number; totalCommissions: number;
}

export default function AdminPage() {
  const nav = useNavigate();
  const token = localStorage.getItem("kinetiq_token");
  const [stats, setStats] = useState<Stats | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"overview"|"users"|"transactions">("overview");

  useEffect(() => {
    if (!token) { nav("/login"); return; }
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/admin/overview`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(res.data.stats);
      setUsers(res.data.users);
      setTransactions(res.data.transactions);
      setError("");
    } catch (e: any) {
      setError(e.response?.data?.error || "Failed to load admin data");
    } finally {
      setLoading(false);
    }
  }

  const typeColor: Record<string,string> = {
    athlete:"#00D4A0",agent:"#F0A500",sme:"#4080FF",
    individual:"#8A9BB0",club:"#A040FF",scout:"#FF6040"
  };
  const txColor: Record<string,string> = {
    deposit:"#00D4A0",transfer:"#4080FF",
    fx_conversion:"#F0A500",commission:"#A040FF",payout:"#FF6040"
  };

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:#040D1C;color:#F0F4FF;font-family:'DM Sans',sans-serif;}
        .atop{background:#071428;border-bottom:1px solid rgba(255,255,255,.06);padding:16px 40px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
        .alogo{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;letter-spacing:4px;cursor:pointer;color:#F0F4FF;}
        .alogo em{color:#00D4A0;font-style:normal;}
        .abadge{background:rgba(240,165,0,.1);border:1px solid rgba(240,165,0,.3);border-radius:100px;padding:4px 12px;font-size:11px;color:#F0A500;font-weight:700;letter-spacing:1px;text-transform:uppercase;}
        .aright{display:flex;gap:10px;}
        .abtn{padding:8px 16px;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#8A9BB0;font-size:12px;cursor:pointer;background:none;transition:all .2s;}
        .abtn:hover{border-color:#00D4A0;color:#00D4A0;}
        .amain{padding:32px 40px;}
        .atabs{display:flex;gap:4px;margin-bottom:28px;background:#071428;border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:4px;width:fit-content;}
        .atab{padding:8px 20px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;color:#8A9BB0;border:none;background:none;}
        .atab.on{background:#0B1A2E;color:#F0F4FF;border:1px solid rgba(255,255,255,.06);}
        .sgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:28px;}
        .sc{background:#0B1A2E;border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:24px;}
        .sc-n{font-family:'Syne',sans-serif;font-size:40px;font-weight:800;margin-bottom:6px;}
        .sc-l{font-size:12px;color:#8A9BB0;}
        .sec{background:#0B1A2E;border:1px solid rgba(255,255,255,.06);border-radius:16px;overflow:hidden;margin-bottom:20px;}
        .sec-h{padding:18px 24px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;}
        .sec-t{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;}
        .sec-c{font-size:12px;color:#8A9BB0;background:#071428;padding:4px 10px;border-radius:100px;}
        table{width:100%;border-collapse:collapse;}
        th{padding:12px 20px;text-align:left;font-size:11px;color:#6A7A90;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid rgba(255,255,255,.06);font-weight:600;}
        td{padding:13px 20px;font-size:13px;border-bottom:1px solid rgba(255,255,255,.03);}
        tr:last-child td{border-bottom:none;}
        tr:hover td{background:rgba(255,255,255,.02);}
        .pill{padding:3px 10px;border-radius:100px;font-size:11px;font-weight:700;text-transform:capitalize;}
        .mono{font-family:monospace;font-size:11px;color:#8A9BB0;}
        .loading{text-align:center;padding:80px;color:#8A9BB0;}
        .err{text-align:center;padding:80px;color:#F05050;}
        @media(max-width:768px){
          .atop{padding:14px 20px;}.amain{padding:20px;}
          .sgrid{grid-template-columns:1fr 1fr;}
          th:nth-child(n+4),td:nth-child(n+4){display:none;}
        }
      `}</style>

      <div className="atop">
        <div className="alogo" onClick={() => nav("/dashboard")}>KINET<em>IQ</em></div>
        <div className="abadge">Admin</div>
        <div className="aright">
          <button className="abtn" onClick={loadData}>Refresh</button>
          <button className="abtn" onClick={() => nav("/dashboard")}>Dashboard</button>
          <button className="abtn" onClick={() => { localStorage.clear(); nav("/login"); }}>Sign Out</button>
        </div>
      </div>

      <div className="amain">
        {loading && <div className="loading">Loading platform data...</div>}
        {error && <div className="err">{error}</div>}
        {!loading && !error && (
          <>
            <div className="atabs">
              {(["overview","users","transactions"] as const).map(t => (
                <button key={t} className={`atab${tab===t?" on":""}`} onClick={() => setTab(t)}>
                  {t.charAt(0).toUpperCase()+t.slice(1)}
                </button>
              ))}
            </div>

            {tab==="overview" && (
              <>
                <div className="sgrid">
                  {[
                    {n:stats?.totalUsers??0,l:"Total Users",c:"#00D4A0"},
                    {n:stats?.totalTransactions??0,l:"Transactions",c:"#4080FF"},
                    {n:stats?.totalAccounts??0,l:"Wallets",c:"#F0A500"},
                    {n:stats?.totalCommissions??0,l:"Commissions",c:"#A040FF"},
                  ].map((s,i) => (
                    <div className="sc" key={i}>
                      <div className="sc-n" style={{color:s.c}}>{s.n}</div>
                      <div className="sc-l">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="sec">
                  <div className="sec-h"><div className="sec-t">Recent Users</div><div className="sec-c">{Math.min(users.length,5)} of {users.length}</div></div>
                  <table><thead><tr><th>Email</th><th>Type</th><th>Country</th><th>KYC</th><th>Joined</th></tr></thead>
                  <tbody>{users.slice(0,5).map(u=>(
                    <tr key={u.id}>
                      <td>{u.email}</td>
                      <td><span className="pill" style={{background:`${typeColor[u.userType]||"#8A9BB0"}20`,color:typeColor[u.userType]||"#8A9BB0"}}>{u.userType}</span></td>
                      <td>{u.country}</td>
                      <td><span className="pill" style={{background:u.kycStatus==="verified"?"rgba(0,212,160,.15)":"rgba(240,165,0,.15)",color:u.kycStatus==="verified"?"#00D4A0":"#F0A500"}}>{u.kycStatus}</span></td>
                      <td className="mono">{new Date(u.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}</tbody></table>
                </div>
                <div className="sec">
                  <div className="sec-h"><div className="sec-t">Recent Transactions</div><div className="sec-c">{Math.min(transactions.length,5)} of {transactions.length}</div></div>
                  <table><thead><tr><th>Type</th><th>Amount</th><th>Currency</th><th>Status</th><th>Date</th></tr></thead>
                  <tbody>{transactions.slice(0,5).map(t=>(
                    <tr key={t.id}>
                      <td><span className="pill" style={{background:`${txColor[t.txType]||"#8A9BB0"}20`,color:txColor[t.txType]||"#8A9BB0"}}>{t.txType}</span></td>
                      <td style={{fontWeight:700}}>{parseFloat(t.amount).toLocaleString()}</td>
                      <td>{t.currency}</td>
                      <td><span className="pill" style={{background:"rgba(0,212,160,.12)",color:"#00D4A0"}}>{t.status}</span></td>
                      <td className="mono">{new Date(t.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}</tbody></table>
                </div>
              </>
            )}

            {tab==="users" && (
              <div className="sec">
                <div className="sec-h"><div className="sec-t">All Users</div><div className="sec-c">{users.length} total</div></div>
                <table><thead><tr><th>Email</th><th>Type</th><th>Country</th><th>KYC</th><th>Joined</th></tr></thead>
                <tbody>{users.map(u=>(
                  <tr key={u.id}>
                    <td>{u.email}</td>
                    <td><span className="pill" style={{background:`${typeColor[u.userType]||"#8A9BB0"}20`,color:typeColor[u.userType]||"#8A9BB0"}}>{u.userType}</span></td>
                    <td>{u.country}</td>
                    <td><span className="pill" style={{background:u.kycStatus==="verified"?"rgba(0,212,160,.15)":"rgba(240,165,0,.15)",color:u.kycStatus==="verified"?"#00D4A0":"#F0A500"}}>{u.kycStatus}</span></td>
                    <td className="mono">{new Date(u.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}</tbody></table>
              </div>
            )}

            {tab==="transactions" && (
              <div className="sec">
                <div className="sec-h"><div className="sec-t">All Transactions</div><div className="sec-c">{transactions.length} total</div></div>
                <table><thead><tr><th>Type</th><th>Amount</th><th>Currency</th><th>Reference</th><th>Status</th><th>Date</th></tr></thead>
                <tbody>{transactions.map(t=>(
                  <tr key={t.id}>
                    <td><span className="pill" style={{background:`${txColor[t.txType]||"#8A9BB0"}20`,color:txColor[t.txType]||"#8A9BB0"}}>{t.txType}</span></td>
                    <td style={{fontWeight:700}}>{parseFloat(t.amount).toLocaleString()}</td>
                    <td>{t.currency}</td>
                    <td className="mono" style={{maxWidth:"140px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{t.reference||"—"}</td>
                    <td><span className="pill" style={{background:"rgba(0,212,160,.12)",color:"#00D4A0"}}>{t.status}</span></td>
                    <td className="mono">{new Date(t.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}</tbody></table>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}