import { useContext, memo } from "react";
import { AppContext } from "../../contextAPI";
import Part1 from './part1';
import Part2 from './part2';

const index = memo(() => {

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const {pageRef} = appContext;

  return (
    <div  ref={el => {
      if(el) pageRef.current[1] = el
    }} id="AboutMe" className={`relative w-full`}>
      <Part1 />
      <Part2 />
    </div>
  )
})

export default index