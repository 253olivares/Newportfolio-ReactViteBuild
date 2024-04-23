import { MutableRefObject, useState } from "react"
import { createContext, ReactElement, useRef } from "react";
// type check to look over all global functions and values
export type contextType = {
    arrowRef: MutableRefObject<HTMLImageElement | null>
    pageRef: MutableRefObject<(HTMLDivElement | HTMLElement)[]>,
    iconsRef: MutableRefObject<(HTMLImageElement | HTMLElement)[]>,
    descRef: MutableRefObject<HTMLDivElement|null>,
    currentSection:string,
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>
    scrollState:string,
    setScrollState: React.Dispatch<React.SetStateAction<string>>,
    selectSkill: string,
    setSelectSkill: React.Dispatch<React.SetStateAction<string>>
  }

export const AppContext = createContext<contextType | null>(null);

export const PageProvider = ({children}:{children:ReactElement}) => {

    const pageRef = useRef<(HTMLDivElement | HTMLElement)[]>([]);
    const iconsRef = useRef<(HTMLImageElement | HTMLElement)[]>([]);
    const arrowRef = useRef<HTMLImageElement | null>(null);
    const descRef = useRef<HTMLDivElement|null>(null);
    const [scrollState, setScrollState] = useState<string>("Home");
    const [currentSection, setCurrentSection] = useState<string>('Home');
    const [selectSkill, setSelectSkill] = useState<string>('HTML');
    const contextValues = {
        pageRef,
        iconsRef, 
        arrowRef,
        descRef,
        scrollState, setScrollState,
        currentSection, setCurrentSection, 
        selectSkill, setSelectSkill
    }

    return <AppContext.Provider value={contextValues} >{children}</AppContext.Provider>
};