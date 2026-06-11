import MediaCard from './MediaCard';

export default function MediaGrid({ items = [], tall = false }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <MediaCard key={`${item.title}-${item.embedUrl || item.externalUrl || 'soon'}`} item={item} tall={tall} />
      ))}
    </div>
  );
}
