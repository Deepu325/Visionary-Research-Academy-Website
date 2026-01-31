import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Briefcase, FileCheck, XCircle } from 'lucide-react'

const WhyTrustUs = () => {
    const values = [
        {
            icon: <Shield size={32} />,
            title: "Ethical Research Commitment",
            text: "We adhere to international research ethics guidelines, ensuring all guidance promotes academic integrity."
        },
        {
            icon: <Lock size={32} />,
            title: "Confidentiality Assurance",
            text: "Your research ideas, data, and personal information are protected by strict non-disclosure agreements."
        },
        {
            icon: <Briefcase size={32} />,
            title: "Tool Expertise",
            text: "Proficiency in advanced research tools including SPSS, NVivo, R, LaTeX, and various citation managers."
        },
        {
            icon: <FileCheck size={32} />,
            title: "Academic Familiarity",
            text: "Our mentors are well-versed in the specific requirements of top-tier global universities and journals."
        }
    ]

    return (
        <div className="page-container" style={{ paddingTop: 0 }}>
            <section className="hero-banner" style={{ backgroundImage: 'url("/images/success_banner.png")' }}>
                <div className="hero-banner-overlay" />
                <div className="container hero-banner-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-banner-title serif">Built on Trust & Integrity</h1>
                        <p className="hero-banner-subtitle">
                            We prioritize academic rigour and ethical standards above all else. Your research is in safe, professional hands.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="trust-grid">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                className="trust-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="trust-icon">{item.icon}</div>
                                <h3 className="serif">{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container">
                    <div className="negative-section">
                        <h2 className="serif text-center mb-5" style={{ color: '#fff' }}>What We Do NOT Do</h2>
                        <div className="exclusions-grid">
                            {[
                                "We do not write theses or dissertations for students.",
                                "We do not engage in data fabrication or manipulation.",
                                "We do not guarantee specific grades or pass marks.",
                                "We do not provide 'ready-made' research papers."
                            ].map((text, i) => (
                                <div key={i} className="exclusion-item">
                                    <XCircle size={20} className="text-accent" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .page-container { padding-top: 80px; }
        .text-center { text-align: center; }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 32px;
        }
        .trust-card {
          padding: 32px;
          background: #fff;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: transform 0.3s ease;
        }
        .trust-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .trust-icon {
          color: var(--secondary);
          margin-bottom: 20px;
        }
        .trust-card h3 { margin-bottom: 16px; font-size: 1.25rem; }
        
        .section-dark {
          background-color: var(--primary);
          padding: 80px 0;
        }
        .negative-section {
          max-width: 800px;
          margin: 0 auto;
        }
        .exclusions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }
        .exclusion-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }
        .text-accent { color: var(--accent); }
        .mb-5 { margin-bottom: 40px; }
      `}</style>
        </div>
    )
}

export default WhyTrustUs
