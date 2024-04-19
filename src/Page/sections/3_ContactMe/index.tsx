import { useContext } from "react";
import { AppContext } from "../../contextAPI";
import Footer from '../../footer'

const index = () => {

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
        ">
        <div className="
        w-full 
        flex 
        justify-between 
        extra:max-w-[1920px]
        extra:mx-auto
        min-h-[500px]">
          <div className="flex flex-col pl-[3.6%] extra:pl-0">
            <h1 className="
            sectionCSS
            ">CONTACT ME</h1>
            <div></div>
            <div></div>
          </div>
          <div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index