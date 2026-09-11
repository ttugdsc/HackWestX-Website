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

      {/* Timeline — a ticket-stub note, same paper the rest of the page is scrapbooked from */}
      <Reveal delay={0.15} rotate={1}>
        <div className="paper-note relative mx-auto mt-8 max-w-2xl overflow-hidden p-6 md:p-8">
          {/* tape tabs on the top edge */}
          <div
            aria-hidden="true"
            className="absolute -top-[13px] left-8 flex gap-3"
          >
            <span className="h-4 w-7 rounded-t-md border-4 border-b-0 border-ink bg-cream" />
            <span className="h-4 w-7 rounded-t-md border-4 border-b-0 border-ink bg-cream" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={day.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
              className="flex flex-col"
            >
              {day.items.map((item, i) => (
                <div
                  key={item.time + item.label}
                  className={`flex flex-wrap items-center gap-3 py-4 sm:flex-nowrap sm:gap-4 ${
                    i !== day.items.length - 1
                      ? "border-b-[3px] border-dashed border-ink/15"
                      : ""
                  }`}
                >
                  <span className="scrap-chip shrink-0 bg-sunshine px-3 py-1 text-xs font-bold text-ink sm:text-sm">
                    {item.time}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl font-bold text-coral"
                  >
                    →
                  </span>
                  <span className="font-display text-base font-semibold leading-snug text-ink sm:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
