import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ─── EmailJS Config ───────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_um8waur' // Use a contact-specific template if you have one
const EMAILJS_PUBLIC_KEY = '9evvQw440xDHWB7Fr'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: 'PhD',
    subject: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('loading')

    const templateParams = {
      name: formData.name,
      email: formData.email,
      role: formData.level, // mapping level to role for consistency if needed
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', level: 'PhD', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (err) {
      console.error('Contact form error:', err)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="page-container" style={{ paddingTop: 0 }}>
      <section className="hero-banner" style={{ backgroundImage: 'url("/images/process_banner.png")' }}>
        <div className="hero-banner-overlay" />
        <div className="container hero-banner-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-banner-title serif">Connect with Our Mentors</h1>
            <p className="hero-banner-subtitle">
              Take the first step towards academic excellence. Your inquiry will be handled with absolute confidentiality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-form-wrapper"
            >
              <h2 className="serif mb-4">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    placeholder="John Doe"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="john@university.edu"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Academic Level</label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  >
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                    <option>PhD / Doctorate</option>
                    <option>Faculty / Independent</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Research Topic / Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    placeholder="e.g. Qualitative study in Public Health"
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>How can we help?</label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    placeholder="Tell us about your research challenges..."
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="submit-status success">
                    <CheckCircle size={18} /> Inquiry sent! We will contact you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="submit-status error">
                    <AlertCircle size={18} /> Failed to send. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={submitStatus === 'loading'}
                >
                  {submitStatus === 'loading' ? (
                    <><Loader size={16} className="ml-2 spin" /> Sending...</>
                  ) : (
                    <>Contact Us <Send size={16} className="ml-2" /></>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-info"
            >
              <div className="info-card premium-card">
                <h3 className="serif mb-4">Contact Information</h3>
                <div className="info-item">
                  <Mail className="text-secondary" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p>visionaryresearchacademy@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <MessageSquare className="text-secondary" />
                  <div>
                    <p className="font-bold">WhatsApp Support</p>
                    <p>+91 81234 22933</p>
                  </div>
                </div>
                <div className="info-item">
                  <Phone className="text-secondary" />
                  <div>
                    <p className="font-bold">Phone</p>
                    <p>+91 81234 22933</p>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin className="text-secondary" />
                  <div>
                    <p className="font-bold">Location</p>
                    <p>A,16 NMH layout, Sidedahalli, Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>

              <div className="trust-note mt-5">
                <h4 className="serif">Confidentiality Assured</h4>
                <p>All communication is encrypted and stored securely. We never share your research ideas or personal data with third parties.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .page-container { padding-top: 80px; }
        .text-center { text-align: center; }
        .contact-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 60px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-weight: 500;
          color: var(--primary);
        }
        .form-group input, 
        .form-group select, 
        .form-group textarea {
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: 4px;
          font-family: inherit;
          font-size: 1rem;
        }
        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--secondary);
          box-shadow: 0 0 0 2px rgba(35, 78, 112, 0.1);
        }
        .contact-info {
           display: flex;
           flex-direction: column;
           gap: 32px;
        }
        .info-card {
          padding: 40px;
          background: #fff;
        }
        .info-item {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }
        .info-item p { margin: 0; }
        .font-bold { font-weight: 600; color: var(--primary); }
        .w-full { width: 100%; justify-content: center; }
        .ml-2 { margin-left: 8px; }
        .trust-note {
          padding: 24px;
          background: var(--off-white);
          border-left: 4px solid var(--accent);
        }
        .trust-note p { font-size: 0.9rem; color: var(--text-light); margin-top: 8px; }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        .submit-status {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 20px;
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

export default Contact