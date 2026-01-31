import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ShieldCheck, Cpu, Globe } from 'lucide-react'

const WhoWeHelpPhD = () => {
    const challenges = [
        "Establishing a unique research gap",
        "Navigating complex ethics approval",
        "Advanced longitudinal or ethnographic designs",
        "Structuring the final multi-chapter thesis"
    ]

    const guidance = [
        "Critical literature mapping to identify novelty",
        "Ethics application and compliance mentoring",
        "Expert technical review of research designs",
        "Strategic publication and defense preparation"
    ]

    return (
        <div className="page-container">
            <section className="section hero-banner-lite" style={{ backgroundImage: 'url("/images/phd.png")' }}>
                <div className="hero-banner-lite-overlay" />
                <div className="container">
                    <div className="hero-split">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hero-split-text"
                        >
                            <h1 className="section-title text-gradient" style={{ textAlign: 'left' }}>PhD Researchers</h1>
                            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
                                Strategic partnership for your doctoral journey. We provide the mentorship and peer-review level feedback necessary for high-impact PhD research.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="hero-split-image"
                        >
                            <img src="/images/phd.png" alt="PhD Excellence" className="split-img" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="premium-card"
                        >
                            <h3 className="serif mb-4">Doctoral Challenges</h3>
                            <ul className="list-styled">
                                {challenges.map((item, i) => (
                                    <li key={i}><CheckCircle size={18} className="text-teal" /> {item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="premium-card"
                        >
                            <h3 className="serif mb-4">Our Guidance</h3>
                            <ul className="list-styled">
                                {guidance.map((item, i) => (
                                    <li key={i}><ShieldCheck size={18} className="text-secondary" /> {item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="ethical-box premium-card"
                    >
                        <h2 className="serif text-center mb-4">Ethical Boundary Statement</h2>
                        <p className="text-center max-w-700 mx-auto">
                            Our support is designed to complement, not replace, university supervision.
                            We adhere to the Committee on Publication Ethics (COPE) guidelines.
                            We provide developmental editing and methodological consultation.
                            Authorship of all research artifacts remains exclusively with the scholar.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container text-center">
                    <h2 className="serif mb-4">Strategic Outcomes</h2>
                    <div className="outcomes-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="outcome-item"
                        >
                            <Cpu size={48} className="mb-3 text-secondary" />
                            <h4>Methodological Mastery</h4>
                            <p>Rigorous application of advanced research designs and frameworks.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="outcome-item"
                        >
                            <Globe size={48} className="mb-3 text-secondary" />
                            <h4>Contribution to Knowledge</h4>
                            <p>Clarity in presenting original scholarly contributions to the global academic community.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
        .page-container { padding-top: 80px; }
        .text-center { text-align: center; }
        .hero-split {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 60px;
        }
        .hero-split-image {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 16/10;
        }
        .split-img { width: 100%; height: 100%; object-fit: cover; }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }
        .mb-4 { margin-bottom: 24px; }
        .list-styled {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .list-styled li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text);
          font-weight: 500;
        }
        .text-teal { color: var(--teal); }
        .text-secondary { color: var(--secondary); }
        .ethical-box {
          background: #fff;
          padding: 60px;
          border-left: 5px solid var(--secondary);
        }
        .max-w-700 { max-width: 700px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
          margin-top: 48px;
        }
        .outcome-item h4 { margin-bottom: 12px; font-size: 1.25rem; }
        .outcome-item p { color: var(--text-light); }

        @media (max-width: 992px) {
          .hero-split { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .hero-split-text h1, .hero-split-text p { text-align: center !important; margin: 0 auto 24px !important; }
        }
      `}</style>
        </div>
    )
}

export default WhoWeHelpPhD
