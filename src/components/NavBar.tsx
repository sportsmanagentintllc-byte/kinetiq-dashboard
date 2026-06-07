import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const nav = useNavigate();
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/features", label: "Features" },
    { path: "/who", label: "Who" },
    { path: "/roadmap", label: "Roadmap" },
    { path: "/about", label: "About" },
  ];

  const go = (path: string) => { nav(path); setOpen(false); };

  return (
    <>
      <style>{`
        .kn{position:fixed;top:0;left:0;right:0;z-index:1000;padding:18px 72px;display:flex;align-items:center;justify-content:space-between;background:rgba(4,13,28,0.9);backdrop-filter:blur(24px);border-bottom:1px solid rgba(255,255,255,0.06);}
        .kl{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;letter-spacing:5px;color:#F0F4FF;cursor:pointer;}
        .kl em{color:#00D4A0;font-style:normal;}
        .knu{display:flex;gap:32px;list-style:none;}
        .knu a{color:#8A9BB0;text-decoration:none;font-size:13px;font-weight:500;cursor:pointer;transition:color .2s;}
        .knu a:hover{color:#F0F4FF;}
        .knu a.act{color:#F0F4FF;font-weight:600;}
        .knr{display:flex;gap:10px;align-items:center;}
        .nb-ghost{padding:9px 22px;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#F0F4FF;font-size:13px;font-weight:500;cursor:pointer;background:none;transition:all .2s;font-family:'DM Sans',sans-serif;}
        .nb-ghost:hover{border-color:rgba(0,212,160,.5);color:#00D4A0;}
        .nb-prim{padding:9px 22px;background:#00D4A0;border-radius:8px;color:#040D1C;font-size:13px;font-weight:700;font-family:'Syne',sans-serif;cursor:pointer;border:none;transition:all .2s;}
        .nb-prim:hover{background:#00B589;}
        .hmb{display:none;background:none;border:none;cursor:pointer;padding:6px;flex-direction:column;gap:5px;}
        .hmb span{display:block;width:22px;height:2px;background:#F0F4FF;border-radius:2px;transition:all .2s;}
        .mob-overlay{display:none;position:fixed;top:57px;left:0;right:0;bottom:0;background:rgba(4,13,28,0.97);backdrop-filter:blur(24px);z-index:999;flex-direction:column;padding:32px 24px;gap:0;}
        .mob-overlay.open{display:flex;}
        .mob-lnk{color:#8A9BB0;font-size:17px;font-weight:500;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.06);cursor:pointer;transition:color .2s;font-family:'DM Sans',sans-serif;}
        .mob-lnk:hover{color:#F0F4FF;}
        .mob-lnk.act{color:#F0F4FF;font-weight:600;}
        .mob-acts{display:flex;flex-direction:column;gap:10px;margin-top:28px;}
        .mob-ghost{padding:14px;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#F0F4FF;font-size:15px;font-weight:500;cursor:pointer;background:none;text-align:center;font-family:'DM Sans',sans-serif;}
        .mob-prim{padding:14px;background:#00D4A0;border-radius:8px;color:#040D1C;font-size:15px;font-weight:700;font-family:'Syne',sans-serif;cursor:pointer;border:none;text-align:center;}
        @media(max-width:768px){
          .kn{padding:14px 20px;}
          .knu{display:none;}
          .knr{display:none;}
          .hmb{display:flex;}
        }
      `}</style>

      <nav className="kn">
        <div className="kl" onClick={() => go("/")}>KINET<em>IQ</em></div>
        <ul className="knu">
          {links.map(l => (
            <li key={l.path}>
              <a className={loc.pathname === l.path ? "act" : ""} onClick={() => go(l.path)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="knr">
          <button className="nb-ghost" onClick={() => go("/login")}>Log in</button>
          <button className="nb-prim" onClick={() => go("/register")}>Get Started</button>
        </div>
        <button className="hmb" onClick={() => setOpen(!open)} aria-label="Menu">
          <span style={open ? {transform:"rotate(45deg) translate(5px,5px)"} : {}}></span>
          <span style={open ? {opacity:0} : {}}></span>
          <span style={open ? {transform:"rotate(-45deg) translate(5px,-5px)"} : {}}></span>
        </button>
      </nav>

      <div className={`mob-overlay${open ? " open" : ""}`}>
        {links.map(l => (
          <div key={l.path} className={`mob-lnk${loc.pathname === l.path ? " act" : ""}`} onClick={() => go(l.path)}>
            {l.label}
          </div>
        ))}
        <div className="mob-acts">
          <button className="mob-ghost" onClick={() => go("/login")}>Log in</button>
          <button className="mob-prim" onClick={() => go("/register")}>Get Started</button>
        </div>
      </div>
    </>
  );
}
