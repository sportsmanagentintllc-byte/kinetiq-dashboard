import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function FeaturesPage() {
  const nav = useNavigate();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        :root{--navy:#040D1C;--navy2:#071428;--card:#0B1A2E;--card2:#0E2040;--green:#00D4A0;--green2:#00B589;--gold:#F0A500;--red:#F05050;--white:#F0F4FF;--gray:#6A7A90;--gray2:#8A9BB0;--border:rgba(255,255,255,0.06);--border2:rgba(255,255,255,0.12);}
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
        .fhero{padding:160px 72px 80px;background:var(--navy2);border-bottom:1px solid var(--border);position:relative;overflow:hidden;}
        .fhero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 100% 50%,rgba(0,212,160,.04) 0%,transparent 70%);}
        .ftag{font-size:11px;color:var(--green);text-transform:uppercase;letter-spacing:2.5px;font-weight:600;margin-bottom:14px;}
        .fhero h1{font-family:'Syne',sans-serif;font-size:clamp(36px,4vw,64px);font-weight:800;line-height:1.05;letter-spacing:-1px;max-width:640px;margin-bottom:20px;}
        .fhero p{font-size:17px;color:var(--gray2);max-width:520px;line-height:1.7;}
        .fmain{padding:80px 72px;}
        .fblock{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;margin-bottom:100px;padding-bottom:100px;border-bottom:1px solid var(--border);}
        .fblock:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0;}
        .fblock.rev{direction:rtl;}
        .fblock.rev > *{direction:ltr;}
        .ftxt .badge{display:inline-block;padding:4px 12px;background:rgba(0,212,160,.08);border:1px solid rgba(0,212,160,.2);border-radius:100px;font-size:11px;color:var(--green);font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;}
        .ftxt h2{font-family:'Syne',sans-serif;font-size:clamp(26px,2.5vw,38px);font-weight:800;line-height:1.1;margin-bottom:16px;letter-spacing:-.3px;}
        .ftxt p{font-size:15px;color:var(--gray2);line-height:1.75;margin-bottom:20px;}
        .ftxt ul{list-style:none;display:flex;flex-direction:column;gap:10px;}
        .ftxt li{display:flex;align-items:flex-start;gap:12px;font-size:14px;color:var(--gray2);}
        .ftxt li::before{content:'';width:6px;height:6px;background:var(--green);border-radius:50%;margin-top:7px;flex-shrink:0;}
        .fvis{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:36px;position:relative;overflow:hidden;}
        .fvis::after{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--green),transparent);opacity:.4;}
        .fvlbl{font-size:10px;color:var(--gray);text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;}
        .fvrow{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--border);}
        .fvrow:last-child{border-bottom:none;}
        .fvk{font-size:13px;color:var(--gray2);}
        .fvv{font-size:13px;font-weight:700;}
        .fvg{color:var(--green);}
        .fvr{color:var(--red);}
        .fvgd{color:var(--gold);}
        .cta{padding:100px 72px;text-align:center;background:var(--navy2);border-top:1px solid var(--border);}
        .cta h2{font-family:'Syne',sans-serif;font-size:clamp(32px,4vw,52px);font-weight:800;line-height:1.08;letter-spacing:-.5px;margin-bottom:16px;}
        .gc{color:var(--green);}
        .cta p{font-size:16px;color:var(--gray2);margin-bottom:36px;}
        .ctabs{display:flex;gap:14px;justify-content:center;}
        .bc{padding:16px 44px;background:var(--green);color:var(--navy);border-radius:10px;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all .25s;}
        .bc:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(0,212,160,.25);}
        footer{padding:32px 72px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;}
        .fl{font-family:'Syne',sans-serif;font-size:16px;font-weight:800;letter-spacing:4px;cursor:pointer;}
        .fl em{color:var(--green);font-style:normal;}
        .fc{font-size:12px;color:var(--gray);}
        @media(max-width:768px){
          .fhero{padding:110px 20px 60px;}
          .fmain{padding:48px 20px;}
          .fblock{grid-template-columns:1fr;gap:32px;margin-bottom:60px;padding-bottom:60px;}
          .fblock.rev{direction:ltr;}
          .cta{padding:60px 20px;}.ctabs{flex-direction:column;align-items:center;}
          footer{padding:24px 20px;flex-direction:column;gap:12px;text-align:center;}
        }
      `}</style>
      <NavBar />

      <div className="fhero">
        <div className="ftag">Features</div>
        <h1>Everything your earnings need. Nothing they don't.</h1>
        <p>Six core capabilities built from the ground up for athletes and performance professionals operating across borders.</p>
      </div>

      <div className="fmain">
        <div className="fblock">
          <div className="ftxt">
            <div className="badge">Wallets</div>
            <h2>Hold four currencies. Switch instantly.</h2>
            <p>NGN, USD, GBP, and EUR wallets created automatically when you register. No forms, no bank visits, no waiting. Your money lives where you need it.</p>
            <ul>
              <li>Instant wallet creation on signup</li>
              <li>Real-time balance across all currencies</li>
              <li>Full transaction history with receipts</li>
              <li>Immutable double-entry ledger — tamper-proof</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="fvlbl">Your Wallets</div>
            {[
              {c:"NGN",s:"₦",v:"50,000,000.00",col:"fvg"},
              {c:"USD",s:"$",v:"31,645.57",col:"fvg"},
              {c:"GBP",s:"£",v:"0.00",col:"fvk"},
              {c:"EUR",s:"€",v:"0.00",col:"fvk"},
            ].map((w,i) => (
              <div className="fvrow" key={i}>
                <div className="fvk">{w.c} Wallet</div>
                <div className={`fvv ${w.col}`}>{w.s}{w.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fblock rev">
          <div className="ftxt">
            <div className="badge">FX Conversion</div>
            <h2>The real rate. Our small fee. Nothing hidden.</h2>
            <p>Every conversion shows you the live market rate, our 1.5% fee, and exactly what the recipient receives — before you confirm. No hidden margins. No surprises.</p>
            <ul>
              <li>Live rates from global FX markets</li>
              <li>1.5% fee vs industry average of 8.37%</li>
              <li>Full transparency on every conversion</li>
              <li>Rate locked at confirmation</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="fvlbl">FX Quote — GBP to NGN</div>
            {[
              {k:"You send",v:"£5,000.00 GBP",cl:"fvg"},
              {k:"Market rate",v:"1,868.53",cl:""},
              {k:"KINETIQ rate",v:"1,840.50",cl:"fvg"},
              {k:"Our fee (1.5%)",v:"₦140,140.34",cl:"fvgd"},
              {k:"Recipient gets",v:"₦9,202,548.89",cl:"fvg"},
            ].map((r,i) => (
              <div className="fvrow" key={i}>
                <div className="fvk">{r.k}</div>
                <div className={`fvv ${r.cl}`}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fblock">
          <div className="ftxt">
            <div className="badge">Commission Splitting</div>
            <h2>One payment. Split automatically. No disputes.</h2>
            <p>When earnings arrive, KINETIQ splits the payment between athlete and representative automatically — with commission caps enforced by the system, not handshakes.</p>
            <ul>
              <li>Automatic split on every incoming payment</li>
              <li>Percentage cap enforced in code</li>
              <li>Both parties credited instantly</li>
              <li>Permanent audit trail for every split</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="fvlbl">Commission Split — $50,000 Contract</div>
            {[
              {k:"Total payment",v:"$50,000.00",cl:"fvg"},
              {k:"Agent percentage",v:"5%",cl:"fvgd"},
              {k:"Agent receives",v:"$2,500.00",cl:"fvgd"},
              {k:"Athlete receives",v:"$47,500.00",cl:"fvg"},
              {k:"Status",v:"Posted · Immutable",cl:"fvg"},
            ].map((r,i) => (
              <div className="fvrow" key={i}>
                <div className="fvk">{r.k}</div>
                <div className={`fvv ${r.cl}`}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fblock rev">
          <div className="ftxt">
            <div className="badge">Cross-Border Transfers</div>
            <h2>Send money anywhere. Arrive in seconds.</h2>
            <p>Transfer between your wallets or to anyone else in the KINETIQ network. Every transfer is atomic — it either fully completes or fully reverses. No partial payments, no lost funds.</p>
            <ul>
              <li>Instant transfers within the KINETIQ network</li>
              <li>Atomic transactions — all or nothing</li>
              <li>Reference tracking on every transfer</li>
              <li>Email confirmation on receipt</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="fvlbl">Transfer Receipt</div>
            {[
              {k:"From",v:"USD Wallet",cl:""},
              {k:"To",v:"NGN Wallet",cl:""},
              {k:"Amount sent",v:"$500.00 USD",cl:"fvg"},
              {k:"Amount received",v:"₦778,150.00 NGN",cl:"fvg"},
              {k:"Status",v:"✓ Posted",cl:"fvg"},
            ].map((r,i) => (
              <div className="fvrow" key={i}>
                <div className="fvk">{r.k}</div>
                <div className={`fvv ${r.cl}`}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta">
        <h2>Ready to take <span className="gc">control?</span></h2>
        <p>Open your KINETIQ wallet in under 2 minutes. Free to start.</p>
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
