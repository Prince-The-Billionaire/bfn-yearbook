"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ListComponent from './ListComponent'
gsap.registerPlugin(ScrollTrigger)


const CourseReps = () => {
    // const coursereps = []
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const image1Ref = useRef<HTMLImageElement>(null);

    const images = [
      "/female1.png",
      "/BOY.png",
      "/images/image4.jpg",
    ];

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;
    
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: '=+400px',
          pin: imageRef.current,
          pinSpacing: false, // prevents extra white space after pin ends
          markers: false, // optional for debugging
        });
      }, []);

      useEffect(() => {
        const triggerLength = images.length * 150; // total scroll area
        const image = image1Ref.current;
    
        ScrollTrigger.create({
          trigger: image,
          start: "top top",
          end: `+=${triggerLength}`, // e.g., 400px for 4 images
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const scroll = self.scroll(); // how far the page has scrolled
            const index = Math.min(
              Math.floor(scroll / 100), // every 100px = new image
              images.length - 1
            );
            if (image) {
              console.log(image.src, images[index])
              image.src = images[index];
            }
          },
        });
      }, []);
    
  return (
    <div className='flex flex-col relative items-center justify-center  bg-gray-100'>
        <h1 className='text-5xl text-black font-bold mt-12'>Meet Our CourseReps</h1>
        <p className='text-black text-xl opacity-75'>Outstanding leaders that pushed us to accomplish get things</p>
        <div ref={sectionRef} className='min-h-screen relative flex flex-row w-full'>
            <div className='text-black self-start mt-30 m-10 text-xl gap-4 flex-col flex '>
                <ListComponent/>
                <ListComponent/>
                <ListComponent/>
            </div>
            <Image ref={image1Ref} src='/framed.png' alt='course rep' width={560} height={150} className='my-16 rounded-full mr-40 size-[600px] absolute right-10 object-cover' />
        </div>
        
        
    </div>
  )
}

export default CourseReps