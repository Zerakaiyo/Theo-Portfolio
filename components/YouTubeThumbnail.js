'use client';

import { useMemo, useState } from 'react';

export default function YouTubeThumbnail({
  id,
  alt = '',
  className = '',
  priority = false,
}) {
  const sources = useMemo(
    () => [
      `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${id}/sddefault.jpg`,
      `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    ],
    [id]
  );
  const [sourceIndex, setSourceIndex] = useState(0);

  return (
    <img
      src={sources[sourceIndex]}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      onError={() => {
        setSourceIndex((current) => Math.min(current + 1, sources.length - 1));
      }}
    />
  );
}
