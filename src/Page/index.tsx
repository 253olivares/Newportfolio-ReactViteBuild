import { useContext, useEffect, memo } from "react"
import { AppContext } from "./sidebar/contextSidebarAPI";
import Section1 from './sections/0_Introduction';
import Section2 from './sections/1_AboutMe';
import Section3 from './sections/2_Portfolio';
import Section4 from './sections/3_ContactMe';
import { useAppDispatch, useAppSelector } from "../store/hook";
import { getScrollState, setCurrentSelection, setScrollState } from "../store/sidebarSlice";

const index = memo(() => {

  const dispatch = useAppDispatch();

  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;

  const scrollState = useAppSelector(getScrollState);

  useEffect(()=> {
    const scrollCheck = () => {
      if(window.scrollY + (window.innerHeight*.35) >= pageRef.current[3].offsetTop) {
        dispatch(setCurrentSelection(pageRef.current[3].id))
        dispatch(setScrollState(''))
      } else if (window.scrollY+ (window.innerHeight*.35) >= pageRef.current[2].offsetTop) {
        dispatch(setCurrentSelection(pageRef.current[2].id))
        dispatch(setScrollState(''))
      } else if (window.scrollY + (window.innerHeight*.35) >= pageRef.current[1].offsetTop) {
        dispatch(setCurrentSelection(pageRef.current[1].id))
        dispatch(setScrollState(''))
      } else if (window.scrollY >= pageRef.current[0].offsetTop) {
        dispatch(setCurrentSelection(pageRef.current[0].id))
        dispatch(setScrollState(''))
      }
    }
    window.addEventListener('scroll',scrollCheck,true);
    return ()=> {
      window.removeEventListener('scroll',scrollCheck,true);
    }
  },[])

  useEffect(()=> {
    switch (scrollState) {
      case "Home":
        pageRef.current[0].scrollIntoView({
          behavior:'smooth'
        })
        break;
      case "About Me":
        pageRef.current[1].scrollIntoView({
          behavior:'smooth'
        })
        break;
      case "Portfolio":
        pageRef.current[2].scrollIntoView({
          behavior:'smooth'
        })
        break;
      case "Contact Me":
        pageRef.current[3].scrollIntoView({
          behavior:'smooth'
        })
        break;
      default:
        break;
    }
  },[scrollState])

  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  )
})

export default index