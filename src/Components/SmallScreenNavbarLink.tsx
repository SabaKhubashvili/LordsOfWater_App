import React from 'react'

interface Props{
    children:React.ReactNode
}

const SmallScreenNavbarLink = ({children}:Props) => {

  return (
    <li className='border-solid  border-b-2 border-b-white sm:py-6 py-2 w-full mb-6 uppercase text-2xl font-bold list-none'>
        {children}
    </li>
  )
}

export default SmallScreenNavbarLink