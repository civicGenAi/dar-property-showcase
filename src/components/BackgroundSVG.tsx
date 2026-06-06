type Variant = "coastline" | "blueprint" | "arch" | "topo" | "key" | "signature" | "compass";

export function BackgroundSVG({ variant, className = "" }: { variant: Variant; className?: string }) {
  const common = "absolute inset-0 w-full h-full pointer-events-none select-none";
  switch (variant) {
    case "coastline":
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 1440 900" fill="none" aria-hidden>
          <g stroke="var(--emerald)" strokeWidth="1" opacity="0.08" className="animate-drift">
            <path d="M0 680 C 200 660, 380 720, 560 690 S 900 640, 1080 670 1300 700 1440 680" />
            <path d="M0 720 C 220 700, 400 760, 600 730 S 940 680, 1120 710 1320 740 1440 720" />
            <path d="M0 760 C 240 740, 420 800, 640 770 S 980 720, 1160 750 1340 780 1440 760" />
          </g>
          <g stroke="var(--brass)" strokeWidth="0.6" opacity="0.18">
            <path d="M120 820 l40 -20 l60 10 l50 -25 l80 5 l70 -15 l100 20 l60 -10 l90 15 l120 -25 l140 30 l180 -10 l140 25" />
            <rect x="220" y="772" width="6" height="16" />
            <rect x="540" y="752" width="6" height="22" />
            <rect x="940" y="742" width="6" height="28" />
          </g>
        </svg>
      );
    case "blueprint":
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 1440 900" fill="none" aria-hidden>
          <g stroke="var(--emerald)" strokeWidth="0.5" opacity="0.07">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="900" />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 48} x2="1440" y2={i * 48} />
            ))}
          </g>
          <g stroke="var(--brass)" strokeWidth="1" opacity="0.25" fill="none">
            <rect x="80" y="80" width="320" height="220" />
            <line x1="80" y1="180" x2="400" y2="180" />
            <line x1="240" y1="80" x2="240" y2="300" />
            <text x="92" y="100" fontSize="9" fill="var(--brass)" opacity="0.6" fontFamily="monospace">8.20m</text>
            <text x="410" y="190" fontSize="9" fill="var(--brass)" opacity="0.6" fontFamily="monospace">5.40m</text>
          </g>
        </svg>
      );
    case "arch":
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 1440 900" fill="none" aria-hidden>
          <g stroke="var(--emerald)" strokeWidth="0.8" opacity="0.09" fill="none">
            <path d="M80 820 L80 360 A160 160 0 0 1 400 360 L400 820" />
            <path d="M120 820 L120 380 A120 120 0 0 1 360 380 L360 820" />
            <line x1="160" y1="500" x2="320" y2="500" />
            <line x1="160" y1="640" x2="320" y2="640" />
          </g>
          <g stroke="var(--brass)" strokeWidth="0.8" opacity="0.18" fill="none">
            <path d="M1060 820 L1060 360 A160 160 0 0 1 1380 360 L1380 820" />
          </g>
        </svg>
      );
    case "topo":
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 1440 900" fill="none" aria-hidden>
          <g stroke="var(--emerald)" strokeWidth="0.7" opacity="0.08" fill="none">
            {[0,1,2,3,4,5,6,7].map((i) => (
              <path key={i} d={`M-50 ${200 + i*70} C 200 ${160 + i*70}, 500 ${260 + i*70}, 800 ${180 + i*70} S 1200 ${260 + i*70}, 1500 ${200 + i*70}`} />
            ))}
          </g>
          <g stroke="var(--brass)" strokeWidth="0.8" opacity="0.2" fill="none" className="animate-draw">
            <path d="M200 600 C 350 560, 520 640, 680 580 S 980 660, 1200 600" />
          </g>
        </svg>
      );
    case "key":
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 1440 900" fill="none" aria-hidden>
          <g stroke="var(--emerald)" strokeWidth="0.8" opacity="0.08" fill="none">
            <circle cx="1180" cy="220" r="70" />
            <circle cx="1180" cy="220" r="110" />
            <circle cx="1180" cy="220" r="150" />
            <path d="M1180 290 L1180 520 L1210 520 L1210 540 L1180 540 L1180 580 L1220 580" />
          </g>
          <g stroke="var(--brass)" strokeWidth="0.7" opacity="0.18" fill="none">
            <path d="M180 700 L180 460 A100 100 0 0 1 380 460 L380 700 Z" />
          </g>
        </svg>
      );
    case "signature":
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 1440 900" fill="none" aria-hidden>
          <g stroke="var(--emerald)" strokeWidth="0.6" opacity="0.08" fill="none">
            {[0,1,2,3,4,5].map((i) => (
              <ellipse key={i} cx="720" cy="450" rx={200 + i*90} ry={120 + i*55} />
            ))}
          </g>
          <g stroke="var(--brass)" strokeWidth="1" opacity="0.25" fill="none" className="animate-draw">
            <path d="M180 760 C 260 720, 320 800, 400 740 S 520 720, 600 760 720 700 820 740" />
          </g>
        </svg>
      );
    case "compass":
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 1440 900" fill="none" aria-hidden>
          <g stroke="var(--emerald)" strokeWidth="0.6" opacity="0.08" fill="none">
            <path d="M-50 720 C 200 700, 400 760, 640 720 S 1080 680, 1500 720" />
            <path d="M-50 760 C 200 740, 400 800, 640 760 S 1080 720, 1500 760" />
            <path d="M-50 800 C 200 780, 400 840, 640 800 S 1080 760, 1500 800" />
          </g>
          <g stroke="var(--brass)" strokeWidth="0.8" opacity="0.2" fill="none">
            <circle cx="1240" cy="220" r="80" />
            <circle cx="1240" cy="220" r="120" />
            <path d="M1240 100 L1252 220 L1240 340 L1228 220 Z" />
            <path d="M1120 220 L1240 208 L1360 220 L1240 232 Z" />
            <text x="1234" y="92" fontSize="10" fill="var(--brass)" fontFamily="serif">N</text>
          </g>
        </svg>
      );
  }
}
