import { Briefcase, MapPin, Calendar, ExternalLink, Award, Trophy, Code2 } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Globentix Technologies',
    type: 'Startup · Bangalore (Remote)',
    period: 'Oct 2025 – Present',
    status: 'current',
    description:
      'Contributing to the development and scaling of web applications using the MERN stack at a Bangalore-based startup. Collaborating with a remote team on product features, API development, and frontend architecture.',
    highlights: [
      'MERN stack development',
      'Remote team collaboration',
      'Feature design & API integration',
      'Startup product development',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'MBSIR.in',
    type: 'Startup · Kolkata (Onsite)',
    period: 'Feb-2024 - May 2024',
    status: 'completed',
    description:
      'Interned at MBSIR.in, a Kolkata-based startup, where I built and maintained web applications. Gained practical experience in frontend development, collaborated with the team on live projects, and contributed to delivering production-ready features.',
    highlights: [
      'Frontend development',
      'Web application maintenance',
      'Team collaboration',
      'Real-world project delivery',
    ],
  },
];

const achievements = [
  {
    iconType: 'trophy',
    title: 'Hackathon Participant',
    desc: 'Participated in a competitive hackathon, collaborating under time constraints to build and pitch a functional product.',
    color: '#00f5ff',
  },
  {
    iconType: 'code',
    title: 'Hacktoberfest Contributor',
    desc: 'Participated in Hacktoberfest, contributing to open-source repositories and strengthening collaboration skills in the global developer community.',
    color: '#4d9fff',
  },
  {
    iconType: 'award',
    title: 'Infosys SpringBoard Certification',
    desc: 'Completed the Full Stack React certification by Infosys SpringBoard — covering React, Node.js, APIs, and modern web development practices.',
    color: '#7c5cff',
    link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0130944319092817922301_shared/1-aca96045-6628-455e-bcc3-a7919b7f88cb.pdf',
    linkLabel: 'View Certificate',
  },
];

function AchIcon({ type }) {
  if (type === 'trophy') return <Trophy size={20} />;
  if (type === 'code')   return <Code2 size={20} />;
  if (type === 'award')  return <Award size={20} />;
  return null;
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="section-divider" />

        <div className="timeline">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className={`timeline-dot ${exp.status === 'current' ? 'active' : ''}`} />

              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role-row">
                      <h3 className="exp-role">{exp.role}</h3>
                      {exp.status === 'current' && (
                        <span className="exp-current-badge">
                          <span className="pulse-dot" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-meta-item">
                      <MapPin size={12} />
                      {exp.type}
                    </span>
                    <span className="exp-meta-item">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-highlights">
                  {exp.highlights.map(h => (
                    <span className="exp-tag" key={h}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Freelance block */}
        <div className="freelance-block">
          <div className="freelance-label">
            <span className="mono-tag">{'// '}</span>
            Freelance Work
          </div>
          <div className="freelance-content">
            <div className="freelance-icon">
              <Briefcase size={20} />
            </div>
            <div>
              <h4 className="freelance-title">Freelance Web Developer</h4>
              <p className="freelance-desc">
                Independently delivered client projects including{' '}
                <strong>FitLife by Medha</strong> — a professional fitness coaching website.
                Managed the full project lifecycle from design to deployment.
              </p>
              <a
                href="https://fitlifebymedha.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="freelance-link"
              >
                View project <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="achievements-block">
          <p className="achievements-label">
            <span className="mono-tag">{'// '}</span>
            Achievements &amp; Certifications
          </p>
          <div className="achievements-grid">
            {achievements.map((a, i) => (
              <div
                className="achievement-card"
                key={i}
                style={{ '--ach-color': a.color }}
              >
                <div
                  className="ach-icon"
                  style={{
                    color: a.color,
                    background: `${a.color}18`,
                    borderColor: `${a.color}35`,
                  }}
                >
                  <AchIcon type={a.iconType} />
                </div>
                <div className="ach-info">
                  <h4 className="ach-title">{a.title}</h4>
                  <p className="ach-desc">{a.desc}</p>
                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ach-link"
                      style={{ color: a.color }}
                    >
                      {a.linkLabel} <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}