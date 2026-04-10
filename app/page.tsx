import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import SkillsMarquee, {
  type Project as SkillProject,
  type SkillGroup,
} from "../components/SkillsMarquee";
import PickleballTrigger from "../components/PickleballTrigger";

type Project = {
  id: string;
  title: string;
  blurb: string;
  stack: string[];
  clickable: boolean;
  href?: string;
  role?: string;
};

const projects: Project[] = [
  {
    id: "overlink",
    title: "Overlink",
    blurb:
      "A Chrome extension that pulls important information (URLs, QR codes, event details, contact info) straight out of online presentations, so you never have to chase down the slides.",
    stack: [
      "Chrome Extension",
      "TypeScript",
      "Next.js",
      "Tesseract.js",
      "Anthropic API",
    ],
    clickable: true,
    href: "https://overlink-web.vercel.app/",
    role: "Developer · March 2026 – present",
  },
  {
    id: "sonic",
    title: "Sonic Boom Simulator",
    blurb:
      "Built for a NASA client to spark student curiosity about the future of commercial supersonic flight. Reshape an aircraft, hear how loud your boom gets, and compare your design on the global leaderboard.",
    stack: ["Next.js", "Python"],
    clickable: true,
    href: "https://sonic-boom-simulation.vercel.app/",
    role: "Full-stack",
  },
  {
    id: "stockd",
    title: "Stock'd",
    blurb:
      "A HooHacks project: a stock-shock simulator using yFinance data to model how sudden moves in individual companies or sectors ripple through an S&P 500 portfolio. Crunched 250,000+ Pearson correlation calculations to map cross-company relationships.",
    stack: ["Next.js", "Python", "yFinance API", "Gemini API"],
    clickable: false,
    role: "HooHacks · March 2026",
  },
  {
    id: "archr",
    title: "Archr",
    blurb:
      "Shipped an in-app email feature on top of Google's Gmail API, including a secure OAuth 2.0 flow (token exchange, refresh handling, scope management) and Google Cloud Console setup for compliant authorization. Also refactored the site's routing for maintainability.",
    stack: ["Gmail API", "OAuth 2.0", "Google Cloud", "Anthropic API"],
    clickable: false,
    role: "Software Engineer · Oct 2025 – Jan 2026",
  },
  {
    id: "crisiskit",
    title: "CrisisKit",
    blurb:
      "A HoyaHacks project that uses the Gemini API with structured JSON prompts to generate context-aware emergency supply recommendations, paired with OpenWeather data for location-specific conditions, aiming to reduce panic buying and inequitable access to essentials.",
    stack: ["Gemini API", "OpenWeather"],
    clickable: false,
    role: "HoyaHacks · January 2026",
  },
];

const skillProjects: SkillProject[] = projects.map((p) => ({
  id: p.id,
  title: p.title,
  clickable: p.clickable,
  href: p.href,
}));

const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      {
        name: "JavaScript/TypeScript",
        description:
          "The language of the web — powers almost every interactive site, including this one. TypeScript adds type safety on top.",
        usedIn: ["overlink", "sonic", "archr", "crisiskit", "stockd"],
      },
      {
        name: "Python",
        description:
          "A readable, versatile language I reach for when working with data, physics, or quick prototypes.",
        usedIn: ["stockd", "sonic"],
      },
      {
        name: "Java",
        description:
          "A statically-typed, object-oriented workhorse used across enterprise software and Android.",
        usedIn: ["classwork"],
      },
      {
        name: "C",
        description:
          "A low-level systems language that runs close to the hardware — great for understanding how computers really work.",
        usedIn: ["classwork"],
      },
      {
        name: "C++",
        description:
          "C with object-oriented features and higher-level abstractions. I used it heavily in FRC/FTC robotics.",
        usedIn: ["robotics"],
      },
      {
        name: "SQL",
        description:
          "The standard language for querying and shaping relational databases.",
        usedIn: ["overlink", "sonic", "stockd", "archr", "crisiskit"],
      },
      {
        name: "Assembly",
        description:
          "The lowest-level human-readable code, one step above raw machine instructions.",
        usedIn: ["classwork"],
      },
      {
        name: "Lean4",
        description:
          "A modern theorem prover and functional language for formal mathematics and verified programs.",
        usedIn: ["classwork"],
      },
    ],
  },
  {
    group: "Frameworks",
    items: [
      {
        name: "React",
        description:
          "A JavaScript library for building interactive UIs out of small, reusable components.",
        usedIn: ["overlink", "sonic", "archr", "crisiskit", "stockd"],
      },
      {
        name: "Next.js",
        description:
          "A production-ready React framework with routing, server rendering, and sensible defaults baked in.",
        usedIn: ["overlink", "sonic", "archr", "crisiskit", "stockd"],
      },
      {
        name: "Express.js",
        description:
          "A minimal Node.js framework for building REST APIs and backend services. Part of my Forge training stack.",
        usedIn: ["Forge"],
      },
      {
        name: "Node.js",
        description:
          "A runtime that lets JavaScript run outside the browser — used for servers, build tools, and scripting.",
        usedIn: ["Forge"],
      },
      {
        name: "Tailwind CSS",
        description:
          "A utility-first CSS framework that lets you style directly in your markup without writing custom CSS.",
        usedIn: ["overlink", "stockd", "archr", "crisiskit"],
      },
    ],
  },
  {
    group: "APIs",
    items: [
      {
        name: "Anthropic API",
        description:
          "Anthropic's LLM API for structured reasoning, extraction, and generation.",
        usedIn: ["overlink", "archr"],
      },
      {
        name: "Gemini API",
        description:
          "Google's multimodal LLM API for text, image, and structured JSON outputs.",
        usedIn: ["crisiskit", "stockd"],
      },
      {
        name: "Gmail API",
        description:
          "Google's API for reading, sending, and managing email programmatically.",
        usedIn: ["archr"],
      },
      {
        name: "OAuth 2.0",
        description:
          "The industry standard for secure delegated authorization — how apps ask for access to your data without your password.",
        usedIn: ["archr"],
      },
      {
        name: "OpenWeather",
        description:
          "A weather API for current conditions and forecasts by location.",
        usedIn: ["crisiskit"],
      },
      {
        name: "yFinance",
        description:
          "A Python library for pulling live and historical stock market data from Yahoo Finance.",
        usedIn: ["stockd"],
      },
      {
        name: "Stripe",
        description:
          "Developer-friendly payments infrastructure for accepting money on the web.",
        usedIn: ["overlink"],
      },
    ],
  },
  {
    group: "Tools",
    items: [
      {
        name: "Git",
        description:
          "The version control system that tracks every change and makes collaboration sane.",
        usedIn: ["overlink", "sonic", "stockd", "archr", "crisiskit"],
      },
      {
        name: "GitHub",
        description:
          "The platform for hosting Git repos, reviewing code, and shipping software together.",
        usedIn: ["overlink", "sonic", "stockd", "archr", "crisiskit"],
      },
      {
        name: "Supabase",
        description:
          "An open-source Firebase alternative built on Postgres — auth, realtime, and storage included.",
        usedIn: ["archr", "stockd", "sonic", "overlink", "crisiskit"],
      },
      {
        name: "Firebase",
        description:
          "Google's backend-as-a-service: NoSQL data, authentication, and hosting in one SDK. Part of my Forge training stack.",
        usedIn: ["Forge"],
      },
      {
        name: "Tesseract.js",
        description:
          "A JavaScript OCR engine that pulls text out of images directly in the browser.",
        usedIn: ["overlink"],
      },
      {
        name: "Google Cloud",
        description:
          "Google's cloud platform — I used it to configure API credentials, scopes, and OAuth consent flows.",
        usedIn: ["archr"],
      },
      {
        name: "Vercel",
        description:
          "A hosting platform optimized for Next.js with instant, zero-config deploys.",
        usedIn: ["overlink", "sonic"],
      },
      {
        name: "Anthropic Code",
        description:
          "Anthropic's terminal-based AI coding assistant — a pair programmer in the CLI.",
        usedIn: [],
      },
      {
        name: "Codex",
        description:
          "OpenAI's coding-focused model and CLI for AI-assisted development.",
        usedIn: [],
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <section
          id="home"
          className="min-h-[88vh] flex flex-col sm:flex-row sm:items-center gap-10 py-24"
        >
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80 mb-4">
              Hello —
            </p>
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight">
              I{"'"}m <span className="gradient-text">Seungwoo Yoon</span>.
            </h1>
            <h2 className="mt-5 text-lg sm:text-2xl text-slate-300 max-w-2xl">
              Computer Science student at the{" "}
              <span className="text-white font-medium">
                University of Virginia
              </span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg border border-white/15 text-slate-200 hover:bg-white/5 transition"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
              <Image
                src="/me.jpg"
                alt="Seungwoo Yoon"
                fill
                priority
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about-me" className="py-24">
          <h3 className="text-sm uppercase tracking-[0.25em] text-purple-300/80 mb-3">
            About
          </h3>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            A little about me.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            I study computer science at UVA and love building solutions to any
            idea that crosses my mind. I primarily build full-stack web
            applications but I{"'"}m also enthusiastic about learning and
            expanding my skillset, whether that{"'"}s in areas like embedded
            systems, game design, or{" "}
            <PickleballTrigger>Pickleball</PickleballTrigger>.
          </p>
          <p className="text-slate-500 text-sm mt-4 max-w-3xl">
            Tip: click any skill below to see a plain-English description and
            the projects where I{"'"}ve used it.
          </p>

          <div className="mt-10">
            <SkillsMarquee groups={skills} projects={skillProjects} />
          </div>
        </section>

        {/* Currently */}
        <section id="currently" className="py-24">
          <h3 className="text-sm uppercase tracking-[0.25em] text-purple-300/80 mb-3">
            Currently
          </h3>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Where I{"'"}m at right now.
          </h2>
          <div className="card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-shrink-0 relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 bg-white">
              <Image
                src="/ForgeLogo.jpg"
                alt="Forge"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-cyan-300/80 mb-1">
                Currently
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-white">
                SWE Fellow · Forge Launch Internship Program
              </div>
              <div className="text-slate-400 mt-1">
                Training now · Internship placement Summer 2026
              </div>
              <p className="text-slate-300 mt-3 leading-relaxed max-w-2xl">
                An immersive fellowship pairing soft-skills and technical
                training with a summer internship at one of 200+ partner
                companies. I{"'"}m building full-stack web apps end-to-end {"("}
                React frontends, Express REST APIs, Firebase-backed data, and
                MVC-driven architecture{")"} while practicing agile/scrum and
                client-facing delivery from proposal to final presentation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "Express.js",
                  "Firebase",
                  "GitHub",
                  "Agile/Scrum",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <h3 className="text-sm uppercase tracking-[0.25em] text-purple-300/80 mb-3">
            Selected Work
          </h3>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
            Things I{"'"}ve built.
          </h2>
          <p className="text-slate-500 text-sm mb-10">
            Cards with an <span className="text-purple-300">arrow</span> are
            live — click through. Others are case studies.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p) => {
              const content = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {p.title}
                      </h4>
                      {p.role && (
                        <div className="text-xs text-slate-500 mt-0.5">
                          {p.role}
                        </div>
                      )}
                    </div>
                    {p.clickable ? (
                      <span className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition text-xl">
                        →
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400">
                        Case study
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    {p.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              );
              return p.clickable ? (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card rounded-xl p-6 block group"
                >
                  {content}
                </a>
              ) : (
                <div key={p.id} className="card rounded-xl p-6">
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <h3 className="text-sm uppercase tracking-[0.25em] text-purple-300/80 mb-3">
            Contact
          </h3>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Let{"'"}s build something.
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl">
            I{"'"}m always up for a good problem, an interesting internship, or
            just a conversation about something you{"'"}re excited about.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:tnp4kt@virginia.edu"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition"
            >
              Email me
            </a>
            <a
              href="https://github.com/SeungwooDY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-white/15 text-slate-200 hover:bg-white/5 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/seungwoo-yoon/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-white/15 text-slate-200 hover:bg-white/5 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-slate-500 border-t border-white/5">
          © {new Date().getFullYear()} Seungwoo Yoon
        </footer>
      </main>
    </>
  );
}
