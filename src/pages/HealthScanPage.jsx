import { Link } from 'react-router-dom'

export default function HealthScanPage() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">Health Scan</h1>
            <p className="page-hero__sub">
              A comprehensive assessment of your vehicle's health across 7 critical systems, 
              condensed into a single score out of 100.
            </p>
            <a href="https://www.bykiofficial.com/login" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              Scan your car now
            </a>
          </div>
          <div className="page-hero__visual">
            <img src="/brand/health-scan.jpg" alt="BYKI Health Scan" className="page-hero__img" />
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="section">
        <div className="section__inner content-block">
          <h2 className="section__title">What is a Health Scan?</h2>
          <p>
            The BYKI Health Scan is a multi-system diagnostic that evaluates your vehicle's 
            condition in real time. Unlike basic code readers that only check for stored fault 
            codes, the Health Scan analyses live sensor data, readiness monitors, freeze-frame 
            data, and pending codes to build a complete picture of your vehicle's health.
          </p>
          <p>
            The scan takes approximately 2–3 minutes. During this time, BYKI reads data from 
            your vehicle's Engine Control Unit (ECU) through the OBD-II port and evaluates 
            it against manufacturer-defined thresholds.
          </p>
        </div>
      </section>

      {/* The 7 Systems */}
      <section className="section section--alt">
        <div className="section__inner">
          <h2 className="section__title">The 7 systems we analyse</h2>
          <p className="section__sub">
            Each system receives its own health score. The overall Health Score is a weighted 
            aggregate of all seven.
          </p>

          <div className="system-grid">
            <div className="system-card">
              <h3>Engine & Mechanical</h3>
              <p>Core engine operation — RPM stability, load patterns, coolant temperature, and mechanical readiness indicators.</p>
            </div>
            <div className="system-card">
              <h3>Fuel System</h3>
              <p>Fuel delivery efficiency — fuel trims (STFT/LTFT), fuel system status, and injector balance across operating conditions.</p>
            </div>
            <div className="system-card">
              <h3>Ignition System</h3>
              <p>Misfire detection across all cylinders, ignition timing analysis, and combustion quality monitoring.</p>
            </div>
            <div className="system-card">
              <h3>Emissions Control</h3>
              <p>EGR system function, secondary air injection status, and overall emissions readiness state.</p>
            </div>
            <div className="system-card">
              <h3>Oxygen Sensors</h3>
              <p>O2 sensor voltage patterns, response times, heater circuit status for both upstream and downstream sensors.</p>
            </div>
            <div className="system-card">
              <h3>Catalytic Converter</h3>
              <p>Catalyst efficiency monitoring by comparing upstream and downstream oxygen sensor behaviour.</p>
            </div>
            <div className="system-card">
              <h3>EVAP System</h3>
              <p>Evaporative emission control — leak detection, purge valve operation, and fuel vapour recovery system integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring */}
      <section className="section">
        <div className="section__inner content-block">
          <h2 className="section__title">How scoring works</h2>
          <p>
            Each system is evaluated against a set of rules derived from OBD-II standards 
            and manufacturer thresholds. Rules check for active fault codes, pending codes, 
            readiness monitor status, and live data anomalies.
          </p>
          <div className="score-table">
            <div className="score-row">
              <span className="score-range score-range--green">80–100</span>
              <div>
                <strong>Healthy</strong>
                <p>All systems operating normally. No action needed.</p>
              </div>
            </div>
            <div className="score-row">
              <span className="score-range score-range--yellow">50–79</span>
              <div>
                <strong>Needs Attention</strong>
                <p>Some systems show deviation. Monitor closely or schedule service.</p>
              </div>
            </div>
            <div className="score-row">
              <span className="score-range score-range--red">0–49</span>
              <div>
                <strong>Requires Service</strong>
                <p>Significant issues detected. Professional inspection recommended.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">Scan your vehicle's health</h2>
          <p className="cta-section__sub">
            Connect your OBD-II adapter and open byki.my to get started.
          </p>
          <div className="cta-section__actions">
            <a href="https://www.bykiofficial.com/login" className="btn btn--white" target="_blank" rel="noopener noreferrer">
              Open BYKI
            </a>
            <Link to="/learn/07" className="btn btn--ghost">
              Read the full guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
