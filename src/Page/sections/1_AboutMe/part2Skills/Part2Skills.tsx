import { AppContext } from '../../../contextRefs';
import { memo, useContext} from 'react';

import { getSelectSkill, getSkillsError, getSkillsStatus, selectEntities } from '../../../../store/skillsSlice';
import { useAppSelector } from '../../../../store/hook';

import Icons from './components/icons/Icons';
import Loading from '../../loading/Loading';
import TechnicalHeader from './components/technicalHeader/TechnicalHeader';
import TechnicalContent from './components/TechnialContent';
import TechincalDataFail from './components/TechincalDataFail';

const Part2Skills = memo(() => {

  const entities = useAppSelector(selectEntities);
  const status = useAppSelector(getSkillsStatus);
  const error = useAppSelector(getSkillsError);
  const selectSkill = useAppSelector(getSelectSkill);

  let display

  if(status === 'failed') {
    console.log(error);
    display = (
      <TechincalDataFail />
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
      <Icons select={selectSkill} key={k} skill={v} loc={index} />
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
          
          <TechnicalHeader />

           {/* select options */}
           {status === 'failed' || status === 'loading' ? 
            display
           : 
            <TechnicalContent selectSkill={selectSkill}  entities={entities} display={display}/>
            }
        </div>
        
        <SquareMobile />

        <Square />
        
      </div>
  )
})

const SquareMobile = memo(() => {

  const appContext = useContext(AppContext);
  const  {squareMobile} = appContext!;

  return <img className='
  absolute 
  z-[0]
  top-0
  right-0 
  w-[92.5%]
  sLaptop:hidden
  ' src={squareMobile} alt="Mobile square" />
})

const Square = memo(() => {

  const appContext = useContext(AppContext);
  const {square} = appContext!;

  return <img className="square" src={square} alt="Square" />
})

export default Part2Skills;