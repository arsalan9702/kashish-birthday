import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function ConfettiBurst({ triggered }) {
  const pieces = useRef(
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ["#D4697A", "#F4B8C8", "#E8C88A", "#B8A0D4", "#F5C842", "#F0A0B8"][
        Math.floor(Math.random() * 6)
      ],
      size: 4 + Math.random() * 6,
      duration: 1.5 + Math.random() * 1.5,
      delay: Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 200,
    }))
  );

  if (!triggered) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.current.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.x}%`,
            top: "40%",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: [0, -120, 300],
            x: [0, p.drift],
            opacity: [1, 1, 0],
            rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function BirthdayWish({ content }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (inView && !confetti) {
      const t = setTimeout(() => setConfetti(true), 600);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center py-28 px-6 text-center"
    >
      <ConfettiBurst triggered={confetti} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-lg"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-8">with best wishes</p>

        <div className="relative mb-12">
          <div className="absolute -inset-6 blur-2xl bg-rose-100/50 rounded-full" />
          <p className="font-serif text-[clamp(1rem,2.2vw,1.2rem)] text-rose-900/80 leading-relaxed italic relative">
            "{content.message}"
          </p>
        </div>

        <motion.p
          className="font-display text-[clamp(1.5rem,4vw,2.5rem)] text-rose-700"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {content.signoff}
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.span
          className="text-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          🌸
        </motion.span>
      </motion.div>

      <p className="absolute bottom-24 text-rose-300/70 text-xs tracking-widest">
        made with care and a looott of emotions, just for you Kashish
      </p>
    </section>
  );
}
