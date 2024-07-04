import  { ReactNode, memo, useContext } from 'react'
import { skillsStateType } from '../../../../../store/skillsSlice'
import Description from './description/Description'
import { AppContext } from '../../../../contextRefs'

const TechnicalContent = memo(({entities, display, selectSkill}:{entities:Record<string, skillsStateType>,display:ReactNode,selectSkill:string}) => {
  
  const appContext = useContext(AppContext);
  const {arrowRef,pointer} = appContext!;
  
  return (
    <div 
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='500'
            className='
            sLaptop:flex 
            flex-col 
            w-full 
            max-w-[1920px] 
            extra:mx-auto'>
              <div className='
              overflow-x-auto
              no-scrollbar

              mt-[0.977rem]
              mobile:mt-[1.283ren]
              sMobile:mt-[2.083rem]
              mMobile:mt-[2.5rem]
              sLaptop:mt-[1.333rem]
              mLaptop:mt-[1.666rem]
              desktop:mt-[2rem]
              largeDesktop:mt-[2.5rem]

              py-[0.608rem]
              mobile:py-[0.81rem]
              sMobile:py-[1.296rem]
              mMobile:py-[1.555rem]
              sLaptop:py-[0.890rem]
              mLaptop:py-[1.113rem]
              desktop:py-[1.336rem]
              largeDesktop:py-[1.670rem]

              px-[9.80%]
              sLaptop:px-[1.82%]

              gap-[0.729rem]
              mobile:gap-[0.972rem]
              sMobile:gap-[1.555rem]
              mMobile:gap-[1.866rem]

              sLaptop:gap-0
              w-full 
              flex flex-row
              sLaptop:justify-between
              relative
              '>
                {display}
              </div>
              <div className='w-full hidden sLaptop:block relative sLaptop:min-h-[1.716rem] mLaptop:min-h-[2.145rem] desktop:min-h-[2.574rem] largeDesktop:min-h-[3.218rem]'>
                <img
                ref={arrowRef}
                className={`
                transition-[left]
                duration-150
                absolute
                sLaptop:h-[1.716rem] 
                mLaptop:h-[2.145rem] 
                desktop:h-[2.574rem] 
                largeDesktop:h-[3.218rem]
                left-[03.20%]
                `} src={pointer} alt="pointerSVG" />
              </div>
              
              <Description selectSkill={entities[selectSkill]} />
            </div>
  )
})

export default TechnicalContent