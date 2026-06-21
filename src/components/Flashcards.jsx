import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categoryColors = {
  "A memory": "text-amber-700 bg-amber-50 border-amber-200",
  "Something I admire": "text-rose-700 bg-rose-50 border-rose-200",
  "A fun fact": "text-violet-700 bg-violet-50 border-violet-200",
};

export default function Flashcards({ cards }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(1);

  const card = cards[index];

  function go(dir) {
    setFlipped(false);
    setDirection(dir);
    setTimeout(() => {
      setIndex((prev) => (prev + dir + cards.length) % cards.length);
    }, 150);
  }

  return (
    <section className="relative z-10 py-24 px-6 flex flex-col items-center">
      <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">for you</p>
      <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] text-rose-900 mb-14 text-center">
        A few things I wanted to say
      </h2>

      <div className="relative w-full max-w-sm h-64 sm:h-72 cursor-pointer" onClick={() => setFlipped((f) => !f)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index + (flipped ? "-back" : "-front")}
            className="absolute inset-0"
            initial={{ rotateY: flipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: flipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {!flipped ? (
              <div className="w-full h-full rounded-3xl border border-rose-200 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-5 shadow-sm px-8">
                <span className="text-3xl text-rose-300">{card.icon}</span>
                <span className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full border font-medium ${categoryColors[card.category]}`}>
                  {card.category}
                </span>
                <p className="text-rose-400/70 text-xs italic mt-1">tap to reveal</p>
              </div>
            ) : (
              <div className="w-full h-full rounded-3xl border border-rose-200 bg-rose-50/80 backdrop-blur-sm flex items-center justify-center px-8 shadow-sm">
                <p className="font-serif text-rose-900/80 text-[clamp(0.95rem,2.5vw,1.1rem)] leading-relaxed text-center italic">
                  "{card.text}"
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-8 mt-10">
        <button
          onClick={() => go(-1)}
          className="w-10 h-10 rounded-full border border-rose-200 bg-white/70 flex items-center justify-center text-rose-400 hover:border-rose-400 hover:text-rose-600 transition-all"
          aria-label="Previous card"
        >
          ←
        </button>
        <span className="text-rose-400/60 text-sm tabular-nums">
          {index + 1} of {cards.length}
        </span>
        <button
          onClick={() => go(1)}
          className="w-10 h-10 rounded-full border border-rose-200 bg-white/70 flex items-center justify-center text-rose-400 hover:border-rose-400 hover:text-rose-600 transition-all"
          aria-label="Next card"
        >
          →
        </button>
      </div>
    </section>
  );
}
