import { memo } from "react"
import Result from '../results';
import FilterSection from '../filterSection';
import FilterList from '../filterList';
import Loading from '../../../loading/Loading';
import { useAppSelector } from "../../../../../store/hook";
import { getOpenFilter, getProjectError, getProjectStatus, getTabSelect } from "../../../../../store/projectSlice";
import { AnimatePresence } from "framer-motion";

const index = memo(() => {

  const openFilter = useAppSelector(getOpenFilter);

  const selected = useAppSelector(getTabSelect);
  const status = useAppSelector(getProjectStatus);
  const error = useAppSelector(getProjectError);

  let content

  if (status === 'failed') {
    console.log(error);
    content = <div
    className="
    flex 
    justify-center 
    items-center
    sLaptop:mt-[10.6rem]
    mLaptop:mt-[13.2rem]
    desktop:mt-[16rem]
    largeDesktop:mt-[20rem]
    sLaptop:text-[.9875rem]
    mLaptop:text-[1.475rem]
    desktop:text-[2rem]
    largeDesktop:text-[2.75rem]
    font-semibold
    text-SidebarGray
    "
    >
      data fetching failed
    </div>
  } else  if ( status === 'loading') {
    content = <div
    className="
    flex justify-center items-center
    sLaptop:mt-[10.6rem]
    mLaptop:mt-[13.2rem]
    desktop:mt-[16rem]
    largeDesktop:mt-[20rem]
    "
    >
      <Loading color="bg-SidebarGray" />
    </div>
  } else if ( status === 'succeeded') {
    content = <Result />
  }
  

  return (
    <div className={`
      w-full 
   
      sLaptop:block
      bg-PrimaryWhite
      
      h-[27.099rem]
      mobile:h-[36.132rem]
      sMobile:h-[57.812rem]
      mMobile:h-[69.375rem]

      sLaptop:h-auto
      sLaptop:min-h-[26.667rem]
      mLaptop:min-h-[33.333rem]
      desktop:min-h-[40rem]
      largeDesktop:min-h-[50rem]

      ${
        selected === 'Programming' && `  
        rounded-r-[0.244rem]
        mobile:rounded-r-[0.326rem]
        sMobile:rounded-r-[0.521rem]
        mMobile:rounded-r-[0.625rem]
        rounded-bl-[0.244rem]
        mobile:rounded-bl-[0.326rem]
        sMobile:rounded-bl-[0.521rem]
        mMobile:rounded-bl-[0.625rem]
        `
      }
      ${
        selected === 'Art' && `
        rounded-[0.244rem]
        mobile:rounded-[0.326rem]
        sMobile:rounded-[0.521rem]
        mMobile:rounded-[0.625rem]
        `
      }
      ${
        selected === 'UI / UX' && `
        rounded-l-[0.244rem]
        mobile:rounded-l-[0.326rem]
        sMobile:rounded-l-[0.521rem]
        mMobile:rounded-l-[0.625rem]
        rounded-br-[0.244rem]
        mobile:rounded-br-[0.326rem]
        sMobile:rounded-br-[0.521rem]
        mMobile:rounded-br-[0.625rem]

        `
      }
      sLaptop:rounded-[.66rem]
      mLaptop:rounded-[.83rem]
      desktop:rounded-[1rem]
      largeDesktop:rounded-[1.25rem]
      overflow-hidden
      overflowFix
      relative
    `}>
        <AnimatePresence>
          {
            openFilter &&  <FilterList />
          }
        </AnimatePresence>
        <div className="
        w-full
        h-full
        sLaptop:h-auto
        sLaptop:min-h-[26.667rem]
        mLaptop:min-h-[33.333rem]
        desktop:min-h-[40rem]
        largeDesktop:min-h-[50rem]
        relative
        flex-col
        sLaptop:pt-[0.8rem]
        mLaptop:pt-[1rem]
        desktop:pt-[1.2rem]
        largeDesktop:pt-[1.5rem]
        pb-[0.488rem]
        mobile:pb-[0.651rem]
        sMobile:pb-[1.041rem]
        mMobile:pb-[1.25rem]
        sLaptop:pb-[0.356rem]
        mLaptop:pb-[0.445rem]
        desktop:pb-[0.534rem]
        largeDesktop:pb-[0.625rem]
        sLaptop:px-[1.667rem]
        mLaptop:px-[2.083rem]
        desktop:px-[2.5rem]
        largeDesktop:px-[3.125rems]">
          {/* filter section */}
           <FilterSection />
           <hr className="
            w-fill
            mx-[2.21%]
            mt-[0.493rem]
            mobile:mt-[0.657rem]
            sMobile:mt-[1.051rem]
            mMobile:mt-[1.261rem]
            sLaptop:mt-[.36464rem]
            mLaptop:mt-[.454rem]  
            desktop:mt-[0.5504rem]
            largeDesktop:mt-[0.688rem]
            h-[0.116rems]
            mobile:h-[0.154rem]
            sMobile:h-[0.247rem]
            mMobile:h-[0.297rem]
            sLaptop:h-[0.167rem]
            mLaptop:h-[0.208rem]
            desktop:h-[0.25rem]
            largeDesktop:h-[0.313rem]
            rounded-full      
            bg-GlassLighterBackground
            relative
           " />
           {/* results */}
          {content}
        </div>
      </div>
  )
})

export default index