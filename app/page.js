import Link from 'next/link';
import { categories, youtubeThumb } from '@/data/portfolio';

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-inner reveal">
          <p>DOP / PHOTOGRAPHY / LIGHTING</p>
          <h1>THEO MAJER</h1>
          <Link href="/portfolio" className="primary-link">VIEW WORK</Link>
        </div>
        <span className="scroll-cue">SCROLL</span>
      </section>
      <section className="category-wall" id="portfolio">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/portfolio/${cat.slug}`} className="category-tile reveal">
            <img src={youtubeThumb(cat.featured)} alt="" />
            <span>
              <small>{cat.kicker}</small>
              <strong>{cat.title}</strong>
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
