import { memo } from "react"

const index = memo(() => {
  return (
    <div className="
    flex flex-row items-center
     sLaptop:gap-[0.667rem]
     mLaptop:gap-[0.833rem]
     desktop:gap-[1rem]
     largeDesktop:gap-[1.25rem]
    ">
      <input className="
       block
       sLaptop:rounded-[0.167rem] 
       mLaptop:rounded-[0.208rem] 
       desktop:rounded-[0.25rem] 
       largeDesktop:rounded-[0.313rem]
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