import Link from 'next/link';
import { categories, youtubeThumb } from '@/data/portfolio';

export default function Portfolio() {
  return (
    <main className="page-shell">
      <section className="category-hero reveal">
        <p>Portfolio</p>
        <h1>Selected Work</h1>
      </section>
      <section className="category-wall compact">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/portfolio/${cat.slug}`} className="category-tile reveal">
            <img src={youtubeThumb(cat.featured)} alt="" />
            <span><small>{cat.kicker}</small><strong>{cat.title}</strong></span>
          </Link>
        ))}
      </section>
    </main>
  );
}
