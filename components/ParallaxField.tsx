"use client";

import { createContext, useContext } from "react";
import {
  MotionValue,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type ParallaxValues = {
  /** Normalized pointer position, springed, -1..1 across the field. */
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const ParallaxContext = createContext<ParallaxValues | null>(null);

export function useParallax() {
  return useContext(ParallaxContext);
}

/**
 * Tracks the pointer across its whole area and shares a springed,
 * normalized position with any descendant (FloatingElement uses it to
 * drift at its own depth). Wrap the entire page in one of these so every
 * sticker on every section responds to the mouse.
 */
export default function ParallaxField({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 45, damping: 18, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 45, damping: 18, mass: 0.8 });

  return (
    <div
      className={className}
      onPointerMove={(e) => {
        if (reducedMotion) return;
        rawX.set((e.clientX / window.innerWidth) * 2 - 1);
        rawY.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
      onPointerLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
    >
      <ParallaxContext.Provider value={{ x, y }}>
        {children}
      </ParallaxContext.Provider>
    </div>
  );
}
