import { BackgroundSVG } from "../components/BackgroundSVG";
import { Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";

const services = [
  { t: "Buying", d: "Curated short-lists, off-market access, hands-on negotiation, and a single point of contact through close." },
  { t: "Selling", d: "Discreet positioning to a pre-qualified buyer pool — most homes sell before they ever need a public listing." },
  { t: "Leasing", d: "Long-term residential and diplomatic leases, fully managed, with thorough tenant vetting." },
  { t: "Property Management", d: "White-glove care for second homes: staffing, maintenance, security, and seasonal preparation." },
  { t: "Investment Advisory", d: "Yield-led acquisitions and portfolio review for clients building long positions in Dar." },
];

const steps = [
  { n: "01", t: "Consult", d: "A private conversation to understand the brief, the budget, and the boundaries." },
  { n: "02", t: "Curate", d: "A tight short-list — on-market and off-market — surfaced within days, not weeks." },
  { n: "03", t: "View", d: "Coordinated viewings on your schedule, with full background on each home and owner." },
  { n: "04", t: "Negotiate", d: "Direct, informed, calm. Years of closing on behalf of buyers who don't repeat themselves." },
  { n: "05", t: "Close", d: "Legal coordination, due diligence, transfers — managed end to end." },
  { n: "06", t: "Aftercare", d: "The relationship continues — staffing, renovations, resale advice, the next home." },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--muted)] pt-44 pb-24 lg:pt-52 lg:pb-32">
        <BackgroundSVG variant="key" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal><p className="small-caps-label text-[var(--brass)]">A private advisory practice</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] md:text-6xl lg:text-[88px]">
              Beyond the <em className="italic text-[var(--brass)]">transaction</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-[var(--obsidian)]/70 md:text-xl">
              Buying a home in Dar es Salaam should feel like being introduced to a city — not negotiating with strangers. Here's what the practice covers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading eyebrow="What I do" title={<>Five services. <em className="italic text-[var(--brass)]">One advisor.</em></>} />
          <RevealStagger className="mt-16 grid gap-px bg-[var(--obsidian)]/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <RevealItem key={s.t}>
                <article className="group relative h-full bg-[var(--ivory)] p-10 transition-colors hover:bg-[var(--muted)]">
                  <p className="font-display text-3xl text-[var(--brass)]">0{i + 1}</p>
                  <h3 className="mt-6 font-display text-3xl">{s.t}</h3>
                  <div className="brass-hairline mt-4 w-12 transition-all duration-500 group-hover:w-24" />
                  <p className="mt-6 text-[var(--obsidian)]/70 leading-[1.7]">{s.d}</p>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="relative bg-[var(--emerald-deep)] py-24 text-[var(--ivory)] lg:py-32">
        <BackgroundSVG variant="topo" className="opacity-70" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal><p className="small-caps-label text-[var(--brass)]">The process</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 max-w-3xl font-display text-4xl text-[var(--ivory)] md:text-5xl lg:text-6xl">
              Six steps. <em className="italic text-[var(--brass-soft)]">No surprises.</em>
            </h2>
          </Reveal>

          <ol className="relative mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <RevealItem key={s.n}>
                <li className="relative pl-10">
                  <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--brass)] bg-[var(--emerald-deep)] text-[10px] font-semibold text-[var(--brass)]">
                    {i + 1}
                  </span>
                  <p className="small-caps-label text-[var(--brass)]">{s.n}</p>
                  <h3 className="mt-3 font-display text-2xl text-[var(--ivory)]">{s.t}</h3>
                  <p className="mt-3 text-[var(--ivory)]/70 leading-[1.65]">{s.d}</p>
                </li>
              </RevealItem>
            ))}
          </ol>
        </div>
      </section>

      {/* DISCRETION CALLOUT */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <p className="small-caps-label text-[var(--brass)]">Discretion</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">For clients who need to stay <em className="italic text-[var(--brass)]">unseen</em>.</h2>
          </div>
          <div className="space-y-6 text-lg leading-[1.7] text-[var(--obsidian)]/75 lg:col-span-7">
            <p>NDAs are signed at the first conversation, not the offer. The portfolio that matters is the one nobody publishes.</p>
            <p>For diplomats, founders, public figures and returning diaspora, the practice runs entirely off the record — viewings out of hours, listings shared by hand, and a buyer's name that only reaches the seller at exchange.</p>
            <p className="font-display text-2xl italic text-[var(--emerald)]">"Privacy is the first feature. Everything else is finishings."</p>
          </div>
        </div>
      </section>

      <CTASection title="Start with a conversation." ctaLabel="Reach Kareen privately" />
    </>
  );
}
