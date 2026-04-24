import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span>MD.RAZA</span>
          <span className="logo-bracket"> /&gt;</span>
        </div>

        <p className="footer-copy">
          Designed &amp; built by <span className="hl">Md Raza</span> · {new Date().getFullYear()}
        </p>

        <div className="footer-socials">
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
      </div>
    </footer>
  );
}