import { useState } from "react";
import { BackgroundSVG } from "../components/BackgroundSVG";
import { Reveal } from "../components/Reveal";

const interests = ["Buying", "Selling", "Leasing", "Property Management", "Investment Advisory", "Other"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Buying", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ivory)] pt-44 pb-16 lg:pt-52 lg:pb-20">
        <BackgroundSVG variant="compass" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal><p className="small-caps-label text-[var(--brass)]">A private desk</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] md:text-6xl lg:text-[88px]">
              Let's begin a <em className="italic text-[var(--brass)]">private conversation</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-[var(--obsidian)]/70 md:text-xl">
              Tell Kareen what you're looking for. Most replies are within the day — always personally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
          {/* FORM */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="border border-[var(--brass)] bg-[var(--card)] p-12 text-center">
                <p className="small-caps-label text-[var(--brass)]">Received</p>
                <p className="mt-6 font-display text-3xl">Thank you, {form.name.split(" ")[0]}.</p>
                <p className="mt-4 text-[var(--obsidian)]/70">Kareen has been notified and will reply personally within the day.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", interest: "Buying", message: "" }); }} className="mt-8 small-caps-label text-[var(--emerald)] hover:text-[var(--brass)]">
                  Send another →
                </button>
              </div>
            ) : (
              <div className="border border-[var(--obsidian)]/10 bg-[var(--card)] p-8 md:p-12 shadow-[0_20px_60px_-30px_rgba(20,17,15,0.25)]">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Your name" value={form.name} onChange={(v) => update("name", v)} placeholder="Full name" />
                  <Field label="Email" value={form.email} onChange={(v) => update("email", v)} placeholder="you@example.com" type="email" />
                  <Field label="Phone" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+255 …" />
                  <div>
                    <label className="small-caps-label text-[var(--obsidian)]/60">Interest</label>
                    <select
                      value={form.interest}
                      onChange={(e) => update("interest", e.target.value)}
                      className="mt-3 w-full border-b border-[var(--obsidian)]/15 bg-transparent py-3 outline-none transition-colors focus:border-[var(--brass)]"
                    >
                      {interests.map((i) => <option key={i}>{i}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="small-caps-label text-[var(--obsidian)]/60">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={5}
                    placeholder="What are you looking for, and when?"
                    className="mt-3 w-full resize-none border-b border-[var(--obsidian)]/15 bg-transparent py-3 outline-none transition-colors focus:border-[var(--brass)]"
                  />
                </div>
                <button
                  onClick={submit}
                  className="mt-10 w-full bg-[var(--emerald)] py-4 small-caps-label text-[var(--ivory)] transition-colors hover:bg-[var(--emerald-deep)] md:w-auto md:px-12"
                >
                  Send message
                </button>
                <p className="mt-6 text-xs text-[var(--obsidian)]/50">Your details stay private. No mailing list, no third parties.</p>
              </div>
            )}
          </div>

          {/* DETAILS */}
          <aside className="space-y-10 lg:col-span-5">
            <div>
              <p className="small-caps-label text-[var(--brass)]">Office</p>
              <p className="mt-4 font-display text-2xl">Slipway Road, Masaki</p>
              <p className="text-[var(--obsidian)]/70">Dar es Salaam, Tanzania</p>
              <p className="mt-2 small-caps-label text-[var(--obsidian)]/60">By appointment only</p>
            </div>
            <div>
              <p className="small-caps-label text-[var(--brass)]">Direct</p>
              <p className="mt-4 font-display text-2xl">+255 700 000 000</p>
              <p className="text-[var(--obsidian)]/70">hello@kareenismyagent.co</p>
            </div>
            <a href="#" className="inline-flex w-full items-center justify-between border border-[var(--brass)] bg-[var(--brass)]/10 px-6 py-4 transition-colors hover:bg-[var(--brass)]/20 sm:w-auto sm:min-w-[280px]">
              <span className="small-caps-label text-[var(--obsidian)]">WhatsApp Kareen</span>
              <span className="text-[var(--brass)]">→</span>
            </a>
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--emerald-deep)]">
              <BackgroundSVG variant="compass" className="opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-[var(--ivory)]">
                <div>
                  <p className="small-caps-label text-[var(--brass-soft)]">Office</p>
                  <p className="mt-3 font-display text-3xl">Masaki</p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 small-caps-label text-[var(--obsidian)]/60">
              <a href="#" className="hover:text-[var(--brass)]">Instagram</a>
              <a href="#" className="hover:text-[var(--brass)]">LinkedIn</a>
            </div>
          </aside>
        </div>
      </section>

      {/* Book viewing callout */}
      <section className="bg-[var(--emerald)] py-24 text-[var(--ivory)]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-8">
            <p className="small-caps-label text-[var(--brass)]">Book a viewing</p>
            <p className="mt-4 font-display text-3xl leading-[1.2] md:text-4xl lg:text-5xl">
              Already know the home? Pick a time. Kareen will be there with the keys, the floor plan, and the answers.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href="#" className="inline-flex items-center gap-3 border border-[var(--brass)] bg-[var(--brass)] px-7 py-4 small-caps-label text-[var(--obsidian)] transition-all hover:bg-[var(--brass-soft)]">
              Schedule now →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="small-caps-label text-[var(--obsidian)]/60">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-[var(--obsidian)]/15 bg-transparent py-3 outline-none transition-colors placeholder:text-[var(--obsidian)]/30 focus:border-[var(--brass)]"
      />
    </div>
  );
}
