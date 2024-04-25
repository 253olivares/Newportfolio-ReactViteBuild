
import { useEffect, useState, useContext } from "react";
import { BrowserAppContext } from "../../../mockBrowserContext";

export const windowResize = ():void => {

    const [_, setWindowWidth] = useState<number>(0);

    const appContext = useContext(BrowserAppContext);
    if(!appContext) return
    const {tabRef, backgroundSelectRef, tabSelect} = appContext;

    if(tabRef.current.length!==0) {
        const test = tabRef.current.filter((x)=> x.innerText === tabSelect);
        

        const tabOffset = test[0].offsetLeft;
        backgroundSelectRef.current!.style.left= `${tabOffset}px`;
    }

    useEffect(()=> {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return()=> window.removeEventListener('resize', handleResize);
    },[])
}
