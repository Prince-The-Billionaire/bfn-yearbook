import Image from 'next/image'
import React from 'react'
import MostLikelyCard from './MostLikelyCard'

const MostLikely = () => {
    const array: number[] = []
  return (
    <div className='min-h-screen bg-gray-100 flex items-center flex-col justify-center'>
        <h1 className='text-6xl font-bold text-black'>Most Likely To</h1>
        <h2 className='text-2xl text-black/70'>Every one is unique, so we created a fun most likely section for every one in our course</h2>
        <div className='grid grid-cols-4 gap-16 mt-10'> 
        {Array(20)
        .fill(null)
        .map((_, index) => (
          <MostLikelyCard key={index} />
        ))}
        </div>
    </div>
  )
}

export default MostLikely