"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * 3D hover tilt: the card leans toward the cursor like a held polaroid,
 * then springs flat when the pointer leaves.
 */
export default function TiltCard({
  children,
  className,
  maxTilt = 9,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const reducedMotion = useReducedMotion();
  const rawRx = useMotionValue(0);
  const rawRy = useMotionValue(0);
  const rotateX = useSpring(rawRx, { stiffness: 220, damping: 18 });
  const rotateY = useSpring(rawRy, { stiffness: 220, damping: 18 });

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={reducedMotion ? undefined : { scale: 1.03, z: 20 }}
      onPointerMove={(e) => {
        if (reducedMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        rawRy.set(nx * maxTilt * 2);
        rawRx.set(-ny * maxTilt * 2);
      }}
      onPointerLeave={() => {
        rawRx.set(0);
        rawRy.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
