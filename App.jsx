          {/* Bottom bar */}
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
} // Closes App component correctly

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
} // Closes ServiceCard correctly
