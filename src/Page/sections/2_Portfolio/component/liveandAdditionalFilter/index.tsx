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
    sLaptop:gap-[1.167rem]
    mLaptop:gap-[1.458rem]
    desktop:gap-[1.75rem]
    largeDesktop:gap-[2.188rem]
    items-center
    `}>
      <LiveDemo />
      <OpenFilter />
    </div>
  )
})

export default index