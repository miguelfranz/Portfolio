import { useState, useEffect } from "react";
import "./App.css";
import About from "./About";
import Works from "./Works";
import Certificates from "./Certificates";
import Contact from "./Contact";
import miguel from "./assets/miguel.jpg";

const PROFILE = {
  name: "Carlos Miguel",
  intro:
    "I'm a full stack developer, UI/UX designer, and AI automation specialist, passionate about intuitive interfaces, thoughtful user experiences, and automations that remove repetitive work.",
  email: "carlosmiguelfrancisco1@gmail.com",
  resume: "src/assets/FRANCISCO_RESUME.pdf.pdf",
  photo: miguel,
  links: [
    ["GitHub", "https://github.com/miguelfranz"],
    ["LinkedIn", "https://www.linkedin.com/in/carlos-miguel-francisco-01a36a324/"],
  ],
};

const SECTIONS = [
  ["home", "Home"],
  ["about", "About"],
  ["work", "Works"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("portfolio-theme") || "dark"; } catch { return "dark"; }
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("portfolio-theme", theme); } catch { }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return active;
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(SECTIONS.map(([id]) => id));
  const initials = PROFILE.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <div className="portfolio">
      <header className="top">
        <nav className="wrap navbar" aria-label="Main">
          <div className="nav-links">
            {SECTIONS.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className={`theme-toggle ${theme}`}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "dark"}
              type="button"
            >
              <span className="theme-toggle-knob">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {theme === "dark" ? (
                    <path d="M19 15.5A8 8 0 0 1 8.5 5a8.5 8.5 0 1 0 10.5 10.5Z" fill="currentColor" />
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="4" fill="currentColor" />
                      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42m-11.3 11.3-1.42 1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </>
                  )}
                </svg>
              </span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <div className="wrap">
          <div className="hero" id="home">
            <section className="hero-content">
              <h1>Hi! I'm {PROFILE.name}</h1>
              <p className="bio">{PROFILE.intro}</p>

              <div className="hero-buttons">
                <a href="#work" className="primary-button">Explore my work <span>↗</span></a>
                <a href="#contact" className="secondary-button">Get in touch</a>
              </div>

              <div className="social-links">
                {[...PROFILE.links, ["Resume", PROFILE.resume]].map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label.toUpperCase()} ↗</a>
                ))}
              </div>
            </section>

            <section className="hero-visual" aria-label="Profile">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="profile-glow" />

              <div className="profile-frame">
                {PROFILE.photo
                  ? <img src={PROFILE.photo} alt={PROFILE.name} className="profile-image" />
                  : <div className="profile-initials">{initials}</div>}
              </div>

              <div className="floating-card design-card">
                <span className="card-icon">✳</span>
                <div><strong>UI/UX Design</strong><small>Thoughtful interfaces</small></div>
              </div>
              <div className="floating-card code-card">
                <span className="card-icon">&lt;/&gt;</span>
                <div><strong>Full stack</strong><small>Building for the web</small></div>
              </div>
              <div className="floating-card automation-card">
                <span className="card-icon">⚙</span>
                <div><strong>AI Automation</strong><small>Workflows that run</small></div>
              </div>

              <div className="visual-label">CREATIVE MINDSET · TECHNICAL SKILLS</div>
            </section>
          </div>
        </div>

        <About />
        <Works />
        <Certificates />
        <Contact email={PROFILE.email} links={PROFILE.links} />
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <span>{PROFILE.links.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noopener noreferrer">{l}</a>)}</span>
        </div>
      </footer>
    </div>
  );
}