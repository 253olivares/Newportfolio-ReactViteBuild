import { MutableRefObject, useState } from "react"
import { createContext, ReactElement, useRef } from "react";
// context that looks over our nav scroll and section scroll
// creates ref for each section and allows us to scroll to section when we
// click on it
export type contextType = {
    pageRef: MutableRefObject<(HTMLDivElement | HTMLElement)[]>,
    currentSection:string,
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>
    scrollState:string,
    setScrollState: React.Dispatch<React.SetStateAction<string>>,
  }

export const AppContext = createContext<contextType | null>(null);

export const PageProvider = ({children}:{children:ReactElement}) => {

    // ref to keep track of all the section
    const pageRef = useRef<(HTMLDivElement | HTMLElement)[]>([]);
    const [scrollState, setScrollState] = useState<string>("Home");
    const [currentSection, setCurrentSection] = useState<string>('Home');
    const contextValues = {
        pageRef,
        scrollState, setScrollState,
        currentSection, setCurrentSection, 
    }

    return <AppContext.Provider value={contextValues} >{children}</AppContext.Provider>
};