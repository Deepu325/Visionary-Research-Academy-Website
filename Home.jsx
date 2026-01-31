import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Clock, FileText, AlertCircle, CheckCircle } from 'lucide-react'

const Home = () => {
  const painPoints = [
    { title: "Topic Rejection", text: "Struggling to find a novel gap that supervisors approve?" },
    { title: "Data Confusion", text: "Overwhelmed by complex statistical tools or qualitative coding?" },
    { title: "Deadlines", text: "Pressure mounting with no clear path to completion?" },
    { title: "Plagiarism Fear", text: "Concerned about accidental similarity or proper citation?" }
  ]

  const levels = [
    {
      title: "Undergraduate",
      path: "/who-we-help/ug",
      text: "Foundation support for your first major research project.",
      image: "/images/undergrad.png"
    },
    {
      title: "Postgraduate",
      path: "/who-we-help/pg",
      text: "Advanced guidance for Master's level dissertations.",
      image: "/images/postgrad.png"
    },
    {
      title: "PhD Researchers",
      path: "/who-we-help/phd",
      text: "Strategic mentorship for doctoral excellence.",
      image: "/images/phd.png"
    },
    {
      title: "Thesis & Dissertation",
      path: "/services",
      text: "Complete academic support from initial stage to final submission.",
      image: "/images/success_banner.png"
    },
    {
      title: "Data Analysis",
      path: "/services",
      text: "Transforming raw data into insights using SPSS, R, Python and more.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Research Publication",
      path: "/services",
      text: "Expert guidance for submissions to Scopus, UGC-CARE, and IEEE journals.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800"
    }
  ]

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-banner" style={{ backgroundImage: 'url("/images/hero.png")' }}>
        <div className="hero-banner-overlay" />
        <div className="container hero-banner-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="hero-banner-title serif">
              Visionary Research Academy
            </h1>
            <p className="hero-banner-subtitle" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--accent)' }}>
              Your Trusted Partner for Research, Thesis & Data Analytics
            </p>
            <div className="hero-actions" style={{ marginTop: '40px' }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Mission Statement */}
      <section className="section" style={{ padding: '80px 0 20px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-700 mx-auto"
          >
            <p className="lead" style={{ fontSize: '1.4rem', color: 'var(--primary)', lineHeight: 1.8, fontWeight: '500' }}>
              Visionary Research Academy is dedicated to supporting academic excellence through expert research guidance and analytical expertise. We provide comprehensive assistance for Thesis and Dissertation work, Research Publications, and Data Analysis, helping scholars and professionals navigate complex academic challenges with confidence, precision, and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Research is Hard. We Make it Structured.</h2>
          <div className="pain-grid">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="premium-card"
              >
                <AlertCircle size={24} className="text-accent mb-3" />
                <h3 className="serif">{point.title}</h3>
                <p>{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tailored Support for Every Level</h2>
          <div className="levels-grid">
            {levels.map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="premium-card level-card-img"
              >
                <div className="level-img-wrapper">
                  <img src={level.image} alt={level.title} className="level-thumbnail" />
                </div>
                <div className="level-card-content">
                  <h3 className="serif">{level.title}</h3>
                  <p>{level.text}</p>
                  <Link to={level.path} className="text-link">
                    Learn More <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/services" className="btn btn-primary" style={{ padding: '16px 40px' }}>
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Why Trust Visionary Research Academy?</h2>
          <div className="trust-overview">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="trust-item"
            >
              <ShieldCheck size={40} className="text-secondary mb-3" />
              <h4>Ethical Mentoring</h4>
              <p>Strict adherence to academic integrity guidelines and university policy.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="trust-item"
            >
              <Clock size={40} className="text-secondary mb-3" />
              <h4>Timely Progress</h4>
              <p>Structured milestones ensuring you hit your deadlines without stress.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="trust-item"
            >
              <FileText size={40} className="text-secondary mb-3" />
              <h4>Expert Insight</h4>
              <p>PhD-qualified mentors providing deep domain-specific guidance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section cta-banner">
        <div className="container text-center">
          <h2 className="serif mb-4" style={{ color: '#fff' }}>Ready to overcome your research challenges?</h2>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--accent)', border: 'none', padding: '20px 40px' }}>
            Book Your Free Consultation Now
          </Link>
        </div>
      </section>

      <style>{`
        .home-container { padding-top: 0; }
        .hero-banner {
          margin-top: 80px;
        }
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
        }
        .levels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }
        .level-card-img {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
        }
        .level-img-wrapper {
          height: 200px;
          overflow: hidden;
        }
        .level-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .level-card-img:hover .level-thumbnail {
          transform: scale(1.1);
        }
        .level-card-content {
          padding: 32px;
        }
        .text-link {
          display: inline-flex;
          align-items: center;
          color: var(--secondary);
          text-decoration: none;
          font-weight: 600;
          margin-top: 24px;
          font-size: 0.95rem;
          transition: transform 0.2s ease;
        }
        .text-link:hover { transform: translateX(5px); }
        .trust-overview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 48px;
          text-align: center;
        }
        .trust-item h4 { font-size: 1.25rem; margin-bottom: 12px; }
        .trust-item p { font-size: 0.95rem; }
        .cta-banner {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          padding: 120px 0;
        }
        .text-center { text-align: center; }
      `}</style>
    </div>
  )
}

export default Home