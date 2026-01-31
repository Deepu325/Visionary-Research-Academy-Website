import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Mail, MessageSquare, Phone, Facebook, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <Award className="logo-icon" size={24} />
              <div className="logo-text">
                <span className="logo-main" style={{ color: '#fff' }}>Visionary Research</span>
                <span className="logo-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>Academy</span>
              </div>
            </Link>
            <p className="footer-desc">
              Authoritative research guidance for the global academic community.
              We empower UG, PG, and PhD scholars through ethical mentoring and
              rigorous academic support.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61581296442339#" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/visionary-research-academy-8a070b387?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B44OP9y5wQ6iqES8hfYXa6A%3D%3D" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/visionaryresearchacademy/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-title">Who We Help</h4>
            <ul className="footer-links">
              <li><Link to="/who-we-help/ug">Undergraduate Students</Link></li>
              <li><Link to="/who-we-help/pg">Postgraduate Scholars</Link></li>
              <li><Link to="/who-we-help/phd">PhD Researchers</Link></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/why-trust-us">Why Trust Us</Link></li>
              <li><Link to="/pricing">Pricing Philosophy</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={16} />
                <a href="mailto:visionaryresearchacademy@gmail.com">visionaryresearchacademy@gmail.com</a>
              </li>
              <li>
                <Phone size={16} />
                <span>+91 81234 22933</span>
              </li>
              <li>
                <MessageSquare size={16} />
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Visionary Research Academy. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--primary);
          color: #fff;
          padding: 80px 0 40px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 48px;
          margin-bottom: 60px;
        }
        .footer-brand {
          grid-column: span 1;
        }
        @media (min-width: 992px) {
          .footer-brand { grid-column: span 2; }
        }
        .footer-desc {
          margin-top: 24px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 320px;
        }
        .footer-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          margin-bottom: 24px;
          color: #fff;
        }
        .footer-links, .footer-contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a, .footer-contact a, .footer-contact span {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        .footer-links a:hover, .footer-contact a:hover {
          color: var(--accent);
        }
        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        .footer-copyright {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .footer-legal {
          display: flex;
          gap: 24px;
        }
        .footer-legal a {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
        }
        .footer-legal a:hover {
          color: #fff;
        }

        .footer-social {
          display: flex;
          gap: 16px;
          margin-top: 24px;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background: var(--secondary);
          color: #fff;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  )
}

export default Footer