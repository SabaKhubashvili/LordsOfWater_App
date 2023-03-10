import React from 'react'
import ReactPlayer from 'react-player'
import video from '@/assets/Video/map.mp4'
import SmallMarque from '@/Components/SmallMarque'

import Image from '@/assets/Images/MapImage.webp'
import { selectedPageEnum } from '@/types/types'
import { motion } from 'framer-motion'


interface Props{
  setSelectedPage:(value:selectedPageEnum) => void
}

export const Map = ({setSelectedPage}:Props) => {
  return (
    <motion.div id='shop' onViewportEnter={()=>{setSelectedPage(selectedPageEnum.Shop)}}>
      
    <section className='w-11/12 mx-auto mt-10 md:flex gap-4 '>
        <div className='border-solid w-full border-2 border-white shadow-Main basis-1/2 py-10 flex flex-col rounded-md'>
            <h1 className='uppercase font-Catamaran  text-center py-5 text-4xl font-bold border-b-2 border-white border-dashed  '>Find A Dealer</h1>
        
            <div className='mx-10 mt-5 shadow-Main'>

            <ReactPlayer
              playing={true}
              muted={true}
              loop={true}
              url={video}
              width='100%'
              height='100%'
              />
              </div>
              <div className=' md:w-[30rem] mt-6 max-w-full mx-auto '>
                <SmallMarque/>
              </div>
        </div>
        <div className='border-solid border-2 md:my-0 my-10 rounded-md border-white shadow-Main basis-1/2'>
          <img src={Image} className='h-full w-full' alt="" />
        </div>
    </section>
  </motion.div>
  )
}
