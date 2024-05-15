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
       sLaptop:w-[1.050rem]
       sLaptop:h-[1.050rem]
       mLaptop:w-[1.312rem]
       mLaptop:h-[1.312rem]
       desktop:w-[1.575rem]
       desktop:h-[1.575rem]
       largeDesktop:w-[1.969rem]
       largeDesktop:h-[1.969rem]
       bg-GlassLighterBackground
       checked:bg-SiteDarkGreen
      " type="checkbox" id="LiveDemo" name="LiveDemo" />
      <label className="text-SidebarGray
       text-[0.917rem]
       mobile:text-[1.223rem]
       sMobile:text-[1.956rem]
       mMobile:text-[2.348rem]
       sLaptop:text-[0.899rem]
       mLaptop:text-[1.124rem]
       desktop:text-[1.349rem]
       largeDesktop:text-[1.687rem]
       table-cell
       align-middle
       font-medium
       leading-none
      " htmlFor="LiveDemo" >Live Demo</label>
    </div>
  )
})

export default index