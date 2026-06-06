import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export function StatCounter({
  value, prefix = "", suffix = "", label, duration = 1800, align = "center",
}: { value: number; prefix?: string; suffix?: string; label: string; duration?: number; align?: "left" | "center" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const alignClass =
    align === "left" ? "text-left items-start" :
    align === "right" ? "text-right items-end" :
    "text-center items-center";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`relative flex flex-col ${alignClass} md:text-left md:items-start`}
    >
      {/* decorative brass corner — visible on mobile, hidden on md+ */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-2 h-3 w-3 border-[var(--brass)]/70 md:hidden ${
          align === "right" ? "right-0 border-r border-t" : "left-0 border-l border-t"
        }`}
      />
      <motion.p
        initial={{ letterSpacing: "0.04em" }}
        animate={inView ? { letterSpacing: "0em" } : {}}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="font-display text-4xl text-[var(--emerald)] sm:text-5xl md:text-6xl"
      >
        {prefix}{n.toLocaleString()}{suffix}
      </motion.p>
      <span className="brass-hairline mt-3 w-10 md:w-16" />
      <p className="small-caps-label mt-3 text-[10px] text-[var(--obsidian)]/60 sm:text-xs">{label}</p>
    </motion.div>
  );
}
