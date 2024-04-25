import { MutableRefObject, useState } from "react";
import { createContext, ReactElement, useRef } from "react";

export type mockBrowserContext = {
    tabRef: MutableRefObject<HTMLDivElement[]>,
    filterListRef: MutableRefObject<HTMLDivElement | null>,
    backgroundSelectRef: MutableRefObject<HTMLDivElement | null>,
    searchTerm:string, 
    setSearchTerm:React.Dispatch<React.SetStateAction<string>>,
    liveDemos: boolean,
    setLiveDemo: React.Dispatch<React.SetStateAction<boolean>>,
    tabSelect:"Programming" | "Art" | "UI / UX" , 
    setTabSelect: React.Dispatch<React.SetStateAction<"Programming" | "Art" | "UI / UX">>,
    openFilter: boolean, 
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>
}


export const BrowserAppContext = createContext<mockBrowserContext | null>(null);

export const PortfolioProvider = ({children}:{children:ReactElement}) => {

    const tabRef = useRef<HTMLDivElement[]>([]);
    const filterListRef = useRef<HTMLDivElement | null>(null);
    const backgroundSelectRef = useRef<HTMLDivElement | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [liveDemos,setLiveDemo] = useState<boolean>(false);
    const [tabSelect, setTabSelect] = useState<"Programming" | "Art" | "UI / UX">("Programming");  
    const [openFilter, setOpenFilter] = useState<boolean>(false); 

    const contextValues = {
        tabRef,
        filterListRef,
        backgroundSelectRef,
        searchTerm, setSearchTerm,
        liveDemos,setLiveDemo,
        tabSelect, setTabSelect,
        openFilter, setOpenFilter
    }

    return <BrowserAppContext.Provider value={contextValues} >{children}</BrowserAppContext.Provider>
}