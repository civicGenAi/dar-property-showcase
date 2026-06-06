import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--emerald-deep)] text-[var(--ivory)]">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="origin-left brass-hairline"
      />
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-display text-4xl leading-[1.1] text-[var(--ivory)] md:text-5xl lg:text-6xl">
              Let's find where your <em className="text-[var(--brass-soft)]">next chapter</em> begins.
            </p>
            <div className="mt-10"><Wordmark variant="light" /></div>
            <p className="mt-6 max-w-md text-[var(--ivory)]/70">
              Kareen is a private advisor placing premium homes in Masaki, Mikocheni and Mbezi Beach.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="small-caps-label text-[var(--brass)]">Explore</p>
            <ul className="mt-5 space-y-3 text-[var(--ivory)]/80">
              <li><Link to="/properties" className="hover:text-[var(--brass-soft)]">Properties</Link></li>
              <li><Link to="/neighborhoods" className="hover:text-[var(--brass-soft)]">Neighborhoods</Link></li>
              <li><Link to="/services" className="hover:text-[var(--brass-soft)]">Services</Link></li>
              <li><Link to="/about" className="hover:text-[var(--brass-soft)]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--brass-soft)]">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="small-caps-label text-[var(--brass)]">Areas</p>
            <ul className="mt-5 space-y-3 text-[var(--ivory)]/80">
              <li>Masaki</li>
              <li>Mikocheni</li>
              <li>Mbezi Beach</li>
              <li className="text-[var(--ivory)]/50">+ off-market</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="small-caps-label text-[var(--brass)]">Office</p>
            <ul className="mt-5 space-y-3 text-[var(--ivory)]/80">
              <li>Slipway Road, Masaki</li>
              <li>Dar es Salaam</li>
              <li>+255 700 000 000</li>
              <li>hello@kareenismyagent.co</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[var(--ivory)]/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display italic text-[var(--brass-soft)]">"Kareen is my agent."</p>
          <div className="flex items-center gap-5 small-caps-label text-[var(--ivory)]/60">
            <a href="#" className="hover:text-[var(--brass)]">Instagram</a>
            <a href="#" className="hover:text-[var(--brass)]">LinkedIn</a>
            <a href="#" className="hover:text-[var(--brass)]">WhatsApp</a>
          </div>
          <p className="text-xs text-[var(--ivory)]/40">© {new Date().getFullYear()} kareenismyagent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
