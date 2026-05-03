import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

const API = "https://web-production-51e3b.up.railway.app";
const isMobile = window.innerWidth <= 768;

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
    <div style={{ minHeight: "100vh", background: "#f4f6fb" }}>
      <Sidebar />
      <MobileNav />

      <div style={{
        marginLeft: isMobile ? 0 : 260,
        padding: isMobile ? "80px 16px 24px 16px" : "40px",
        maxWidth: isMobile ? "100%" : 680,
      }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#0A1F44", marginBottom: 6 }}>
          FX Rate Calculator
        </div>
        <div style={{ fontSize: 14, color: "#7A8FA6", marginBottom: 28, lineHeight: 1.5 }}>
          See exactly what the market rate is and what KINETIQ charges. No hidden fees.
        </div>

        <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px rgba(0,0,0,0.08)", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 120 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#333", marginBottom: 8 }}>You send</label>
              <div style={{ display: "flex", gap: 8 }}>
                <select style={{ padding: "12px 10px", borderRadius: 8, border: "1.5px solid #ddd", fontSize: 14, fontWeight: 700, width: 80 }}
                  value={from} onChange={e => setFrom(e.target.value)}>
                  {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input style={{ flex: 1, padding: "12px 14px", borderRadius: 8, border: "1.5px solid #ddd", fontSize: 15, outline: "none" }}
                  type="number" placeholder="0.00" value={amount} onChange={e => setAmount(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && getQuote()} />
              </div>
            </div>

            <div style={{ fontSize: 24, color: "#0A1F44", paddingBottom: 8 }}>→</div>

            <div style={{ flex: 1, minWidth: 120 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#333", marginBottom: 8 }}>Recipient gets</label>
              <div style={{ display: "flex", gap: 8 }}>
                <select style={{ padding: "12px 10px", borderRadius: 8, border: "1.5px solid #ddd", fontSize: 14, fontWeight: 700, width: 80 }}
                  value={to} onChange={e => setTo(e.target.value)}>
                  {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <div style={{ flex: 1, padding: "12px 14px", borderRadius: 8, border: "1.5px solid #e0e8f0", fontSize: 15, fontWeight: 700, color: "#0A1F44", background: "#f0f4ff", display: "flex", alignItems: "center" }}>
                  {result ? `${symbols[to] || ""}${result.amountOut.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "—"}
                </div>
              </div>
            </div>
          </div>

          {error && <div style={{ background: "#fff0f0", color: "#cc0000", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>{error}</div>}

          <button style={{ width: "100%", padding: 14, background: "#0A1F44", color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer", opacity: loading ? 0.7 : 1 }}
            onClick={getQuote} disabled={loading}>
            {loading ? "Getting quote..." : "Get Quote"}
          </button>

          {result && (
            <div style={{ marginTop: 20, background: "#f8faff", borderRadius: 10, padding: "20px 24px", border: "1px solid #e0e8f0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: "#666" }}>Market rate</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0A1F44" }}>{result.marketRate}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: "#666" }}>KINETIQ rate</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0A1F44" }}>{result.kinetiqRate}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: "#666" }}>Our fee ({result.spreadPercent}%)</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#cc6600" }}>
                  {symbols[to] || ""}{result.fee.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {result.to}
                </span>
              </div>
              <div style={{ borderTop: "1px solid #e0e8f0", margin: "12px 0" }} />
              <div style={{ fontSize: 12, color: "#00695C", lineHeight: 1.5 }}>{result.transparency}</div>
            </div>
          )}
        </div>

        <div style={{ background: "#0A1F44", borderRadius: 16, padding: "24px" }}>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Why KINETIQ matters</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 12 }}>
            {[
              { num: "1.5%", label: "KINETIQ fee on Africa corridors", color: "#00C896" },
              { num: "8.37%", label: "Industry average to Sub-Saharan Africa", color: "#ff4444" },
              { num: "3%", label: "UN SDG 10.C target by 2030", color: "#ff9900" },
            ].map(item => (
              <div key={item.num} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 16, textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: item.color, marginBottom: 6 }}>{item.num}</div>
                <div style={{ fontSize: 11, color: "#aab8d0", lineHeight: 1.4 }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: "#667", textAlign: "center" }}>Source: World Bank Remittance Prices Worldwide Q2 2024</div>
        </div>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <button style={{ background: "none", border: "none", color: "#7A8FA6", fontSize: 13, cursor: "pointer" }}
            onClick={() => navigate("/dashboard")}>
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}