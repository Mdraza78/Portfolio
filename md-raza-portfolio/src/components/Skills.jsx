import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#00f5ff',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
    ],
  },
  {
    category: 'Backend',
    color: '#4d9fff',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'Core Java', level: 72 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    category: 'Database & Tools',
    color: '#7c5cff',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'GitHub', level: 85 },
      { name: 'Vercel / Netlify', level: 80 },
    ],
  },
];

const techBadges = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
  'MongoDB', 'MySQL', 'GitHub', 'Core Java', 'REST API', 'Vite',
  'Vercel', 'Netlify', 'Git', 'Gemini AI',
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="section-divider" />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <div className="skill-group-header">
                <span className="skill-category" style={{ color: group.color }}>
                  {group.category}
                </span>
                <div className="skill-line" style={{ background: group.color }} />
              </div>

              <div className="skill-bars">
                {group.skills.map(skill => (
                  <div className="skill-bar-item" key={skill.name}>
                    <div className="skill-bar-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct" style={{ color: group.color }}>{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}88)`,
                          boxShadow: `0 0 10px ${group.color}44`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges-section">
          <p className="badges-label">
            <span className="mono-tag">{'// '}</span>Tech Stack
          </p>
          <div className="badges-wrap">
            {techBadges.map(tech => (
              <span className="tech-badge" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
