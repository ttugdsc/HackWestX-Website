"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Official MLH trust badge, hung from the top-right corner per MLH
 * placement guidelines. It belongs to the landing view only — it slides
 * away as soon as you scroll into the sections.
 */
export default function MlhBadge() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [150, 450], [1, 0]);
  const y = useTransform(scrollY, [150, 450], [0, -40]);
  const pointerEvents = useTransform(scrollY, (v) =>
    v > 400 ? ("none" as const) : ("auto" as const),
  );

  return (
    <motion.a
      id="mlh-trust-badge"
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
      target="_blank"
      rel="noreferrer"
      style={{ opacity, y, pointerEvents }}
      className="fixed right-[50px] top-0 z-[10000] block w-[10%] min-w-[60px] max-w-[100px]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-white.svg"
        alt="Major League Hacking 2026 Hackathon Season"
        className="w-full"
      />
    </motion.a>
  );
}
