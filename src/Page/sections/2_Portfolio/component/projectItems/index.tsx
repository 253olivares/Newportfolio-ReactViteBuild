import {memo} from 'react';
import { projectStateType } from '../../../../../store/projectSlice';
import {motion} from 'framer-motion';

const index = memo(({project}:{project:projectStateType}) => {
    const {id,projectName,projectURL, imgURL, date} = project;
    console.log(imgURL);

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
        <div className='
        flex flex-col 
        sLaptop:gap-[0.36464rem]
        mLaptop:gap-[0.45408rem]
        desktop:gap-[0.5504rem]
        largeDesktop:gap-[0.688rem]
        w-full
        text-PrimaryWhite
        bg-DarkerGlass
        absolute 
        bottom-0 left-0 
        sLaptop:py-[0.59625rem]
        mLaptop:py-[0.7425rem]
        desktop:py-[0.9rem]
        largeDesktop:py-[1.125rem]
        sLaptop:pl-[0.36464rem]
        mLaptop:pl-[0.45408rem]
        desktop:pl-[0.5504rem]
        largeDesktop:pl-[0.688rem]
        sLaptop:rounded-b-[0.40068rem]
        mLaptop:rounded-b-[0.49896rem]
        desktop:rounded-b-[0.6048rem]
        largeDesktop:rounded-b-[.756rem]
        '>
            <h1 className='
             font-semibold
             sLaptop:text-[0.72875rem]
             mLaptop:text-[0.91575rem]
             desktop:text-[1.1rem]
             largeDesktop:text-[1.375rem]
             leading-none
            '>{projectName}</h1>
            <p className='
             font-semibold
             sLaptop:text-[0.54643rem]
             mLaptop:text-[0.68046rem]
             desktop:text-[0.8248rem]
             largeDesktop:text-[1.031rem]
             leading-none
             opacity-80
            '>{date}</p>
        </div>
    </motion.div>
  )
})

export default index