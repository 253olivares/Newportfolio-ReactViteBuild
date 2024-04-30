import { useContext, memo } from "react";
import Part1Profile from './part1Profile';
import Part2Skills from './part2Skills';
import { AppContext } from "../../sidebar/contextSidebarAPI";
import { SkillProvider } from "./part2Skills/skillsContextAPI";

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;

  return (
    <div  ref={el => {
      if(el) pageRef.current[1] = el
    }} id="AboutMe" className={` hidden relative w-full`}>
      <Part1Profile />
      <SkillProvider>
        <Part2Skills />
      </SkillProvider>
    </div>
  )
})

export default index