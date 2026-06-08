import { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    document.title = "KINETIQ — Financial Infrastructure for Africa's Rising Generation";
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`:root{
  --navy:#040D1C;--navy2:#071428;--card:#0B1A2E;--card2:#0E2040;
  --green:#00D4A0;--green2:#00B589;--gold:#F0A500;--red:#F05050;
  --white:#F0F4FF;--gray:#6A7A90;--gray2:#8A9BB0;
  --border:rgba(255,255,255,0.06);--border2:rgba(255,255,255,0.12);
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--navy);color:var(--white);font-family:'DM Sans',sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
h1,h2,h3,h4,.logo-t{font-family:'Syne',sans-serif;}
nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:18px 72px;display:flex;align-items:center;justify-content:space-between;background:rgba(4,13,28,0.85);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);}
.logo-t{font-size:20px;font-weight:800;letter-spacing:5px;color:var(--white);}
.logo-t em{color:var(--green);font-style:normal;}
.nav-ul{display:flex;gap:32px;list-style:none;}
.nav-ul a{color:var(--gray2);text-decoration:none;font-size:13px;font-weight:500;transition:color .2s;cursor:pointer;}
.nav-ul a:hover{color:var(--white);}
.nav-r{display:flex;gap:10px;align-items:center;}
.b-ghost{padding:9px 22px;border:1px solid var(--border2);border-radius:8px;color:var(--white);text-decoration:none;font-size:13px;font-weight:500;transition:all .2s;}
.b-ghost:hover{border-color:rgba(0,212,160,.5);color:var(--green);}
.b-nav{padding:9px 22px;background:var(--green);border-radius:8px;color:var(--navy);text-decoration:none;font-size:13px;font-weight:700;font-family:'Syne',sans-serif;transition:all .2s;}
.b-nav:hover{background:var(--green2);transform:translateY(-1px);}
.hero{min-height:100vh;display:flex;align-items:center;padding:130px 72px 80px;position:relative;overflow:hidden;}
.h-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px);background-size:80px 80px;pointer-events:none;}
.h-glow{position:absolute;width:800px;height:800px;background:radial-gradient(circle,rgba(0,212,160,0.06) 0%,transparent 65%);right:-100px;top:50%;transform:translateY(-50%);pointer-events:none;}
.h-cont{position:relative;z-index:2;max-width:660px;}
.h-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(0,212,160,0.08);border:1px solid rgba(0,212,160,0.25);border-radius:100px;padding:6px 18px;font-size:11px;color:var(--green);font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:36px;}
.pulse{width:7px;height:7px;background:var(--green);border-radius:50%;animation:pls 2s ease-in-out infinite;}
@keyframes pls{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(0,212,160,0.4);}50%{opacity:.7;box-shadow:0 0 0 6px rgba(0,212,160,0);}}
.hero h1{font-size:clamp(44px,5.5vw,78px);font-weight:800;line-height:1.02;letter-spacing:-1.5px;margin-bottom:24px;}
.gc{color:var(--green);}
.hero p{font-size:17px;color:var(--gray2);line-height:1.75;max-width:520px;margin-bottom:44px;}
.h-btns{display:flex;gap:14px;flex-wrap:wrap;}
.b-hero{padding:16px 38px;background:var(--green);color:var(--navy);border-radius:10px;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;text-decoration:none;transition:all .25s;}
.b-hero:hover{background:var(--green2);transform:translateY(-2px);box-shadow:0 16px 36px rgba(0,212,160,0.25);}
.b-out{padding:16px 38px;border:1px solid var(--border2);color:var(--white);border-radius:10px;font-size:15px;text-decoration:none;transition:all .25s;cursor:pointer;}
.b-out:hover{border-color:rgba(255,255,255,.3);}
.h-vis{position:absolute;right:72px;top:50%;transform:translateY(-50%);width:420px;z-index:2;}
.hc{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:28px;margin-bottom:14px;position:relative;overflow:hidden;}
.hc::after{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,var(--green) 50%,transparent 100%);opacity:.5;}
.hc-lbl{font-size:10px;color:var(--gray);text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;}
.hc-amt{font-family:'Syne',sans-serif;font-size:34px;font-weight:800;color:var(--white);margin-bottom:4px;letter-spacing:-1px;}
.hc-sub{font-size:12px;color:var(--green);font-weight:500;margin-bottom:22px;}
.hc-pills{display:flex;gap:8px;flex-wrap:wrap;}
.hp{padding:5px 13px;border-radius:100px;font-size:11px;font-weight:600;background:rgba(255,255,255,.04);border:1px solid var(--border);color:var(--gray2);}
.hp.on{background:rgba(0,212,160,.1);border-color:rgba(0,212,160,.3);color:var(--green);}
.fx-c{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
.fx-col{display:flex;flex-direction:column;gap:3px;}
.fx-l{font-size:10px;color:var(--gray);text-transform:uppercase;letter-spacing:1.5px;}
.fx-v{font-family:'Syne',sans-serif;font-size:17px;font-weight:700;}
.fx-f{font-size:11px;color:var(--green);}
.fx-arr{width:32px;height:32px;border-radius:50%;background:rgba(0,212,160,.1);border:1px solid rgba(0,212,160,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.stats{padding:56px 72px;border-top:1px solid var(--border);border-bottom:1px solid var(--border);background:var(--navy2);}
.sg{display:grid;grid-template-columns:repeat(4,1fr);}
.si{padding:0 40px;text-align:center;border-right:1px solid var(--border);}
.si:last-child{border-right:none;}
.sn{font-family:'Syne',sans-serif;font-size:52px;font-weight:800;line-height:1;margin-bottom:10px;}
.sl{font-size:13px;color:var(--gray2);line-height:1.5;}
.gr{color:var(--green);}.rd{color:var(--red);}.gd{color:var(--gold);}
.S{padding:100px 72px;}
.S.dk{background:var(--navy2);}
.stag{font-size:11px;color:var(--green);text-transform:uppercase;letter-spacing:2.5px;font-weight:600;margin-bottom:14px;}
.sh{font-size:clamp(30px,3.5vw,52px);font-weight:800;line-height:1.08;letter-spacing:-.5px;margin-bottom:20px;}
.sp{font-size:16px;color:var(--gray2);line-height:1.75;max-width:540px;}
.pg{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;}
.pcs{display:flex;flex-direction:column;gap:12px;}
.pc{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:22px 24px;display:flex;gap:18px;align-items:flex-start;transition:border-color .2s,background .2s;}
.pc:hover{border-color:rgba(0,212,160,.25);background:var(--card2);}
.pi{width:40px;height:40px;flex-shrink:0;background:rgba(0,212,160,.07);border:1px solid rgba(0,212,160,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;}
.pi svg{width:18px;height:18px;stroke:var(--green);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
.pt{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;margin-bottom:5px;}
.pd{font-size:13px;color:var(--gray2);line-height:1.6;}
.fg{display:grid;grid-template-columns:repeat(3,1fr);margin-top:60px;border:1px solid var(--border);border-radius:20px;overflow:hidden;}
.fi{padding:40px 32px;border-right:1px solid var(--border);border-bottom:1px solid var(--border);transition:background .2s;}
.fi:hover{background:var(--card2);}
.fi:nth-child(3n){border-right:none;}
.fi:nth-child(n+4){border-bottom:none;}
.fic{width:48px;height:48px;background:rgba(0,212,160,.07);border:1px solid rgba(0,212,160,.15);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.fic svg{width:22px;height:22px;stroke:var(--green);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
.ftt{font-family:'Syne',sans-serif;font-size:16px;font-weight:700;margin-bottom:10px;}
.fds{font-size:13px;color:var(--gray2);line-height:1.65;}
.stg{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;margin-top:64px;}
.stp{position:relative;}
.stn{font-family:'Syne',sans-serif;font-size:56px;font-weight:800;color:rgba(0,212,160,.08);line-height:1;margin-bottom:16px;}
.sttl{font-family:'Syne',sans-serif;font-size:16px;font-weight:700;margin-bottom:10px;}
.std{font-size:13px;color:var(--gray2);line-height:1.65;}
.ag{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:60px;}
.ac{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:36px 28px;transition:all .25s;}
.ac:hover{border-color:rgba(0,212,160,.3);transform:translateY(-4px);box-shadow:0 32px 64px rgba(0,0,0,.3);}
.aic{width:52px;height:52px;background:rgba(0,212,160,.07);border:1px solid rgba(0,212,160,.15);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:22px;}
.aic svg{width:24px;height:24px;stroke:var(--green);fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;}
.at{font-family:'Syne',sans-serif;font-size:20px;font-weight:700;margin-bottom:12px;}
.ad{font-size:14px;color:var(--gray2);line-height:1.7;margin-bottom:20px;}
.tgs{display:flex;flex-wrap:wrap;gap:8px;}
.tg{padding:4px 12px;background:rgba(0,212,160,.07);border:1px solid rgba(0,212,160,.18);border-radius:100px;font-size:11px;color:var(--green);font-weight:600;}
.ct{margin-top:56px;border:1px solid var(--border);border-radius:20px;overflow:hidden;}
.ch{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;background:var(--card2);padding:18px 36px;gap:16px;border-bottom:1px solid var(--border);}
.ch div{font-family:'Syne',sans-serif;font-size:12px;font-weight:700;text-align:center;color:var(--gray2);}
.ch div:first-child{text-align:left;}
.ch .kq{color:var(--green);}
.cr{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;padding:16px 36px;gap:16px;border-bottom:1px solid var(--border);align-items:center;transition:background .15s;}
.cr:last-child{border-bottom:none;}
.cr:hover{background:rgba(255,255,255,.02);}
.cr div{text-align:center;font-size:13px;}
.cr div:first-child{text-align:left;color:var(--gray2);}
.ck{color:var(--green);font-size:16px;font-weight:700;}
.cx{color:var(--red);font-size:16px;}
.cp{color:var(--gold);font-size:12px;font-weight:600;}
.cv{font-weight:700;font-family:'Syne',sans-serif;}
.gg{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.gf{display:flex;flex-direction:column;gap:10px;}
.gs{display:flex;align-items:flex-start;gap:16px;background:rgba(255,255,255,.02);border:1px solid var(--border);border-radius:12px;padding:18px 22px;transition:all .2s;}
.gs:hover{border-color:rgba(0,212,160,.25);background:rgba(0,212,160,.03);}
.gn{width:30px;height:30px;flex-shrink:0;background:var(--green);color:var(--navy);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:12px;margin-top:1px;}
.gt{font-size:13px;color:var(--gray2);line-height:1.6;}
.gt strong{color:var(--white);font-weight:600;}
.wg{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:56px;}
.wc{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:32px;transition:all .2s;}
.wc:hover{border-color:rgba(0,212,160,.25);}
.wc.wide{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
.wb{display:inline-block;padding:4px 12px;background:rgba(240,165,0,.08);border:1px solid rgba(240,165,0,.25);border-radius:100px;font-size:10px;color:var(--gold);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:14px;}
.wt{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;margin-bottom:12px;line-height:1.2;}
.wd{font-size:13px;color:var(--gray2);line-height:1.7;}
.cta{padding:120px 72px;text-align:center;position:relative;overflow:hidden;}
.cta-g{position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 50%,rgba(0,212,160,.05) 0%,transparent 70%);}
.cta h2{font-size:clamp(36px,5vw,66px);font-weight:800;line-height:1.05;letter-spacing:-1px;margin-bottom:20px;position:relative;}
.cta p{font-size:17px;color:var(--gray2);margin-bottom:44px;position:relative;}
.cbs{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;}
.bc{padding:18px 52px;background:var(--green);color:var(--navy);border-radius:12px;font-family:'Syne',sans-serif;font-weight:700;font-size:16px;text-decoration:none;transition:all .25s;}
.bc:hover{transform:translateY(-3px);box-shadow:0 24px 48px rgba(0,212,160,.25);}
.bco{padding:18px 52px;border:1px solid var(--border2);color:var(--white);border-radius:12px;font-size:16px;text-decoration:none;transition:all .25s;}
.bco:hover{border-color:rgba(255,255,255,.3);}
footer{padding:60px 72px;border-top:1px solid var(--border);}
.ft{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:60px;margin-bottom:48px;}
.fl{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;letter-spacing:5px;margin-bottom:12px;}
.ftag{font-size:13px;color:var(--gray2);line-height:1.65;margin-bottom:16px;}
.fdom{font-size:12px;color:var(--gray);}
.fch{font-size:11px;color:var(--gray);text-transform:uppercase;letter-spacing:1.5px;font-weight:700;margin-bottom:16px;}
.fli{list-style:none;display:flex;flex-direction:column;gap:10px;}
.fli a{font-size:14px;color:var(--gray2);text-decoration:none;transition:color .2s;}
.fli a:hover{color:var(--white);}
.fb{display:flex;justify-content:space-between;align-items:flex-start;padding-top:32px;border-top:1px solid var(--border);}
.fc{font-size:12px;color:var(--gray);}
.fleg{font-size:11px;color:rgba(106,122,144,.6);max-width:480px;text-align:right;line-height:1.6;}
.wvis{background:rgba(0,212,160,.03);border:1px solid rgba(0,212,160,.1);border-radius:16px;padding:32px;display:flex;flex-direction:column;gap:24px;}
.wvis-row{display:flex;align-items:center;justify-content:space-between;gap:16px;}
.wvis-node{background:var(--card2);border:1px solid var(--border);border-radius:14px;padding:18px 20px;text-align:center;min-width:110px;}
.wvis-node.contract{border-color:rgba(240,165,0,.25);background:rgba(240,165,0,.04);}
.wvis-ico{display:flex;justify-content:center;margin-bottom:10px;}
.wvis-lbl{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:var(--white);margin-bottom:3px;}
.wvis-sub{font-size:10px;color:var(--gray);letter-spacing:.5px;}
.wvis-pct{font-family:'Syne',sans-serif;font-size:16px;font-weight:800;margin-top:4px;}
.wvis-splits{display:flex;flex-direction:column;gap:10px;}
.wvis-arrow{display:flex;align-items:center;flex-shrink:0;}
.wvis-badge{text-align:center;font-size:11px;color:var(--gray);letter-spacing:1px;padding:10px;background:rgba(255,255,255,.02);border-radius:8px;border:1px solid var(--border);}
@media(max-width:768px){
  nav{padding:14px 20px;}.nav-ul{display:none;}
  .hero{padding:90px 20px 60px;min-height:auto;}
  .h-vis{display:none;}
  .hero h1{font-size:36px;letter-spacing:-1px;}
  .hero p{font-size:15px;}
  .h-btns{flex-direction:column;}
  .b-hero,.b-out{width:100%;text-align:center;padding:14px 20px;box-sizing:border-box;}
  .stats{padding:40px 20px;}.sg{grid-template-columns:1fr 1fr;gap:24px;}.si{border-right:none;padding:0;text-align:center;}
  .sn{font-size:36px;}
  .S{padding:60px 20px;}
  .sh{font-size:28px;}
  .pg{grid-template-columns:1fr;gap:32px;}
  .fg{grid-template-columns:1fr;}.fi{border-right:none;}
  .fi:nth-child(n+4){border-bottom:1px solid var(--border);}.fi:last-child{border-bottom:none;}
  .stg{grid-template-columns:1fr 1fr;}
  .ag{grid-template-columns:1fr;}
  .ch,.cr{grid-template-columns:1.5fr 1fr 1fr;}.ch div:nth-child(4),.cr div:nth-child(4){display:none;}
  .gg{grid-template-columns:1fr;gap:32px;}
  .wg{grid-template-columns:1fr;}.wc.wide{grid-template-columns:1fr;}
  .wvis-row{flex-wrap:wrap;justify-content:center;}
  .cta{padding:72px 20px;}.cta h2{font-size:32px;}
  .cbs{flex-direction:column;align-items:stretch;}
  .bc,.bco{text-align:center;padding:16px 20px;}
  footer{padding:40px 20px;}.ft{grid-template-columns:1fr 1fr;gap:24px;}
  .fb{flex-direction:column;gap:12px;}.fleg{text-align:left;}
}`}</style>

      <nav>
        <div className="logo-t">KINET<em>IQ</em></div>
        <ul className="nav-ul">
          <li><a onClick={() => scrollTo("problem")}>The Problem</a></li>
          <li><a onClick={() => scrollTo("features")}>Features</a></li>
          <li><a onClick={() => scrollTo("who")}>Who It's For</a></li>
          <li><a onClick={() => scrollTo("web3")}>Web3 Roadmap</a></li>
        </ul>
        <div className="nav-r">
          <a href="https://kineticfinancials.group/login" className="b-ghost">Log in</a>
          <a href="https://kineticfinancials.group/register" className="b-nav">Get Started</a>
        </div>
      </nav>

      <section className="hero">
        <div className="h-grid"></div>
        <div className="h-glow"></div>
        <div className="h-cont">
          <div className="h-pill"><span className="pulse"></span>Now Live — Africa's Financial Infrastructure</div>
          <h1>Money at the<br/><span className="gc">Speed of<br/>Ambition</span></h1>
          <p>The financial infrastructure Africa's athletes, agents, and businesses have always deserved. Multi-currency wallets, transparent FX, and FIFA-compliant commission splitting — built for the corridors that matter.</p>
          <div className="h-btns">
            <a href="https://kineticfinancials.group/register" className="b-hero">Open Your Wallet</a>
            <a onClick={() => scrollTo("features")} className="b-out">How It Works</a>
          </div>
        </div>
        <div className="h-vis">
          <div className="hc">
            <div className="hc-lbl">Total Portfolio Value</div>
            <div className="hc-amt">$31,645.57</div>
            <div className="hc-sub">All wallets active</div>
            <div className="hc-pills">
              <span className="hp on">NGN &#8358;</span>
              <span className="hp on">USD $</span>
              <span className="hp">GBP &#163;</span>
              <span className="hp">EUR &#8364;</span>
            </div>
          </div>
          <div className="fx-c">
            <div className="fx-col">
              <div className="fx-l">You Send</div>
              <div className="fx-v">&#163;5,000 GBP</div>
            </div>
            <div className="fx-arr">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <div className="fx-col">
              <div className="fx-l">They Receive</div>
              <div className="fx-v">&#8358;9,340,750</div>
              <div className="fx-f">1.5% — fully transparent</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="sg">
          <div className="si"><div className="sn gr">1.5%</div><div className="sl">KINETIQ FX fee<br/>on Africa corridors</div></div>
          <div className="si"><div className="sn rd">8.37%</div><div className="sl">Industry average cost<br/>to Sub-Saharan Africa</div></div>
          <div className="si"><div className="sn gd">$96.4B</div><div className="sl">Remittances into Africa<br/>annually (World Bank 2024)</div></div>
          <div className="si"><div className="sn rd">80%</div><div className="sl">FIFA training payments<br/>that never reach clubs</div></div>
        </div>
      </section>

      <section className="S" id="problem">
        <div className="pg">
          <div>
            <div className="stag">The Problem</div>
            <h2 className="sh">Africa's talent is the world's most valuable — and least financially protected — export.</h2>
            <p className="sp">Hundreds of millions in signing fees, training compensation, and remittances disappear to hidden FX margins, unaudited agents, and infrastructure that was never built for this market. KINETIQ closes that gap.</p>
          </div>
          <div className="pcs">
            <div className="pc">
              <div className="pi"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div className="pt">Hidden FX Margins</div><div className="pd">Banks claim transfers are free then apply rates 10–15% below market. KINETIQ shows every number — market rate, our rate, our exact fee — before you confirm.</div></div>
            </div>
            <div className="pc">
              <div className="pi"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <div><div className="pt">Unverifiable Agent Commissions</div><div className="pd">FIFA FFAR capped agent commissions at 10% — but no system enforces it. KINETIQ does, automatically, on every transaction, with a permanent audit trail.</div></div>
            </div>
            <div className="pc">
              <div className="pi"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
              <div><div className="pt">Grassroots Clubs Never Paid</div><div className="pd">The FIFA Clearing House owes African academies billions in solidarity payments — but clubs lack compliant banking rails to receive them. KINETIQ is that infrastructure.</div></div>
            </div>
            <div className="pc">
              <div className="pi"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
              <div><div className="pt">No Financial Rails for Informal Talent</div><div className="pd">Before a formal contract, athletes have no compliant way to receive, hold, or move money internationally. KINETIQ creates that layer from day one of discovery.</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="S dk" id="features">
        <div className="stag">What KINETIQ Does</div>
        <h2 className="sh">Every financial service an African athlete actually needs.</h2>
        <div className="fg">
          <div className="fi"><div className="fic"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></div><div className="ftt">Multi-Currency Wallets</div><div className="fds">Hold NGN, USD, GBP, and EUR in one account. No bank visits, no paperwork. Wallets created automatically on registration.</div></div>
          <div className="fi"><div className="fic"><svg viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg></div><div className="ftt">Transparent FX Conversion</div><div className="fds">See the real market rate and our exact 1.5% fee before every conversion. No surprises. No hidden margins. Honest arithmetic.</div></div>
          <div className="fi"><div className="fic"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div className="ftt">FFAR Commission Splitting</div><div className="fds">One incoming payment, split between athlete and agent automatically. Capped at 10% per FIFA FFAR — enforced in code, not trust.</div></div>
          <div className="fi"><div className="fic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div className="ftt">Cross-Border Transfers</div><div className="fds">From a UK club to a Nigerian athlete in seconds. Every transfer on an immutable double-entry ledger with a full audit trail.</div></div>
          <div className="fi"><div className="fic"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div className="ftt">KYC and Compliance</div><div className="fds">BVN and NIN verification for Nigerian users. NDPR-compliant data handling. Built for the regulatory environment, not around it.</div></div>
          <div className="fi"><div className="fic"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><div className="ftt">Gundua Sports Integration</div><div className="fds">When an athlete is discovered on Gundua Sports, their KINETIQ wallet activates automatically. Discovery to payment in one ecosystem.</div></div>
        </div>
      </section>

      <section className="S">
        <div className="stag">How It Works</div>
        <h2 className="sh">From discovery to payment in four steps.</h2>
        <div className="stg">
          <div className="stp"><div className="stn">01</div><div className="sttl">Register and Verify</div><div className="std">Create your account in under 2 minutes. NGN and USD wallets created automatically. KYC via BVN or NIN — no paperwork.</div></div>
          <div className="stp"><div className="stn">02</div><div className="sttl">Receive Funds</div><div className="std">Clubs, agents, and sponsors send payments directly to your KINETIQ wallet. Every deposit confirmed instantly with a receipt.</div></div>
          <div className="stp"><div className="stn">03</div><div className="sttl">Convert and Split</div><div className="std">Convert between currencies at transparent rates. Agent commissions split automatically per FIFA FFAR limits. No disputes.</div></div>
          <div className="stp"><div className="stn">04</div><div className="sttl">Send Anywhere</div><div className="std">Transfer to family, clubs, or businesses across Africa and Europe. Every transaction on an immutable ledger with a permanent audit trail.</div></div>
        </div>
      </section>

      <section className="S dk" id="who">
        <div className="stag">Who It's For</div>
        <h2 className="sh">Built for every person the system overlooked.</h2>
        <div className="ag">
          <div className="ac">
            <div className="aic"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
            <div className="at">Athletes</div>
            <div className="ad">Receive signing fees from European clubs, convert at real rates, send money home, and split commissions with your agent — all in one place, from your phone.</div>
            <div className="tgs"><span className="tg">Multi-currency wallet</span><span className="tg">Instant deposits</span><span className="tg">FX conversion</span></div>
          </div>
          <div className="ac">
            <div className="aic"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div className="at">Licensed Agents</div>
            <div className="ad">Receive FIFA FFAR-compliant commissions automatically split on every transaction. Full audit trail for every deal. No disputes, no delays, no manual reconciliation.</div>
            <div className="tgs"><span className="tg">Auto commission split</span><span className="tg">FFAR compliant</span><span className="tg">Audit trail</span></div>
          </div>
          <div className="ac">
            <div className="aic"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
            <div className="at">Clubs and Academies</div>
            <div className="ad">Receive FIFA solidarity payments and training compensation through compliant banking rails. Access what the global football economy has owed you for decades.</div>
            <div className="tgs"><span className="tg">Solidarity payments</span><span className="tg">Business accounts</span><span className="tg">Bulk transfers</span></div>
          </div>
        </div>
      </section>

      <section className="S">
        <div className="stag">The Honest Comparison</div>
        <h2 className="sh">Why KINETIQ.</h2>
        <div className="ct">
          <div className="ch"><div></div><div className="kq">KINETIQ</div><div>Traditional Banks</div><div>Generic Fintech</div></div>
          <div className="cr"><div>FX fee on Africa corridors</div><div><span className="cv gr">1.5%</span></div><div><span className="cv rd">8–15%</span></div><div><span className="cv gd">3–5%</span></div></div>
          <div className="cr"><div>Transparent fee display</div><div><span className="ck">✓</span></div><div><span className="cx">✗</span></div><div><span className="cp">Partial</span></div></div>
          <div className="cr"><div>FIFA FFAR commission enforcement</div><div><span className="ck">✓</span></div><div><span className="cx">✗</span></div><div><span className="cx">✗</span></div></div>
          <div className="cr"><div>Gundua Sports ecosystem integration</div><div><span className="ck">✓</span></div><div><span className="cx">✗</span></div><div><span className="cx">✗</span></div></div>
          <div className="cr"><div>Immutable ledger audit trail</div><div><span className="ck">✓</span></div><div><span className="cp">Partial</span></div><div><span className="cp">Partial</span></div></div>
          <div className="cr"><div>African football market expertise</div><div><span className="ck">✓</span></div><div><span className="cx">✗</span></div><div><span className="cx">✗</span></div></div>
          <div className="cr"><div>Web3 tokenization roadmap</div><div><span className="ck">✓</span></div><div><span className="cx">✗</span></div><div><span className="cp">Some</span></div></div>
        </div>
      </section>

      <section className="S dk">
        <div className="gg">
          <div>
            <div className="stag">Ecosystem Integration</div>
            <h2 className="sh">Gundua Sports × KINETIQ</h2>
            <p className="sp">Gundua discovers Africa's overlooked athletic talent. KINETIQ handles everything that happens after discovery. Together they form the only fully integrated talent-to-payment ecosystem on the continent.</p>
            <br/><br/>
            <a href="https://gunduasports.com" style={{color:"var(--green)",fontSize:"14px",fontWeight:600,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px"}} target="_blank" rel="noreferrer">
              Visit Gundua Sports
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="gf">
            <div className="gs"><div className="gn">1</div><div className="gt"><strong>Athlete submits to Gundua</strong> — profile created, footage uploaded, scouting begins across 54 African nations</div></div>
            <div className="gs"><div className="gn">2</div><div className="gt"><strong>Scout confirms interest</strong> — KINETIQ wallet activates automatically, linked to the Gundua athlete profile</div></div>
            <div className="gs"><div className="gn">3</div><div className="gt"><strong>Club makes an offer</strong> — signing fee sent directly to the athlete's KINETIQ wallet from anywhere in the world</div></div>
            <div className="gs"><div className="gn">4</div><div className="gt"><strong>Commission fires automatically</strong> — athlete and agent both credited in one atomic transaction, FFAR compliant</div></div>
            <div className="gs"><div className="gn">5</div><div className="gt"><strong>Training compensation tracked</strong> — grassroots club receives FIFA solidarity payment through compliant banking rails</div></div>
          </div>
        </div>
      </section>

      <section className="S" id="web3">
        <div className="stag">The Future — Web3 Roadmap</div>
        <h2 className="sh">This is just the beginning.</h2>
        <p className="sp">KINETIQ is building toward a world where African athletic value is tokenized, portable, and protected by code — not contracts.</p>
        <div className="wg">
          <div className="wc wide">
            <div>
              <div className="wb">Phase 3 — 2026/27</div>
              <div className="wt">Smart Contract Commission Enforcement</div>
              <div className="wd">Agent commissions enforced automatically by smart contract deployed on-chain. No disputes. No delays. No WhatsApp arguments. The FIFA FFAR Article 15 cap written in code, executed atomically the moment a payment arrives. Every stakeholder receives exactly what the contract specifies — instantaneously and irrevocably.</div>
            </div>
            <div className="wvis">
              <div className="wvis-row">
                <div className="wvis-node source">
                  <div className="wvis-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
                  <div className="wvis-lbl">Club Payment</div>
                  <div className="wvis-sub">Incoming transfer</div>
                </div>
                <div className="wvis-arrow">
                  <svg width="32" height="2" viewBox="0 0 32 2"><line x1="0" y1="1" x2="28" y2="1" stroke="#00D4A0" strokeWidth="1.5" strokeDasharray="4 3"/></svg>
                </div>
                <div className="wvis-node contract">
                  <div className="wvis-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F0A500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                  <div className="wvis-lbl">Smart Contract</div>
                  <div className="wvis-sub">FFAR enforced · 10% cap</div>
                </div>
                <div className="wvis-arrow">
                  <svg width="32" height="2" viewBox="0 0 32 2"><line x1="0" y1="1" x2="28" y2="1" stroke="#00D4A0" strokeWidth="1.5" strokeDasharray="4 3"/></svg>
                </div>
                <div className="wvis-splits">
                  <div className="wvis-node athlete">
                    <div className="wvis-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
                    <div className="wvis-lbl">Athlete</div>
                    <div className="wvis-pct" style={{color:"var(--green)"}}>90%</div>
                  </div>
                  <div className="wvis-node agent">
                    <div className="wvis-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F0A500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
                    <div className="wvis-lbl">Agent</div>
                    <div className="wvis-pct" style={{color:"var(--gold)"}}>≤10%</div>
                  </div>
                </div>
              </div>
              <div className="wvis-badge">Atomic · Irreversible · On-chain · FIFA FFAR Article 15 compliant</div>
            </div>
          </div>
          <div className="wc"><div className="wb">Phase 3 — 2026/27</div><div className="wt">KINETIQ Athlete Tokens</div><div className="wd">Tokenized athlete value. Clubs and investors hold fractional economic interest in an athlete's future earnings. Fully regulated, fully auditable, unprecedented in African football.</div></div>
          <div className="wc"><div className="wb">Phase 3 — 2026/27</div><div className="wt">NGN Stablecoin and DeFi Yield</div><div className="wd">A KINETIQ NGN stablecoin pegged 1:1 to the Naira, tradeable on-chain. Idle signing bonuses earn DeFi yield instead of depreciating in a traditional bank at 0%.</div></div>
          <div className="wc"><div className="wb">Phase 4 — 2027+</div><div className="wt">On-Chain Athletic Credentials</div><div className="wd">Verified achievements, contract history, and scouting records stored immutably on-chain. A scout anywhere verifies a player's full history instantly — no intermediary required.</div></div>
          <div className="wc"><div className="wb">Phase 4 — 2027+</div><div className="wt">Cross-Chain Financial Identity</div><div className="wd">One KINETIQ KYC verification, usable across multiple blockchains and jurisdictions. The athlete's financial identity becomes as portable as they are.</div></div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-g"></div>
        <h2>The financial system Africa's<br/>talent deserves is <span className="gc">finally here.</span></h2>
        <p>Join the first wave. Open your KINETIQ wallet today — it's free.</p>
        <div className="cbs">
          <a href="https://kineticfinancials.group/register" className="bc">Open Your Wallet</a>
          <a href="https://kineticfinancials.group/fx" className="bco">Check Live FX Rates</a>
        </div>
      </section>

      <footer>
        <div className="ft">
          <div>
            <div className="fl">KINET<span style={{color:"var(--green)"}}>IQ</span></div>
            <div className="ftag">Financial infrastructure for Africa's rising generation. Multi-currency wallets, transparent FX, and FFAR-compliant commission splitting — built for the corridors that matter.</div>
            <div className="fdom">kineticfinancials.group</div>
          </div>
          <div>
            <div className="fch">Product</div>
            <ul className="fli">
              <li><a href="https://kineticfinancials.group/register">Open Account</a></li>
              <li><a href="https://kineticfinancials.group/fx">FX Calculator</a></li>
              <li><a href="https://kineticfinancials.group/login">Log In</a></li>
              <li><a href="https://gunduasports.com" target="_blank" rel="noreferrer">Gundua Sports</a></li>
            </ul>
          </div>
          <div>
            <div className="fch">Company</div>
            <ul className="fli">
              <li><a href="#">About KINETIQ</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="fch">Legal</div>
            <ul className="fli">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Compliance</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="fb">
          <div className="fc">© 2026 KINETIQ Financial Group. All rights reserved.</div>
          <div className="fleg">KINETIQ is a financial technology platform. Banking services provided through licensed partners. Not a deposit-taking institution. All transactions processed through regulated payment infrastructure. FX rates are indicative and subject to market conditions.</div>
        </div>
      </footer>
    </>
  );
}
