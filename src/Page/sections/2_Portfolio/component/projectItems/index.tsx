import {memo} from 'react';
import { projectStateType } from '../../../../../store/projectSlice';
import {motion} from 'framer-motion';
import ProjectInfo from './component/projectInfo'

const index = memo(({project}:{project:projectStateType}) => {
    const {id,projectName,projectURL, imgURL, date,tags,live} = project;

  return (
    <motion.div 
    key={id} 
    initial={{
      scale:.98,
      opacity:0
    }}
    animate={{
      scale:1,
      opacity:1
    }}
    exit={{
      scale:.98,
      opacity:0
    }}
    transition={{duration:.5}}
    onClick={()=> window.open(projectURL)}
    className='
        transition-all
        duration-200
        sLaptop:w-[11.16339rem]
        mLaptop:w-[13.90158rem]
        desktop:w-[16.8504rem]
        largeDesktop:w-[21.063rem]
        sLaptop:h-[12.62089rem]
        mLaptop:h-[15.71658rem]
        desktop:h-[19.0504rem]
        largeDesktop:h-[23.813rem]
        sLaptop:rounded-[0.40068rem]
        mLaptop:rounded-[0.49896rem]
        desktop:rounded-[0.6048rem]
        largeDesktop:rounded-[.756rem]
        relative
        sLaptop:hover:ring-[0.10918rem]
        mLaptop:hover:ring-[0.13596rem]
        desktop:hover:ring-[0.1648rem]
        largeDesktop:hover:ring-[0.206rem]
        hover:ring-offset-0
        hover:ring-SelectBlue
        hover:cursor-pointer
    '>
        <img className='
        sLaptop:w-[11.16339rem]
        mLaptop:w-[13.90158rem]
        desktop:w-[16.8504rem]
        largeDesktop:w-[21.063rem]
        sLaptop:h-[12.62089rem]
        mLaptop:h-[15.71658rem]
        desktop:h-[19.0504rem]
        object-cover
        largeDesktop:h-[23.813rem]
        sLaptop:rounded-[0.40068rem]
        mLaptop:rounded-[0.49896rem]
        desktop:rounded-[0.6048rem]
        largeDesktop:rounded-[.756rem]' src={`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/screenshots/${imgURL}`} alt={projectName} />
        <ProjectInfo tag={tags} demo={live} projectName={projectName} date={date} />
    </motion.div>
  )
})

export default index  