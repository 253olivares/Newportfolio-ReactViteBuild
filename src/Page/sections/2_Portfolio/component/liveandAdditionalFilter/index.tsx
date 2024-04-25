import { memo, } from 'react';
import LiveDemo from '../liveDemoCheck';
import OpenFilter from '../openFilter';

const index = memo(() => {

  return (
    <div className='flex 
    sLaptop:gap-[1.167rem]
    mLaptop:gap-[1.458rem]
    desktop:gap-[1.75rem]
    largeDesktop:gap-[2.188rem]
    items-center
    '>
      <LiveDemo />
      <OpenFilter />
    </div>
  )
})

export default index