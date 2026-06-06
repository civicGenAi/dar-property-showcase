import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export function StatCounter({
  value, prefix = "", suffix = "", label, duration = 1800,
}: { value: number; prefix?: string; suffix?: string; label: string; duration?: number }) {
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center md:text-left"
    >
      <p className="font-display text-5xl text-[var(--emerald)] md:text-6xl">
        {prefix}{n.toLocaleString()}{suffix}
      </p>
      <p className="small-caps-label mt-3 text-[var(--obsidian)]/60">{label}</p>
    </motion.div>
  );
}
