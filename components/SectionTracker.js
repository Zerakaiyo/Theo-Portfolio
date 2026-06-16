'use client';

import { useEffect, useState } from 'react';
import { sections } from '@/data/videos';

const labels = [...sections.map((section) => section.title), 'Services', 'Contact'];

export default function SectionTracker() {
  const [active, setActive] = useState(sections[0].title);

  useEffect(() => {
    const updateActive = () => {
      const candidates = Array.from(document.querySelectorAll('[data-section]'));
      const viewportPoint = window.innerHeight * 0.38;
      let current = candidates[0];
      let smallestDistance = Infinity;

      candidates.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportPoint);
        if (rect.top <= viewportPoint && rect.bottom >= viewportPoint && distance < smallestDistance) {
          smallestDistance = distance;
          current = el;
        }
      });

      if (current?.dataset?.title) setActive(current.dataset.title);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  return (
    <>
      <aside className="pointer-events-none fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <div className="rounded-full border border-white/10 bg-black/35 px-3 py-5 text-[10px] uppercase tracking-[.35em] text-white/45 backdrop-blur-md" style={{ writingMode: 'vertical-rl' }}>
          {active}
        </div>
      </aside>

      <div className="pointer-events-none fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[9px] uppercase tracking-[.28em] text-white/35 backdrop-blur-md sm:block lg:hidden">
        {active}
      </div>
    </>
  );
}
