"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const MostLikelyCard = () => {
  const [clicked, setClicked] = useState(false)
  const divref = useRef<HTMLDivElement>(null)
  const smalldivref = useRef<HTMLDivElement>(null)
  const pref =useRef<HTMLParagraphElement>(null)
  const handleClick = () => {
    setClicked((prev) => (!prev))
  }

  useEffect(() =>{
      gsap.to(divref.current,{
        rotateY:clicked ? 180: 0,
        duration:1.2
      })
  },[clicked])
  return (
    <div>
        <div ref={divref} onClick={handleClick} className='relative w-[300px] h-[400px] bg-gradient-to-r from-red-500 via-purple-400 to-pink-500 animate-border p-2 shadow shadow-black/15 hover:cursor-pointer rounded-xl'>
            <div className={ ` w-full rounded-xl p-2 pb-3 ${clicked ? 'bg-transparent':'bg-gray-100'}`}>

                <Image src={'/female.png'} alt='female' width={300} height={100} className={`rounded-xl transition duration-300 ${clicked ? 'hidden' :'block'}`}/>
                <div ref={smalldivref} className='absolute z-10 -top-6 left-10'>
                    <Image src='/GIRL.png' alt='own a global fashion brand' width={250} height={20}/>
                </div>
                <p ref={pref} className={`text-xl font-sans font-medium text-black ${clicked ? 'hidden' :'block'}`}>Name:Jennifer Polez</p>

            </div>
            
            <div className={`${clicked ? 'block' :'hidden'}  text-white font-semibold rotate-y-180 pt-14 relative p-[3px] rounded-2xl   `}>
              <p>Name: Johnbull Adenife Adeleke</p>
              <p>NickName: Big Bull</p>
              <p>Hobbies: Loves drawing, singing, dancing and prancing around</p>
              <p>Favorite meal: Ewa agoyin</p>
              <p>Qoute: &apos;Don&apos;t be a fish</p>
            </div>
        </div>
    </div>
  )
}

export default MostLikelyCard