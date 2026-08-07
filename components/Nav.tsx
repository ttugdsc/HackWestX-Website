"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/constants/content";

const links = [
  { href: "#about", label: "about" },
  { href: "#tracks", label: "tracks" },
  { href: "#sponsors", label: "sponsors" },
  { href: "#faq", label: "faq" },
] as const;

/**
 * Left-hand nav: links start after the MLH badge's corner. No wordmark —
 * the giant cactus IS the logo.
 */
export default function Nav() {
  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-lagoon-deep/70 to-transparent"
    >
      <nav className="flex items-center gap-6 py-3 pl-28 pr-6 font-mono text-sm sm:pl-36">
        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/90 underline-offset-4 transition hover:text-sunshine hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={siteConfig.links.register}
          className="scrap-chip bg-blush px-4 py-1.5 text-ink transition hover:brightness-105"
        >
          register
        </a>
      </nav>
    </motion.header>
  );
}
