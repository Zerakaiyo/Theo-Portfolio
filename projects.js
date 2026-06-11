import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects, tall = false, driveUrl }) {
  return (
    <div className={`mt-10 grid gap-5 ${tall ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 xl:grid-cols-3'}`}>
      {projects.map((project) => <ProjectCard key={project.title} project={project} tall={tall} driveUrl={driveUrl} />)}
    </div>
  );
}
