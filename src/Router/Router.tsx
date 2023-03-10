import React from 'react'
import {Route,Routes} from 'react-router-dom'

import HomePage from '@/Pages/HomePage'
import AboutUsPage from '@/Pages/AboutUsPage'
import { selectedPageEnum } from '@/types/types'
import ShopPage from '@/Pages/ShopPage'
import SocialPage from '@/Pages/SocialPage'

interface Props{
  setSelectedPage:(value:selectedPageEnum)=>void
}
const Router = ({setSelectedPage}:Props) => {
  return (
    <React.Fragment>
        <Routes>
            
            <Route path='/' element={<HomePage setSelectedPage={setSelectedPage} />} />
            <Route path='/aboutus' element={<AboutUsPage setSelectedPage={setSelectedPage} />} />
            <Route path='/shop' element={<ShopPage setSelectedPage={setSelectedPage} />} />
            <Route path='/social' element={<SocialPage setSelectedPage={setSelectedPage} />} />

        </Routes>
    </React.Fragment>
  )
}

export default Router