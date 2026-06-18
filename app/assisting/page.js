import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
import { getSection } from '@/data/videos';

export const metadata = { title: 'Assisting | Theo Majer' };

export default function AssistingPage() {
  const section = getSection('assisting');
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="h-[84px] sm:h-[92px]" />
      <PortfolioSection section={section} index={1} />
    </main>
  );
}
