import { useContext, useEffect, memo } from "react"
import { AppContext } from "./contextRefs";
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
      if(window.scrollY + (window.innerHeight*.35) >= pageRef.current['ContactMe'].offsetTop) {
        dispatch(setCurrentSelection(pageRef.current['ContactMe'].id))
        dispatch(setScrollState(''))
      } else if (window.scrollY+ (window.innerHeight*.35) >= pageRef.current['Portfolio'].offsetTop) {
        dispatch(setCurrentSelection(pageRef.current['Portfolio'].id))
        dispatch(setScrollState(''))
      } else if (window.scrollY + (window.innerHeight*.35) >= pageRef.current['AboutMe'].offsetTop) {
        dispatch(setCurrentSelection(pageRef.current['AboutMe'].id))
        dispatch(setScrollState(''))
      } else if (window.scrollY >= pageRef.current['Home'].offsetTop) {
        dispatch(setCurrentSelection(pageRef.current['Home'].id))
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
        pageRef.current['Home'].scrollIntoView({
          behavior:'smooth'
        })
        break;
      case "About Me":
        pageRef.current['AboutMe'].scrollIntoView({
          behavior:'smooth'
        })
        break;
      case "Portfolio":
        pageRef.current['Portfolio'].scrollIntoView({
          behavior:'smooth'
        })
        break;
      case "Contact Me":
        pageRef.current['ContactMe'].scrollIntoView({
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