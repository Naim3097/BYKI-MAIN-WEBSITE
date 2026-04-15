import { Link } from 'react-router-dom'

export default function LiveDataPage() {
  const parameters = [
    { name: 'Engine RPM', pid: '0x010C', unit: 'rpm', desc: 'Current engine crankshaft speed' },
    { name: 'Vehicle Speed', pid: '0x010D', unit: 'km/h', desc: 'Current vehicle road speed' },
    { name: 'Coolant Temperature', pid: '0x0105', unit: '°C', desc: 'Engine coolant temperature' },
    { name: 'Intake Air Temperature', pid: '0x010F', unit: '°C', desc: 'Air temperature entering the engine' },
    { name: 'Engine Load', pid: '0x0104', unit: '%', desc: 'Calculated engine load percentage' },
    { name: 'Throttle Position', pid: '0x0111', unit: '%', desc: 'Throttle pedal input position' },
    { name: 'Short-Term Fuel Trim (B1)', pid: '0x0106', unit: '%', desc: 'Real-time fuel correction for Bank 1' },
    { name: 'Long-Term Fuel Trim (B1)', pid: '0x0107', unit: '%', desc: 'Learned fuel correction for Bank 1' },
    { name: 'Intake Manifold Pressure', pid: '0x010B', unit: 'kPa', desc: 'Absolute pressure in the intake manifold' },
    { name: 'Timing Advance', pid: '0x010E', unit: '°', desc: 'Ignition timing advance before TDC' },
    { name: 'MAF Air Flow Rate', pid: '0x0110', unit: 'g/s', desc: 'Mass air flow sensor reading' },
    { name: 'O2 Sensor Voltage (B1S1)', pid: '0x0114', unit: 'V', desc: 'Upstream oxygen sensor voltage' },
    { name: 'Fuel Pressure', pid: '0x010A', unit: 'kPa', desc: 'Fuel system gauge pressure' },
    { name: 'Control Module Voltage', pid: '0x0142', unit: 'V', desc: 'Battery/system voltage at the ECU' },
    { name: 'Fuel System Status', pid: '0x0103', unit: '—', desc: 'Open loop or closed loop fuel control' },
    { name: 'Run Time Since Start', pid: '0x011F', unit: 'sec', desc: 'Time since engine was started' },
  ]

  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">Live Sensor Data</h1>
            <p className="page-hero__sub">
              Monitor 38 real-time parameters from your vehicle's ECU. See what your car 
              is doing, as it's doing it.
            </p>
            <a href="https://www.bykiofficial.com/login" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              View your live data
            </a>
          </div>
          <div className="page-hero__visual">
            <img src="/brand/live-data.jpg" alt="BYKI Live Sensor Data" className="page-hero__img" />
          </div>
        </div>
      </section>

      {/* What is live data */}
      <section className="section">
        <div className="section__inner content-block">
          <h2 className="section__title">What is live sensor data?</h2>
          <p>
            Your vehicle's Engine Control Unit (ECU) continuously monitors dozens of sensors 
            throughout the car. Live data lets you read these sensor values in real time 
            through the OBD-II port — the same data that mechanics see with professional 
            scan tools costing thousands of ringgit.
          </p>
          <p>
            BYKI reads live data using standardised OBD-II Parameter IDs (PIDs). Each PID 
            corresponds to a specific sensor or calculated value. The data updates continuously, 
            giving you a real-time window into your engine's operation.
          </p>
        </div>
      </section>

      {/* Parameter table */}
      <section className="section section--alt">
        <div className="section__inner">
          <h2 className="section__title">Key parameters</h2>
          <p className="section__sub">A selection of the 38 parameters BYKI monitors in real time.</p>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>PID</th>
                  <th>Unit</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((p) => (
                  <tr key={p.pid}>
                    <td><strong>{p.name}</strong></td>
                    <td className="data-table__mono">{p.pid}</td>
                    <td>{p.unit}</td>
                    <td>{p.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section">
        <div className="section__inner content-block">
          <h2 className="section__title">What you can learn from live data</h2>
          
          <h3>Fuel trim analysis</h3>
          <p>
            Short-term fuel trim (STFT) and long-term fuel trim (LTFT) reveal how much 
            the ECU is adjusting fuel delivery. Values beyond ±10% indicate potential 
            issues — vacuum leaks, failing sensors, or exhaust restrictions.
          </p>

          <h3>Cooling system health</h3>
          <p>
            Coolant temperature should reach 80–100°C during normal operation. If it stays 
            low, the thermostat may be stuck open. If it runs hot, there could be a cooling 
            system restriction or fan issue.
          </p>

          <h3>Oxygen sensor performance</h3>
          <p>
            Upstream O2 sensors should oscillate between 0.1V and 0.9V in closed-loop 
            operation. A sensor stuck at one voltage indicates failure. Downstream sensors 
            should show a relatively steady voltage if the catalytic converter is working.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">See your engine's vital signs</h2>
          <p className="cta-section__sub">
            Connect your OBD-II adapter and monitor live data in your browser.
          </p>
          <div className="cta-section__actions">
            <a href="https://www.bykiofficial.com/login" className="btn btn--white" target="_blank" rel="noopener noreferrer">
              Open BYKI
            </a>
            <Link to="/learn/05" className="btn btn--ghost">
              Full parameter guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
