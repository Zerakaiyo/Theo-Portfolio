'use client';

import { useState } from 'react';
import { photos } from '@/data/photos';

function PhotoModal({ src, onClose }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
      <button className="absolute right-5 top-5 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[.28em] text-white/70 transition hover:text-white" onClick={onClose}>Close</button>
      <img src={src} alt="Theo Majer photography" className="max-h-[88vh] max-w-[94vw] object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default function PhotoSection({ section, index = 4 }) {
  const [active, setActive] = useState(null);
  const featured = photos[0];
  const rest = photos.slice(1);

  return (
    <section id={section.slug} data-section data-title={section.title} className="relative min-h-screen overflow-hidden border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14">
          <div className="mb-4 text-[9px] uppercase tracking-[.36em] text-white/35 sm:text-[10px]">{section.eyebrow}</div>
          <div className="section-title text-[clamp(2.8rem,9vw,8.5rem)] font-semibold uppercase leading-[.86] tracking-[.16em] text-white">
            {section.title}
          </div>
        </div>

        <button
          onClick={() => setActive(featured)}
          className="group relative mx-auto block w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-950 text-left shadow-2xl transition duration-700 hover:border-white/30 sm:rounded-[2rem] lg:w-[72%]"
        >
          <div className="aspect-[4/3] sm:aspect-video">
            <img src={featured} alt="Theo Majer photography" className="h-full w-full object-cover opacity-90 transition duration-1000 group-hover:scale-[1.035] group-hover:opacity-100" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <div className="text-lg font-semibold uppercase tracking-[.24em] text-white sm:text-3xl">Selected Photography</div>
            <div className="mt-3 text-[9px] uppercase tracking-[.3em] text-white/45 sm:text-[10px]">Artists / Portraits / Clothing</div>
          </div>
        </button>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {rest.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(src)}
              className={`group relative overflow-hidden rounded-[1rem] border border-white/10 bg-neutral-950 transition duration-500 hover:-translate-y-1 hover:border-white/30 ${i % 9 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''} ${i % 11 === 0 ? 'lg:col-span-2' : ''}`}
            >
              <img src={src} alt="Theo Majer photography" className={`h-full min-h-[210px] w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100 ${i % 9 === 0 ? 'sm:min-h-[440px]' : ''}`} />
            </button>
          ))}
        </div>
      </div>
      <PhotoModal src={active} onClose={() => setActive(null)} />
    </section>
  );
}
