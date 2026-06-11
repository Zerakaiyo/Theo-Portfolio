'use client';

import { ExternalLink, Maximize2, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MediaCard({ item, tall = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const isPlayable = Boolean(item.embedUrl);
  const isExternal = Boolean(item.externalUrl);

  const card = (
    <article className="video-card group relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-3 text-left transition hover:-translate-y-1 hover:border-white/25">
      <div className="card-glow absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition duration-500" />
      <div className={`relative overflow-hidden rounded-[1.1rem] border border-white/10 bg-gradient-to-br from-white/12 via-white/[0.03] to-black ${tall ? 'aspect-[9/14]' : 'aspect-video'}`}>
        <div className="absolute inset-0 bg-grain bg-[length:18px_18px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.14),transparent_35%)]" />
        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/55">
          {item.format || 'VIDEO'}
        </div>
        <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white/70">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/35 backdrop-blur-md transition group-hover:bg-white group-hover:text-black">
            {isExternal ? <ExternalLink className="h-4 w-4" /> : isPlayable ? <Play className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
            {isExternal ? 'Open Link' : isPlayable ? 'View On Site' : 'Coming Soon'}
          </span>
        </div>
      </div>
      <div className="relative flex items-end justify-between gap-4 px-2 pb-2 pt-5">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-[#f6f0e7]">{item.title}</h3>
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/45">{item.role}</p>
        </div>
      </div>
    </article>
  );

  if (isExternal) {
    return <a href={item.externalUrl} target="_blank" rel="noreferrer" className="block h-full">{card}</a>;
  }

  return (
    <>
      <button type="button" onClick={() => isPlayable && setOpen(true)} className="block h-full w-full disabled:cursor-not-allowed" disabled={!isPlayable}>
        {card}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
          <button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-black" aria-label="Close viewer">
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/15 bg-black shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">{item.format}</p>
                <h3 className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-white">{item.title}</h3>
              </div>
              <p className="hidden text-[10px] uppercase tracking-[0.2em] text-white/40 sm:block">{item.role}</p>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={item.embedUrl}
                title={item.title}
                className="h-full w-full"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
