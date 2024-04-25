import { MutableRefObject, useState } from "react";
import { createContext, ReactElement, useRef } from "react";

export type mockBrowserContext = {
    tabRef: MutableRefObject<HTMLDivElement[]>,
    filterListRef: MutableRefObject<HTMLDivElement | null>,
    backgroundSelectRef: MutableRefObject<HTMLDivElement | null>,
    tabSelect:"Programming" | "Art" | "UI / UX" , 
    setTabSelect: React.Dispatch<React.SetStateAction<"Programming" | "Art" | "UI / UX">>,
    openFilter: Boolean, 
    setOpenFilter: React.Dispatch<React.SetStateAction<Boolean>>
}


export const BrowserAppContext = createContext<mockBrowserContext | null>(null);

export const PortfolioProvider = ({children}:{children:ReactElement}) => {

    const tabRef = useRef<HTMLDivElement[]>([]);
    const filterListRef = useRef<HTMLDivElement | null>(null);
    const backgroundSelectRef = useRef<HTMLDivElement | null>(null);
    const [tabSelect, setTabSelect] = useState<"Programming" | "Art" | "UI / UX">("Programming");  
    const [openFilter, setOpenFilter] = useState<Boolean>(false); 

    const contextValues = {
        tabRef,
        filterListRef,
        backgroundSelectRef,
        tabSelect, setTabSelect,
        openFilter, setOpenFilter
    }

    return <BrowserAppContext.Provider value={contextValues} >{children}</BrowserAppContext.Provider>
}