"use client";

import FloatingElement from "@/components/FloatingElement";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import TiltCard from "@/components/TiltCard";

const trackSlots = [
  { id: "track-01", label: "Track 01", icon: "🛰️", color: "bg-sunshine/75 text-ink", tilt: "-rotate-2" },
  { id: "track-02", label: "Track 02", icon: "🤖", color: "bg-blush/75 text-ink", tilt: "rotate-1" },
  { id: "track-03", label: "Track 03", icon: "🌵", color: "bg-grape/75 text-cream", tilt: "-rotate-1" },
  { id: "track-04", label: "Track 04", icon: "🪐", color: "bg-lagoon-deep/75 text-cream", tilt: "rotate-2" },
] as const;

export default function Tracks() {
  return (
    <section id="tracks" className="relative mx-auto max-w-5xl px-6 py-28">
      <Sparkle className="absolute right-[8%] top-[10%]" size={22} delay={1} />
      <Sparkle className="absolute left-[14%] bottom-[12%]" size={16} delay={2.2} color="rgba(255,209,102,0.9)" />

      <Reveal>
        <div className="flex justify-center">
          <div className="relative">
            <h2 className="text-center text-5xl font-extrabold uppercase md:text-7xl">Tracks</h2>
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
          Four ways for you to leave the feed behind — reveals drop over the
          summer. Rally your crew in the meantime!
        </p>
      </Reveal>

      <div className="mt-14 grid gap-9 [perspective:1200px] sm:grid-cols-2">
        {trackSlots.map((track, i) => (
          <Reveal key={track.id} delay={i * 0.1} rotate={i % 2 ? 3 : -3}>
            <TiltCard maxTilt={10}>
              <div
                className={`sticker-card ${track.color} ${track.tilt} relative flex min-h-48 flex-col justify-between p-8 backdrop-blur-sm`}
              >
                <div aria-hidden="true" className="absolute -top-[13px] left-8 flex gap-3">
                  <span className="h-4 w-7 rounded-t-md border-4 border-b-0 border-ink bg-inherit" />
                  <span className="h-4 w-7 rounded-t-md border-4 border-b-0 border-ink bg-inherit" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="scrap-chip bg-cream px-4 py-1 text-sm text-ink">
                    {track.label}
                  </p>
                  <span aria-hidden="true" className="text-4xl drop-shadow-[0_4px_0_rgba(11,58,60,0.3)]">
                    {track.icon}
                  </span>
                </div>
                <p className="mt-6 font-display text-2xl font-bold">
                  Top secret 🤠
                </p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
