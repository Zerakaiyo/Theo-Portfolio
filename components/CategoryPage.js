'use client';

import { useState } from 'react';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';

export default function CategoryPage({ category }) {
  const [active, setActive] = useState(null);
  const featured = category.items[0];
  return (
    <main className="page-shell">
      <section className="category-hero reveal">
        <p>{category.kicker}</p>
        <h1>{category.title}</h1>
      </section>
      <section className="featured-split reveal">
        <VideoCard item={featured} onClick={setActive} large />
        <div>
          <p className="eyebrow">Featured</p>
          <h2>{featured.title}</h2>
          <p className="muted">Select a piece to watch on-site.</p>
        </div>
      </section>
      <section className="media-grid reveal">
        {category.items.map((item) => <VideoCard key={item.youtubeId} item={item} onClick={setActive} />)}
      </section>
      <VideoModal item={active} onClose={() => setActive(null)} />
    </main>
  );
}
