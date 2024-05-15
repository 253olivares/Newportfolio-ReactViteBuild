import { projectStateType } from '../../../../../store/projectSlice';
import {motion} from 'framer-motion';
import {memo} from 'react';

import ProjectInfo from './component/projectInfo';

const index = memo(({project}:{project:projectStateType}) => {
  
  const {id,projectName,projectURL, imgURL, date,tags,live,responsive} = project;

  return (
    <motion.div 
    key={id} 
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}
    exit={{
      opacity:0
    }}
    transition={{duration:.5}}
    onClick={()=> window.open(projectURL)}
    className='
        block
        relative

        w-[7.311rem]
        h-[8.375rem]
        mobile:w-[9.749rem]
        mobile:h-[11.166rem]
        sMobile:w-[15.598rem]
        sMobile:h-[17.866rem]
        mMobile:w-[18.718rem]
        mMobile:h-[21.439rem]
        sLaptop:w-[11.092rem]
        mLaptop:w-[13.864rem]
        desktop:w-[16.638rem]
        largeDesktop:w-[20.797rem]
        sLaptop:h-[12.705rem]
        mLaptop:h-[15.881rem]
        desktop:h-[19.058rem]
        largeDesktop:h-[23.822rem]

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
       sLaptop:w-[11.092rem]
       mLaptop:w-[13.864rem]
       desktop:w-[16.638rem]
       largeDesktop:w-[20.797rem]
       sLaptop:h-[12.705rem]
       mLaptop:h-[15.881rem]
       desktop:h-[19.058rem]
       largeDesktop:h-[23.822rem]

       rounded-[0.266rem]
       mobile:rounded-[0.354rem]
       sMobile:rounded-[0.567rem]
       mMobile:rounded-[0.681rem]
       sLaptop:rounded-[0.40068rem]
       mLaptop:rounded-[0.49896rem]
       desktop:rounded-[0.6048rem]
       largeDesktop:rounded-[.756rem]
        
        ' 
        src={`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/screenshots/${imgURL}.svg`} 
        
        alt={projectName} 
        loading='lazy'
        />
        {
          responsive ? 
          <p
          className='
          absolute
          text-PrimaryWhite
          bg-[#b148d2]
          px-[5%]
          
          top-[0.427rem]
          mobile:top-[0.520rem]
          sMobile:top-[0.911rem]
          mMobile:top-[1.094rem]
          sLaptop:top-[0.62964rem]
          mLaptop:top-[0.78408rem]
          desktop:top-[0.9504rem]
          largeDesktop:top-[1.188rem]

          font-semibold

          py-[0.097rem]
          mobile:py-[0.130rem]
          sMobile:py-[0.208rem]
          mMobile:py-[0.20rem]
          sLaptop:py-[0.14893rem]
          mLaptop:py-[0.18546rem] 
          desktop:py-[0.2248rem]
          largeDesktop:py-[0.281rem]

          text-[0.29296875rem]
          mobile:text-[0.39062499999rem]
          sMobile:text-[0.62499999999rem]
          mMobile:text-[.75rem]
          sLaptop:text-[0.52807rem]
          mLaptop:text-[0.60854rem]
          desktop:text-[0.6952rem]
          largeDesktop:text-[0.819rem]
          leading-[1]
          '
          >Mobile Responsive</p>
          :
          null
        }
        <ProjectInfo tag={tags} demo={live} projectName={projectName} date={date} />
    </motion.div>
  )
})

export default index  