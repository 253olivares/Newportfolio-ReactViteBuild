import { memo, useContext, useEffect } from "react";
import closeBrowserIcon from '/assets/browser_closeButton.svg';
import FilterItems from '../individualFilters'
import { useAppDispatch } from "../../../../../store/hook";
import { closeFilter } from "../../../../../store/projectSlice";
import {  motion } from "framer-motion";
import { AppContext } from "../../../../contextRefs";

const index = memo(() => {
    const dispatch = useAppDispatch();

    const appContext = useContext(AppContext);
    const {filterListRef, labels} = appContext!;

    useEffect(()=> {
      const clickOnOutside = (e:MouseEvent | TouchEvent)=> {
        const element = e.target;
        if (filterListRef.current && !filterListRef.current.contains(element as Node)){
          dispatch(closeFilter());
        }
      }
      window.addEventListener('click',clickOnOutside,true)
      return ()=> {

        window.removeEventListener('click',clickOnOutside,true)
      }
    },[])

  return (
       <motion.div
       key="modal"
       initial={
        { 
        left:"100%",
        right:"auto"
      }}
       animate={{ 
        left:"auto",
        right:"0px" 
      }}
       exit={{ 
        left:"100%",
        right:"auto" 
      }}
       transition={{duration:.15}}
        ref={filterListRef}
        className={`
         flex flex-col

         absolute
        
         sLaptop:top-0

         h-full
         w-full
         
         z-[5]

         sLaptop:w-[12.229rem]
         mLaptop:w-[14.189rem]
         desktop:w-[18.423rem]
         largeDesktop:w-[23.033rem]

         bg-GlassBackground
         backdrop-blur-[0.25rem]  
         `}>
          <div className="
          w-full 
          flex justify-between

          mt-[1.171rem]
          mobile:mt-[1.562rem]
          sMobile:mt-[2.499rem]
          mMobile:mt-[3.125rem]
          sLaptop:mt-[.46rem]
          mLaptop:mt-[.58rem]
          desktop:mt-[.7rem]
          largeDesktop:mt-[0.875rem]

          px-[7.5%]
          sLaptop:px-[.66rem]
          mLaptop:px-[.83rem]
          desktop:px-[1rem]
          largeDesktop:px-[1.25rem]
          ">
            <p className="
             flex-grow-0
             flex-shrink-0

             font-medium
             text-PrimaryWhite

             text-[1.171rem]
             mobile:text-[1.562rem]
             sMobile:text-[2.499rem]
             mMobile:text-[3rem]
             sLaptop:text-[0.99375rem]
             mLaptop:text-[1.2375rem]
             desktop:text-[1.5rem]
             largeDesktop:text-[1.875rem]

            ">Select Filters</p>
            <img 
            onClick={()=> dispatch(closeFilter())}
            className="
            cursor-pointer
            w-[1.308rem]
            mobile:w-[1.744rem]
            sMobile:w-[2.791rem]
            mMobile:w-[3.35rem]
            sLaptop:w-[.89rem]
            mLaptop:w-[1.1rem]
            desktop:w-[1.34rem]
            largeDesktop:w-[1.679rem]
            " src={closeBrowserIcon} alt="" />
          </div>
          <div className="
            flex flex-col
            
            flex-grow

            px-[7.5%]
            sLaptop:px-[1.689rem]
            mLaptop:px-[2.104rem]
            desktop:px-[2.55rem]
            largeDesktop:px-[3.188rem]

            py-[1.171rem]
            mobile:py-[1.562rem]
            sMobile:py-[2.499rem]
            mMobile:py-[3rem]
            sLaptop:py-[1.258rem]
            mLaptop:py-[1.567rem]
            desktop:py-[1.9rem]
            largeDesktop:py-[2.375rem]

            gap-[2.75rem]
            sLaptop:gap-[.894rem]
            mLaptop:gap-[1.11rem]
            desktop:gap-[1.35rem]
            largeDesktop:gap-[1.688rem]

            sLaptop:h-[calc(100%-1.49rem)]
            mLaptop:h-[calc(100%-1.856rem)]
            desktop:h-[calc(100%-2.25rem)]
            largeDesktop:h-[calc(100%-2.813rem)]

            overflow-y-scroll
           
            sLaptop:scrollSection
            relative
          ">
            {
              Object.entries(labels).map(([k,v],index)=> (
                <FilterItems key={index} tag={k} color={v}  />
              ))
            }
          </div>
      </motion.div>
  )
})

export default index