
import { memo, useContext } from 'react';
import { AppContext } from '../contextRefs';
import Doll from './component/doll'
import NavItems from './component/navItems'

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {svgArray,selectSVGArray,Character1} = appContext!;

  return (
  <div className="
  fixed z-30 
  left-0 
  bottom-0
  px-[0.488rem]
  mobile:px-[0.651rem]
  sMobile:px-[1.042rem]
  mMobile:px-[1.25rem]
  sLaptop:px-0
  sLaptop:py-[0.667rem]
  mLaptop:py-[0.833rem]
  desktop:py-[1rem]
  largeDesktop:py-[1.25rem]
  4k:py-[1.666rem]
  w-dvw
  sLaptop:w-[3.333rem] 
  mLaptop:w-[4.167rem] 
  desktop:w-[5rem] 
  largeDesktop:w-[6.25rem] 
  4k:min-w-[8.333rem]
  h-[3.223rem]
  mobile:h-[4.297rem]
  sMobile:h-[6.8755rem]
  mMobile:h-[8.25rem]
  sLaptop:h-dvh
  flex
  flex-row
  sLaptop:flex-col
  justify-between 
  items-center
  bg-SidebarGray 
  customShadow
  ">

    {/* 
      px-[0.5979rem]
      mobile:px-[.7973rem]
      sMobile:px-[1.275323rem]
      mMobile:px-[1.531rem]
    */}
      <Doll character={Character1} />
      <div className='
      flex 
      flex-row
      sLaptop:flex-col 
      items-end
      sLaptop:items-center 
      sLaptop:w-full
      h-full  
      sLaptop:h-auto
      sLaptop:px-0
      sLaptop:py-0
      '>
        {
          Object.entries(svgArray).map(
            ([k,v],index) => 
            <NavItems item={k} imgURLBase={v} imgAlternate={selectSVGArray[index]} key={index} />
          )
        }
      </div>
      {/* blank div just for flex box purposes */}
      <div className="
      blank 
      block 
      w-[1.838rem]
      mobile:w-[2.451rem]
      sMobile:w-[3.921rem]  
      mMobile:w-[4.706rem]
      sLaptop:w-[2.5rem] 
      mLaptop:w-[3.125rem] 
      desktop:w-[3.75rem] 
      largeDesktop:w-[4.688rem] 
      4k:w-[6.250rem]
      min-h-[2.3295rem]
      mobile:min-h-[3.106rem]
      sLaptop:min-h-[1.657rem]
      mLaptop:min-h-[2.071rem]
      desktop:min-h-[2.485rem]
      largeDesktop:min-h-[3.106rem]
      4k:min-h-[4.141rem]">
      </div>
    </div>
  )
})

export default index