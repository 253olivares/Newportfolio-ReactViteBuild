import { MutableRefObject, useState } from "react"
import { createContext, ReactElement, useRef } from "react";
import { useAppSelector } from "../../store/hook";
import { selectEntities } from "../../store/skillsSlice";
// type check to look over all global functions and values
export type contextType = {
    pageRef: MutableRefObject<(HTMLDivElement | HTMLElement)[]>,
    iconsRef: MutableRefObject<(HTMLImageElement | HTMLElement)[]>
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
    const [scrollState, setScrollState] = useState<string>("Home");
    const [currentSection, setCurrentSection] = useState<string>('Home');
    const [selectSkill, setSelectSkill] = useState<string>('HTML');
    const contextValues = {
        pageRef,
        iconsRef, 
        currentSection, setCurrentSection, 
        scrollState, setScrollState,
        selectSkill, setSelectSkill
    }

    return <AppContext.Provider value={contextValues} >{children}</AppContext.Provider>
};