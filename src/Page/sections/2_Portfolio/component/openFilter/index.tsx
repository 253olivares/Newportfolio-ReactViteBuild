import { openFilter } from '../../../../../store/projectSlice';
import { useAppDispatch } from '../../../../../store/hook';
import { memo, useContext } from 'react';
import { AppContext } from '../../../../contextRefs';

const index = memo(() => {
  const dispatch = useAppDispatch();

  const appContext = useContext(AppContext);
  const {Arrow} = appContext!;

  return (
    <div 
    onClick={()=> dispatch(openFilter())}
    className='flex flex-row
     hover:cursor-pointer
     items-center
     gap-[0.611rem]
     mobile:gap-[0.815rem]
     sMobile:gap-[1.304rem]
     mMobile:gap-[1.565rem]
     sLaptop:gap-[0.599rem]
     mLaptop:gap-[0.749rem]
     desktop:gap-[0.9rem]
     largeDesktop:gap-[1.125rem]
     font-medium
     text-SidebarGray
    '>
      <p className='
       text-[0.917rem]
       mobile:text-[1.223rem]
       sMobile:text-[1.956rem]
       mMobile:text-[2.348rem]
       sLaptop:text-[0.899rem]
       mLaptop:text-[1.124rem]
       desktop:text-[1.349rem]
       largeDesktop:text-[1.687rem]
       leading-none
       table-cell
       align-middle
      '>Filter</p>
      <img 
      className='
       w-[0.876rem]
       mobile:w-[1.168rem]
       sMobile:w-[1.868rem]
       mMobile:w-[2.242rem]
       sLaptop:w-[0.859rem]
       mLaptop:w-[1.073rem]
       desktop:w-[1.288rem]
       largeDesktop:w-[1.611rem]
       rotate-90'
      id='Arrow' src={Arrow} alt="Arrow" />
    </div>
  )
})

export default index