import { Play } from 'lucide-react';

export default function ProjectCard({ project, tall = false }) {
  return (
    <article className="video-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 transition hover:border-white/25">
      <div className={`card-glow absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition duration-500`} />
      <div className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-white/12 via-white/[0.03] to-black ${tall ? 'aspect-[9/14]' : 'aspect-video'}`}>
        <div className="absolute inset-0 bg-grain bg-[length:18px_18px] opacity-20" />
        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/55">
          {project.format}
        </div>
        <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white/70">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/35 backdrop-blur-md">
            <Play className="play-dot h-4 w-4 transition" />
          </span>
          <span className="text-xs uppercase tracking-[0.24em]">Video placeholder</span>
        </div>
      </div>
      <div className="relative flex items-end justify-between gap-4 px-2 pb-2 pt-5">
        <div>
          <h3 className="text-lg text-[#f6f0e7]">{project.title}</h3>
          <p className="mt-1 text-sm text-white/45">{project.role}</p>
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-white/35">{project.year}</p>
      </div>
    </article>
  );
}
