import Navbar from "../components/Navbar";
import ProjectGrid from "../components/ProjectGrid";
import SectionHeading from "../components/SectionHeading";
import { assistingWork, contactLinks, selectedWork, socialContent } from "../data/projects";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-ink text-bone">
      <Navbar />

      <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.14),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_35%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.42em] text-fog">DoP / Photography / Lighting</p>
          <h1 className="max-w-5xl font-display text-6xl font-medium leading-[0.9] text-bone md:text-8xl lg:text-9xl">
            Theo Majer
          </h1>
          <div className="mt-8 flex max-w-3xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="text-lg leading-8 text-fog md:text-xl">
              A cinematic portfolio for moving image, lighting, assisting credits, social content and portrait photography.
            </p>
            <a
              href="#work"
              className="inline-flex w-fit rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.25em] text-bone transition hover:bg-bone hover:text-ink"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Horizontal films and 4K project placeholders."
          text="The structure is ready for project titles, roles, thumbnails and real video embeds once the Drive links are available."
        />
        <ProjectGrid projects={selectedWork} />
      </section>

      <section id="assisting" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <SectionHeading
            eyebrow="Assisting Work"
            title="Camera, lighting and on-set support credits."
            text="A dedicated section for projects where Theo contributed as an assistant, operator or lighting support."
          />
          <ProjectGrid projects={assistingWork} />
        </div>
      </section>

      <section id="social" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Social Media Content"
          title="Vertical work for socials, reels and short-form campaigns."
          text="A separate rhythm for 9:16 content, designed to feel native to mobile-first work without cluttering the main portfolio."
        />
        <ProjectGrid projects={socialContent} variant="vertical" />
      </section>

      <section id="photography" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[1fr_1.2fr] md:px-8">
          <SectionHeading
            eyebrow="Photography"
            title="Portrait photography section coming soon."
            text="This page can become a gallery once the portrait selection is ready. For now, it works as a quiet placeholder rather than an empty wall."
          />
          <div className="grid grid-cols-2 gap-4">
            {["01", "02", "03", "04"].map((item) => (
              <div key={item} className="aspect-[4/5] rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-fog">Portrait {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-bone p-8 text-ink md:p-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-charcoal/70">Contact</p>
          <h2 className="font-display text-4xl font-medium md:text-6xl">For projects, shoots and assisting enquiries.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={contactLinks.email} className="rounded-full bg-ink px-6 py-3 text-sm uppercase tracking-[0.2em] text-bone">
              Email
            </a>
            <a href={contactLinks.whatsapp} className="rounded-full border border-ink/20 px-6 py-3 text-sm uppercase tracking-[0.2em]">
              WhatsApp
            </a>
            <a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-ink/20 px-6 py-3 text-sm uppercase tracking-[0.2em]">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
