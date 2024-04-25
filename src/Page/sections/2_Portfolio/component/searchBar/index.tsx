import { memo, useContext } from "react"
import searchIcon from '/assets/searchButton.svg'
import { BrowserAppContext } from "../../mockBrowserContext"


const index = memo(() => {

  const appContext = useContext(BrowserAppContext);
  const {searchTerm, setSearchTerm} = appContext!;

  return (
    <div className="flex 
    sLaptop:gap-[1.333rem]
    mLaptop:gap-[1.667rem]
    desktop:gap-[2rem]
    largeDesktop:gap-[2.5rem]
    items-center
    ">
      <label className="
      sLaptop:text-[1rem]
      mLaptop:text-[1.25rem]
      desktop:text-[1.5rem]
      largeDesktop:text-[1.875rem]
      font-medium
      text-SidebarGray
      " htmlFor="Search">
        Search:
      </label>
      <div className="flex items-center
      sLaptop:h-[1.667rem]
      mLaptop:h-[2.083rem]
      desktop:h-[2.5rem]
      largeDesktop:h-[3.125rem]
      sLaptop:rounded-[.265rem]
      mLaptop:rounded-[.33rem]
      desktop:rounded-[.4rem]
      largeDesktop:rounded-[0.5rem]
      sLaptop:focus-within:ring-[2.132px]
      mLaptop:focus-within:ring-[2.64px]
      desktop:focus-within:ring-[3.2px]
      largeDesktop:focus-within:ring-[4px]
      focus-within:ring-SelectBlue
      ">
          <input 
           value={searchTerm}
           onChange={(e)=> setSearchTerm(e.target.value)}
           id="Search"
           className="
           sLaptop:text-[1rem]
           mLaptop:text-[1.25rem]
           desktop:text-[1.5rem]
           largeDesktop:text-[1.875rem]
           sLaptop:w-[9.9375rem]
           mLaptop:w-[12.375rem]
           desktop:w-[15rem]
           largeDesktop:w-[18.75rem]
           sLaptop:px-[.6296rem]
           mLaptop:px-[.7840rem]
           desktop:px-[0.9504rem]
           largeDesktop:px-[1.188rem]
           sLaptop:rounded-l-[.265rem]
           mLaptop:rounded-l-[.33rem]
           desktop:rounded-l-[.4rem]
           largeDesktop:rounded-l-[0.5rem]
           bg-GlassLighterBackground
           text-SidebarGray
           h-full
           focus:bg-GlassLighterBackgroundSelect
           focus:outline-none
           "
          type="text" />
          <button
          className="
          sLaptop:px-[.6296rem]
          mLaptop:px-[.7840rem]
          desktop:px-[0.9504rem]
          largeDesktop:px-[1.188rem]
          bg-SiteDarkGreen
          sLaptop:rounded-r-[.265rem]
          mLaptop:rounded-r-[.33rem]
          desktop:rounded-r-[.4rem]
          largeDesktop:rounded-r-[0.5rem]
          hover:opacity-75
          h-full
          focus:pointer-events-none
          ">
            <img 
            className="
            sLaptop:w-[1.033rem]
            mLaptop:w-[1.292rem]
            desktop:w-[1.55rem]
            largeDesktop:w-[1.938rem]
            "
            src={searchIcon} alt="SearchIcon" />
          </button>
      </div>
    </div>
  )
})

export default index