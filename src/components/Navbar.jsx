import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = `nav${scrolled ? ' nav--scrolled' : ''}${isHome && !scrolled ? ' nav--transparent' : ''}`

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <>
      <nav className={navClass}>
        <div className="nav__inner">
          <Link to="/" className="nav__logo">
            <img
              src="/brand/byki-logo-petronas.png"
              alt="BYKI"
              className="nav__logo-img"
            />
          </Link>

          <div className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
            {/* Tools Dropdown */}
            <div className="nav__dropdown">
              <button
                className="nav__link nav__dropdown-trigger"
                onClick={() => toggleDropdown('tools')}
              >
                Tools
                <span className={`nav__dropdown-icon ${openDropdown === 'tools' ? 'open' : ''}`}>▾</span>
              </button>
              <div className={`nav__dropdown-menu ${openDropdown === 'tools' ? 'open' : ''}`}>
                <Link to="/health-scan" className="nav__dropdown-item">
                  <span className="nav__dropdown-label">Health Scan</span>
                  <span className="nav__dropdown-desc">Vehicle diagnostics</span>
                </Link>
                <Link to="/live-data" className="nav__dropdown-item">
                  <span className="nav__dropdown-label">Live Data</span>
                  <span className="nav__dropdown-desc">Real-time sensors</span>
                </Link>
                <Link to="/fault-codes" className="nav__dropdown-item">
                  <span className="nav__dropdown-label">Fault Codes</span>
                  <span className="nav__dropdown-desc">DTC reference</span>
                </Link>
                <Link to="/oil" className="nav__dropdown-item">
                  <span className="nav__dropdown-label">Oil Guide</span>
                  <span className="nav__dropdown-desc">Engine oil specs</span>
                </Link>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="nav__dropdown">
              <button
                className="nav__link nav__dropdown-trigger"
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <span className={`nav__dropdown-icon ${openDropdown === 'resources' ? 'open' : ''}`}>▾</span>
              </button>
              <div className={`nav__dropdown-menu ${openDropdown === 'resources' ? 'open' : ''}`}>
                <Link to="/learn" className="nav__dropdown-item">
                  <span className="nav__dropdown-label">BYKI Library</span>
                  <span className="nav__dropdown-desc">Educational guides</span>
                </Link>
                <Link to="/blog" className="nav__dropdown-item">
                  <span className="nav__dropdown-label">Blog</span>
                  <span className="nav__dropdown-desc">Latest articles</span>
                </Link>
                <Link to="/about" className="nav__dropdown-item">
                  <span className="nav__dropdown-label">About</span>
                  <span className="nav__dropdown-desc">Learn more</span>
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <a href="https://www.bykiofficial.com/login" className="nav__cta" target="_blank" rel="noopener noreferrer">
              Open BYKI
            </a>
          </div>

          <button
            className="nav__burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
          </button>
        </div>
      </nav>
      {menuOpen && <div className="nav__backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
