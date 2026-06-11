import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ProjectGrid from '@/components/ProjectGrid';
import { portfolioSections } from '@/data/projects';

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-5 text-xs tracking-[0.42em] text-white/45">DOP / PHOTOGRAPHY / LIGHTING</p>
            <h1 className="text-5xl tracking-[0.24em] md:text-8xl">THEO<br />MAJER</h1>
            <p className="mt-8 max-w-2xl text-sm leading-8 tracking-[0.18em] text-white/60">Selected moving image, fashion film, music, assisting and visual work. Built as a cinematic archive with playable work directly inside the site.</p>
            <div className="mt-10 flex flex-wrap gap-3 text-xs tracking-[0.24em]">
              <a href="#fashion-films" className="border border-white/20 px-5 py-3 hover:bg-white hover:text-black">VIEW PORTFOLIO</a>
              <a href="#contact" className="border border-white/20 px-5 py-3 hover:bg-white hover:text-black">CONTACT</a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border border-white/10 bg-white/5 p-3">
            <Image src="/profile.jpg" alt="Theo Majer profile logo" fill className="object-cover p-3 opacity-90" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5">
        {portfolioSections.map((section) => <ProjectGrid key={section.id} section={section} />)}
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24">
        <div className="border-t border-white/10 pt-10">
          <p className="mb-4 text-xs tracking-[0.35em] text-white/40">ABOUT</p>
          <p className="max-w-4xl text-xl leading-10 tracking-[0.16em] text-white/70">Theo Majer works across DOP, photography and lighting, with a portfolio spanning fashion films, clothing campaigns, music visuals, assisting work and film-camera-led personal imagery.</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-28">
        <div className="border-t border-white/10 pt-10">
          <p className="mb-4 text-xs tracking-[0.35em] text-white/40">CONTACT</p>
          <h2 className="mb-8 text-3xl tracking-[0.22em] md:text-5xl">WORK WITH THEO</h2>
          <div className="flex flex-wrap gap-3 text-xs tracking-[0.24em]">
            <a href="https://www.instagram.com/theo.majer/" target="_blank" className="border border-white/20 px-5 py-3 hover:bg-white hover:text-black">INSTAGRAM</a>
            <a href="https://www.instagram.com/theomajer.filmcamera/" target="_blank" className="border border-white/20 px-5 py-3 hover:bg-white hover:text-black">FILM CAMERA</a>
            <a href="mailto:" className="border border-white/20 px-5 py-3 hover:bg-white hover:text-black">EMAIL</a>
          </div>
        </div>
      </section>
    </main>
  );
}
