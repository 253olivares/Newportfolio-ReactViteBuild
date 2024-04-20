import square from '/assets/backgroundStrips1.svg';
import { useAppSelector } from '../../../../store/hook';
import { selectById, selectEntities, getSkillsError, getSkillsStatus } from '../../../../store/skillsSlice';

const index = () => {
  // // test selector
  // const category = useAppSelector(state => selectById(state,'My SQL'));
  // // test
  // const entities = useAppSelector(selectEntities);
  // // test
  // const error = useAppSelector(getSkillsError);
  // // test
  // const status = useAppSelector(getSkillsStatus);
  // // show results
  // console.log(category, entities,error,status);
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
          <div className=''>
            {/* select options */}
            <div className=''>

            </div>
            {/* result select */}
            <div className=''>

            </div>
          </div>
        </div>
        <img className="absolute 
        hidden
        mLaptop:h-[71.643rem] 
        largeDesktop:h-[107rem] 
        mLaptop:right-[-1rem] mLaptop:top-[-10rem]
        largeDesktop:right-[-2rem] largeDesktop:top-[-20rem]" src={square} alt="" />
      </div>
  )
}

export default index