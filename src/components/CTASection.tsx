import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "A private conversation, when you're ready.",
  body = "Off-market homes, discreet introductions, and a level of care most buyers never experience.",
  ctaLabel = "Book a viewing",
  ctaTo = "/contact",
}: { title?: string; body?: string; ctaLabel?: string; ctaTo?: string }) {
  return (
    <section className="relative overflow-hidden bg-[var(--emerald)] text-[var(--ivory)]">
      <div className="absolute inset-0 opacity-[0.06]">
        <svg viewBox="0 0 1440 600" className="h-full w-full" aria-hidden>
          <g stroke="var(--brass)" strokeWidth="0.6" fill="none">
            {Array.from({ length: 12 }).map((_, i) => (
              <path key={i} d={`M-50 ${100 + i*40} C 300 ${60 + i*40}, 700 ${160 + i*40}, 1100 ${80 + i*40} S 1500 ${140 + i*40}, 1700 ${100 + i*40}`} />
            ))}
          </g>
        </svg>
      </div>
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-8">
          <Reveal><p className="small-caps-label text-[var(--brass)]">Concierge access</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">{title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[var(--ivory)]/75 md:text-lg">{body}</p>
          </Reveal>
        </div>
        <div className="flex items-end lg:col-span-4 lg:justify-end">
          <Reveal delay={0.15}>
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-3 border border-[var(--brass)] bg-[var(--brass)] px-7 py-4 small-caps-label text-[var(--obsidian)] transition-all hover:bg-[var(--brass-soft)] hover:translate-x-1"
            >
              {ctaLabel} <span>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
