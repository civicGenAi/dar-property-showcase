import { useMemo, useState } from "react";
import { BackgroundSVG } from "../components/BackgroundSVG";
import { PropertyCard } from "../components/PropertyCard";
import { Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { properties } from "../data/properties";

const areas = ["All", "Masaki", "Mikocheni", "Mbezi"] as const;
const types = ["Any", "Villa", "Penthouse", "Apartment", "Estate"] as const;
const beds = ["Any", "3+", "4+", "5+"] as const;

export default function Properties() {
  const [area, setArea] = useState<(typeof areas)[number]>("All");
  const [type, setType] = useState<(typeof types)[number]>("Any");
  const [bed, setBed] = useState<(typeof beds)[number]>("Any");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return properties.filter((p) => {
      if (area !== "All" && p.neighborhood !== area) return false;
      if (type !== "Any" && p.type !== type) return false;
      if (bed !== "Any") {
        const min = parseInt(bed);
        if (p.beds < min) return false;
      }
      if (q && !`${p.title} ${p.neighborhood}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [area, type, bed, q]);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--muted)] pt-44 pb-20 lg:pt-52">
        <BackgroundSVG variant="blueprint" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal><p className="small-caps-label text-[var(--brass)]">{properties.length} residences · hand-picked</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              The <em className="italic text-[var(--brass)]">Collection</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[var(--obsidian)]/70">
              Every home below has been personally walked, vetted, and priced. The off-market portfolio sits behind an introduction.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-14 grid gap-3 rounded-md border border-[var(--obsidian)]/10 bg-[var(--ivory)] p-3 shadow-sm md:grid-cols-12 md:gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name or area…"
                className="md:col-span-4 bg-transparent px-4 py-3 outline-none placeholder:text-[var(--obsidian)]/40"
              />
              <Select value={area} onChange={(v) => setArea(v as any)} options={areas} label="Area" className="md:col-span-3" />
              <Select value={type} onChange={(v) => setType(v as any)} options={types} label="Type" className="md:col-span-3" />
              <Select value={bed} onChange={(v) => setBed(v as any)} options={beds} label="Beds" className="md:col-span-2" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-10 flex items-end justify-between">
            <p className="small-caps-label text-[var(--obsidian)]/60">{list.length} of {properties.length} shown</p>
            <p className="small-caps-label text-[var(--brass)]">Sorted by curator's pick</p>
          </div>
          {list.length === 0 ? (
            <div className="py-32 text-center">
              <p className="font-display text-2xl text-[var(--obsidian)]/70">No homes match those filters — yet.</p>
              <p className="mt-3 text-[var(--obsidian)]/60">Loosen a filter, or ask Kareen what's coming next.</p>
            </div>
          ) : (
            <RevealStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <RevealItem key={p.slug}><PropertyCard p={p} /></RevealItem>
              ))}
            </RevealStagger>
          )}

          <div className="mt-20 text-center">
            <button className="border border-[var(--brass)] px-8 py-4 small-caps-label text-[var(--obsidian)] transition-colors hover:bg-[var(--brass)]/10">
              Load more
            </button>
          </div>
        </div>
      </section>

      <CTASection title="Looking for something not listed?" body="Most of the portfolio is private. Tell Kareen what you need and she'll come back with options." />
    </>
  );
}

function Select<T extends string>({
  value, onChange, options, label, className = "",
}: { value: T; onChange: (v: T) => void; options: readonly T[]; label: string; className?: string }) {
  return (
    <label className={`relative flex items-center gap-2 px-4 py-3 border-l border-[var(--obsidian)]/10 first:border-l-0 md:border-l ${className}`}>
      <span className="small-caps-label text-[var(--obsidian)]/50">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="flex-1 cursor-pointer bg-transparent outline-none"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
