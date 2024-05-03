import { getWindowWidth, setWindowWidth } from "../../store/sidebarSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getTabSelect } from "../../store/projectSlice";
import { useEffect, useContext } from "react";
import { AppContext } from "../contextRefs";

export const windowResize = ():void => {

    const appContext = useContext(AppContext);
    const {tabRef, backgroundSelectRef} = appContext!;

    const dispatch = useAppDispatch();

    const width = useAppSelector(getWindowWidth);
    console.log(width);

    const tabSelect = useAppSelector(getTabSelect);

    if(tabRef.current.length !==0) {
        const test = tabRef.current.filter((x)=> x.innerText === tabSelect);

        const tabOffset = test[0].offsetLeft;
        backgroundSelectRef.current!.style.left= `${tabOffset}px`;
    }

    useEffect(()=> {
        // handle resize function
        // runs out dispatch
        function handleResize() {
            if(width !== window.innerWidth){
                dispatch(setWindowWidth());
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return ()=> window.removeEventListener('resize', handleResize);

    },[])
}
