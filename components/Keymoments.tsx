import React from 'react'
import VideoCarousel from './VideoCarousel'

const Keymoments = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center flex-col text-black justify-center'>
        <h1 className='text-4xl'>Key Moments</h1>
        <h2 className='text-xl text-black/75'>These are some of the most notable moment that happened while we were still in school</h2>
        <div>
          <VideoCarousel/>
        </div>
    </div>
  )
}

export default Keymoments