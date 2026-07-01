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
      {
        name: "MCP",
        description: 
          "Open-source standard created by Anthropic that allows AI assistants to securely connect directly to external data sources and tools",
        usedIn: ["Within"],
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
      <main className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <section
          id="home"
          className="flex flex-col sm:flex-row sm:items-center gap-8 pt-20 pb-16"
        >
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/me.jpg"
                alt="Seungwoo Yoon"
                fill
                priority
                sizes="112px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Seungwoo Yoon
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Computer Science student at the University of Virginia
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
              <a
                href="#projects"
                className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about-me" className="py-12 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-600 leading-relaxed">
            I study computer science at UVA and love building solutions to any
            idea that crosses my mind. I primarily build full-stack web
            applications but I{"'"}m also enthusiastic about learning and
            expanding my skillset, whether that{"'"}s in areas like embedded
            systems, game design, or{" "}
            <PickleballTrigger>Pickleball</PickleballTrigger>.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            Tip: click any skill below to see a plain-English description and
            the projects where I{"'"}ve used it.
          </p>

          <div className="mt-8">
            <SkillsMarquee groups={skills} projects={skillProjects} />
          </div>
        </section>

        {/* Currently */}
        <section id="currently" className="py-12 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-5">Currently</h2>
          <div className="card p-6 flex flex-col sm:flex-row gap-5">
            <div className="flex-shrink-0 relative w-14 h-14 rounded-lg overflow-hidden border border-gray-200 bg-white">
              <Image
                src="/ForgeLogo.jpg"
                alt="Forge"
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="text-lg font-semibold text-gray-900">
                SWE Fellow · Forge Launch Internship Program
              </div>
              <div className="text-gray-400 text-sm mt-0.5">
                Training now · Internship placement Summer 2026
              </div>
              <p className="text-gray-600 mt-3 leading-relaxed">
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
                    className="text-xs px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Projects</h2>
          <p className="text-gray-400 text-sm mb-6">
            Cards with an arrow are live — click through. Others are case
            studies.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => {
              const content = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{p.title}</h3>
                      {p.role && (
                        <div className="text-xs text-gray-400 mt-0.5">
                          {p.role}
                        </div>
                      )}
                    </div>
                    {p.clickable ? (
                      <span className="text-gray-400 text-lg">→</span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-gray-400">
                        Case study
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {p.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-gray-600"
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
                  className="card p-5 block"
                >
                  {content}
                </a>
              ) : (
                <div key={p.id} className="card p-5">
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600">
            I{"'"}m always up for a good problem, an interesting internship, or
            just a conversation about something you{"'"}re excited about.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:tnp4kt@virginia.edu"
              className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition"
            >
              Email me
            </a>
            <a
              href="https://github.com/SeungwooDY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/seungwoo-yoon/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-200">
          © {new Date().getFullYear()} Seungwoo Yoon
        </footer>
      </main>
    </>
  );
}
