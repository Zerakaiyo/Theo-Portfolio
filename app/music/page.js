import PageShell from '@/components/PageShell';
import MediaGrid from '@/components/MediaGrid';
import { getItems, getCategory } from '@/data/portfolio';

export const metadata = {
  title: 'music | Theo Majer'
};

export default function Page() {
  const slug = 'music';
  const category = getCategory(slug);
  const items = getItems(slug);

  return (
    <PageShell>
      <section className="page-hero cinematic-page-hero minimal-page-hero">
        <div className="container reveal-card">
          <div className="kicker">Portfolio</div>
          <h1>{category.title}</h1>
        </div>
      </section>
      <section className="section media-section" id="reel">
        <div className="container">
          <MediaGrid items={items} slug={slug} />
        </div>
      </section>
    </PageShell>
  );
}
