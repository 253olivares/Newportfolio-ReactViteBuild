import DescBox from './components/description';
import Icons from './components/icons';
import Loading from '../../loading';
import { memo, useContext} from 'react';
import { SkillsContext } from './skillsContextAPI';

import { useAppSelector } from '../../../../store/hook';
import { getSelectSkill, getSkillsError, getSkillsStatus, selectEntities } from '../../../../store/skillsSlice';

import { fetchSkills } from '../../../../store/skillsSlice';
import { store } from '../../../../store/store';

const index = memo(() => {

  const appContext = useContext(SkillsContext);
  const {arrowRef,square,pointer} = appContext!

  const entities = useAppSelector(selectEntities);
  const status = useAppSelector(getSkillsStatus);
  const error = useAppSelector(getSkillsError);
  const selectSkill = useAppSelector(getSelectSkill);

  let display

  if(status === 'failed') {
    console.log(error);
    display = (
      <div className='
      w-full 
      sLaptop:min-h-[21.5rem]
      mLaptop:min-h-[28rem]
      desktop:min-h-[35rem]
      largeDesktop:min-h-[45rem]
      flex flex-col justify-center items-center
      sLaptop:gap-[1.59rem]
      mLaptop:gap-[1.98rem]
      desktop:gap-[2.4rem]
      largeDesktop:gap-[3rem]
      text-PrimaryWhite
      '>
        <p className='
         sLaptop:text-[1.9875rem]
         mLaptop:text-[2.475rem]
         desktop:text-[3rem]
         largeDesktop:text-6xl
         font-semibold
        '>Data Failed to load please try again.</p>
        <button
         className='
          sLaptop:text-[1.59rem]
          mLaptop:text-[1.98rem]
          desktop:text-[2.4rem]
          largeDesktop:text-5xl
          hover:cursor-pointer
          hover:underline
         '
        onClick={()=>store.dispatch(fetchSkills())}>Reload</button>
      </div>
    )
  } else if (status === 'loading') {
    display = (
      <div className='
      w-full 
      flex justify-center items-center
      sLaptop:min-h-[26.5rem]
      mLaptop:min-h-[33rem]
      desktop:min-h-[40rem]
      largeDesktop:min-h-[50rem]
      '>
        <Loading color="bg-PrimaryWhite" />
      </div>
    )
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
              flex flex-row
              justify-between
              relative
              '>
                {display}
              </div>
              <div className='w-full relative sLaptop:min-h-[1.716rem] mLaptop:min-h-[2.145rem] desktop:min-h-[2.574rem] largeDesktop:min-h-[3.218rem]'>
                <img
                ref={arrowRef}
                className={`
                transition-[left]
                duration-150
                absolute
                sLaptop:h-[1.716rem] mLaptop:h-[2.145rem] desktop:h-[2.574rem] largeDesktop:h-[3.218rem]
                left-[03.20%]
                `} src={pointer} alt="pointerSVG" />
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