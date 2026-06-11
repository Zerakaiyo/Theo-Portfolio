import PageShell from '@/components/PageShell';
import MediaGrid from '@/components/MediaGrid';
import { getItems, getCategory } from '@/data/portfolio';

export const metadata = {
  title: 'Fashion Films | Theo Majer'
};

export default function Page() {
  const slug = 'fashion-films';
  const category = getCategory(slug);
  const items = getItems(slug);

  return (
    <PageShell>
      <section className="page-hero cinematic-page-hero">
        <div className="container reveal-card">
          <div className="kicker">Portfolio / Theo Majer</div>
          <h1>{category.title}</h1>
          <p className="lead">Selected work presented as a scrollable reel, with embedded previews and fullscreen on-site viewing.</p>
          <div className="page-actions">
            <a className="btn" href="#reel">View Reel</a>
            <a className="btn" href="#grid">Browse Grid</a>
          </div>
        </div>
      </section>
      <section className="section media-section" id="reel">
        <div className="container">
          <div className="section-head reveal-card">
            <div>
              <div className="kicker">Scroll Reel</div>
              <h2>{category.title}</h2>
            </div>
            <p className="lead">Scroll horizontally on desktop or swipe on mobile. Open any work into the larger viewer.</p>
          </div>
          <MediaGrid items={items} slug={slug} />
        </div>
      </section>
    </PageShell>
  );
}
