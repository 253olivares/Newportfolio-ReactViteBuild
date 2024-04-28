import { MutableRefObject} from "react";
import { createContext, ReactElement, useRef } from "react";
import square from '/assets/backgroundStrips1.svg';
import pointer from '/assets/pointer.svg'

// Provider used to keep track of refs

export type skillContextType = {
    iconsRef: MutableRefObject<(HTMLImageElement)[]>,
    arrowRef: MutableRefObject<HTMLImageElement | null>,
    descRef: MutableRefObject<HTMLDivElement|null>,
    square:string,
    pointer:string
}

export const SkillsContext = createContext<skillContextType | null>(null);


export const SkillProvider = ({children}: {children:ReactElement}) => {

    const iconsRef = useRef<(HTMLImageElement)[]>([]);
    const arrowRef = useRef<HTMLImageElement | null>(null);
    const descRef = useRef<HTMLDivElement | null>(null);

    const contextValues = {
        iconsRef,
        arrowRef,
        descRef,
        square,
        pointer
    }

    return <SkillsContext.Provider value={contextValues} >{children}</SkillsContext.Provider>
};