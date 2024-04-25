import { useContext, useEffect, memo } from "react"
import { AppContext } from "./contextSidebarAPI";
import Section1 from './sections/0_Introduction';
import Section2 from './sections/1_AboutMe';
import Section3 from './sections/2_Portfolio';
import Section4 from './sections/3_ContactMe';

const index = memo(() => {

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const {pageRef, setCurrentSection, scrollState, setScrollState} = appContext;

  useEffect(()=> {
    const scrollCheck = () => {
      if(window.scrollY + (window.innerHeight*.35) >= pageRef.current[3].offsetTop) {
        setCurrentSection(pageRef.current[3].id);
        setScrollState('');
      } else if (window.scrollY+ (window.innerHeight*.35) >= pageRef.current[2].offsetTop) {
        setCurrentSection(pageRef.current[2].id);
        setScrollState('');
      } else if (window.scrollY + (window.innerHeight*.35) >= pageRef.current[1].offsetTop) {
        setCurrentSection(pageRef.current[1].id);
        setScrollState('');
      } else if (window.scrollY >= pageRef.current[0].offsetTop) {
        setCurrentSection(pageRef.current[0].id);
        setScrollState('');
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
      case "AboutMe":
        pageRef.current[1].scrollIntoView({
          behavior:'smooth'
        })
        break;
      case "Portfolio":
        pageRef.current[2].scrollIntoView({
          behavior:'smooth'
        })
        break;
      case "ContactMe":
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