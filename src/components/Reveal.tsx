import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: { children: ReactNode; delay?: number; className?: string; as?: "div" | "section" | "li" | "h1" | "h2" | "p" }) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

export function RevealStagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    >
      {children}
    </motion.div>
  );
}

export const RevealItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div className={className} variants={variants}>{children}</motion.div>
);

export function ImageReveal({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        initial={{ scale: 1.15, clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ scale: 1, clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
