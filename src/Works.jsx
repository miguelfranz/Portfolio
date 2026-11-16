import { useEffect, useState } from "react";
import "./Works.css";
import CityLink from "./citylink";
import leadtocrm from "./leadtocrm";
import invoiceintake from "./invoice";
import MeetingNotes from "./meet";


import img7200 from "./assets/7200.png";
import imgTimberNest from "./assets/TimberNest.png";
import imgTaskFlow from "./assets/TaskFlow.png";
import imgLumen from "./assets/LUMEN.png";
import imgIpon from "./assets/ipon.png";
import imgCityLink from "./assets/citylinkcdo.png";
import imgleadtocrm from "./assets/leadtocrm.png";
import imgInvoiceIntake from "./assets/invoice.png";
import imgMeetingNotes from "./assets/meet.png";


const TRACKS = [
    { id: "development", label: "Development", blurb: "Full stack products, from schema to interface." },
    { id: "design", label: "Design", blurb: "Case studies in research, UX, and visual design." },
    { id: "automation", label: "Automation", blurb: "AI workflows and integrations that save time." },
];

const WORK = {
    development: [
        {
            title: "7200 Hair Studio",
            year: "2026",
            desc: "Booking system and website for a hair studio: service selection, available time slots, and appointment management.",
            tags: ["Laravel", "MySQL", "Booking system", "Mockup", "React.js"],
            image: img7200,
            href: "https://7200hairstudio.vercel.app",
        },
        {
            title: "TimberNest",
            year: "2025",
            desc: "A desktop-based inventory management and POS system designed to streamline product tracking, stock monitoring, sales recording, and inventory management without requiring an internet connection.",
            tags: ["React.js", "MySQL", "Offline System"],
            image: imgTimberNest,
            href: "#",
        },
        {
            title: "TaskFlow",
            year: "2025",
            desc: "A web-based project management system designed to organize tasks, track project progress, and manage team activities: task assignments, project tracking, user management, and progress monitoring.",
            tags: ["Laravel", "Php", "MySQL", "Docker", "React.js"],
            image: imgTaskFlow,
            href: "#",
        },
    ],
    design: [
        {
            title: "Lumen Meditation App",
            year: "2026",
            desc: "Designed a mobile app that helps beginners build a daily meditation habit. Simplified onboarding from seven screens to three, and a test group of ten users rated it 4.6 out of 5.",
            tags: ["Mobile UI", "User research", "Prototyping"],
            image: imgLumen,
            href: "#",
        },
        {
            title: "Ipon Student Savings App",
            year: "2025",
            desc: "Designed a mobile app that helps students save from their daily allowance. Reworked the saving flow from five taps to two, and in testing with fifteen students, 11 reached their first weekly goal.",
            tags: ["Mobile UI", "Fintech", "Design system", "Prototyping"],
            image: imgIpon,
            href: "#",
        },
        {
            title: "CityLink CDO",
            year: "2023",
            desc: "A route-planning concept for commuters in Cagayan de Oro City. It maps jeepney and tricycle options from the port to the university, with transfers, fares and traffic alerts, tested with twelve daily commuters.",
            tags: ["UX", "Usability testing", "Wireframing", "Personal Project"],
            image: imgCityLink,
            href: "#",
            page: "citylink",
        },
    ],
    automation: [
        {
            title: "Lead-to-CRM Sync",
            year: "2025",
            desc: "Connects the web forms, calendar bookings, and CRM a sales team already used, so new leads appear as complete records with no copy-pasting. Duplicates are merged, and the right rep is notified in Slack within seconds.",
            tags: ['n8n', "HubSpot", "Google Calendar", "Slack"],
            image: imgleadtocrm,
            page: "leadtocrm",
        },
        {
            title: "Invoice Intake Agent",
            year: "2026",
            desc: "Replaced a manual routine where the finance team opened, read, and retyped supplier invoices into the accounting system. The agent now reads each email, pulls out the totals, and flags anything unusual. It saves about 12 hours a week.",
            tags: ["LLM Agents", "n8n"],
            image: imgInvoiceIntake,
            page: "invoiceintake",
        },
        {
            title: "Meeting Notes to Action Items",
            year: "2025",
            desc: "Replaced rewatching call recordings by hand. Whisper and Claude pull out decisions, owners, and deadlines, and Supabase stores them for search. Saves about 8 hours a week.",
            tags: ["Whisper", "Supabase", "Claude", "n8n"],
            image: imgMeetingNotes,
            page: "MeetingNotes",
        },
    ],
};


const PAGES = { citylink: CityLink, leadtocrm: leadtocrm, invoiceintake: invoiceintake, MeetingNotes: MeetingNotes };


function Thumb({ track, image }) {
    if (image) return <img src={image} alt="" loading="lazy" />;
    const s = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" };
    return (
        <svg viewBox="0 0 320 200" aria-hidden="true">
            {track === "development" && (
                <g {...s}>
                    <rect x="40" y="30" width="240" height="140" rx="10" opacity=".5" />
                    <path d="M40 56h240" opacity=".5" />
                    <path d="M64 80h70M80 100h110M80 120h60M64 140h90" />
                    <path d="M200 120h54" opacity=".4" />
                </g>
            )}
            {track === "design" && (
                <g {...s}>
                    <rect x="60" y="40" width="110" height="110" rx="12" opacity=".5" />
                    <circle cx="190" cy="100" r="52" />
                    <path d="M60 170h200" opacity=".4" />
                    <circle cx="60" cy="40" r="5" fill="currentColor" />
                    <circle cx="170" cy="150" r="5" fill="currentColor" />
                </g>
            )}
            {track === "automation" && (
                <g {...s}>
                    <rect x="30" y="76" width="56" height="48" rx="10" />
                    <rect x="132" y="40" width="56" height="48" rx="10" opacity=".5" />
                    <rect x="132" y="112" width="56" height="48" rx="10" opacity=".5" />
                    <rect x="234" y="76" width="56" height="48" rx="10" />
                    <path d="M86 100h20q10 0 10-10V80q0-16 16-16M86 100h20q10 0 10 10v10q0 16 16 16M188 64h26q20 0 20 24v12M188 136h26q20 0 20-24v-12" opacity=".7" />
                </g>
            )}
        </svg>
    );
}

export default function Works() {
    const [track, setTrack] = useState("development");
    const current = TRACKS.find((t) => t.id === track);
    const index = TRACKS.findIndex((t) => t.id === track);
    const [open, setOpen] = useState(null);
    const Page = open ? PAGES[open] : null;

    useEffect(() => {
        if (!open) return;
        const onEsc = (e) => e.key === "Escape" && setOpen(null);
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onEsc);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onEsc);
        };
    }, [open]);

    const onKey = (e) => {
        if (e.key === "ArrowRight") setTrack(TRACKS[(index + 1) % TRACKS.length].id);
        if (e.key === "ArrowLeft") setTrack(TRACKS[(index + TRACKS.length - 1) % TRACKS.length].id);
    };

    return (
        <section className="section wrap works" id="work">
            <div className="section-head">
                <h2>Works</h2>
                <p>Switch between tracks to see development, design, and automation projects.</p>
            </div>

            <div className="works-switch" role="tablist" aria-label="Work type" data-index={index} onKeyDown={onKey}>
                <span className="works-pill" aria-hidden="true" />
                {TRACKS.map((t) => (
                    <button
                        key={t.id}
                        role="tab"
                        id={`tab-${t.id}`}
                        aria-selected={track === t.id}
                        aria-controls="works-panel"
                        tabIndex={track === t.id ? 0 : -1}
                        onClick={() => setTrack(t.id)}
                        type="button"
                    >
                        {t.label}
                    </button>
                ))}
            </div>
            <p className="works-blurb">{current.blurb}</p>

            <div className="works-grid" key={track} id="works-panel" role="tabpanel" aria-labelledby={`tab-${track}`}>
                {WORK[track].map((p) => (
                    <a
                        className="panel-card works-card"
                        href={p.href}
                        key={p.title}
                        onClick={p.page ? (e) => { e.preventDefault(); setOpen(p.page); } : undefined}
                    >
                        <div className="works-thumb"><Thumb track={track} image={p.image} /></div>
                        <div className="works-body">
                            <div className="works-row"><h3>{p.title}</h3><span>{p.year}</span></div>
                            <p>{p.desc}</p>
                            <ul>{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                        </div>
                    </a>
                ))}
            </div>

            {Page && (
                <div className="cs-overlay">
                    <Page onBack={() => setOpen(null)} />
                </div>
            )}
        </section>
    );
}