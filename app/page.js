import Navbar from '@/components/Navbar';
import ProjectGrid from '@/components/ProjectGrid';
import SectionHeading from '@/components/SectionHeading';
import { assistingProjects, featuredStats, photographyProjects, profile, socialProjects, workProjects } from '@/data/projects';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <main id="top" className="noise min-h-screen overflow-hidden bg-[#030303] text-white">
      <Navbar />

      <section className="relative min-h-screen px-5 pt-28 sm:px-8">
        <div className="absolute inset-0 bg-grain bg-[length:18px_18px] opacity-[0.11]" />
        <div className="absolute left-1/2 top-0 h-[80vh] w-[38vw] -translate-x-1/2 bg-white/[0.055] blur-3xl" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end pb-16 md:pb-24">
          <div className="max-w-4xl">
            <p className="mb-7 text-[11px] uppercase tracking-cinema text-white/70">{profile.strapline}</p>
            <h1 className="font-serif text-7xl leading-[0.88] tracking-[-0.05em] text-[#f7f1e8] sm:text-8xl md:text-[10rem]">
              Theo<br className="sm:hidden" /> Majer
            </h1>
            <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-center">
              <p className="max-w-2xl text-lg leading-8 text-white/65 md:text-xl">{profile.intro}</p>
              <a href="#work" className="w-fit rounded-full border border-white/20 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:border-white/55 hover:bg-white hover:text-black">
                View Work
              </a>
            </div>
          </div>
          <div className="mt-14 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {featuredStats.map((item) => (
              <div key={item.label}>
                <p className="font-serif text-3xl text-[#f6f0e7]">{item.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-white/40">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Selected moving image" title="Work">
          Horizontal 4K project placeholders ready for titles, roles and final video links.
        </SectionHeading>
        <ProjectGrid projects={workProjects} />
      </section>

      <section id="assisting" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Camera / Lighting / Production" title="Assisting">
          A dedicated space for assisting credits, separate from lead portfolio pieces.
        </SectionHeading>
        <ProjectGrid projects={assistingProjects} />
      </section>

      <section id="social" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Vertical content" title="Social Media">
          Built for Instagram Reels, TikTok edits and short-form campaign pieces.
        </SectionHeading>
        <ProjectGrid projects={socialProjects} tall />
      </section>

      <section id="photography" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Portrait photography" title="Photography">
          A gallery section waiting for the portrait folder when it is ready.
        </SectionHeading>
        <ProjectGrid projects={photographyProjects} />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-14">
          <p className="mb-5 text-[11px] uppercase tracking-cinema text-white/45">Contact</p>
          <h2 className="max-w-4xl font-serif text-5xl leading-none text-[#f6f0e7] md:text-7xl">
            Available for moving image, lighting, assisting and social content.
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm text-white/80 transition hover:bg-white hover:text-black" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" /> Email
            </a>
            <a className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm text-white/80 transition hover:bg-white hover:text-black" href={profile.whatsapp} target="_blank">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm text-white/80 transition hover:bg-white hover:text-black" href={profile.instagram} target="_blank">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
