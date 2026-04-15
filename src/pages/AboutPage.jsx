import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">About BYKI</h1>
            <p className="page-hero__sub">
              Built at Bengkel Onex in Shah Alam — a diagnostic and transmission 
              specialist workshop where every feature is tested on real vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="section__inner content-block">
          <h2 className="section__title">The story</h2>
          <p>
            BYKI started from a simple observation: car owners shouldn't need expensive 
            equipment or specialist knowledge to understand what's happening with their vehicle. 
            The same diagnostic data that workshops charge hundreds of ringgit to read is 
            available through every car's OBD-II port — it just needed a better interface.
          </p>
          <p>
            We built BYKI as a browser-based platform — no app download, no installation, 
            no subscription. Open byki.my on any phone, connect a Bluetooth OBD-II adapter, 
            and you have professional-grade diagnostic capabilities in your hands.
          </p>
          <p>
            Every feature in BYKI comes from real workshop experience. The health scoring 
            methodology, the fault code explanations, the oil recommendations — all developed 
            and validated at Bengkel Onex on real customer vehicles before they reach the platform.
          </p>
        </div>
      </section>

      {/* Bengkel Onex */}
      <section className="section section--alt">
        <div className="section__inner">
          <div className="about-workshop">
            <img src="/brand/bengkel-onex-byki.png" alt="Bengkel Onex — BYKI Diagnostic & Tech Hub" className="about-workshop__img" />
            <div className="about-workshop__body">
              <h2 className="section__title">Bengkel Onex</h2>
              <p>
                Bengkel Onex is a diagnostic and transmission specialist workshop located 
                in Shah Alam, Selangor. Specialising in advanced diagnostics, automatic 
                transmission rebuilds, and preventive maintenance for Malaysian vehicles.
              </p>
              <p>
                The workshop serves as BYKI's development laboratory — new features are 
                prototyped, tested, and refined on real vehicles before deployment. This 
                workshop-first approach ensures that every diagnostic rule, every threshold, 
                and every recommendation is grounded in practical experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="section">
        <div className="section__inner content-block">
          <h2 className="section__title">What we believe</h2>

          <h3>Transparency builds trust</h3>
          <p>
            Car owners deserve to understand their vehicle's condition without relying 
            solely on a mechanic's verbal assessment. BYKI provides the data directly — 
            the same data professionals use — so you can make informed decisions about 
            your vehicle's maintenance.
          </p>

          <h3>Prevention is cheaper than repair</h3>
          <p>
            A regular health scan can catch developing issues before they become expensive 
            repairs. A fuel trim that's drifting beyond normal range today could be a 
            simple vacuum hose — left unchecked, it becomes a catalytic converter replacement.
          </p>

          <h3>Technology should be accessible</h3>
          <p>
            No app store. No subscription. No account creation. BYKI works in a browser 
            because we believe diagnostic tools should have the lowest possible barrier 
            to access.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">Try BYKI</h2>
          <p className="cta-section__sub">
            Open your browser, connect your adapter, and see your vehicle's health.
          </p>
          <div className="cta-section__actions">
            <a href="https://www.bykiofficial.com/login" className="btn btn--white" target="_blank" rel="noopener noreferrer">
              Open BYKI
            </a>
            <Link to="/learn" className="btn btn--ghost">
              Knowledge Base
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
