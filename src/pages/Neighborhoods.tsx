import { Link } from "react-router-dom";
import { BackgroundSVG } from "../components/BackgroundSVG";
import { Reveal, ImageReveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";

const areas = [
  {
    name: "Masaki",
    tagline: "The diplomatic peninsula.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    body: "The peninsula that holds Dar es Salaam's embassies, slipway, and most of its trophy homes. Ocean on three sides, walking distance to the city's best dinners. If you want to be seen — but on your terms — this is the address.",
    stats: [
      { k: "Avg price", v: "TZS 3.6B" },
      { k: "Vibe", v: "Diplomatic, established" },
      { k: "Commute", v: "12 min to CBD" },
      { k: "Who lives here", v: "Diplomats, founders, returning diaspora" },
    ],
  },
  {
    name: "Mikocheni",
    tagline: "Quiet, architectural, insider.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
    body: "Leafy lanes, architect-designed houses, and a tight community of long-term residents. Less seen, more chosen — the neighborhood for people who already know where they want to live.",
    stats: [
      { k: "Avg price", v: "TZS 1.8B" },
      { k: "Vibe", v: "Quiet, design-led" },
      { k: "Commute", v: "18 min to CBD" },
      { k: "Who lives here", v: "Architects, NGO leadership, families" },
    ],
  },
  {
    name: "Mbezi Beach",
    tagline: "Coastal calm, generational plots.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80",
    body: "Larger plots, deeper privacy, and a coastline that still feels like a secret. Mbezi rewards patience — the right home here stays in a family for two generations.",
    stats: [
      { k: "Avg price", v: "TZS 2.4B" },
      { k: "Vibe", v: "Private, generational" },
      { k: "Commute", v: "28 min to CBD" },
      { k: "Who lives here", v: "Multi-generational families, executives" },
    ],
  },
] as const;

export default function Neighborhoods() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--emerald-deep)] pt-44 pb-28 text-[var(--ivory)] lg:pt-52 lg:pb-40">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1582268611958-ebfd161df9d8?auto=format&fit=crop&w=2400&q=80" alt="Aerial of the Dar es Salaam coast" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--emerald-deep)]/40 to-[var(--emerald-deep)]" />
        </div>
        <BackgroundSVG variant="topo" className="opacity-70" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal><p className="small-caps-label text-[var(--brass)]">Local knowledge · twelve years deep</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-[var(--ivory)] md:text-6xl lg:text-[88px]">
              Three addresses that <em className="text-[var(--brass-soft)] not-italic">define</em> Dar es Salaam.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg text-[var(--ivory)]/75 md:text-xl">
              Each has its own rhythm. Each rewards a different kind of life. Here's how to choose.
            </p>
          </Reveal>
        </div>
      </section>

      {areas.map((a, i) => (
        <section key={a.name} className={`relative py-24 lg:py-32 ${i % 2 ? "bg-[var(--muted)]" : "bg-[var(--ivory)]"}`}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-20 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-7">
                <ImageReveal src={a.img} alt={a.name} className="aspect-[5/4] w-full" />
              </div>
              <div className="lg:col-span-5">
                <Reveal><p className="small-caps-label text-[var(--brass)]">0{i + 1} · Neighborhood</p></Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl">{a.name}</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-4 font-display italic text-2xl text-[var(--brass)]">{a.tagline}</p>
                </Reveal>
                <div className="brass-hairline mt-8 w-16" />
                <Reveal delay={0.15}>
                  <p className="mt-8 text-lg leading-[1.7] text-[var(--obsidian)]/75">{a.body}</p>
                </Reveal>
                <Reveal delay={0.2}>
                  <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5">
                    {a.stats.map((s) => (
                      <div key={s.k}>
                        <dt className="small-caps-label text-[var(--obsidian)]/50">{s.k}</dt>
                        <dd className="mt-1 font-display text-xl">{s.v}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
                <Reveal delay={0.25}>
                  <Link to={`/properties`} className="mt-10 inline-flex items-center gap-3 small-caps-label text-[var(--emerald)] hover:text-[var(--brass)]">
                    See homes in {a.name} →
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[var(--emerald)] py-20 text-[var(--ivory)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="small-caps-label text-[var(--brass)]">How I work each area</p>
          <p className="mt-6 max-w-3xl font-display text-3xl leading-[1.3] md:text-4xl">
            I don't farm the city. I farm three neighborhoods — door by door, owner by owner. That's how the off-market portfolio gets built, and why my clients hear about homes weeks before the market does.
          </p>
        </div>
      </section>

      <CTASection title="Pick the neighborhood. I'll handle the rest." />
    </>
  );
}
