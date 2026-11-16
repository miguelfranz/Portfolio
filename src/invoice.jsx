import "./invoice.css";


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

                <img className="cs-hero" src="/src/assets/invoice.png" alt="CityLink on desktop, laptop, tablet and phone" />

                <header className="cs-head">
                    <p className="cs-brand">Invoice Intake Agent</p>
                    <p className="cs-tag">Automated invoice processing</p>
                </header>

                <div className="cs-grid">
                    <aside>
                        <h2>Overview</h2>
                        <dl>
                            <dt>Role</dt><dd>Workflow Automation / LLM Agent Design</dd>
                            <dt>Timeline</dt><dd>3 weeks</dd>
                            <dt>Tools used</dt><dd>n8n / Claude (LLM agent) / IMAP Email / Slack / Google Sheets</dd>
                        </dl>
                       
                    </aside>

                    <div className="cs-text">
                        <h2>Background</h2>
                        <p>Supplier invoices rarely arrive in a tidy, consistent way. They come as PDF attachments, forwarded threads and plain-text emails, each laid out differently, and all of them land in a shared finance inbox. An invoice only becomes useful once someone opens it, reads the figures, and retypes them into the accounting system. Invoice Intake Agent imagines a quiet layer between the inbox and the books: one workflow that reads every invoice, pulls out the important details, and puts only the unusual ones in front of a person.</p>
                        <h2>Problem</h2>
                        <p>The finance team spent a large part of each week opening emails, reading invoices and retyping supplier names, invoice numbers, dates and totals by hand. The work was repetitive, and small mistakes were easy to make: a mistyped total, a missed due date, or the same invoice entered twice. Unusual invoices, such as unexpected amounts or changed bank details, were also easy to miss when someone was working through a long queue.</p>
                        <br />
                        <p>The team already had a shared inbox and an accounting system, and they didn’t want to replace either. The solution had to work with those tools as they are, and it had to be clear enough that a non-technical teammate could follow what happens to each invoice and trust the result.</p>
                        <h2>Project Goals</h2>
                        <p>Design an automated invoice intake workflow that reads supplier emails and attachments, extracts the key fields into a structured record, checks the numbers, flags anything unusual for human review, and logs every invoice, so the finance team no longer retypes invoices by hand.</p>
                        <h2>Key Decision</h2>
                        <p>The LLM handles the messy part (reading varied layouts), while plain code handles the checks (maths, duplicates, thresholds). Keeping those separate means the checks are predictable, easy to explain to the finance team, and easy to adjust without touching the prompt.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}