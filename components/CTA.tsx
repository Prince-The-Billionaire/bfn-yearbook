"use client"
import React, { useState } from 'react'
import SpotlightCursor from './SpotlightCursor'


const CTA = () => {
    // const [pos, setPos] = useState<{ x: number; y: number }>({ x: 100, y: 50 });
  return (
    <div className="flex relative flex-col items-center cursor-none justify-center h-screen bg-black text-white  overflow-hidden">
    {/* Spotlight cursor must be above everything */}
    <SpotlightCursor />

    {/* Spotlight-reactive text */}
    <p className="text-7xl font-sans font-bold mix-blend-difference select-none text-center">
        WAIT IT <span className="text-green-400">DOESN&apos;T</span> END THERE !!
    </p>
    {/* <div
      className="fixed z-100 w-40 h-40 rounded-full  bg-white border-2 border-white pointer-events-none  opacity-100 transition-transform duration-75"
      style={{
        transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
      }}
    /> */}
    <button className="bg-green-500/30 text-white rounded-2xl text-3xl backdrop-blur-2xl border-t-2 border-white/35 px-4 py-2 mt-4 hover:bg-green-600/50 transition duration-300 mix-blend-difference">
        Check out our top 10&apos;s
    </button>
    </div>
  )
}

export default CTA