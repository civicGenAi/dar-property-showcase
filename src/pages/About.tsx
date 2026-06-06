import { BackgroundSVG } from "../components/BackgroundSVG";
import { Reveal, ImageReveal } from "../components/Reveal";
import { StatCounter } from "../components/StatCounter";
import { CTASection } from "../components/CTASection";

const portrait = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80";
const press = ["The East African", "Forbes Africa", "Business Daily", "Property Africa", "Wanted", "Monocle"];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-24 lg:pt-52 lg:pb-32">
        <BackgroundSVG variant="signature" />
        <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-6">
            <ImageReveal src={portrait} alt="Portrait of Kareen, founding advisor" className="aspect-[4/5] w-full" />
          </div>
          <div className="lg:col-span-6 lg:pt-10">
            <Reveal><p className="small-caps-label text-[var(--brass)]">The advisor</p></Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
                I sell <em className="italic text-[var(--brass)]">homes</em>, not square metres.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="brass-hairline mt-10 w-16" />
              <p className="mt-8 font-display text-xl text-[var(--obsidian)]">Kareen</p>
              <p className="small-caps-label mt-2 text-[var(--obsidian)]/60">Founder · Private advisor</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="space-y-8 text-lg leading-[1.85] text-[var(--obsidian)]/85 md:text-xl">
            <Reveal as="p">
              Kareen started in Dar es Salaam's property market eleven years ago, working the only way she still works: by knowing every door on three streets before knocking on a fourth.
            </Reveal>
            <Reveal as="p" delay={0.05}>
              Today the practice is small, deliberately. A handful of clients at a time. A short-list of homes she would buy herself. A standard of service that doesn't scale — and was never meant to.
            </Reveal>
            <Reveal as="p" delay={0.1}>
              Her buyers are diplomats, founders, returning diaspora, and quiet old families. They share two things: they want a real home, and they want one person responsible for finding it.
            </Reveal>
            <Reveal>
              <p className="mt-12 border-l-2 border-[var(--brass)] pl-6 font-display text-3xl italic leading-[1.3] text-[var(--emerald)] md:text-4xl">
                "The phrase came from a client at dinner — she introduced me to her sister as 'my agent', the way you'd say my doctor, my lawyer. It stuck."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[var(--obsidian)]/10 bg-[var(--muted)] py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <StatCounter value={84} prefix="TZS " suffix="B+" label="Closed value" />
          <StatCounter value={230} suffix="+" label="Homes placed" />
          <StatCounter value={94} suffix="%" label="Off-market closes" />
          <StatCounter value={11} label="Years of practice" />
        </div>
      </section>

      {/* PRESS MARQUEE */}
      <section className="relative overflow-hidden py-20">
        <p className="text-center small-caps-label text-[var(--obsidian)]/60">As featured in</p>
        <div className="mt-12 overflow-hidden">
          <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
            {[...press, ...press].map((p, i) => (
              <span key={i} className="font-display text-3xl text-[var(--obsidian)]/30 md:text-4xl">{p}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--emerald-deep)] py-24 text-center text-[var(--ivory)]">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-display text-5xl italic text-[var(--brass-soft)] md:text-6xl">"Kareen is my agent."</p>
          <p className="small-caps-label mt-6 text-[var(--ivory)]/60">— Said by clients, then their friends, then their friends' friends.</p>
        </div>
      </section>

      <CTASection title="Become a client." ctaLabel="Introduce yourself" />
    </>
  );
}
