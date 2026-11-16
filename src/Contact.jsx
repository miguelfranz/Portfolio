import "./Contact.css";

export default function Contact({
    email = "carlosmiguelfrancisco1@gmail.com",
    phone = "+639516501637",
    links = [],
}) {
    const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

    return (
        <section className="section wrap contact" id="contact">
            <div className="panel-card contact-card">
                <div className="contact-info">
                    <h2>Let's work together</h2>
                    <p>Tell me what you're building. I reply within a day.</p>
                    <a className="contact-email" href={`mailto:${email}`}>{email}</a>
                    <a className="contact-phone" href={telHref}>{phone}</a>
                    <div className="contact-links">
                        {links.map(([label, href]) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label.toUpperCase()} ↗</a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}