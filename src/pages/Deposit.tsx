import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const API = "https://web-production-51e3b.up.railway.app";

export default function Deposit() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accountId = searchParams.get("accountId");
  const currency = searchParams.get("currency");

  const token = localStorage.getItem("kinetiq_token");
  const headers = { Authorization: `Bearer ${token}` };

  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<any>(null);
  const [error, setError] = useState("");

  const symbols: Record<string, string> = { USD: "$", NGN: "₦", GBP: "£", EUR: "€" };

  async function handleDeposit() {
    if (!amount || Number(amount) <= 0) {
      setError("Enter a valid amount");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(null);
    try {
      const res = await axios.post(`${API}/deposit`, {
        accountId,
        amount: parseFloat(amount),
        currency,
        reference: reference || `Deposit to ${currency} wallet`
      }, { headers });
      setSuccess(res.data);
      setAmount("");
      setReference("");
    } catch (e: any) {
      setError(e.response?.data?.error || "Deposit failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={s.container}>
      <Sidebar />
      <div style={s.main}>
        <div style={s.header}>
          <div style={s.title}>Deposit Funds</div>
          <div style={s.subtitle}>
            Add funds to your {currency} wallet
          </div>
        </div>

        <div style={s.card}>
          <div style={s.walletInfo}>
            <div style={s.walletCurrency}>{currency} Wallet</div>
            <div style={s.walletId}>{accountId?.slice(0, 20)}...</div>
          </div>

          <div style={s.field}>
            <label style={s.label}>Amount ({currency})</label>
            <div style={s.inputWrapper}>
              <span style={s.symbol}>{symbols[currency || ""] || ""}</span>
              <input
                style={s.input}
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div style={s.field}>
            <label style={s.label}>Reference (optional)</label>
            <input
              style={s.inputPlain}
              type="text"
              placeholder="e.g. Signing bonus - FC Example"
              value={reference}
              onChange={e => setReference(e.target.value)}
            />
          </div>

          {error && <div style={s.error}>{error}</div>}

          {success && (
            <div style={s.successBox}>
              <div style={s.successTitle}>✓ Deposit successful</div>
              <div style={s.successRow}>
                <span>Amount deposited</span>
                <span style={s.successVal}>
                  {symbols[currency || ""]}{success.amountDeposited} {currency}
                </span>
              </div>
              <div style={s.successRow}>
                <span>Transaction ID</span>
                <span style={s.successVal}>{success.transactionId?.slice(0, 20)}...</span>
              </div>
              <div style={s.successRow}>
                <span>Reference</span>
                <span style={s.successVal}>{success.reference}</span>
              </div>
              <button style={s.dashBtn} onClick={() => navigate("/dashboard")}>
                Back to Dashboard
              </button>
            </div>
          )}

          {!success && (
            <button
              style={loading ? { ...s.button, opacity: 0.7 } : s.button}
              onClick={handleDeposit}
              disabled={loading}
            >
              {loading ? "Processing..." : `Deposit ${currency}`}
            </button>
          )}
        </div>

        <div style={s.noteBox}>
          <div style={s.noteTitle}>About deposits</div>
          <div style={s.noteText}>
            In production, deposits are triggered by incoming bank transfers or card payments through our licensed banking partner. Every deposit is recorded on the immutable KINETIQ ledger with a full audit trail.
          </div>
        </div>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  container: { display: "flex", minHeight: "100vh", background: "#F0F2F7" },
  main: { marginLeft: 260, flex: 1, padding: "32px 40px" },
  header: { marginBottom: 32 },
  title: { fontSize: 28, fontWeight: 800, color: "#0A1F44", marginBottom: 6 },
  subtitle: { fontSize: 14, color: "#7A8FA6" },
  card: {
    background: "#fff", borderRadius: 16, padding: "32px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 24, maxWidth: 520,
  },
  walletInfo: {
    background: "#F0F2F7", borderRadius: 10, padding: "16px 20px",
    marginBottom: 24,
  },
  walletCurrency: { fontSize: 14, fontWeight: 700, color: "#0A1F44", marginBottom: 4 },
  walletId: { fontSize: 11, color: "#7A8FA6", fontFamily: "monospace" },
  field: { marginBottom: 20 },
  label: { display: "block", fontSize: 13, fontWeight: 600, color: "#0A1F44", marginBottom: 8 },
  inputWrapper: {
    display: "flex", alignItems: "center",
    border: "1.5px solid #E0E6EF", borderRadius: 10, overflow: "hidden",
  },
  symbol: {
    padding: "12px 16px", background: "#F0F2F7",
    fontSize: 16, fontWeight: 700, color: "#0A1F44",
    borderRight: "1.5px solid #E0E6EF",
  },
  input: {
    flex: 1, padding: "12px 16px", border: "none",
    fontSize: 18, fontWeight: 700, outline: "none", color: "#0A1F44",
  },
  inputPlain: {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    border: "1.5px solid #E0E6EF", fontSize: 14, outline: "none", color: "#0A1F44",
  },
  button: {
    width: "100%", padding: "14px", background: "#0A1F44",
    color: "#fff", border: "none", borderRadius: 10,
    fontSize: 15, fontWeight: 700, cursor: "pointer",
  },
  error: {
    background: "#FFF0F0", color: "#CC0000",
    padding: "12px 16px", borderRadius: 10, fontSize: 13, marginBottom: 16,
  },
  successBox: {
    background: "#E6F9F0", borderRadius: 10, padding: "20px 24px",
  },
  successTitle: { fontSize: 15, fontWeight: 700, color: "#00695C", marginBottom: 16 },
  successRow: {
    display: "flex", justifyContent: "space-between",
    fontSize: 13, color: "#333", marginBottom: 8,
  },
  successVal: { fontWeight: 600, color: "#0A1F44" },
  dashBtn: {
    marginTop: 16, width: "100%", padding: "12px",
    background: "#0A1F44", color: "#fff", border: "none",
    borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer",
  },
  noteBox: {
    background: "#0A1F44", borderRadius: 16, padding: "24px 28px", maxWidth: 520,
  },
  noteTitle: { color: "#00C896", fontSize: 13, fontWeight: 700, marginBottom: 8 },
  noteText: { color: "#7A8FA6", fontSize: 12, lineHeight: 1.7 },
};