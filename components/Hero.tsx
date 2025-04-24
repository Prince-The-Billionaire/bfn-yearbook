"use client"
import React, { useEffect, useRef } from 'react'
import MoneyRainButton from './MoneyRainButton'
import gsap from 'gsap'

const Hero = () => {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(divRef.current,{
      opacity:0,
      y:100,
    },{
      y:0,
      opacity:1,
      duration:1.2,
      delay:0.3,
      ease:'anticipate'
    },
  )
  },[])
  return (
    <div>
        <video autoPlay muted loop className="w-full h-screen object-cover">
            <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div ref={divRef} className="absolute top-0 left-0 w-full h-full text-shadow font-sans gap-3 flex-col flex items-center justify-center bg-transparent bg-opacity-50 text-white text-4xl font-bold">
            <p className='opacity-75 text-3xl'>Introducing the </p>
            <h1 className='text-7xl opacity-80'>20&apos;th Banking and Finance Set</h1>
            <p className='opacity-70 text-2xl'>Innovation | Growth | Technology </p>
            <button className='button text-xl '>
                Notable Achievements
            </button>
            
        </div>
    </div>
  )
}

export default Hero