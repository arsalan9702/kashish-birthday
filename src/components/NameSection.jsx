import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function NameSection({ content }) {
  return (
    <section className="relative z-10 py-28 px-6 flex flex-col items-center text-center">
      <FadeIn>
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 blur-3xl bg-rose-200/40 rounded-full scale-150" />
          <h2 className="font-display text-[clamp(3rem,10vw,6rem)] text-rose-900 relative tracking-tight">
            Kashish
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="max-w-xl mb-16">
          <p className="font-serif text-rose-700/60 text-sm tracking-widest uppercase mb-4">
            ka · shish · /kɑːʃɪʃ/ · n.
          </p>
          <p className="font-serif text-[clamp(1rem,2vw,1.15rem)] text-rose-900/75 leading-relaxed italic">
            {content.definition}
          </p>
        </div>
      </FadeIn>

      <div className="flex flex-col items-center gap-5 w-full max-w-sm">
        {content.traits.map((trait, i) => (
          <FadeIn key={i} delay={0.1 * i}>
            <div className="flex items-center gap-4">
              <div className="w-6 h-px bg-rose-300" />
              <p className="font-serif text-rose-800/80 text-base italic">{trait}</p>
              <div className="w-6 h-px bg-rose-300" />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
