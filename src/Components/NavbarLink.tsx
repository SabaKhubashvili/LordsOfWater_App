import { selectedPageEnum } from '@/types/types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


interface Props{
    page:string
    selectedPage:string
}

const NavbarLink = ({page,selectedPage}:Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g,"")

  const isActive = selectedPage == lowerCasePage ? 'relative before:absolute before:bottom-0 before:bg-white before:w-full before:h-1' : ''
  return (
    <AnchorLink href={`#${lowerCasePage}`} onClick={()=>{}} className={`${isActive} py-2 font-bold uppercase cursor-pointer text-NavbarFont mx-3 `}>
        {page}
    </AnchorLink>
  )
}

export default NavbarLink