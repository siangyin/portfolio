import { FiArrowRight, FiDownload } from "react-icons/fi"

const techStack = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"]

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:min-h-[calc(100vh-97px)] lg:grid-cols-[1fr_0.95fr] lg:py-20"
    >
      {/* Left Content */}
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Available for work
        </div>

        <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          I build practical web tools that solve{" "}
          <span className="relative inline-block text-green-500">
            real-world
            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-green-500/70" />
          </span>{" "}
          problems.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
          Frontend / Product Engineer focused on building clean, usable, and
          production-ready applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-black"
          >
            View Projects <FiArrowRight />
          </a>

          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-black/5 dark:hover:bg-white/10"
          >
            Download Resume <FiDownload />
          </a>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-sm text-muted">Tech I work with:</p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-card px-4 py-2 text-xs font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Terminal Card */}
      <div className="rounded-2xl border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40">
        <div className="flex items-center justify-between border-b px-5 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <span className="font-mono text-xs text-muted">siangyin.dev</span>
        </div>

        <div className="overflow-x-auto p-6 font-mono text-sm leading-7">
          <p className="text-green-500">$ whoami</p>

          <pre className="mt-4 whitespace-pre-wrap text-[13px] leading-7">
            {`{
  "name": "Siangyin",
  "role": "Frontend / Product Engineer",
  "location": "Malaysia",
  "focus": [
    "Building practical web applications",
    "Clean UI & great user experience",
    "Performance & scalability"
  ],
  "currently_building": [
    "Finance Tracker",
    "OTA Travel Platform",
    "AI-assisted tools"
  ]
}`}
          </pre>

          <p className="mt-4 text-green-500">$ |</p>
        </div>
      </div>
    </section>
  )
}
