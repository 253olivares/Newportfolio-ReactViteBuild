
import { memo, useContext } from 'react';
import { AppContext } from './contextSidebarAPI';
import Doll from './component/doll'
import NavItems from './component/navItems'

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {svgArray,selectSVGArray,Character1} = appContext!;

  return (
  <div className="
  fixed z-30 left-0 
  sLaptop:py-[0.667rem]
  mLaptop:py-[0.833rem]
  desktop:py-[1rem]
  largeDesktop:py-5
  sLaptop:min-w-[3.333rem] 
  mLaptop:min-w-[4.167rem] 
  desktop:min-w-[5rem] 
  largeDesktop:min-w-[6.25rem] 
  bg-SidebarGray 
  h-[100vh] 
  flex flex-col
  justify-between 
  items-center
  customShadow
  ">
      <Doll character={Character1} />
      <div className='
      flex flex-col 
      items-center w-full
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
      blank block 
      sLaptop:w-[2.5rem] 
      mLaptop:w-[3.125rem] 
      desktop:w-[3.75rem] 
      largeDesktop:w-[4.688rem] 
      sLaptop:min-h-[1.657rem]
      mLaptop:min-h-[2.071rem]
      desktop:min-h-[2.485rem]
      largeDesktop:min-h-[3.106rem]">
      </div>
    </div>
  )
})

export default index