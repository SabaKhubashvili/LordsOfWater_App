import React from 'react'
import { BrowserRouter } from 'react-router-dom'



import { MainBanner, Map, Marque, SecondMarque, SmallBanner, VideoSection,Navbar,Footer, OurStory } from '@/Scenes'
import { selectedPageEnum } from './types/types';

const App = () => {

  const [selectedPage,setSelectedPage] = React.useState<selectedPageEnum>(selectedPageEnum.Home);
 

  return (
    <React.Fragment>
        <BrowserRouter>
            <Navbar selectedPage={selectedPage}/>
            
            <MainBanner  setSelectedPage={setSelectedPage}/>  
            <Marque/>
            <OurStory setSelectedPage={setSelectedPage}/>
            <SecondMarque />
            <VideoSection setSelectedPage={setSelectedPage}/>
            <SmallBanner setSelectedPage={setSelectedPage}/>
            <Map setSelectedPage={setSelectedPage}/>
            <Marque />
            
            <Footer setSelectedPage={setSelectedPage}/>

        </BrowserRouter>
    </React.Fragment>
  )
}

export default App