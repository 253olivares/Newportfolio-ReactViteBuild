import { Fragment, memo} from "react"
import { useAppSelector } from "../../../../../store/hook";
import { filterProjects } from "../../../../../store/projectSlice";
import ProjectListing from '../projectItems';
import { AnimatePresence } from "framer-motion";

const index = memo(() => {

  const content = useAppSelector(filterProjects);

  console.log(content);

  return (
    <div className={`
    justify-evenly
    pr-[2rem]
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
        content.length<3 ?
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