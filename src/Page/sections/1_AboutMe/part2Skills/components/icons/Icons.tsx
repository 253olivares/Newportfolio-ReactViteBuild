import { memo, useContext, useEffect} from "react";
import { AppContext } from "../../../../../contextRefs";
import { changeSkill, skillsStateType } from "../../../../../../store/skillsSlice";
import { useAppDispatch } from "../../../../../../store/hook";

const Icons = memo(({select:selectSkill,skill, loc}:{select:string,skill: skillsStateType, loc:number}) => {
  const dispatch = useAppDispatch();

  const appContext = useContext(AppContext);
  const {iconsRef,arrowRef,descRef} = appContext!;

  useEffect(()=> {
    // function that will reposition our arrow every time our mouse
    // hovers a skill
    
    const setSelect = () => {
      // sets our skill and triggers a rerender our description
      dispatch(changeSkill(skill.title));

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
      className={` iconsCss `} 
      src={`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/SkillIcons/${selectSkill === skill.title ? 'Select': ''}${skill.imgSRC}`} alt={skill.title} /> 
  )
})

export default Icons;