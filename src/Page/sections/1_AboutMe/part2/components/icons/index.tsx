import { memo, useContext, useEffect, useRef } from "react"
import { skillsStateType } from "../../../../../../store/skillsSlice"
import { AppContext } from "../../../../../contextAPI";

const index = memo(({skill,loc}:{skill: skillsStateType, loc:number}) => {
  

  const iconRef = useRef<HTMLImageElement>(null);

  const appContext = useContext(AppContext);
  if(!appContext) return null;
  const {selectSkill, setSelectSkill} = appContext


  useEffect(()=> {
    const setSelect = () => {
      setSelectSkill(skill.title);
    }

    iconRef.current?.addEventListener('mouseover',setSelect,true);
    return ()=> {
      iconRef.current?.removeEventListener('mouseover',setSelect,true);
    }
  },[])

  return (
      <img
      ref={iconRef}
      className={`
      cursor-pointer
      sLaptop:w-[4.224rem]
      mLaptop:w-[5.28rem]
      desktop:w-[6.336rem]
      largeDesktop:w-[7.92rem]
      `} 
      src={`http://localhost:5173/Newportfolio-ReactViteBuild/assets/SkillIcons/${selectSkill === skill.title ? 'Select': ''}${skill.imgSRC}`} alt={skill.title} /> 
  )
})

export default index