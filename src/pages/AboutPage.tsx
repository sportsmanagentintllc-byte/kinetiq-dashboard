import { useNavigate } from "react-router-dom";

export default function AboutPage() {
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
        .ahero{padding:160px 72px 0;position:relative;overflow:hidden;}
        .atag{font-size:11px;color:var(--green);text-transform:uppercase;letter-spacing:2.5px;font-weight:600;margin-bottom:14px;}
        .ahero h1{font-family:'Syne',sans-serif;font-size:clamp(40px,5.5vw,80px);font-weight:800;line-height:1;letter-spacing:-2px;margin-bottom:0;}
        .gc{color:var(--green);}
        .amission{padding:80px 72px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;border-bottom:1px solid var(--border);}
        .amtxt h2{font-family:'Syne',sans-serif;font-size:clamp(24px,2.5vw,36px);font-weight:800;margin-bottom:20px;line-height:1.1;}
        .amtxt p{font-size:16px;color:var(--gray2);line-height:1.8;margin-bottom:16px;}
        .astats{display:flex;flex-direction:column;gap:20px;}
        .astat{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px;}
        .asn{font-family:'Syne',sans-serif;font-size:44px;font-weight:800;line-height:1;margin-bottom:8px;}
        .asl{font-size:13px;color:var(--gray2);}
        .agundua{padding:80px 72px;background:var(--navy2);border-bottom:1px solid var(--border);}
        .agtop{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;margin-bottom:56px;}
        .agtag{font-size:11px;color:var(--green);text-transform:uppercase;letter-spacing:2.5px;font-weight:600;margin-bottom:14px;}
        .agundua h2{font-family:'Syne',sans-serif;font-size:clamp(28px,3vw,44px);font-weight:800;line-height:1.08;margin-bottom:16px;}
        .agundua p{font-size:15px;color:var(--gray2);line-height:1.75;margin-bottom:24px;}
        .aglink{display:inline-flex;align-items:center;gap:8px;color:var(--green);font-size:14px;font-weight:600;text-decoration:none;}
        .agflow{display:flex;flex-direction:column;gap:10px;}
        .agstep{display:flex;align-items:flex-start;gap:16px;background:rgba(255,255,255,.02);border:1px solid var(--border);border-radius:12px;padding:18px 22px;transition:all .2s;}
        .agstep:hover{border-color:rgba(0,212,160,.25);}
        .agn{width:28px;height:28px;flex-shrink:0;background:var(--green);color:var(--navy);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:11px;margin-top:1px;}
        .agt{font-size:13px;color:var(--gray2);line-height:1.6;}
        .agt strong{color:var(--white);font-weight:600;}
        .avalues{padding:80px 72px;border-bottom:1px solid var(--border);}
        .avalues h2{font-family:'Syne',sans-serif;font-size:clamp(28px,3vw,40px);font-weight:800;margin-bottom:48px;}
        .avg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        .avc{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:32px;}
        .avt{font-family:'Syne',sans-serif;font-size:18px;font-weight:700;margin-bottom:12px;color:var(--green);}
        .avd{font-size:14px;color:var(--gray2);line-height:1.7;}
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
          .ahero{padding:110px 20px 0;}
          .amission{padding:48px 20px;grid-template-columns:1fr;gap:40px;}
          .agundua{padding:48px 20px;}.agtop{grid-template-columns:1fr;gap:40px;}
          .avalues{padding:48px 20px;}.avg{grid-template-columns:1fr;}
          .cta{padding:60px 20px;}.ctabs{flex-direction:column;align-items:center;}
          footer{padding:24px 20px;flex-direction:column;gap:12px;text-align:center;}
        }
      `}</style>

      <nav className="kn">
        <div className="kl" onClick={() => nav("/")}>KINET<em>IQ</em></div>
        <ul className="knu">
          <li><a onClick={() => nav("/features")}>Features</a></li>
          <li><a onClick={() => nav("/who")}>Who</a></li>
          <li><a onClick={() => nav("/roadmap")}>Roadmap</a></li>
          <li><a className="act" onClick={() => nav("/about")}>About</a></li>
        </ul>
        <div className="knr">
          <button className="bg" onClick={() => nav("/login")}>Log in</button>
          <button className="bp" onClick={() => nav("/register")}>Get Started</button>
        </div>
      </nav>

      <div className="ahero">
        <div className="atag">About KINETIQ</div>
        <h1>We built what<br/>should have<br/>existed <span className="gc">already.</span></h1>
      </div>

      <div className="amission">
        <div className="amtxt">
          <h2>The gap between what Africa's athletes earn and what they receive is not a regulatory failure. It is an infrastructure failure.</h2>
          <p>KINETIQ was built by people who have seen this gap from the inside — in negotiating rooms, on training grounds, and in the accounts of athletes who watched their earnings disappear to fees, agents, and systems that were never built for them.</p>
          <p>The mission is simple: build the financial infrastructure that African athletic talent has always deserved. Transparent. Compliant. Fast. Theirs.</p>
          <p>We start with the foundation — wallets, FX, transfers, commissions. Then we build toward a world where athletic value is tokenized, portable, and protected by code. Not by trust.</p>
        </div>
        <div className="astats">
          {[
            {n:"1.5%",l:"Our FX fee on Africa corridors — vs 8.37% industry average",c:"#00D4A0"},
            {n:"$96.4B",l:"Remittances into Africa annually (World Bank 2024)",c:"#F0A500"},
            {n:"80%",l:"Of FIFA training compensation payments that never reach clubs",c:"#F05050"},
            {n:"54",l:"African nations in KINETIQ's target market",c:"#00D4A0"},
          ].map((s,i) => (
            <div className="astat" key={i}>
              <div className="asn" style={{color:s.c}}>{s.n}</div>
              <div className="asl">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="agundua">
        <div className="agtop">
          <div>
            <div className="agtag">Ecosystem</div>
            <h2>Gundua Sports × KINETIQ</h2>
            <p>Gundua Sports discovers overlooked athletic talent across 54 African nations — connecting athletes with scouts, clubs, and opportunities in the UK, Spain, and beyond. KINETIQ is the financial layer that handles everything after discovery. Together they form the only fully integrated talent-to-payment ecosystem on the continent.</p>
            <p>When an athlete is discovered on Gundua, their KINETIQ wallet activates automatically. Discovery to payment. One ecosystem. No friction.</p>
            <a href="https://gunduasports.com" target="_blank" rel="noreferrer" className="aglink">
              Visit Gundua Sports
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="agflow">
            {[
              {n:"1",t:<><strong>Athlete submits to Gundua</strong> — profile created, footage uploaded, discovery begins across 54 nations</>},
              {n:"2",t:<><strong>Interest confirmed</strong> — KINETIQ wallet activates automatically, linked to the Gundua profile</>},
              {n:"3",t:<><strong>Opportunity secured</strong> — earnings sent directly to the athlete's KINETIQ wallet from anywhere</>},
              {n:"4",t:<><strong>Earnings split automatically</strong> — athlete and representative both credited in one atomic transaction</>},
              {n:"5",t:<><strong>Development clubs compensated</strong> — academies receive solidarity payments through compliant rails</>},
            ].map((s,i) => (
              <div className="agstep" key={i}>
                <div className="agn">{s.n}</div>
                <div className="agt">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="avalues">
        <h2>What we stand for.</h2>
        <div className="avg">
          {[
            {t:"Transparency",d:"Every fee visible. Every rate shown. Every transaction on an immutable ledger. We do not profit from information asymmetry."},
            {t:"Compliance",d:"Built to operate within regulatory frameworks — not around them. Every feature is designed with compliance as a first principle."},
            {t:"Equity",d:"The same financial tools available to athletes in London should be available to athletes in Lagos. That gap is what we exist to close."},
            {t:"Precision",d:"Every transaction either fully completes or fully reverses. No partial payments. No lost funds. No ambiguity."},
            {t:"Openness",d:"We show our rates, our fees, and our margins. Athletes deserve to know exactly what they are paying and who they are paying it to."},
            {t:"Longevity",d:"We are building infrastructure, not an app. The systems we build today will carry African athletic earnings for decades."},
          ].map((v,i) => (
            <div className="avc" key={i}>
              <div className="avt">{v.t}</div>
              <div className="avd">{v.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta">
        <h2>Be part of what<br/><span className="gc">we're building.</span></h2>
        <p>Open your KINETIQ wallet. Join the ecosystem.</p>
        <div className="ctabs">
          <button className="bc" onClick={() => nav("/register")}>Get Started</button>
        </div>
      </div>

      <footer>
        <div className="fl" onClick={() => nav("/")}>KINET<em>IQ</em></div>
        <div className="fc">© 2026 KINETIQ Financial Group · kineticfinancials.group</div>
      </footer>
    </>
  );
}
