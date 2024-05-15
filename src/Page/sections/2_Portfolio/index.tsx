import { AppContext } from "../../contextRefs";
import { memo, useContext } from "react";

import MockBrowser from './component/mockBrowser';

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;

  return (
    <div ref={el => {
      if(el) pageRef.current['Portfolio'] = el
    }} id="Portfolio" className={`
    block 
    bg-SiteGreen
    w-full`}>
      <div className="

      w-full
      flex flex-col
      sLaptop:pl-[3.333rem]
      mLaptop:pl-[4.167rem]
      desktop:pl-[5rem]
      largeDesktop:pl-[6.25rem]

      pt-[1.466rem]
      mobile:pt-[1.952rem]
      sMobile:pt-[3.126rem]
      mMobile:pt-[3.75rem]
      sLaptop:pt-[2.399rem]
      mLaptop:pt-[2.999rem]
      desktop:pt-[3.6em]
      largeDesktop:pt-[4.5rem]

      pb-[0.830rem]
      mobile:pb-[1.106rem]
      sMobile:pb-[1.770rem]
      mMobile:pb-[2.125rem]
      ">
        <div className="w-fill 
        flex flex-col 

        sLaptop:gap-[1.667rem]
        mLaptop:gap-[2.083rem]
        desktop:gap-[2.5rem]
        largeDesktop:gap-[3.105rem] 

        sLaptop:px-[3.6%] 

        extra:px-0 extra:mx-auto extra:max-w-[1920px]
        sLaptop:pb-[1.813rem]
        mLaptop:pb-[2.266rem]
        desktop:pb-[2.72rem]
        largeDesktop:pb-[3.4rem]
        
        ">
          <h1
          data-aos='fade'
          data-aos-duration='1250'
          data-aos-delay='300'
          className="
          px-[6.51%]
          sLaptop:px-0
          sLaptop:w-full
          extra:w-[1920px]
          sectionCSS
          ">PORTFOLIO</h1>
        
          <MockBrowser />
        </div>
      </div>
    </div>
  )
})

export default index