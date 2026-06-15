import { notFound } from 'next/navigation';
import { categories, getCategory } from '@/data/portfolio';
import CategoryPage from '@/components/CategoryPage';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default function PortfolioCategory({ params }) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  return <CategoryPage category={category} />;
}
