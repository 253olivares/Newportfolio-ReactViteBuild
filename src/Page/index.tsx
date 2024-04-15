import { useContext, useEffect, memo } from "react"
import { AppContext } from "./contextAPI"

const index = memo(() => {
  const css = `w-full sLaptop:h-[576px] mLaptop:h-[720px] desktop:h-[864px] largeDesktop:h-[1080px] flex justify-center items-center`
  const textcss = 'text-PrimaryWhite text-8xl font-bold'

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const {pageRef, currentSection, setCurrentSection, scrollState, setScrollState} = appContext;

  useEffect(()=> {
    const scrollCheck = () => {
      if(window.scrollY >= pageRef.current[3].offsetTop) {
        setCurrentSection(pageRef.current[3].id);
        setScrollState('');
      } else if (window.scrollY >= pageRef.current[2].offsetTop) {
        setCurrentSection(pageRef.current[2].id);
        setScrollState('');
      } else if (window.scrollY >= pageRef.current[1].offsetTop) {
        setCurrentSection(pageRef.current[1].id);
        setScrollState('');
      } else if (window.scrollY >= pageRef.current[0].offsetTop) {
        setCurrentSection(pageRef.current[0].id);
        setScrollState('');
      }
    }
    window.addEventListener('scroll',scrollCheck,true);
    ()=> {
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
      <div ref={el =>{
        if(el) pageRef.current[0] = el
      }} id="Home" className={`bg-red-500 ${css}`}>
        <h1 className={textcss} >HOME</h1>
      </div>
      <div  ref={el => {
        if(el) pageRef.current[1] = el
      }} id="AboutMe" className={`bg-orange-300 ${css}`}>
        <h1 className={textcss} >ABOUT ME</h1>
      </div>
      <div ref={el => {
        if(el) pageRef.current[2] = el
      }} id="Portfolio" className={`bg-green-500 ${css}`}>
        <h1 className={textcss} >PORTFOLIO</h1>
      </div>
      <div ref={el => {
        if(el) pageRef.current[3] = el
      }} id="ContactMe" className={` bg-purple-400 ${css}`}>
        <h1 className={textcss} >CONTACT ME</h1>
      </div>
    </>
  )
})

export default index