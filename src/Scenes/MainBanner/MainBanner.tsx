import React from 'react'

import {MainBannerSvg } from '@/assets/Svg'
import BannerImage from '@/assets/Images/BannerImage.webp'
import useMediaQuery from '@/Hooks/UseMediaQuery'
import { selectedPageEnum } from '@/types/types'
import { motion } from 'framer-motion'

interface Props{
    setSelectedPage:(value:selectedPageEnum) => void
}

export const MainBanner = ({setSelectedPage}:Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1162px)")
    

  return (
    <motion.div  id='home' onViewportEnter={()=>{setSelectedPage(selectedPageEnum.Home)}}>

    <section className={` mb-10 mt-44 w-11/12 md:py-52 py-10  rounded-md shadow-Main  md:px-16 px-4 justify-between  grid-1 border-solid border-2 border-white mx-auto md:flex`}>
        <div className='flex items-center flex-col'>
            {/* Left */}
                {/* MainText */}
                <div className='w-full h-auto flex justify-center basis-3/5'>
                    <MainBannerSvg />
                </div>
                <div className='uppercase text-3xl text-center font-Poppins font-bold md:mt-6 mt-4 text-shadow-white'>
                    {/* Secondary Text */}
                    Great British Water
                </div>
                <div className=' md:text-3xl sm:text-xl text-sm mt-10 cursor-pointer border-solid border-2 text-shadow-default font-Poppins font-bold border-[#e30613] text-[#e30613] xs:py-6 py-3 xs:px-14 px-4  rounded-full'>
                    {/* Button */}
                    Buy Now
                </div>
        </div>
        <div className='max-w-4xl mx-auto flex items-center basis-3/5 mt-10 md:mt-0'>
            {/* Right */}
            <img src={BannerImage} alt="" />
        </div>
    </section>
    </motion.div>
  )
}
