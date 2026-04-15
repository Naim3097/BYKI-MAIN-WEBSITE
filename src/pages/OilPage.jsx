import { Link } from 'react-router-dom'

export default function OilPage() {
  const brands = [
    {
      make: 'Perodua',
      models: [
        { model: 'Myvi 1.3 (2018+)', grade: '0W-20', capacity: '3.2L', product: 'Syntium 800 0W-20' },
        { model: 'Myvi 1.5 (2018+)', grade: '0W-20', capacity: '3.5L', product: 'Syntium 800 0W-20' },
        { model: 'Axia 1.0', grade: '0W-20', capacity: '2.8L', product: 'Syntium 800 0W-20' },
        { model: 'Bezza 1.0/1.3', grade: '0W-20', capacity: '3.0L', product: 'Syntium 800 0W-20' },
        { model: 'Ativa 1.0T', grade: '0W-20', capacity: '3.5L', product: 'Syntium 800 0W-20' },
        { model: 'Aruz 1.5', grade: '0W-20', capacity: '3.8L', product: 'Syntium 800 0W-20' },
        { model: 'Alza 1.5 (2022+)', grade: '0W-20', capacity: '3.5L', product: 'Syntium 800 0W-20' },
      ]
    },
    {
      make: 'Proton',
      models: [
        { model: 'Saga 1.3 (2016+)', grade: '5W-30', capacity: '3.3L', product: 'Syntium 3000 5W-30' },
        { model: 'Persona 1.6 (2016+)', grade: '5W-30', capacity: '3.6L', product: 'Syntium 3000 5W-30' },
        { model: 'Iriz 1.3/1.6', grade: '5W-30', capacity: '3.3L', product: 'Syntium 3000 5W-30' },
        { model: 'X50 1.5T', grade: '0W-30', capacity: '4.2L', product: 'Syntium 5000 0W-30' },
        { model: 'X70 1.8T', grade: '0W-30', capacity: '4.5L', product: 'Syntium 5000 0W-30' },
        { model: 'X90 1.5T', grade: '0W-30', capacity: '4.2L', product: 'Syntium 5000 0W-30' },
      ]
    },
    {
      make: 'Honda',
      models: [
        { model: 'City 1.5 (GN2)', grade: '0W-20', capacity: '3.4L', product: 'Syntium 800 0W-20' },
        { model: 'Civic 1.5T (FC/FE)', grade: '0W-20', capacity: '3.7L', product: 'Syntium 800 0W-20' },
        { model: 'HR-V 1.5 (2022+)', grade: '0W-20', capacity: '3.4L', product: 'Syntium 800 0W-20' },
        { model: 'CR-V 1.5T', grade: '0W-20', capacity: '3.7L', product: 'Syntium 800 0W-20' },
        { model: 'Accord 1.5T', grade: '0W-20', capacity: '3.5L', product: 'Syntium 800 0W-20' },
      ]
    },
    {
      make: 'Toyota',
      models: [
        { model: 'Vios 1.5 (2019+)', grade: '0W-20', capacity: '3.4L', product: 'Syntium 800 0W-20' },
        { model: 'Yaris 1.5', grade: '0W-20', capacity: '3.4L', product: 'Syntium 800 0W-20' },
        { model: 'Corolla Cross 1.8', grade: '0W-20', capacity: '4.2L', product: 'Syntium 800 0W-20' },
        { model: 'Camry 2.5', grade: '0W-20', capacity: '4.8L', product: 'Syntium 800 0W-20' },
        { model: 'Hilux 2.4D', grade: '5W-30', capacity: '7.0L', product: 'Syntium 3000 D 5W-30' },
      ]
    },
  ]

  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">Oil Recommendations</h1>
            <p className="page-hero__sub">
              The right engine oil for your specific vehicle — matched by SAE grade, 
              API rating, and exact capacity. Powered by Petronas Syntium.
            </p>
            <Link to="/learn/10" className="btn btn--primary">
              Read the full oil guide
            </Link>
          </div>
          <div className="page-hero__visual">
            <img src="/brand/diag-car.png" alt="Vehicle diagnostics" className="page-hero__img" />
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section">
        <div className="section__inner content-block">
          <h2 className="section__title">Why the right oil matters</h2>
          <p>
            Engine oil does more than lubricate — it cools, cleans, seals, and protects 
            internal components. Using the wrong viscosity grade can reduce fuel economy, 
            increase engine wear, and even void your warranty.
          </p>
          <p>
            Modern engines are engineered for specific oil properties. A 0W-20 engine 
            running on 5W-40 will suffer from increased friction at startup, reduced fuel 
            efficiency, and potential long-term damage to tight-clearance components 
            like variable valve timing systems.
          </p>
        </div>
      </section>

      {/* Vehicle tables */}
      <section className="section section--alt">
        <div className="section__inner">
          <h2 className="section__title">Oil recommendations by vehicle</h2>
          <p className="section__sub">
            A selection from our database of 85+ vehicle models. Each recommendation 
            maps to a specific Petronas Syntium product.
          </p>

          {brands.map((brand) => (
            <div key={brand.make} className="oil-brand">
              <h3 className="oil-brand__title">{brand.make}</h3>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>SAE Grade</th>
                      <th>Capacity</th>
                      <th>Recommended Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brand.models.map((m) => (
                      <tr key={m.model}>
                        <td><strong>{m.model}</strong></td>
                        <td>{m.grade}</td>
                        <td>{m.capacity}</td>
                        <td>{m.product}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Petronas partnership */}
      <section className="section">
        <div className="section__inner">
          <div className="partnership">
            <div className="partnership__text">
              <h2 className="section__title">Petronas Syntium</h2>
              <p>
                All BYKI oil recommendations map to the Petronas Syntium range — engineered 
                with CoolTech™ technology to reduce engine operating temperatures by up to 5°C 
                and provide superior protection under Malaysian driving conditions.
              </p>
              <p>
                The Syntium lineup covers every need: 800 series for modern fuel-efficient 
                engines, 3000 series for balanced performance, 5000 series for turbocharged 
                engines, and 7000 series for high-performance applications.
              </p>
            </div>
            <div className="partnership__brand">
              <img src="/brand/byki-logo-petronas.png" alt="BYKI — Petronas" className="partnership__logo" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">Find the right oil for your car</h2>
          <p className="cta-section__sub">
            Browse the complete vehicle matching database in the BYKI Knowledge Base.
          </p>
          <div className="cta-section__actions">
            <Link to="/learn/12" className="btn btn--white">
              Vehicle Oil Matching
            </Link>
            <Link to="/learn/11" className="btn btn--ghost">
              Petronas Syntium Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
