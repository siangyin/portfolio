import ProjectCard from "../ui/ProjectCard"
import { projects } from "../../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 font-mono text-sm text-green-500">03.</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Real-world products, dashboards, and tools that show frontend
            execution, product thinking, and clean UI delivery.
          </p>
        </div>

        <a
          href="#contact"
          className="hidden text-sm font-semibold transition hover:text-green-500 md:inline-flex"
        >
          Work with me →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
