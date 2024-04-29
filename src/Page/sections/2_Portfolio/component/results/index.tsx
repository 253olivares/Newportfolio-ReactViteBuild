import { memo} from "react"
import { useAppSelector } from "../../../../../store/hook";
import { filterProjects } from "../../../../../store/projectSlice";
import ProjectListing from '../projectItems';

const index = memo(() => {

  const content = useAppSelector(filterProjects);

  console.log(content);

  return (
    <div className={`
    projectFlexDiv
    `}>
        {
          content.map((item, index)=> 
            <ProjectListing key={index} project={item} />
          )
        }
    </div>
  )
})

export default index