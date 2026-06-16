'use client';

import { useState } from 'react';
import { sections, services } from '@/data/portfolio';
import Navbar from '@/components/Navbar';
import CarouselSection from '@/components/CarouselSection';
import VideoModal from '@/components/VideoModal';

export default function Exhibition() {
  const [active, setActive] = useState(null);

  return (
    <>
      <Navbar />
      <main id="top">
        <section className="hero compact-hero">
          <div className="hero-grain" />
          <h1>THEO MAJER</h1>
          <p>DOP / PHOTOGRAPHY / LIGHTING</p>
          <a className="scroll-cue" href="#portfolio">Scroll</a>
        </section>

        <section id="portfolio" className="intro-strip">
          <span>Selected Work</span>
        </section>

        {sections.map((section) => (
          <CarouselSection key={section.id} section={section} onPlay={setActive} />
        ))}

        <section id="services" className="services-section">
          <h2>Services</h2>
          <div className="services-grid">
            {services.map((service) => <span key={service}>{service}</span>)}
          </div>
          <p>Rates and availability depend on the project.</p>
        </section>

        <section id="contact" className="contact-section">
          <h2>THEO MAJER</h2>
          <p>DOP / PHOTOGRAPHY / LIGHTING</p>
          <div className="contact-links">
            <a href="https://www.instagram.com/theo.majer/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.instagram.com/theomajer.filmcamera/" target="_blank" rel="noreferrer">Film Instagram</a>
            <a href="mailto:theomajer@example.com">Email</a>
          </div>
        </section>
      </main>
      <VideoModal active={active} onClose={() => setActive(null)} />
    </>
  );
}
