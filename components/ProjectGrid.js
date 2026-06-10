import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects, tall = false }) {
  return (
    <div className={`grid gap-5 ${tall ? 'sm:grid-cols-2 lg:grid-cols-4' : 'lg:grid-cols-2'}`}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} tall={tall} />
      ))}
    </div>
  );
}
