"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { scheduleCopy } from "@/constants/content";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(scheduleCopy.days[0].id);
  const day =
    scheduleCopy.days.find((d) => d.id === activeDay) ?? scheduleCopy.days[0];

  return (
    <section id="schedule" className="relative mx-auto max-w-2xl px-6 py-28">
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
        <span className="mx-auto mt-5 flex w-fit items-center gap-1.5 rounded-full border border-cream/25 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream/80 backdrop-blur-sm">
          📍 {scheduleCopy.location}
        </span>
      </Reveal>

      {/* Day switcher — segmented control with a sliding active pill */}
      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-10 flex w-fit gap-1 rounded-full border border-cream/15 bg-white/5 p-1 backdrop-blur-sm">
          {scheduleCopy.days.map((d) => {
            const isActive = d.id === activeDay;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveDay(d.id)}
                aria-pressed={isActive}
                className="relative rounded-full px-5 py-2 text-sm font-bold transition-colors md:text-base"
              >
                {isActive && (
                  <motion.span
                    layoutId="schedule-active-day"
                    className="absolute inset-0 rounded-full bg-cream shadow-[0_2px_10px_rgba(11,58,60,0.35)]"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${isActive ? "text-ink" : "text-cream/65 hover:text-cream"}`}
                >
                  {d.dayLabel} · {d.date}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Timeline — a clean frosted panel, one accent color, nothing extra */}
      <Reveal delay={0.18}>
        <div className="relative mx-auto mt-8 overflow-hidden rounded-[28px] border border-cream/15 bg-ink/30 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {day.items.map((item, i) => (
                <div
                  key={item.time + item.label}
                  className={`grid grid-cols-[4.5rem_1.25rem_1fr] items-center gap-x-3 px-5 py-4 sm:grid-cols-[5.5rem_1.5rem_1fr] sm:gap-x-4 sm:px-7 ${
                    i !== day.items.length - 1
                      ? "border-b border-cream/10"
                      : ""
                  }`}
                >
                  <span className="font-mono text-xs font-semibold tracking-tight text-cream/55 sm:text-sm">
                    {item.time}
                  </span>
                  <span aria-hidden="true" className="text-blush">
                    →
                  </span>
                  <span className="text-sm font-semibold text-cream sm:text-base">
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
