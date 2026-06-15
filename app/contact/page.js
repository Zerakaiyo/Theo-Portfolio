const services = [
  ['Photography', 'Portraits / Fashion / Products / Events'],
  ['Videography', 'Fashion Films / Music Videos / Events'],
  ['Social Content', 'Vertical Video / Reels / BTS'],
  ['Production Support', 'Camera Assist / Lighting / BTS']
];

export default function Contact() {
  return (
    <main className="page-shell">
      <section className="contact-hero reveal">
        <p>Contact</p>
        <h1>Enquiries</h1>
        <div className="contact-links">
          <a href="mailto:hello@example.com">Email</a>
          <a href="https://www.instagram.com/theo.majer/">Instagram</a>
          <a href="https://www.instagram.com/theomajer.filmcamera/">Film</a>
        </div>
      </section>
      <section className="services-grid reveal">
        {services.map(([title, copy]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <p className="rates-note reveal">Rates vary by project, schedule and deliverables.</p>
    </main>
  );
}
