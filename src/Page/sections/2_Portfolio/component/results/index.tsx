import { filterProjects} from "../../../../../store/projectSlice";
import { useAppSelector } from "../../../../../store/hook";
import { AnimatePresence } from "framer-motion";
import { Fragment, memo} from "react"

import ProjectListing from '../projectItems';

const index = memo(() => {

  // const live = useAppSelector(getLiveDemo);
  // const tab = useAppSelector(getTabSelect);
  // const search = useAppSelector(getSearchTerm);
  // const filters = useAppSelector(getSelectFiler);
  // const res  = useAppSelector(getResponsive);
  // console.log(live,tab,search,filters,res);

  // const content = useMemo(()=> useAppSelector((state)=>filterProjects(state,{
    // searchTerm:search,
    // tabSelect:tab,
    // liveDemos:live,
    // selectedFilter:filters,
    // responsive:res
  // })),[live,tab,search,filters,res])

  // const content = useAppSelector((state)=> filterProjects(state,{
  //   searchTerm:search,
  //   tabSelect:tab,
  //   liveDemos:live,
  //   selectedFilter:filters,
  //   responsive:res
  // }));

  // const content2 = useCallback(()=> useAppSelector((state)=>filterProjects(state,{
  //   searchTerm:search,
  //   tabSelect:tab,
  //   liveDemos:live,
  //   selectedFilter:filters,
  //   responsive:res
  // })),[live,tab,search,filters,res])

  // const content = content2();
  
  const content = useAppSelector(filterProjects);

  const emptySpaceTemplate:JSX.Element =  <div className="
  emptySpaceTemplate 
  " />;

  let space;
  let array

  switch(content.length){
    case 1:
      array = Array(3).fill(null);
      space = array.map((_,index)=> <Fragment key={index}>{emptySpaceTemplate}</Fragment>);
      break;
    case 2: 
      array = Array(2).fill(null);
      space = array.map((_,index)=> <Fragment key={index}>{emptySpaceTemplate}</Fragment>);
      break;
    case 3:
      array = Array(1).fill(null);
      space = array.map((_,index)=> <Fragment key={index}>{emptySpaceTemplate}</Fragment>);
      break;
    default:
      break;
  }

  return (
    content.length === 0 ? 
    <p className="
     w-full
     flex-grow

     text-[1.171rem]
     mobile:text-[1.562rem]
     sMobile:text-[2.499rem]
     mMobile:text-[3rem]
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
    // ${content.length<=3 ? `
    // overscroll-contain
    // `: `
    // overflow-y-scroll
    <div className={`
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
        space
      }
    </div>
  )
})

export default index