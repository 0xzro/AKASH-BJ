import { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// KTM COLOR PALETTE & CONFIG
// ─────────────────────────────────────────────
const O  = "#FF6B00"; // KTM Orange
const OD = "#CC5500"; // Orange pressed

const NAV_LINKS = [
  { label: "About",    id: "about" },
  { label: "Solutions", id: "solutions" },
  { label: "Work",     id: "portfolio" },
  { label: "FAQ",      id: "faq" },
  { label: "Contact",  id: "contact" },
];

const SERVICES = [
  {
    icon: "📊",
    title: "Cryptocurrency Consulting",
    desc:  "Help users understand, buy, sell, transfer, and manage cryptocurrencies safely across centralised exchanges and Web3 wallets.",
    featured: "⭐  P2P USDT Trading & Global Transfers",
    items: [
      "Buy / Sell USDT at competitive market prices",
      "P2P USDT transactions",
      "Global & cross-border USDT transfers",
      "Multi-network support (TRC20, BEP20, ERC20)",
      "USDT deposits, withdrawals & wallet transfers",
      "Transaction guidance & support",
    ],
  },
  {
    icon: "⛓️",
    title: "Blockchain & Web3 Solutions",
    desc:  "Build and support blockchain-based projects — tokens, NFTs, smart contracts, DeFi integrations, and community campaigns.",
    items: [
      "Token creation, branding & deployment",
      "NFT creation & marketplace listing",
      "Liquidity pool setup & token burns",
      "DEX integrations & token swaps",
      "Airdrop campaign setup",
      "Smart contract deployment support",
    ],
  },
  {
    icon: "📈",
    title: "Web3 Growth & Marketing",
    desc:  "Educational and promotional content that helps blockchain projects grow their communities and attract users.",
    items: [
      "Crypto article & airdrop guide writing",
      "Medium publication management",
      "Telegram & X (Twitter) content creation",
      "Community growth campaigns",
      "NFT project content",
      "Lead generation strategies",
    ],
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    desc:  "Professional visual content for businesses, startups, Web3 projects, and digital marketing campaigns.",
    items: [
      "Logo & brand identity design",
      "Social media posts & banners",
      "NFT artwork & animated GIFs",
      "Motion graphics",
      "YouTube thumbnails",
    ],
  },
  {
    icon: "💻",
    title: "Web Development",
    desc:  "Modern websites, web applications, and digital solutions for businesses and Web3 projects.",
    items: [
      "Portfolio, business & blog websites",
      "E-commerce & landing pages",
      "React / Next.js web applications",
      "AI-powered tools & automation",
      "UI/UX design & responsive design",
    ],
  },
];

const SKILL_GROUPS = [
  {
    label: "Blockchain & Crypto",
    skills: ["Cryptocurrency Trading","NFT Management","Token Creation","DeFi Platforms","DEX Engines","Wallet Security","Airdrop Campaigns","P2P Architecture"],
  },
  {
    label: "Development & UI/UX",
    skills: ["HTML5","CSS3","JavaScript ES6+","React.js / Next.js","Tailwind CSS","Responsive Design","UI/UX Architecture","Git & GitHub"],
  },
  {
    label: "Creative Design",
    skills: ["Photoshop","Canva Premium","Illustrator","Motion Graphics","Brand Identity Systems"],
  },
];

const PROJECTS = [
  {
    emoji: "⛓️",
    title: "Custom Token Architecture & Multi-chain Launch",
    desc:  "End-to-end token creation, branding, and deployment across BNB Chain and Ethereum, with liquidity setup and DEX listing.",
    tech:  ["Solidity","BEP20","ERC20","PancakeSwap","Uniswap","Web3.js"],
    result:"Token live on 2 chains with active liquidity pool",
  },
  {
    emoji: "💻",
    title: "Responsive Web3 Business Hub & Landing System",
    desc:  "Full-stack landing page with wallet integration, whitepaper embed, tokenomics dashboard, and mobile-first design.",
    tech:  ["React.js","Next.js","Tailwind CSS","ethers.js","Vercel"],
    result:"3,000+ unique visitors in launch month",
  },
  {
    emoji: "🎨",
    title: "Decentralised Community Branding & Visual Layout Suite",
    desc:  "Complete brand identity system for a DeFi project: logo, social media kit, NFT artwork, animated banners, and community templates.",
    tech:  ["Photoshop","Illustrator","Canva","Motion Graphics","Figma"],
    result:"10,000+ community members onboarded post-rebrand",
  },
];

const STATS = [
  { value: "5+",   label: "Years in Crypto" },
  { value: "1K+",  label: "Campaigns Managed" },
  { value: "20+",  label: "Testnets & Bounties" },
  { value: "100%", label: "End-to-End Delivery" },
];

const TESTIMONIALS = [
  {
    text:   "Delivered the website perfectly on time, written with clean structure, and exceeded our project's initial UI expectations. Highly recommended.",
    author: "Web3 Startup Founder",
  },
  {
    text:   "Excellent support with blockchain mechanics, token logic, and community airdrop coordination. Easily built trust from day one.",
    author: "DeFi Project Manager",
  },
];

const FAQS = [
  { q: "Do you offer token creation and deployment support?", a: "Yes, I provide custom token configurations, metadata setup, branding parameters, and contract verification support on block explorers." },
  { q: "How do your P2P USDT services work securely?", a: "I provide guidance and execution support for reliable, secure peer-to-peer transactions using optimal multi-chain protocols (TRC20, BEP20, etc.) with strict adherence to transaction safety." },
  { q: "Can you build both the website code and the creative design?", a: "Absolutely. I handle the end-to-end stack — from initial branding assets, logos, and UI layouts to writing clean, production-ready React web code." },
  { q: "What blockchain networks do you support?", a: "I work across Ethereum, BNB Chain, Tron, Solana, Polygon, and other EVM-compatible chains, supporting both mainnet deployments and testnet environments." },
];

const CHAINS = ["Ethereum", "BNB Chain", "Tron", "Solana", "Polygon"];

// ─────────────────────────────────────────────
// REUSABLE SUB-COMPONENTS
// ─────────────────────────────────────────────
function SectionHeading({ label, title, center = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 40 }}>
      <p style={{ color: O, fontWeight: 700, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 8 }}>{label}</p>
      <div style={{ width: 48, height: 3, background: O, margin: center ? "0 auto 16px" : "0 0 16px" }} />
      <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 38, lineHeight: 1.1, textTransform: "uppercase" }}>{title}</h2>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN ROOT COMPONENT
// ─────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&family=Barlow+Condensed:wght@700;900&display=swap";
    document.head.appendChild(link);
  }, []);

  const T = {
    bg:      dark ? "#0D0D0D" : "#F2F2F2",
    surface: dark ? "#151515" : "#FFFFFF",
    card:    dark ? "#1F1F1F" : "#FAFAFA",
    text:    dark ? "#F5F5F5" : "#111111",
    sub:     dark ? "#999999" : "#666666",
    border:  dark ? "#262626" : "#E0E0E0",
    navBg:   dark ? "rgba(13,13,13,0.95)" : "rgba(255,255,255,0.95)",
  };

  return (
    <div style={{ background: T.bg, color: T.text, minHeight: "100vh", fontFamily: "'Barlow', sans-serif", transition: "background 0.3s, color 0.3s" }}>
      
      {/* GLOBAL EXPERT CSS */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${T.bg}; }
        ::-webkit-scrollbar-thumb { background: ${O}; }

        .btn-orange {
          background: ${O}; color: #fff; border: none; padding: 12px 28px;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1.5px; cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: background 0.2s, transform 0.2s;
        }
        .btn-orange:hover { background: ${OD}; transform: translateY(-1px); }

        .tab-btn {
          background: none; border: none; padding: 10px 16px; color: ${T.sub};
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 16px;
          text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: all 0.2s;
          border-bottom: 2px solid transparent;
        }
        .tab-btn.active { color: ${O}; border-bottom-color: ${O}; }

        .grid-layout { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .hero-title { font-size: 56px !important; }
          .nav-container { padding: 0 16px !important; }
        }
      `}</style>

      {/* FIXED HEADER */}
      <nav style={{ background: T.navBg, borderBottom: `1px solid ${T.border}`, backdropFilter: "blur(12px)", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div className="nav-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ background: O, width: 34, height: 34, display: "flex", alignItems: "center", justifycontent: "center", justifyContent: "center", clipPath: "polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)" }}>
              <span style={{ color: "#fff", fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 15 }}>AK</span>
            </div>
            <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 20, letterSpacing: "0.5px" }}>AKASH BJ</span>
          </div>

          <div className="desktop-only" style={{ display: "flex", gap: 8 }}>
            {NAV_LINKS.map(l => (
              <button 
                key={l.id} 
                onClick={() => { setActiveSection(l.id); document.getElementById("main-view").scrollIntoView({ behavior: 'smooth' }); }}
                className={`tab-btn ${activeSection === l.id ? "active" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setDark(!dark)} style={{ background: T.card, border: `1px solid ${T.border}`, width: 34, height: 34, cursor: "pointer", color: T.text, borderRadius: "4px" }}>
              {dark ? "☀️" : "🌙"}
            </button>
            <button onClick={() => { setActiveSection("contact"); document.getElementById("main-view").scrollIntoView({ behavior: 'smooth' }); }} className="btn-orange" style={{ padding: "8px 18px", fontSize: 11 }}>Hire</button>
          </div>
        </div>
      </nav>

      {/* MINI HERO ECOSYSTEM */}
      <section style={{ paddingTop: 120, paddingBottom: 60, borderBottom: `1px solid ${T.border}`, background: `linear-gradient(180deg, ${T.surface} 0%, ${T.bg} 100%)`, position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: dark ? "rgba(255,107,0,0.1)" : "rgba(255,107,0,0.05)", border: `1px solid rgba(255,107,0,0.3)`, padding: "6px 14px", marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: O }} />
            <span style={{ color: O, fontWeight: 700, fontSize: 10, letterSpacing: "2px", textTransform: "uppercase" }}>Available for Projects</span>
          </div>

          <h1 className="hero-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 80, lineHeight: 0.9, letterSpacing: "-1px", marginBottom: 16 }}>
            WEAVING VISUALS & <span style={{ color: O }}>WEB3 TECH</span>
          </h1>

          <p style={{ color: T.sub, fontSize: 15, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Professional Blockchain Consultant, Smart Contract Deployer, UI Designer, and Front-End Architect creating conversion-driven ecosystems.
          </p>

          {/* REALTIME LIVE STATS ROW */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, maxWidth: 700, margin: "0 auto", background: T.surface, padding: "20px", border: `1px solid ${T.border}` }}>
            {STATS.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 32, color: O }}>{s.value}</div>
                <div style={{ fontSize: 11, color: T.sub, textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.5px", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRO DYNAMIC APP CONTROLLER PANEL (The Smart Tab Layout) */}
      <section id="main-view" style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 100px" }}>
        
        {/* Mobile Filter Track Options */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 16, marginBottom: 32, borderBottom: `1px solid ${T.border}` }}>
          {NAV_LINKS.map(l => (
            <button 
              key={l.id} 
              onClick={() => setActiveSection(l.id)} 
              style={{
                padding: "8px 16px", background: activeSection === l.id ? O : T.surface,
                color: activeSection === l.id ? "#FFF" : T.text, border: `1px solid ${activeSection === l.id ? O : T.border}`,
                whiteSpace: "nowrap", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px"
              }}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CONTROLLER SWITCH CONTAINER */}
        <div style={{ minHeight: "400px" }}>
          
          {/* TAB 1: ABOUT */}
          {activeSection === "about" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, alignItems: "start" }}>
              <div>
                <SectionHeading label="Introduction" title="Bridging The Gap Across Modern Web Paradigms" />
                <p style={{ color: T.sub, lineHeight: 1.7, fontSize: 15, marginBottom: 16 }}>
                  I offer comprehensive technical leadership across decentralized infrastructure, tokenomic engineering, content asset systems, and UI deployment.
                </p>
                <p style={{ color: T.sub, lineHeight: 1.7, fontSize: 15, marginBottom: 24 }}>
                  Over the past 5 years, I have helped cross-border applications verify products, scale operations, and generate reliable security tracks across multiple active blockchain mainnets.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {CHAINS.map((c, i) => (
                    <span key={i} style={{ padding: "6px 14px", border: `1px solid ${O}`, color: O, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Barlow Condensed'" }}>{c}</span>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading label="Core Stack" title="Technical Capabilities" />
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {SKILL_GROUPS.map((g, i) => (
                    <div key={i} style={{ background: T.surface, padding: 20, border: `1px solid ${T.border}` }}>
                      <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 14, color: O, textTransform: "uppercase", marginBottom: 12, letterSpacing: "1px" }}>{g.label}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {g.skills.map((sk, j) => (
                          <span key={j} style={{ background: T.card, border: `1px solid ${T.border}`, padding: "4px 10px", fontSize: 12, color: T.text }}>{sk}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SOLUTIONS */}
          {activeSection === "solutions" && (
            <div>
              <SectionHeading label="Service Catalogue" title="Tailored Web3 & Software Blueprints" center />
              <div className="grid-layout">
                {SERVICES.map((s, i) => (
                  <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, borderTop: `3px solid ${O}`, padding: 24 }}>
                    <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                    <h3 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 20, marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 6, listStyle: "none" }}>
                      {s.items.slice(0, 4).map((item, j) => (
                        <li key={j} style={{ fontSize: 12, color: T.sub, display: "flex", gap: 6 }}>
                          <span style={{ color: O }}>•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: WORK & CLIENTS */}
          {activeSection === "portfolio" && (
            <div>
              <SectionHeading label="Showcase" title="Production Deliveries" center />
              <div className="grid-layout" style={{ marginBottom: 48 }}>
                {PROJECTS.map((p, i) => (
                  <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, padding: 24 }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>{p.emoji}</div>
                    <h3 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 18, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 16 }}>
                      {p.tech.map((tech, j) => (
                        <span key={j} style={{ padding: "2px 8px", fontSize: 10, fontWeight: 700, color: O, background: dark ? "rgba(255,107,0,0.1)" : "#FFF" }}>{tech}</span>
                      ))}
                    </div>
                    <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 12, fontSize: 12, color: T.sub, fontWeight: 600 }}>✓ {p.result}</div>
                  </div>
                ))}
              </div>

              <SectionHeading label="Reviews" title="Client Transformations" center />
              <div className="grid-layout">
                {TESTIMONIALS.map((tm, i) => (
                  <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, padding: 24, borderRadius: 2 }}>
                    <p style={{ 
