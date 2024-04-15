import { useContext, useLayoutEffect } from "react";
import { AppContext } from "../contextAPI";

const index = () => {

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const {setCurrentSection} = appContext;
  
  // use layout cuz otherwise causes an error when setting our state
  useLayoutEffect(()=> {
    // change our section 
    setCurrentSection('ErrorPage');
  },[])

  return (
    <div className="flex w-full h-screen justify-center items-center">You have encountered an error</div>
  )
}

export default index