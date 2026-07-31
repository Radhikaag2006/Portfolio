export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">05</span>
          <h2>// contact</h2>
          <div className="rule" />
        </div>

        <div className="contact-panel">
          <p className="contact-copy">
            Open to backend engineering and SDE internships — reach out
            directly or find the code on GitHub.
          </p>
          <div className="contact-rows">
            <a className="contact-row" href="mailto:radhikaagrawal1905@gmail.com">
              <span className="k">email</span>
              <span className="v">radhikaagrawal1905@gmail.com</span>
            </a>
            <a className="contact-row" href="https://github.com/Radhikaag2006" target="_blank" rel="noreferrer">
              <span className="k">github</span>
              <span className="v">github.com/Radhikaag2006</span>
            </a>
            <a className="contact-row" href="https://www.linkedin.com/in/radhika-agrawal-3911762b2/" target="_blank" rel="noreferrer">
              <span className="k">linkedin</span>
              <span className="v">in/radhika-agrawal</span>
            </a>
          </div>
        </div>

        <footer>
          <span>© {new Date().getFullYear()} Radhika Agrawal</span>
        </footer>
      </div>

      <style>{`
        .contact-panel {
          background: var(--panel);
          border: 1px solid var(--grid-line);
          border-radius: 8px;
          padding: 28px 26px;
        }
        .contact-copy {
          margin: 0 0 20px;
          color: var(--slate);
          font-size: 15px;
          line-height: 1.6;
          max-width: 480px;
        }
        .contact-rows {
          display: flex;
          flex-direction: column;
        }
        .contact-row {
          display: flex;
          justify-content: space-between;
          text-decoration: none;
          color: var(--paper);
          padding: 12px 0;
          border-top: 1px solid var(--grid-line);
          font-family: var(--font-mono);
          font-size: 14px;
          transition: color 0.15s ease;
        }
        .contact-row:first-child { border-top: none; }
        .contact-row:hover { color: var(--cyan); }
        .contact-row .k {
          color: var(--slate);
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.06em;
          align-self: center;
        }
        footer {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid var(--grid-line);
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--slate);
          flex-wrap: wrap;
          gap: 8px;
        }
      `}</style>
    </section>
  )
}
