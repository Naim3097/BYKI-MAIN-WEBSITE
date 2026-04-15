import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/brand/byki-logo-petronas.png" alt="BYKI" className="footer__logo" />
          <p className="footer__tagline">
            Browser-based vehicle diagnostics.<br />
            No app download required.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Product</h4>
          <Link to="/health-scan">Health Scan</Link>
          <Link to="/live-data">Live Data</Link>
          <Link to="/fault-codes">Fault Codes</Link>
          <Link to="/oil">Oil Guide</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Resources</h4>
          <Link to="/learn">Knowledge Base</Link>
          <Link to="/learn/03">Hardware & Adapters</Link>
          <Link to="/learn/15">Troubleshooting</Link>
          <Link to="/learn/16">Glossary</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <Link to="/about">About BYKI</Link>
          <a href="https://www.bykiofficial.com/login" target="_blank" rel="noopener noreferrer">Open BYKI</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Bengkel Onex &middot; BYKI. All rights reserved.</p>
        <p>Shah Alam, Selangor, Malaysia</p>
      </div>
    </footer>
  )
}
