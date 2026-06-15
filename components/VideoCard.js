'use client';

import { youtubeThumb } from '@/data/portfolio';

export default function VideoCard({ item, onClick, large = false }) {
  return (
    <button className={`video-card ${item.format === 'short' ? 'portrait' : ''} ${large ? 'large' : ''}`} onClick={() => onClick(item)}>
      <img src={youtubeThumb(item.youtubeId)} alt="" onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`; }} />
      <span className="play-dot">▶</span>
      <span className="card-copy">
        <strong>{item.title}</strong>
        <small>{item.role}</small>
      </span>
    </button>
  );
}
