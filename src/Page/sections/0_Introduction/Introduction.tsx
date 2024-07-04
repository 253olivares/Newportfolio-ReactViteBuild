import { memo, useContext } from "react";
import { AppContext } from "../../contextRefs";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import HeroCharacter from "./components/HeroCharacter";
import Circles from "./components/Circles";
import WaveBackDesk from "./components/WaveBackDesk";
import WaveBackMobile from "./components/WaveBackMobile";

const Introduction = memo(() => {
  
  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;

  const circles = ['circle1','circle2','circle3','circle4']

  return (
    <div ref={el =>{
      if(el) pageRef.current['Home'] = el
    }} id="Home" className={`
    relative 
    w-full 
    `}>
     
     <WaveBackDesk /> 

     <WaveBackMobile />

      <div className="
      w-full top-0 absolute">
        <div className="
          introductionHolder
        ">
          
          <Welcome />

          <Message />
          
          <HeroCharacter />

            {/* Circles */}

            {
            circles.map((x,_)=> 
              <Circles key={x} clsName={x} />)
            }

        </div>
      </div>
    </div>
  )
})




export default Introduction