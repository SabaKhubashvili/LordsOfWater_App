import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Router from '@/Router/Router';

import { Footer, Navbar } from './Scenes';
import { selectedPageEnum } from './types/types';

const App = () => {

  const [selectedPage,setSelectedPage] = React.useState<selectedPageEnum>(selectedPageEnum.Home);
 

  return (
    <React.Fragment>
        <BrowserRouter>
            <Navbar selectedPage={selectedPage}/>
            
            <Router setSelectedPage={setSelectedPage}/>
            
            <Footer/>

        </BrowserRouter>
    </React.Fragment>
  )
}

export default App