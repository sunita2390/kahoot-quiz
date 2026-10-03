import { useState } from "react";

const APPLE = "https://apps.apple.com/app/apple-store/id1131203560";
const PLAY = "https://play.google.com/store/apps/details?id=no.mobitroll.kahoot.android";
const KIDS_APPLE = "https://apps.apple.com/app/apple-store/id6444439181";
const KIDS_PLAY = "https://play.google.com/store/apps/details?id=com.kahoot.kids";
const BADGE = "https://kahoot.com/wp-content/themes/kahoot2017/assets/img/";

const NAV = ["HOME", "Social Gatherings", "Learning for Kids", "Study", "Plans & Pricing", "Explore Content", "Join", "Start for FREE", "Log in", "EN"];

const FEATURES = [
  { id: "create", title: "Create: Build a quiz on anything", color: "red",
    text: "Make your own quiz, trivia game, or study set in minutes, on any topic, in different languages. Great for teachers building lessons, friends planning a game night, or students turning notes into a revision tool.",
    mock: "create" },
  { id: "host", title: "Host: Run a live game with your group", color: "blue",
    text: "Share a PIN and watch your players join in real time. Host in a classroom, on a big screen at a gathering, or over video call, Kahoot! works wherever your group is.",
    mock: "host" },
  { id: "play", title: "Play: Join any game instantly", color: "gold",
    text: "Got a PIN? You’re in. No account needed to play — just open the app or browser, enter the code, and you’re live. Players join from any device.",
    mock: "play" },
  { id: "learn", title: "Learn: Turn any content into a game", color: "green",
    text: "Upload your own material and Kahoot! turns it into flashcards or a quiz automatically. Or explore millions of ready-made kahoots across every subject, built by teachers, creators, and top brands.",
    mock: "learn" },
];

const FAQ = [
  ["What is the Kahoot! app?", "The Kahoot! app is a free quiz and trivia game app for iOS, Android, and macOS. It lets you create your own quiz games, host live sessions with friends, family, or colleagues, and browse millions of ready-to-play games on any topic."],
  ["Is Kahoot! free?", "Yes, Kahoot! is free to download and use. You can create quiz games, host live sessions, and access millions of ready-made kahoots at no cost. Kahoot!+ is our paid plan with larger player limits, premium games, more AI quiz creation, and more question types."],
  ["How do I download the Kahoot! app?", "Search for “Kahoot!” in the App Store (iPhone and iPad) or Google Play (Android). You can create a free account or log in to an existing one once it’s installed."],
  ["Does Kahoot! work on iPhone and Android?", "Yes. Players joining a session don’t need to download the app, they can join via browser using the game PIN. Only the host needs an account to run a game."],
  ["How can I use Kahoot! as a trivia app?", "Browse thousands of ready-to-play trivia games on history, pop culture, geography, sports, and more. Or build your own in minutes and challenge the people who think they know everything."],
  ["How can I use Kahoot! as a quiz game app?", "Run a quick icebreaker, test your friends, or host a full-length quiz night with a leaderboard. It works in person, online, and anywhere in between, with no special setup."],
  ["How can I use Kahoot! as a quiz maker app?", "Create your own quiz in minutes, add questions, set a timer, choose from multiple question types, and share it. Or let AI generate a full quiz from any topic."],
];

const CELEBRATIONS = [
  { title: "All celebrations", img: "https://kahoot.com/files/2026/04/All-celebrations.png" },
  { title: "Birthdays", img: "https://kahoot.com/files/2026/03/2603_Revamp-landing-pages_At-home_final-module-1.png" },
  { title: "Sports nights", img: "https://kahoot.com/files/2026/04/Sports-night.png" },
  { title: "Showing appreciation", img: "https://kahoot.com/files/2026/03/2603_Revamp-landing-pages_At-home_final-module-2.png" },
  { title: "Community events", img: "https://kahoot.com/files/2026/04/2603_Revamp-landing-pages_At-home_final-module-4-3.png" },
];

const FOOTER = {
  About: ["Contact us", "Company", "Careers", "News", "Press", "Events"],
  Solutions: ["For Businesses", "For Schools", "For Higher Education", "For Students", "For Family and Friends", "For Kids and Parents", "Buy Kahoot! gift card"],
  Resources: ["Help Center", "Blog", "Webinars", "Safety center", "Guides and resources", "Kahoot! Certified", "Educator Community"],
  "Legal and Compliance": ["Terms and Conditions", "Privacy Notice", "Trust Center", "Acceptable Use Policy", "Cookie Notice"],
};

const QR_ROWS = [
  "1111111011000100101111111","1000001000000100001000001","1011101010011110001011101",
  "1011101011011101101011101","1011101011110111101011101","1000001001000010101000001",
  "1111111010101010101111111","0000000001010001100000000","1111001010001011110011101",
  "0101100101010100000100010","1111011100010110101100000","1010000000000111101011100",
  "1011101011000110011010111","0100110111101011111110001","0110101111001100110010110",
  "1001000100101010111110001","0000101100010101111111111","0000000010111000100010101",
  "1111111001101000101010111","1000001000011011100010010","1011101000001010111111011",
  "1011101010010100011011111","1011101011111100111010110","1000001011011110011010100",
  "1111111010111110001111111",
];

function QrCode() {
  const n = QR_ROWS.length;
  return (
    <svg viewBox={`-1 -1 ${n + 2} ${n + 2}`} fill="#4b1689" shapeRendering="crispEdges" role="img" aria-label="QR code to download the Kahoot! app">
      {QR_ROWS.flatMap((row, y) =>
        [...row].map((c, x) => (c === "1" ? <rect key={x + "-" + y} x={x} y={y} width="1.02" height="1.02" /> : null))
      )}
    </svg>
  );
}

function StoreBadges({ apple, play, chrome = true }) {
  return (
    <div className="badges">
      <a href={apple}><img src={BADGE + "app-store-badge.svg"} alt="Download on the App Store" /></a>
      <a href={play}><img src={BADGE + "google-play-badge.svg"} alt="Get it on Google Play" /></a>
      {chrome && <a href="#"><img src={BADGE + "chrome-badge.svg"} alt="Download on the Chrome Store" /></a>}
    </div>
  );
}

function Mock({ type }) {
  if (type === "create")
    return (
      <div className="mock">
        <p className="mock-q">What’s the best inside joke?</p>
        <div className="answers">
          <span className="a red">◆ The llama</span><span className="a blue">▲ Tuesday</span>
          <span className="a gold">● Pineapple</span><span className="a green">■ Grandma</span>
        </div>
      </div>
    );
  if (type === "host")
    return (
      <div className="mock">
        <h4>Ecosystems</h4>
        <div className="cloud"><b>food web</b><i>producer</i><b>habitat</b><i>predator</i><b>biome</b><i>energy</i></div>
      </div>
    );
  if (type === "play")
    return (
      <div className="mock mock-play">
        <small>Join at kahoot.it</small>
        <strong>815493</strong>
        <div className="qr" />
      </div>
    );
  return (
    <div className="mock mock-learn">
      <div className="card-flash">Nervous system</div>
      <div className="card-flash two">Neuron → signal</div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(0);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="appbar">
        <span>Get the mobile app for the best Kahoot! experience!</span>
        <a href={APPLE}>Open</a>
      </div>

      <header className="header">
        <a className="logo" href="#top" aria-label="Kahoot!">K!</a>
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button>
        <nav className={"nav " + (menu ? "open" : "")}>
          {NAV.map((label) => <a key={label} href="#top">{label}</a>)}
        </nav>
      </header>

      <main id="main">
        <section className="hero">
          <div className="hero-text">
            <h1>Kahoot! app: quiz and trivia game for iPhone and Android</h1>
            <p>Create quiz games, host trivia nights, and learn something new with the Kahoot! app.</p>
            <p>Make your lessons, presentations or gatherings more engaging!</p>
            <h3>Kahoot!+ the best way to learn and play.</h3>
            <p className="promo">Get Kahoot!+ from $3/mo. Save 20%. Offer ends October 12.</p>
            <a className="btn-cta" href="#apps">Get started</a>
          </div>
          <div className="hero-visual">
            <i className="blob b-yellow" /><i className="blob b-green" />
            <i className="blob b-blue" /><i className="blob b-red" />
            <div className="qr-stack">
              <div className="qr-back one" /><div className="qr-back two" />
              <div className="qr-card"><QrCode /></div>
              <span className="scan">▦ Scan QR</span>
            </div>
          </div>
        </section>

        <section className="intro">
          <h2>One app. Create, host, play, and learn.</h2>
          <p>Whether you're a teacher building lessons, a student turning notes into a study tool, or a friend who takes quiz night a little too seriously, the Kahoot! app lets you create, host, play, and learn on any device, anywhere. Free to download and free to get started.</p>
        </section>

        {FEATURES.map((f, i) => (
          <section key={f.id} className={"feature " + (i % 2 ? "reverse" : "")}>
            <div className="feature-text">
              <h2>{f.title}</h2>
              <p>{f.text}</p>
            </div>
            <div className={"feature-visual " + f.color}><Mock type={f.mock} /></div>
          </section>
        ))}

        <section id="apps" className="download">
          <img src="https://kahoot.com/files/2026/06/Frame-1171275920.png" alt="Kahoot! app" />
          <div>
            <h2>Download the Kahoot! app for free and play across all your devices!</h2>
            <p>One app, unlimited fun</p>
            <StoreBadges apple={APPLE} play={PLAY} />
          </div>
        </section>

        <section className="download kids">
          <img src="https://kahoot.com/files/2026/06/image-455.png" alt="Kahoot! Kids" />
          <div>
            <h2>Download the Kids version of the Kahoot! app.</h2>
            <p>Kahoot! Kids: Learn and Play</p>
            <StoreBadges apple={KIDS_APPLE} play={KIDS_PLAY} />
          </div>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          {FAQ.map(([q, a], i) => (
            <div key={q} className="faq-item">
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {q}<span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p>{a}</p>}
            </div>
          ))}
        </section>

        <section className="celebrations">
          <h2>Bring fun to more special occasions with Kahoot!+</h2>
          <div className="grid">
            {CELEBRATIONS.map((c) => (
              <a key={c.title} href="#top" className="cel">
                <img src={c.img} alt={c.title} loading="lazy" />
                <h3>{c.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-cols">
          {Object.entries(FOOTER).map(([h, links]) => (
            <div key={h}>
              <h4>{h}</h4>
              <ul>{links.map((l) => <li key={l}><a href="#top">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>Copyright © 2026, Kahoot! All Rights Reserved.</span>
          <StoreBadges apple={APPLE} play={PLAY} chrome={false} />
        </div>
      </footer>

      <div className="sticky">
        <span>Host awesome get-togethers with Kahoot!+. <b>Get Kahoot!+ from $3/mo. Save 20%.</b></span>
        <a href="#top">Buy now</a>
      </div>
    </>
  );
}