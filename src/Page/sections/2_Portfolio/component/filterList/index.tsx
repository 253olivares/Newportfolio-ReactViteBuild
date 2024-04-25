import { memo, useContext, useEffect } from "react";
import { BrowserAppContext } from "../../mockBrowserContext";
import closeBrowserIcon from '/assets/browser_closeButton.svg'

const index = memo(() => {

    const appContext = useContext(BrowserAppContext);
    const {filterListRef, setOpenFilter} = appContext!;

    useEffect(()=> {
      const clickOnOutside = (e:MouseEvent | TouchEvent)=> {
        const element = e.target;
        if (filterListRef.current && !filterListRef.current.contains(element as Node)){
          setOpenFilter(false);
        }
      }
      
      window.addEventListener('click',clickOnOutside,true)
      return ()=> {
        window.removeEventListener('click',clickOnOutside,true)
      }
    },[])

  return (
      <div
        ref={filterListRef}
        className={`h-full
         absolute
         right-0
         left-auto
         top-0
         z-[5]
         bg-GlassBackground
         backdrop-blur-[0.25rem]  
         sLaptop:rounded-r-[.66rem]
         mLaptop:rounded-r-[.83rem]
         desktop:rounded-r-[1rem]
         largeDesktop:rounded-r-[1.25rem]
         `}>
          <div className="
          w-full 
          flex justify-between
          sLaptop:mt-[.46rem]
          mLaptop:mt-[.58rem]
          desktop:mt-[.7rem]
          largeDesktop:mt-[0.875rem]
          sLaptop:px-[.66rem]
          mLaptop:px-[.83rem]
          desktop:px-[1rem]
          largeDesktop:px-[1.25rem]
          sLaptop:gap-[4.83rem]
          mLaptop:gap-[5.98]
          desktop:gap-[7.25rem]
          largeDesktop:gap-[9.063rem]
          ">
            <p className="
             font-medium
             text-PrimaryWhite
             sLaptop:text-[0.99375rem]
             mLaptop:text-[1.2375rem]
             desktop:text-[1.5rem]
             largeDesktop:text-[1.875rem]
            ">Select Filters</p>
            <img 
            onClick={()=> setOpenFilter(false)}
            className="
            cursor-pointer
            sLaptop:w-[.89rem]
            mLaptop:w-[1.1rem]
            desktop:w-[1.34rem]
            largeDesktop:w-[1.679rem]
            " src={closeBrowserIcon} alt="" />
          </div>
      </div>
  )
})

export default index