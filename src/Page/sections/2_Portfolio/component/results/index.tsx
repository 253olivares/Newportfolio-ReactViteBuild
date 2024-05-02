import { filterProjects } from "../../../../../store/projectSlice";
import { useAppSelector } from "../../../../../store/hook";
import { AnimatePresence } from "framer-motion";
import { Fragment, memo} from "react"

import ProjectListing from '../projectItems';

const index = memo(() => {

  const content = useAppSelector(filterProjects);

  return (
    content.length === 0 ? 
    <p className="
     w-full
     sLaptop:text-[1.9875rem]
     mLaptop:text-[2.475rem]
     desktop:text-[3rem]
     largeDesktop:text-6xl   
     leading-none
     font-semibold
     sLaptop:h-[23.467rem]
     mLaptop:h-[29.333rem]
     desktop:h-[35.2rem]
     largeDesktop:h-[44rem]
     flex items-center
     justify-center
    ">
      No results found!
    </p>
    :
    <div className={`
    justify-evenly
    pr-[2rem]
    ${content.length<=3 ?   `
    overscroll-contain
    `: `
    overflow-y-scroll
    overflowFix
    `}
    projectFlexDiv
    `}>
      <AnimatePresence>
        {
          content.map((item, index)=> 
            <ProjectListing key={index} project={item} />
          )
        }
      </AnimatePresence>
      {
        content.length<=3 ?
        <Fragment>
          <div className="
          block
          sLaptop:w-[11.16339rem]
          mLaptop:w-[13.90158rem]
          desktop:w-[16.8504rem]
          largeDesktop:w-[21.063rem]
          sLaptop:h-[12.62089rem]
          mLaptop:h-[15.71658rem]
          desktop:h-[19.0504rem]
          largeDesktop:h-[23.813rem]
          " />
          <div className="
          block
          sLaptop:w-[11.16339rem]
          mLaptop:w-[13.90158rem]
          desktop:w-[16.8504rem]
          largeDesktop:w-[21.063rem]
          sLaptop:h-[12.62089rem]
          mLaptop:h-[15.71658rem]
          desktop:h-[19.0504rem]
          largeDesktop:h-[23.813rem]
          " />
        </Fragment>
        :
        ''
      }
    </div>
  )
})

export default index