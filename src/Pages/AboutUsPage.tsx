import { selectedPageEnum } from '@/types/types'
import React from 'react'

interface Props{
  setSelectedPage:(value:selectedPageEnum)=>void
}

const AboutUsPage = ({setSelectedPage}:Props) => {
  
  setSelectedPage(selectedPageEnum.Aboutus)
  return (
    <section className='my-52 text-5xl font-bold font-Catamaran flex justify-center items-center'>
      ...Coming Soon
    </section>
  )
}

export default AboutUsPage