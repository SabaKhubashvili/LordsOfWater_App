import { DeathSvg } from '@/assets/Svg'
import React from 'react'

export const SecondMarque = () => { 
  const MarqueStyling = 'text-9xl font-Pixelated px-10 uppercase  whitespace-nowrap flex flex-row items-center justify-center'
  return (
    <section className='w-full mx-auto overflow-hidden whitespace-nowrap '>
    <div className="marquee inline-flex whitespace-nowrap overflow-hidden justify-start ">
      <div className={`${MarqueStyling}`}>Drink Water Or Die <span className='w-32 ml-5 flex '><DeathSvg/></span></div>
      <div className={`${MarqueStyling}`}>Drink Water Or Die <span className='w-32 ml-5 flex '><DeathSvg/></span></div>
      <div className={`${MarqueStyling}`}>Drink Water Or Die <span className='w-32 ml-5 flex '><DeathSvg/></span></div>
      <div className={`${MarqueStyling}`}>Drink Water Or Die <span className='w-32 ml-5 flex '><DeathSvg/></span></div>
    </div>
    <div className="marquee inline-flex whitespace-nowrap overflow-hidden justify-start ">
      <div className={`${MarqueStyling}`}>Drink Water Or Die <span className='w-32 ml-5 flex '><DeathSvg/></span></div>
      <div className={`${MarqueStyling}`}>Drink Water Or Die <span className='w-32 ml-5 flex '><DeathSvg/></span></div>
      <div className={`${MarqueStyling}`}>Drink Water Or Die <span className='w-32 ml-5 flex '><DeathSvg/></span></div>
      <div className={`${MarqueStyling}`}>Drink Water Or Die <span className='w-32 ml-5 flex '><DeathSvg/></span></div>
    </div>
  </section>
  )
}

