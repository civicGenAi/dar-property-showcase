import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Wordmark, Monogram } from "./Wordmark";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/properties", label: "Properties" },
  { to: "/neighborhoods", label: "Neighborhoods" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(247,243,236,0.85)" : "rgba(247,243,236,0)",
          borderColor: scrolled ? "rgba(20,17,15,0.06)" : "rgba(20,17,15,0)",
          paddingTop: scrolled ? 10 : 22,
          paddingBottom: scrolled ? 10 : 22,
        }}
        transition={{ duration: 0.35 }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-3">
            <span className="sm:hidden"><Monogram /></span>
            <span className="hidden sm:inline-flex"><Wordmark /></span>
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `small-caps-label transition-colors hover:text-[var(--emerald)] ${
                    isActive ? "text-[var(--emerald)]" : "text-[var(--obsidian)]/70"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden border border-[var(--brass)] px-5 py-2.5 small-caps-label text-[var(--obsidian)] transition-colors hover:bg-[var(--brass)]/15 md:inline-block"
          >
            Book a Viewing
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden small-caps-label text-[var(--obsidian)]"
          >
            Menu
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-[var(--emerald-deep)] text-[var(--ivory)]"
          >
            <div className="flex items-center justify-between px-6 pt-6 lg:px-12">
              <Wordmark variant="light" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="small-caps-label text-[var(--ivory)]"
              >
                Close
              </button>
            </div>
            <nav className="flex h-[calc(100vh-80px)] flex-col items-start justify-center gap-6 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                >
                  <Link to={l.to} className="font-display text-5xl md:text-6xl text-[var(--ivory)]">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <Link to="/contact" className="border border-[var(--brass)] px-6 py-3 small-caps-label text-[var(--brass)]">
                  Book a Viewing
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
