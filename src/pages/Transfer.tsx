import MobileNav from "../components/MobileNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const API = "https://web-production-51e3b.up.railway.app";

interface Account { id: string; currency: string; }

export default function Transfer() {
  const navigate = useNavigate();
  const token = localStorage.getItem("kinetiq_token");
  const userRaw = localStorage.getItem("kinetiq_user");
  const user = userRaw ? JSON.parse(userRaw) : null;

  const [accounts, setAccounts] = useState<Account[]>([]);
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<any>(null);
  const [error, setError] = useState("");

  const headers = { Authorization: `Bearer ${token}` };
  

  useEffect(() => {
    if (!token || !user) { navigate("/login"); return; }
    loadAccounts();
  }, []);

  async function loadAccounts() {
    const res = await axios.get(`${API}/users/${user.id}`, { headers });
    setAccounts(res.data.accounts || []);
  }

  async function handleTransfer() {
    if (!fromAccount || !toAccount || !amount) {
      setError("All fields are required"); return;
    }
    if (fromAccount === toAccount) {
      setError("Cannot transfer to the same account"); return;
    }
    setLoading(true);
    setError("");
    setSuccess(null);
    try {
      const from = accounts.find(a => a.id === fromAccount);
      const res = await axios.post(`${API}/transfer`, {
        fromAccountId: fromAccount,
        toAccountId: toAccount,
        amount: parseFloat(amount),
        currency: from?.currency,
        reference: reference || undefined
      }, { headers });
      setSuccess(res.data);
      setAmount("");
      setReference("");
    } catch (e: any) {
      setError(e.response?.data?.error || "Transfer failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={s.container}>
      <Sidebar />
      <MobileNav />
      <div style={s.main}>
        <div style={s.header}>
          <div style={s.title}>Send Money</div>
          <div style={s.subtitle}>Transfer funds between your wallets instantly</div>
        </div>

        <div style={s.card}>
          <div style={s.field}>
            <label style={s.label}>From account</label>
            <select style={s.select} value={fromAccount} onChange={e => setFromAccount(e.target.value)}>
              <option value="">Select source wallet</option>
              {accounts.map(acc => (
                <option key={acc.id} value={acc.id}>
                  {acc.currency} — {acc.id.slice(0, 12)}...
                </option>
              ))}
            </select>
          </div>

          <div style={s.field}>
            <label style={s.label}>To account</label>
            <select style={s.select} value={toAccount} onChange={e => setToAccount(e.target.value)}>
              <option value="">Select destination wallet</option>
              {accounts.map(acc => (
                <option key={acc.id} value={acc.id}>
                  {acc.currency} — {acc.id.slice(0, 12)}...
                </option>
              ))}
            </select>
          </div>

          <div style={s.field}>
            <label style={s.label}>Amount</label>
            <input
              style={s.input}
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>

          <div style={s.field}>
            <label style={s.label}>Reference (optional)</label>
            <input
              style={s.input}
              type="text"
              placeholder="e.g. Club payment - FC Example"
              value={reference}
              onChange={e => setReference(e.target.value)}
            />
          </div>

          {error && <div style={s.error}>{error}</div>}

          {success && (
            <div style={s.successBox}>
              <div style={s.successTitle}>Transfer successful</div>
              <div style={s.successRow}>
                <span>Transaction ID</span>
                <span style={s.successVal}>{success.transactionId}</span>
              </div>
              <div style={s.successRow}>
                <span>Amount</span>
                <span style={s.successVal}>{success.amount} {success.currency}</span>
              </div>
              <div style={s.successRow}>
                <span>Status</span>
                <span style={{ ...s.successVal, color: "#00695C" }}>{success.status}</span>
              </div>
            </div>
          )}

          <button
            style={loading ? { ...s.button, opacity: 0.7 } : s.button}
            onClick={handleTransfer}
            disabled={loading}
          >
            {loading ? "Processing..." : "Send Transfer"}
          </button>
        </div>

        <div style={s.noteBox}>
          <div style={s.noteTitle}>FFAR Compliance</div>
          <div style={s.noteText}>
            All transfers are recorded on an immutable double-entry ledger. Agent commissions are automatically capped at 10% per FIFA Football Agent Regulations Article 15. Every transaction generates a unique audit trail.
          </div>
        </div>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  container: { display: "flex", minHeight: "100vh", background: "#F0F2F7" },
  main: {
  marginLeft: window.innerWidth <= 768 ? 0 : 260,
  flex: 1,
  padding: window.innerWidth <= 768 ? "80px 16px 24px 16px" : "32px 40px",
  minHeight: "100vh",
},
  header: { marginBottom: 32 },
  title: { fontSize: 28, fontWeight: 800, color: "#0A1F44", marginBottom: 6 },
  subtitle: { fontSize: 14, color: "#7A8FA6" },
  card: {
    background: "#fff", borderRadius: 16, padding: "32px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 24, maxWidth: 560,
  },
  field: { marginBottom: 20 },
  label: { display: "block", fontSize: 13, fontWeight: 600, color: "#0A1F44", marginBottom: 8 },
  select: {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    border: "1.5px solid #E0E6EF", fontSize: 14, background: "#fff",
    color: "#0A1F44", outline: "none",
  },
  input: {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    border: "1.5px solid #E0E6EF", fontSize: 14, outline: "none",
    color: "#0A1F44",
  },
  button: {
    width: "100%", padding: "14px", background: "#0A1F44",
    color: "#fff", border: "none", borderRadius: 10,
    fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 8,
  },
  error: {
    background: "#FFF0F0", color: "#CC0000", padding: "12px 16px",
    borderRadius: 10, fontSize: 13, marginBottom: 16,
  },
  successBox: {
    background: "#E6F9F0", borderRadius: 10, padding: "16px 20px",
    marginBottom: 16,
  },
  successTitle: { fontSize: 14, fontWeight: 700, color: "#00695C", marginBottom: 12 },
  successRow: {
    display: "flex", justifyContent: "space-between",
    fontSize: 12, color: "#333", marginBottom: 6,
  },
  successVal: { fontWeight: 600, fontFamily: "monospace", fontSize: 11 },
  noteBox: {
    background: "#0A1F44", borderRadius: 16, padding: "24px 28px", maxWidth: 560,
  },
  noteTitle: { color: "#00C896", fontSize: 13, fontWeight: 700, marginBottom: 8 },
  noteText: { color: "#7A8FA6", fontSize: 12, lineHeight: 1.7 },
};