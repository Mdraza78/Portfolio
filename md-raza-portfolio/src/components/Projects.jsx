import { ExternalLink, Mic, Brain, Dumbbell, Globe } from 'lucide-react'; // Removed GitBranch
import './Projects.css';

const projects = [
  {
    id: 1,
    label: '01 — Featured Project',
    title: 'PrepMind: AI Interview Evaluator',
    description:
      'An AI-driven interview preparation platform built with the MERN stack and Google Gemini. Features real-time voice interaction and automated performance evaluation, providing instant AI-generated feedback on user responses to improve interview readiness.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Gemini', 'Voice API'],
    live: 'https://prep-ai-interview-ai-bot.vercel.app/',
    github: 'https://github.com/Mdraza78',
    icon: <Brain size={28} />,
    featured: true,
    badge: 'AI Powered',
    color: '#00f5ff',
    highlights: [
      'Real-time voice interaction',
      'AI-generated feedback via Gemini',
      'Automated performance scoring',
      'MERN stack architecture',
    ],
  },
  {
    id: 2,
    label: '02 — Freelance Project',
    title: 'FitLife by Medha',
    description:
      'A professional fitness & wellness website built as a freelance project. Clean, responsive design showcasing fitness coaching services, programs, and testimonials with a modern UI/UX approach.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    live: 'https://fitlifebymedha.netlify.app/',
    icon: <Dumbbell size={28} />,
    featured: false,
    badge: 'Freelance',
    color: '#4d9fff',
    highlights: [
      'Responsive fitness platform',
      'Modern UI/UX design',
      'Client delivery project',
      'Deployed on Netlify',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="section-divider" />

        <div className="projects-list">
          {projects.map((project, i) => (
            <div
              className={`project-card ${project.featured ? 'featured' : ''}`}
              key={project.id}
              style={{ '--project-color': project.color }}
            >
              <div className="project-content">
                <div className="project-top">
                  <span className="project-label">{project.label}</span>
                  <span className="project-badge">{project.badge}</span>
                </div>

                <div className="project-icon-wrap">
                  <div className="project-icon" style={{ color: project.color }}>
                    {project.icon}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map(h => (
                    <li key={h}>
                      <span className="highlight-dot" style={{ background: project.color }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="tag" key={tag} style={{ borderColor: `${project.color}30`, color: project.color }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-neon">
                    Live Demo <ExternalLink size={13} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-gh-link">
                    {/* Replaced GitBranch with Font Awesome GitHub icon */}
                    <i className="fa-brands fa-github" style={{ fontSize: '18px' }} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="project-screen">
                  <div className="screen-bar">
                    <span /><span /><span />
                    <div className="screen-url">
                      <Globe size={10} />
                      {project.live.replace('https://', '')}
                    </div>
                  </div>
                  <div className="screen-body">
                    <div className="screen-mock">
                      <div className="mock-hero" style={{ background: `${project.color}10`, borderColor: `${project.color}20` }}>
                        <div className="mock-icon" style={{ color: project.color }}>{project.icon}</div>
                        <div className="mock-lines">
                          <div className="mock-line wide" style={{ background: project.color }} />
                          <div className="mock-line med" style={{ background: `${project.color}60` }} />
                          <div className="mock-line short" style={{ background: `${project.color}40` }} />
                        </div>
                      </div>
                      <div className="mock-grid">
                        {[...Array(4)].map((_, i) => (
                          <div className="mock-card" key={i} style={{ borderColor: `${project.color}15` }}>
                            <div className="mock-card-top" style={{ background: `${project.color}08` }} />
                            <div className="mock-card-lines">
                              <div className="mc-line" style={{ background: `${project.color}40` }} />
                              <div className="mc-line short" style={{ background: `${project.color}25` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <p className="mono-tag-text">{'// More projects on GitHub'}</p>
          <a href="https://github.com/Mdraza78" target="_blank" rel="noopener noreferrer" className="btn-neon">
            {/* Replaced GitBranch with Font Awesome GitHub icon */}
            <i className="fa-brands fa-github" style={{ marginRight: '8px' }} /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}