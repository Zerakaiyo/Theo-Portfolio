import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { categories, getItems } from '@/data/portfolio';

const featured = [
  { ...getItems('fashion-films')[0], href: '/fashion-films', label: 'Fashion Films' },
  { ...getItems('music')[0], href: '/music', label: 'Music' },
  { ...getItems('assisting')[1], href: '/assisting', label: 'Assisting' },
  { ...getItems('big-sky')[0], href: '/big-sky', label: 'Big Sky' }
];

const services = [
  {
    title: 'Photography',
    detail: 'Portraits / Fashion / Product / Events',
    note: 'Still image work for people, brands and creative campaigns.'
  },
  {
    title: 'Videography',
    detail: 'Fashion Films / Music Videos / Events',
    note: 'Moving image work for artists, brands and visual projects.'
  },
  {
    title: 'Social Content',
    detail: 'Reels / Short Form / Behind The Scenes',
    note: 'Vertical and campaign-ready content for digital platforms.'
  },
  {
    title: 'Production Support',
    detail: 'Camera Assist / Lighting / BTS',
    note: 'Support across shoots, lighting setups and production days.'
  }
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero cinematic-hero minimal-hero" id="top">
        <div className="hero-vignette" />
        <div className="container hero-minimal reveal-card">
          <h1>THEO MAJER</h1>
          <Link className="minimal-scroll" href="#featured" aria-label="Scroll to work">↓</Link>
        </div>
      </section>

      <section className="section featured-section" id="featured">
        <div className="container">
          <div className="section-head minimal-head reveal-card">
            <div>
              <div className="kicker">Selected</div>
              <h2>Featured Work</h2>
            </div>
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
          <div className="section-head minimal-head reveal-card">
            <div>
              <div className="kicker">Index</div>
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="grid category-grid">
            {categories.map((category, index) => (
              <Link className="card category-card reveal-card" href={category.href} key={category.slug} style={{ '--delay': `${index * 60}ms` }}>
                <div className="card-visual">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{category.title}</strong>
                </div>
                <div className="meta">Open Collection</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="services-intro reveal-card">
            <div className="kicker">Services</div>
            <h2>Services</h2>
            <p>Every project is different. For availability, rates and project enquiries, get in touch directly.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card reveal-card" key={service.title} style={{ '--delay': `${index * 60}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
                <strong>{service.note}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="section-head minimal-head reveal-card"><h2>Contact</h2></div>
          <div className="contact-grid">
            <a className="card reveal-card" href="mailto:hello@example.com"><div className="card-visual">Email</div><h3>Email</h3></a>
            <a className="card reveal-card" href="https://www.instagram.com/theo.majer/" target="_blank"><div className="card-visual">Instagram</div><h3>Main</h3></a>
            <a className="card reveal-card" href="https://www.instagram.com/theomajer.filmcamera/" target="_blank"><div className="card-visual">Film</div><h3>Film Camera</h3></a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
