import { useContext, memo } from "react";
import { AppContext } from "../../sidebar/contextSidebarAPI";
import Footer from '../../footer'
import Form from './component/contactForm'
import DownloadPDF from './component/downloadResume';

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;

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
            <h1 data-aos='fade'
            data-aos-duration='1250'
            data-aos-delay='0'
            className="sectionCSS">CONTACT ME</h1>
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
            <DownloadPDF />
          </div>
      </div>
      <Footer />
    </div>
  )
})

export default index