import { memo, } from 'react';
import LiveDemo from '../liveDemoCheck';
import OpenFilter from '../openFilter';

const index = memo(() => {
 
  return (
    <div className={`
    flex
    justify-between
    sLaptop:justify-normal
    px-[4%]
    sLaptop:px-0
    mt-[0.488rem]
    mobile:mt-[0.651rem]
    sMobile:mt-[1.041rem]
    mMobile:mt-[1.25rem]
    sLaptop:mt-0
    sLaptop:gap-[1.050rem]
    mLaptop:gap-[1.312rem]
    desktop:gap-[1.575rem]
    largeDesktop:gap-[1.969rem]
    items-center
    `}>
      <LiveDemo />
      <OpenFilter />
    </div>
  )
})

export default index