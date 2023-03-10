import React from 'react'
import video from '@/assets/Video/MainVideo.mp4'

import ReactPlayer from 'react-player'
import { HandSkull,Heart } from '@/assets/Svg'

export const VideoSection = () => {
  return (
    <section className='w-11/12 mx-auto border-solid border-2 border-white shadow-Main px-4 py-5 my-10  '>
        <div className='w-full h-full my-4 shadow-Main border-solid border-2 border-white'>
                <ReactPlayer
                            playing={true}
                            muted={true}
                            className='react-player'
                            controls={true}
                            loop={true}
                            url={video}
                            width='100%'
                            height='100%'
                        />
        </div>
        <div className='w-full flex justify-center my-4 py-2' >
            <div className='text-center uppercase  font-Redaction font-bold  text-shadow-white flex items-center'>
              <span className='w-8 hidden sm:inline'><HandSkull/></span>
              <h1 className='mx-5 md:text-7xl sm:text-5xl text-2xl text-shadow-white'>
               Drink Water Or Die
              </h1>
               <span className='w-14 hidden sm:inline'><Heart/></span>
               </div>
        </div>
    </section>
  )
}
