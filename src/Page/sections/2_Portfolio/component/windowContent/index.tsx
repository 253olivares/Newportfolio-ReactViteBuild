import { memo } from "react"
import Result from '../results';
import FilterSection from '../filterSection';
import FilterList from '../filterList';
import Loading from '../../../loading';
import { useAppSelector } from "../../../../../store/hook";
import { getOpenFilter, getProjectError, getProjectStatus } from "../../../../../store/projectSlice";
import { AnimatePresence } from "framer-motion";

const index = memo(() => {

  const openFilter = useAppSelector(getOpenFilter);

  const status = useAppSelector(getProjectStatus);
  const error = useAppSelector(getProjectError);

  let content

  if (status === 'failed') {
    console.log(error);
    content = <div
    className="
    flex justify-center items-center
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
    <div className="w-full h-full bg-PrimaryWhite
      sLaptop:min-h-[26.667rem]
      mLaptop:min-h-[33.333rem]
      desktop:min-h-[40rem]
      largeDesktop:min-h-[50rem]
      sLaptop:rounded-[.66rem]
      mLaptop:rounded-[.83rem]
      desktop:rounded-[1rem]
      largeDesktop:rounded-[1.25rem]
      overflow-hidden
      overflowFix
      relative
      ">
        <AnimatePresence>
          {
            openFilter &&  <FilterList />
          }
        </AnimatePresence>
        <div className="w-full
         sLaptop:min-h-[26.667rem]
         mLaptop:min-h-[33.333rem]
         desktop:min-h-[40rem]
         largeDesktop:min-h-[50rem]
        relative
        flex flex-col
        sLaptop:pt-[0.8rem]
        mLaptop:pt-[1rem]
        desktop:pt-[1.2rem]
        largeDesktop:pt-[1.5rem]
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
           <hr className="w-fill
            sLaptop:mt-[.36464rem]
            mLaptop:mt-[.454rem]  
            desktop:mt-[0.5504rem]
            largeDesktop:mt-[0.688rem]
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