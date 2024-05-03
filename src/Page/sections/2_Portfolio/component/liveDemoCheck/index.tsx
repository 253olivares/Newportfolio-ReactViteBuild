import { memo } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import { changeLiveDemo, getLiveDemo } from "../../../../../store/projectSlice"

const index = memo(() => {
  const dispatch = useAppDispatch()

  const liveDemos = useAppSelector(getLiveDemo);

  return (
    <div className="
     flex
     flex-row-reverse 
     sLaptop:flex-row 
     items-center
     gap-[0.611rem]
     mobile:gap-[0.815rem]
     sMobile:gap-[1.304rem]
     mMobile:gap-[1.565rem]
     sLaptop:gap-[0.667rem]
     mLaptop:gap-[0.833rem]
     desktop:gap-[1rem]
     largeDesktop:gap-[1.25rem]
    ">
      <input
       checked={liveDemos}
       onChange={()=>dispatch(changeLiveDemo())}
       className="
       block
       sLaptop:rounded-[0.167rem] 
       mLaptop:rounded-[0.208rem] 
       desktop:rounded-[0.25rem] 
       largeDesktop:rounded-[0.313rem]
       w-[1.07rem]
       h-[1.07rem]
       mobile:w-[1.426rem]
       mobile:h-[1.426rem]
       sMobile:h-[2.282rem]
       sMobile:w-[2.282rem]
       mMobile:w-[2.739rem]
       mMobile:h-[2.739rem]
       sLaptop:w-[1.167rem]
       sLaptop:h-[1.167rem]
       mLaptop:w-[1.458rem]
       mLaptop:h-[1.458rem]
       desktop:w-[1.75rem]
       desktop:h-[1.75rem]
       largeDesktop:w-[2.188rem]
       largeDesktop:h-[2.188rem]
       bg-GlassLighterBackground
       checked:bg-SiteDarkGreen
      " type="checkbox" id="LiveDemo" name="LiveDemo" />
      <label className="text-SidebarGray
       text-[0.917rem]
       mobile:text-[1.223rem]
       sMobile:text-[1.956rem]
       mMobile:text-[2.348rem]
       sLaptop:text-[1rem]
       mLaptop:text-[1.25rem]
       desktop:text-[1.5rem]
       largeDesktop:text-[1.875rem]
       table-cell
       align-middle
       font-medium
       leading-none
      " htmlFor="LiveDemo" >Live Demo</label>
    </div>
  )
})

export default index