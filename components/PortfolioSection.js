'use client';

import { useRef, useState } from 'react';
import VideoModal from './VideoModal';
import YouTubeTitle from './YouTubeTitle';

function Thumb({ item, onClick }) {
  return (
    <button
      onClick={() => onClick(item)}
      className="group relative h-[210px] min-w-[78vw] snap-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 text-left shadow-2xl transition duration-500 hover:-translate-y-1 hover:border-white/30 sm:h-[225px] sm:min-w-[380px] md:min-w-[440px]"
    >
      <img src={item.thumb} alt="" className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <YouTubeTitle item={item} className="text-[10px] font-semibold uppercase tracking-[.26em] text-white sm:text-xs" />
        <div className="mt-2 text-[8px] uppercase tracking-[.22em] text-white/45 sm:text-[9px]">{item.role}</div>
      </div>
      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-sm text-white/80 opacity-0 transition group-hover:opacity-100">▶</div>
    </button>
  );
}

export default function PortfolioSection({ section, index }) {
  const [active, setActive] = useState(null);
  const rail = useRef(null);
  const scroll = (dir) => rail.current?.scrollBy({ left: dir * 480, behavior: 'smooth' });
  const rest = section.items;

  return (
    <section id={section.slug} data-section data-title={section.title} className="relative min-h-screen overflow-hidden border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <div className="text-[8px] uppercase tracking-[.34em] text-white/35 sm:text-[9px]">{section.eyebrow}</div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <button
          onClick={() => setActive(section.featured)}
          className="group relative mx-auto block w-full max-w-5xl overflow-hidden rounded-[1.35rem] border border-white/10 bg-neutral-950 text-left shadow-2xl transition duration-700 hover:border-white/30 sm:rounded-[1.75rem] lg:w-[72%]"
        >
          <div className="aspect-video">
            <img src={section.featured.thumb} alt="" className="h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.035] group-hover:opacity-100" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-7">
            <div>
              <YouTubeTitle item={section.featured} className="text-[10px] font-semibold uppercase tracking-[.26em] text-white sm:text-xs" />
              <div className="mt-2 text-[8px] uppercase tracking-[.24em] text-white/45 sm:text-[9px]">{section.featured.role}</div>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 transition group-hover:border-white/35 group-hover:text-white">▶</div>
          </div>
        </button>

        {rest.length > 0 && (
          <div className="mt-9 sm:mt-11">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="text-[9px] uppercase tracking-[.32em] text-white/35">More</div>
              <div className="hidden gap-2 sm:flex">
                <button onClick={() => scroll(-1)} className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55 transition hover:border-white/30 hover:text-white">←</button>
                <button onClick={() => scroll(1)} className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55 transition hover:border-white/30 hover:text-white">→</button>
              </div>
            </div>
            <div ref={rail} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:gap-6">
              {rest.map((item) => <Thumb item={item} onClick={setActive} key={item.id} />)}
            </div>
          </div>
        )}
      </div>
      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}
