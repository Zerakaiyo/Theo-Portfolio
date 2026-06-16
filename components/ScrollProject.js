'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollProject({ project, index, onPlay }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSeen(true);
      },
      { threshold: 0.24 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={ref} className={`scroll-piece ${seen ? 'visible' : ''} ${project.orientation === 'portrait' ? 'portrait-piece' : ''}`}>
      <button className="media-stage" onClick={() => onPlay(project)} aria-label={`Play ${project.title}`}>
        <img src={project.thumb} alt="" loading={index < 2 ? 'eager' : 'lazy'} />
        <span className="shade" />
        <span className="play-mark">Play</span>
      </button>
      <div className="piece-copy">
        <p>{String(index + 1).padStart(2, '0')}</p>
        <h3>{project.title}</h3>
        <span>{project.role}</span>
      </div>
    </article>
  );
}
