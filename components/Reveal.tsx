"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered entrance: content rises, un-tilts, and settles with a
 * spring the first time it scrolls into view — scrapbook pieces being
 * laid down on the page.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  rotate = -1.5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 56, rotate, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 16,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
