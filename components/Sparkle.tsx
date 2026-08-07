"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Chalk sparkle doodle that twinkles forever. Scatter with absolute
 * positioning via className.
 */
export default function Sparkle({
  className,
  size = 24,
  delay = 0,
  color = "rgba(255,255,255,0.85)",
}: {
  className?: string;
  size?: number;
  delay?: number;
  color?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      animate={
        reducedMotion
          ? undefined
          : { opacity: [0.25, 1, 0.25], scale: [0.8, 1.15, 0.8], rotate: [0, 18, 0] }
      }
      transition={{ duration: 3.2, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M12 2 C13 8, 16 11, 22 12 C16 13, 13 16, 12 22 C11 16, 8 13, 2 12 C8 11, 11 8, 12 2 Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
