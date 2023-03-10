import { Clock, Heart, Instagram, LordsOfWaterStraight } from '@/assets/Svg'
import { Arrow } from '@/assets/Svg/Arrow'
import useMediaQuery from '@/Hooks/UseMediaQuery'
import React from 'react'

const FooterBottom = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1162px)")

  return (
    <React.Fragment>

        <div className='flex my-10'>
          {isAboveMediumScreens ?

            <div className='w-56'>
              <Clock/>
            </div>
            :
            ''
          }
            <div className='w-full'>
                <LordsOfWaterStraight/>
            </div>
        </div>
        <div className='flex gap-5'>

          <div className='w-full border-solid border-2 py-4  md:flex  justify-between border-white shadow-Main'>
            {/* CopyRight */}
            <div className='flex items-center px-10 md:border-b-0 border-b-2 md:py-0 py-5'>

              <div className='w-12 sm:inline hidden'>
                <Heart/>
              </div>
              <div className='ml-0 sm:ml-10 md:text-xl sm:text-lg xs:text-sm font-bold font-Catamaran'>
                © COPYRIGHT 2023 LORDS OF WATER. ALL RIGHTS RESERVED. CONTACT US. SITE BY SUPERRB.
              </div>
            </div>


          <div className='md:w-20 w-20 md:mx-10 mx-auto md:py-0 py-5 border-solid md:border-l-2 border-white md:ml-auto md:pl-10 '>
            {/* Instagram */}

              <Instagram/>
          </div>
          </div>
            { isAboveMediumScreens ?

          <div className='shadow-Main rounded-full w-20 px-6 py-6 border-solid border-2 border-white cursor-pointer hover:border-red-400 transition-all duration-300 hover:shadow-red-600'
          onClick={()=>{window.scroll(0,0)}}
          >
            <Arrow/>
          </div>
          :
          ''
          }

        </div>
    </React.Fragment>
  )
}

export default FooterBottom