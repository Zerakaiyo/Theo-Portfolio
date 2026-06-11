import Image from 'next/image';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { categories, getItems } from '@/data/portfolio';

const featured = [
  { ...getItems('fashion-films')[0], href: '/fashion-films', label: 'Fashion Films' },
  { ...getItems('music')[0], href: '/music', label: 'Music' },
  { ...getItems('assisting')[1], href: '/assisting', label: 'Assisting' },
  { ...getItems('big-sky')[0], href: '/big-sky', label: 'Big Sky' }
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero cinematic-hero" id="top">
        <div className="hero-vignette" />
        <div className="container hero-grid">
          <div className="hero-copy reveal-card">
            <div className="kicker">DOP / PHOTOGRAPHY / LIGHTING</div>
            <h1>THEO MAJER</h1>
            <p>A cinematic portfolio for moving image, lighting, assisting credits, social content and portrait photography.</p>
            <div className="hero-actions">
              <Link className="btn" href="#featured">Featured Work</Link>
              <Link className="btn" href="#portfolio">Portfolio</Link>
              <a className="btn" href="https://www.instagram.com/theo.majer/" target="_blank">Instagram</a>
            </div>
          </div>
          <div className="profile-wrap parallax-card reveal-card">
            <Image className="profile" src="/profile.jpg" width={900} height={900} alt="Theo Majer with camera" priority />
          </div>
        </div>
        <a className="scroll-cue" href="#featured">Scroll</a>
      </section>

      <section className="section featured-section" id="featured">
        <div className="container">
          <div className="section-head reveal-card">
            <div>
              <div className="kicker">Selected Frames</div>
              <h2>Featured Work</h2>
            </div>
            <p className="lead">A first-look reel of selected projects. Each piece can be opened into a larger on-site viewer.</p>
          </div>
          <div className="featured-reel">
            {featured.map((item, index) => (
              <Link className="featured-card reveal-card" href={item.href} key={`${item.title}-${index}`} style={{ '--delay': `${index * 70}ms` }}>
                <iframe src={item.embedUrl} allow="autoplay; fullscreen" allowFullScreen title={item.title} loading="lazy" />
                <div className="featured-overlay">
                  <span>{String(index + 1).padStart(2, '0')} / {item.label}</span>
                  <h3>{item.title}</h3>
                  <small>{item.role}</small>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section portfolio-index" id="portfolio">
        <div className="container">
          <div className="section-head reveal-card">
            <div>
              <div className="kicker">Browse by Body of Work</div>
              <h2>Portfolio</h2>
            </div>
            <p className="lead">Separate spaces for fashion film, clothing, music, assisting, Big Sky and future photography.</p>
          </div>
          <div className="grid category-grid">
            {categories.map((category, index) => (
              <Link className="card category-card reveal-card" href={category.href} key={category.slug} style={{ '--delay': `${index * 60}ms` }}>
                <div className="card-visual">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{category.title}</strong>
                </div>
                <div><h3>{category.title}</h3><div className="meta">Open Collection</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-strip" id="about">
        <div className="container split-section reveal-card">
          <div>
            <div className="kicker">About</div>
            <h2>Visual Rhythm, Light, Movement.</h2>
          </div>
          <p className="lead">Theo Majer works across moving image, photography and lighting, with selected projects spanning fashion film, clothing campaigns, music content, assisting work and visual storytelling.</p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="section-head reveal-card"><h2>Contact</h2></div>
          <div className="contact-grid">
            <a className="card reveal-card" href="mailto:hello@example.com"><div className="card-visual">Email</div><h3>Email Theo</h3></a>
            <a className="card reveal-card" href="https://www.instagram.com/theo.majer/" target="_blank"><div className="card-visual">Instagram</div><h3>Main Instagram</h3></a>
            <a className="card reveal-card" href="https://www.instagram.com/theomajer.filmcamera/" target="_blank"><div className="card-visual">Film</div><h3>Film Camera</h3></a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
