
import { useEffect, useState, useContext } from "react";
import { BrowserAppContext } from "../../../mockBrowserContext";
import { useAppSelector } from "../../../../../../store/hook";
import { getTabSelect } from "../../../../../../store/projectSlice";

export const windowResize = ():void => {

    const [_, setWindowWidth] = useState<number>(0);

    const appContext = useContext(BrowserAppContext);
    const {tabRef, backgroundSelectRef} = appContext!;

    const tabSelect = useAppSelector(getTabSelect);

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
