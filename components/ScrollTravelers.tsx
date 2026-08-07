"use client";

import {
  MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import FloatingElement from "@/components/FloatingElement";

/** Scroll waypoints: hero → about → tracks → sponsors → faq. */
const STOPS = [0, 0.22, 0.45, 0.7, 1];

type TravelerSpec = {
  src: string;
  width: number;
  height: number;
  /** Sizing / visibility classes (sticker width, `hidden md:block`, …). */
  className: string;
  /** X waypoint per stop, in vw (left edge of the sticker). */
  xs: number[];
  /** Y waypoint per stop, in vh. */
  ys: number[];
  /** Tilt waypoint per stop, degrees. */
  rots: number[];
  float: { duration: number; sway: number; bob?: number; delay?: number };
  depth: number;
  /** Above the fold at the first stop — load immediately. */
  eager?: boolean;
};

/**
 * One lone traveler: the flying car sweeps big arcs across the sky as
 * you scroll. The clouds are parked in PaintedBackground and stay put.
 */
const TRAVELERS: TravelerSpec[] = [
  {
    src: "/flying-car.png",
    width: 1024,
    height: 1024,
    className: "w-40 md:w-64 lg:w-80",
    xs: [64, 38, 74, 40, 8],
    ys: [6, 16, 26, 6, 10],
    rots: [5, -9, 7, -6, 9],
    float: { duration: 7, sway: 7, bob: 26, delay: 0.4 },
    depth: 42,
    eager: true,
  },
];

function Traveler({
  spec,
  progress,
}: {
  spec: TravelerSpec;
  progress: MotionValue<number>;
}) {
  const x = useTransform(progress, STOPS, spec.xs.map((v) => `${v}vw`));
  const y = useTransform(progress, STOPS, spec.ys.map((v) => `${v}vh`));
  const rotate = useTransform(progress, STOPS, spec.rots);

  return (
    <motion.div
      style={{ x, y, rotate }}
      className={`pointer-events-auto absolute left-0 top-0 ${spec.className}`}
    >
      <FloatingElement
        src={spec.src}
        alt=""
        width={spec.width}
        height={spec.height}
        duration={spec.float.duration}
        sway={spec.float.sway}
        bob={spec.float.bob}
        delay={spec.float.delay}
        depth={spec.depth}
        eager={spec.eager}
      />
    </motion.div>
  );
}

export default function ScrollTravelers() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (reducedMotion) {
    // Frozen collage: everyone stays at their hero position
    return (
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        {TRAVELERS.map((spec, i) => (
          <div
            key={i}
            style={{
              transform: `translate(${spec.xs[0]}vw, ${spec.ys[0]}vh) rotate(${spec.rots[0]}deg)`,
            }}
            className={`absolute left-0 top-0 ${spec.className}`}
          >
            <FloatingElement
              src={spec.src}
              alt=""
              width={spec.width}
              height={spec.height}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {TRAVELERS.map((spec, i) => (
        <Traveler key={i} spec={spec} progress={scrollYProgress} />
      ))}
    </div>
  );
}
