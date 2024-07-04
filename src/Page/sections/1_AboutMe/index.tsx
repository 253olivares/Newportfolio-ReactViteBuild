import { AppContext } from "../../contextRefs";
import { useContext, memo } from "react";

import Part1Profile from './part1Profile/Part1Profile';
import Part2Skills from './part2Skills';
const index = memo(() => {

  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;

  return (
    <div  ref={el => {
      if(el) pageRef.current['AboutMe'] = el
    }} id="AboutMe" className={`
    relative 
    w-full`}>
      <Part1Profile />
      {/* 
      // Doing this instead of the css method as hidding it using media
      // queries is computationally intensive instead im just going to load a 
      // different component entirely and remove other from the dom tree
      load mobile and desktop version
      depending on what our width is
      */}
    <Part2Skills />
    </div>
  )
})

export default index