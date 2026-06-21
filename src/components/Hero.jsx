import { motion } from "framer-motion";

export default function Hero({ content }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10">
      <motion.p
        className="text-sm tracking-[0.35em] uppercase text-rose-400 font-light mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {content.subtitle}
      </motion.p>

      <motion.h1
        className="font-display text-[clamp(4rem,16vw,10rem)] leading-none text-rose-900 mb-8 tracking-tight"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
      >
        {content.name}
      </motion.h1>

      <motion.p
        className="font-serif text-[clamp(1rem,2.5vw,1.3rem)] text-rose-700/70 max-w-md leading-relaxed italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
      >
        {content.tagline}
      </motion.p>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <span className="text-rose-300 text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-rose-300 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
