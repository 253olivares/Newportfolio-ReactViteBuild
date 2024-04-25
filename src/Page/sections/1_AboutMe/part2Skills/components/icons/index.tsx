import { memo, useContext, useEffect} from "react";
import { SkillsContext } from "../../skillsContextAPI";
import { skillsStateType } from "../../../../../../store/skillsSlice";

const index = memo(({skill, loc}:{skill: skillsStateType, loc:number}) => {

  const appContext = useContext(SkillsContext);
  if(!appContext) return null;
  const {iconsRef,arrowRef,descRef,selectSkill, setSelectSkill} = appContext

  useEffect(()=> {
    // function that will reposition our arrow every time our mouse
    // hovers a skill
    const setSelect = () => {
      // sets our skill and triggers a rerender our description
      setSelectSkill(_=>skill.title);
      
      // reposition our arrow
      if (!arrowRef.current) return

      const selectx = iconsRef.current[loc].offsetLeft + 
                      iconsRef.current[loc].offsetWidth/2;
      const halfArrow = arrowRef.current?.offsetWidth/2;
      
      const left = selectx-halfArrow;
      const divWidth = descRef.current!.offsetWidth;

      arrowRef.current.style.left = `${((left/divWidth) * 100).toFixed(2)}%`;
    }

    iconsRef.current[loc].addEventListener('mouseover',setSelect,true);
    return ()=> {
      iconsRef.current[loc].removeEventListener('mouseover',setSelect,true);
    }
  },[])

  return (
      <img
      ref={el => iconsRef.current[loc] = el!}
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