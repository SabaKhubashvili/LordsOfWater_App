import React from 'react'

import {  HandSkull, WorldSecond } from '@/assets/Svg'
import { Chains } from '@/assets/Svg/Chains'
import {motion} from 'framer-motion'

import Image1 from '@/assets/Images/FooterImage_1.webp'
import Image2 from '@/assets/Images/FooterImage_2.webp'
import Image3 from '@/assets/Images/FooterImage_3.webp'
import Image4 from '@/assets/Images/FooterImage_4.webp'

import FooterBottom from './FooterBottom'
import { selectedPageEnum } from '@/types/types'

interface Props{
    setSelectedPage:(value:selectedPageEnum) => void
  }

export const Footer = ({setSelectedPage}:Props) => {

    

  return (
    <motion.footer className='pb-10' id='social' onViewportEnter={()=>{setSelectedPage(selectedPageEnum.Social)}}>

    <section className='w-11/12 mx-auto border-solid border-2 border-white shadow-Main'>
        <div>
            <div className='mx-6 flex md:flex-row flex-col py-6'>
                {/* Top */}
                <h1 className='uppercase font-Catamaran inline-block text-shadow-white md:text-7xl sm:text-5xl  text-2xl  -tracking-wide font-bold basis-2/6 md:text-start text-center  '>FOLLOW US</h1>

                <div className='h-20 flex justify-between md:items-start items-center md:mt-0 mt-6 flex-col basis-2/6 '>
                    <div className='flex justify-start'>
                    <Chains/>
                    </div>
                    
                    <h1 className='font-bold md:text-4xl sm:text-3xl text-sm font-Redaction text-shadow-white transition-all duration-300 hover:text-red-600 cursor-pointer '>@THELORDSOFWATER</h1>
                </div>
                <div className='basis-2/6 flex md:justify-end items-center justify-center md:mt-0 w-full'>
                        <div className='w-10'>
                            <HandSkull/>
                        </div>
                        <div className='w-20 ml-5'>
                            <WorldSecond/>
                        </div>
                </div>
            </div>
            <div className='border-t-2 py-10 border-solid border-white grid sm:grid-cols-2 grid-cols-1 gap-5 md:px-0 px-10 md:flex justify-between '>
                <div className=' w-full md:mx-10 rounded-md border-solid border-2 border-white shadow-Main hover:border-red-600 cursor-pointer transition-all duration-300'>
                    <img src={Image1} className='w-full' alt="" />
                </div>
                <div className=' w-full md:mx-10 rounded-md border-solid border-2 border-white shadow-Main hover:border-red-600 cursor-pointer transition-all duration-300'>
                    <img src={Image2} className='w-full' alt="" />
                </div>
                <div className=' w-full md:mx-10 rounded-md border-solid border-2 border-white shadow-Main hover:border-red-600 cursor-pointer transition-all duration-300'>
                    <img src={Image3} className='w-full' alt="" />
                </div>
                <div className='w-full md:mx-10 rounded-md border-solid border-2 border-white shadow-Main hover:border-red-600 cursor-pointer transition-all duration-300'>
                    <img src={Image4} className='w-full' alt="" />
                </div>
            </div>
        </div>
    </section>

      
        <div className='w-11/12 mx-auto'>
           
            <FooterBottom/>
        </div>


        </ motion.footer>
  )
}

