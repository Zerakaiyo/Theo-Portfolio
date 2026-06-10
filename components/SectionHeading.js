export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-fog">{eyebrow}</p>
      <h2 className="font-display text-4xl font-medium leading-tight text-bone md:text-6xl">
        {title}
      </h2>
      {text ? <p className="mt-5 max-w-2xl text-base leading-7 text-fog md:text-lg">{text}</p> : null}
    </div>
  );
}
