export function Wordmark({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const main = variant === "dark" ? "text-[var(--obsidian)]" : "text-[var(--ivory)]";
  const sub = variant === "dark" ? "text-[var(--obsidian)]/70" : "text-[var(--ivory)]/70";
  return (
    <div className="flex items-baseline gap-2 leading-none">
      <span className={`font-display text-2xl tracking-tight ${main}`}>
        Kareen<span className="text-[var(--brass)]">.</span>
      </span>
      <span className={`small-caps-label hidden sm:inline ${sub}`}>is my agent</span>
    </div>
  );
}

export function Monogram() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brass)] font-display text-base text-[var(--brass)]">
      K<span className="text-[var(--brass)]">.</span>
    </span>
  );
}
