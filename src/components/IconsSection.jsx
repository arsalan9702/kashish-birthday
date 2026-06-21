import { motion } from "framer-motion";

export default function IconsSection({ icons }) {
  return (
    <section className="relative z-10 py-24 px-6 flex flex-col items-center">
      <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">a portrait</p>
      <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] text-rose-900 mb-16 text-center">
        A few things that feel like you
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-6 sm:gap-8 max-w-2xl w-full justify-items-center">
        {icons.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-3 group"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/70 border border-rose-100 flex items-center justify-center text-2xl sm:text-3xl shadow-sm"
              whileHover={{ y: -4, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {item.emoji}
            </motion.div>
            <p className="font-serif text-rose-700/70 text-[10px] sm:text-xs italic text-center leading-snug max-w-[72px]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
