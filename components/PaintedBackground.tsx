import Image from "next/image";
import Sparkle from "@/components/Sparkle";

const CLOUDS = [
  { className: "left-[3%] top-[5%] w-40 opacity-80 md:w-56" },
  { className: "right-[6%] top-[18%] hidden w-48 opacity-65 md:block" },
  { className: "left-[40%] top-[2%] hidden w-32 opacity-55 lg:block" },
  { className: "left-[8%] top-[42%] w-32 opacity-50 md:w-44" },
  { className: "right-[3%] top-[52%] hidden w-40 opacity-45 md:block" },
  { className: "left-[30%] top-[68%] hidden w-36 opacity-40 lg:block" },
  { className: "right-[18%] top-[80%] w-32 opacity-50 md:w-40" },
  { className: "left-[2%] top-[88%] hidden w-44 opacity-45 md:block" },
] as const;

const STARS = [
  { className: "left-[12%] top-[30%]", size: 18, delay: 0.2 },
  { className: "right-[8%] top-[8%]", size: 14, delay: 1.4 },
  { className: "left-[55%] top-[24%]", size: 12, delay: 2.1 },
  { className: "right-[30%] top-[38%]", size: 20, delay: 0.8 },
  { className: "left-[20%] top-[56%]", size: 14, delay: 1.7, color: "rgba(255,209,102,0.8)" },
  { className: "right-[12%] top-[64%]", size: 16, delay: 2.6 },
  { className: "left-[46%] top-[48%]", size: 10, delay: 0.5 },
  { className: "left-[70%] top-[72%]", size: 18, delay: 1.1, color: "rgba(247,146,186,0.8)" },
  { className: "left-[6%] top-[72%]", size: 12, delay: 3 },
  { className: "right-[40%] top-[88%]", size: 14, delay: 1.9 },
  { className: "left-[38%] top-[92%]", size: 16, delay: 0.9, color: "rgba(255,209,102,0.7)" },
  { className: "right-[5%] top-[94%]", size: 12, delay: 2.3 },
] as const;

/**
 * The painted world: a fixed crayon-textured canvas behind every section,
 * with clouds parked at every altitude and stars twinkling between them —
 * none of it moves with the scroll.
 */
export default function PaintedBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10">
      <Image
        src="/paint-sky4.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      {CLOUDS.map((cloud, i) => (
        <Image
          key={i}
          src="/cloud-soft3.png"
          alt=""
          width={1477}
          height={961}
          className={`absolute ${cloud.className}`}
        />
      ))}
      {STARS.map((star, i) => (
        <Sparkle
          key={i}
          className={`absolute ${star.className}`}
          size={star.size}
          delay={star.delay}
          color={"color" in star ? star.color : undefined}
        />
      ))}
      {/* Whisper of a vignette — the crayon shading carries the texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-lagoon-deep/20 via-transparent to-lagoon-deep/20" />
    </div>
  );
}
