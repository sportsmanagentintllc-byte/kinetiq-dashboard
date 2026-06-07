import { useNavigate } from "react-router-dom";

export default function WhoPage() {
  const nav = useNavigate();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        :root{--navy:#040D1C;--navy2:#071428;--card:#0B1A2E;--card2:#0E2040;--green:#00D4A0;--green2:#00B589;--gold:#F0A500;--red:#F05050;--white:#F0F4FF;--gray:#6A7A90;--gray2:#8A9BB0;--border:rgba(255,255,255,0.06);--border2:rgba(255,255,255,0.12);}
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
        .whero{min-height:60vh;display:flex;align-items:flex-end;padding:160px 72px 80px;position:relative;overflow:hidden;background:linear-gradient(135deg,var(--navy2) 0%,var(--navy) 100%);}
        .whero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 0% 100%,rgba(0,212,160,.06) 0%,transparent 60%);}
        .wtag{font-size:11px;color:var(--green);text-transform:uppercase;letter-spacing:2.5px;font-weight:600;margin-bottom:14px;}
        .whero h1{font-family:'Syne',sans-serif;font-size:clamp(36px,5vw,72px);font-weight:800;line-height:1.02;letter-spacing:-1.5px;max-width:700px;margin-bottom:20px;position:relative;z-index:2;}
        .gc{color:var(--green);}
        .whero p{font-size:17px;color:var(--gray2);max-width:520px;line-height:1.7;position:relative;z-index:2;}
        .wcards{padding:80px 72px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .wcard{border-radius:24px;padding:48px 36px;position:relative;overflow:hidden;cursor:default;transition:transform .25s;}
        .wcard:hover{transform:translateY(-6px);}
        .wcard.a{background:linear-gradient(145deg,#0B1A2E,#0E2040);border:1px solid var(--border);}
        .wcard.b{background:linear-gradient(145deg,#0D1F14,#102818);border:1px solid rgba(0,212,160,.15);}
        .wcard.c{background:linear-gradient(145deg,#1A1308,#221A0A);border:1px solid rgba(240,165,0,.15);}
        .wcard.d{background:linear-gradient(145deg,#130A1F,#1A0E2A);border:1px solid rgba(128,64,255,.15);}
        .wcard.e{background:linear-gradient(145deg,#0A1520,#0D1E2E);border:1px solid rgba(64,160,255,.15);}
        .wcard.f{background:linear-gradient(145deg,#1F0A0A,#2A0E0E);border:1px solid rgba(255,80,80,.1);}
        .wtype{font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:700;margin-bottom:20px;opacity:.7;}
        .wcard h2{font-family:'Syne',sans-serif;font-size:28px;font-weight:800;margin-bottom:16px;line-height:1.1;}
        .wcard p{font-size:14px;color:var(--gray2);line-height:1.7;margin-bottom:28px;}
        .wtags{display:flex;flex-wrap:wrap;gap:8px;}
        .wtg{padding:5px 12px;border-radius:100px;font-size:11px;font-weight:600;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:var(--gray2);}
        .wdivider{padding:60px 72px;background:var(--navy2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
        .wdivider h2{font-family:'Syne',sans-serif;font-size:clamp(24px,2.5vw,36px);font-weight:800;margin-bottom:16px;}
        .wdivider p{font-size:15px;color:var(--gray2);max-width:600px;line-height:1.7;}
        .cta{padding:100px 72px;text-align:center;}
        .cta h2{font-family:'Syne',sans-serif;font-size:clamp(32px,4vw,52px);font-weight:800;line-height:1.08;letter-spacing:-.5px;margin-bottom:16px;}
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
          .whero{padding:110px 20px 60px;min-height:auto;}
          .wcards{padding:48px 20px;grid-template-columns:1fr;gap:16px;}
          .wdivider{padding:48px 20px;}
          .cta{padding:60px 20px;}.ctabs{flex-direction:column;align-items:center;}
          footer{padding:24px 20px;flex-direction:column;gap:12px;text-align:center;}
        }
      `}</style>

      <nav className="kn">
        <div className="kl" onClick={() => nav("/")}>KINET<em>IQ</em></div>
        <ul className="knu">
          <li><a onClick={() => nav("/features")}>Features</a></li>
          <li><a className="act" onClick={() => nav("/who")}>Who</a></li>
          <li><a onClick={() => nav("/roadmap")}>Roadmap</a></li>
          <li><a onClick={() => nav("/about")}>About</a></li>
        </ul>
        <div className="knr">
          <button className="bg" onClick={() => nav("/login")}>Log in</button>
          <button className="bp" onClick={() => nav("/register")}>Get Started</button>
        </div>
      </nav>

      <div className="whero">
        <div>
          <div className="wtag">Who It's For</div>
          <h1>Built for the ones<br/>the system<br/><span className="gc">overlooked.</span></h1>
          <p>Every athlete, representative, and organisation that has watched their earnings shrink before reaching them. KINETIQ was built for you.</p>
        </div>
      </div>

      <div className="wcards">
        {[
          {cls:"a",type:"Athletes",title:"Your performance. Your earnings. Fully yours.",desc:"Receive payments from anywhere in the world, convert at real rates, send money home, and manage your finances — without a bank, a middleman, or a hidden fee.",tags:["Multi-currency wallet","Instant deposits","FX conversion","Transaction history"],gc:"#00D4A0"},
          {cls:"b",type:"Agents & Representatives",title:"Every deal. Transparent. Instant. Compliant.",desc:"Receive your share of every deal automatically — split the moment a payment arrives. Full audit trail for every transaction. No spreadsheets, no chasing, no disputes.",tags:["Auto commission split","Compliant earnings","Audit trail","Instant settlement"],gc:"#00D4A0"},
          {cls:"c",type:"Clubs & Academies",title:"Receive what you're owed. Finally.",desc:"Access solidarity payments and training compensation through compliant banking rails. The financial infrastructure to receive what the global sports economy has always owed you.",tags:["Solidarity payments","Training compensation","Business accounts","Bulk transfers"],gc:"#F0A500"},
          {cls:"d",type:"Sports Organisations",title:"Financial infrastructure at scale.",desc:"Multi-user accounts for organisations managing multiple athletes, contracts, and payment streams. One platform, full visibility, complete control.",tags:["Multi-user access","Bulk payments","Organisation accounts","Reporting"],gc:"#8040FF"},
          {cls:"e",type:"Diaspora & Families",title:"Send money home. Arrive in full.",desc:"Support your family back home without losing a third of it to fees. KINETIQ charges 1.5% — not 8%. The rest belongs to the people you're sending it to.",tags:["Low fees","Fast transfers","Real exchange rates","Instant confirmation"],gc:"#40A0FF"},
          {cls:"f",type:"SMEs & Businesses",title:"Business banking without the bureaucracy.",desc:"Open business accounts, receive international payments, manage multi-currency cash flow, and pay staff or suppliers — all through KINETIQ's compliant infrastructure.",tags:["Business accounts","International payments","Multi-currency","Staff payments"],gc:"#FF5050"},
        ].map((c,i) => (
          <div className={`wcard ${c.cls}`} key={i}>
            <div className="wtype" style={{color:c.gc}}>{c.type}</div>
            <h2>{c.title}</h2>
            <p>{c.desc}</p>
            <div className="wtags">{c.tags.map((t,j) => <span className="wtg" key={j}>{t}</span>)}</div>
          </div>
        ))}
      </div>

      <div className="wdivider">
        <h2>Every sport. Every corridor. <span className="gc">Every athlete.</span></h2>
        <p>KINETIQ does not serve one sport. It serves the ecosystem of African athletic talent across football, athletics, boxing, basketball, tennis, swimming, and every discipline where performance meets professional earnings. If you earn from sport, KINETIQ is built for you.</p>
      </div>

      <div className="cta">
        <h2>Which one <span className="gc">are you?</span></h2>
        <p>Open your account in under 2 minutes. Free to start.</p>
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
