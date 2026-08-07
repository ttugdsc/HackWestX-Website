"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * The big HACKWESTX cactus, planted on the left of the landing view
 * only — it sinks away and fades as you scroll into the sections, and
 * glides back when you return to the top. Hidden below lg, where the
 * hero shows an inline cactus instead.
 */
export default function CactusRail() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const glide = useSpring(scrollY, { stiffness: 60, damping: 18 });
  const opacity = useTransform(glide, [200, 700], [1, 0]);
  const y = useTransform(glide, [200, 700], [0, 120]);
  const rotate = useTransform(glide, [200, 700], [0, -5]);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ x: -320, opacity: 0, rotate: -8 }}
      animate={{ x: 0, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 13, delay: 0.35 }}
      className="pointer-events-none fixed bottom-[-2svh] left-[-5vw] z-0 hidden lg:block"
    >
      <motion.div
        style={
          reducedMotion
            ? undefined
            : { opacity, y, rotate, transformOrigin: "50% 100%" }
        }
      >
        <motion.div
          animate={reducedMotion ? undefined : { rotate: [-0.7, 0.7, -0.7], y: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 100%" }}
        >
          <Image
            src="/cactus-hero.png"
            alt=""
            width={964}
            height={932}
            loading="eager"
            className="h-[86svh] w-auto max-w-none select-none drop-shadow-[0_14px_24px_rgba(11,58,60,0.35)]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
