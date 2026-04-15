import { Link } from 'react-router-dom'

export default function FaultCodesPage() {
  const categories = [
    { prefix: 'P0xxx', name: 'Generic Powertrain', count: '~2,000', desc: 'Standardised codes covering engine, transmission, and drivetrain issues. Shared across all OBD-II vehicles.' },
    { prefix: 'P1xxx', name: 'Manufacturer Powertrain', count: '~1,500', desc: 'Manufacturer-specific powertrain codes. Different meanings depending on vehicle make.' },
    { prefix: 'P2xxx', name: 'Extended Powertrain', count: '~800', desc: 'Additional standardised powertrain codes added in later OBD-II revisions.' },
    { prefix: 'P3xxx', name: 'Reserved Powertrain', count: '~200', desc: 'Reserved and supplementary powertrain diagnostic codes.' },
    { prefix: 'C0xxx', name: 'Chassis', count: '~30', desc: 'ABS, stability control, steering, and suspension system codes.' },
    { prefix: 'B0xxx', name: 'Body', count: '~20', desc: 'Airbag, seat belt, HVAC, and body electronics codes.' },
    { prefix: 'U0xxx', name: 'Network', count: '~15', desc: 'Communication bus errors between control modules (CAN, LIN, etc.).' },
  ]

  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">Fault Codes</h1>
            <p className="page-hero__sub">
              Read and clear diagnostic trouble codes from your vehicle's computer. 
              4,565 codes in the database, each with plain-language explanations.
            </p>
            <a href="https://www.bykiofficial.com/login" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              Read your fault codes
            </a>
          </div>
          <div className="page-hero__visual">
            <img src="/brand/fault-codes.jpg" alt="BYKI Fault Code Reading" className="page-hero__img" />
          </div>
        </div>
      </section>

      {/* What are DTCs */}
      <section className="section">
        <div className="section__inner content-block">
          <h2 className="section__title">What are diagnostic trouble codes?</h2>
          <p>
            When your vehicle's on-board computer detects a problem, it stores a Diagnostic 
            Trouble Code (DTC) in memory and may turn on the Check Engine light (MIL). 
            Each code follows a standardised format defined by the SAE — a letter prefix 
            followed by four digits.
          </p>
          <p>
            BYKI reads these codes from your vehicle's ECU through the OBD-II port and 
            translates them into plain language. Instead of seeing "P0420" and wondering 
            what it means, you'll see "Catalyst System Efficiency Below Threshold (Bank 1)" 
            along with an explanation of severity and recommended action.
          </p>
        </div>
      </section>

      {/* Code categories */}
      <section className="section section--alt">
        <div className="section__inner">
          <h2 className="section__title">Code categories</h2>
          <p className="section__sub">
            The 4,565 codes in our database span every major OBD-II category.
          </p>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Range</th>
                  <th>Category</th>
                  <th>Codes</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c.prefix}>
                    <td className="data-table__mono">{c.prefix}</td>
                    <td><strong>{c.name}</strong></td>
                    <td>{c.count}</td>
                    <td>{c.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Code types */}
      <section className="section">
        <div className="section__inner content-block">
          <h2 className="section__title">Stored vs. Pending codes</h2>
          
          <h3>Stored (confirmed) codes</h3>
          <p>
            These are codes that have been confirmed by the ECU through multiple drive 
            cycles. A stored code typically triggers the Check Engine light and remains 
            in memory until cleared with a scan tool or after a certain number of 
            fault-free drive cycles.
          </p>

          <h3>Pending codes</h3>
          <p>
            Pending codes represent conditions the ECU has detected once but hasn't yet 
            confirmed. They don't trigger the Check Engine light. If the same fault occurs 
            again on the next drive cycle, the pending code becomes a stored code. If the 
            fault doesn't recur, the pending code clears itself.
          </p>

          <h3>Freeze-frame data</h3>
          <p>
            When a DTC is stored, the ECU captures a snapshot of sensor values at the 
            moment the fault occurred — engine RPM, speed, coolant temperature, fuel trims, 
            and more. This freeze-frame data is invaluable for diagnosing intermittent problems.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">Check your vehicle for fault codes</h2>
          <p className="cta-section__sub">
            Find out if your car has any stored or pending diagnostic issues.
          </p>
          <div className="cta-section__actions">
            <a href="https://www.bykiofficial.com/login" className="btn btn--white" target="_blank" rel="noopener noreferrer">
              Open BYKI
            </a>
            <Link to="/learn/06" className="btn btn--ghost">
              Full DTC guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
