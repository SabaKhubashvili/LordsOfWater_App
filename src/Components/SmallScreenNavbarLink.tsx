import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Props{
    children:React.ReactNode
    to:string
    setMenu:(value:boolean)=>void
}

const SmallScreenNavbarLink = ({children,to,setMenu}:Props) => {

  return (
    <AnchorLink href={`#${to}`} onClick={()=>{setMenu(false)}} >
        {children}
    </AnchorLink>
  )
}

export default SmallScreenNavbarLink