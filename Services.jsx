import React from 'react'
import { motion } from 'framer-motion'
import {
  Book,
  BarChart2,
  Edit3,
  GraduationCap,
  ArrowRight,
  MessageCircle,
  Users,
  BookOpen,
  CheckCircle,
  FileText,
  Globe,
  ShieldCheck,
  ClipboardList,
  Cpu
} from 'lucide-react'

const Services = () => {
  const categories = [
    {
      title: "Thesis & Dissertation Guidance",
      icon: <GraduationCap size={32} />,
      image: "/images/success_banner.png",
      desc: "Complete academic support from initial stage to final submission. We ensure clarity, originality, and academic rigor throughout.",
      items: [
        "Topic selection and problem identification",
        "Literature review support",
        "Research methodology guidance",
        "Data analysis and interpretation",
        "Chapter-wise documentation and review",
        "Final formatting and submission support"
      ]
    },
    {
      title: "Data Analysis & Interpretation",
      icon: <BarChart2 size={32} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      desc: "Our experts transform raw data into insights. Tools supported: SPSS, AMOS, SmartPLS, R, Python, Excel.",
      items: [
        "Data cleaning and preparation",
        "Hypothesis testing and model validation",
        "SEM, ANOVA, Regression, Correlation",
        "Graphs, charts, and result tables",
        "Interpretation for viva and papers"
      ]
    },
    {
      title: "Synopsis & Proposal Writing",
      icon: <ClipboardList size={32} />,
      image: "/images/process_banner.png",
      desc: "Professional support to clearly present research objectives, scope, and methodology aligned with university guidelines.",
      items: [
        "Research topic finalization",
        "Proposal structure and drafting",
        "Problem statement and objectives",
        "Research design description",
        "Alignment with university standards"
      ]
    },
    {
      title: "Research Paper & Publication",
      icon: <Globe size={32} />,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
      desc: "Drafting and submitting papers to Scopus, UGC-CARE, IEEE, and peer-reviewed journals with formatting compliance.",
      items: [
        "Research paper drafting and editing",
        "Journal selection guidance",
        "Scopus, UGC-CARE, IEEE formatting",
        "Plagiarism checking and revision",
        "Submission and reviewer response"
      ],
      note: "Note: Publication fees are borne by the client."
    },
    {
      title: "Training & Workshops",
      icon: <Users size={32} />,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
      desc: "Skill-building programs for institutions and scholars focused on methodology, writing, and analytical tools.",
      items: [
        "Research methodology training",
        "Academic and scientific writing skills",
        "Software training (SPSS, AMOS, etc.)",
        "Customized institutional workshops"
      ]
    },
    {
      title: "Editing & Proofreading",
      icon: <Edit3 size={32} />,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
      desc: "Enhancing clarity and readability while ensuring language accuracy and zero structural defects.",
      items: [
        "Grammar and language correction",
        "Structural and flow improvements",
        "Plagiarism review and originality check",
        "APA, MLA, Harvard, Chicago citation"
      ]
    },
    {
      title: "End-to-End Academic Support",
      icon: <ShieldCheck size={32} />,
      image: "/images/hero.png",
      desc: "Personalized, transparent, and continuous support across all research stages with absolute confidentiality.",
      items: [
        "Personalized consultation sessions",
        "Continuous guidance and feedback",
        "Confidential data handling",
        "Ethical and plagiarism-free support"
      ]
    }
  ]

  const steps = [
    {
      icon: <MessageCircle size={32} />,
      title: "Requirement Discussion",
      text: "We start with a detailed conversation about your research goals, challenges, and specific academic requirements."
    },
    {
      icon: <Users size={32} />,
      title: "Expert Consultation",
      text: "You are matched with a subject matter expert who provides tailored guidance on your research methodology and structure."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Guided Academic Support",
      text: "Continuous mentoring throughout your research journey, ensuring you stay on track with ethical standards and deadlines."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Review & Readiness",
      text: "A final comprehensive review of your work to ensure it meets the rigorous expectations of academic submission."
    }
  ]

  return (
    <div className="page-container" style={{ paddingTop: 0 }}>
      {/* Hero Banner */}
      <section className="hero-banner" style={{ backgroundImage: 'url("/images/hero.png")' }}>
        <div className="hero-banner-overlay" />
        <div className="container hero-banner-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-banner-title serif">Visionary Research Academy</h1>
            <p className="hero-banner-subtitle" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--accent)' }}>
              Your Trusted Partner for Research, Thesis & Data Analytics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-light" style={{ paddingBottom: 0 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-700 mx-auto"
          >
            <p className="lead" style={{ fontSize: '1.25rem', color: 'var(--text)', lineHeight: 1.8 }}>
              Visionary Research Academy is dedicated to supporting academic excellence through expert research guidance and analytical expertise. We provide comprehensive assistance for Thesis and Dissertation work, Research Publications, and Data Analysis, helping scholars and professionals navigate complex academic challenges with confidence, precision, and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                className="service-card-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="service-card premium-card">
                  <div className="service-card-image">
                    <img src={cat.image} alt={cat.title} />
                    <div className="service-card-overlay"></div>
                    <div className="service-icon-badge">
                      {cat.icon}
                    </div>
                  </div>

                  <div className="service-card-body">
                    <h3 className="serif service-title">{cat.title}</h3>
                    <p className="service-desc">{cat.desc}</p>

                    <div className="service-features">
                      <h4 className="features-label">Includes:</h4>
                      <ul>
                        {cat.items.map((item, i) => (
                          <li key={i}>
                            <ArrowRight size={14} className="icon-arrow" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {cat.note && <p className="service-note italic">{cat.note}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-light bg-dark-gradient" style={{ color: '#fff' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="section-title" style={{ color: '#fff' }}>The Mentorship Journey</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>A transparent, structured process designed to build confidence.</p>
          </motion.div>

          <div className="steps-container">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="step-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="step-count">0{index + 1}</div>
                <div className="step-card glass">
                  <div className="step-icon-inner">{step.icon}</div>
                  <div className="step-text">
                    <h3 className="serif">{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .bg-light { background: #fafbfc; }
        .bg-dark-gradient { background: linear-gradient(135deg, var(--primary) 0%, #1a1c1e 100%); }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-700 { max-width: 700px; }
        .mb-5 { margin-bottom: 60px; }
        .lead { font-weight: 500; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
        }

        .service-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .service-card:hover {
          transform: translateY(-10px);
        }
        
        .service-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .service-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .service-card:hover .service-card-image img {
          transform: scale(1.1);
        }
        .service-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(26, 28, 30, 0.4));
        }

        .service-icon-badge {
          position: absolute;
          bottom: -25px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: var(--secondary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          z-index: 10;
        }

        .service-card-body {
          padding: 40px 32px 32px;
        }

        .service-title {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: var(--primary);
        }

        .service-desc {
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 24px;
          font-size: 1rem;
        }

        .service-features {
          flex-grow: 1;
        }
        .features-label {
          font-family: var(--font-serif);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .service-features ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .service-features li {
          display: flex;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--text);
          line-height: 1.4;
        }
        .icon-arrow {
          margin-top: 3px;
          flex-shrink: 0;
          color: var(--secondary);
          opacity: 0.6;
        }
        .service-note {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
          font-size: 0.85rem;
          color: var(--text-light);
        }
        .italic { font-style: italic; }

        /* Steps Styling */
        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }
        .step-item {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .step-count {
          font-family: var(--font-serif);
          font-size: 4rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.1);
          line-height: 1;
        }
        .step-card {
          flex-grow: 1;
          display: flex;
          gap: 32px;
          padding: 40px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          align-items: center;
        }
        .step-icon-inner {
          color: var(--secondary);
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 50%;
        }
        .step-text h3 { color: #fff; margin-bottom: 8px; font-size: 1.5rem; }
        .step-text p { color: rgba(255, 255, 255, 0.7); line-height: 1.6; }

        @media (max-width: 992px) {
          .services-grid { grid-template-columns: 1fr; }
          .step-card { flex-direction: column; text-align: center; gap: 20px; }
          .step-item { gap: 20px; }
        }
        @media (max-width: 768px) {
          .step-count { display: none; }
        }
      `}</style>
    </div>
  )
}

export default Services