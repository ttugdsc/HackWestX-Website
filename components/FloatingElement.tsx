"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useParallax } from "@/components/ParallaxField";

type FloatingElementProps = {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  /** Seconds before the loop starts, so scattered floaters drift out of sync. */
  delay?: number;
  /** Seconds for one full bob-and-sway cycle. */
  duration?: number;
  /** Peak tilt in degrees during the idle sway. */
  sway?: number;
  /** Vertical bob distance in px. */
  bob?: number;
  /**
   * Mouse-parallax depth in px: how far this sticker drifts when the
   * pointer crosses the screen. Bigger = feels closer to the viewer.
   * Needs an ancestor <ParallaxField>; 0 disables.
   */
  depth?: number;
  /** Load immediately — set on stickers visible in the first viewport. */
  eager?: boolean;
};

/**
 * Zero-gravity scrapbook sticker: bobs and gently rotates forever, drifts
 * with the mouse at its own depth, scales up when hovered. Position it
 * from the outside via className (usually `absolute` in a `relative` box).
 */
export default function FloatingElement({
  src,
  alt,
  className,
  width,
  height,
  delay = 0,
  duration = 6,
  sway = 6,
  bob = 16,
  depth = 0,
  eager = false,
}: FloatingElementProps) {
  const reducedMotion = useReducedMotion();
  const parallax = useParallax();
  const zero = useMotionValue(0);
  const px = useTransform(parallax?.x ?? zero, (v) => v * depth);
  const py = useTransform(parallax?.y ?? zero, (v) => v * depth * 0.7);

  return (
    <motion.div className={className} style={{ x: px, y: py }}>
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -bob, 0],
                rotate: [-sway / 2, sway / 2, -sway / 2],
              }
        }
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.14, rotate: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 14 }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? "eager" : undefined}
            draggable={false}
            className="h-auto w-full select-none drop-shadow-[0_10px_18px_rgba(11,58,60,0.35)]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
