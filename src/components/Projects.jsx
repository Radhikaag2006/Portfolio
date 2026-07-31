const PROJECTS = [
  {
    method: 'POST',
    route: '/projects/legal-rag-assistant',
    title: 'Legal RAG Assistant for Indian Case Laws',
    desc: 'Retrieval-augmented assistant answering questions on Indian constitutional judgments, grounding every answer in retrieved case documents to cut down hallucination.',
    bullets: [
      'Scraped ~100 Supreme Court judgments from Indian Kanoon with title/court/date/ID metadata',
      'Extracted & chunked text with PyMuPDF, attaching metadata per chunk',
      'Embedded with BAAI/bge-small-en-v1.5, stored in ChromaDB for retrieval',
    ],
    stack: ['Python', 'ChromaDB', 'PyMuPDF', 'BAAI/bge-small-en-v1.5'],
    link: 'https://github.com/Radhikaag2006',
  },
  {
    method: 'PUT',
    route: '/projects/meeting-room-booking',
    title: 'Enterprise Meeting Room Booking System',
    desc: 'REST API platform for scheduling and room booking with role-based access across admin, manager, and employee tiers.',
    bullets: [
      'Built auth, scheduling, and booking APIs with FastAPI + SQLAlchemy ORM on MySQL',
      'JWT-based authentication with role-based authorization',
      'Containerized with Docker, deployed via CI/CD; tested & documented in Postman',
    ],
    stack: ['FastAPI', 'MySQL', 'SQLAlchemy', 'JWT', 'Docker'],
    link: 'https://github.com/Radhikaag2006/Meeting-Room-Booking-System-',
  },
  {
    method: 'GET',
    route: '/projects/amazon-product-intelligence',
    title: 'Amazon Product Intelligence Platform',
    desc: 'Product intelligence platform extracting and analyzing listings across multiple Amazon categories.',
    bullets: [
      'Reusable scraping modules (Selenium, BeautifulSoup) pulling prices, ratings, specs, ASINs, images',
      'Automated category-wise CSV generation with Pandas',
    ],
    stack: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas'],
    link: 'https://github.com/Radhikaag2006/Web-Scraper',
  },
]

const METHOD_COLOR = {
  GET: '#5EEAD4',
  POST: '#FFB86B',
  PUT: '#9AB6FF',
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">02</span>
          <h2>// projects</h2>
          <div className="rule" />
        </div>

        <div className="proj-list">
          {PROJECTS.map((p) => (
            <a
              className="proj-card"
              href={p.link}
              target="_blank"
              rel="noreferrer"
              key={p.route}
            >
              <div className="proj-route">
                <span
                  className="method"
                  style={{ color: METHOD_COLOR[p.method] }}
                >
                  {p.method}
                </span>
                <span className="path">{p.route}</span>
                <span className="arrow">↗</span>
              </div>
              <h3>{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <ul>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="stack">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .proj-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .proj-card {
          display: block;
          text-decoration: none;
          color: var(--paper);
          background: var(--panel);
          border: 1px solid var(--grid-line);
          border-radius: 8px;
          padding: 22px 24px;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .proj-card:hover {
          border-color: var(--cyan);
          transform: translateY(-2px);
        }
        .proj-route {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 13px;
          margin-bottom: 10px;
        }
        .method { font-weight: 700; }
        .path { color: var(--slate); }
        .arrow { margin-left: auto; color: var(--slate); }
        .proj-card h3 {
          margin: 0 0 8px;
          font-size: 19px;
          font-weight: 700;
        }
        .proj-desc {
          margin: 0 0 12px;
          color: var(--slate);
          font-size: 14.5px;
          line-height: 1.55;
        }
        .proj-card ul {
          margin: 0 0 16px;
          padding-left: 18px;
          color: var(--slate);
          font-size: 13.5px;
          line-height: 1.6;
        }
        .stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .chip {
          font-family: var(--font-mono);
          font-size: 11.5px;
          padding: 3px 9px;
          border: 1px solid var(--grid-line);
          border-radius: 999px;
          color: var(--cyan);
        }
      `}</style>
    </section>
  )
}
