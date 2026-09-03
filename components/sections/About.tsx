"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import TiltCard from "@/components/TiltCard";
import { aboutCopy } from "@/constants/content";

const statStyles = [
  "rotate-2 bg-sunshine/80 text-ink",
  "-rotate-2 bg-blush/80 text-ink",
  "rotate-1 bg-grape/80 text-cream",
] as const;

const paragraphs = [
  "HackWesTX is the largest student-run hackathon in West Texas. For 24 hours, a few hundred students build and ship real projects together. First hackathon or fiftieth, you belong here.",
  "This year's theme is Beyond the Feed. Stop scrolling and start building the tech that comes next. Work with industry mentors, hit the workshops, and make something that matters.",
  "Food, swag, mentors, and over $5,000 in prizes are on us. You bring the ideas.",
] as const;

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28">
      <Sparkle className="absolute left-[6%] top-[12%]" size={20} delay={0.6} />
      <Sparkle className="absolute right-[10%] bottom-[18%]" size={16} delay={1.8} />

      <Reveal>
        <h2 className="text-center text-5xl font-extrabold uppercase md:text-7xl">
          About
        </h2>
      </Reveal>

      {/* Full-width paragraphs: long lines, few rows */}
      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-8">
        {paragraphs.map((text, i) => (
          <Reveal key={i} delay={i * 0.1} rotate={i % 2 ? 1.5 : -1.5}>
            <p className="text-pop text-center text-xl font-semibold leading-relaxed md:text-2xl">
              {text}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Stat signposts in a row underneath */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
        {aboutCopy.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.1 + i * 0.14} rotate={i % 2 ? 4 : -4}>
            <TiltCard maxTilt={14}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`sticker-card px-8 py-5 text-center backdrop-blur-sm ${statStyles[i]}`}
                >
                  <p className="font-display text-4xl font-extrabold [text-shadow:none]">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-base font-semibold opacity-80">{stat.label}</p>
                </div>
                <div
                  aria-hidden="true"
                  className="h-0 w-0 border-x-[14px] border-t-[26px] border-x-transparent border-t-ink/70"
                />
              </motion.div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
