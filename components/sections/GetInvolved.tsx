"use client";

import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import TiltCard from "@/components/TiltCard";
import { getInvolvedCopy } from "@/constants/content";

const cardStyle = [
  { color: "bg-sunshine/80 text-ink", tilt: "-rotate-2" },
  { color: "bg-blush/80 text-ink", tilt: "rotate-2" },
] as const;

export default function GetInvolved() {
  return (
    <section id="get-involved" className="relative mx-auto max-w-5xl px-6 py-28">
      <Sparkle className="absolute left-[10%] top-[12%]" size={20} delay={0.6} />
      <Sparkle
        className="absolute right-[12%] bottom-[16%]"
        size={16}
        delay={1.8}
        color="rgba(255,209,102,0.9)"
      />

      <Reveal>
        <p className="text-pop text-center font-mono text-sm uppercase tracking-[0.3em]">
          {getInvolvedCopy.eyebrow}
        </p>
        <h2 className="mt-3 text-center text-5xl font-extrabold uppercase md:text-7xl">
          {getInvolvedCopy.title}
        </h2>
        <p className="text-pop mx-auto mt-4 max-w-2xl text-center text-xl font-semibold md:text-2xl">
          {getInvolvedCopy.subtitle}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-9 [perspective:1200px] sm:grid-cols-2">
        {getInvolvedCopy.cards.map((card, i) => {
          const style = cardStyle[i % cardStyle.length];
          return (
            <Reveal key={card.id} delay={i * 0.1} rotate={i % 2 ? 3 : -3}>
              <TiltCard maxTilt={10}>
                <div
                  className={`sticker-card ${style.color} ${style.tilt} relative flex h-full min-h-56 flex-col justify-between p-8 backdrop-blur-sm`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="scrap-chip bg-cream px-4 py-1 text-sm text-ink">
                        {card.title}
                      </p>
                      <span
                        aria-hidden="true"
                        className="text-4xl drop-shadow-[0_4px_0_rgba(11,58,60,0.3)]"
                      >
                        {card.icon}
                      </span>
                    </div>
                    <p className="mt-6 font-display text-xl font-bold">
                      {card.blurb}
                    </p>
                  </div>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="scrap-chip mt-8 self-start bg-cream px-5 py-2 text-base text-ink transition hover:brightness-105"
                  >
                    {card.cta} ↗
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
