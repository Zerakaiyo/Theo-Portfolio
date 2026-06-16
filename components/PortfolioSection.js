'use client';

import { useRef, useState } from 'react';
import VideoModal from './VideoModal';

function Thumb({ item, onClick }) {
  return (
    <button
      onClick={() => onClick(item)}
      className="group relative h-[210px] min-w-[78vw] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 text-left shadow-2xl transition duration-500 hover:-translate-y-1 hover:border-white/30 sm:h-[230px] sm:min-w-[420px] md:min-w-[500px]"
    >
      <img src={item.thumb} alt="" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="text-xs uppercase tracking-[.24em] text-white sm:text-sm">{item.title}</div>
        <div className="mt-2 text-[9px] uppercase tracking-[.22em] text-white/45 sm:text-[10px]">{item.role}</div>
      </div>
      <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-[10px] uppercase tracking-[.18em] text-white/70 opacity-0 transition group-hover:opacity-100">Play</div>
    </button>
  );
}

export default function PortfolioSection({ section, index }) {
  const [active, setActive] = useState(null);
  const rail = useRef(null);
  const scroll = (dir) => rail.current?.scrollBy({ left: dir * 560, behavior: 'smooth' });
  const rest = section.items;

  return (
    <section id={section.slug} data-section data-title={section.title} className="relative min-h-screen overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.08),transparent_34%)] opacity-70" />
      <div className="pointer-events-none sticky top-24 z-0 -mx-4 mb-[-2rem] overflow-hidden sm:-mx-6 lg:-mx-8">
        <div className="ghost-title whitespace-nowrap px-4 text-[clamp(3.5rem,13vw,12rem)] font-semibold uppercase leading-none tracking-[.18em] text-transparent opacity-45 sm:px-6 lg:px-8">
          {section.title}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl pt-8 sm:pt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-4 text-[9px] uppercase tracking-[.36em] text-white/35 sm:text-[10px]">{String(index + 1).padStart(2, '0')} / {section.eyebrow}</div>
            <h2 className="sr-only">{section.title}</h2>
          </div>
          <div className="hidden text-right text-[10px] uppercase tracking-[.3em] text-white/35 md:block">Featured / Reel</div>
        </div>

        <button
          onClick={() => setActive(section.featured)}
          className="group relative mx-auto block w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950 text-left shadow-2xl transition duration-700 hover:border-white/30 sm:rounded-[2rem] lg:w-[74%]"
        >
          <div className="aspect-video">
            <img src={section.featured.thumb} alt="" className="h-full w-full object-cover opacity-75 transition duration-1000 group-hover:scale-[1.035] group-hover:opacity-95" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div>
              <div className="text-lg font-semibold uppercase tracking-[.22em] text-white sm:text-3xl">{section.featured.title}</div>
              <div className="mt-3 text-[9px] uppercase tracking-[.3em] text-white/45 sm:text-[10px]">{section.featured.role}</div>
            </div>
            <div className="w-fit rounded-full border border-white/20 bg-black/35 px-5 py-3 text-[10px] uppercase tracking-[.26em] text-white/75">Play Featured</div>
          </div>
        </button>

        {rest.length > 0 && (
          <div className="mt-12">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="text-[10px] uppercase tracking-[.32em] text-white/40">More from {section.title}</div>
              <div className="hidden gap-2 sm:flex">
                <button onClick={() => scroll(-1)} className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55 transition hover:border-white/30 hover:text-white">←</button>
                <button onClick={() => scroll(1)} className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55 transition hover:border-white/30 hover:text-white">→</button>
              </div>
            </div>
            <div ref={rail} className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-5 sm:gap-6">
              {rest.map((item) => <div className="snap-center" key={item.id}><Thumb item={item} onClick={setActive} /></div>)}
            </div>
          </div>
        )}
      </div>
      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}
