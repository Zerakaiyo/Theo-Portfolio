'use client';
import { useRef, useState } from 'react';
import VideoModal from './VideoModal';

function Thumb({ item, onClick }) {
  return (
    <button onClick={() => onClick(item)} className="group relative h-[220px] min-w-[76vw] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 text-left shadow-2xl transition duration-500 hover:-translate-y-1 hover:border-white/30 sm:min-w-[420px] md:min-w-[500px]">
      <img src={item.thumb} alt="" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="text-sm uppercase tracking-[.26em] text-white">{item.title}</div>
        <div className="mt-2 text-[10px] uppercase tracking-[.22em] text-white/45">{item.role}</div>
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
    <section id={section.slug} data-section data-title={section.title} className="relative min-h-screen border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[.36em] text-white/35">{String(index + 1).padStart(2, '0')} / {section.eyebrow}</div>
            <h2 className="text-4xl font-semibold uppercase tracking-[.22em] text-white sm:text-5xl lg:text-7xl">{section.title}</h2>
          </div>
          <div className="hidden text-right text-[10px] uppercase tracking-[.3em] text-white/35 md:block">Featured / Reel</div>
        </div>

        <button onClick={() => setActive(section.featured)} className="group relative mx-auto block w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 text-left shadow-2xl transition duration-700 hover:border-white/30 lg:w-[76%]">
          <div className="aspect-video">
            <img src={section.featured.thumb} alt="" className="h-full w-full object-cover opacity-75 transition duration-1000 group-hover:scale-[1.035] group-hover:opacity-95" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div>
              <div className="text-xl font-semibold uppercase tracking-[.24em] text-white sm:text-3xl">{section.featured.title}</div>
              <div className="mt-3 text-[10px] uppercase tracking-[.3em] text-white/45">{section.featured.role}</div>
            </div>
            <div className="w-fit rounded-full border border-white/20 bg-black/35 px-5 py-3 text-[10px] uppercase tracking-[.26em] text-white/75">Play Featured</div>
          </div>
        </button>

        {rest.length > 0 && (
          <div className="mt-12">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="text-[10px] uppercase tracking-[.32em] text-white/40">More from {section.title}</div>
              <div className="hidden gap-2 sm:flex">
                <button onClick={() => scroll(-1)} className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55 hover:text-white">←</button>
                <button onClick={() => scroll(1)} className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55 hover:text-white">→</button>
              </div>
            </div>
            <div ref={rail} className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-4 sm:gap-6">
              {rest.map((item) => <div className="snap-center" key={item.id}><Thumb item={item} onClick={setActive} /></div>)}
            </div>
          </div>
        )}
      </div>
      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}
