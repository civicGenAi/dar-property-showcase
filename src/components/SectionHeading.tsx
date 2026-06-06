import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow, title, lead, align = "left",
}: { eyebrow?: string; title: ReactNode; lead?: ReactNode; align?: "left" | "center" }) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <Reveal>
          <p className="small-caps-label text-[var(--brass)]">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] text-[var(--obsidian)] md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-[var(--obsidian)]/70 md:text-xl">{lead}</p>
        </Reveal>
      )}
      <div className="brass-hairline mt-8 w-24" />
    </div>
  );
}
