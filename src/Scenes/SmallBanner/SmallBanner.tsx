import React from 'react'
import { WorldSecond,WaterSvg } from '@/assets/Svg'
import { selectedPageEnum } from '@/types/types'

interface Props{
  setSelectedPage:(value:selectedPageEnum) => void
}

export const SmallBanner = ({setSelectedPage}:Props) => {
  return (
    <section className='w-11/12 mx-auto md:flex justify-between border-solid border-2 border-white '>
        <div className='basis-3/5  flex items-center sm:justify-center justify-around py-6 font-Redaction md:text-7xl text-shadow-white sm:text-6xl text-2xl flex-wrap  px-6'>
            <span>Flourish</span>
            <span className='mx-5 md:w-20 w-14'><WorldSecond/></span>
            <span>Evolve</span>
            </div>
        <div className='basis-2/5 md:border-l-2 border-solid border-white flex justify-center py-6 w-full px-2 sm:border-t-2 '>
            <WaterSvg/>
        </div>
    </section>
  )
}

