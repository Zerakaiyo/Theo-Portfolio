'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSeen(true);
    }, { threshold: 0.18 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, seen];
}

function FeatureTile({ project, index, onPlay }) {
  const [ref, seen] = useReveal();
  return (
    <article ref={ref} className={`feature-tile feature-${index + 1} ${seen ? 'visible' : ''} ${project.orientation === 'portrait' ? 'portrait-tile' : ''}`}>
      <button className="feature-media" onClick={() => onPlay(project)} aria-label={`Play ${project.title}`}>
        <img src={project.thumb} alt="" />
        <span className="shade" />
        <span className="play-mark">Play</span>
      </button>
      <div className="feature-copy">
        <p>{String(index + 1).padStart(2, '0')}</p>
        <h3>{project.title}</h3>
        <span>{project.role}</span>
      </div>
    </article>
  );
}

export default function CarouselSection({ section, onPlay }) {
  const railRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const featured = section.pieces.slice(0, 3);
  const reel = useMemo(() => section.pieces.slice(3), [section.pieces]);

  const move = (dir) => {
    const node = railRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(620, node.clientWidth * 0.82), behavior: 'smooth' });
  };

  useEffect(() => {
    const node = railRef.current;
    if (!node || paused || reel.length < 2) return;
    const timer = setInterval(() => {
      const nearEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 8;
      node.scrollTo({ left: nearEnd ? 0 : node.scrollLeft + Math.min(420, node.clientWidth * 0.72), behavior: 'smooth' });
    }, 4300);
    return () => clearInterval(timer);
  }, [paused, reel.length]);

  return (
    <section id={section.id} className="showcase-section">
      <div className="showcase-heading">
        <span>{String(section.pieces.length).padStart(2, '0')} Pieces</span>
        <h2>{section.title}</h2>
      </div>

      <div className="featured-stack">
        {featured.map((project, index) => (
          <FeatureTile key={`${section.id}-feature-${project.id || project.title}`} project={project} index={index} onPlay={onPlay} />
        ))}
      </div>

      {reel.length > 0 && (
        <div className="carousel-block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="carousel-topline">
            <span>More from {section.title}</span>
            <div className="carousel-controls">
              <button onClick={() => move(-1)} aria-label={`Previous ${section.title} video`}>←</button>
              <button onClick={() => move(1)} aria-label={`Next ${section.title} video`}>→</button>
            </div>
          </div>

          <div className="reel-rail" ref={railRef}>
            {reel.map((project, index) => (
              <button key={`${section.id}-reel-${project.id || project.title}-${index}`} className={`reel-card ${project.orientation === 'portrait' ? 'portrait-card' : ''}`} onClick={() => onPlay(project)}>
                <img src={project.thumb} alt="" loading="lazy" />
                <span className="shade" />
                <span className="reel-index">{String(index + 4).padStart(2, '0')}</span>
                <span className="reel-title">{project.title}</span>
                <span className="reel-role">{project.role}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
