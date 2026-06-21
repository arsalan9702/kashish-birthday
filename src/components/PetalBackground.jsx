import { useEffect, useRef } from "react";

const PETAL_COUNT = 18;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createPetal() {
  return {
    id: Math.random(),
    x: randomBetween(0, 100),
    duration: randomBetween(12, 22),
    delay: randomBetween(0, 16),
    size: randomBetween(8, 18),
    rotation: randomBetween(0, 360),
    rotationSpeed: randomBetween(-1, 1),
    opacity: randomBetween(0.25, 0.55),
    drift: randomBetween(-3, 3),
  };
}

export default function PetalBackground() {
  const petals = useRef(Array.from({ length: PETAL_COUNT }, createPetal));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.current.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: "-30px",
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
            opacity: p.opacity,
            animation: `petalFall ${p.duration}s ${p.delay}s linear infinite`,
            "--drift": `${p.drift}vw`,
          }}
        >
          <svg viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2 C14 2, 18 6, 18 12 C18 18, 14 24, 10 24 C6 24, 2 18, 2 12 C2 6, 6 2, 10 2 Z"
              fill="#D4697A"
              fillOpacity="0.7"
            />
            <path
              d="M10 4 C10 4, 12 8, 10 14 C8 8, 10 4, 10 4 Z"
              fill="#E8899E"
              fillOpacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
