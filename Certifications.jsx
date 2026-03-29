import React from 'react'
import { motion } from 'framer-motion'

const certifications = [
  { logo: '/images/iso.jpeg', label: 'ISO Certified' },
  { logo: '/images/msme.jpeg', label: 'MSME Registered' },
  { logo: '/images/ifa.jpeg', label: 'IAF Accredited' },
]

const Certifications = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Certifications & Recognition</h2>
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="cert-logo-wrapper">
                <img src={cert.logo} alt={cert.label} className="cert-logo" />
              </div>
              <p className="cert-label">{cert.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-grid {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 64px;
          margin-top: 60px;
          flex-wrap: wrap;
        }
        .cert-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: default;
        }
        .cert-logo-wrapper {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #fff;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          padding: 16px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cert-logo-wrapper:hover {
          transform: scale(1.08);
          box-shadow: var(--shadow-md);
          border-color: var(--accent);
        }
        .cert-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .cert-label {
          margin-top: 16px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-light);
          text-align: center;
        }
        @media (max-width: 768px) {
          .cert-grid {
            gap: 40px;
          }
          .cert-logo-wrapper {
            width: 110px;
            height: 110px;
          }
        }
      `}</style>
    </section>
  )
}

export default Certifications
