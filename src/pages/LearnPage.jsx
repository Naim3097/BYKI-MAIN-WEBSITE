import { Link } from 'react-router-dom'
import { chapters } from '../chapters'

const GROUP_LABELS = {
  'getting-started': 'Getting Started',
  'your-vehicle': 'Understanding Your Vehicle',
  'health-scan': 'The Health Scan',
  'oil-service': 'Oil & Service',
  'using-byki': 'Using BYKI',
}

const GROUP_ORDER = ['getting-started', 'your-vehicle', 'health-scan', 'oil-service', 'using-byki']

const GROUP_DESCRIPTIONS = {
  'getting-started': 'What BYKI is, how to set it up, and what hardware you need.',
  'your-vehicle': 'How OBD-II works, what live data means, and understanding fault codes.',
  'health-scan': 'The health scoring system, your report breakdown, and the 7 vehicle systems.',
  'oil-service': 'Engine oil fundamentals, Petronas Syntium products, and vehicle-specific matching.',
  'using-byki': 'Navigating the interface, booking workshops, troubleshooting, and reference terms.',
}

export default function LearnPage() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">Knowledge Base</h1>
            <p className="page-hero__sub">
              16 modules covering everything from OBD-II fundamentals to engine oil 
              specifications. Written in plain language, built from real workshop experience.
            </p>
          </div>
        </div>
      </section>

      {/* Module grid by group */}
      <section className="section">
        <div className="section__inner">
          {GROUP_ORDER.map((groupKey) => {
            const groupChapters = chapters.filter((c) => c.group === groupKey)
            return (
              <div key={groupKey} className="learn-group">
                <h2 className="learn-group__title">{GROUP_LABELS[groupKey]}</h2>
                <p className="learn-group__desc">{GROUP_DESCRIPTIONS[groupKey]}</p>
                <div className="learn-grid">
                  {groupChapters.map((ch, i) => {
                    const idx = chapters.indexOf(ch)
                    return (
                      <Link
                        key={ch.id}
                        to={`/learn/${ch.id}`}
                        className="learn-card"
                      >
                        <span className="learn-card__id">Module {ch.id}</span>
                        <span className="learn-card__title">{ch.title}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">Ready to try it?</h2>
          <p className="cta-section__sub">
            Put your knowledge into practice. Open BYKI and scan your vehicle.
          </p>
          <a href="https://www.bykiofficial.com/login" className="btn btn--white" target="_blank" rel="noopener noreferrer">
            Open BYKI
          </a>
        </div>
      </section>
    </div>
  )
}
