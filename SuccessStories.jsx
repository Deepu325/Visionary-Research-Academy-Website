import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, Target, BookOpen, Quote, Star, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// 1. Go to https://emailjs.com → Create account → Add Email Service
// 2. Create a Template with variables: {{name}}, {{role}}, {{rating}}, {{comment}}
// 3. Copy your IDs below
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'   // e.g. 'abcDEFghiJKL'

// ─── Google Sheets Config ─────────────────────────────────────────────────────
// Deploy a Google Apps Script as a web app (see README or artifact for instructions)
// Paste the deployment URL below
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'

const SuccessStories = () => {
  const stats = [
    { label: "Scholars Guided", value: "500+", icon: <Award size={24} /> },
    { label: "Successful Submissions", value: "98%", icon: <Target size={24} /> },
    { label: "Publication Support", value: "150+", icon: <BookOpen size={24} /> }
  ]

  const stories = [
    {
      level: "PhD Candidate",
      discipline: "Public Health",
      challenge: "Methodological deadlock in qualitative data analysis.",
      outcome: "Successfully navigated NVivo coding, leading to a high-impact publication and smooth viva defense.",
      quote: "The strategic clarity provided by VRA turned my chaotic data into a publishable masterpiece."
    },
    {
      level: "Postgraduate Student",
      discipline: "Advanced Economics",
      challenge: "Struggling with complex econometric modeling in R.",
      outcome: "Mastered the analytical framework through one-on-one technical coaching, achieving a Distinction grade.",
      quote: "I didn't just get a grade; I gained technical skills that helped me land my current role as a Senior Analyst."
    },
    {
      level: "Undergraduate Scholar",
      discipline: "Psychology",
      challenge: "Structuring the first major empirical research project.",
      outcome: "Developed a rigorous research proposal that was commended by the faculty board.",
      quote: "The mentorship bridge between classroom theory and real research was exactly what I needed."
    }
  ]

  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Dr. Ananya Iyer",
      role: "PhD Researcher",
      comment: "The precision in data interpretation provided by Visionary Research Academy was exceptional. They didn't just analyze data; they provided a narrative for my thesis.",
      rating: 5
    },
    {
      name: "Rahul Sharma",
      role: "Masters Student",
      comment: "I was struggling with my methodology chapter. The step-by-step guidance I received here was instrumental in my project being accepted with zero revisions.",
      rating: 5
    },
    {
      name: "Meera Deshmukh",
      role: "Academic Researcher",
      comment: "Publication in a Scopus-indexed journal seemed impossible until I met the mentors at VRA. Their review process is extremely rigorous and ethical.",
      rating: 5
    }
  ])

  const [newFeedback, setNewFeedback] = useState({
    name: '',
    role: '',
    comment: '',
    rating: 5
  })

  const formRef = useRef()
  const [submitStatus, setSubmitStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault()
    if (!newFeedback.name || !newFeedback.comment) return

    setSubmitStatus('loading')

    const templateParams = {
      name: newFeedback.name,
      role: newFeedback.role || 'Not specified',
      rating: `${newFeedback.rating} Star`,
      comment: newFeedback.comment,
      time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    }

    try {
      // ── Send to EmailJS ──────────────────────────────────────────────────
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // ── Send to Google Sheets ────────────────────────────────────────────
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',   // Google Apps Script doesn't support CORS preflight
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(templateParams),
      })

      // ── Success ──────────────────────────────────────────────────────────
      setFeedbacks([{ ...newFeedback }, ...feedbacks])
      setNewFeedback({ name: '', role: '', comment: '', rating: 5 })
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus(null), 4000)
    } catch (err) {
      console.error('Feedback submission error:', err)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 4000)
    }
  }

  return (
    <div className="page-container" style={{ paddingTop: 0 }}>
      {/* Hero Section */}
      <section className="hero-banner" style={{ backgroundImage: 'url("/images/success_banner.png")' }}>
        <div className="hero-banner-overlay" />
        <div className="container hero-banner-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-banner-title serif">Academic Impact & Success</h1>
            <p className="hero-banner-subtitle">
              Celebrating the scholarly growth and breakthroughs of the researchers we mentor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="stat-card glass"
              >
                <div className="stat-icon text-secondary">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Scholarly Achievements</h2>
          <div className="stories-grid">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="story-card premium-card"
              >
                <div className="story-header">
                  <span className="story-level">{story.level}</span>
                  <span className="story-discipline text-secondary">{story.discipline}</span>
                </div>
                <div className="story-body">
                  <p><strong>The Challenge:</strong> <span className="text-light">{story.challenge}</span></p>
                  <p><strong>The Outcome:</strong> <span className="text-light">{story.outcome}</span></p>
                </div>
                <div className="story-quote glass">
                  <Quote size={20} className="text-accent mb-2" />
                  <p className="italic text-primary">{story.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Feedback Cards */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="section-title">Client Mentorship Feedback</h2>
            <p className="section-subtitle">Read firsthand experiences from our global research community.</p>
          </motion.div>

          <div className="feedback-grid">
            {feedbacks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="feedback-card"
              >
                <div className="stars">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="var(--secondary)" color="var(--secondary)" />
                  ))}
                </div>
                <p className="feedback-comment">"{item.comment}"</p>
                <div className="feedback-user">
                  <div className="user-icon">
                    <User size={20} />
                  </div>
                  <div className="user-meta">
                    <span className="user-name">{item.name}</span>
                    <span className="user-role">{item.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="section bg-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="feedback-form-container">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="feedback-form-content"
            >
              <h2 className="serif mb-4">Share Your Journey</h2>
              <p className="mb-4" style={{ color: 'var(--text-light)' }}>
                Your academic breakthroughs inspire others. Let the research community know how our mentorship empowered your scholarly goals.
              </p>
              <div className="feedback-graphic">
                <MessageSquare size={120} style={{ opacity: 0.05, position: 'absolute', top: '-20px', right: '-20px' }} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card feedback-form-card"
            >
              <form ref={formRef} onSubmit={handleFeedbackSubmit} className="feedback-form">
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label>Your Name</label>
                    <input
                      type="text"
                      required
                      value={newFeedback.name}
                      placeholder="Full Name"
                      onChange={(e) => setNewFeedback({ ...newFeedback, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group flex-1">
                    <label>Academic Level</label>
                    <input
                      type="text"
                      value={newFeedback.role}
                      placeholder="e.g. PhD, PG, UG"
                      onChange={(e) => setNewFeedback({ ...newFeedback, role: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Service Rating</label>
                  <select
                    value={newFeedback.rating}
                    onChange={(e) => setNewFeedback({ ...newFeedback, rating: parseInt(e.target.value) })}
                  >
                    <option value="5">5 Star - Excellent</option>
                    <option value="4">4 Star - Very Good</option>
                    <option value="3">3 Star - Good</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Share Your Feedback</label>
                  <textarea
                    rows="4"
                    required
                    value={newFeedback.comment}
                    placeholder="Describe your research roadmap experience..."
                    onChange={(e) => setNewFeedback({ ...newFeedback, comment: e.target.value })}
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="submit-status success">
                    <CheckCircle size={18} /> Thank you! Your feedback has been recorded.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="submit-status error">
                    <AlertCircle size={18} /> Submission failed. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={submitStatus === 'loading'}
                >
                  {submitStatus === 'loading' ? (
                    <><Loader size={16} className="ml-2 spin" /> Submitting...</>
                  ) : (
                    <>Post Feedback <Send size={16} className="ml-2" /></>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .page-container { padding-top: 80px; }
        .text-center { text-align: center; }
        .mb-5 { margin-bottom: 60px; }
        .flex-1 { flex: 1; }
        .w-full { width: 100%; justify-content: center; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 32px;
          margin-bottom: 40px;
        }
        .stat-card {
           padding: 48px 24px;
           text-align: center;
           border-radius: 12px;
        }
        .stat-icon { margin-bottom: 20px; display: flex; justify-content: center; opacity: 0.8; }
        .stat-value { font-size: 3rem; font-weight: 800; color: var(--primary); font-family: var(--font-serif); line-height: 1; margin-bottom: 8px; }
        .stat-label { color: var(--text-light); font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px; }
        
        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 40px;
        }
        .story-card {
           display: flex;
           flex-direction: column;
           gap: 28px;
           background: #fff;
        }
        .story-header {
           display: flex;
           flex-direction: column;
           gap: 6px;
           border-bottom: 1px solid var(--border);
           padding-bottom: 20px;
        }
        .story-level { font-weight: 800; color: var(--primary); font-size: 1.2rem; font-family: var(--font-serif); }
        .story-discipline { font-size: 0.95rem; font-weight: 600; letter-spacing: 0.5px; }
        .story-body p { margin-bottom: 16px; font-size: 1rem; line-height: 1.6; color: var(--primary); }
        .text-light { color: var(--text-light); font-weight: 400; }
        .story-quote {
          margin-top: auto;
          padding: 24px;
          border-radius: 8px;
          border: 1px solid var(--border);
        }
        .story-quote p { font-size: 1.05rem; line-height: 1.5; }
        .text-primary { color: var(--primary); }

        /* Feedback Grid */
        .feedback-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }
        .feedback-card {
          background: #fff;
          padding: 32px;
          border-radius: 16px;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: transform 0.3s ease;
        }
        .feedback-card:hover { transform: translateY(-5px); }
        .stars { display: flex; gap: 4px; }
        .feedback-comment { font-size: 1.05rem; line-height: 1.6; color: var(--text); font-style: italic; }
        .feedback-user { display: flex; align-items: center; gap: 16px; margin-top: auto; }
        .user-icon { width: 44px; height: 44px; background: var(--off-white); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--secondary); }
        .user-meta { display: flex; flex-direction: column; gap: 2px; }
        .user-name { font-weight: 700; color: var(--primary); font-family: var(--font-serif); }
        .user-role { font-size: 0.85rem; color: var(--text-light); }

        /* Feedback Form Layout */
        .feedback-form-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .feedback-form-content { position: relative; }
        .form-row { display: flex; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
        .form-group label { font-weight: 600; font-size: 0.9rem; color: var(--primary); }
        .form-group input, .form-group select, .form-group textarea {
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus { 
          outline: none; 
          border-color: var(--secondary); 
          box-shadow: 0 0 0 4px rgba(35,78,112,0.05); 
        }

        @media (max-width: 992px) {
          .feedback-form-container { grid-template-columns: 1fr; text-align: center; }
          .feedback-form-content { order: 2; }
          .feedback-form-card { order: 1; }
          .form-row { flex-direction: column; gap: 0; }
        }
        .submit-status {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 16px;
        }
        .submit-status.success {
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
        }
        .submit-status.error {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.8s linear infinite; }
      `}</style>
    </div>
  )
}

export default SuccessStories