'use client';

import { useEffect, useState } from 'react';

export default function YouTubeTitle({ item, className = '' }) {
  const [title, setTitle] = useState(item?.title || '');

  useEffect(() => {
    let alive = true;
    if (!item?.id) return;

    const fallback = item?.title || '';
    fetch(`/api/youtube-title?id=${encodeURIComponent(item.id)}&fallback=${encodeURIComponent(fallback)}`)
      .then((res) => res.json())
      .then((data) => {
        if (alive && data?.title) setTitle(data.title);
      })
      .catch(() => {
        if (alive) setTitle(fallback);
      });

    return () => {
      alive = false;
    };
  }, [item?.id, item?.title]);

  return <div className={className}>{title}</div>;
}
