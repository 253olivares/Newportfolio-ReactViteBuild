import square from '/assets/backgroundStrips1.svg';
import { getSkillsError, getSkillsStatus, selectEntities } from '../../../../store/skillsSlice';
import { useAppSelector } from '../../../../store/hook';
import DescBox from './components/description';
import Icons from './components/icons';
import { memo, useContext } from 'react';
import { AppContext } from '../../../contextAPI';

const index = memo(() => {


  const appContext = useContext(AppContext);
  if(!appContext) return null;
  const {selectSkill} = appContext

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
    display = Object.entries(entities).map(([k,v]) => 
      <Icons key={k} skill={v} />
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
              sLaptop:px-[0.99rem]
              mLaptop:px-[1.238rem]
              desktop:px-[1.531rem]
              largeDesktop:px-[1.856rem]
              w-full 
              flex justify-between
              '>
                {display}
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