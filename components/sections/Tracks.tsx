"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import FloatingElement from "@/components/FloatingElement";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import TiltCard from "@/components/TiltCard";
import { tracksCopy } from "@/constants/content";

const cardTilt = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"] as const;

export default function Tracks() {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState<string | null>("tcl");

  return (
    <section id="tracks" className="relative mx-auto max-w-5xl px-6 py-28">
      <Sparkle className="absolute right-[8%] top-[10%]" size={22} delay={1} />
      <Sparkle
        className="absolute left-[14%] bottom-[12%]"
        size={16}
        delay={2.2}
        color="rgba(255,209,102,0.9)"
      />

      <Reveal>
        <div className="flex justify-center">
          <div className="relative">
            <h2 className="text-center text-5xl font-extrabold uppercase md:text-7xl">
              Tracks
            </h2>
            {/* the hat hangs off the title's corner, like it was tossed there */}
            <FloatingElement
              src="/cowboy-hat.png"
              alt=""
              width={1408}
              height={768}
              className="absolute -right-16 -top-9 w-24 -rotate-[18deg] md:-right-24 md:-top-12 md:w-32"
              duration={7}
              sway={4}
              bob={6}
              depth={10}
            />
          </div>
        </div>
        <p className="text-pop mx-auto mt-4 max-w-xl text-center text-xl font-semibold md:text-2xl">
          {tracksCopy.subtitle}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-9 [perspective:1200px] sm:grid-cols-2">
        {tracksCopy.tracks.map((track, i) => {
          const isOpen = open === track.id;
          return (
            <Reveal key={track.id} delay={i * 0.08} rotate={i % 2 ? 3 : -3}>
              <TiltCard maxTilt={9}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-label={`${track.name} track — ${
                    isOpen ? "hide" : "show"
                  } the brief`}
                  onClick={() => setOpen(isOpen ? null : track.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpen(isOpen ? null : track.id);
                    }
                  }}
                  className={`sticker-card ${track.accent} ${cardTilt[i % cardTilt.length]} relative flex h-full min-h-52 cursor-pointer flex-col p-8 backdrop-blur-sm outline-none focus-visible:ring-4 focus-visible:ring-cream/70`}
                >
                  {/* tape tabs on the top edge */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-[13px] left-8 flex gap-3"
                  >
                    <span className="h-4 w-7 rounded-t-md border-4 border-b-0 border-ink bg-inherit" />
                    <span className="h-4 w-7 rounded-t-md border-4 border-b-0 border-ink bg-inherit" />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="scrap-chip inline-block bg-cream px-3 py-0.5 text-xs text-ink">
                        {track.kind}
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-extrabold leading-none">
                        {track.name}
                      </h3>
                    </div>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-4xl drop-shadow-[0_4px_0_rgba(11,58,60,0.3)]"
                    >
                      {track.icon}
                    </span>
                  </div>

                  <p className="mt-4 font-display text-lg font-bold">
                    {track.tagline}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          marginTop: 16,
                        }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 26,
                        }}
                        className="overflow-hidden text-base font-semibold leading-relaxed opacity-90"
                      >
                        {track.brief}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="scrap-chip bg-cream/90 px-3 py-0.5 text-xs font-bold text-ink">
                      {track.award}
                    </span>
                    <span className="flex items-center gap-1 font-display text-sm font-bold">
                      {isOpen ? "Close" : "The brief"}
                      <motion.span
                        aria-hidden="true"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        className="text-lg leading-none"
                      >
                        ＋
                      </motion.span>
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      {/* Patterson UTI — sponsored surprise challenge, not a track */}
      <Reveal delay={0.15} rotate={1.5}>
        <motion.div
          animate={
            reducedMotion ? undefined : { rotate: [-0.8, 0.8, -0.8] }
          }
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="paper-note mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 border-dashed p-8 text-center md:flex-row md:items-center md:gap-8 md:text-left"
        >
          <span
            aria-hidden="true"
            className="text-6xl drop-shadow-[0_4px_0_rgba(11,58,60,0.25)]"
          >
            {tracksCopy.challenge.icon}
          </span>
          <div>
            <p className="scrap-chip inline-block bg-sunshine px-3 py-0.5 text-xs text-ink">
              {tracksCopy.challenge.label}
            </p>
            <h3 className="mt-2 font-display text-2xl font-extrabold text-ink md:text-3xl">
              {tracksCopy.challenge.name}
            </h3>
            <p className="mt-2 text-base font-semibold text-ink/80">
              {tracksCopy.challenge.brief}
            </p>
            <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink/70">
              🔒 {tracksCopy.challenge.revealNote}
            </p>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
