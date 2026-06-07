import { useNavigate } from "react-router-dom";

export default function RoadmapPage() {
  const nav = useNavigate();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        :root{--navy:#040D1C;--navy2:#071428;--card:#0B1A2E;--green:#00D4A0;--green2:#00B589;--gold:#F0A500;--white:#F0F4FF;--gray:#6A7A90;--gray2:#8A9BB0;--border:rgba(255,255,255,0.06);--border2:rgba(255,255,255,0.12);}
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
        .kn{position:fixed;top:0;left:0;right:0;z-index:1000;padding:18px 72px;display:flex;align-items:center;justify-content:space-between;background:rgba(4,13,28,0.85);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);}
        .kl{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;letter-spacing:5px;color:var(--white);cursor:pointer;}
        .kl em{color:var(--green);font-style:normal;}
        .knu{display:flex;gap:32px;list-style:none;}
        .knu a{color:var(--gray2);text-decoration:none;font-size:13px;font-weight:500;cursor:pointer;transition:color .2s;}
        .knu a:hover,.knu a.act{color:var(--white);}
        .knr{display:flex;gap:10px;}
        .bg{padding:9px 22px;border:1px solid var(--border2);border-radius:8px;color:var(--white);font-size:13px;font-weight:500;cursor:pointer;background:none;transition:all .2s;}
        .bg:hover{border-color:rgba(0,212,160,.5);color:var(--green);}
        .bp{padding:9px 22px;background:var(--green);border-radius:8px;color:var(--navy);font-size:13px;font-weight:700;font-family:'Syne',sans-serif;cursor:pointer;border:none;}
        .rhero{padding:160px 72px 80px;position:relative;overflow:hidden;}
        .rhero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 100% 80% at 50% 100%,rgba(0,212,160,.04) 0%,transparent 60%);}
        .rtag{font-size:11px;color:var(--green);text-transform:uppercase;letter-spacing:2.5px;font-weight:600;margin-bottom:14px;}
        .rhero h1{font-family:'Syne',sans-serif;font-size:clamp(36px,5vw,72px);font-weight:800;line-height:1.02;letter-spacing:-1.5px;max-width:700px;margin-bottom:20px;position:relative;z-index:2;}
        .gc{color:var(--green);}
        .rhero p{font-size:17px;color:var(--gray2);max-width:520px;line-height:1.7;position:relative;z-index:2;}
        .phases{padding:60px 72px;}
        .phase{margin-bottom:80px;}
        .phdr{display:flex;align-items:center;gap:20px;margin-bottom:40px;}
        .pbadge{padding:6px 16px;border-radius:100px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;}
        .pbadge.live{background:rgba(0,212,160,.12);border:1px solid rgba(0,212,160,.3);color:var(--green);}
        .pbadge.next{background:rgba(240,165,0,.1);border:1px solid rgba(240,165,0,.25);color:var(--gold);}
        .pbadge.future{background:rgba(255,255,255,.05);border:1px solid var(--border2);color:var(--gray2);}
        .pline{flex:1;height:1px;background:var(--border);}
        .ptitle{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:var(--gray2);}
        .pitems{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
        .pitem{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px;transition:all .2s;}
        .pitem:hover{border-color:rgba(0,212,160,.2);}
        .pitem.done{border-color:rgba(0,212,160,.15);background:rgba(0,212,160,.02);}
        .pico{width:44px;height:44px;background:rgba(0,212,160,.07);border:1px solid rgba(0,212,160,.15);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
        .pico svg{width:20px;height:20px;stroke:var(--green);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
        .pico.gd{background:rgba(240,165,0,.07);border-color:rgba(240,165,0,.15);}
        .pico.gd svg{stroke:var(--gold);}
        .pico.gr{background:rgba(255,255,255,.04);border-color:var(--border);}
        .pico.gr svg{stroke:var(--gray2);}
        .ptm{font-family:'Syne',sans-serif;font-size:15px;font-weight:700;margin-bottom:8px;}
        .pds{font-size:13px;color:var(--gray2);line-height:1.6;}
        .pstatus{display:inline-flex;align-items:center;gap:6px;margin-top:12px;font-size:11px;font-weight:600;}
        .pstatus.done{color:var(--green);}
        .pstatus.soon{color:var(--gold);}
        .pstatus.plan{color:var(--gray);}
        .w3stmt{padding:60px 72px;background:var(--navy2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
        .w3stmt h2{font-family:'Syne',sans-serif;font-size:clamp(28px,3vw,44px);font-weight:800;line-height:1.1;max-width:700px;margin-bottom:20px;}
        .w3stmt p{font-size:16px;color:var(--gray2);max-width:600px;line-height:1.75;}
        .cta{padding:100px 72px;text-align:center;}
        .cta h2{font-family:'Syne',sans-serif;font-size:clamp(32px,4vw,52px);font-weight:800;margin-bottom:16px;}
        .cta p{font-size:16px;color:var(--gray2);margin-bottom:36px;}
        .ctabs{display:flex;gap:14px;justify-content:center;}
        .bc{padding:16px 44px;background:var(--green);color:var(--navy);border-radius:10px;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all .25s;}
        .bc:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(0,212,160,.25);}
        footer{padding:32px 72px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;}
        .fl{font-family:'Syne',sans-serif;font-size:16px;font-weight:800;letter-spacing:4px;cursor:pointer;}
        .fl em{color:var(--green);font-style:normal;}
        .fc{font-size:12px;color:var(--gray);}
        @media(max-width:768px){
          .kn{padding:14px 20px;}.knu{display:none;}
          .rhero{padding:110px 20px 60px;}
          .phases{padding:40px 20px;}
          .pitems{grid-template-columns:1fr;}
          .w3stmt{padding:48px 20px;}
          .cta{padding:60px 20px;}.ctabs{flex-direction:column;align-items:center;}
          footer{padding:24px 20px;flex-direction:column;gap:12px;text-align:center;}
        }
      `}</style>

      <nav className="kn">
        <div className="kl" onClick={() => nav("/")}>KINET<em>IQ</em></div>
        <ul className="knu">
          <li><a onClick={() => nav("/features")}>Features</a></li>
          <li><a onClick={() => nav("/who")}>Who</a></li>
          <li><a className="act" onClick={() => nav("/roadmap")}>Roadmap</a></li>
          <li><a onClick={() => nav("/about")}>About</a></li>
        </ul>
        <div className="knr">
          <button className="bg" onClick={() => nav("/login")}>Log in</button>
          <button className="bp" onClick={() => nav("/register")}>Get Started</button>
        </div>
      </nav>

      <div className="rhero">
        <div className="rtag">Roadmap</div>
        <h1>Where we are.<br/>Where we're <span className="gc">going.</span></h1>
        <p>KINETIQ is building in phases. The foundation is live. The future is already being architected.</p>
      </div>

      <div className="phases">
        <div className="phase">
          <div className="phdr">
            <div className="pbadge live">Phase 1 — Live Now</div>
            <div className="pline"></div>
            <div className="ptitle">Core Infrastructure · 2025/26</div>
          </div>
          <div className="pitems">
            {[
              {t:"Multi-Currency Wallets",d:"NGN, USD, GBP, EUR wallets created automatically on registration.",ico:<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></>,s:"done",sl:"Live"},
              {t:"Transparent FX Conversion",d:"Live market rates with 1.5% visible fee. No hidden margins.",ico:<><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></>,s:"done",sl:"Live"},
              {t:"Commission Splitting",d:"Automatic payment splits with percentage enforcement.",ico:<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,s:"done",sl:"Live"},
              {t:"Cross-Border Transfers",d:"Atomic transfers with immutable double-entry ledger.",ico:<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,s:"done",sl:"Live"},
              {t:"JWT Authentication",d:"Secure login with bcrypt password hashing and 24h token sessions.",ico:<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,s:"done",sl:"Live"},
              {t:"Email Notifications",d:"Deposit, transfer, and welcome notifications via verified domain.",ico:<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,s:"done",sl:"Live"},
            ].map((p,i) => (
              <div className={`pitem done`} key={i}>
                <div className="pico"><svg viewBox="0 0 24 24">{p.ico}</svg></div>
                <div className="ptm">{p.t}</div>
                <div className="pds">{p.d}</div>
                <div className={`pstatus ${p.s}`}>✓ {p.sl}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="phase">
          <div className="phdr">
            <div className="pbadge next">Phase 2 — Building</div>
            <div className="pline"></div>
            <div className="ptitle">Compliance Layer · 2026</div>
          </div>
          <div className="pitems">
            {[
              {t:"KYC Verification",d:"BVN and NIN verification for Nigerian users via Smile Identity.",ico:<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,s:"soon",sl:"In Progress"},
              {t:"Password Reset",d:"Secure email-based password recovery flow.",ico:<><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,s:"soon",sl:"In Progress"},
              {t:"Admin Dashboard",d:"Full visibility on users, transactions, and platform health.",ico:<><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>,s:"soon",sl:"In Progress"},
              {t:"Real Banking Rails",d:"Integration with licensed payment provider for actual NGN movement.",ico:<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,s:"soon",sl:"Planned"},
              {t:"CAC Registration",d:"KINETIQ Limited registered with Corporate Affairs Commission Nigeria.",ico:<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,s:"soon",sl:"Planned"},
              {t:"BaaS Partnership",d:"Banking as a Service agreement with Providus or Sterling Bank.",ico:<><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,s:"soon",sl:"Planned"},
            ].map((p,i) => (
              <div className="pitem" key={i}>
                <div className="pico gd"><svg viewBox="0 0 24 24">{p.ico}</svg></div>
                <div className="ptm">{p.t}</div>
                <div className="pds">{p.d}</div>
                <div className={`pstatus ${p.s}`}>◎ {p.sl}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="phase">
          <div className="phdr">
            <div className="pbadge future">Phase 3 — Web3</div>
            <div className="pline"></div>
            <div className="ptitle">Tokenization · 2026/27</div>
          </div>
          <div className="pitems">
            {[
              {t:"Smart Contract Commissions",d:"Earnings splits enforced on-chain. Instantaneous. Irrevocable. No intermediary.",ico:<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,s:"plan",sl:"Planned"},
              {t:"KINETIQ Athlete Tokens",d:"Tokenized future earnings. Fractional ownership for clubs and investors.",ico:<><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>,s:"plan",sl:"Planned"},
              {t:"NGN Stablecoin",d:"1:1 Naira-pegged stablecoin tradeable on-chain with DeFi yield.",ico:<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,s:"plan",sl:"Planned"},
              {t:"On-Chain Credentials",d:"Verified athletic history stored immutably. Instantly verifiable globally.",ico:<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,s:"plan",sl:"Planned"},
              {t:"Cross-Chain Identity",d:"One KINETIQ KYC verification usable across multiple blockchains.",ico:<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,s:"plan",sl:"Planned"},
              {t:"DeFi Yield on Idle Funds",d:"Athlete earnings generate yield passively while waiting to be spent.",ico:<><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></>,s:"plan",sl:"Planned"},
            ].map((p,i) => (
              <div className="pitem" key={i}>
                <div className="pico gr"><svg viewBox="0 0 24 24">{p.ico}</svg></div>
                <div className="ptm">{p.t}</div>
                <div className="pds">{p.d}</div>
                <div className={`pstatus ${p.s}`}>○ {p.sl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w3stmt">
        <h2>Web3 is not the product.<br/>It is the <span className="gc">upgrade.</span></h2>
        <p>KINETIQ's Web3 layer will not replace what we have built. It will make it more powerful — adding immutability, programmable earnings, and tokenized value to a system already trusted by athletes. We build the foundation first. Then we make it permanent.</p>
      </div>

      <div className="cta">
        <h2>The foundation<br/>is <span className="gc">already live.</span></h2>
        <p>Start using KINETIQ today while we build what comes next.</p>
        <div className="ctabs">
          <button className="bc" onClick={() => nav("/register")}>Open Your Wallet</button>
        </div>
      </div>

      <footer>
        <div className="fl" onClick={() => nav("/")}>KINET<em>IQ</em></div>
        <div className="fc">© 2026 KINETIQ Financial Group · kineticfinancials.group</div>
      </footer>
    </>
  );
}
