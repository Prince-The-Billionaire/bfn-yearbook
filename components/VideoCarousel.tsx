'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const videos = [
  '/hero.mp4',
  '/hero.mp4',
  '/hero.mp4',
]

export default function VideoCarousel() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const divref = useRef<HTMLDivElement>(null)
  // const progressRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const currentVideo = videoRefs.current[current]
    if (!currentVideo) return

    currentVideo.play()
    animateProgress(currentVideo.duration)

    const handleEnded = () => {
      moveToNext()
    }

    currentVideo.addEventListener('ended', handleEnded)

    return () => {
      currentVideo.removeEventListener('ended', handleEnded)
    }
  }, [current])

  useEffect(() => {
    gsap.set(divref.current, { x: 800 })
  },[])

  const animateProgress = (duration: number) => {
    const prev = (current -1 )% videos.length
    if (dotRefs.current[current]) {
      gsap.fromTo(dotRefs.current[current],
        { width: '0px' },
        { width: '100px', duration, ease: 'linear' }
      )
      setTimeout(() => {
        gsap.set(dotRefs.current[prev], { width: '10px' })
      },200)
    }
    
  }

  const moveToNext = () => {
    if (current >= videos.length - 1) return
    gsap.to(videoRefs.current[current], { x:-800, duration: 0.5,  })
    const next = (current + 1) % videos.length
    const prev = (current -1 )% videos.length
    setCurrent(next)
    setTimeout(() => {
      gsap.to(videoRefs.current[next], { x: -800, duration: 0.5,  })
      gsap.to(videoRefs.current[prev], { x: -800, duration: 0.5, })
    }, 200)
  }

  return (
    <div className=" p-10 overflow-x-clip">
      <div ref={divref} className="relative w-[90vw] flex flex-row justify-center items-center gap-6 rounded-2xl h-[60vh] aspect-video">
        {videos.map((src, i) => (
          <video
            key={i}
            ref={(el: HTMLVideoElement | null) => { videoRefs.current[i] = el }}
            src={src}
            className={`rounded-2xl top-0 left-0 w-full h-full object-cover transition-opacity duration-300 `}
            muted
            playsInline
            controls={false}
          />
        ))}
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
          {/* <div ref={progressRef} className="h-full bg-blue-500 w-0"></div> */}
        </div>
      </div>
      <div className="flex justify-center mt-3 gap-2">
        {videos.map((_, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => { dotRefs.current[i] = el }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-red-500 scale-110' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}
