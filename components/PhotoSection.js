'use client';

import { useState } from 'react';
import { photos, featuredPhoto } from '@/data/photos';

function PhotoLightbox({ photo, onClose }) {
  if (!photo) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
      <button className="absolute right-5 top-5 rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[.25em] text-white/65 transition hover:text-white">Close</button>
      <img src={photo.src} alt={photo.title} className="max-h-[88vh] max-w-[92vw] object-contain" onClick={(event) => event.stopPropagation()} />
    </div>
  );
}

function MobilePhotoCarousel({ items, onOpen }) {
  return (
    <div className="md:hidden">
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5">
        {items.map((photo) => (
          <button
            key={photo.src}
            onClick={() => onOpen(photo)}
            className="relative min-w-[78vw] snap-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-950"
          >
            <div className="aspect-[4/5]">
              <img src={photo.src} alt={photo.title} className="h-full w-full object-cover" />
            </div>
          </button>
        ))}
      </div>
      <div className="text-center text-[9px] uppercase tracking-[.28em] text-white/35">Swipe</div>
    </div>
  );
}

export default function PhotoSection({ compact = false }) {
  const [active, setActive] = useState(null);
  const gallery = photos.filter((photo) => photo.src !== featuredPhoto.src);

  return (
    <section id="photography" data-section data-title="Photography" className={`relative overflow-hidden border-t border-white/10 px-4 ${compact ? 'py-14' : 'py-16 sm:py-24'} sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <div className="text-[8px] uppercase tracking-[.34em] text-white/35 sm:text-[9px]">06 / Artists / Portraits / Clothing</div>
        </div>

        <button onClick={() => setActive(featuredPhoto)} className="group mb-8 block w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-neutral-950 text-left shadow-2xl transition duration-700 hover:border-white/30 sm:mb-12 sm:rounded-[1.75rem]">
          <div className="aspect-[16/10] sm:aspect-[16/8]">
            <img src={featuredPhoto.src} alt="Featured photography" className="h-full w-full object-cover opacity-90 transition duration-1000 group-hover:scale-[1.025] group-hover:opacity-100" />
          </div>
        </button>

        <MobilePhotoCarousel items={gallery} onOpen={setActive} />

        <div className="hidden md:grid md:grid-cols-5 md:gap-4 lg:gap-5">
          {gallery.map((photo, index) => {
            const span = index % 9 === 0 ? 'md:col-span-2 md:row-span-2' : index % 7 === 0 ? 'md:col-span-2' : '';
            const ratio = index % 9 === 0 ? 'aspect-[4/5]' : index % 7 === 0 ? 'aspect-[16/9]' : 'aspect-square';
            return (
              <button key={photo.src} onClick={() => setActive(photo)} className={`group overflow-hidden rounded-xl border border-white/10 bg-neutral-950 ${span}`}>
                <div className={ratio}>
                  <img src={photo.src} alt={photo.title} className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <PhotoLightbox photo={active} onClose={() => setActive(null)} />
    </section>
  );
}
