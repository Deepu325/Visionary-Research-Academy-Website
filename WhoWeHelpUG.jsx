import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, BookOpen, Target, Award } from 'lucide-react'

const WhoWeHelpUG = () => {
    const challenges = [
        "Identifying a viable research topic",
        "Understanding research methodology basics",
        "Finding reliable academic sources",
        "Structuring the final thesis or project"
    ]

    const guidance = [
        "Step-by-step topic selection mentoring",
        "Introduction to academic writing standards",
        "Guidance on literature review techniques",
        "Basic data collection and presentation support"
    ]

    return (
        <div className="page-container">
            <section className="section hero-banner-lite" style={{ backgroundImage: 'url("/images/undergrad.png")' }}>
                <div className="hero-banner-lite-overlay" />
                <div className="container">
                    <div className="hero-split">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hero-split-text"
                        >
                            <h1 className="section-title text-gradient" style={{ textAlign: 'left' }}>Undergraduate Students</h1>
                            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
                                Building a strong foundation for your academic journey. We help you navigate the first steps of formal research with confidence.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="hero-split-image"
                        >
                            <img src="/images/undergrad.png" alt="Undergraduate Success" className="split-img" />
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
                            <h3 className="serif mb-4">Common Challenges</h3>
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
                                    <li key={i}><Target size={18} className="text-secondary" /> {item}</li>
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
                            Visionary Research Academy operates on a strict policy of academic integrity.
                            We provide guidance, mentoring, and support to enhance your understanding.
                            We do NOT write papers for students or engage in any form of contract cheating.
                            Our goal is to empower you to produce your own original work.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container text-center">
                    <h2 className="serif mb-4">Expected Academic Outcomes</h2>
                    <div className="outcomes-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="outcome-item"
                        >
                            <BookOpen size={48} className="mb-3 text-secondary" />
                            <h4>Critical Thinking</h4>
                            <p>Improved ability to evaluate and synthesize information accurately.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="outcome-item"
                        >
                            <Award size={48} className="mb-3 text-secondary" />
                            <h4>Research Skills</h4>
                            <p>Practical knowledge of how to conduct ethical and rigorous research.</p>
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

export default WhoWeHelpUG
