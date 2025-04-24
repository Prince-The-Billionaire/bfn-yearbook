'use client';

import { useState } from 'react';

export default function MoneyRainButton() {
  const [money, setMoney] = useState<any[]>([]);

  const handleClick = () => {
    const newMoney = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 80 + 10,
    }));
    setMoney((prev) => [...prev, ...newMoney]);

    // Remove after 1 second
    setTimeout(() => {
      setMoney((prev) => prev.slice(newMoney.length));
    }, 1000);
  };

  return (
    <div className="relative w-fit h-fit">
      <button
        onClick={handleClick}
        className="relative z-10 px-6 py-3 bg-green-600 text-white font-bold rounded-xl overflow-hidden transition-transform duration-150 active:scale-95 hover:scale-105"
      >
        Make it Rain 💸
      </button>

      {/* Floating money */}
      <div className="absolute inset-0 pointer-events-none">
        {money.map((item) => (
          <div
            key={item.id}
            style={{ left: `${item.left}%` }}
            className="absolute bottom-0 text-2xl animate-float"
          >
            💸
          </div>
        ))}
      </div>
    </div>
  );
}
