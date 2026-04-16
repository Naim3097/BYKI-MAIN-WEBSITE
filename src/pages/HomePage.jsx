import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="page">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Your car's health,<br />
            <span className="hero__accent">understood.</span>
          </h1>
          <p className="hero__sub">
            BYKI is a browser-based vehicle diagnostic platform. Connect an OBD-II adapter, 
            open your browser, and get a complete health report — no app download needed.
          </p>
          <div className="hero__actions">
            <a href="https://www.bykiofficial.com/login" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              Open BYKI
            </a>
            <Link to="/learn/01" className="btn btn--outline">
              How it works
            </Link>
          </div>
        </div>
        <div className="hero__visual">
          <img src="/brand/hero-car-v10.png" alt="BYKI vehicle diagnostics — health scan on your browser" className="hero__img" />
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="trust">
        <div className="trust__inner">
          <div className="trust__item">
            <span className="trust__number">38</span>
            <span className="trust__label">Live sensor parameters</span>
          </div>
          <div className="trust__item">
            <span className="trust__number">4,565</span>
            <span className="trust__label">Fault codes in database</span>
          </div>
          <div className="trust__item">
            <span className="trust__number">7</span>
            <span className="trust__label">Vehicle systems analysed</span>
          </div>
          <div className="trust__item">
            <span className="trust__number">85+</span>
            <span className="trust__label">Vehicle models supported</span>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section">
        <div className="section__inner">
          <h2 className="section__title">How it works</h2>
          <p className="section__sub">Three steps. No app store. No subscription.</p>

          <div className="steps">
            <div className="step">
              <span className="step__num">1</span>
              <h3 className="step__title">Connect</h3>
              <p className="step__text">
                Plug a Bluetooth OBD-II adapter into your car's diagnostic port, 
                usually located under the dashboard near the steering column.
              </p>
            </div>
            <div className="step">
              <span className="step__num">2</span>
              <h3 className="step__title">Scan</h3>
              <p className="step__text">
                Open byki.my in any browser on your phone. BYKI connects to the adapter 
                via Web Bluetooth and reads your vehicle's live data and fault codes.
              </p>
            </div>
            <div className="step">
              <span className="step__num">3</span>
              <h3 className="step__title">Understand</h3>
              <p className="step__text">
                Get a Health Score out of 100, see exactly what's working and what needs 
                attention across 7 vehicle systems, with plain-language explanations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section section--alt">
        <div className="section__inner">
          <h2 className="section__title">What BYKI gives you</h2>

          <div className="features">
            <div className="feature">
              <img src="/brand/health-scan.jpg" alt="BYKI Health Scan" className="feature__img" />
              <div className="feature__body">
                <h3 className="feature__title">Health Scan</h3>
                <p className="feature__text">
                  A comprehensive vehicle health assessment that analyses 7 systems — engine, 
                  fuel, ignition, emissions, oxygen sensors, catalytic converter, and EVAP. 
                  Each system gets an individual score, rolled up into an overall Health Score out of 100.
                </p>
                <Link to="/health-scan" className="feature__link">Learn about Health Scan</Link>
              </div>
            </div>

            <div className="feature feature--reverse">
              <img src="/brand/live-data.jpg" alt="BYKI Live Sensor Data" className="feature__img" />
              <div className="feature__body">
                <h3 className="feature__title">Live Sensor Data</h3>
                <p className="feature__text">
                  Monitor 38 real-time parameters from your vehicle's ECU — engine RPM, 
                  coolant temperature, fuel trims, oxygen sensor voltages, intake pressure, 
                  and more. See exactly what your car is doing, as it's doing it.
                </p>
                <Link to="/live-data" className="feature__link">Explore Live Data</Link>
              </div>
            </div>

            <div className="feature">
              <img src="/brand/fault-codes.jpg" alt="BYKI Fault Code Reading" className="feature__img" />
              <div className="feature__body">
                <h3 className="feature__title">Fault Code Reading</h3>
                <p className="feature__text">
                  Read and clear diagnostic trouble codes (DTCs) from your vehicle's computer. 
                  BYKI's database covers 4,565 standardised OBD-II codes with plain-language 
                  descriptions, severity ratings, and recommended actions.
                </p>
                <Link to="/fault-codes" className="feature__link">See Fault Codes</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Oil & Petronas ── */}
      <section className="section">
        <div className="section__inner">
          <div className="partnership">
            <div className="partnership__text">
              <h2 className="section__title">Oil recommendations, matched to your car</h2>
              <p>
                BYKI recommends the right engine oil for your specific vehicle. Our database 
                covers 85+ models from Perodua, Proton, Honda, Toyota, Mazda, Nissan, 
                Hyundai, Kia, BMW, and Mercedes-Benz — each matched to the correct SAE grade, 
                API rating, and exact capacity.
              </p>
              <p>
                We partner with Petronas Syntium to deliver factory-grade lubricants. 
                Every recommendation maps to a specific Syntium product — from the 800 series 
                for city cars to 7000 for high-performance engines.
              </p>
              <div className="partnership__actions">
                <Link to="/oil" className="btn btn--primary">View Oil Guide</Link>
              </div>
            </div>
            <div className="partnership__brand">
              <img src="/brand/byki-logo-petronas.png" alt="BYKI — Petronas partnership" className="partnership__logo" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Workshop ── */}
      <section className="section section--alt">
        <div className="section__inner">
          <div className="workshop">
            <img src="/brand/bengkel-onex-byki.png" alt="One X Transmission — BYKI Diagnostic Hub" className="workshop__img" />
            <div className="workshop__body">
              <h2 className="section__title">Built at a real workshop</h2>
              <p>
                BYKI was developed by One X Transmission, a diagnostic and transmission specialist
                workshop in Shah Alam, Selangor. Every feature is informed by real-world 
                workshop experience — not theoretical engineering.
              </p>
              <p>
                When your scan reveals something that needs professional attention, BYKI 
                connects you directly to expert technicians who understand your report.
              </p>
              <Link to="/about" className="feature__link">About One X Transmission</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Knowledge Base teaser ── */}
      <section className="section">
        <div className="section__inner section__inner--center">
          <h2 className="section__title">Learn how your car works</h2>
          <p className="section__sub">
            The BYKI Knowledge Base covers everything from OBD-II fundamentals to engine oil 
            specifications — 16 modules written in plain language.
          </p>
          <div className="kb-grid">
            <Link to="/learn" className="kb-card">
              <span className="kb-card__group">Getting Started</span>
              <span className="kb-card__title">What is BYKI, setup guide, and hardware adapters</span>
            </Link>
            <Link to="/learn" className="kb-card">
              <span className="kb-card__group">Your Vehicle</span>
              <span className="kb-card__title">OBD-II protocol, live data parameters, fault codes</span>
            </Link>
            <Link to="/learn" className="kb-card">
              <span className="kb-card__group">Health Scan</span>
              <span className="kb-card__title">How scoring works, your health report, the 7 systems</span>
            </Link>
            <Link to="/learn" className="kb-card">
              <span className="kb-card__group">Oil & Service</span>
              <span className="kb-card__title">Engine oil guide, Petronas Syntium, vehicle matching</span>
            </Link>
          </div>
          <Link to="/learn" className="btn btn--outline" style={{ marginTop: '2rem' }}>
            Browse all modules
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cta-section">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">Ready to scan your vehicle?</h2>
          <p className="cta-section__sub">
            No download. No subscription. Open your browser and start.
          </p>
          <a href="https://www.bykiofficial.com/login" className="btn btn--white" target="_blank" rel="noopener noreferrer">
            Open BYKI
          </a>
        </div>
      </section>
    </div>
  )
}
