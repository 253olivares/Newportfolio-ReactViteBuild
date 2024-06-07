import { memo } from "react"
import Result from '../results';
import FilterSection from '../filterSection';
import FilterList from '../filterList';
import Loading from '../../../loading';
import { useAppSelector } from "../../../../../store/hook";
import { getOpenFilter, getProjectError, getProjectStatus, getTabSelect } from "../../../../../store/projectSlice";
import { AnimatePresence } from "framer-motion";

const index = memo(() => {
  // this is

  const openFilter = useAppSelector(getOpenFilter);

  const selected = useAppSelector(getTabSelect);
  const status = useAppSelector(getProjectStatus);
  const error = useAppSelector(getProjectError);

  let content

  if (status === 'failed') {

    content = <div
    className="
    flex 
    justify-center 
    items-center

    flex-grow

    sLaptop:mt-[10.6rem]
    mLaptop:mt-[13.2rem]
    desktop:mt-[16rem]
    largeDesktop:mt-[20rem]

    text-[1.171rem]
    mobile:text-[1.562rem]
    sMobile:text-[2.499rem]
    mMobile:text-[3rem]
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
    flex 
    justify-center 
    items-center
    flex-grow
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
      relative

      w-full 
      bg-PrimaryWhite
      
      h-[29.296rem]
      mobile:h-[39.062rem]
      sMobile:h-[62.499rem]
      mMobile:h-[75rem]
      sLaptop:h-[25.333rem]
      mLaptop:h-[31.666rem]
      desktop:h-[38rem]
      largeDesktop:h-[47.5rem]
      4k:h-[60rem]

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
      largeDesktop:px-[3.125rems]
      
      pt-0
      sLaptop:pt-[0.719rem]
      mLaptop:pt-[0.899rem]
      desktop:pt-[1.08rem]
      largeDesktop:pt-[1.35rem]

      flex
      flex-col
      
      overflow-hidden
      overflowFix

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
    `}>
        <AnimatePresence>
          {
            openFilter &&  <FilterList />
          }
        </AnimatePresence>
        <div className="
        relative
        flex-col
        flex-shrink-0
        flex-grow-0
        w-full
        ">
          {/* filter section */}
           <FilterSection />
           <hr className="
            relative

            w-fill
            rounded-full  
            bg-GlassLighterBackground

            mx-[2.21%] 
            sLaptop:mx-0

            mt-[0.493rem]
            mobile:mt-[0.657rem]
            sMobile:mt-[1.051rem]
            mMobile:mt-[1.261rem]
            sLaptop:mt-[.36464rem]
            mLaptop:mt-[.454rem]  
            desktop:mt-[0.5504rem]
            largeDesktop:mt-[0.688rem]

            h-[0.158rems]
            mobile:h-[0.211rem]
            sMobile:h-[0.338rem]
            mMobile:h-[0.406rem]
            sLaptop:h-[0.167rem]
            mLaptop:h-[0.208rem]
            desktop:h-[0.25rem]
            largeDesktop:h-[0.313rem]
           " />
           {/* results */}
        </div>
        {content}
      </div>
  )
})

export default index