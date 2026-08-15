"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingElement from "@/components/FloatingElement";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import { faqCopy, siteConfig } from "@/constants/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto max-w-5xl px-6 pb-36 pt-28">
      <Sparkle className="absolute left-[8%] bottom-[20%]" size={20} delay={1.4} />
      <Sparkle className="absolute right-[30%] bottom-[10%]" size={14} delay={0.2} color="rgba(255,209,102,0.9)" />

      <Reveal>
        <h2 className="text-center text-5xl font-extrabold uppercase md:text-7xl">FAQs</h2>
      </Reveal>

      {/* Questions written straight on the sky, split by hand-drawn rules */}
      <div className="mx-auto mt-12 flex max-w-2xl flex-col">
        {faqCopy.faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={faq.question} delay={i * 0.06}>
              <div className="border-b-[3px] border-dashed border-cream/50">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-pop text-xl font-bold md:text-2xl">
                    ✶ {faq.question}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="text-pop font-display text-xl"
                  >
                    ⌄
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 26 }}
                      className="overflow-hidden"
                    >
                      <p className="text-pop pb-5 pr-10 text-xl font-semibold opacity-90 md:text-2xl">
                        {faq.answer}
                      </p>
                      {faq.link && (
                        <a
                          href={faq.link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-pop mb-5 inline-block text-lg font-bold underline decoration-dashed underline-offset-4 transition-opacity hover:opacity-70 md:text-xl"
                        >
                          {faq.link.label} ↗
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} rotate={1}>
        <div className="mx-auto mt-16 flex max-w-3xl items-end justify-center gap-6">
          <div className="max-w-2xl text-center">
            <p className="font-display text-4xl font-extrabold uppercase md:text-5xl">
              📻 Stay tuned…
            </p>
            <p className="text-pop mt-3 text-xl font-semibold md:text-2xl">
              The schedule, track reveals, workshops, and a few surprises are
              still loading. Keep an eye on this page — the cactus knows
              things it isn&apos;t telling us yet. 🌵
            </p>
          </div>
          {/* the robot sees you off */}
          <FloatingElement
            src="/robot-hero.png"
            alt=""
            width={613}
            height={872}
            className="hidden w-24 shrink-0 md:block"
            duration={6}
            sway={7}
            bob={12}
            depth={20}
          />
        </div>
      </Reveal>

      {/* footer — MLH requires the Code of Conduct to be linked here */}
      <footer className="text-pop mt-24 text-center font-display text-sm font-bold">
        <p>
          Made with ♥ by {siteConfig.organizer} · See you beyond the feed ✦
        </p>
        <p className="mt-2">
          <a
            href={siteConfig.links.codeOfConduct}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-dashed underline-offset-4 transition-opacity hover:opacity-70"
          >
            MLH Code of Conduct
          </a>
        </p>
      </footer>
    </section>
  );
}
