import { ExternalLink, Play } from 'lucide-react';

export default function ProjectCard({ project, tall = false, driveUrl }) {
  const card = (
    <article className="video-card group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-3 transition hover:border-white/25">
      <div className="card-glow absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition duration-500" />
      <div className={`relative overflow-hidden rounded-[1.1rem] border border-white/10 bg-gradient-to-br from-white/12 via-white/[0.03] to-black ${tall ? 'aspect-[9/14]' : 'aspect-video'}`}>
        <div className="absolute inset-0 bg-grain bg-[length:18px_18px] opacity-20" />
        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/55">
          {project.format}
        </div>
        <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white/70">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/35 backdrop-blur-md">
            {driveUrl ? <ExternalLink className="play-dot h-4 w-4 transition" /> : <Play className="play-dot h-4 w-4 transition" />}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.24em]">{driveUrl ? 'Open Drive Folder' : 'Video Placeholder'}</span>
        </div>
      </div>
      <div className="relative flex items-end justify-between gap-4 px-2 pb-2 pt-5">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-[#f6f0e7]">{project.title}</h3>
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/45">{project.role}</p>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">{project.year}</p>
      </div>
    </article>
  );

  if (!driveUrl) return card;

  return (
    <a href={driveUrl} target="_blank" rel="noreferrer" className="block">
      {card}
    </a>
  );
}
