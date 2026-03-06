import React from 'react'
import { motion } from 'framer-motion'
import { Info, HelpCircle, ShieldCheck, Clock } from 'lucide-react'

const PricingPhilosophy = () => {
    return (
        <div className="page-container" style={{ paddingTop: 0 }}>
            <section className="hero-banner" style={{ backgroundImage: 'url("/images/hero.png")' }}>
                <div className="hero-banner-overlay" />
                <div className="container hero-banner-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-banner-title serif">Pricing Philosophy</h1>
                        <p className="hero-banner-subtitle">
                            Fair, transparent, and value-driven investment in your academic future.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="philosophy-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="philosophy-intro"
                        >
                            <h2 className="serif mb-4">Why No Fixed Prices?</h2>
                            <p>
                                Every research project is unique. A PhD thesis in Theoretical Physics requires a vastly different level of expertise and time commitment compared to an Undergraduate literature review in Sociology. We avoid 'one-size-fits-all' pricing to ensure you only pay for the specific expertise your project demands.
                            </p>
                        </motion.div>

                        <div className="factors-grid mt-6">
                            <h3 className="serif text-center mb-5 w-full">Factors Affecting Cost</h3>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="premium-card factor-card"
                            >
                                <Clock className="text-secondary mb-3" size={32} />
                                <h4>Technical Complexity</h4>
                                <p>The depth of methodology and advanced tools required for your specific field.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="premium-card factor-card"
                            >
                                <Info className="text-secondary mb-3" size={32} />
                                <h4>Scope of Work</h4>
                                <p>Whether you need broad structural guidance or intensive specific data analysis.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="premium-card factor-card"
                            >
                                <HelpCircle className="text-secondary mb-3" size={32} />
                                <h4>Academic Level</h4>
                                <p>UG, PG, or PhD requirements vary significantly in rigour and expectations.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="premium-card factor-card"
                            >
                                <ShieldCheck className="text-secondary mb-3" size={32} />
                                <h4>Timeline</h4>
                                <p>Ensuring quality research takes time; urgent requests may differ in resource allocation.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="transparency-promise premium-card"
                    >
                        <h2 className="serif text-center mb-5">Our Transparency Promise</h2>
                        <div className="promise-items">
                            <div className="promise-item">
                                <strong>Consultation-Based Model:</strong> You receive a detailed quote only after we understand your specific needs through a free initial talk.
                            </div>
                            <div className="promise-item">
                                <strong>No Hidden Charges:</strong> All costs are agreed upon upfront. We do not charge for 'surprise' extras during the process.
                            </div>
                            <div className="promise-item">
                                <strong>Milestone Payments:</strong> For larger projects, we offer structured payments based on tangible progress and approvals.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style>{`
        .page-container { padding-top: 80px; }
        .text-center { text-align: center; }
        .philosophy-content { max-width: 1000px; margin: 0 auto; }
        .philosophy-intro { text-align: center; margin-bottom: 80px; max-width: 800px; margin-left: auto; margin-right: auto; }
        .philosophy-intro p { font-size: 1.15rem; color: var(--text-light); }
        .factors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }
        .factor-card {
           padding: 32px;
           text-align: center;
        }
        .factor-card h4 { margin-bottom: 12px; font-size: 1.2rem; }
        .factor-card p { font-size: 0.9rem; line-height: 1.5; }
        .transparency-promise {
          max-width: 850px;
          margin: 0 auto;
          background: #fff;
          padding: 60px;
        }
        .promise-items {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .promise-item {
          padding-left: 24px;
          border-left: 3px solid var(--accent);
        }
        .promise-item strong { display: block; margin-bottom: 8px; color: var(--primary); font-size: 1.1rem; }
        .promise-item { font-size: 1rem; color: var(--text-light); }
        .w-full { grid-column: 1 / -1; }
        .mt-6 { margin-top: 64px; }
        .mb-5 { margin-bottom: 40px; }
      `}</style>
        </div>
    )
}

export default PricingPhilosophy
