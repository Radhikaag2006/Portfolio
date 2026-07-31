const GROUPS = [
  { label: 'Languages', items: ['C++', 'Python', 'SQL', 'JavaScript'] },
  { label: 'Backend', items: ['FastAPI', 'RESTful APIs', 'SQLAlchemy', 'JWT Auth', 'Docker'] },
  { label: 'Databases', items: ['MySQL', 'MongoDB'] },
  { label: 'Core CS', items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]

const ACHIEVEMENTS = [
  '1600+ LeetCode rating · 300+ DSA problems across LeetCode, Codeforces, CodeChef',
  'Top 50 in AlgoVerse (Microsoft, Gurugram) for CarboMetric, a carbon-footprint tracking app',
  'Top 10 mentee, Innovertex C++/DSA Mentorship Cohort',
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">04</span>
          <h2>// stack.json</h2>
          <div className="rule" />
        </div>

        <div className="skill-grid">
          {GROUPS.map((g) => (
            <div className="skill-group" key={g.label}>
              <div className="skill-label">{g.label}</div>
              <div className="skill-items">
                {g.items.map((it) => (
                  <span className="skill-chip" key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="achievements">
          <div className="skill-label" style={{ marginBottom: 14 }}>Achievements</div>
          <ul>
            {ACHIEVEMENTS.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px 32px;
          margin-bottom: 44px;
        }
        .skill-label {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--slate);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }
        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-chip {
          font-family: var(--font-mono);
          font-size: 13px;
          padding: 5px 11px;
          border: 1px solid var(--grid-line);
          border-radius: 6px;
          color: var(--paper);
        }
        .achievements {
          border-top: 1px solid var(--grid-line);
          padding-top: 28px;
        }
        .achievements ul {
          margin: 0;
          padding-left: 18px;
          color: var(--slate);
          font-size: 14.5px;
          line-height: 1.75;
        }
        @media (max-width: 640px) {
          .skill-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
