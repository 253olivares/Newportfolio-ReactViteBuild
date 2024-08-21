import { Fragment, memo, useContext } from "react"
import { AppContext } from "../../../../contextRefs";
import { useAppDispatch, useAppSelector } from "../../../../../store/hook";
import { getTabSelect, setTabSelect } from "../../../../../store/projectSlice";

const index = memo(() => {

  const dispatch = useAppDispatch()

  const tabSelect = useAppSelector(getTabSelect);

  const appContext = useContext(AppContext);
  const { tabRef, backgroundSelectRef} = appContext!;

  const tabs:["Programming",  "UI / UX"] = ["Programming",  "UI / UX"]

  const changeSelectTab = (x:"Programming"| "Art" |"UI / UX", index:number) => {
    
    dispatch(setTabSelect(x))

    const tabOffset = tabRef.current[index].offsetLeft;
    backgroundSelectRef.current!.style.left = `${tabOffset}px`;
  }

  return (
    <div className="
    flex 
    flex-row 
    w-full
    relative
  
    overflow-clip

    items-center

    justify-between
    sLaptop:justify-normal

    sLaptop:gap-[0.165rem]
    mLaptop:gap-[.20658rem]
    desktop:gap-[.25rem]
    largeDesktop:gap-[0.313rem]

    sLaptop:pt-[0.313rem]
    sLaptop:pb-[0.450rem]
    mLaptop:pb-[0.562rem]
    desktop:pb-[0.675rem]
    largeDesktop:pb-[0.844rem]

    sLaptop:pl-[1.333rem]
    mLaptop:pl-[1.666rem]
    desktop:pl-[2rem]
    largeDesktop:pl-[3.125rem]
    ">
    <div ref={backgroundSelectRef} className="
  
    mockBrowserSelected
    ">

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
        justify-center
        sLaptop:justify-between
        items-center

        sLaptop:rounded-[.26rem]
        mLaptop:rounded-[.33rem]
        desktop:rounded-[.4rem]
        largeDesktop:rounded-[0.5rem]
        ${x=== tabSelect ? `
        transition-none text-SidebarGray
        ` : `
        transition-[background-color]
        duration-500
        text-PrimaryWhite 
        sLaptop:hover:bg-GlassBackground 
        sLaptop:hover:cursor-pointer
        `}

        font-bold
        sLaptop:font-medium

        w-[calc(100%/3-(0.126rem*2))]
        mobile:w-[calc(100%/3-(0.169rem*2))]
        sMobile:w-[calc(100%/3-(0.270rem*2))]
        mMobile:w-[calc(100%/3-(.325rem*2))]
        sLaptop:w-[8.9rem]
        mLaptop:w-[11.125rem]
        desktop:w-[13.35rem]
        largeDesktop:w-[16.688rem]

        px-[0.292rem]
        mobile:px-[0.390rem]
        sMobile:px-[0.624rem]
        mMobile:px-[0.75rem]
        sLaptop:px-[0.833rem]
        mLaptop:px-[1.042rem]
        desktop:px-[1.25rem]
        largeDesktop:px-[1.563rem]

        text-[0.696rem]
        mobile:text-[0.928rem]
        sMobile:text-[1.484rem]
        mMobile:text-[1.781rem]
        sLaptop:text-[0.899rem]
        mLaptop:text-[1.124rem]
        desktop:text-[1.349rem]
        largeDesktop:text-[1.687rem]

        py-[0.664rem]
        mobile:py-[0.885rem]
        sMobile:py-[1.416rem]
        mMobile:py-[1.7rem]
        sLaptop:py-[0.299rem]
        mLaptop:py-[0.374rem]
        desktop:py-[0.449rem]
        largeDesktop:py-[0.562rem]
        `}
        onClick={()=>changeSelectTab(x, index)}
        >
            {x}
            <img 
            className={`
            hidden
            sLaptop:block
            w-[0.488rem]
            mobile:w-[0.651rem]
            sMobile:w-[1.042rem]
            mMobile:w-[1.25rem]
            sLaptop:w-[0.667rem]
            mLaptop:w-[0.833rem]
            desktop:w-[1rem]
            largeDesktop:w-[1.5rem]
            hover:opacity-75
            `}
            src={`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/browser_closeButton${x === tabSelect ? 'Select': ''}.svg`} alt="tab_Close" />
        </p>
        {/* {
            index < 2 
            && 
            <div 
            className={`
            ${tabSelect === "Art" ? 'bg-transparent': 'bg-PrimaryWhite'}
            ${tabSelect === "Programming" && index === 0 ? 'bg-transparent': 'bg-PrimaryWhite'}
            ${tabSelect === "UI / UX" && index === 1 ? 'bg-transparent': 'bg-PrimaryWhite'}
            h-[1.269rem]
            mobile:h-[1.692rem]
            sMobile:h-[2.708rem]
            mMobile:h-[3.25rem]
            sLaptop:h-full
            w-[0.126rem]
            mobile:w-[0.169rem]
            sMobile:w-[0.270rem]
            mMobile:w-[.325rem]
            sLaptop:w-[.125rem]
            mLaptop:w-[.165rem]
            desktop:w-[.20rem]
            largeDesktop:w-[0.25rem] 
            rounded-full
            `} />
        } */}
      </Fragment>
      )
    }
  </div>
  )
})

export default index