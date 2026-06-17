'use client';

import { useEffect, useState } from 'react';

export default function SectionTracker() {
  const [active, setActive] = useState('Fashion Films');

  useEffect(() => {
    const updateActive = () => {
      const candidates = Array.from(document.querySelectorAll('[data-section]'));
      const viewportPoint = window.innerHeight * 0.42;
      let current = candidates[0];

      candidates.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportPoint && rect.bottom >= viewportPoint) current = el;
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
        <div className="rounded-full border border-white/10 bg-black/65 px-3 py-5 text-[10px] uppercase tracking-[.35em] text-white/45 backdrop-blur-md" style={{ writingMode: 'vertical-rl' }}>
          {active}
        </div>
      </aside>

      <div className="pointer-events-none fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/65 px-4 py-2 text-[9px] uppercase tracking-[.28em] text-white/35 backdrop-blur-md sm:block lg:hidden">
        {active}
      </div>
    </>
  );
}
