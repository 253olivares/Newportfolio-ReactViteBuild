import square from '/assets/backgroundStrips1.svg';
import { getSkillsError, getSkillsStatus, selectEntities } from '../../../../store/skillsSlice';
import { useAppSelector } from '../../../../store/hook';
import DescBox from './components/description';
import Icons from './components/icons';
import { memo, useContext} from 'react';
import { AppContext } from '../../../contextAPI';
import pointer from '/assets/pointer.svg'

const index = memo(() => {


  const appContext = useContext(AppContext);
  if(!appContext) return null;
  const {arrowRef,selectSkill} = appContext

  const entities = useAppSelector(selectEntities);
  const status = useAppSelector(getSkillsStatus);
  const error = useAppSelector(getSkillsError);

  let display

  if(status === 'failed') {
    console.log(error);
    display = "Skills Failed to load"
  } else if (status === 'loading') {
    display = "Loading..."
  } else if (status === 'succeeded'){
    display = Object.entries(entities).map(([k,v], index) => 
      <Icons key={k} skill={v} loc={index} />
    )
  }


  return (
    <div className="partTwoCSS">
        <div className="w-full flex flex-col px-[3.6%] extra:px-0">
          <div className="w-full flex flex-col extra:max-w-[1920px] extra:mx-auto sLaptop:gap-[0.333rem] mLaptop:gap-[0.417rem] desktop:gap-[0.5rem] largeDesktop:gap-[0.625rem]">
            <h1 className="sectionCSS">MY TECHNICAL SKILLS</h1>
            <p className="
            leading-none
            font-bold
            text-PrimaryWhite
            sLaptop:text-[2rem]
            mLaptop:text-[2.5rem]
            desktop:text-[3rem]
            largeDesktop:text-[3.75rem]
            sLaptop:textShadowSmall
            mLaptop:textShadowMedium
            desktop:textShadowDesktop
            largeDesktop:textShadowLarge
            ">Check out some of my strongest technical skills!</p>
          </div>

           {/* select options */}
           {status === 'failed' || status === 'loading' ? 
            display
           : 

            <div className='flex flex-col w-full max-w-[1920px] extra:mx-auto'>
              <div className='
              sLaptop:mt-[3.25rem]
              mLaptop:mt-[4.25rem]
              desktop:mt-[5rem]
              largeDesktop:mt-[6.75rem]
              sLaptop:py-[0.99rem]
              mLaptop:py-[1.238rem]
              desktop:py-[1.485rem]
              largeDesktop:py-[1.856rem]
              px-[1.82%]
              w-full 
              flex 
              justify-between
              relative
              '>
                {display}
              </div>
              <div className='w-full relative sLaptop:min-h-[1.716rem] mLaptop:min-h-[2.145rem] desktop:min-h-[2.574rem] largeDesktop:min-h-[3.218rem]'>
                <img
                ref={arrowRef}
                className={`
                absolute
                sLaptop:h-[1.716rem] mLaptop:h-[2.145rem] desktop:h-[2.574rem] largeDesktop:h-[3.218rem]
                left-[03.20%]
                `}  src={pointer} alt="pointerSVG" />
              </div>
              <DescBox selectSkill={entities[selectSkill]} />
            </div>
            }
        </div>
        <img className="absolute 
        hidden
        mLaptop:h-[71.643rem] 
        largeDesktop:h-[107rem] 
        mLaptop:right-[-1rem] mLaptop:top-[-10rem]
        largeDesktop:right-[-2rem] largeDesktop:top-[-20rem]" src={square} alt="" />
      </div>
  )
})

export default index