import Navbar from '../components/Navbar';
import MediaGrid from '../components/MediaGrid';
import SectionHeading from '../components/SectionHeading';
import { portfolioCategories, profile } from '../data/projects';
import { Camera, Instagram, Mail, MessageCircle } from 'lucide-react';

const heroStats = [
  { label: 'SELECTED WORK', value: '48+' },
  { label: 'FOCUS', value: 'MOVING IMAGE' },
  { label: 'BASE', value: 'LONDON' },
];

export default function Home() {
  return (
    <main id="top" className="noise min-h-screen overflow-hidden bg-[#030303] text-white">
      <Navbar />

      <section className="relative min-h-screen px-5 pt-28 sm:px-8">
        <div className="absolute inset-0 bg-grain bg-[length:18px_18px] opacity-[0.11]" />
        <div className="absolute left-1/2 top-0 h-[80vh] w-[38vw] -translate-x-1/2 bg-white/[0.055] blur-3xl" />
        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-end gap-12 pb-16 md:grid-cols-[1.1fr_0.75fr] md:pb-24">
          <div>
            <p className="mb-7 text-[11px] font-bold uppercase tracking-cinema text-white/70">{profile.strapline}</p>
            <h1 className="max-w-5xl text-6xl font-bold uppercase leading-[0.9] tracking-[0.14em] text-[#f7f1e8] sm:text-7xl md:text-[8rem]">
              THEO<br />MAJER
            </h1>
            <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-center">
              <p className="max-w-2xl text-sm uppercase leading-7 tracking-[0.12em] text-white/60 md:text-base">{profile.intro}</p>
              <a href="#portfolio" className="w-fit rounded-full border border-white/20 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:border-white/55 hover:bg-white hover:text-black">
                View Portfolio
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -inset-8 rounded-full bg-emerald-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
              <img src="/profile.jpg" alt="Theo Majer with camera" className="aspect-square w-full rounded-[1.45rem] object-cover grayscale-[15%]" />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-full border border-white/15 bg-black/60 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/65 backdrop-blur-xl">
              <Camera className="mr-2 inline h-4 w-4" /> Profile / Camera
            </div>
          </div>

          <div className="md:col-span-2 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold uppercase tracking-[0.16em] text-[#f6f0e7]">{item.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[0.7fr_1.3fr] md:p-10">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 md:max-w-sm">
            <img src="/profile.jpg" alt="Theo Majer profile" className="aspect-square w-full object-cover" />
          </div>
          <div className="flex flex-col justify-end">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-cinema text-white/40">About</p>
            <h2 className="max-w-4xl text-3xl font-bold uppercase leading-tight tracking-[0.14em] text-[#f6f0e7] md:text-5xl">
              Moving image, lighting, film texture and image-making from London.
            </h2>
            <p className="mt-6 max-w-3xl text-sm uppercase leading-7 tracking-[0.12em] text-white/50">
              This page now works as an on-site media archive. Each category opens Drive-hosted videos and stills in a fullscreen viewer, so visitors stay inside Theo's portfolio instead of being sent away to Google Drive.
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="Portfolio Index" title="Portfolio">
          Choose a category from the dropdown or scroll through the full archive below.
        </SectionHeading>
        <div className="mt-8 flex flex-wrap gap-3">
          {portfolioCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`} className="rounded-full border border-white/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 transition hover:bg-white hover:text-black">
              {category.nav}
            </a>
          ))}
        </div>
      </section>

      {portfolioCategories.map((category, index) => (
        <section key={category.id} id={category.id} className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeading
            eyebrow={category.eyebrow}
            title={category.title}
          >
            {category.description}
          </SectionHeading>
          <MediaGrid items={category.items} tall={category.id === 'photography'} />
        </section>
      ))}

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-14">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-cinema text-white/45">Contact</p>
          <h2 className="max-w-4xl text-4xl font-bold uppercase leading-tight tracking-[0.14em] text-[#f6f0e7] md:text-6xl">
            Available for moving image, lighting, assisting and social content.
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 transition hover:bg-white hover:text-black" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" /> Email
            </a>
            <a className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 transition hover:bg-white hover:text-black" href={profile.whatsapp} target="_blank">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 transition hover:bg-white hover:text-black" href={profile.instagram} target="_blank">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 transition hover:bg-white hover:text-black" href={profile.filmInstagram} target="_blank">
              <Instagram className="h-4 w-4" /> Film Camera
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
