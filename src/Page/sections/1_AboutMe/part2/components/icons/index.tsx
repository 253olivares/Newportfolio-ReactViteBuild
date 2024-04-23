import { memo, useContext, useEffect} from "react"
import { skillsStateType } from "../../../../../../store/skillsSlice"
import { AppContext } from "../../../../../contextAPI";

const index = memo(({skill, loc}:{skill: skillsStateType, loc:number}) => {
  

  const appContext = useContext(AppContext);
  if(!appContext) return null;
  const {iconsRef,arrowRef,descRef,selectSkill, setSelectSkill} = appContext


  useEffect(()=> {
    const setSelect = () => {
      setSelectSkill(_=>skill.title);
      
      if (!arrowRef.current) return

      const selectx = iconsRef.current[loc].offsetLeft + 
                      iconsRef.current[loc].offsetWidth/2;
      const halfArrow = arrowRef.current?.offsetWidth/2;
      
      const left = selectx-halfArrow;
      const divWidth = descRef.current!.offsetWidth;

      arrowRef.current.style.left = `${((left/divWidth) * 100).toFixed(2)}%`;

      // console.log(iconsRef,arrowRef);
      // console.log(iconsRef.current[loc]);
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