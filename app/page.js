import Image from 'next/image';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { categories } from '@/data/portfolio';

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker">DOP / PHOTOGRAPHY / LIGHTING</div>
            <h1>THEO MAJER</h1>
            <p>A cinematic portfolio for moving image, lighting, assisting credits, social content and portrait photography.</p>
            <div className="hero-actions">
              <Link className="btn" href="/fashion-films">View Portfolio</Link>
              <a className="btn" href="https://www.instagram.com/theo.majer/" target="_blank">Instagram</a>
              <a className="btn" href="https://www.instagram.com/theomajer.filmcamera/" target="_blank">Film Camera</a>
            </div>
            <div className="stats">
              <div className="stat"><strong>48+</strong><span>Embedded Works</span></div>
              <div className="stat"><strong>London</strong><span>Base</span></div>
              <div className="stat"><strong>Film</strong><span>Focus</span></div>
            </div>
          </div>
          <div className="profile-wrap">
            <Image className="profile" src="/profile.jpg" width={900} height={900} alt="Theo Majer with camera" priority />
          </div>
        </div>
      </section>

      <section className="section" id="portfolio">
        <div className="container">
          <div className="section-head">
            <h2>Portfolio</h2>
            <p className="lead">Separate spaces for each body of work, with Drive-hosted pieces opening directly inside the site.</p>
          </div>
          <div className="grid">
            {categories.map((category) => (
              <Link className="card" href={category.href} key={category.slug}>
                <div className="card-visual">Open Category</div>
                <div><h3>{category.title}</h3><div className="meta">View collection</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-head"><h2>About</h2></div>
          <p className="lead">Theo Majer works across moving image, photography and lighting, with selected projects spanning fashion film, clothing campaigns, music content, assisting work and visual storytelling.</p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="section-head"><h2>Contact</h2></div>
          <div className="contact-grid">
            <a className="card" href="mailto:hello@example.com"><div className="card-visual">Email</div><h3>Email Theo</h3></a>
            <a className="card" href="https://www.instagram.com/theo.majer/" target="_blank"><div className="card-visual">Instagram</div><h3>Main Instagram</h3></a>
            <a className="card" href="https://www.instagram.com/theomajer.filmcamera/" target="_blank"><div className="card-visual">Film</div><h3>Film Camera</h3></a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
