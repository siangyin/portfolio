import { FiArrowRight, FiExternalLink } from "react-icons/fi"
import type { Project } from "../../data/projects"

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40">
      {/* Image */}
      <div className="aspect-16/10 overflow-hidden border-b bg-black/5 dark:bg-white/5">
        <img
          src={project.image}
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border bg-black/5 px-3 py-1 text-xs font-medium dark:bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs font-medium text-green-500">{project.type}</p>

        <h3 className="mt-2 text-xl font-bold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-3 min-h-18 text-sm leading-6 text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t pt-4 text-sm font-semibold">
          <a
            href={project.caseStudyUrl}
            className="inline-flex items-center gap-2 transition hover:text-green-500"
          >
            View Case Study <FiArrowRight />
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="inline-flex items-center gap-2 text-muted transition hover:text-green-500"
            >
              Live Demo <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
