import { memo, useContext } from "react";
import { AppContext } from "../../contextRefs";
import Welcome from "./Welcome";
import Message from "./Message";
import HeroCharacter from "./HeroCharacter";
import Circles from "./Circles";
import WaveBackDesk from "./WaveBackDesk";
import WaveBackMobile from "./WaveBackMobile";

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