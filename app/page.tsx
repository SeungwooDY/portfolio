import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";

const skills = [
  { group: "Languages", items: ["Javascript/TypeScript", "Python", "Java", "C", "SQL", "Assembly", "Lean4"] },
  { group: "Frameworks", items: ["React", "Next.js", "Express.js", "Node.js", "Tailwind"] },
  { group: "APIs", items: ["Gemini", "Claude", "OpenWeather", "yFinance", "Stripe"] },
  { group: "Tools", items: ["Git", "Supabase", "Firebase", "Vercel", "Claude Code", "Codex"] },
];

const projects = [
  {
    title: "Overlink",
    blurb:
      "A Chrome extension that pulls the important bits — URLs, QR codes, event details, contact info — straight out of online presentations, so you never have to chase down the slides.",
    stack: ["Chrome Extension", "TypeScript", "Next.js", "Tesseract.js", "Claude API"],
    href: "https://overlink-web.vercel.app/",
  },
  {
    title: "Sonic Boom Simulator",
    blurb:
      "Built for a NASA client to spark student curiosity about the future of commercial supersonic flight. Reshape an aircraft, hear how loud your boom gets, and compare your design on the global leaderboard.",
    stack: ["Next.js", "React", "Simulation"],
    href: "https://sonic-boom-simulation.vercel.app/",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <section id="home" className="min-h-[88vh] flex flex-col sm:flex-row sm:items-center gap-10 py-24">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80 mb-4">
              Hello —
            </p>
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight">
              I{"'"}m <span className="gradient-text">Seungwoo Yoon</span>.
            </h1>
            <h2 className="mt-5 text-lg sm:text-2xl text-slate-300 max-w-2xl">
              Computer Science student at the{" "}
              <span className="text-white font-medium">University of Virginia</span>
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
            idea that crosses my mind. I primarily build full-stack web applications
            but I{"'"}m also enthusiastic about learning and expanding my skillset, 
            whether that{"'"}s in areas like embedded systems, game design, or Pickleball.
          </p>

          <div className="mt-10 space-y-6">
            {skills.map((s, idx) => (
              <div key={s.group}>
                <div className="text-xs uppercase tracking-wider text-cyan-300/80 mb-3 pl-1">
                  {s.group}
                </div>
                <div className="marquee">
                  <div className="marquee-viewport">
                    <div className={`marquee-track ${idx % 2 === 1 ? "reverse" : ""}`}>
                      {[...s.items, ...s.items, ...s.items, ...s.items].map((item, i) => (
                        <span key={`${item}-${i}`} className="skill-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
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
                companies. I{"'"}m building full-stack web apps end-to-end —
                React frontends, Express REST APIs, Firebase-backed data, and
                MVC-driven architecture — while practicing agile/scrum and
                client-facing delivery from proposal to final presentation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "JavaScript", "Node.js", "Express.js", "Firebase", "GitHub", "Agile/Scrum"].map((t) => (
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
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            Things I{"'"}ve built.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-xl p-6 block group"
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-semibold text-white">
                    {p.title}
                  </h4>
                  <span className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition">
                    →
                  </span>
                </div>
                <p className="mt-2 text-slate-300 leading-relaxed">{p.blurb}</p>
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
              </a>
            ))}
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
