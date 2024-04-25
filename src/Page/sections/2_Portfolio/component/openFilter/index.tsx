import { memo, useContext } from 'react';
import Arrow from '/assets/filter_arrow.svg';
import { BrowserAppContext } from '../../mockBrowserContext';

const index = memo(() => {

  const appContext = useContext(BrowserAppContext);
  const {setOpenFilter} = appContext!;

  return (
    <div 
    onClick={()=> setOpenFilter(true)}
    className='flex flex-row
     hover:cursor-pointer
     items-center
     sLaptop:gap-[0.667rem]
     mLaptop:gap-[0.833rem]
     desktop:gap-[1rem]
     largeDesktop:gap-[1.25rem]
     font-medium
     text-SidebarGray
    '>
      <p className='
       sLaptop:text-[1rem]
       mLaptop:text-[1.25rem]
       desktop:text-[1.5rem]
       largeDesktop:text-[1.875rem]
       table-cell
       align-middle
      '>Filter</p>
      <img 
      className='
       sLaptop:w-[0.956rem]
       mLaptop:w-[1.194rem]
       desktop:w-[1.433rem]
       largeDesktop:w-[1.791rem]
       rotate-90'
      id='Arrow' src={Arrow} alt="Arrow" />
    </div>
  )
})

export default index