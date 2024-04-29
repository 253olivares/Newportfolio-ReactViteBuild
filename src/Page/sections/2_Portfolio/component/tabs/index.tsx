import { Fragment, memo, useContext } from "react"
import { BrowserAppContext } from "../../mockBrowserContext";
import { windowResize } from "./hooks";
import { useAppDispatch, useAppSelector } from "../../../../../store/hook";
import { getTabSelect, setTabSelect } from "../../../../../store/projectSlice";

const index = memo(() => {

  const dispatch = useAppDispatch()

  const tabSelect = useAppSelector(getTabSelect);

  // hook that runs code when window resizes
  // intented to make sure that our select tab is keep track in the correct space
  windowResize();

  const appContext = useContext(BrowserAppContext);
  const { tabRef, backgroundSelectRef} = appContext!;

  const tabs:["Programming", "Art", "UI / UX"] = ["Programming", "Art", "UI / UX"]

  const changeSelectTab = (x:"Programming"| "Art" |"UI / UX", index:number) => {
    
    dispatch(setTabSelect(x))

    const tabOffset = tabRef.current[index].offsetLeft;
    backgroundSelectRef.current!.style.left = `${tabOffset}px`;
  }

  return (
    <div className="flex 
    flex-row 
    sLaptop:gap-[0.165rem]
    mLaptop:gap-[.20658rem]
    desktop:gap-[.25rem]
    largeDesktop:gap-[0.313rem]
    relative
    sLaptop:pt-[0.313rem]
    sLaptop:pb-[0.5rem]
    mLaptop:pb-[0.625rem]
    desktop:pb-[0.75rem]
    largeDesktop:pb-[0.938rem]
    sLaptop:pl-[1.333rem]
    mLaptop:pl-[1.666rem]
    desktop:pl-[2rem]
    largeDesktop:pl-[3.125rem]
    ">
    <div ref={backgroundSelectRef} className="mockBrowserSelected">

    </div>
    {
      tabs.map((x,index)=> 
      <Fragment key={index} >
        <p
        ref={el => tabRef.current[index] = el!}
        className={`
        relative
        z-[5]
        leading-none 
        flex 
        flex-row
        justify-between
        items-center
        sLaptop:rounded-[.26rem]
        mLaptop:rounded-[.33rem]
        desktop:rounded-[.4rem]
        largeDesktop:rounded-[0.5rem]
        ${x=== tabSelect ? ` text-SidebarGray` : `text-PrimaryWhite 
        hover:bg-GlassBackground 
        hover:cursor-pointer`}
        font-medium
        sLaptop:w-[8.9rem]
        mLaptop:w-[11.125rem]
        desktop:w-[13.35rem]
        largeDesktop:w-[16.688rem]
        sLaptop:px-[0.833rem]
        mLaptop:px-[1.042rem]
        desktop:px-[1.25rem]
        largeDesktop:px-[1.563rem]
        sLaptop:text-[1rem]
        mLaptop:text-[1.25rem]
        desktop:text-[1.5rem]
        largeDesktop:text-[1.875rem]
        sLaptop:py-[0.288rem]
        mLaptop:py-[0.375rem]
        desktop:py-[0.463rem]
        largeDesktop:py-[0.625rem]
        `}
        onClick={()=>changeSelectTab(x, index)}
        >
            {x}
            <img 
            className={`
            sLaptop:w-[0.667rem]
            mLaptop:w-[0.833rem]
            desktop:w-[1rem]
            largeDesktop:w-[1.5rem]
            hover:opacity-75
            `}
            src={`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/browser_closeButton${x === tabSelect ? 'Select': ''}.svg`} alt="tab_Close" />
        </p>
        {
            index<2 && <div 
            className={`
            ${tabSelect === "Art" ? 'bg-transparent': 'bg-PrimaryWhite'}
            ${tabSelect === "Programming" && index === 0 ? 'bg-transparent': 'bg-PrimaryWhite'}
            ${tabSelect === "UI / UX" && index === 1 ? 'bg-transparent': 'bg-PrimaryWhite'}
            h-full 
            block
            sLaptop:w-[.125rem]
            mLaptop:w-[.165rem]
            desktop:w-[.20rem]
            largeDesktop:w-[0.25rem] 
            rounded-full
            `} />
        }
      </Fragment>
      )
    }
  </div>
  )
})

export default index