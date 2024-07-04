import { memo, useContext } from 'react'
import { AppContext } from '../../../contextRefs'
import HeadName from './components/HeadName';
import Astrik from './components/Astrik';
import BackgroundImage from './components/BackgroundImage';
import PersonalMessage from './components/PersonalMessage';
import Part1ProfileContext from './components/Part1ProfileContext';

const Part1Profile = memo(() => {

  const appContext = useContext(AppContext);
  const {bracketLeft,bracketRight, moneySign} = appContext!;

  const backgroundAssets = {
    'moneySign1':moneySign,
    'moneySign2':moneySign,
    'bracketBack1':bracketLeft,
    'bracketBack2':bracketRight
  }

  return (
    <div className="
    partOneCSS
    ">
        <div className="w-fill relative flex flex-col">
          <HeadName />

          <Part1ProfileContext />

          <PersonalMessage />
        </div>

        <Astrik />

        {
          Object.entries(backgroundAssets).map(([k,v],_)=> 
            <BackgroundImage key={k} clsName={k} imgSrc={v} />
          )
        }

        <TriangleBackMobile />
        <TriangleBack />
      </div>
  )
})

const TriangleBackMobile = memo(() => {

  const appContext = useContext(AppContext);
  const {mobileTriangle} = appContext!;

  return <img 
  className='
  block
  sLaptop:hidden
  w-full
  absolute
  bottom-0
  right-0
  '
  src={mobileTriangle} alt="MobileTriangle" />
})

const TriangleBack = memo(() => {

  const appContext = useContext(AppContext);
  const {triangle} = appContext!;

  return  <img className="
  hidden sLaptop:block
  imgCSS" src={triangle}/>
})

export default Part1Profile