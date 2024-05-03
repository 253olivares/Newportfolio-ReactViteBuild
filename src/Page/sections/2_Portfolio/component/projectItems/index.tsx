import { projectStateType } from '../../../../../store/projectSlice';
import {motion} from 'framer-motion';
import {memo} from 'react';

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
        block
        relative
        transition-all
        duration-200

        w-[7.311rem]
        h-[8.375rem]
        mobile:w-[9.749rem]
        mobile:h-[11.166rem]
        sMobile:w-[15.598rem]
        sMobile:h-[17.866rem]
        mMobile:w-[18.718rem]
        mMobile:h-[21.439rem]
        sLaptop:w-[11.16339rem]
        mLaptop:w-[13.90158rem]
        desktop:w-[16.8504rem]
        largeDesktop:w-[21.063rem]
        sLaptop:h-[12.62089rem]
        mLaptop:h-[15.71658rem]
        desktop:h-[19.0504rem]
        largeDesktop:h-[23.813rem]

        rounded-[0.266rem]
        mobile:rounded-[0.354rem]
        sMobile:rounded-[0.567rem]
        mMobile:rounded-[0.681rem]
        sLaptop:rounded-[0.40068rem]
        mLaptop:rounded-[0.49896rem]
        desktop:rounded-[0.6048rem]
        largeDesktop:rounded-[.756rem]

        sLaptop:hover:ring-[0.10918rem]
        mLaptop:hover:ring-[0.13596rem]
        desktop:hover:ring-[0.1648rem]
        largeDesktop:hover:ring-[0.206rem]

        hover:ring-offset-0
        hover:ring-SelectBlue
        hover:cursor-pointer
    '>
        <img className='
        w-[7.311rem]
        h-[8.375rem]
        mobile:w-[9.749rem]
        mobile:h-[11.166rem]
        sMobile:w-[15.598rem]
        sMobile:h-[17.866rem]
        mMobile:w-[18.718rem]
        mMobile:h-[21.439rem]
        sLaptop:w-[11.16339rem]
        mLaptop:w-[13.90158rem]
        desktop:w-[16.8504rem]
        largeDesktop:w-[21.063rem]
        sLaptop:h-[12.62089rem]
        mLaptop:h-[15.71658rem]
        desktop:h-[19.0504rem]
        largeDesktop:h-[23.813rem]

        rounded-[0.266rem]
        mobile:rounded-[0.354rem]
        sMobile:rounded-[0.567rem]
        mMobile:rounded-[0.681rem]
        sLaptop:rounded-[0.40068rem]
        mLaptop:rounded-[0.49896rem]
        desktop:rounded-[0.6048rem]
        largeDesktop:rounded-[.756rem]
        
        ' src={`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/screenshots/${imgURL}`} alt={projectName} />
        <ProjectInfo tag={tags} demo={live} projectName={projectName} date={date} />
    </motion.div>
  )
})

export default index  