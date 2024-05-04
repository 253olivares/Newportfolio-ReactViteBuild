import { memo, useEffect, useState } from "react";
import searchIcon from '/assets/searchButton.svg';
import searchIconGreen from '/assets/searchButtonGreen.svg'
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import { getTabSelect, setSearchTerm } from "../../../../../store/projectSlice"
import { resetFilter } from "../../../../../store/projectSlice";

const index = memo(() => {

  const dispatch = useAppDispatch();

  const [inputvalue, setInputValue] = useState<string>('');

  const tabSelect = useAppSelector(getTabSelect);

  useEffect(()=> {
    setInputValue('');
    dispatch(setSearchTerm(''));
    ()=>{

    }
  },[tabSelect])

  return (        
    <form onSubmit={(e)=> {
      e.preventDefault();
      dispatch(setSearchTerm(inputvalue.trim()))
    }}>
      <div className="
      flex 
      mt-[0.488rem]
      mobile:mt-[0.651rem]
      sMobile:mt-[1.042rem]
      mMobile:mt-[1.25rem]
      sLaptop:mt-0
      sLaptop:gap-[1.333rem]
      mLaptop:gap-[1.667rem]
      desktop:gap-[2rem]
      largeDesktop:gap-[2.5rem]
      items-center
      ">
        <label className="
        hidden
        sLaptop:block
        sLaptop:text-[1rem]
        mLaptop:text-[1.25rem]
        desktop:text-[1.5rem]
        largeDesktop:text-[1.875rem]
        font-medium
        text-SidebarGray
        " htmlFor="Search">
          Search:
        </label>
        <div className="
        flex 
        flex-row-reverse
        sLaptop:flex-row
        items-center
        w-full
        mx-[2.21%]
        sLaptop:px-0

        bg-GlassLighterBackground

        h-[1.708rem]
        mobile:h-[2.278rem]
        sMobile:h-[3.645rem]
        mMobile:h-[4.375rem]
        sLaptop:h-[1.667rem]
        mLaptop:h-[2.083rem]  
        desktop:h-[2.5rem]
        largeDesktop:h-[3.125rem]
        rounded-full
        sLaptop:rounded-[.265rem]
        mLaptop:rounded-[.33rem]
        desktop:rounded-[.4rem]
        largeDesktop:rounded-[0.5rem]
        focus-within:ring-[2.734px]
        mobile:focus-within:ring-[3.645px]
        sMobile:focus-within:ring-[5.833px]
        mMobile:focus-within:ring-[7px]
        sLaptop:focus-within:ring-[2.132px]
        mLaptop:focus-within:ring-[2.64px]
        desktop:focus-within:ring-[3.2px]
        largeDesktop:focus-within:ring-[4px]
        focus-within:ring-SelectBlue
        ">
            <input 
            id="Search"
            value={inputvalue}
            onChange={(e)=>{
              setInputValue(e.target.value)
              if (e.target.value === ''){
                dispatch(setSearchTerm(''))
              }
            }}
            className="
            text-[0.976rem]
            mobile:text-[1.302rem]
            sMobile:text-[2.083rem]
            mMobile:text-[2.5rem]
            font-medium
            sLaptop:font-normal
            sLaptop:text-[1rem]
            mLaptop:text-[1.25rem]
            desktop:text-[1.5rem]
            largeDesktop:text-[1.875rem]
            w-full
            sLaptop:w-[9.9375rem]
            mLaptop:w-[12.375rem]
            desktop:w-[15rem]
            largeDesktop:w-[18.75rem]
            px-[3%]
            sLaptop:px-[.6296rem]
            mLaptop:px-[.7840rem]
            desktop:px-[0.9504rem]
            largeDesktop:px-[1.188rem]
            sLaptop:rounded-l-[.265rem]
            mLaptop:rounded-l-[.33rem]
            desktop:rounded-l-[.4rem]
            largeDesktop:rounded-l-[0.5rem]
            bg-transparent
            sLaptop:bg-GlassLighterBackground
            text-SidebarGray
            h-full
            focus:bg-transparent
            
            focus:sLaptop:bg-GlassLighterBackgroundSelect
            focus:outline-none
            "
            type="text" />

            <img 
            className="
            block
            sLaptop:hidden
            h-[80%]
            ml-[3%]
            "
            src={searchIconGreen} alt="searchIconGreen" />

            <button
            type="submit"
            className="
            hidden
            sLaptop:block
            px-0
            sLaptop:px-[.6296rem]
            mLaptop:px-[.7840rem]
            desktop:px-[0.9504rem]
            largeDesktop:px-[1.188rem]
            bg-transparent
            sLaptop:bg-SiteDarkGreen
            sLaptop:rounded-r-[.265rem]
            mLaptop:rounded-r-[.33rem]
            desktop:rounded-r-[.4rem]
            largeDesktop:rounded-r-[0.5rem]
            sLaptop:hover:opacity-75
            h-full
            ">
              <img 
              className="
              max-w-none
              sLaptop:w-[1.033rem]
              mLaptop:w-[1.292rem]
              desktop:w-[1.55rem]
              largeDesktop:w-[1.938rem]
              "
              src={searchIcon} alt="SearchIcon" />
            </button>
        </div>
        <p
        onClick={()=> {
          setInputValue('');
          dispatch(resetFilter());
        }}
        className="
        hidden
        sLaptop:block
        font-semibold
        text-SidebarGray

        sLaptop:text-[1rem]
        mLaptop:text-[1.25rem]
        desktop:text-[1.5rem]
        largeDesktop:text-[1.875rem]
        underline
        hover:cursor-pointer
        hover:opacity-75
        active:opacity-50
        ">clear</p>
      </div>
    </form>
  )
})

export default index