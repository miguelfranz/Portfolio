import "./citylink.css";

// Put citylink-cdo-showcase.png and citylink-cdo.png in public/projects/
const STEPS = [
    { id: "empathize", n: "01", title: "Empathize", sub: "Exploring the User’s Needs" },
    { id: "define", n: "02", title: "Define", sub: "Establishing the User’s Needs and Problems" },
    { id: "ideate", n: "03", title: "Ideate", sub: "Creating the Framework" },
    { id: "prototype", n: "04", title: "Prototype", sub: "Let’s make the Design!" },
];

const ICONS = {
    empathize: <><circle cx="22" cy="22" r="10" /><path d="M6 56c0-12 8-18 16-18s16 6 16 18" /><circle cx="43" cy="26" r="9" /><path d="M31 56c2-10 8-14 14-14s12 5 14 14" /></>,
    define: <><rect x="6" y="10" width="52" height="44" rx="3" /><rect x="14" y="30" width="10" height="10" /><path d="M32 40l6-10 6 10z" /><circle cx="51" cy="35" r="5" /></>,
    ideate: <><path d="M22 40c-6-4-8-9-8-14a18 18 0 0 1 36 0c0 5-2 10-8 14v6H22z" /><path d="M24 54h16M26 60h12M32 2v6M8 12l4 4M56 12l-4 4" /></>,
    prototype: <><rect x="18" y="6" width="28" height="52" rx="6" /><path d="M28 12h8M24 24h16M24 32h16M24 40h10" /><circle cx="32" cy="50" r="2.5" /></>,
};

const GOALS = [
    "Discover how riders in Cagayan de Oro plan trips today, and the habits they already have.",
    "Identify pain points and unmet needs when finding a route, transferring and paying the fare.",
];
const COMPETITORS = [
    ["Google Maps", "Indirect", "Walking directions and live traffic", "Shows few jeepney routes, with no route numbers or fares"],
    ["Moovit", "Indirect", "Public transport planning in many cities", "Little local coverage of jeepney and motorela routes"],
    ["Ride-hailing apps", "Direct", "Door to door, with the price shown up front", "Costs more than a jeepney and waits are long at peak hours"],
    ["Word of mouth", "Direct", "Free, and trusted because it comes from daily riders", "Inconsistent, and hard for newcomers"],
];
const PERSONAS = [
    ["Mika", "20, college student", "Rides every day from home to campus and learns routes from classmates.", "Wants to reach new places without asking around."],
    ["Ramon", "34, office worker", "Crosses the river to work every weekday.", "Wants to know when to leave when traffic builds."],
    ["Ella", "27, first-time visitor", "Is in the city for a weekend and doesn’t know the routes.", "Wants directions in landmarks, not street names."],
];
const FINDINGS = [
    ["Riders are price-conscious, but price isn’t the only factor.", "All six mentioned the fare, yet time and certainty mattered too. When running late, most would pay ₱90 for a motorela instead of ₱13 for a jeepney."],
    ["Most riders only know the routes they use every day.", "Going somewhere new meant asking a driver, a friend or a Facebook group, and three participants had boarded the wrong jeepney at least once."],
    ["Transfers and river crossings caused the most worry.", "Riders avoided trips with more than one transfer, and several skipped trips between Limketkai and Divisoria at rush hour because they couldn’t predict the wait."],
    ["Two participants had specific needs.", "", ["A student who carries long drawing tubes looks for jeepneys with room and wants that shown before boarding.", "The first-time visitor needed directions in landmarks like Gaston Park, not street names."]],
    ["There was a mix of tools.", "Most opened Google Maps for walking directions but didn’t trust it for jeepneys. They kept using Facebook groups and asking drivers because those answers came from people who ride every day."],
];
const QUOTES = [
    "I don’t mind a transfer. I just need to know where to get off and which jeep to take next.",
    "When it rains or traffic backs up at the bridge, I never know if I should wait or take a motorela.",
    "Google Maps tells me to walk two kilometers. It doesn’t tell me which jeep I can take.",
    "I want to see the fare before I get on, so I don’t have to ask the driver.",
];
const EMPATHY = [
    ["Says", ["“Which jeep do I take next?”", "“How much is the fare from here?”"]],
    ["Thinks", ["Will I be late if I wait for this jeep?", "Is a motorela safer this time?"]],
    ["Does", ["Asks drivers and friends for routes", "Checks Google Maps for walking directions", "Leaves early to be safe"]],
    ["Feels", ["Anxious about transfers", "Frustrated when traffic changes the plan", "Confident on routes they know"]],
];
const P_GOALS = ["Get to work on time without leaving too early", "Know the route and fare before boarding", "Plan around traffic on the river bridges"];
const P_PAINS = ["Can’t tell how long the wait will be", "Has no alternative when a route is jammed", "Route information is scattered across chats and apps"];
const HMW = [
    "How might we show which jeepney goes where?",
    "How might we make transfers feel simple?",
    "How might we warn riders about delays before they leave?",
];
const FLOW = [
    ["start", "Open CityLink", ""],
    ["step", "Enter From and To", "Landmarks like Divisoria"],
    ["step", "Choose when to leave", "Leave now or pick a time"],
    ["step", "See route options", "Jeepney, motorela or both"],
    ["decision", "Does a route fit?", "No: change the filters"],
    ["step", "Compare time, fare and transfers", ""],
    ["step", "Pick a route", ""],
    ["step", "Review the trip on the map", "Stops, transfers and walking"],
    ["decision", "Any delay alert?", "Yes: see another route"],
    ["step", "Start trip", ""],
    ["step", "Follow stop-by-stop updates", ""],
    ["end", "Arrive and rate the trip", ""],
];
const TEST_FINDINGS = [
    ["Confirmation.", "Several participants wanted a clearer confirmation when they picked a route. One didn’t like that the “leave now” time was pre-selected and wanted it to set only when she tapped it."],
    ["Confusing transfers.", "Several participants didn’t know what to look at first on the route detail screen because the map and the step list competed. They asked for a legend for the route colours and transfer icons."],
    ["Fare confusion.", "One participant wasn’t sure if the fare shown was for one jeepney or the whole trip. The totals need to say “Total fare” and show each leg underneath."],
    ["Sharing the trip.", "One participant said she likes to send her route to friends she is meeting. Another said it would help to see a photo of the landmark where she needs to get off."],
    ["It’s in the details.", "Several participants didn’t read “Show all routes” as a filter, so it needs rewording. Some of the fares and times were made up, so I will use realistic ones for the next prototype."],
    ["Saved places.", "Participants asked for home, work and school to fill in automatically. One was worried she would have to type her landmarks every time."],
];
const COLORS = [["Teal", "#0e7c7b"], ["Violet", "#7a3fb5"], ["Orange", "#e5883b"], ["Red", "#e5483b"], ["Ink", "#16222e"]];

export default function CityLink({ onBack }) {
    return (
        <main className="cs">
            <div className="wrap">
                <button type="button" className="cs-back" onClick={onBack}>← Back to works</button>

                <img className="cs-hero" src="/src/assets/citylinkcdo.png" alt="CityLink on desktop, laptop, tablet and phone" />

                <header className="cs-head">
                    <p className="cs-brand">CityLink</p>
                    <p className="cs-tag">Every ride in Cagayan de Oro, in one place</p>
                    <h1>Planning a Commute Around Cagayan de Oro</h1>
                </header>

                <div className="cs-grid">
                    <aside>
                        <h2>Overview</h2>
                        <dl>
                            <dt>Role</dt><dd>Product Design (UX/UI)</dd>
                            <dt>Timeline</dt><dd>6 weeks · 60+ hours</dd>
                            <dt>Tools used</dt><dd>Figma</dd>
                        </dl>
                    </aside>

                    <div className="cs-text">
                        <h2>Background</h2>
                        <p>Getting around Cagayan de Oro means jeepneys, motorelas and buses, and routes are numbered but rarely mapped. Riders learn them by word of mouth, fares change with distance, and the Cagayan de Oro River splits the city, so a trip from Limketkai to Divisoria often starts with asking a stranger. CityLink imagines a transit companion for the city: <strong>one place to plan a ride, see what it costs and know when to leave.</strong></p>
                        <h2>Problem</h2>
                        <p>People can’t easily tell which jeepney goes where, where to transfer, or how long a trip will take once traffic builds up on Corrales Avenue and the river bridges. Students and workers lose time, and visitors avoid public transport altogether.</p>
                        <p>Most people are on phones with limited data, so the experience has to be fast on small screens first, with a desktop version for planning at home. <strong>A route planner has to make sense of a system that has no timetable.</strong></p>
                        <h2>Project Goals</h2>
                        <p>Design a responsive route planner that helps people in Cagayan de Oro find a jeepney or motorela route, understand the fare and decide when to leave.</p>
                    </div>
                </div>
            </div>

            <section className="cs-process">
                <div className="wrap">
                    <h2>The Process</h2>
                    <ul>
                        {STEPS.map((s) => (
                            <li key={s.id}>
                                <a href={`#${s.id}`}>
                                    <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[s.id]}</svg>
                                    <span>{s.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="wrap cs-steps">
                {STEPS.map((s) => (
                    <section className="cs-step" id={s.id} key={s.id}>
                        <h2><span>{s.n} /</span> {s.title}</h2>
                        <p className="cs-sub">{s.sub}</p>

                        {s.id === "empathize" && (
                            <div className="cs-split">
                                <nav className="cs-toc" aria-label="Empathize sections">
                                    <h3>Overview</h3>
                                    <a href="#research">Research Approach</a>
                                    <a href="#competitive">Competitive Analysis</a>
                                    <a href="#interviews">Customer Interviews</a>
                                </nav>
                                <div className="cs-body">
                                    <h3 id="research">Research Approach</h3>
                                    <p>To understand how people really get around Cagayan de Oro, I used two research methods: a competitive analysis and customer interviews. For the competitive analysis, I looked at direct and indirect alternatives, and at the trends and obstacles in local public transport.</p>
                                    <p>The goals of my research were to:</p>
                                    <ul>{GOALS.map((g) => <li key={g}>{g}</li>)}</ul>

                                    <h3 id="competitive">Competitive Analysis</h3>
                                    <p>I compared four ways riders plan a trip today, looking at what each does well and where it leaves riders guessing.</p>
                                    <div className="cs-scroll">
                                        <table className="cs-table">
                                            <thead><tr><th>Option</th><th>Type</th><th>Strength</th><th>Gap</th></tr></thead>
                                            <tbody>{COMPETITORS.map((r) => <tr key={r[0]}>{r.map((d) => <td key={d}>{d}</td>)}</tr>)}</tbody>
                                        </table>
                                    </div>
                                    <p>I also drafted a provisional persona for each group of riders to start imagining who CityLink would serve before I met real people. With these in mind, I moved on to the interviews.</p>
                                    <div className="cs-cards">
                                        {PERSONAS.map(([n, a, d, g]) => <div className="panel-card" key={n}><h3>{n}</h3><p><strong>{a}</strong></p><p>{d}</p><p>{g}</p></div>)}
                                    </div>

                                    <h3 id="interviews">Customer Interviews</h3>
                                    <p>I interviewed 6 participants who ride public transport in the city at least three times a week. Ages ranged from 18 to 42; 4 identified as women and 2 as men. They included two college students, a market vendor, an office worker, a motorela driver and a first-time visitor.</p>
                                    <p>Here are the general insights I observed:</p>
                                    <ol className="cs-findings">
                                        {FINDINGS.map(([lead, rest, subs]) => (
                                            <li key={lead}>
                                                <strong>{lead}</strong> {rest}
                                                {subs && <ul>{subs.map((x) => <li key={x}>{x}</li>)}</ul>}
                                            </li>
                                        ))}
                                    </ol>
                                    <blockquote>“I only know the jeeps I take every day. For anywhere else, I just ask.”<cite>Ramon, 34, office worker</cite></blockquote>
                                </div>
                            </div>
                        )}

                        {s.id === "define" && (
                            <div className="cs-split">
                                <nav className="cs-toc" aria-label="Define sections">
                                    <h3>Overview</h3>
                                    <a href="#empathy-map">Empathy Map Synthesis</a>
                                    <a href="#persona">Persona Development</a>
                                </nav>
                                <div className="cs-body">
                                    <h3 id="empathy-map">Empathy Map Synthesis</h3>
                                    <p>During the interviews, patterns started to emerge. After I finished talking to my participants, I synthesized what I had gathered into an empathy map.</p>
                                    <div className="cs-two">
                                        {EMPATHY.map(([t, items]) => <div className="panel-card" key={t}><h3>{t}</h3><ul>{items.map((i) => <li key={i}>{i}</li>)}</ul></div>)}
                                    </div>
                                    {QUOTES.map((q) => <blockquote key={q}>“{q}”</blockquote>)}

                                    <h3 id="persona">Persona Development</h3>
                                    <div className="panel-card cs-persona">
                                        <div className="cs-avatar" aria-hidden="true">R</div>
                                        <div>
                                            <h3>Meet Ramon, the Time-Pressed Cross-River Commuter</h3>
                                            <p><strong>34 · Accounts officer · Lives in Lapasan, works near Divisoria</strong></p>
                                        </div>
                                    </div>
                                    <p>Ramon works downtown and lives on the other side of the Cagayan de Oro River, so every weekday he crosses it twice. He knows his two jeepney routes by heart, but anything outside them means asking around. Traffic on Corrales Avenue and the bridges can add 15 minutes to his trip, so he leaves early just in case. Cost matters, but being on time matters more, and he will pay for a motorela when he is running late. He wants to know which jeep to take, what it costs and when to leave, without opening three different apps.</p>
                                    <div className="cs-two">
                                        <div className="panel-card"><h3>Goals</h3><ul>{P_GOALS.map((g) => <li key={g}>{g}</li>)}</ul></div>
                                        <div className="panel-card"><h3>Frustrations</h3><ul>{P_PAINS.map((g) => <li key={g}>{g}</li>)}</ul></div>
                                    </div>

                                    <div className="panel-card cs-callout"><h3>Problem statement</h3><p>Commuters in Cagayan de Oro need a way to plan a trip across several jeepney and motorela routes, because they can’t easily tell which route to take, where to transfer or how long it will take.</p></div>
                                    <div className="cs-cards">
                                        {HMW.map((h) => <div className="panel-card" key={h}><p><strong>{h}</strong></p></div>)}
                                    </div>
                                    <p>Three design principles came out of this: <strong>clear over clever</strong>, <strong>fast on slow networks</strong>, and <strong>landmarks riders already know</strong>, like Divisoria, Limketkai and Xavier University, instead of street names.</p>
                                </div>
                            </div>
                        )}

                        {s.id === "ideate" && (
                            <div className="cs-split">
                                <nav className="cs-toc" aria-label="Ideate sections">
                                    <h3>Overview</h3>
                                    <a href="#user-flow">User Flow</a>
                                </nav>
                                <div className="cs-body">
                                    <h3 id="user-flow">User Flow</h3>
                                    <p>Riders in Cagayan de Oro already trust each other’s advice, so I wanted CityLink to feel like asking a friendly local who rides every day. With this in mind, I created a user flow that lets riders plan a trip and compare their options in the same place, so they can decide when a jeepney is enough and when a motorela is worth the extra fare. With clarity and control in mind, the flow also shows delays before the rider leaves, not after.</p>
                                    <ol className="cs-flow" aria-label="CityLink user flow">
                                        {FLOW.map(([type, t, d]) => (
                                            <li className={type} key={t}>{t}{d && <small>{d}</small>}</li>
                                        ))}
                                    </ol>
                                    <p>Three decisions came out of the flow and shaped the wireframes that followed: <strong>landmarks instead of street names</strong>, <strong>time and fare shown together</strong>, and <strong>delay alerts before departure</strong>.</p>
                                </div>
                            </div>
                        )}

                        {s.id === "prototype" && (
                            <div className="cs-split">
                                <nav className="cs-toc" aria-label="Prototype sections">
                                    <h3>Overview</h3>
                                    <a href="#sketches">Sketches &amp; Wireframes</a>
                                </nav>
                                <div className="cs-body">
                                    <h3 id="sketches">Sketches &amp; Wireframes</h3>

                                    <h4>Sketches</h4>
                                    <p>During my research, all six participants planned trips on their phones, usually while already out, and only checked on a laptop when planning ahead at home. So I decided to design for mobile first, then adapt it to a desktop version.</p>
                                    <p>In my sketches, I used patterns I saw during research. I liked how Moovit lists route options and how ride-hailing apps show the price up front. For my third sketch, I wanted to capture the feel of asking a friendly local, so the home screen opens with landmark shortcuts like Divisoria, Limketkai and Xavier University. In my fourth sketch, I combined these ideas into one design.</p>
    
                                    <img className="cs-shot" src="/src/assets/linksketch.png" alt="CityLink sketches" loading="lazy" />

                                    <h4>Low Fidelity Prototype</h4>
                                    <p>To make sure the route planning flow worked, I tested a low-fidelity prototype built from wireframes based on the user flow. I started by laying out every screen needed to finish a trip, then filled each one with only the information that step required.</p>
                                    <img className="cs-shot" src="/src/assets/citylinkwireframes.png" alt="CityLink wireframes" loading="lazy" />
                                  
                                   

                                    <h4>Low Fidelity Prototype Usability Test</h4>
                                    <p>I tested this prototype with 5 participants. The test showed me what was missing and what was confusing. Here are some of the findings I used to improve my high-fidelity prototype:</p>
                                    <ul className="cs-findings">
                                        {TEST_FINDINGS.map(([lead, rest]) => <li key={lead}><strong>{lead}</strong> {rest}</li>)}
                                    </ul>

                                   
                                </div>
                            </div>
                        )}
                    </section>
                ))}
            </div>
        </main>
    );
}