import { useEffect, useRef, useState } from 'react';
import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'React developer',
  'Node.js Developer',
  'Frontend Developer',
  'Backend Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container hero-content">
        <div className="hero-badge animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <span className="badge-dot" />
          <span>Available for opportunities</span>
        </div>

        <h1 className="hero-name animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          MD<span className="name-accent">.</span> RAZA
          <br />
        </h1>

        <div className="hero-role animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
          <span className="role-prefix">{'> '}</span>
          <span className="role-text">{displayed}</span>
          <span className="cursor-blink">|</span>
        </div>

        <p className="hero-desc animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          Full Stack Developer focused on building clean, scalable web applications.
          Passionate about the MERN stack, intuitive UI, and writing code that matters.
        </p>

        <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.65s' }}>
          <a href="#projects" className="btn-solid">
            View Projects <ExternalLink size={14} />
          </a>
          <a href="#contact" className="btn-neon">
            Let's Talk <Mail size={14} />
          </a>
        </div>

        <div className="hero-socials animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <a href="https://github.com/Mdraza78" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/md-raza-5607a3244/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a href="mailto:mdraza78601@gmail.com" aria-label="Gmail">
            <i className="fa-brands fa-google" />
          </a>
        </div>

        <div className="hero-avatar animate-slideInRight" style={{ animationDelay: '0.3s' }}>
          <div className="avatar-ring" />
          <div className="avatar-inner">
            <div className="avatar-code">
              <div className="code-line"><span className="kw">const</span> <span className="fn">developer</span> = {'{'}</div>
              <div className="code-line indent"><span className="prop">name</span>: <span className="str">"Md Raza"</span>,</div>
              <div className="code-line indent"><span className="prop">stack</span>: <span className="str">"MERN"</span>,</div>
              <div className="code-line indent"><span className="prop">status</span>: <span className="str">"building"</span>,</div>
              <div className="code-line indent"><span className="prop">passion</span>: <span className="str">"∞"</span></div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
          <div className="avatar-tech-orbit">
            {['React', 'Node', 'Mongo', 'Express'].map((t) => (
              <span key={t} className="orbit-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint">
        <ArrowDown size={16} />
        <span>Scroll</span>
      </a>
    </section>
  );
}