"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import FloatingElement from "@/components/FloatingElement";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import { sponsorsCopy } from "@/constants/content";

const sticker = [
  { className: "w-40 md:w-52", tilt: -5, duration: 6.5 },
  { className: "w-56 md:w-80", tilt: 3, duration: 7.5 },
  { className: "w-44 md:w-56", tilt: -3, duration: 5.8 },
] as const;

export default function Sponsors() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="sponsors" className="relative mx-auto max-w-5xl px-6 py-28">
      <FloatingElement
        src="/ttu-seal.png"
        alt=""
        width={1408}
        height={768}
        className="absolute right-[-6%] bottom-[14%] hidden w-36 lg:block"
        duration={8.5}
        delay={1.6}
        sway={5}
        bob={12}
        depth={-12}
      />
      <Sparkle className="absolute left-[10%] top-[16%]" size={18} delay={0.4} />
      <Sparkle className="absolute right-[16%] bottom-[14%]" size={22} delay={1.6} color="rgba(255,209,102,0.9)" />

      <Reveal>
        <h2 className="text-center text-5xl font-extrabold uppercase md:text-7xl">Sponsors</h2>
        <p className="text-pop mx-auto mt-4 max-w-xl text-center text-xl font-semibold md:text-2xl">
          {sponsorsCopy.label} the companies making HackWesTX happen.
        </p>
      </Reveal>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-16 gap-y-14">
        {sponsorsCopy.sponsors.map((sponsor, i) => {
          const style = sticker[i % sticker.length];
          return (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, scale: 0.4, rotate: style.tilt * 3, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, rotate: style.tilt, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 11,
                delay: i * 0.15,
              }}
              whileHover={{ scale: 1.12, rotate: 0 }}
            >
              <motion.div
                animate={
                  reducedMotion
                    ? undefined
                    : { y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }
                }
                transition={{
                  duration: style.duration,
                  delay: i * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  className={`h-auto select-none drop-shadow-[0_0_14px_rgba(255,247,232,0.5)] ${style.className}`}
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
