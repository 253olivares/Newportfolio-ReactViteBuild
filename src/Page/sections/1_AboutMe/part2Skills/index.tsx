import { AppContext } from '../../../contextRefs';
import { memo, useContext} from 'react';

import { getSelectSkill, getSkillsError, getSkillsStatus, selectEntities } from '../../../../store/skillsSlice';
import { fetchSkills } from '../../../../store/skillsSlice';
import { useAppSelector } from '../../../../store/hook';
import { store } from '../../../../store/store';

import DescBox from './components/description';
import Icons from './components/icons';
import Loading from '../../loading';

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {arrowRef,square,pointer,squareMobile} = appContext!

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
    <div className="
    sLaptop:block
    partTwoCSS
    ">
        <div className="
        w-full 
        relative z-[5]
        flex 
        flex-col 
        sLaptop:px-[3.6%] 
        extra:px-0">
          <div
          data-aos='fade'
          data-aos-duration='1000'
          data-aos-delay='0'
          className="w-full 
          flex flex-col 
          px-[6.51%]
          sLaptop:px-0
          extra:max-w-[1920px] extra:mx-auto 
          gap-[0.195rem] 
          mobile:gap-[0.260rem] 
          sMobile:gap-[0.416rem] 
          mMobile:gap-[0.5rem]
          sLaptop:gap-[0.333rem] 
          mLaptop:gap-[0.417rem] 
          desktop:gap-[0.5rem] 
          largeDesktop:gap-[0.625rem]
          ">
            <h1  className="sectionCSS">MY TECHNICAL SKILLS</h1>
            <p className="
            leading-none
            font-bold
            text-PrimaryWhite

            text-[0.781rem]
            mobile:text-[1.042rem]
            sMobile:text-[1.667rem]
            mMobile:text-[2rem]
            sLaptop:text-[1.759rem]
            mLaptop:text-[2.199rem]
            desktop:text-[2.64rem]
            largeDesktop:text-[3.3rem]

            textShadowTiny
            mobile:textShadowmobile
            sMobile:textShadowsMobile
            mMobile:textShadowmMobile
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
              <DescBox selectSkill={entities[selectSkill]} />
            </div>
            }
        </div>
        <img className='
        absolute 
        z-[0]
        top-0
        right-0 
        w-[92.5%]
        sLaptop:hidden
        ' src={squareMobile} alt="Mobile square" />
        <img className="
        hidden
        sLaptop:block
        absolute 
        z-[0]
        sLaptop:h-[56.71rem]
        mLaptop:h-[70.62rem] 
        desktop:h-[85.6rem]
        largeDesktop:h-[107rem] 
        sLaptop:right-[-1.06rem] sLaptop:top-[-10.6rem]
        mLaptop:right-[-1.32rem] mLaptop:top-[-13.2rem]
        desktop:right-[-1.6rem] desktop:top-[-16rem]
        largeDesktop:right-[-2rem] largeDesktop:top-[-20rem]" src={square} alt="" />
      </div>
  )
})

export default index