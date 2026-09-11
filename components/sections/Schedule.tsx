"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingElement from "@/components/FloatingElement";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import { scheduleCopy } from "@/constants/content";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(scheduleCopy.days[0].id);
  const day =
    scheduleCopy.days.find((d) => d.id === activeDay) ?? scheduleCopy.days[0];

  return (
    <section id="schedule" className="relative mx-auto max-w-3xl px-6 py-28">
      <Sparkle className="absolute left-[6%] top-[8%]" size={18} delay={0.6} />
      <Sparkle
        className="absolute right-[10%] bottom-[6%]"
        size={22}
        delay={1.8}
        color="rgba(247,146,186,0.9)"
      />
      <FloatingElement
        src="/cactus-hero.png"
        alt=""
        width={964}
        height={932}
        className="absolute -right-8 -top-16 w-20 rotate-6 md:-right-14 md:-top-20 md:w-28"
        duration={8}
        sway={5}
        bob={10}
        depth={8}
      />

      <Reveal>
        <p className="text-pop text-center font-mono text-sm font-bold uppercase tracking-[0.2em]">
          {scheduleCopy.eyebrow}
        </p>
        <h2 className="text-center text-5xl font-extrabold uppercase md:text-7xl">
          {scheduleCopy.title}
        </h2>
        <p className="text-pop mx-auto mt-4 max-w-xl text-center text-xl font-semibold md:text-2xl">
          {scheduleCopy.subtitle}
        </p>
        <p className="scrap-chip mx-auto mt-5 flex w-fit items-center gap-1.5 bg-cream px-4 py-1 text-sm text-ink">
          📍 {scheduleCopy.location}
        </p>
      </Reveal>

      {/* Day tabs */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex justify-center gap-3">
          {scheduleCopy.days.map((d) => {
            const isActive = d.id === activeDay;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveDay(d.id)}
                aria-pressed={isActive}
                className={`scrap-chip px-5 py-2 text-sm font-bold transition md:text-base ${
                  isActive
                    ? "bg-blush text-ink"
                    : "bg-lagoon-deep/50 text-cream hover:bg-lagoon-deep/70"
                }`}
              >
                {d.dayLabel} · {d.date}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="relative mt-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={day.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
            className="flex flex-col gap-3"
          >
            {day.items.map((item) => (
              <div
                key={item.time + item.label}
                className="flex flex-wrap items-center gap-3 rounded-2xl border-[3px] border-cream/80 bg-lagoon-deep/30 px-5 py-3 backdrop-blur-sm sm:flex-nowrap sm:gap-4"
              >
                <span className="w-24 shrink-0 font-display text-base font-extrabold text-cream sm:w-28 sm:text-lg">
                  {item.time}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-display text-xl font-bold text-blush"
                >
                  →
                </span>
                <span className="text-pop font-semibold">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
