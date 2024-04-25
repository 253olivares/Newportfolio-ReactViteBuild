import { MutableRefObject, useState } from "react";
import { createContext, ReactElement, useRef } from "react";

export type skillContextType = {
    iconsRef: MutableRefObject<(HTMLImageElement)[]>,
    arrowRef: MutableRefObject<HTMLImageElement | null>,
    descRef: MutableRefObject<HTMLDivElement|null>,
    selectSkill: string,
    setSelectSkill: React.Dispatch<React.SetStateAction<string>>,
}

export const SkillsContext = createContext<skillContextType | null>(null);

export const SkillProvider = ({children}: {children:ReactElement}) => {

    const iconsRef = useRef<(HTMLImageElement)[]>([]);
    const arrowRef = useRef<HTMLImageElement | null>(null);
    const descRef = useRef<HTMLDivElement | null>(null);
    const [selectSkill, setSelectSkill] = useState<string>('HTML');

    const contextValues = {
        iconsRef,
        arrowRef,
        descRef,
        selectSkill, setSelectSkill
    }

    return <SkillsContext.Provider value={contextValues} >{children}</SkillsContext.Provider>
}