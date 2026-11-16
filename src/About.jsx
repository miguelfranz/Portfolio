import "./About.css";

const SERVICES = [
  {
    glyph: "</>",
    title: "Web development",
    desc: "Full stack apps from database to interface, built to be fast and easy to maintain.",
    points: ["React front ends", "APIs and databases", "Deployment and testing"],
  },
  {
    glyph: "✳",
    title: "UI/UX design",
    desc: "Research, flows, and polished interfaces designed around how people actually use them.",
    points: ["User research", "Wireframes and prototypes", "Design systems"],
  },
  {
    glyph: "⚙",
    title: "AI automation",
    desc: "Workflows and agents that remove repetitive work and connect the tools you already use.",
    points: ["LLM-powered workflows", "Tool integrations", "Process mapping"],
  },
];

const TECH = [
  {
    id: "development", title: "Development", note: "Building the product", color: "#4f8cff", glyph: "</>",
    groups: [
      ["Front end", [["React", "code"], ["Next.js", "bolt"], ["TypeScript", "code"], ["HTML & CSS", "code"], ["React Native", "code"]]],
      ["Back end", [["Laravel", "bolt"], ["Node.js", "cube"], ["MySQL", "db"], ["PostgreSQL", "db"], ["REST APIs", "terminal"],["PHP", "code"]]],
      ["Workflow", [["Git", "branch"], ["Docker", "cube"]]],
    ],
  },
  {
    id: "design", title: "Design", note: "Shaping how it feels", color: "#b57cff", glyph: "✳",
    groups: [
      ["Craft", [["Figma", "frame"], ["Prototyping", "pen"], ["Design systems", "layers"]]],
      ["Research", [["User research", "eye"], ["Usability testing", "eye"], ["Wireframing", "frame"], ["Accessibility", "person"]]],
    ],
  },
  {
    id: "automation", title: "Automation", note: "Removing repetitive work", color: "#ff8a3d", glyph: "⚙",
    groups: [
      ["AI", [["Claude API", "sparkle"], ["LLM agents", "chat"], ["Prompt engineering", "sparkle"]]],
      ["Integrations", [["n8n", "nodes"], ["Zapier", "bolt"], ["Webhooks", "link"], ["Python", "terminal"], ["Supabase", "db"]]],
    ],
  },
];

const ICONS = {
  code: <><polyline points="8 6 2 12 8 18" /><polyline points="16 6 22 12 16 18" /></>,
  cube: <><path d="M12 2l9 5v10l-9 5-9-5V7z" /><path d="M12 12l9-5M12 12v10M12 12L3 7" /></>,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  db: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  terminal: <><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></>,
  nodes: <><circle cx="5" cy="12" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 12h4l6-5M11 12l6 5" /></>,
  branch: <><circle cx="6" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="8" r="2" /><path d="M6 7v10M18 10c0 5-12 2-12 7" /></>,
  frame: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 9v12" /></>,
  pen: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />,
  layers: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  eye: <><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></>,
  person: <><circle cx="12" cy="4" r="2" /><path d="M4 8h16M12 8v6M8 22l4-8 4 8" /></>,
  sparkle: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />,
  chat: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  link: <><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" /><path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" /></>,
};

function Tool({ name, icon }) {
  return (
    <li className="tool">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ICONS[icon]}
      </svg>
      {name}
    </li>
  );
}

function Technologies() {
  return (
    <div className="tech">
      <div className="tech-head">
        <h3>Tools and technologies</h3>
        <p>Grouped by discipline, the same three tracks as my work.</p>
      </div>

      <div className="tech-grid">
        {TECH.map((t) => {
          const count = t.groups.reduce((n, [, tools]) => n + tools.length, 0);
          return (
            <article className="panel-card tech-panel" key={t.id} style={{ "--c": t.color }}>
              <header>
                <span className="tech-glyph" aria-hidden="true">{t.glyph}</span>
                <div>
                  <h4>{t.title}</h4>
                  <small>{t.note}</small>
                </div>
                <span className="tech-count">{count} tools</span>
              </header>

              {t.groups.map(([label, tools]) => (
                <section key={label}>
                  <h5>{label}</h5>
                  <ul>{tools.map(([n, i]) => <Tool key={n} name={n} icon={i} />)}</ul>
                </section>
              ))}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="section wrap about" id="about">
      <div className="section-head">
        <h2>What I do</h2>
        <p>Three disciplines that cover a product from the first sketch to automated operation.</p>
      </div>

      <div className="about-services">
        {SERVICES.map((s) => (
          <article className="panel-card about-card" key={s.title}>
            <span className="about-glyph" aria-hidden="true">{s.glyph}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </article>
        ))}
      </div>

      <Technologies />
    </section>
  );
}