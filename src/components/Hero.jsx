import { useEffect, useState } from 'react'

const LINES = [
  { cmd: 'whoami', out: 'Radhika Agrawal' },
  { cmd: 'cat role.txt', out: 'B.Tech CS, IGDTUW  ·  Backend Engineer  ·  CGPA 9.57' },
  { cmd: 'stats --leetcode', out: '1600+ rating, 300+ problems solved' },
]

export default function Hero() {
  const [visible, setVisible] = useState(0)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (visible >= LINES.length) return
    const full = LINES[visible].cmd
    let i = 0
    const iv = setInterval(() => {
      i++
      setTyped(full.slice(0, i))
      if (i >= full.length) {
        clearInterval(iv)
        setTimeout(() => {
          setVisible((v) => v + 1)
          setTyped('')
        }, 380)
      }
    }, 38)
    return () => clearInterval(iv)
  }, [visible])

  return (
    <section className="hero">
      <div className="wrap">
        <div className="tick tl" />
        <div className="tick tr" />
        <div className="tick bl" />
        <div className="tick br" />

        <div className="term">
          <div className="term-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="term-path">radhika@portfolio:~$</span>
          </div>
          <div className="term-body">
            {LINES.slice(0, visible).map((l, idx) => (
              <div className="term-line" key={idx}>
                <div><span className="prompt">$</span> {l.cmd}</div>
                <div className="term-out">{l.out}</div>
              </div>
            ))}
            {visible < LINES.length && (
              <div className="term-line">
                <div>
                  <span className="prompt">$</span> {typed}
                  <span className="cursor" />
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="hero-sub">
          Building backend systems, retrieval-augmented AI, and the occasional
          scraper that behaves. Currently shipping production APIs at
          TechOrb Technologies.
        </p>

        <div className="hero-links">
          <a href="mailto:radhikaagrawal1905@gmail.com" className="btn btn-primary">Email me</a>
          <a href="https://github.com/Radhikaag2006" target="_blank" rel="noreferrer" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/radhika-agrawal-3911762b2/" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 96px 0 72px;
        }
        .tick {
          position: absolute;
          width: 18px;
          height: 18px;
          border: 1px solid var(--slate);
          opacity: 0.5;
        }
        .tick.tl { top: 24px; left: 24px; border-right: none; border-bottom: none; }
        .tick.tr { top: 24px; right: 24px; border-left: none; border-bottom: none; }
        .tick.bl { bottom: 24px; left: 24px; border-right: none; border-top: none; }
        .tick.br { bottom: 24px; right: 24px; border-left: none; border-top: none; }

        .term {
          background: var(--panel);
          border: 1px solid var(--grid-line);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 60px -20px rgba(0,0,0,0.6);
        }
        .term-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-bottom: 1px solid var(--grid-line);
          background: #0d2438;
        }
        .dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--grid-line);
        }
        .term-path {
          margin-left: 10px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--slate);
        }
        .term-body {
          padding: 22px 20px 26px;
          font-family: var(--font-mono);
          font-size: 15px;
          min-height: 140px;
        }
        .term-line { margin-bottom: 14px; }
        .prompt { color: var(--cyan); }
        .term-out {
          color: var(--paper);
          font-weight: 600;
          margin-top: 4px;
          padding-left: 18px;
        }
        .cursor {
          display: inline-block;
          width: 8px; height: 16px;
          background: var(--cyan);
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .hero-sub {
          max-width: 560px;
          margin: 28px 0 0;
          color: var(--slate);
          font-size: 16px;
          line-height: 1.6;
        }
        .hero-links {
          display: flex;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
          align-items: center;
        }
        .btn {
          font-family: var(--font-mono);
          font-size: 14px;
          text-decoration: none;
          padding: 12px 18px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          color: var(--paper);
          background: rgba(255,255,255,0.02);
          min-width: 92px;
          text-align: center;
          font-weight: 600;
          transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.15s ease, border-color 0.15s ease;
        }
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
          border-color: var(--cyan);
          background: rgba(20,52,84,0.35);
        }
        .btn-primary {
          background: var(--cyan);
          color: var(--navy);
          border-color: var(--cyan);
          font-weight: 700;
          box-shadow: 0 8px 20px -6px rgba(46, 223, 193, 0.25);
        }
        .btn-primary:hover {
          background: #7EF3E0;
          transform: translateY(-3px);
        }

        @media (max-width: 640px) {
          .hero { padding: 64px 0 48px; }
          .term-body { font-size: 13px; }
        }
      `}</style>
    </section>
  )
}
