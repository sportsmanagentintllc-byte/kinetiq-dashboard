import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://web-production-51e3b.up.railway.app";

interface QuoteResult {
  from: string;
  to: string;
  amountIn: number;
  amountOut: number;
  marketRate: number;
  kinetiqRate: number;
  spreadPercent: number;
  fee: number;
  transparency: string;
}

export default function FxQuote() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("GBP");
  const [to, setTo] = useState("NGN");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState<QuoteResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const currencies = ["USD", "NGN", "GBP", "EUR"];
  const symbols: Record<string, string> = { USD: "$", NGN: "₦", GBP: "£", EUR: "€" };

  async function getQuote() {
    if (!amount || Number(amount) <= 0) { setError("Enter a valid amount"); return; }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await axios.get(`${API}/fx/quote`, { params: { from, to, amount } });
      setResult(res.data);
    } catch (e: any) {
      setError(e.response?.data?.error || "Could not get quote");
    } finally {
      setLoading(false);
    }
  }

  return (
  <div style={s.container}>
    <Sidebar />
    <MobileNav />
    <div style={s.nav}>
      <div style={s.logo}>KINETIQ</div>
      <div style={s.navRight}>
        <button style={s.navBtn} onClick={() => navigate("/dashboard")}>Dashboard</button>
      </div>
    </div>

      <div style={s.body}>
        <div style={s.title}>FX Rate Calculator</div>
        <div style={s.subtitle}>
          See exactly what the market rate is and exactly what KINETIQ charges. No hidden fees.
        </div>

        <div style={s.card}>
          <div style={s.row}>
            <div style={s.field}>
              <label style={s.label}>You send</label>
              <div style={s.inputRow}>
                <select style={s.select} value={from} onChange={e => setFrom(e.target.value)}>
                  {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input
                  style={s.input}
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && getQuote()}
                />
              </div>
            </div>

            <div style={s.arrow}>→</div>

            <div style={s.field}>
              <label style={s.label}>Recipient gets</label>
              <div style={s.inputRow}>
                <select style={s.select} value={to} onChange={e => setTo(e.target.value)}>
                  {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <div style={s.output}>
                  {result
                    ? `${symbols[to] || ""}${result.amountOut.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    : "—"}
                </div>
              </div>
            </div>
          </div>

          {error && <div style={s.error}>{error}</div>}

          <button
            style={loading ? { ...s.button, opacity: 0.7 } : s.button}
            onClick={getQuote}
            disabled={loading}
          >
            {loading ? "Getting quote..." : "Get Quote"}
          </button>

          {result && (
            <div style={s.resultBox}>
              <div style={s.resultRow}>
                <span style={s.resultLabel}>Market rate</span>
                <span style={s.resultValue}>{result.marketRate}</span>
              </div>
              <div style={s.resultRow}>
                <span style={s.resultLabel}>KINETIQ rate</span>
                <span style={s.resultValue}>{result.kinetiqRate}</span>
              </div>
              <div style={s.resultRow}>
                <span style={s.resultLabel}>Our fee ({result.spreadPercent}%)</span>
                <span style={{ ...s.resultValue, color: "#cc6600" }}>
                  {symbols[to] || ""}{result.fee.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {result.to}
                </span>
              </div>
              <div style={s.divider} />
              <div style={s.transparency}>{result.transparency}</div>
            </div>
          )}
        </div>

        <div style={s.comparisonBox}>
          <div style={s.compTitle}>Why KINETIQ matters</div>
          <div style={s.compGrid}>
            <div style={s.compCard}>
              <div style={s.compNum}>1.5%</div>
              <div style={s.compLabel}>KINETIQ fee on Africa corridors</div>
            </div>
            <div style={s.compCard}>
              <div style={{ ...s.compNum, color: "#cc0000" }}>8.37%</div>
              <div style={s.compLabel}>Industry average to Sub-Saharan Africa</div>
            </div>
            <div style={s.compCard}>
              <div style={{ ...s.compNum, color: "#cc6600" }}>3%</div>
              <div style={s.compLabel}>UN SDG 10.C target by 2030</div>
            </div>
          </div>
          <div style={s.compSource}>Source: World Bank Remittance Prices Worldwide Q2 2024</div>
        </div>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  container: { minHeight: "100vh", background: "#f4f6fb" },
  nav: {
    background: "#0A1F44", padding: "0 40px", height: 64,
    display: "flex", alignItems: "center", justifyContent: "space-between",
  },
  logo: { color: "#fff", fontSize: 22, fontWeight: 800, letterSpacing: 3 },
  navRight: { display: "flex", gap: 12 },
  navBtn: {
    background: "rgba(255,255,255,0.1)", color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6,
    padding: "6px 14px", fontSize: 13, cursor: "pointer",
  },
 body: { 
  maxWidth: 680, 
  margin: "0 auto", 
  padding: window.innerWidth <= 768 ? "80px 16px 24px 16px" : "40px 24px" 
},
},
  title: { fontSize: 28, fontWeight: 800, color: "#0A1F44", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 32, lineHeight: 1.6 },
  card: {
    background: "#fff", borderRadius: 16, padding: "32px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)", marginBottom: 24,
  },
  row: { display: "flex", alignItems: "flex-end", gap: 16, marginBottom: 20 },
  field: { flex: 1, display: "flex", flexDirection: "column", gap: 8 },
  label: { fontSize: 13, fontWeight: 600, color: "#333" },
  inputRow: { display: "flex", gap: 8 },
  select: {
    padding: "12px 10px", borderRadius: 8, border: "1.5px solid #ddd",
    fontSize: 14, fontWeight: 700, background: "#f8f9ff", width: 80,
  },
  input: {
    flex: 1, padding: "12px 14px", borderRadius: 8,
    border: "1.5px solid #ddd", fontSize: 15, outline: "none",
  },
  output: {
    flex: 1, padding: "12px 14px", borderRadius: 8,
    border: "1.5px solid #e0e8f0", fontSize: 15, fontWeight: 700,
    color: "#0A1F44", background: "#f0f4ff", minHeight: 46,
    display: "flex", alignItems: "center",
  },
  arrow: { fontSize: 24, color: "#0A1F44", paddingBottom: 8 },
  button: {
    width: "100%", padding: "14px", background: "#0A1F44",
    color: "#fff", border: "none", borderRadius: 8,
    fontSize: 15, fontWeight: 700, cursor: "pointer",
  },
  error: {
    background: "#fff0f0", color: "#cc0000",
    padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12,
  },
  resultBox: {
    marginTop: 24, background: "#f8faff", borderRadius: 10,
    padding: "20px 24px", border: "1px solid #e0e8f0",
  },
  resultRow: { display: "flex", justifyContent: "space-between", marginBottom: 10 },
  resultLabel: { fontSize: 13, color: "#666" },
  resultValue: { fontSize: 13, fontWeight: 700, color: "#0A1F44" },
  divider: { borderTop: "1px solid #e0e8f0", margin: "12px 0" },
  transparency: { fontSize: 12, color: "#00695C", lineHeight: 1.5 },
  comparisonBox: {
    background: "#0A1F44", borderRadius: 16, padding: "28px 32px",
  },
  compTitle: { color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 20 },
  compGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 },
  compCard: {
    background: "rgba(255,255,255,0.08)", borderRadius: 10,
    padding: "16px", textAlign: "center",
  },
  compNum: { fontSize: 28, fontWeight: 800, color: "#00C896", marginBottom: 6 },
  compLabel: { fontSize: 12, color: "#aab8d0", lineHeight: 1.4 },
  compSource: { fontSize: 11, color: "#667", textAlign: "center" },
};