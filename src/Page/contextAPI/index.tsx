import { MutableRefObject, useState } from "react"
import { createContext, ReactElement, useRef } from "react";

// type check to look over all global functions and values
export type contextType = {
    pageRef: MutableRefObject<(HTMLDivElement | HTMLElement)[]>,
    currentSection:string,
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>
    scrollState:string,
    setScrollState: React.Dispatch<React.SetStateAction<string>>
  }

export const AppContext = createContext<contextType | null>(null);

export const PageProvider = ({children}:{children:ReactElement}) => {

    const pageRef = useRef<(HTMLDivElement | HTMLElement)[]>([]);
    const [scrollState, setScrollState] = useState<string>("Home");
    const [currentSection, setCurrentSection] = useState<string>('Home');

    const contextValues = {
        pageRef, 
        currentSection, setCurrentSection, 
        scrollState, setScrollState
    }

    return <AppContext.Provider value={contextValues} >{children}</AppContext.Provider>
};