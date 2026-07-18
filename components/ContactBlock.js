'use client';

import { useState } from 'react';

const reasons = ['Hire / Enquire', 'General Support', 'Collaboration', 'Photography', 'Videography', 'Other'];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.7]">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.25" cy="6.75" r=".8" className="fill-current stroke-none" />
    </svg>
  );
}

export default function ContactBlock() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    reason: reasons[0],
    project: '',
    budget: '',
  });

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const send = (event) => {
    event.preventDefault();
    const body = [
      `Full Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Reason: ${form.reason}`,
      `Budget: ${form.budget}`,
      '',
      'About project:',
      form.project,
    ].join('\n');

    window.location.href = `mailto:hello@theomajer.com?subject=${encodeURIComponent(`Theo Majer enquiry - ${form.reason}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" data-section data-title="Contact" className="min-h-screen border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <div className="text-[9px] uppercase tracking-[.38em] text-white/35">Contact</div>
          <h1 className="mt-5 text-[clamp(1.05rem,3vw,2.5rem)] font-semibold uppercase leading-none tracking-[.18em] text-white">Theo Majer</h1>
          <div className="mt-4 text-[8px] uppercase tracking-[.3em] text-white/40 sm:text-[9px]">DOP / Photography / Lighting</div>
          <div className="mt-8 flex gap-3">
            <a
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/35 hover:text-white"
              href="https://www.instagram.com/theo.majer/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <form onSubmit={send} className="rounded-[1.5rem] border border-white/10 bg-white/[.02] p-5 sm:p-7 lg:p-8">
          <div className="grid gap-5">
            <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-white/70">
              Full Name
              <input required name="name" value={form.name} onChange={update} className="contact-input" />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-white/70">
                Email
                <input required type="email" name="email" value={form.email} onChange={update} className="contact-input" />
              </label>
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-white/70">
                Phone Number
                <input name="phone" value={form.phone} onChange={update} className="contact-input" />
              </label>
            </div>
            <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-white/70">
              What are you contacting about?
              <select name="reason" value={form.reason} onChange={update} className="contact-input">
                {reasons.map((reason) => <option key={reason}>{reason}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-white/70">
              About Project
              <textarea required name="project" value={form.project} onChange={update} className="contact-input min-h-[150px] resize-y" />
            </label>
            <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-white/70">
              Budget
              <input name="budget" value={form.budget} onChange={update} className="contact-input" placeholder="Optional" />
            </label>
            <button className="mt-2 w-full rounded-full border border-white/20 px-6 py-4 text-[10px] font-semibold uppercase tracking-[.32em] text-white/75 transition hover:border-white/40 hover:bg-white hover:text-black sm:w-auto sm:justify-self-start">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
