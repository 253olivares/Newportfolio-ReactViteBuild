import { AppContext } from "../../contextRefs";
import { useContext, memo } from "react";

import DownloadPDF from './component/downloadResume';
import Form from './component/contactForm';
import Footer from '../../footer';

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {pageRef, strips, stripsMobile} = appContext!;

  return (
   <div ref={el => {
      if(el) pageRef.current['ContactMe'] = el
    }} id="ContactMe" className={`
    bg-SiteGreen 
    w-full
    pb-[3.223rem]
    mobile:pb-[4.297rem]
    sMobile:pb-[6.8755rem]
    mMobile:pb-[8.25rem]
    sLaptop:pb-0
    `}>
      <div className="
        w-full
        relative
        z-[5]
        sLaptop:pl-[3.333rem]
        mLaptop:pl-[4.167rem]
        desktop:pl-[5rem]
        largeDesktop:pl-[6.25rem]
        pt-[1.466rem]
      mobile:pt-[1.952rem]
      sMobile:pt-[3.126rem]
      mMobile:pt-[3.75rem]
        sLaptop:pt-[1.667rem]
        mLaptop:pt-[2.083rem]
        desktop:pt-[2.5rem]
        largeDesktop:pt-[3.125rem]
        pb-[2.198rem]
        mobile:pb-[2.93rem]
        sMobile:pb-[4.688rem]
        mMobile:pb-[5.625rem]
        sLaptop:pb-[7.791rem]
        mLaptop:pb-[9.754rem]
        desktop:pb-[11.655rem]
        largeDesktop:pb-[14.6rem]
        ">
          <div className="
          w-full 
          px-[6.51%]
          sLaptop:pl-[3.6%] 
          sLaptop:pr-0
          extra:pl-0 extra:max-w-[1920px] extra:mx-auto
          ">
            <h1 data-aos='fade'
            data-aos-duration='1250'
            data-aos-delay='0'
            className="sectionCSS">CONTACT ME</h1>
          </div>
          <div className="
          w-full 
          sLaptop:flex 
          flex-col
          sLaptop:flex-row 
          sLaptop:justify-between 
          mMobile:gap-0
          sLaptop:gap-[4.75%]
          mt-[1.494rem]
          mobile:mt-[2.009rem]
          sMobile:mt-[3.177rem]
          mMobile:mt-[3.813rem]
          sLaptop:mt-[1.667rem]
          mLaptop:mt-[2.083rem]
          desktop:mt-[2.5rem]
          largeDesktop:mt-[3.125rem]
          ">
            <div className="
            w-full
            sLaptop:w-auto 
            flex 
            px-[6.51%]
            sLaptop:px-0
            sLaptop:flex-grow 
            justify-end 
            ">
              <Form/>
            </div>
            <DownloadPDF />
          </div>
      </div>
      <img 
      className="
      absolute bottom-0 left-0
      z-[0]
      sLaptop:hidden
      w-full
      "
      src={stripsMobile} 
      alt="mobile strips" />
      <img className="
       absolute bottom-0 left-0
       z-[0]
       hidden
       sLaptop:w-[57.24rem]
       mLaptop:w-[71.28rem]
       desktop:w-[86.4rem]
       largeDesktop:w-[108rem]
      " src={strips} alt="Stripes_2" />

      <Footer />

    </div>
  )
})

export default index