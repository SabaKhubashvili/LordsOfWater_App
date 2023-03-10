import React from 'react'
import { motion } from 'framer-motion'

import backgroundImage from '@/assets/Images/aboutus_background.webp'
import { selectedPageEnum } from '@/types/types'

interface Props{
  setSelectedPage:(value:selectedPageEnum) => void
}

export const OurStory = ({setSelectedPage}:Props) => {
  
  return (
    <motion.div  id='aboutus' onViewportEnter={()=>{setSelectedPage(selectedPageEnum.Aboutus)}}>

    <section className='w-11/12 my-10  gap-4 md:grid grid-cols-2 min-h-[60rem]  shadow-Main rounded-md mx-auto py-5 px-7 border-solid border-2 border-white'>
        <div className='w-full object-center object-cover border-solid border-2 border-white shadow-Main'>
          {/* Left */}
            <img src={backgroundImage} className='object-center object-cover block h-full' alt="" />
        </div>
        <div className='md:my-0 my-6  '>
          {/* Right */}
          <div className='font-poppins font-bold text-3xl uppercase'>
            {/* title */}
            Our Story
          </div>
          <div className='font-bold md:text-5xl sm:text-4xl text-2xl uppercase py-6 font-Eczar'>
            {/* Descritpion */}
            THE LORDS OF WATER A RACE OF SUPREME BEINGS WHO TRAVELED TIME AND SPACE TO BRING YOU THEIR WATER. NOT ONLY IS WATER THE SOURCE OF ALL LIFE THE WATER YOU DRINK TODAY HAS BEEN A PART OF EVERYTHING AND ANYTHING COULD POSSIBLY FATHOM SINCE TIME BEGAN. WATER IS THE PILLAR OF EARTHS VERY EXISTENCE YET WE POLLUTE OUR WORLD WITH PUTRID PLASTICS THAT POISON THE OCEANS AND POLLUTE THE SKYS. THE HUMAN RACE HAS ONE FINAL CHANCE AT REDEMPTION SO SET ASIDE PLASTIC BOTTLES AND DRINK WATER FROM OUR CANS OR YOU WILL MEET YOUR DOOM.
          </div>
          <div className='ml-auto flex justify-center h-auto shadow-Main border-solid border-2 border-white'>
            <div className='flex py-2 justify-around items-center font-Pixelated flex-row flex-wrap '>
              <div className=' font-bold md:text-5xl text-shadow-white   sm:text-3xl text-2xl uppercase tracking-widest px-4'>
                Redemption
              </div>
              <div className=' font-bold md:text-5xl text-shadow-white   sm:text-3xl text-2xl uppercase tracking-widest px-2'>
                Redemption
              </div>
              <div className=' font-bold md:text-5xl text-shadow-white   sm:text-3xl text-2xl uppercase tracking-widest px-2' >
                Redemption
              </div>
            </div>
          </div>
        </div>
    </section>
    </motion.div>
  )
}

