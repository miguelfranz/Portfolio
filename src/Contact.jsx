import { useState } from "react";
import "./Contact.css";

const INTERESTS = ["Web development", "UI/UX design", "AI automation", "Something else"];
const EMPTY = { name: "", email: "", interest: INTERESTS[0], message: "" };

export default function Contact({ email, links = [] }) {
    const [values, setValues] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

    const set = (key) => (e) => setValues({ ...values, [key]: e.target.value });

    const validate = () => {
        const next = {};
        if (!values.name.trim()) next.name = "Enter your name.";
        if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address.";
        if (values.message.trim().length < 10) next.message = "Write at least 10 characters.";
        return next;
    };

    const submit = async (e) => {
        e.preventDefault();
        const next = validate();
        setErrors(next);
        if (Object.keys(next).length) return;
        setStatus("sending");
        try {
            
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
            setValues(EMPTY);
        } catch {
            setStatus("failed");
        }
    };

    const field = (key, label, props = {}) => {
        const Tag = props.rows ? "textarea" : "input";
        return (
            <label>
                {label}
                <Tag
                    value={values[key]}
                    onChange={set(key)}
                    aria-invalid={!!errors[key]}
                    aria-describedby={errors[key] ? `${key}-error` : undefined}
                    {...props}
                />
                {errors[key] && <span className="contact-error" id={`${key}-error`}>{errors[key]}</span>}
            </label>
        );
    };

    return (
        <section className="section wrap contact" id="contact">
            <div className="panel-card contact-card">
                <div className="contact-info">
                    <h2>Let's work together</h2>
                    <p>Tell me what you're building. I reply within a day.</p>
                    <a className="contact-email" href={`mailto:${email}`}>{email}</a>
                    <div className="contact-links">
                        {links.map(([label, href]) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label.toUpperCase()} ↗</a>
                        ))}
                    </div>
                </div>

                <form onSubmit={submit} noValidate>
                    {field("name", "Name", { autoComplete: "name" })}
                    {field("email", "Email", { type: "email", autoComplete: "email" })}
                    <label>
                        I'm interested in
                        <select value={values.interest} onChange={set("interest")}>
                            {INTERESTS.map((i) => <option key={i}>{i}</option>)}
                        </select>
                    </label>
                    {field("message", "Message", { rows: 5 })}
                    <button className="primary-button contact-send" disabled={status === "sending"}>
                        {status === "sending" ? "Sending…" : "Send message"}
                    </button>
                    <p className="contact-status" role="status">
                        {status === "sent" && "Message sent. I'll reply within two days."}
                        {status === "failed" && `Message not sent. Try again, or email ${email}.`}
                    </p>
                </form>
            </div>
        </section>
    );
}