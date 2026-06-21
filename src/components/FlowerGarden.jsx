import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RoseSVG({ petal, center }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="40" cy="75" rx="4" ry="14" fill="#6B8F5E" />
      <path d="M40 72 C30 65, 20 55, 22 45" stroke="#6B8F5E" strokeWidth="1.5" fill="none" />
      <ellipse cx="22" cy="43" rx="8" ry="5" fill="#7BA870" transform="rotate(-30 22 43)" />
      {[0,60,120,180,240,300].map((angle, i) => (
        <ellipse
          key={i}
          cx="40" cy="35"
          rx="10" ry="16"
          fill={petal}
          fillOpacity="0.85"
          transform={`rotate(${angle} 40 35)`}
        />
      ))}
      {[30,90,150,210,270,330].map((angle, i) => (
        <ellipse
          key={i}
          cx="40" cy="35"
          rx="7" ry="12"
          fill={petal}
          fillOpacity="0.95"
          transform={`rotate(${angle} 40 35)`}
        />
      ))}
      <circle cx="40" cy="35" r="9" fill={center} />
      <circle cx="40" cy="35" r="6" fill={petal} fillOpacity="0.6" />
      <circle cx="40" cy="35" r="3" fill={center} fillOpacity="0.9" />
    </svg>
  );
}

function SunflowerSVG({ petal, center }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="38" y="60" width="4" height="22" rx="2" fill="#6B8F5E" />
      <path d="M38 72 C28 68, 20 58, 22 48" stroke="#6B8F5E" strokeWidth="1.5" fill="none" />
      <ellipse cx="20" cy="46" rx="9" ry="5" fill="#7BA870" transform="rotate(-25 20 46)" />
      {[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((angle, i) => (
        <ellipse
          key={i}
          cx="40" cy="33"
          rx="4.5" ry="13"
          fill={petal}
          fillOpacity="0.9"
          transform={`rotate(${angle} 40 33)`}
        />
      ))}
      <circle cx="40" cy="33" r="13" fill={center} />
      <circle cx="40" cy="33" r="10" fill={center} fillOpacity="0.7" />
      {[...Array(12)].map((_, i) => (
        <circle
          key={i}
          cx={40 + 7 * Math.cos((i / 12) * Math.PI * 2)}
          cy={33 + 7 * Math.sin((i / 12) * Math.PI * 2)}
          r="1.5"
          fill="#5C3A1E"
          fillOpacity="0.6"
        />
      ))}
      <circle cx="40" cy="33" r="4" fill="#5C3A1E" fillOpacity="0.4" />
    </svg>
  );
}

function LavenderSVG({ petal, center }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="38" y="50" width="4" height="32" rx="2" fill="#8B9E6E" />
      <path d="M40 60 C30 56, 24 46, 26 36" stroke="#8B9E6E" strokeWidth="1.5" fill="none" />
      <ellipse cx="24" cy="34" rx="7" ry="4" fill="#9AAE7A" transform="rotate(-20 24 34)" />
      {[-12,-6,0,6,12].map((offset, i) => (
        <g key={i}>
          <ellipse cx={40 + offset * 0.4} cy={42 - i * 5} rx="5" ry="7" fill={petal} fillOpacity="0.8" transform={`rotate(${offset * 2} ${40 + offset * 0.4} ${42 - i * 5})`} />
          {i < 4 && (
            <ellipse cx={40 + offset * 0.4 + (offset > 0 ? 6 : -6)} cy={40 - i * 5} rx="4" ry="6" fill={petal} fillOpacity="0.65" />
          )}
        </g>
      ))}
      {[0,1,2,3,4].map((i) => (
        <ellipse key={i} cx="40" cy={20 + i * 4} rx="3" ry="4.5" fill={center} fillOpacity="0.9" />
      ))}
    </svg>
  );
}

function CherryBlossomSVG({ petal, center }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M40 75 Q30 65 25 55 Q35 52 40 45" stroke="#8B6E6E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 75 Q50 65 55 55 Q45 52 40 45" stroke="#8B6E6E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="26" cy="58" rx="7" ry="4.5" fill="#C4A0A0" transform="rotate(20 26 58)" />
      <ellipse cx="54" cy="58" rx="7" ry="4.5" fill="#C4A0A0" transform="rotate(-20 54 58)" />
      {[0,72,144,216,288].map((angle, i) => (
        <ellipse
          key={i}
          cx="40" cy="30"
          rx="8" ry="14"
          fill={petal}
          fillOpacity="0.88"
          transform={`rotate(${angle} 40 30)`}
        />
      ))}
      <circle cx="40" cy="30" r="7" fill={center} fillOpacity="0.9" />
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="40" y1="30"
          x2={40 + 9 * Math.cos((i / 8) * Math.PI * 2)}
          y2={30 + 9 * Math.sin((i / 8) * Math.PI * 2)}
          stroke={petal}
          strokeWidth="0.8"
          strokeOpacity="0.7"
        />
      ))}
      <circle cx="40" cy="30" r="3" fill="#FFE0E8" />
    </svg>
  );
}

function PeonySVG({ petal, center }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="38" y="62" width="4" height="20" rx="2" fill="#6B8F5E" />
      <path d="M38 70 C28 66, 22 56, 24 46" stroke="#6B8F5E" strokeWidth="1.5" fill="none" />
      <ellipse cx="22" cy="44" rx="8" ry="4.5" fill="#7BA870" transform="rotate(-25 22 44)" />
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <ellipse key={i} cx="40" cy="35" rx="13" ry="19" fill={petal} fillOpacity="0.5" transform={`rotate(${angle} 40 35)`} />
      ))}
      {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((angle, i) => (
        <ellipse key={i} cx="40" cy="35" rx="10" ry="15" fill={petal} fillOpacity="0.7" transform={`rotate(${angle} 40 35)`} />
      ))}
      {[0,60,120,180,240,300].map((angle, i) => (
        <ellipse key={i} cx="40" cy="35" rx="7" ry="11" fill={petal} fillOpacity="0.9" transform={`rotate(${angle} 40 35)`} />
      ))}
      <circle cx="40" cy="35" r="6" fill={center} />
    </svg>
  );
}

function LotusSVG({ petal, center }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="40" cy="72" rx="20" ry="6" fill="#7BA870" fillOpacity="0.5" />
      <ellipse cx="28" cy="70" rx="12" ry="5" fill="#6B8F5E" fillOpacity="0.4" transform="rotate(-10 28 70)" />
      <ellipse cx="52" cy="70" rx="12" ry="5" fill="#6B8F5E" fillOpacity="0.4" transform="rotate(10 52 70)" />
      {[-30,-15,0,15,30].map((angle, i) => (
        <ellipse
          key={i}
          cx="40"
          cy="55"
          rx="7"
          ry="20"
          fill={petal}
          fillOpacity={0.6 + i * 0.05}
          transform={`rotate(${angle} 40 62)`}
        />
      ))}
      {[-18,-6,6,18].map((angle, i) => (
        <ellipse
          key={i}
          cx="40"
          cy="50"
          rx="5.5"
          ry="16"
          fill={petal}
          fillOpacity="0.85"
          transform={`rotate(${angle} 40 60)`}
        />
      ))}
      <ellipse cx="40" cy="50" rx="5" ry="15" fill={petal} fillOpacity="0.95" transform="rotate(0 40 58)" />
      <circle cx="40" cy="50" r="8" fill={center} fillOpacity="0.9" />
      <circle cx="40" cy="50" r="5" fill={center} />
      {[...Array(6)].map((_, i) => (
        <circle
          key={i}
          cx={40 + 4.5 * Math.cos((i / 6) * Math.PI * 2)}
          cy={50 + 4.5 * Math.sin((i / 6) * Math.PI * 2)}
          r="1"
          fill="#F8E0A0"
          fillOpacity="0.9"
        />
      ))}
    </svg>
  );
}

const FlowerComponents = {
  Rose: RoseSVG,
  Sunflower: SunflowerSVG,
  Lavender: LavenderSVG,
  "Cherry Blossom": CherryBlossomSVG,
  Peony: PeonySVG,
  Lotus: LotusSVG,
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
              className="font-serif text-rose-600/80 text-xs italic max-w-[120px] leading-snug"
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
      <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">for you</p>
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
