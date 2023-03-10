import { selectedPageEnum } from '@/types/types'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props{
    page:string
    to:string
    selectedPage:string
}

const NavbarLink = ({page,selectedPage,to}:Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g,"")

  const isActive = selectedPage == lowerCasePage ? 'relative before:absolute before:bottom-0 before:bg-white before:w-full before:h-1' : ''
  return (
    <NavLink to={to} onClick={()=>{}} className={`${isActive} py-2 font-bold uppercase cursor-pointer text-NavbarFont mx-3 `}>
        {page}
    </NavLink>
  )
}

export default NavbarLink