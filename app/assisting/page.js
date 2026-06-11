import PageShell from '@/components/PageShell';
import MediaGrid from '@/components/MediaGrid';
import { getItems, getCategory } from '@/data/portfolio';

export const metadata = {
  title: 'Assisting | Theo Majer'
};

export default function Page() {
  const slug = 'assisting';
  const category = getCategory(slug);
  const items = getItems(slug);

  return (
    <PageShell>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Portfolio / Theo Majer</div>
          <h1>{category.title}</h1>
          <p className="lead">Selected work, available to view directly on the site.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <MediaGrid items={items} slug={slug} />
        </div>
      </section>
    </PageShell>
  );
}
