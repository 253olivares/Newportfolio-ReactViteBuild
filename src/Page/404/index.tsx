import { useLayoutEffect } from "react";
import { useAppDispatch } from "../../store/hook";
import { setCurrentSelection } from "../../store/sidebarSlice";

const index = () => {

  const dispatch = useAppDispatch();
  
  // use layout cuz otherwise causes an error when setting our state
  useLayoutEffect(()=> {
    // change our section 
    dispatch(setCurrentSelection('ErrorPage'));
  },[])

  return (
    <div className="flex w-full h-screen justify-center items-center">You have encountered an error</div>
  )
}

export default index