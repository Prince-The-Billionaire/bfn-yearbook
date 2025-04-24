"use client";
import { useEffect, useState } from "react";

const SpotlightCursor: React.FC = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX-700, y: e.clientY-350 });

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="absolute z-50 w-40 h-40 rounded-full  bg-white pointer-events-none mix-blend-difference opacity-100 transition-transform duration-75"
      style={{
        transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)`,
      }}
    />
  );
};

export default SpotlightCursor;
