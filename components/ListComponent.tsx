"use client"

import React, { useEffect } from 'react'
import { HiSparkles } from 'react-icons/hi'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const ListComponent = () => {
    const pageref = React.useRef<HTMLDivElement>(null)
        
        
        useEffect(() => {
            if (!pageref.current) return;
        
            gsap.fromTo(
              pageref.current,
              {
                height:'0.1rem'
              },
              {
               
                duration: 1,
                height:'10rem',
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: pageref.current,
                  start: 'top 60%',
                  end: '+=100',
                  scrub: true,
                  markers: false, // <-- Optional: shows where start/end happens
                },
              }
            );
          }, []);
  return (
    <div>
        <div className='flex flex-row h-80 justify-between w-full items-start'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <HiSparkles color='black' size={24} />
                                    <span className='text-4xl '>Course Representative</span>
                                </div>
                                <div className='flex flex-row  gap-10'>
                                    <div ref={pageref} className='z-15 w-1 h-[2.6rem] rounded-full absolute bg-red-400' />
                                    <div className='absolute z-10 w-1 h-[10rem] rounded-full bg-gray-400'/>
                                    <p className='text-xl w-[480px] ml-10 text-black/75'>Serving as the course representative for this course has been an incredibly rewarding
                                         and unforgettable experience. It offered a unique platform to develop leadership,
                                          communication, and organizational skills while representing the
                                           interests and concerns of my classmates.
                                    </p>
                                </div>
                            </div>
                            
                            
                        </div>
    </div>
  )
}

export default ListComponent