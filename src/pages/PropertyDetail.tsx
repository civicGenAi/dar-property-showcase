import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BackgroundSVG } from "../components/BackgroundSVG";
import { Reveal } from "../components/Reveal";
import { PropertyCard } from "../components/PropertyCard";
import { CTASection } from "../components/CTASection";
import { getProperty, similar } from "../data/properties";

export default function PropertyDetail() {
  const { slug = "" } = useParams();
  const p = getProperty(slug);
  const [active, setActive] = useState(0);

  if (!p) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-6 pt-32 text-center">
        <div>
          <p className="small-caps-label text-[var(--brass)]">Not found</p>
          <h1 className="mt-4 font-display text-4xl">This residence isn't in the collection.</h1>
          <Link to="/properties" className="mt-8 inline-block border border-[var(--brass)] px-6 py-3 small-caps-label">Back to Properties</Link>
        </div>
      </div>
    );
  }

  const gallery = p.gallery.length ? p.gallery : [p.image];

  return (
    <>
      <section className="relative pt-32 pb-10 lg:pt-40">
        <BackgroundSVG variant="arch" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-3 small-caps-label text-[var(--obsidian)]/60">
              <Link to="/properties" className="hover:text-[var(--brass)]">Properties</Link>
              <span>/</span>
              <span className="text-[var(--obsidian)]">{p.neighborhood}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">{p.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <p className="text-lg text-[var(--obsidian)]/70 md:text-xl max-w-2xl">{p.blurb}</p>
              <p className="font-display text-4xl text-[var(--brass)] md:text-5xl">{p.price}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--muted)]">
            <img src={gallery[active]} alt={p.title} className="h-full w-full object-cover transition-opacity duration-500" />
            {p.badge && (
              <span className="absolute left-6 top-6 small-caps-label bg-[var(--brass)] px-3 py-1.5 text-[var(--obsidian)]">{p.badge}</span>
            )}
          </div>
          {gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3 md:gap-4">
              {gallery.slice(0, 4).map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative aspect-[4/3] overflow-hidden transition-all ${active === i ? "ring-2 ring-[var(--brass)] ring-offset-2 ring-offset-[var(--ivory)]" : "opacity-70 hover:opacity-100"}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-7">
            <p className="small-caps-label text-[var(--brass)]">Overview</p>
            <div className="brass-hairline mt-4 w-16" />
            <p className="mt-8 font-display text-2xl leading-[1.35] text-[var(--obsidian)] md:text-3xl">{p.description}</p>
            <p className="mt-8 text-lg text-[var(--obsidian)]/70 leading-[1.7]">
              The home is offered turnkey, with introductions to the architect, builder and current household team available on request. Viewings are strictly by appointment.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-32 border border-[var(--obsidian)]/10 bg-[var(--card)] p-8 shadow-[0_20px_60px_-30px_rgba(20,17,15,0.3)]">
              <p className="small-caps-label text-[var(--brass)]">{p.neighborhood} · {p.type}</p>
              <p className="mt-3 font-display text-4xl text-[var(--obsidian)]">{p.price}</p>
              <div className="mt-6 grid grid-cols-3 gap-4 border-y border-[var(--obsidian)]/10 py-5 text-center">
                <Stat label="Beds" value={p.beds} />
                <Stat label="Baths" value={p.baths} />
                <Stat label="Area" value={`${p.sqm} m²`} />
              </div>
              <Link to="/contact" className="mt-6 block w-full bg-[var(--emerald)] py-4 text-center small-caps-label text-[var(--ivory)] transition-colors hover:bg-[var(--emerald-deep)]">
                Book a Viewing
              </Link>
              <button className="mt-3 w-full border border-[var(--brass)] py-4 small-caps-label text-[var(--obsidian)] hover:bg-[var(--brass)]/10">
                Request floor plan
              </button>
              <div className="mt-6 brass-hairline" />
              <p className="mt-6 small-caps-label text-[var(--obsidian)]/60">Your advisor</p>
              <p className="mt-2 font-display text-xl">Kareen</p>
              <p className="text-sm text-[var(--obsidian)]/60">+255 700 000 000</p>
            </div>
          </aside>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative bg-[var(--muted)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="small-caps-label text-[var(--brass)]">Highlights</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">What makes it special.</h2>
          <div className="brass-hairline mt-8 w-24" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f, i) => (
              <li key={f} className="flex items-baseline gap-4 border-b border-[var(--obsidian)]/10 py-4">
                <span className="font-display text-xl text-[var(--brass)]">0{i + 1}</span>
                <span className="text-lg">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LOCATION */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="small-caps-label text-[var(--brass)]">Location</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">{p.neighborhood}.</h2>
            <div className="brass-hairline mt-6 w-16" />
            <p className="mt-8 text-lg text-[var(--obsidian)]/70 leading-[1.7]">
              {p.neighborhood === "Masaki" && "Dar es Salaam's diplomatic peninsula — embassies, slipway, ocean-facing roads, and the city's most established residential addresses."}
              {p.neighborhood === "Mikocheni" && "Quiet leafy lanes, architect-designed homes, and a tight community of long-term residents minutes from the bay."}
              {p.neighborhood === "Mbezi" && "Coastal calm with deeper plots — generational family estates and a slower, more private rhythm."}
            </p>
            <Link to="/neighborhoods" className="mt-8 inline-flex items-center gap-2 small-caps-label text-[var(--emerald)] hover:text-[var(--brass)]">
              More on {p.neighborhood} →
            </Link>
          </div>
          <div className="relative aspect-square overflow-hidden bg-[var(--emerald-deep)] lg:aspect-auto">
            <BackgroundSVG variant="compass" className="opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-[var(--ivory)]">
                <p className="font-display text-3xl">{p.neighborhood}</p>
                <p className="mt-2 small-caps-label text-[var(--brass-soft)]">Dar es Salaam, TZ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMILAR */}
      <section className="relative bg-[var(--muted)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="small-caps-label text-[var(--brass)]">You may also like</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Similar residences.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {similar(p.slug, 3).map((s) => <PropertyCard key={s.slug} p={s} />)}
          </div>
        </div>
      </section>

      <CTASection ctaLabel="Arrange a private viewing" />
    </>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <p className="font-display text-2xl">{value}</p>
      <p className="small-caps-label mt-1 text-[var(--obsidian)]/50">{label}</p>
    </div>
  );
}
