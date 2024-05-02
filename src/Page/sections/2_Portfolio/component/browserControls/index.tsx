import { memo, useContext } from 'react';
import { AppContext } from '../../../../contextRefs';

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {minimize, fullscreen, close} = appContext!;

  const browserControls:string[] = [minimize, fullscreen, close];

  return (
    <div className="flex flex-row items-center relative
    sLaptop:px-[0.584rem]
    mLaptop:px-[0.761rem]
    desktop:px-[.85rem]
    largeDesktop:px-[1rem]
    sLaptop:gap-[0.675rem]
    mLaptop:gap-[0.844rem]
    desktop:gap-[1.013rem]
    largeDesktop:gap-[1.266rem]
    sLaptop:pt-[0.313rem]
    sLaptop:pb-[.5rem]
    mLaptop:pb-[0.625rem]
    desktop:pb-[0.75rem]
    largeDesktop:pb-[0.938rem]
    ">
        {
          browserControls.map((x,index)=> 
            <img className='
            hover:opacity-75
            hover:cursor-pointer
            py-auto
            sLaptop:w-[1.094rem]
            mLaptop:w-[1.367rem]
            desktop:w-[1.64rem]
            largeDesktop:w-[2.051rem]
            ' key={index} src={x} alt="x" />
          )
        }
    </div>
  )
})

export default index