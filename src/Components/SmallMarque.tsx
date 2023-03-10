import { World } from '@/assets/Svg/World'
import React from 'react'

const SmallMarque = () => {
  const MarqueStyling = 'text-3xl px-6  font-bold uppercase font-poppins whitespace-nowrap flex flex-row items-center justify-center'
  return (
    <div className='w-full mx-auto overflow-hidden whitespace-nowrap mt-4 '>
      <div className="marquee inline-flex whitespace-nowrap overflow-hidden justify-start ">
        <div className={`${MarqueStyling}`}>HIDEOUT COFFEE  | </div>
        <div className={`${MarqueStyling}`}>THE DARTMOUTH ARMS | </div>
        <div className={`${MarqueStyling}`}>MEATLIQUOR | </div>
        <div className={`${MarqueStyling}`}>MEATLIQUOR  | </div>
      </div>
      <div className="marquee inline-flex whitespace-nowrap overflow-hidden justify-start ">
      <div className={`${MarqueStyling}`}>HIDEOUT COFFEE | </div>
        <div className={`${MarqueStyling}`}>THE DARTMOUTH ARMS | </div>
        <div className={`${MarqueStyling}`}>MEATLIQUOR | </div>
        <div className={`${MarqueStyling}`}>MEATLIQUOR  | </div>
      </div>
    </div>
  )
}
export default  SmallMarque