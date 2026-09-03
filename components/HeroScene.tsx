"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Sparkle from "@/components/Sparkle";
import { siteConfig } from "@/constants/content";

/**
 * The hero: right-aligned copy beside the planted cactus. Kept cool and
 * quiet — orbit rings behind the headline and the occasional shooting
 * star.
 */
export default function HeroScene() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 900], [0, 90]);
  const contentOpacity = useTransform(scrollY, [0, 650], [1, 0.15]);

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28 md:px-12 lg:pl-[42vw]"
    >
      {/* --- set dressing (decorative layer) --- */}
      <div aria-hidden="true" className="absolute inset-0">
        {/* orbit rings behind the headline */}
        <div className="absolute right-[9%] top-[16%] hidden lg:block">
          <div className="animate-orbit h-[30rem] w-[30rem] rounded-full border-[3px] border-dashed border-cream/25">
            <span className="absolute left-1/2 top-[-9px] h-4 w-4 -translate-x-1/2 rounded-full bg-blush shadow-[0_0_12px_rgba(247,146,186,0.9)]" />
          </div>
          <div className="animate-orbit-reverse absolute inset-14 rounded-full border-2 border-dotted border-cream/20">
            <span className="absolute bottom-[6%] right-[10%] h-3 w-3 rounded-full bg-blush shadow-[0_0_10px_rgba(247,146,186,0.9)]" />
          </div>
        </div>

        {/* shooting star */}
        {!reducedMotion && (
          <motion.div
            initial={{ x: "-10vw", y: "6vh", opacity: 0 }}
            animate={{ x: "70vw", y: "26vh", opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5.5, ease: "easeOut" }}
            className="absolute h-[3px] w-28 -rotate-[16deg] rounded-full bg-gradient-to-r from-transparent via-cream to-transparent"
          />
        )}

        <Sparkle className="absolute left-[16%] top-[22%]" delay={0.4} />
        <Sparkle className="absolute right-[24%] top-[12%]" size={18} delay={1.2} />
        <Sparkle className="absolute left-[38%] bottom-[30%]" size={16} delay={2} />
        <Sparkle className="absolute right-[8%] bottom-[38%]" size={28} delay={0.8} color="rgba(247,146,186,0.9)" />
        <Sparkle className="absolute right-[40%] top-[52%]" size={12} delay={1.7} color="rgba(247,146,186,0.8)" />
      </div>

      {/* --- copy --- */}
      <motion.div
        style={reducedMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 12 }}
          className="mb-6 lg:hidden"
        >
          <Image
            src="/cactus-hero.png"
            alt=""
            width={964}
            height={932}
            loading="eager"
            className="w-44 drop-shadow-[0_12px_20px_rgba(11,58,60,0.35)] md:w-56"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 3, y: 40 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 12, delay: 0.25 }}
        >
          <motion.h1
            animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [-0.5, 0.5, -0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="mt-4 whitespace-nowrap text-5xl font-extrabold uppercase leading-none tracking-tight md:text-7xl xl:text-8xl"
          >
            HackWesTX <span className="text-blush">2026</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.5 }}
          className="text-pop mt-8 text-xl font-bold md:text-2xl"
        >
          Sept 12-13 · Texas Tech University · Lubbock, TX
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.8 }}
          className="mt-9"
        >
          <a
            href={siteConfig.links.register}
            className="sticker-card inline-block bg-blush px-9 py-4 font-display text-xl font-bold text-ink"
          >
            Register now →
          </a>
        </motion.div>

        <motion.nav
          aria-label="HackWesTX social links"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 14, delay: 1 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="HackWesTX on Instagram"
            className="scrap-chip flex h-11 w-11 items-center justify-center bg-cream text-ink transition hover:brightness-105"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href={siteConfig.links.devpost}
            target="_blank"
            rel="noreferrer"
            className="scrap-chip flex h-11 items-center bg-cream px-4 text-sm font-bold text-ink transition hover:brightness-105"
          >
            Devpost ↗
          </a>
        </motion.nav>
      </motion.div>

    </section>
  );
}
