import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RoseSVG({ petal, center }) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fill="#75a843" d="M32.9 17.3L35.4 64h-5z"></path>
        <path d="M27.1 45.3c6.8 3.7 5.3 10.1 5.3 10.1s-5.6 5.1-12.5 1.4c-4.7-2.5-8.8-12.4-8.8-12.4s11.2-1.6 16 .9" fill="#83bf4f"></path>
        <path fill="#947151" d="M40.9 48.4l-7.3-2.1l-.1 4z"></path>
        <path d="M25.6 22.2c3.7 9.5 5.2 14.5 11.7 14.5c6.5 0 16.3-16.6 6.9-22C35 9.4 35.3 2 35.3 2s-15.8 4.7-9.7 20.2z" fill="#871212"></path>
        <path d="M45.2 24.2c-4.8 9.1-5.2 14.5-11.7 14.5s-18.3-21.8-7.8-25.1C38.7 9.5 42 4.7 42 4.7s10.3 5.9 3.2 19.5" fill="#991d1d"></path>
        <path d="M46 16c0-3.9-17-7.2-20-13.3c0 0-8.2 5.9-5.1 12c1.8 3.4 25 14.5 25.1 1.3" fill="#ad2727"></path>
        <path d="M36.8 19.5c10.4 13 4.8 20.8-3.7 20.8s-17.8-8.2-15.4-17.8c2.4-9.6-1-17.8-1-17.8s12.2 4.9 20.1 14.8" fill="#cc3636"></path>
        <path d="M27.3 18.5c-11.8 11.9-2.1 21.7 6.4 21.7s15.4-8 15.4-17.8s2.6-15.8 2.6-15.8s-16 3.4-24.4 11.9" fill="#e24b4b"></path>
        <path d="M34 36.1c13.1-.2 7.4 5-1.1 5c-20.9 0-20-18.3-20-18.3S22.3 36.2 34 36.1" fill="#75a843"></path>
        <path d="M34 36.1c-3.5 1.4-12.7 3.5-4.4 5.1C46 44.5 52.9 23.4 52.9 23.4S44.5 31.8 34 36.1z" fill="#83bf4f"></path>
      </g>
    </svg>
  );
}


function SunflowerSVG({ petal, center }) {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M68.38 85.39l-7.43.7s-.79 12.94-1.66 20.29c-.65 5.48-2.43 9.72-3.41 11.98c-.87 2.01-.17 5.34 3.5 5.51c3.85.17 5.51-1.92 6.12-4.37c.61-2.45 2.19-7.87 2.54-15.48s.34-18.63.34-18.63z" fill="#94a71a"></path>
        <path d="M65.23 103.75s2.85-7.67 10.72-8.46c10.48-1.05 15.77 6.27 16.03 7.76c.26 1.49-7.75 7.71-15.09 7.71c-8.13 0-11.92-4.04-11.92-4.04l.26-2.97z" fill="#94a71a"></path>
        <path d="M85.61 102.35c.35-1.53-2.27-2.97-6.99-2.54c-4.72.44-7.14 1.79-8.28 2.58c-1.14.79-3.7 2.5-3.09 3.11s4.49-.99 8.24-1.57c6.5-1 9.71.2 10.12-1.58z" fill="#728034"></path>
        <path d="M60.95 109.62s-.9-9.03-10.18-11.86c-7.7-2.34-16.68 3.95-16.88 5.22s5.82 8.07 12.46 9.98c6.97 2.02 13.73.48 14.6-3.34z" fill="#94a71a"></path>
        <path d="M39.72 104.2c.26 1.41 3.95 1.21 8.91 2.21s8.57 3.28 9.24 2.75s-1.86-4.89-9.38-6.7c-5.55-1.34-8.97.67-8.77 1.74z" fill="#728034"></path>
        <path d="M56.27 84.57s.89 3.73 3.53 8.22c2.16 3.67 4.8 6.38 5.74 6.38c.94 0 5.33-4.89 7.21-9.58c.61-1.51 1.47-6.1 1.47-6.1s4.02 3.35 6.5 4.89c2.48 1.54 7.5 3.42 8.24 2.75c.74-.67 1.88-6.63 1.88-8.84S90.49 76 90.49 76s3.45 1.2 7.23 1.47c2.81.2 6.56-.07 7.17-.94c.6-.87-1.4-6.3-2.95-8.71c-2.14-3.35-5.36-5.63-5.36-5.63s4.82-1.67 8.04-3.62c3.22-1.94 5.16-4.09 5.16-4.09s-3.01-3.55-6.23-5.69c-3.22-2.14-6.97-3.75-6.97-3.75s4.29-2.55 7.57-5.83c2.15-2.15 3.95-5.96 3.95-5.96s-4.29-2.61-8.71-3.68c-4.42-1.07-9.38 0-9.38 0s2.41-4.22 3.01-8.37c.6-4.15-.33-7.7-.33-7.7s-5.22-.4-9.78 2.68c-4.55 3.08-5.69 5.43-5.69 5.43s.49-5.39-.65-10.08c-.98-4.03-3.77-7.6-3.77-7.6s-3.69.86-7.04 5.61c-2.39 3.39-3.52 8.83-3.52 8.83s-2.03-5.61-4.58-8.49s-5.56-4.56-6.16-4.47s-3.48 4.02-4.15 10.32c-.48 4.53 1 7.44 1 7.44s-3.95-2.86-7.84-4.22c-4.96-1.74-9.3-1.99-9.65-1.67s-.67 5.22 1.54 10.85c1.42 3.63 4.02 6.5 4.02 6.5s-4.4-1.47-9.91-1.14c-4.49.27-7.47 1.47-7.64 1.88c-.17.41 1.56 4.78 5.02 8.17c3.35 3.28 7.3 4.89 7.3 4.89s-4.51 1.18-7.98 3.47c-4.11 2.72-5.45 6.25-5.41 6.71c.04.46 3.22 3.82 7.17 4.96c3.95 1.14 7.5.6 7.5.6s-3.88 3.22-6.03 7.5c-1.57 3.13-2.79 7.04-2.48 7.44s4.34 1.77 8.64 1.21c5.63-.74 9.24-3.28 9.24-3.28s-1.58 5.29-1.45 9.18c.13 3.88 1.3 7.58 1.78 7.84c.48.26 5.43-1.27 8.77-3.82c3.38-2.59 5.33-5.67 5.33-5.67z" fill="#ffb901"></path>
        <path d="M64.37 24.54c-14.96.13-28.02 10.53-27.07 30.43c1.04 21.78 29.62 33.2 45.81 18.85c13.9-12.32 10-30.01 4.95-36.86c-5.15-6.98-11.69-12.53-23.69-12.42z" fill="#d05416"></path>
        <path d="M64.16 31.91c-8.42-.06-19.91 5.67-19.59 20.75C44.88 67.5 57.31 73.95 67 73.51c11.37-.53 18.43-10.53 18.53-21.59c.09-9.17-6.21-19.91-21.37-20.01z" fill="#6d4d42"></path>
      </g>
    </svg>
  );
}

function LavenderSVG({ petal, center }) {
  return (
    <img src="/lavender.png" alt="Lavender" />
  );
}

function CherryBlossomSVG({ petal, center }) {
  return (
    <img src="/cherry-blossom.png" alt="Cherry Blossom" />
  );
}

function PeonySVG({ petal, center }) {
  return (
    <img src="/peony.png" alt="Peony" />
  );
}

function LotusSVG({ petal, center }) {
  return (
    <img src="/lily.png" alt="Lily" />
  );
}

const FlowerComponents = {
  Rose: RoseSVG,
  Sunflower: SunflowerSVG,
  Lavender: LavenderSVG,
  "Cherry Blossom": CherryBlossomSVG,
  Peony: PeonySVG,
  Lily: LotusSVG,
};

function FlowerCard({ flower, index }) {
  const [hovered, setHovered] = useState(false);
  const FlowerSVG = FlowerComponents[flower.name];

  return (
    <motion.div
      className="flex flex-col items-center gap-4 cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTapStart={() => setHovered(true)}
    >
      <motion.div
        className="w-24 h-28 sm:w-28 sm:h-32 drop-shadow-sm"
        animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <FlowerSVG petal={flower.petalColor} center={flower.centerColor} />
      </motion.div>

      <div className="text-center">
        <p className="font-serif text-rose-900 text-sm font-medium mb-1">{flower.name}</p>
        <AnimatePresence>
          {hovered && (
            <motion.p
              className="font-serif text-rose-600/80 text-sm italic max-w-[120px] leading-snug"
              initial={{ opacity: 0, y: 6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 4, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {flower.compliment}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FlowerGarden({ flowers }) {
  return (
    <section className="relative z-10 py-24 px-6 flex flex-col items-center">
      <p className="text-sm tracking-[0.3em] uppercase text-rose-400 mb-3">for you</p>
      <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] text-rose-900 mb-4 text-center">
        In every petal
      </h2>
      <p className="font-serif text-rose-600/60 text-sm italic mb-16 text-center">
        hover or tap each flower
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-12 max-w-3xl w-full justify-items-center">
        {flowers.map((flower, i) => (
          <FlowerCard key={flower.name} flower={flower} index={i} />
        ))}
      </div>
    </section>
  );
}
