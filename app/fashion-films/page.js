import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
import { getSection } from '@/data/videos';

export const metadata = { title: 'Fashion Films | Theo Majer' };

export default function FashionFilmsPage() {
  const section = getSection('fashion-films');
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="h-[84px] sm:h-[92px]" />
      <PortfolioSection section={section} index={0} />
    </main>
  );
}
