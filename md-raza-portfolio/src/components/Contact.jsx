import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mdraza78601@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+917979961328');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Let's <span>Connect</span></h2>
        <div className="section-divider" />

        <div className="contact-grid">
          <div className="contact-left">
            <h3 className="contact-heading">
              Open to opportunities &<br />
              <span className="hl">collaborations</span>
            </h3>
            <p className="contact-subtext">
              Whether you have a project in mind, a job opportunity, or just want to say hi —
              my inbox is always open. I'll get back to you as soon as possible!
            </p>

            <div className="contact-links">
              {/* Email */}
              <div className="contact-link-item">
                <div className="contact-icon email">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">mdraza78601@gmail.com</span>
                </div>
                <button className="copy-btn" onClick={copyEmail} title="Copy email">
                  {copiedEmail
                    ? <i className="fa-solid fa-check" />
                    : <i className="fa-regular fa-copy" />
                  }
                </button>
              </div>

              {/* Phone */}
              <div className="contact-link-item">
                <div className="contact-icon phone">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">Phone</span>
                  <span className="contact-link-value">+91 7979961328</span>
                </div>
                <button className="copy-btn" onClick={copyPhone} title="Copy phone number">
                  {copiedPhone
                    ? <i className="fa-solid fa-check" />
                    : <i className="fa-regular fa-copy" />
                  }
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/md-raza-5607a3244/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <div className="contact-icon linkedin">
                  <i className="fa-brands fa-linkedin-in" />
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">md-raza-5607a3244</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Mdraza78"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <div className="contact-icon github">
                  <i className="fa-brands fa-github" />
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">Mdraza78</span>
                </div>
              </a>

              {/* Location */}
              <div className="contact-link-item no-hover">
                <div className="contact-icon location">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">Location</span>
                  <span className="contact-link-value">Bhopal, MP · India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-cta-card">
              <div className="cta-terminal">
                <div className="terminal-bar">
                  <span /><span /><span />
                  <span className="terminal-title">message.js</span>
                </div>
                <div className="terminal-body">
                  <div className="t-line">
                    <span className="t-kw">const</span> <span className="t-var">message</span> = {'{'}
                  </div>
                  <div className="t-line indent">
                    <span className="t-prop">from</span>: <span className="t-str">"you"</span>,
                  </div>
                  <div className="t-line indent">
                    <span className="t-prop">to</span>: <span className="t-str">"Md Raza"</span>,
                  </div>
                  <div className="t-line indent">
                    <span className="t-prop">subject</span>: <span className="t-str">"Let's work together"</span>,
                  </div>
                  <div className="t-line indent">
                    <span className="t-prop">status</span>: <span className="t-cyan">"awaiting..."</span>
                  </div>
                  <div className="t-line">{'}'}</div>
                  <div className="t-line mt">
                    <span className="t-fn">sendMessage</span>(<span className="t-var">message</span>);
                  </div>
                  <div className="t-line">
                    <span className="t-comment">{'// ✓ Ready to connect!'}</span>
                  </div>
                </div>
              </div>

              <div className="cta-actions">
                <a href="mailto:mdraza78601@gmail.com" className="btn-solid">
                  <i className="fa-solid fa-envelope" /> Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/md-raza-5607a3244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon"
                >
                  <i className="fa-brands fa-linkedin-in" /> LinkedIn
                </a>
              </div>

              <p className="cta-note">
                <span className="t-cyan">{'>'}</span> Avg response time: within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}