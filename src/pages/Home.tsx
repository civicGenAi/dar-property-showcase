import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BackgroundSVG } from "../components/BackgroundSVG";
import { Reveal, RevealStagger, RevealItem, ImageReveal } from "../components/Reveal";
import { PropertyCard } from "../components/PropertyCard";
import { StatCounter } from "../components/StatCounter";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";
import { properties } from "../data/properties";

const hero = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=80";

const neighborhoods = [
  { name: "Masaki", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80" },
  { name: "Mikocheni", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80" },
  { name: "Mbezi Beach", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featured = properties.filter((p) => p.badge === "Featured").slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[var(--emerald-deep)]">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={hero} alt="Ocean-view villa at golden hour" className="h-[120%] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--emerald-deep)]/40 via-[var(--emerald-deep)]/30 to-[var(--emerald-deep)]/85" />
        </motion.div>
        <BackgroundSVG variant="coastline" className="opacity-50" />

        <motion.div style={{ opacity }} className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-28 lg:px-12 lg:pb-32">
          <Reveal>
            <p className="small-caps-label text-[var(--brass-soft)]">Dar es Salaam · Private advisory</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-5xl font-display text-[44px] leading-[1.02] text-[var(--ivory)] sm:text-6xl md:text-7xl lg:text-[96px]">
              Homes for a higher <em className="text-[var(--brass-soft)] not-italic">standard</em> of living.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg text-[var(--ivory)]/80 md:text-xl">
              A curated collection of premium properties across Masaki, Mikocheni and Mbezi — quietly placed for clients who expect more.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/properties" className="bg-[var(--ivory)] px-7 py-4 small-caps-label text-[var(--obsidian)] transition-transform hover:scale-[1.02]">
                Browse Properties
              </Link>
              <Link to="/contact" className="border border-[var(--brass)] px-7 py-4 small-caps-label text-[var(--brass-soft)] transition-colors hover:bg-[var(--brass)]/10">
                Book a Viewing
              </Link>
            </div>
          </Reveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 small-caps-label text-[var(--ivory)]/60"
        >
          <span className="block h-12 w-px bg-[var(--ivory)]/40 mx-auto mb-3 animate-pulse" />
          Scroll
        </motion.div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="relative bg-[var(--ivory)] py-28 lg:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <Reveal>
            <p className="small-caps-label text-[var(--brass)]">A private practice</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-3xl leading-[1.2] text-[var(--obsidian)] md:text-4xl lg:text-5xl">
              "Most of what I sell never reaches a website. The right home, for the right person, found before anyone else hears about it."
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="brass-hairline mx-auto mt-12 w-24" />
            <p className="mt-6 small-caps-label text-[var(--obsidian)]/60">— Kareen, founding advisor</p>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[var(--obsidian)]/10 bg-[var(--muted)] py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <StatCounter value={84} prefix="TZS " suffix="B+" label="Closed value" />
          <StatCounter value={230} suffix="+" label="Homes placed" />
          <StatCounter value={3} label="Premium neighborhoods" />
          <StatCounter value={11} label="Years of practice" />
        </div>
      </section>

      {/* FEATURED LISTINGS — asymmetric */}
      <section className="relative py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-end justify-between gap-8">
            <SectionHeading
              eyebrow="The collection"
              title={<>This month's <em className="italic text-[var(--brass)]">private</em> picks</>}
              lead="A handful of homes from across the portfolio. The rest are shared in conversation."
            />
            <Link to="/properties" className="hidden small-caps-label text-[var(--emerald)] hover:text-[var(--brass)] md:inline-flex md:items-center md:gap-2">
              View all →
            </Link>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7"><PropertyCard p={featured[0]} size="lg" /></div>
            <div className="flex flex-col gap-8 lg:col-span-5">
              <PropertyCard p={featured[1] || properties[1]} size="md" />
              <PropertyCard p={featured[2] || properties[2]} size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS TEASER */}
      <section className="relative bg-[var(--emerald-deep)] py-28 text-[var(--ivory)] lg:py-40">
        <BackgroundSVG variant="topo" className="opacity-60" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <Reveal><p className="small-caps-label text-[var(--brass)]">Three addresses</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-[var(--ivory)] md:text-5xl lg:text-6xl">
                The neighborhoods that <em className="text-[var(--brass-soft)] not-italic">define</em> the city.
              </h2>
            </Reveal>
          </div>
          <RevealStagger className="mt-16 grid gap-6 md:grid-cols-3">
            {neighborhoods.map((n) => (
              <RevealItem key={n.name}>
                <Link to="/neighborhoods" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={n.img} alt={n.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--emerald-deep)] via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="small-caps-label text-[var(--brass)]">Neighborhood</p>
                      <p className="mt-2 font-display text-3xl text-[var(--ivory)] transition-transform group-hover:translate-x-1 md:text-4xl">{n.name}</p>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading eyebrow="Why work with her" title={<>A quieter way to <em className="italic text-[var(--brass)]">buy property</em>.</>} />
          <RevealStagger className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              { t: "Discretion", d: "NDAs as standard. Most of the portfolio is shared privately, never publicly listed." },
              { t: "Access", d: "Pre-market introductions and direct lines to owners across the premium districts." },
              { t: "Negotiation", d: "Years of closing on behalf of buyers who don't have time to lose — or to repeat themselves." },
            ].map((c, i) => (
              <RevealItem key={c.t}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-[var(--brass)]">0{i + 1}</span>
                  <div className="brass-hairline flex-1" />
                </div>
                <h3 className="mt-6 font-display text-3xl">{c.t}</h3>
                <p className="mt-4 text-[var(--obsidian)]/70">{c.d}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[var(--emerald)] py-28 text-[var(--ivory)] lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <Reveal>
            <p className="small-caps-label text-[var(--brass)]">A client</p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 font-display text-3xl leading-[1.25] text-[var(--ivory)] md:text-4xl lg:text-5xl">
              "She showed me three homes and I bought the second. No noise, no pressure, no theatre. Kareen is my agent — and she's my friend's now too."
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 small-caps-label text-[var(--brass-soft)]">— Private client, Masaki</p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
