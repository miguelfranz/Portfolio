import "./Certificates.css";

import cert1 from "./assets/cert1.pdf";
import cert3 from "./assets/cert3.pdf";
import cert2 from "./assets/cert2.pdf";
import cert4 from "./assets/cert4.pdf";
import cert5 from "./assets/Zapier.pdf";
import cert6 from "./assets/n8ncert.pdf";
const CERTIFICATES = [
  {
    title: "User Experience Design - Learn UI UX App Design",
    issuer: "Udemy",
    year: "2024",
    href: cert3,
  },
  { title: "Graphic Design Essentials", issuer: "Canva", year: "2024", href: cert1 },
  { title: "ASSOCIATE DATA ANALYST", issuer: "DataCamp", year: "2024", href: cert2 },
  { title: "AI Transformation Leaders: Make AI work for your whole company", issuer: "Zapier", year: "2026", href: cert4 },
  { title: "Zapier Academy", issuer: "Zapier", year: "2026", href: cert5 },
  { title: "Integrations: APIs & Connected Workflows", issuer: "n8n Academy", year: "2026", href: cert6 },
];

export default function Certificates() { 
  return (
    <section className="section wrap certificates" id="certificates">
      <div className="section-head">
        <h2>Certificates</h2>
        <p>Courses and credentials that back up the work.</p>
      </div>

      <ul className="cert-list">
        {CERTIFICATES.map((c, i) => (
          <li key={i}>
            <a className="panel-card cert-card" href={c.href} target="_blank" rel="noopener noreferrer">
              <span className="cert-mark" aria-hidden="true">{c.issuer[0]}</span>
              <span className="cert-text">
                <strong>{c.title}</strong>
                <small>{c.issuer}</small>
              </span>
              <span className="cert-meta">
                <span>{c.year}</span>
                <span className="cert-link">View ↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}