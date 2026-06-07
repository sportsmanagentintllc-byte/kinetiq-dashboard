import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function HomePage() {
  const nav = useNavigate();
  useEffect(() => { document.title = "KINETIQ — Money at the Speed of Ambition"; }, []);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        :root{--navy:#040D1C;--navy2:#071428;--card:#0B1A2E;--green:#00D4A0;--green2:#00B589;--gold:#F0A500;--red:#F05050;--white:#F0F4FF;--gray:#6A7A90;--gray2:#8A9BB0;--border:rgba(255,255,255,0.06);--border2:rgba(255,255,255,0.12);}
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
        .hero{min-height:100vh;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:130px 72px 80px;position:relative;overflow:hidden;}
        .hgrid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px);background-size:80px 80px;pointer-events:none;}
        .hglow{position:absolute;width:900px;height:900px;background:radial-gradient(circle,rgba(0,212,160,0.07) 0%,transparent 65%);right:-150px;top:50%;transform:translateY(-50%);pointer-events:none;}
        .hcont{position:relative;z-index:2;max-width:720px;}
        .hpill{display:inline-flex;align-items:center;gap:8px;background:rgba(0,212,160,0.08);border:1px solid rgba(0,212,160,0.25);border-radius:100px;padding:6px 18px;font-size:11px;color:var(--green);font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:36px;}
        .dot{width:7px;height:7px;background:var(--green);border-radius:50%;animation:p 2s ease-in-out infinite;}
        @keyframes p{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(0,212,160,.4);}50%{opacity:.7;box-shadow:0 0 0 6px transparent;}}
        h1{font-family:'Syne',sans-serif;font-size:clamp(48px,6vw,88px);font-weight:800;line-height:1;letter-spacing:-2px;margin-bottom:28px;}
        .gc{color:var(--green);}
        .hsub{font-size:18px;color:var(--gray2);line-height:1.75;max-width:560px;margin-bottom:48px;}
        .hbtns{display:flex;gap:14px;flex-wrap:wrap;}
        .bh{padding:18px 44px;background:var(--green);color:var(--navy);border-radius:12px;font-family:'Syne',sans-serif;font-weight:700;font-size:16px;text-decoration:none;border:none;cursor:pointer;transition:all .25s;}
        .bh:hover{background:var(--green2);transform:translateY(-2px);box-shadow:0 16px 40px rgba(0,212,160,0.25);}
        .bo{padding:18px 44px;border:1px solid var(--border2);color:var(--white);border-radius:12px;font-size:16px;text-decoration:none;background:none;cursor:pointer;transition:all .25s;}
        .bo:hover{border-color:rgba(255,255,255,.3);}
        .ticker{padding:40px 72px;border-top:1px solid var(--border);border-bottom:1px solid var(--border);background:var(--navy2);overflow:hidden;}
        .tinner{display:flex;gap:80px;animation:tick 20s linear infinite;}
        @keyframes tick{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
        .ti{display:flex;align-items:center;gap:12px;white-space:nowrap;flex-shrink:0;}
        .tn{font-family:'Syne',sans-serif;font-size:36px;font-weight:800;}
        .tl{font-size:12px;color:var(--gray2);max-width:120px;line-height:1.3;}
        .sgrid{padding:100px 72px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
        .stxt h2{font-family:'Syne',sans-serif;font-size:clamp(32px,3vw,48px);font-weight:800;line-height:1.08;letter-spacing:-.5px;margin-bottom:20px;}
        .stxt p{font-size:16px;color:var(--gray2);line-height:1.75;margin-bottom:32px;}
        .slink{display:inline-flex;align-items:center;gap:8px;color:var(--green);font-size:14px;font-weight:600;text-decoration:none;cursor:pointer;border:none;background:none;font-family:'DM Sans',sans-serif;}
        .slink:hover{gap:12px;}
        .scard{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:36px;position:relative;overflow:hidden;}
        .scard::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--green),transparent);opacity:.4;}
        .slbl{font-size:10px;color:var(--gray);text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;}
        .samt{font-family:'Syne',sans-serif;font-size:36px;font-weight:800;letter-spacing:-1px;margin-bottom:6px;}
        .ssub{font-size:12px;color:var(--green);margin-bottom:24px;}
        .spills{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;}
        .sp{padding:5px 13px;border-radius:100px;font-size:11px;font-weight:600;background:rgba(255,255,255,.04);border:1px solid var(--border);color:var(--gray2);}
        .sp.on{background:rgba(0,212,160,.1);border-color:rgba(0,212,160,.3);color:var(--green);}
        .sfx{background:rgba(0,212,160,.04);border:1px solid rgba(0,212,160,.12);border-radius:12px;padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;}
        .sfxc{display:flex;flex-direction:column;gap:3px;}
        .sfxl{font-size:10px;color:var(--gray);text-transform:uppercase;letter-spacing:1.5px;}
        .sfxv{font-family:'Syne',sans-serif;font-size:16px;font-weight:700;}
        .sfxf{font-size:11px;color:var(--green);}
        .sarr{width:28px;height:28px;border-radius:50%;background:rgba(0,212,160,.1);border:1px solid rgba(0,212,160,.2);display:flex;align-items:center;justify-content:center;}
        .sports{padding:80px 72px;background:var(--navy2);border-top:1px solid var(--border);}
        .sports h2{font-family:'Syne',sans-serif;font-size:clamp(28px,3vw,44px);font-weight:800;text-align:center;margin-bottom:16px;}
        .sports p{text-align:center;color:var(--gray2);font-size:15px;max-width:520px;margin:0 auto 56px;}
        .spg{display:grid;grid-template-columns:repeat(6,1fr);gap:16px;}
        .spc{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px 16px;text-align:center;transition:all .2s;}
        .spc:hover{border-color:rgba(0,212,160,.3);transform:translateY(-3px);}
        .spico{font-size:32px;margin-bottom:12px;}
        .spn{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;}
        .spd{font-size:11px;color:var(--gray2);margin-top:4px;}
        .cta{padding:120px 72px;text-align:center;position:relative;overflow:hidden;}
        .ctag{position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 50%,rgba(0,212,160,.05) 0%,transparent 70%);}
        .cta h2{font-family:'Syne',sans-serif;font-size:clamp(36px,5vw,64px);font-weight:800;line-height:1.05;letter-spacing:-1px;margin-bottom:20px;position:relative;}
        .cta p{font-size:17px;color:var(--gray2);margin-bottom:44px;position:relative;}
        .ctabs{display:flex;gap:14px;justify-content:center;position:relative;}
        .bc{padding:18px 52px;background:var(--green);color:var(--navy);border-radius:12px;font-family:'Syne',sans-serif;font-weight:700;font-size:16px;text-decoration:none;border:none;cursor:pointer;transition:all .25s;}
        .bc:hover{transform:translateY(-3px);box-shadow:0 24px 48px rgba(0,212,160,.25);}
        .bco{padding:18px 52px;border:1px solid var(--border2);color:var(--white);border-radius:12px;font-size:16px;text-decoration:none;background:none;cursor:pointer;transition:all .25s;}
        .bco:hover{border-color:rgba(255,255,255,.3);}
        footer{padding:48px 72px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;}
        .fl{font-family:'Syne',sans-serif;font-size:16px;font-weight:800;letter-spacing:4px;}
        .fl em{color:var(--green);font-style:normal;}
        .fc{font-size:12px;color:var(--gray);}
        .flinks{display:flex;gap:24px;}
        .flinks a{font-size:13px;color:var(--gray2);text-decoration:none;cursor:pointer;}
        .flinks a:hover{color:var(--white);}
        @media(max-width:768px){
          .hero{padding:90px 20px 60px;}
          h1{font-size:42px;letter-spacing:-1px;}
          .hsub{font-size:15px;}
          .hbtns{flex-direction:column;}
          .bh,.bo{width:100%;text-align:center;padding:16px 20px;}
          .ticker{padding:32px 20px;}
          .sgrid{padding:60px 20px;grid-template-columns:1fr;gap:40px;}
          .sports{padding:60px 20px;}.spg{grid-template-columns:repeat(3,1fr);}
          .cta{padding:72px 20px;}.ctabs{flex-direction:column;align-items:stretch;}
          .bc,.bco{text-align:center;padding:16px 20px;}
          footer{padding:32px 20px;flex-direction:column;gap:20px;text-align:center;}
          .flinks{flex-wrap:wrap;justify-content:center;}
        }
      `}</style>
      <NavBar />

      <section className="hero">
        <div className="hgrid"></div>
        <div className="hglow"></div>
        <div className="hcont">
          <div className="hpill"><span className="dot"></span>Now Live — Built for Every Athlete</div>
          <h1>Money at the<br/><span className="gc">Speed of<br/>Ambition</span></h1>
          <p className="hsub">Financial infrastructure built for athletes, agents, and performance organisations across Africa. Multi-currency wallets, transparent FX, and compliant earnings management — for every sport, every corridor.</p>
          <div className="hbtns">
            <button className="bh" onClick={() => nav("/register")}>Open Your Wallet</button>
            <button className="bo" onClick={() => nav("/features")}>See How It Works</button>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="tinner">
          {[
            {n:"1.5%",l:"KINETIQ FX fee",c:"#00D4A0"},
            {n:"8.37%",l:"Industry average",c:"#F05050"},
            {n:"$96.4B",l:"Africa remittances 2024",c:"#F0A500"},
            {n:"80%",l:"FIFA payments unpaid",c:"#F05050"},
            {n:"54",l:"African nations",c:"#00D4A0"},
            {n:"4",l:"Currencies supported",c:"#F0A500"},
            {n:"1.5%",l:"KINETIQ FX fee",c:"#00D4A0"},
            {n:"8.37%",l:"Industry average",c:"#F05050"},
            {n:"$96.4B",l:"Africa remittances 2024",c:"#F0A500"},
            {n:"80%",l:"FIFA payments unpaid",c:"#F05050"},
            {n:"54",l:"African nations",c:"#00D4A0"},
            {n:"4",l:"Currencies supported",c:"#F0A500"},
          ].map((t,i) => (
            <div className="ti" key={i}>
              <div className="tn" style={{color:t.c}}>{t.n}</div>
              <div className="tl">{t.l}</div>
              <div style={{width:"1px",height:"40px",background:"var(--border)",marginLeft:"40px"}}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="sgrid">
        <div className="stxt">
          <h2>Your earnings.<br/>Your currency.<br/><span className="gc">Your control.</span></h2>
          <p>KINETIQ gives athletes across every sport a single place to receive payments from anywhere in the world, convert at transparent rates, and manage earnings across NGN, USD, GBP, and EUR — with no hidden fees and a full audit trail on every transaction.</p>
          <button className="slink" onClick={() => nav("/features")}>
            Explore all features
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div className="scard">
          <div className="slbl">Live Portfolio</div>
          <div className="samt">$31,645.57</div>
          <div className="ssub">All wallets active · Updated now</div>
          <div className="spills">
            <span className="sp on">NGN ₦</span>
            <span className="sp on">USD $</span>
            <span className="sp">GBP £</span>
            <span className="sp">EUR €</span>
          </div>
          <div className="sfx">
            <div className="sfxc">
              <div className="sfxl">You Send</div>
              <div className="sfxv">£5,000 GBP</div>
            </div>
            <div className="sarr">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D4A0" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <div className="sfxc">
              <div className="sfxl">Recipient Gets</div>
              <div className="sfxv">₦9,340,750</div>
              <div className="sfxf">1.5% — shown openly</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sports">
        <h2>Built for <span className="gc">every sport.</span></h2>
        <p>From the football academies of Lagos to the athletics tracks of Nairobi — KINETIQ serves the full spectrum of African athletic talent.</p>
        <div className="spg">
          {[
            {ico:"⚽",n:"Football",d:"Transfers & contracts"},
            {ico:"🏃",n:"Athletics",d:"Prize & sponsorship"},
            {ico:"🥊",n:"Boxing",d:"Purse management"},
            {ico:"🏀",n:"Basketball",d:"League earnings"},
            {ico:"🎾",n:"Tennis",d:"Tournament income"},
            {ico:"🏊",n:"Aquatics",d:"Performance fees"},
          ].map((s,i) => (
            <div className="spc" key={i}>
              <div className="spico">{s.ico}</div>
              <div className="spn">{s.n}</div>
              <div className="spd">{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="cta">
        <div className="ctag"></div>
        <h2>Africa's athletes<br/>deserve better.<br/><span className="gc">This is better.</span></h2>
        <p>Open your KINETIQ wallet in under 2 minutes. Free to start.</p>
        <div className="ctabs">
          <button className="bc" onClick={() => nav("/register")}>Open Your Wallet</button>
          <button className="bco" onClick={() => nav("/features")}>Learn More</button>
        </div>
      </section>

      <footer>
        <div className="fl">KINET<em>IQ</em></div>
        <div className="flinks">
          <a onClick={() => nav("/features")}>Features</a>
          <a onClick={() => nav("/who")}>Who</a>
          <a onClick={() => nav("/roadmap")}>Roadmap</a>
          <a onClick={() => nav("/about")}>About</a>
          <a onClick={() => nav("/login")}>Log In</a>
        </div>
        <div className="fc">© 2026 KINETIQ Financial Group</div>
      </footer>
    </>
  );
}
