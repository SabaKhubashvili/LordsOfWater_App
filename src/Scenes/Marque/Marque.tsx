import { World } from '@/assets/Svg/World'
import React from 'react'

export const Marque = () => {
  const MarqueStyling = 'text-7xl my-10 px-10 font-bold uppercase font-poppins whitespace-nowrap flex flex-row items-center justify-center'
  return (
    <section className='w-full mx-auto overflow-hidden whitespace-nowrap '>
      <div className="marquee inline-flex whitespace-nowrap overflow-hidden justify-start ">
        <div className={`${MarqueStyling}`}>24 Hour Water Party <span className='w-12 ml-5 flex '><World/></span></div>
        <div className={`${MarqueStyling}`}>24 Hour Water Party <span className='w-12 ml-5 flex '><World/></span></div>
        <div className={`${MarqueStyling}`}>24 Hour Water Party <span className='w-12 ml-5 flex '><World/></span></div>
        <div className={`${MarqueStyling}`}>24 Hour Water Party <span className='w-12 ml-5 flex '><World/></span></div>
      </div>
      <div className="marquee inline-flex whitespace-nowrap overflow-hidden justify-start ">
        <div className={`${MarqueStyling}`}>24 Hour Water Party <span className='w-12 ml-5 flex '><World/></span></div>
        <div className={`${MarqueStyling}`}>24 Hour Water Party <span className='w-12 ml-5 flex '><World/></span></div>
        <div className={`${MarqueStyling}`}>24 Hour Water Party <span className='w-12 ml-5 flex '><World/></span></div>
        <div className={`${MarqueStyling}`}>24 Hour Water Party <span className='w-12 ml-5 flex '><World/></span></div>
      </div>
    </section>
  )
}
