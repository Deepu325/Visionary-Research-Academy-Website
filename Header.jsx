import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Award } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Who We Help',
      path: '#',
      dropdown: [
        { name: 'Undergraduate', path: '/who-we-help/ug' },
        { name: 'Postgraduate', path: '/who-we-help/pg' },
        { name: 'PhD Researchers', path: '/who-we-help/phd' },
      ]
    },
    { name: 'Services', path: '/services' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Pricing', path: '/pricing' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <Award className="logo-icon" size={28} />
          <div className="logo-text">
            <span className="logo-main">Visionary Research</span>
            <span className="logo-sub">Academy</span>
          </div>
        </Link>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <div key={link.name} className="nav-item-container">
              {link.dropdown ? (
                <div className="nav-dropdown">
                  <span className="nav-link dropdown-trigger">
                    {link.name} <ChevronDown size={14} />
                  </span>
                  <div className="dropdown-menu">
                    {link.dropdown.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="dropdown-item">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="header-ctas">
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.dropdown ? (
                  <div className="mobile-dropdown-section">
                    <span className="mobile-link disabled">{link.name}</span>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="mobile-sublink"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary mobile-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .header.scrolled {
          height: 70px;
          background: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border-color: var(--border);
        }
        .header-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--primary);
        }
        .logo-icon {
          color: var(--secondary);
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .logo-main {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .logo-sub {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-light);
        }
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          text-decoration: none;
          color: var(--text);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--secondary);
        }
        .nav-dropdown {
          position: relative;
        }
        .dropdown-trigger {
          cursor: pointer;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          min-width: 180px;
          padding: 8px 0;
          box-shadow: var(--shadow-lg);
          border-radius: 4px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          border: 1px solid var(--border);
        }
        .nav-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-item {
          display: block;
          padding: 10px 20px;
          text-decoration: none;
          color: var(--text);
          font-size: 0.9rem;
          transition: background 0.2s ease;
        }
        .dropdown-item:hover {
          background: var(--off-white);
          color: var(--secondary);
        }
        .header-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .mobile-toggle {
          display: block;
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
        }
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fff;
          padding: 24px;
          border-top: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-link {
          text-decoration: none;
          color: var(--text);
          font-weight: 500;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
        }
        .mobile-link.disabled {
          color: var(--text-light);
          font-size: 0.8rem;
          text-transform: uppercase;
          border-bottom: none;
          padding-bottom: 4px;
          margin-top: 8px;
        }
        .mobile-sublink {
          text-decoration: none;
          color: var(--text);
          padding: 10px 0 10px 16px;
          font-size: 0.95rem;
          border-bottom: 1px solid var(--border-light);
        }
        .mobile-cta {
          margin-top: 16px;
          width: 100%;
        }
        @media (min-width: 992px) {
          .desktop-nav { display: flex; }
          .mobile-toggle { display: none; }
        }
      `}</style>
    </header>
  )
}

export default Header