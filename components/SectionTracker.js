'use client';
import { useEffect, useState } from 'react';
import { sections } from '@/data/videos';

export default function SectionTracker() {
  const [active, setActive] = useState(sections[0].title);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.dataset.title);
    }, { threshold: [0.25, 0.5, 0.75], rootMargin: '-25% 0px -45% 0px' });
    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <aside className="pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
      <div className="writing-mode-vertical rounded-full border border-white/10 bg-black/35 px-3 py-5 text-[10px] uppercase tracking-[.35em] text-white/45 backdrop-blur-md" style={{ writingMode: 'vertical-rl' }}>
        {active}
      </div>
    </aside>
  );
}
