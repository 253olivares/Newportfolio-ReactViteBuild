
import { memo, useContext } from 'react';
import { AppContext } from '../contextRefs';
import Doll from './component/doll/Doll'
import NavItems from './component/navItems/NavItems'
import BlankBox from './component/BlankBox/BlankBox';

const Sidebar = memo(() => {

  const appContext = useContext(AppContext);
  const {svgArray,selectSVGArray,Character1} = appContext!;

  return (
  <div className="
  sidebarCss
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
      <BlankBox />
    </div>
  )
})

export default Sidebar;