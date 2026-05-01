import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const API = "https://web-production-51e3b.up.railway.app";

interface Account { id: string; currency: string; status: string; }
interface LedgerEntry {
  id: string;
  entryType: string;
  amount: string;
  currency: string;
  createdAt: string;
  transaction: { reference: string; txType: string; status: string; };
}

export default function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("kinetiq_token");
  const userRaw = localStorage.getItem("kinetiq_user");
  const user = userRaw ? JSON.parse(userRaw) : null;

  const [accounts, setAccounts] = useState<Account[]>([]);
  const [balances, setBalances] = useState<Record<string, string>>({});
  const [transactions, setTransactions] = useState<LedgerEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    if (!token || !user) { navigate("/login"); return; }
    loadData();
  }, []);

  async function loadData() {
    try {
      const res = await axios.get(`${API}/users/${user.id}`, { headers });
      const accs: Account[] = res.data.accounts || [];
      setAccounts(accs);

      const balanceMap: Record<string, string> = {};
      let allTx: LedgerEntry[] = [];

      await Promise.all(accs.map(async (acc) => {
        const b = await axios.get(`${API}/accounts/${acc.id}/balance`, { headers });
        balanceMap[acc.id] = b.data.balance;
        const t = await axios.get(`${API}/transactions/${acc.id}`, { headers });
        allTx = [...allTx, ...t.data];
      }));

      setBalances(balanceMap);
      allTx.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setTransactions(allTx.slice(0, 10));
    } catch {
      navigate("/login");
    } finally {
      setLoading(false);
    }
  }

  const symbols: Record<string, string> = { USD: "$", NGN: "₦", GBP: "£", EUR: "€" };
  const cardColors: Record<string, [string, string]> = {
    USD: ["#1A3A6B", "#2E5BA8"],
    NGN: ["#00695C", "#00897B"],
    GBP: ["#4A1F8B", "#6B3FBF"],
    EUR: ["#8B4500", "#C46200"],
  };

  const totalUSD = accounts.reduce((sum, acc) => {
    const bal = parseFloat(balances[acc.id] || "0");
    if (acc.currency === "USD") return sum + bal;
    if (acc.currency === "NGN") return sum + bal / 1580;
    if (acc.currency === "GBP") return sum + bal * 1.27;
    if (acc.currency === "EUR") return sum + bal * 1.08;
    return sum;
  }, 0);

  return (
    <div style={s.container}>
      <Sidebar />
      <div style={s.main}>
        <div style={s.header}>
          <div>
            <div style={s.headerTitle}>Dashboard</div>
            <div style={s.headerSub}>
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </div>
          </div>
          <div style={s.totalBox}>
            <div style={s.totalLabel}>Total Portfolio Value</div>
            <div style={s.totalValue}>${totalUSD.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>
        </div>

        {loading ? (
          <div style={s.loading}>Loading your accounts...</div>
        ) : (
          <>
            <div style={s.walletsGrid}>
              {accounts.map(acc => {
                const balance = parseFloat(balances[acc.id] || "0");
                const [c1, c2] = cardColors[acc.currency] || ["#333", "#555"];
                return (
                  <div key={acc.id} style={{ ...s.walletCard, background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
                    <div style={s.walletTop}>
                      <div style={s.walletCurrency}>{acc.currency}</div>
                      <div style={s.walletBadge}>{acc.status}</div>
                    </div>
                    <div style={s.walletBalance}>
                      {symbols[acc.currency] || ""}
                      {balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div style={s.walletId}>{acc.id.slice(0, 16)}...</div>
                    <div style={s.walletActions}>
  <button style={s.walletBtn} onClick={() => navigate("/transfer")}>Send</button>
  <button style={s.walletBtn} onClick={() => navigate("/fx")}>Convert</button>
  <button style={{ ...s.walletBtn, background: "rgba(0,200,150,0.2)", border: "1px solid rgba(0,200,150,0.4)" }} 
    onClick={() => navigate(`/deposit?accountId=${acc.id}&currency=${acc.currency}`)}>
    Deposit
  </button>
</div>
                  </div>
                );
              })}

              <div style={s.statsCard}>
                <div style={s.statItem}>
                  <div style={s.statNum}>1.5%</div>
                  <div style={s.statLabel}>KINETIQ FX fee</div>
                </div>
                <div style={s.statDivider} />
                <div style={s.statItem}>
                  <div style={{ ...s.statNum, color: "#cc3300" }}>8.37%</div>
                  <div style={s.statLabel}>Industry average</div>
                </div>
                <div style={s.statDivider} />
                <div style={s.statItem}>
                  <div style={s.statNum}>80%</div>
                  <div style={s.statLabel}>FIFA payments unpaid</div>
                </div>
              </div>
            </div>

            <div style={s.section}>
              <div style={s.sectionHeader}>
                <div style={s.sectionTitle}>Recent Transactions</div>
                <div style={s.sectionCount}>{transactions.length} records</div>
              </div>

              {transactions.length === 0 ? (
                <div style={s.emptyTx}>No transactions yet.</div>
              ) : (
                <div style={s.txList}>
                  {transactions.map(tx => (
                    <div key={tx.id} style={s.txRow}>
                      <div style={{
                        ...s.txBadge,
                        background: tx.entryType === "CREDIT" ? "#E6F9F0" : "#FFF0F0",
                        color: tx.entryType === "CREDIT" ? "#00695C" : "#CC0000"
                      }}>
                        {tx.entryType === "CREDIT" ? "+" : "-"}
                      </div>
                      <div style={s.txInfo}>
                        <div style={s.txRef}>{tx.transaction?.reference || tx.transaction?.txType || "Transaction"}</div>
                        <div style={s.txDate}>{new Date(tx.createdAt).toLocaleString()}</div>
                      </div>
                      <div style={{
                        ...s.txAmount,
                        color: tx.entryType === "CREDIT" ? "#00695C" : "#CC0000"
                      }}>
                        {tx.entryType === "CREDIT" ? "+" : "-"}
                        {symbols[tx.currency] || ""}
                        {parseFloat(tx.amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        <div style={s.txCurrency}>{tx.currency}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={s.infoBar}>
              <div style={s.infoText}>
                <span style={s.infoHighlight}>KINETIQ</span> — Financial Infrastructure for African Athletes · Multi-currency wallets · Cross-border transfers · FFAR-compliant commission splitting · Gundua Sports integration
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  container: { display: "flex", minHeight: "100vh", background: "#F0F2F7" },
  main: { marginLeft: 260, flex: 1, padding: "32px 40px", minHeight: "100vh" },
  header: {
    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
    marginBottom: 32,
  },
  headerTitle: { fontSize: 28, fontWeight: 800, color: "#0A1F44", marginBottom: 4 },
  headerSub: { fontSize: 13, color: "#7A8FA6" },
  totalBox: {
    background: "#0A1F44", borderRadius: 12, padding: "16px 24px", textAlign: "right",
  },
  totalLabel: { fontSize: 11, color: "#7A8FA6", marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 },
  totalValue: { fontSize: 24, fontWeight: 800, color: "#00C896" },
  loading: { textAlign: "center", padding: 60, color: "#7A8FA6", fontSize: 15 },
  walletsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 20, marginBottom: 32,
  },
  walletCard: {
    borderRadius: 16, padding: "24px", color: "#fff",
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
  },
  walletTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  walletCurrency: { fontSize: 13, fontWeight: 700, letterSpacing: 2, opacity: 0.9 },
  walletBadge: {
    fontSize: 10, background: "rgba(255,255,255,0.2)", padding: "3px 8px",
    borderRadius: 20, textTransform: "uppercase", letterSpacing: 1,
  },
  walletBalance: { fontSize: 28, fontWeight: 800, marginBottom: 8, letterSpacing: -0.5 },
  walletId: { fontSize: 10, opacity: 0.5, marginBottom: 20, fontFamily: "monospace" },
  walletActions: { display: "flex", gap: 8 },
  walletBtn: {
    flex: 1, padding: "8px", background: "rgba(255,255,255,0.15)",
    color: "#fff", border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer",
  },
  statsCard: {
    background: "#fff", borderRadius: 16, padding: "24px",
    display: "flex", flexDirection: "column", justifyContent: "space-around",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  statItem: { textAlign: "center", padding: "8px 0" },
  statNum: { fontSize: 26, fontWeight: 800, color: "#0A1F44", marginBottom: 4 },
  statLabel: { fontSize: 11, color: "#7A8FA6" },
  statDivider: { height: 1, background: "#F0F2F7", margin: "4px 0" },
  section: { background: "#fff", borderRadius: 16, padding: "24px", marginBottom: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" },
  sectionHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 700, color: "#0A1F44" },
  sectionCount: { fontSize: 12, color: "#7A8FA6", background: "#F0F2F7", padding: "4px 10px", borderRadius: 20 },
  emptyTx: { textAlign: "center", color: "#7A8FA6", padding: "32px 0", fontSize: 14 },
  txList: { display: "flex", flexDirection: "column", gap: 2 },
  txRow: {
    display: "flex", alignItems: "center", gap: 16,
    padding: "14px 16px", borderRadius: 10,
    transition: "background 0.2s",
  },
  txBadge: {
    width: 36, height: 36, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 800, fontSize: 16, flexShrink: 0,
  },
  txInfo: { flex: 1 },
  txRef: { fontSize: 13, fontWeight: 600, color: "#0A1F44", marginBottom: 3 },
  txDate: { fontSize: 11, color: "#7A8FA6" },
  txAmount: { textAlign: "right", fontWeight: 700, fontSize: 14 },
  txCurrency: { fontSize: 10, color: "#7A8FA6", fontWeight: 400, marginTop: 2 },
  infoBar: {
    background: "#0A1F44", borderRadius: 12, padding: "16px 24px",
  },
  infoText: { fontSize: 12, color: "#7A8FA6", lineHeight: 1.6 },
  infoHighlight: { color: "#00C896", fontWeight: 700 },
};