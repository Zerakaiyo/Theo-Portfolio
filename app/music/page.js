import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
import { getSection } from '@/data/videos';

export const metadata = { title: 'Music | Theo Majer' };

export default function MusicPage() {
  const section = getSection('music');
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="h-[84px] sm:h-[92px]" />
      <PortfolioSection section={section} index={2} />
    </main>
  );
}
