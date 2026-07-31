const COMMITS = [
  {
    hash: 'a3f9c2e',
    date: 'Jul 2026 — Present',
    title: 'Software Engineering Intern, TechOrb Technologies',
    tag: 'backend',
    body: [
      'Built scalable backend services in Python/FastAPI, modular production-grade architecture',
      'Designed MySQL/SQLAlchemy schemas, implemented JWT auth for all API consumers',
      'Containerized services with Docker, automated testing via CI/CD',
      'Tested & documented REST APIs in Postman, Git-based version control',
    ],
  },
  {
    hash: '7b1d0f4',
    date: 'Jun 2025 — Jul 2025',
    title: 'Machine Learning Internship, IGDTUW',
    tag: 'ml',
    body: [
      'Built an LSTM-based stock price prediction model on historical financial data',
      'Integrated REST APIs, implemented preprocessing for real-time time-series forecasting',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">03</span>
          <h2>// experience --log</h2>
          <div className="rule" />
        </div>

        <div className="log">
          {COMMITS.map((c) => (
            <div className="commit" key={c.hash}>
              <div className="commit-line" aria-hidden="true" />
              <div className="commit-dot" />
              <div className="commit-body">
                <div className="commit-meta">
                  <span className="hash">{c.hash}</span>
                  <span className="tag">{c.tag}</span>
                  <span className="date">{c.date}</span>
                </div>
                <h3>{c.title}</h3>
                <ul>
                  {c.body.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .log {
          position: relative;
          padding-left: 8px;
        }
        .commit {
          position: relative;
          display: flex;
          gap: 20px;
          padding-bottom: 40px;
        }
        .commit:last-child { padding-bottom: 0; }
        .commit-line {
          position: absolute;
          left: 5px;
          top: 18px;
          bottom: -18px;
          width: 1px;
          background: var(--grid-line);
        }
        .commit:last-child .commit-line { display: none; }
        .commit-dot {
          position: relative;
          top: 6px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 0 4px var(--navy);
          flex-shrink: 0;
        }
        .commit-body { flex: 1; }
        .commit-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .hash { color: var(--amber); }
        .tag {
          color: var(--cyan);
          border: 1px solid var(--grid-line);
          border-radius: 999px;
          padding: 1px 9px;
        }
        .date { color: var(--slate); margin-left: auto; }
        .commit-body h3 {
          margin: 0 0 10px;
          font-size: 17px;
          font-weight: 700;
        }
        .commit-body ul {
          margin: 0;
          padding-left: 18px;
          color: var(--slate);
          font-size: 14px;
          line-height: 1.65;
        }
        @media (max-width: 480px) {
          .date { margin-left: 0; width: 100%; }
        }
      `}</style>
    </section>
  )
}
