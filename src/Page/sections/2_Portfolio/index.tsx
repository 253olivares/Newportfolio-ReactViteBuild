import { memo, useContext } from "react";
import { AppContext } from "../../contextSidebarAPI";
import MockBrowser from './component/mockBrowser'
import { PortfolioProvider } from "./mockBrowserContext";

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;

  return (
    <div ref={el => {
      if(el) pageRef.current[2] = el
    }} id="Portfolio" className={` bg-SiteGreen w-full`}>
      <div className="
      w-full
      flex flex-col
      sLaptop:pl-[3.333rem]
      mLaptop:pl-[4.167rem]
      desktop:pl-[5rem]
      largeDesktop:pl-[6.25rem]
      sLaptop:pt-[2.667rem]
      mLaptop:pt-[3.334rem]
      desktop:pt-[4em]
      largeDesktop:pt-[5rem]
      min-h-[500px]
      ">
        <div className="w-fill 
        flex flex-col 
        sLaptop:gap-[1.667rem]
        mLaptop:gap-[2.083rem]
        desktop:gap-[2.5rem]
        largeDesktop:gap-[3.105rem] 
        px-[3.6%] extra:px-0 extra:mx-auto extra:max-w-[1920px]
        sLaptop:pb-[3.089rem]
        mLaptop:pb-[3.862rem]
        desktop:pb-[4.625rem]
        largeDesktop:pb-[6.813rem]
        ">
          <h1 className="
          extra:w-[1920px]
          sectionCSS
          ">PORTFOLIO</h1>
          <PortfolioProvider>
            <MockBrowser />
          </PortfolioProvider>
        </div>
      </div>
    </div>
  )
})

export default index