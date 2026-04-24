import { GraduationCap, Code2, Cpu } from 'lucide-react';
import './About.css';

const education = [
  {
    degree: 'MCA (Pursuing)',
    institution: 'VIT Bhopal University',
    location: 'Bhopal, MP',
    period: '2024 – Present',
    icon: <GraduationCap size={18} />,
  },
  {
    degree: 'BCA',
    institution: 'Techno India College of Technology',
    location: 'Kolkata, West Bengal',
    period: '2022 – 2024',
    icon: <GraduationCap size={18} />,
  },
];

const stats = [
  { value: '2+', label: 'Years of coding' },
  { value: '3+', label: 'Projects built' },
  { value: '2', label: 'Internships' },
  { value: '∞', label: 'Curiosity' },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="section-divider" />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong>Md Raza</strong>, a Full Stack Developer specializing in the{' '}
              <span className="hl">MERN stack</span>. I build end-to-end web applications
              with a focus on clean architecture, intuitive interfaces, and reliable performance.
            </p>
            <p>
              I enjoy working across the entire stack — from designing RESTful APIs with Node.js
              to crafting responsive, component-driven UIs with React. Every project I take on
              is an opportunity to write better, more thoughtful code.
            </p>
            <p>
              Outside of work, I explore emerging technologies, contribute to open-source, and
              build tools like <span className="hl">PrepMind</span> — an AI-powered interview
              preparation platform designed to help developers level up.
            </p>

            <div className="about-icons">
              <div className="icon-chip">
                <Code2 size={16} />
                <span>MERN Stack Dev</span>
              </div>
              <div className="icon-chip">
                <Cpu size={16} />
                <span>AI Integrations</span>
              </div>
              <div className="icon-chip">
                <GraduationCap size={16} />
                <span>MCA Student</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="stats-grid">
              {stats.map(s => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="education-block">
              <p className="edu-heading">
                <span className="mono-tag">{'// '}</span>Education
              </p>
              {education.map((e, i) => (
                <div className="edu-item" key={i}>
                  <div className="edu-icon">{e.icon}</div>
                  <div className="edu-details">
                    <p className="edu-degree">{e.degree}</p>
                    <p className="edu-institution">{e.institution}</p>
                    <div className="edu-meta">
                      <span>{e.location}</span>
                      <span className="edu-period">{e.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}