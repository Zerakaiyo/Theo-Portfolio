import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, variant = "wide" }) {
  const columns = variant === "vertical" ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2";

  return (
    <div className={`grid gap-x-6 gap-y-12 ${columns}`}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} variant={variant} />
      ))}
    </div>
  );
}
