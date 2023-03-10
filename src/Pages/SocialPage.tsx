import { selectedPageEnum } from '@/types/types'
import React from 'react'

interface Props{
  setSelectedPage:(value:selectedPageEnum)=>void
}

const SocialPage = ({setSelectedPage}:Props) => {
  
  setSelectedPage(selectedPageEnum.Social)
  return (
    <section className='my-52 text-5xl font-bold font-Catamaran flex justify-center items-center'>
      ...Coming Soon
    </section>
  )
}

export default SocialPage