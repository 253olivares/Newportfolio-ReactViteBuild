
import { memo, useContext } from 'react';
import { AppContext } from './contextSidebarAPI';
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
  px-[2.6%]
  sLaptop:px-0
  sLaptop:py-[0.667rem]
  mLaptop:py-[0.833rem]
  desktop:py-[1rem]
  largeDesktop:py-5
  w-[100vw]
  sLaptop:w-auto
  sLaptop:min-w-[3.333rem] 
  mLaptop:min-w-[4.167rem] 
  desktop:min-w-[5rem] 
  largeDesktop:min-w-[6.25rem] 
  h-[2.44125rem]
  mobile:h-[3.255rem]
  sMobile:h-[5.20625rem]
  mMobile:h-[6.25rem]
  sLaptop:h-[100vh] 
  flex 
  flex-row
  sLaptop:flex-col
  justify-between 
  items-center
  bg-SidebarGray 
  customShadow
  ">
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
      px-[0.5979rem]
      mobile:px-[.7973rem]
      sMobile:px-[1.275323rem]
      mMobile:px-[1.531rem]
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
      w-[1.4648rem]
      mobile:w-[1.9531rem]
      sMobile:w-[3.1248rem]
      mMobile:w-[3.75rem]
      sLaptop:w-[2.5rem] 
      mLaptop:w-[3.125rem] 
      desktop:w-[3.75rem] 
      largeDesktop:w-[4.688rem] 
      min-h-[2.3295rem]
      mobile:min-h-[3.106rem]
      sLaptop:min-h-[1.657rem]
      mLaptop:min-h-[2.071rem]
      desktop:min-h-[2.485rem]
      largeDesktop:min-h-[3.106rem]">
      </div>
    </div>
  )
})

export default index