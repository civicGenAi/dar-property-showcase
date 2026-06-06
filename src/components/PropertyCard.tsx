import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Property } from "../data/properties";

export function PropertyCard({ p, size = "md" }: { p: Property; size?: "sm" | "md" | "lg" }) {
  const h =
    size === "lg" ? "h-[400px] sm:h-[480px] md:h-[560px]" :
    size === "sm" ? "h-[280px] sm:h-[320px]" :
    "h-[340px] sm:h-[400px] md:h-[440px]";
  return (
    <Link to={`/properties/${p.slug}`} className="group block">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden bg-[var(--card)] shadow-[0_20px_60px_-30px_rgba(20,17,15,0.35)]"
      >
        <div className={`relative ${h} overflow-hidden`}>
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--emerald-deep)]/85 via-[var(--emerald-deep)]/10 to-transparent" />
          {p.badge && (
            <span className="absolute left-5 top-5 small-caps-label bg-[var(--brass)] px-3 py-1.5 text-[var(--obsidian)]">
              {p.badge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--ivory)]">
            <p className="small-caps-label text-[var(--brass-soft)]">{p.neighborhood}</p>
            <h3 className="mt-2 font-display text-2xl text-[var(--ivory)] md:text-[28px]">{p.title}</h3>
            <div className="mt-4 flex items-end justify-between">
              <div className="flex gap-5 text-sm text-[var(--ivory)]/80">
                <span>{p.beds} bd</span>
                <span>{p.baths} ba</span>
                <span>{p.sqm} m²</span>
              </div>
              <span className="font-display text-xl text-[var(--brass)]">{p.price}</span>
            </div>
          </div>
          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ivory)]/10 text-[var(--ivory)] opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
            →
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
