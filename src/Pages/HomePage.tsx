import React from 'react'

import { MainBanner, Map, Marque, SecondMarque, SmallBanner, VideoSection } from '@/Scenes'
import OurStory from '@/Scenes/OurStory/OurStory'
import { selectedPageEnum } from '@/types/types'

interface Props{
  setSelectedPage:(value:selectedPageEnum)=>void
}

const HomePage = ({setSelectedPage}:Props) => {
  setSelectedPage(selectedPageEnum.Home)
  return (
    <React.Fragment>
      <MainBanner />  
      <Marque  />
      <OurStory/>
      <SecondMarque/>
      <VideoSection/>
      <SmallBanner/>
      <Map/>
      <Marque />
    </React.Fragment>
  )
}

export default HomePage