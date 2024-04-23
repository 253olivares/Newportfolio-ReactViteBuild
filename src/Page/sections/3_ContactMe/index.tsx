import { useContext, memo } from "react";
import { AppContext } from "../../contextAPI";
import Footer from '../../footer'
import Form from './component/contactForm'
import downloadSVG from '/assets/downloadResume.svg'

const index = memo(() => {

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const {pageRef} = appContext;

  return (
   <div ref={el => {
      if(el) pageRef.current[3] = el
    }} id="ContactMe" className={`bg-SiteGreen w-full`}>
      <div className="
        w-full
        sLaptop:pl-[3.333rem]
        mLaptop:pl-[4.167rem]
        desktop:pl-[5rem]
        largeDesktop:pl-[6.25rem]
        sLaptop:pt-[1.667rem]
        mLaptop:pt-[2.083rem]
        desktop:pt-[2.5rem]
        largeDesktop:pt-[3.125rem]
        sLaptop:pb-[7.791rem]
        mLaptop:pb-[9.754rem]
        desktop:pb-[11.655rem]
        largeDesktop:pb-[14.6rem]
        ">
          <div className="
          w-full pl-[3.6%] extra:pl-0 extra:max-w-[1920px] extra:mx-auto
          ">
            <h1 className="sectionCSS">CONTACT ME</h1>
          </div>
          <div className="
          w-full 
          flex flex-row justify-between 
          gap-[4.75%]
          sLaptop:mt-[1.667rem]
          mLaptop:mt-[2.083rem]
          desktop:mt-[2.5rem]
          largeDesktop:mt-[3.125rem]
          ">
            <div className="w-auto 
            flex flex-grow 
            justify-end 
            ">
              <Form/>
            </div>
            <div className="
            w-[48%] 
            flex items-center
            sLaptop:px-[5rem]
            mLaptop:px-[6.25rem]
            desktop:px-[7.5rem]
            largeDesktop:px-[9.375rem]
            sLaptop:mt-[1.421rem] mLaptop:mt-[1.792rem] desktop:mt-[2.163rem] largeDesktop:mt-[2.688rem]
            sLaptop:contactDivShadowSmall mLaptop:contactDivShadowMedium desktop:contactDivShadowDesktop largeDesktop:contactDivShadowLarge
            sLaptop:rounded-l-[0.54rem] mLaptop:rounded-l-[0.675rem] desktop:rounded-l-[0.81rem] largeDesktop:rounded-l-[1.013rem]
            sLaptop:h-[26.033rem] mLaptop:h-[32.542rem] desktop:h-[39.05rem] largeDesktop:h-[48.813rem] 
            bg-SiteYellow">
              <img className="
              sLaptop:w-[18.72rem]
              mLaptop:w-[23.4rem]
              desktop:w-[28.08rem]
              largeDesktop:w-[35.1rem]
              hover:cursor-pointer
              hover:opacity-75
              " src={downloadSVG} alt="" />
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
})

export default index