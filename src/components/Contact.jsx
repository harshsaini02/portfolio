import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const socials = [
  { name: 'GitHub', icon: '⌥', href: 'https://github.com/harshsaini02' },
  { name: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/harsh-saini-itr/' },
  { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/917055589418' },
  { name: 'Email', icon: '@', href: 'mailto:harshsaini.rcp@gmail.com' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_ld5l5k7',  // Service ID
        'template_0z6k7jn', // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        'iUi4CtSQJbUjCzgAW' // Public Key
      );

      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSending(false);
      alert('Failed to send message. Please try again or contact directly via email.');
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label">Let's Connect</div>
          <h2 className="contact-title">
            Got a project
            <span className="title-accent"> in mind?</span>
          </h2>
          <p className="contact-text">
            I'm driven by opportunities to build products that truly make an impact.
            If you're seeking a dedicated developer who values quality, performance, and innovation,
            I'd be excited to contribute my skills to your team's vision.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span>Roorkee, India</span>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <span>Response within 24 hours</span>
            </div>
            <div className="info-item">
              <span className="info-icon">✅</span>
              <span>Open to remote opportunities</span>
            </div>
          </div>

          <div className="socials">
            <div className="socials-label">Find me on</div>
            <div className="socials-row">
              {socials.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3, borderColor: 'var(--orange)' }}
                >
                  <span className="social-icon">{s.icon}</span>
                  <span className="social-name">{s.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {sent ? (
            <motion.div
              className="success-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">🔥</div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-text">Thanks for reaching out! I'll get back to you within 24 hours.</p>
              <button className="reset-btn" onClick={() => setSent(false)}>Send Another</button>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration..."
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="form-input form-textarea"
                  rows={5}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? (
                  <>
                    <span className="sending-dot" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="submit-arrow">→</span>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>DEV<span className="logo-bracket">/&gt;</span>
          </div>
          <span className="footer-copy">© 2025 Harsh Saini. Built with React & ❤️</span>
          <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑ Back to top
          </button>
        </div>
      </motion.footer>
    </section>
  );
}