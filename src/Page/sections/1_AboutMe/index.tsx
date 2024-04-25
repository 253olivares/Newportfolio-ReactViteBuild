import { useContext, memo } from "react";
import { AppContext } from "../../contextSidebarAPI";
import Part1Profile from './part1Profile';
import Part2Skills from './part2Skills';
import { SkillProvider } from "./part2Skills/skillsContextAPI";

const index = memo(() => {

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const {pageRef} = appContext;

  return (
    <div  ref={el => {
      if(el) pageRef.current[1] = el
    }} id="AboutMe" className={`relative w-full`}>
      <Part1Profile />
      <SkillProvider>
        <Part2Skills />
      </SkillProvider>
    </div>
  )
})

export default index