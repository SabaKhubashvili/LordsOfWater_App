import React from 'react'


import {Close, Eye,Facebook,Github,Hamburger,Text} from '@/assets/Svg/NavbarSvg'
import Logo from '@/assets/Lottie/Logo.json'

import NavbarLink from '@/Components/NavbarLink'
import useMediaQuery from '@/Hooks/UseMediaQuery'
import SmallScreenNavbarLink from '@/Components/SmallScreenNavbarLink'


import { Player } from '@lottiefiles/react-lottie-player';

interface Props{
  selectedPage:string
}

export const Navbar = ({selectedPage}:Props) => {

  const isAboveBigScreens = useMediaQuery("(min-width:1506px)")
  const isAboveMediumScreens = useMediaQuery("(min-width:1162px)")
  const isAboveSmallScreens = useMediaQuery("(min-width:474px)")


  const [Menu,setMenu] = React.useState<boolean>(false)

  const [isTopOfPage,setIsTopOfPage] = React.useState<boolean>(true);

 

  React.useEffect(()=>{

    function handleScroll(){
      if(window.scrollY > 90 ){
        setIsTopOfPage(false)
      }else{
        setIsTopOfPage(true)
      }
    }

    window.addEventListener('scroll',handleScroll);
    return () => window.addEventListener('scroll',handleScroll)
  },[])


  const NavStylinig = isTopOfPage ? 'bg-transparent' : 'bg-black'



  return (
    <React.Fragment>

    <nav className= {`${NavStylinig} z-50 fixed top-0 w-11/12 py-12 left-0 right-0  md:px-10  px-3 my-6 flex justify-between rounded-md   font-Poppins gap-4 items-center h-20 mx-auto border-solid border-2 border-white shadow-NavShadow transition-all duration-100`}>

        <div className='flex items-center mr-2 '>
          {/* Navbar Logo Container */}
            <div className=' md:w-16 w-20'>
              {/* Eye */}
              <Player
                src={Logo}
                className="player"
                loop
                autoplay
              />
            </div>
            {isAboveSmallScreens ?

              <div className=' md:w-auto w-auto md:ml-5 '>
              {/* NavbarText */}
                <Text/>
            </div>
            :
            ''
            }
        </div>
        <div className='md:ml-10'>
          {/* Navbar Navigation */}
         {isAboveMediumScreens ?  <div className='flex justify-around'>
              {/* Nav Components */}
                <div>
                     <NavbarLink to='/' page='Home' selectedPage={selectedPage} />
                </div>
                <div>
                     <NavbarLink to='/aboutus' page='About Us' selectedPage={selectedPage} />
                </div>
                <div>
                     <NavbarLink to='/shop' page='Shop' selectedPage={selectedPage}/>
                </div>
                <div>
                     <NavbarLink to='/social' page='Social'  selectedPage={selectedPage}/>
                </div>
           </div>
          
          :
          (
            <div className='w-10'>

              {!isAboveMediumScreens && !Menu ?(
                <div onClick={()=>{setMenu(true)}}>
                  <Hamburger />
                </div>
                ):
                (
                  <div onClick={()=>{setMenu(false)}} >
                    <Close />
                  </div>
                )
              }

            </div>
          )
        }
        </div>
          {isAboveBigScreens ?
          <div className='text-center ml-auto uppercase font-bold text-NavbarFont '>
            Drink Water Or Die
          </div>
          :
          ''
          }

        {/* Nav Menu */}

            
         </nav>
{
              !isAboveMediumScreens && Menu ?
              (
                <div className=' bg-Main top-0 h-full z-50 fixed  sm:px-12 px-4 w-full sm:py-10 py-4 flex flex-col opacity-100 justify-between'>
                  <div className='flex justify-between'>
                    {isAboveSmallScreens
                    ?
                    <div className='w-72'>
                      <Text/>
                    </div>
                    :
                    ''
                    }
                    <div className='ml-auto w-16' onClick={()=>{setMenu(false)}}>
                      <Close/>
                    </div>
                  </div>
                  <div>
                    {/* Nav Components */}
                    <div>
                      {/* Nav Component */}
                      <SmallScreenNavbarLink>Home</SmallScreenNavbarLink>
                    </div>
                    <div>
                      {/* Nav Component */}
                      <SmallScreenNavbarLink>About Us</SmallScreenNavbarLink>
                    </div>
                    <div>
                      {/* Nav Component */}
                      <SmallScreenNavbarLink>Shop</SmallScreenNavbarLink>
                    </div>
                  </div>

                  <div className='justify-center items-center w-full border-solid border-2 border-white shadow-NavShadow'>
                    {/* Footer */}
                    <div className='text-white flex justify-center items-center py-4 border-b-2 border-solid'>
                        {/* Top */}
                        <div className='w-10 mx-2'>
                          <Facebook/>
                        </div>
                        <div className='w-10 mx-2'>
                          <Github/>
                        </div>
                    </div>
                    <div className='text-center sm:py-10 py-5'>
                      {/* Bottom */}
                      © Copyright  2023 Lords of Water. All Rights Reserved. Site by Saba Khubashvili
                    </div>
                  </div>
                </div>
              )
              :
              (
                 ''
              )
            }
      
        </React.Fragment>
  )
}
