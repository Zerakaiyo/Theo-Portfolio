'use client';
import { useState } from 'react';

export default function ProjectGrid({ section }) {
  const [active, setActive] = useState(null);
  return (
    <section id={section.id} className="scroll-mt-28 py-16">
      <div className="mb-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs tracking-[0.35em] text-white/40">PORTFOLIO</p>
          <h2 className="text-3xl tracking-[0.22em] md:text-5xl">{section.label}</h2>
        </div>
        <p className="max-w-lg text-xs leading-6 tracking-[0.16em] text-white/55">{section.intro}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item, index) => (
          <button key={item.id} onClick={() => setActive(item)} className="group text-left">
            <div className="card-glow flex aspect-video items-center justify-center overflow-hidden border border-white/10 transition duration-300 group-hover:border-white/40">
              <div className="text-center">
                <p className="text-4xl tracking-[0.2em] text-white/15">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-4 text-xs tracking-[0.28em] text-white/45">VIEW ON SITE</p>
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <h3 className="text-sm leading-6 tracking-[0.18em]">{item.title}</h3>
              <span className="text-[10px] text-white/35">PLAY</span>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <div className="w-full max-w-6xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-sm tracking-[0.2em] md:text-xl">{active.title}</h3>
              <button onClick={() => setActive(null)} className="border border-white/20 px-4 py-2 text-xs tracking-[0.25em] hover:bg-white hover:text-black">CLOSE</button>
            </div>
            <iframe src={active.embedUrl} className="drive-frame" allow="autoplay; fullscreen" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  );
}
