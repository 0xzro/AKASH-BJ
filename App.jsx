import { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// KTM COLOUR PALETTE
// ─────────────────────────────────────────────
const O  = "#FF6B00"; // KTM Orange
const OD = "#CC5500";  // Orange pressed

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const NAV_LINKS = [
  { label: "About",    href: "#about"     },
  { label: "Services", href: "#services"  },
  { label: "Skills",   href: "#skills"    },
  { label: "Work",     href: "#portfolio" },
  { label: "FAQ",      href: "#faq"       },
  { label: "Contact",  href: "#contact"   },
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
      "Crypto market research & chart analysis",
      "Web3 wallet setup & management",
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
      "Testnet participation & DeFi testing",
      "Blockchain community building",
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
      "Web3 educational content",
      "Project promotion materials",
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
      "E-book & book cover design",
      "T-shirt design & product mockups",
      "Promotional posters",
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
      "Domain setup & configuration",
      "Custom web solutions",
      "Resume & portfolio websites",
    ],
  },
];

const SKILL_GROUPS = [
  {
    label: "Blockchain & Crypto",
    skills: [
      "Cryptocurrency Trading","NFT Management","Token Creation",
      "DeFi Platforms","DEX Engines","Wallet Management & Security",
      "Airdrop Campaigns","P2P Architecture",
    ],
  },
  {
    label: "Development & UI/UX",
    skills: [
      "HTML5","CSS3","JavaScript ES6+","React.js / Next.js",
      "Tailwind CSS","Responsive Design","UI/UX Architecture","Git & GitHub",
    ],
  },
  {
    label: "Creative Design",
    skills: [
      "Photoshop","Canva Premium","Illustrator",
      "Motion Graphics","Brand Identity Systems",
    ],
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
  { value: "5+",   label: "Years in Crypto & Blockchain"  },
  { value: "1K+",  label: "Airdrop Campaigns Managed"     },
  { value: "20+",  label: "Testnets & Bug Bounties"       },
  { value: "100%", label: "End-to-End Delivery"           },
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
  {
    q: "Do you offer token creation and deployment support?",
    a: "Yes, I provide custom token configurations, metadata setup, branding parameters, and contract verification support on block explorers.",
  },
  {
    q: "How do your P2P USDT services work securely?",
    a: "I provide guidance and execution support for reliable, secure peer-to-peer transactions using optimal multi-chain protocols (TRC20, BEP20, etc.) with strict adherence to transaction safety.",
  },
  {
    q: "Can you build both the website code and the creative design?",
    a: "Absolutely. I handle the end-to-end stack — from initial branding assets, logos, and UI layouts to writing clean, production-ready React web code.",
  },
  {
    q: "What blockchain networks do you support?",
    a: "I work across Ethereum, BNB Chain, Tron, Solana, Polygon, and other EVM-compatible chains, supporting both mainnet deployments and testnet environments.",
  },
  {
    q: "How do I get started with a project?",
    a: "Simply reach out via the contact form, Telegram (@AKASHBJ5742), or WhatsApp. I'll schedule a free discovery call to understand your requirements and provide a tailored proposal.",
  },
];

const CHAINS = ["Ethereum", "BNB Chain", "Tron", "Solana", "Polygon"];

// ─────────────────────────────────────────────
// HELPER COMPONENTS
// ─────────────────────────────────────────────
function SectionLabel({ text }) {
  return (
    <p style={{
      color: O, fontWeight: 700, fontSize: 11,
      letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10,
    }}>{text}</p>
  );
}

function OrangeLine({ center = false }) {
  return (
    <div style={{
      width: 48, height: 3, background: O,
      margin: center ? "0 auto 16px" : "0 0 16px",
    }} />
  );
}

// ─────────────────────────────────────────────
// MAIN APPLICATION COMPONENT
// ─────────────────────────────────────────────
export default function App() {
  const [dark,       setDark]       = useState(true);
  const [openFaq,    setOpenFaq]    = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Barlow+Condensed:wght@500;700;800;900&display=swap";
    document.head.appendChild(link);
  }, []);

  // Theme tokens
  const T = {
    bg:      dark ? "#0D0D0D"              : "#F2F2F2",
    surface: dark ? "#181818"              : "#FFFFFF",
    card:    dark ? "#212121"              : "#FAFAFA",
    text:    dark ? "#F0F0F0"              : "#111111",
    sub:     dark ? "#888888"              : "#555555",
    border:  dark ? "#2C2C2C"              : "#E0E0E0",
    navBg:   dark ? "rgba(13,13,13,0.97)" : "rgba(255,255,255,0.97)",
  };

  // Shared inline styles
  const sectionTitle = {
    fontFamily: "'Barlow Condensed', 'Helvetica Neue', sans-serif",
    fontWeight: 900, fontSize: 48, lineHeight: 1.05, color: T.text,
  };

  const inputStyle = {
    background: T.bg, border: `1px solid ${T.border}`,
    padding: "14px 16px", fontSize: 13, color: T.text,
    outline: "none", fontFamily: "inherit", width: "100%",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{
      background: T.bg, color: T.text, minHeight: "100vh",
      fontFamily: "'Barlow', 'Helvetica Neue', sans-serif",
      transition: "background 0.35s, color 0.35s",
    }}>

      {/* ── GLOBAL STYLES ─────────────────────────── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0D0D0D; }
        ::-webkit-scrollbar-thumb { background: ${O}; border-radius: 4px; }

        /* KTM angled button */
        .btn-primary {
          background: ${O}; color: #fff; border: none;
          padding: 14px 34px; font-weight: 800; font-size: 13px;
          letter-spacing: 2px; text-transform: uppercase; cursor: pointer;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          transition: background 0.2s, transform 0.15s;
          font-family: 'Barlow Condensed', sans-serif;
        }
        .btn-primary:hover { background: ${OD}; transform: translateY(-2px); }

        .btn-outline {
          background: transparent;
          color: ${O}; border: 2px solid ${O};
          padding: 12px 32px; font-weight: 800; font-size: 13px;
          letter-spacing: 2px; text-transform: uppercase; cursor: pointer;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          transition: all 0.2s;
          font-family: 'Barlow Condensed', sans-serif;
        }
        .btn-outline:hover { background: ${O}; color: #fff; }

        /* Hover-lift cards */
        .lift { transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; }
        .lift:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(255,107,0,0.12); }

        /* Skill badge */
        .skill-pill {
          display: inline-block;
          padding: 6px 14px;
          border: 1px solid; font-size: 12px; font-weight: 600;
          letter-spacing: 0.5px; cursor: default;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .skill-pill:hover { background: ${O} !important; color: #fff !important; border-color: ${O} !important; }

        /* Chain badge */
        .chain-pill {
          padding: 7px 18px;
          border: 1px solid ${O}; color: ${O};
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; transition: all 0.2s; cursor: default;
          font-family: 'Barlow Condensed', sans-serif;
        }
        .chain-pill:hover { background: ${O}; color: #fff; }

        /* Pulse dot */
        @keyframes pulseOrange {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,107,0,.4); }
          50%      { box-shadow: 0 0 0 8px rgba(255,107,0,0); }
        }
        .pulse-dot { animation: pulseOrange 2s infinite; }

        /* Fade-in-up */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeUp .7s ease both; }
        .anim-2 { animation: fadeUp .7s .18s ease both; }
        .anim-3 { animation: fadeUp .7s .36s ease both; }
        .anim-4 { animation: fadeUp .7s .54s ease both; }

        /* Hex grid BG pattern */
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,107,0,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,0,.025) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* Nav link */
        .nav-a { text-decoration: none; transition: color .2s; }
        .nav-a:hover { color: ${O} !important; }

        /* Social icon box */
        .soc-btn {
          width: 38px; height: 38px; display: flex; align-items: center; justify-content: center;
          border: 1px solid; font-size: 13px; font-weight: 800; text-decoration: none;
          transition: all .2s;
        }
        .soc-btn:hover { background: ${O} !important; border-color: ${O} !important; color: #fff !important; }

        /* Contact info row */
        .contact-row {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 20px; text-decoration: none;
          transition: transform .2s, border-color .2s;
        }
        .contact-row:hover { transform: translateX(5px); border-color: ${O} !important; }

        /* FAQ */
        .faq-row { transition: border-color .25s; }
        .faq-row:hover { border-color: ${O} !important; }

        /* Orange accent top bar on cards */
        .accent-top { position: relative; }
        .accent-top::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: ${O};
        }

        /* Responsive overrides */
        @media (max-width: 1024px) {
          .grid-3col { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only  { display: block  !important; }
          .grid-2col  { grid-template-columns: 1fr !important; }
          .grid-3col  { grid-template-columns: 1fr !important; }
          .grid-4col  { grid-template-columns: 1fr 1fr !important; }
          .hero-title { font-size: 58px !important; }
          .sec-title  { font-size: 36px !important; }
          .stats-bar  { grid-template-columns: 1fr 1fr !important; }
          .footer-row { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 24px !important; }
          .footer-links { justify-content: center !important; flex-wrap: wrap !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════════ */}
      <nav style={{
        background: T.navBg, borderBottom: `1px solid ${T.border}`,
        backdropFilter: "blur(14px)", position: "fixed",
        top: 0, left: 0, right: 0, zIndex: 1000,
      }}>
        <div style={{
          maxWidth: 1240, margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center", justifycontent: "space-between", height: 66,
          justifyContent: "space-between"
        }}>
          {/* Logo */}
          <a href="#home" className="nav-a" style={{ display: "flex", alignItems: "center", gap: 10, color: T.text }}>
            <div style={{
              background: O, width: 38, height: 38, display: "flex",
              alignItems: "center", justifyContent: "center",
              clipPath: "polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",
            }}>
              <span style={{ color: "#fff", fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 17, letterSpacing: 1 }}>AK</span>
            </div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 21, letterSpacing: 1 }}>AKASH BJ</span>
          </a>

          {/* Desktop links */}
          <div className="desktop-only" style={{ display: "flex", gap: 36 }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="nav-a"
                 style={{ color: T.sub, fontWeight: 700, fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Theme toggle */}
            <button onClick={() => setDark(!dark)} style={{
              background: T.card, border: `1px solid ${T.border}`,
              padding: "7px 13px", cursor: "pointer", color: T.text,
              fontSize: 15, borderRadius: 2, transition: "all .2s",
            }}>
              {dark ? "☀️" : "🌙"}
            </button>
            {/* Hire Me */}
            <a href="#contact" style={{ textDecoration: "none" }} className="desktop-only">
              <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 11 }}>Hire Me</button>
            </a>
            {/* Hamburger */}
            <button
              className="mobile-only"
              onClick={() => setMobileMenu(!mobileMenu)}
              style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: T.text, fontSize: 24 }}>
              {mobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenu && (
          <div style={{ background: T.surface, borderTop: `1px solid ${T.border}`, padding: "16px 24px 24px" }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileMenu(false)} style={{
                display: "block", color: T.text, textDecoration: "none",
                padding: "13px 0", fontWeight: 700, fontSize: 14,
                letterSpacing: "1.5px", textTransform: "uppercase",
                borderBottom: `1px solid ${T.border}`,
              }}>{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setMobileMenu(false)} style={{ display: "block", marginTop: 20 }}>
              <button className="btn-primary" style={{ width: "100%", clipPath: "none" }}>Hire Me</button>
            </a>
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section id="home" className="grid-bg" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        paddingTop: 66, position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 520, height: 520, background: "radial-gradient(circle, rgba(255,107,0,.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 350, height: 350, background: "radial-gradient(circle, rgba(255,107,0,.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: 6, height: "100%", background: O, opacity: 0.7 }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "80px 24px", width: "100%" }}>
          <div style={{ maxWidth: 820, display: "flex", flexDirection: "column", gap: 22 }}>
            {/* Available tag */}
            <div className="anim-1" style={{
              display: "inline-flex", alignItems: "center", gap: 9,
                            background: dark ? "rgba(255,107,0,.09)" : "rgba(255,107,0,.07)",
              border: "1px solid rgba(255,107,0,.35)", padding: "6px 16px", width: "fit-content",
            }}>
              <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: O, flexShrink: 0 }} />
              <span style={{ color: O, fontWeight: 800, fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase" }}>Available for Work</span>
            </div>

            {/* Name */}
            <h1 className="hero-title anim-2" style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
              fontSize: 88, lineHeight: .92, letterSpacing: -2, color: T.text,
            }}>
              AKASH<br />
              <span style={{ color: O, WebkitTextStroke: dark ? "none" : "1px rgba(204,85,0,.3)" }}>BJ</span>
            </h1>

            {/* Role pills */}
            <div className="anim-2" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Web3 Specialist","Blockchain Consultant","Crypto Content Creator","Web Developer & Designer"].map(r => (
                <span key={r} style={{
                  padding: "4px 14px", background: dark ? "#232323" : "#EFEFEF",
                  border: `1px solid ${T.border}`, fontSize: 11, fontWeight: 700,
                  color: T.sub, letterSpacing: 1, textTransform: "uppercase",
                }}>{r}</span>
              ))}
            </div>

            {/* Divider */}
            <div style={{ width: 64, height: 3, background: O }} />

            {/* Description */}
            <p className="anim-3" style={{ fontSize: 16, lineHeight: 1.85, color: T.sub, maxWidth: 560 }}>
              Helping startups, businesses, and individuals build their online presence, launch blockchain products, grow communities, and create engaging user experiences through professional development, design, and marketing solutions.
            </p>

            {/* CTAs */}
            <div className="anim-3" style={{ display: "flex", gap: 16, flexWrap: "wrap", paddingTop: 4 }}>
              <a href="#contact" style={{ textDecoration: "none" }}>
                <button className="btn-primary">Hire Me →</button>
              </a>
              <a href="#services" style={{ textDecoration: "none" }}>
                <button className="btn-outline">View Work</button>
              </a>
            </div>

            {/* Social quick-links */}
            <div className="anim-4" style={{ display: "flex", gap: 24, paddingTop: 6, flexWrap: "wrap" }}>
              {[
                { label: "𝕏  @AAYSDAO",    href: "https://twitter.com/AAYSDAO"   },
                { label: "⌥  GitHub 0xzro", href: "https://github.com/0xzro"     },
                { label: "✈  @AKASHBJ5742", href: "https://t.me/AKASHBJ5742"     },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="nav-a" style={{ color: T.sub, fontSize: 13, fontWeight: 700, letterSpacing: .5 }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${O}, transparent)` }} />
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════ */}
      <section id="about" style={{ background: T.surface, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            {/* Copy */}
            <div>
              <OrangeLine />
              <SectionLabel text="About Me" />
              <h2 className="sec-title" style={{ ...sectionTitle, marginBottom: 24 }}>
                Bridging Tech &<br />Blockchain Excellence
              </h2>
              <p style={{ color: T.sub, lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>
                I am a Web3 Specialist with <strong style={{ color: T.text, fontWeight: 700 }}>5+ years of hands-on experience</strong> in cryptocurrency, blockchain ecosystems, NFT projects, token creation, crypto market research, community growth, content creation, graphic design, and web development.
              </p>
              <p style={{ color: T.sub, lineHeight: 1.85, fontSize: 15, marginBottom: 32 }}>
                I have actively worked with expanding crypto projects, localised digital communities, airdrop campaigns, and DeFi platforms to deliver seamless digital products and growth initiatives from the ground up.
              </p>
              <a href="#contact" style={{ textDecoration: "none" }}>
                <button className="btn-primary">Work With Me</button>
              </a>
            </div>

            {/* Highlight cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "⚡", title: "5+ Years Industry Experience", desc: "Deep roots in cryptocurrency markets and blockchain ecosystems across global projects." },
                { icon: "🔗", title: "Technical + Brand Building", desc: "Bridges the gap between token mechanics and front-facing brand growth hacking." },
                { icon: "🌍", title: "Global Availability", desc: "Fluent in translating decentralised concepts into user-friendly digital products worldwide." },
              ].map((h, i) => (
                <div key={i} style={{
                  background: T.card, border: `1px solid ${T.border}`,
                  borderLeft: `4px solid ${O}`, padding: "20px 22px",
                  display: "flex", gap: 16, alignItems: "flex-start",
                  transition: "transform .2s",
                }} onMouseEnter={e => e.currentTarget.style.transform = "translateX(5px)"}
                   onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}>
                  <span style={{ fontSize: 26, flexShrink: 0 }}>{h.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: T.text, marginBottom: 5 }}>{h.title}</p>
                    <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.65 }}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════ */}
      <section id="services" style={{ background: T.bg, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="What I Do" />
            <h2 className="sec-title" style={sectionTitle}>Services & Solutions</h2>
          </div>

          {/* 3+2 grid */}
          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginBottom: 22 }}>
            {SERVICES.slice(0, 3).map((s, i) => (
              <ServiceCard key={i} s={s} T={T} dark={dark} />
            ))}
          </div>
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22, maxWidth: 820, margin: "0 auto" }}>
            {SERVICES.slice(3).map((s, i) => (
              <ServiceCard key={i} s={s} T={T} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════════ */}
      <section id="skills" style={{ background: T.surface, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="Expertise" />
            <h2 className="sec-title" style={sectionTitle}>Skills & Technologies</h2>
          </div>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {SKILL_GROUPS.map((g, i) => (
              <div key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 28, height: 3, background: O }} />
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                    fontSize: 13, letterSpacing: "2px", textTransform: "uppercase", color: T.text,
                  }}>{g.label}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {g.skills.map((sk, j) => (
                    <span key={j} className="skill-pill"
                      style={{ borderColor: T.border, color: T.sub, background: "transparent" }}>
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PORTFOLIO
      ══════════════════════════════════════════════ */}
      <section id="portfolio" style={{ background: T.bg, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="Portfolio" />
            <h2 className="sec-title" style={sectionTitle}>Featured Work</h2>
          </div>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} className="lift accent-top" style={{
                background: T.surface, border: `1px solid ${T.border}`, overflow: "hidden",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = O}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
              >
                {/* Placeholder visual */}
                <div style={{
                  background: dark ? "#171717" : "#EBEBEB", height: 170,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(255,107,0,.12), transparent 60%)` }} />
                  <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: 44, marginBottom: 6 }}>{p.emoji}</div>
                    <span style={{ fontSize: 10, color: T.sub, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700 }}>Project 0{i + 1}</span>
                  </div>
                </div>

                <div style={{ padding: 24 }}>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                    fontSize: 18, color: T.text, marginBottom: 10, lineHeight: 1.3,
                  }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {p.tech.map((tech, j) => (
                      <span key={j} style={{
                        padding: "3px 10px", fontSize: 10, fontWeight: 800, letterSpacing: "0.5px",
                        textTransform: "uppercase", color: O,
                        background: dark ? "rgba(255,107,0,.1)" : "rgba(255,107,0,.07)",
                      }}>{tech}</span>
                    ))}
                  </div>

                  <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 12, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: O, fontWeight: 900, fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 12, color: T.sub, fontWeight: 600 }}>{p.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════ */}
      <section style={{ background: O, padding: "64px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="stats-bar" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: "8px 0" }}>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
                  fontSize: 60, color: "#fff", lineHeight: 1,
                }}>{s.value}</div>
                <div style={{
                  fontSize: 12, color: "rgba(255,255,255,.8)", fontWeight: 700,
                  letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 8,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section style={{ background: T.surface, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="Testimonials" />
            <h2 className="sec-title" style={sectionTitle}>What Clients Say</h2>
          </div>

          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {TESTIMONIALS.map((tm, i) => (
              <div key={i} className="lift" style={{
                background: T.card, border: `1px solid ${T.border}`,
                borderTop: `3px solid ${O}`, padding: 36,
              }}>
                <div style={{ fontSize: 52, color: O, lineHeight: 1, marginBottom: 14, fontFamily: "Georgia, serif", opacity: .45 }}>"</div>
                <p style={{ fontSize: 15, color: T.sub, lineHeight: 1.85, marginBottom: 28, fontStyle: "italic" }}>{tm.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 42, height: 42, background: O,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    clipPath: "polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",
                    flexShrink: 0,
                  }}>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>★</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 13, color: T.text }}>{tm.author}</p>
                    <div style={{ display: "flex", gap: 2, marginTop: 3 }}>
                      {[...Array(5)].map((_, j) => <span key={j} style={{ color: O, fontSize: 11 }}>★</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST & VERIFICATION
      ══════════════════════════════════════════════ */}
      <section style={{ background: T.bg, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <OrangeLine center />
          <SectionLabel text="Trust & Verification" />
          <h2 className="sec-title" style={{ ...sectionTitle, marginBottom: 36 }}>Verified Chains Handled</h2>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginBottom: 56 }}>
            {CHAINS.map((c, i) => <span key={i} className="chain-pill">{c}</span>)}
          </div>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 880, margin: "0 auto" }}>
            {[
              { icon: "👥", label: "Community Footprint",    desc: "Managed distribution metrics reaching thousands of global active community members." },
              { icon: "🔍", label: "Transparency",           desc: "Open-source code verification protocols tracked dynamically via GitHub repositories." },
              { icon: "🛡️", label: "Security First",         desc: "Every transaction and deployment follows strict multi-chain safety protocols." },
            ].map((c, i) => (
              <div key={i} className="lift" style={{
                background: T.surface, border: `1px solid ${T.border}`,
                padding: 28, textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{c.icon}</div>
                <p style={{ fontWeight: 800, fontSize: 13, color: T.text, marginBottom: 8, fontFamily: "'Barlow Condensed'" }}>{c.label}</p>
                <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section id="faq" style={{ background: T.surface, padding: "100px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="FAQ" />
            <h2 className="sec-title" style={sectionTitle}>Frequently Asked</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-row" style={{
                background: T.card, border: `1px solid ${openFaq === i ? O : T.border}`,
                overflow: "hidden",
              }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: "100%", background: "none", border: "none",
                  padding: "20px 24px", display: "flex", justifyContent: "space-between",
                  alignItems: "center", cursor: "pointer", textAlign: "left",
                }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: T.text, paddingRight: 16, lineHeight: 1.5 }}>{faq.q}</span>
                  <span style={{
                    color: O, fontSize: 22, fontWeight: 700, flexShrink: 0,
                    transition: "transform .3s",
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                    display: "block",
                  }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 22px", borderTop: `1px solid ${T.border}` }}>
                    <p style={{ fontSize: 14, color: T.sub, lineHeight: 1.75, paddingTop: 16 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
      <section id="contact" style={{ background: T.bg, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="What I Do" />
            <h2 className="sec-title" style={sectionTitle}>Services & Solutions</h2>
          </div>

          {/* 3+2 grid */}
          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginBottom: 22 }}>
            {SERVICES.slice(0, 3).map((s, i) => (
              <ServiceCard key={i} s={s} T={T} dark={dark} />
            ))}
          </div>
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22, maxWidth: 820, margin: "0 auto" }}>
            {SERVICES.slice(3).map((s, i) => (
              <ServiceCard key={i} s={s} T={T} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════════ */}
      <section id="skills" style={{ background: T.surface, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="Expertise" />
            <h2 className="sec-title" style={sectionTitle}>Skills & Technologies</h2>
          </div>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {SKILL_GROUPS.map((g, i) => (
              <div key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 28, height: 3, background: O }} />
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                    fontSize: 13, letterSpacing: "2px", textTransform: "uppercase", color: T.text,
                  }}>{g.label}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {g.skills.map((sk, j) => (
                    <span key={j} className="skill-pill"
                      style={{ borderColor: T.border, color: T.sub, background: "transparent" }}>
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PORTFOLIO
      ══════════════════════════════════════════════ */}
      <section id="portfolio" style={{ background: T.bg, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="Portfolio" />
            <h2 className="sec-title" style={sectionTitle}>Featured Work</h2>
          </div>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} className="lift accent-top" style={{
                background: T.surface, border: `1px solid ${T.border}`, overflow: "hidden",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = O}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
              >
                {/* Placeholder visual */}
                <div style={{
                  background: dark ? "#171717" : "#EBEBEB", height: 170,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(255,107,0,.12), transparent 60%)` }} />
                  <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: 44, marginBottom: 6 }}>{p.emoji}</div>
                    <span style={{ fontSize: 10, color: T.sub, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700 }}>Project 0{i + 1}</span>
                  </div>
                </div>

                <div style={{ padding: 24 }}>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                    fontSize: 18, color: T.text, marginBottom: 10, lineHeight: 1.3,
                  }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {p.tech.map((tech, j) => (
                      <span key={j} style={{
                        padding: "3px 10px", fontSize: 10, fontWeight: 800, letterSpacing: "0.5px",
                        textTransform: "uppercase", color: O,
                        background: dark ? "rgba(255,107,0,.1)" : "rgba(255,107,0,.07)",
                      }}>{tech}</span>
                    ))}
                  </div>

                  <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 12, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: O, fontWeight: 900, fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 12, color: T.sub, fontWeight: 600 }}>{p.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════ */}
      <section style={{ background: O, padding: "64px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="stats-bar" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: "8px 0" }}>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
                  fontSize: 60, color: "#fff", lineHeight: 1,
                }}>{s.value}</div>
                <div style={{
                  fontSize: 12, color: "rgba(255,255,255,.8)", fontWeight: 700,
                  letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 8,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section style={{ background: T.surface, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="Testimonials" />
            <h2 className="sec-title" style={sectionTitle}>What Clients Say</h2>
          </div>

          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {TESTIMONIALS.map((tm, i) => (
              <div key={i} className="lift" style={{
                background: T.card, border: `1px solid ${T.border}`,
                borderTop: `3px solid ${O}`, padding: 36,
              }}>
                <div style={{ fontSize: 52, color: O, lineHeight: 1, marginBottom: 14, fontFamily: "Georgia, serif", opacity: .45 }}>"</div>
                <p style={{ fontSize: 15, color: T.sub, lineHeight: 1.85, marginBottom: 28, fontStyle: "italic" }}>{tm.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 42, height: 42, background: O,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    clipPath: "polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",
                    flexShrink: 0,
                  }}>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>★</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 13, color: T.text }}>{tm.author}</p>
                    <div style={{ display: "flex", gap: 2, marginTop: 3 }}>
                      {[...Array(5)].map((_, j) => <span key={j} style={{ color: O, fontSize: 11 }}>★</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST & VERIFICATION
      ══════════════════════════════════════════════ */}
      <section style={{ background: T.bg, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <OrangeLine center />
          <SectionLabel text="Trust & Verification" />
          <h2 className="sec-title" style={{ ...sectionTitle, marginBottom: 36 }}>Verified Chains Handled</h2>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginBottom: 56 }}>
            {CHAINS.map((c, i) => <span key={i} className="chain-pill">{c}</span>)}
          </div>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 880, margin: "0 auto" }}>
            {[
              { icon: "👥", label: "Community Footprint",    desc: "Managed distribution metrics reaching thousands of global active community members." },
              { icon: "🔍", label: "Transparency",           desc: "Open-source code verification protocols tracked dynamically via GitHub repositories." },
              { icon: "🛡️", label: "Security First",         desc: "Every transaction and deployment follows strict multi-chain safety protocols." },
            ].map((c, i) => (
              <div key={i} className="lift" style={{
                background: T.surface, border: `1px solid ${T.border}`,
                padding: 28, textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{c.icon}</div>
                <p style={{ fontWeight: 800, fontSize: 13, color: T.text, marginBottom: 8, fontFamily: "'Barlow Condensed'" }}>{c.label}</p>
                <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section id="faq" style={{ background: T.surface, padding: "100px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="FAQ" />
            <h2 className="sec-title" style={sectionTitle}>Frequently Asked</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-row" style={{
                background: T.card, border: `1px solid ${openFaq === i ? O : T.border}`,
                overflow: "hidden",
              }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: "100%", background: "none", border: "none",
                  padding: "20px 24px", display: "flex", justifyContent: "space-between",
                  alignItems: "center", cursor: "pointer", textAlign: "left",
                }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: T.text, paddingRight: 16, lineHeight: 1.5 }}>{faq.q}</span>
                  <span style={{
                    color: O, fontSize: 22, fontWeight: 700, flexShrink: 0,
                    transition: "transform .3s",
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                    display: "block",
                  }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 22px", borderTop: `1px solid ${T.border}` }}>
                    <p style={{ fontSize: 14, color: T.sub, lineHeight: 1.75, paddingTop: 16 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
      <section id="contact" style={{ background: T.bg, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <OrangeLine center />
            <SectionLabel text="Get In Touch" />
            <h2 className="sec-title" style={sectionTitle}>Let's Build Together</h2>
          </div>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48 }}>
            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "✉️", label: "Email",     value: "akashbj.crypto@gmail.com", href: "mailto:akashbj.crypto@gmail.com" },
                { icon: "💬", label: "Telegram",  value: "@AKASHBJ5742",             href: "https://t.me/AKASHBJ5742"       },
                { icon: "📱", label: "WhatsApp",  value: "+91 8075801080",            href: "https://wa.me/918075801080"     },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="contact-row" style={{
                    border: `1px solid ${T.border}`, background: T.surface, color: "inherit",
                  }}>
                  <div style={{
                    width: 48, height: 48, flexShrink: 0,
                    background: dark ? "rgba(255,107,0,.1)" : "rgba(255,107,0,.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22,
                  }}>{c.icon}</div>
                  <div>
                    <p style={{ fontSize: 10, color: T.sub, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 3 }}>{c.label}</p>
                    <p style={{ fontSize: 14, color: T.text, fontWeight: 700 }}>{c.value}</p>
                  </div>
                </a>
              ))}

              {/* Social icons */}
              <div style={{ display: "flex", gap: 10, paddingTop: 8, flexWrap: "wrap" }}>
                {[
                  { label: "𝕏",  href: "https://twitter.com/AAYSDAO", title: "Twitter" },
                  { label: "GH", href: "https://github.com/0xzro",    title: "GitHub"  },
                  { label: "TG", href: "https://t.me/AKASHBJ5742",    title: "Telegram"},
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="soc-btn"
                    title={s.title}
                    style={{ borderColor: T.border, color: T.sub, background: T.surface }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, padding: 36 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div className="form-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <input placeholder="Full Name"     type="text"  style={inputStyle}
                    onFocus={e => e.target.style.borderColor = O} onBlur={e => e.target.style.borderColor = T.border} />
                  <input placeholder="Email Address" type="email" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = O} onBlur={e => e.target.style.borderColor = T.border} />
                </div>

                <select style={{ ...inputStyle, cursor: "pointer", color: T.sub }}
                  onFocus={e => e.target.style.borderColor = O} onBlur={e => e.target.style.borderColor = T.border}>
                  <option value="">Project Category</option>
                  {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                </select>

                <textarea placeholder="Your Message..." rows={5} style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = O} onBlur={e => e.target.style.borderColor = T.border} />

                <button className="btn-primary" style={{ clipPath: "none", padding: "16px", fontSize: 14, width: "100%" }}>
                  Send Message →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer style={{ background: T.surface, borderTop: `1px solid ${T.border}`, padding: "48px 24px 28px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="footer-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, gap: 24 }}>
            {/* Logo */}
            <a href="#home" className="nav-a" style={{ display: "flex", alignItems: "center", gap: 10, color: T.text }}>
              <div style={{
                background: O, width: 38, height: 38, display: "flex",
                alignItems: "center", justifyContent: "center",
                clipPath: "polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",
              }}>
                <span style={{ color: "#fff", fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 17 }}>AK</span>
              </div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 21 }}>AKASH BJ</span>
            </a>

            {/* Nav links */}
            <div className="footer-links" style={{ display: "flex", gap: 28 }}>
              {NAV_LINKS.map(l => (
                <a key={l.label} href={l.href} className="nav-a"
                  style={{ color: T.sub, fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                  {l.label}
                </a>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "𝕏",  href: "https://twitter.com/AAYSDAO", title: "Twitter" },
                { label: "GH", href: "https://github.com/0xzro",    title: "GitHub"  },
                { label: "TG", href: "https://t.me/AKASHBJ5742",    title: "Telegram"},
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="soc-btn" title={s.title}
                  style={{ borderColor: T.border, color: T.sub, background: T.card }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/** Bottom bar */}
          <div style={{
            borderTop: `1px solid ${T.border}`, paddingTop: 22,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 12,
          }}>
            <p style={{ fontSize: 12, color: T.sub }}>© 2026 AKASH BJ. All rights reserved.</p>
            <p style={{ fontSize: 12, color: T.sub }}>Built with React + Vite  ·  Hosted on Vercel</p>
          </div>
        </div>
      </footer>
    </div>
  );
} // Closes App component cleanly


// ─────────────────────────────────────────────
// SERVICE CARD — extracted for readability
// ─────────────────────────────────────────────
function ServiceCard({ s, T, dark }) {
  return (
    <div className="lift accent-top" style={{
      background: T.surface, border: `1px solid ${T.border}`,
      padding: 28, position: "relative", overflow: "hidden", cursor: "default",
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = O}
      onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
    >
      <div style={{ fontSize: 34, marginBottom: 12 }}>{s.icon}</div>
      <h3 style={{
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
        fontSize: 20, color: T.text, marginBottom: 10,
      }}>{s.title}</h3>
      <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.65, marginBottom: 16 }}>{s.desc}</p>

      {s.featured && (
        <div style={{
          background: dark ? "rgba(255,107,0,.1)" : "rgba(255,107,0,.07)",
          border: "1px solid rgba(255,107,0,.4)",
          padding: "6px 12px", marginBottom: 14,
          fontSize: 11, fontWeight: 800, color: "#FF6B00", letterSpacing: .5,
        }}>{s.featured}</div>
      )}

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
        {s.items.slice(0, 6).map((item, j) => (
          <li key={j} style={{ fontSize: 12, color: T.sub, display: "flex", alignItems: "flex-start", gap: 8 }}>
            <span style={{ color: "#FF6B00", fontWeight: 900, flexShrink: 0, marginTop: 1 }}>›</span>
            {item}
          </li>
        ))}
        {s.items.length > 6 && (
          <li style={{ fontSize: 11, color: "#FF6B00", fontWeight: 800, letterSpacing: .5 }}>
            +{s.items.length - 6} more services
          </li>
        )}
      </ul>
    </div>
  );
} // Closes ServiceCard component cleanly
