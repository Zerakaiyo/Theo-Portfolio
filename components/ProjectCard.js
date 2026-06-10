export default function ProjectCard({ project, variant = "wide" }) {
  const isVertical = variant === "vertical";

  return (
    <article className="group">
      <div
        className={`video-card-gradient relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition duration-500 group-hover:scale-[1.01] group-hover:border-white/25 ${
          isVertical ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-bone backdrop-blur">
          {project.status}
        </div>
        <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm uppercase tracking-[0.18em] text-bone backdrop-blur transition group-hover:bg-white group-hover:text-ink">
          Play
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-medium text-bone">{project.title}</h3>
          <p className="mt-1 text-sm text-fog">{project.role}</p>
        </div>
        <p className="shrink-0 text-right text-xs uppercase tracking-[0.18em] text-fog">{project.type}</p>
      </div>
    </article>
  );
}
