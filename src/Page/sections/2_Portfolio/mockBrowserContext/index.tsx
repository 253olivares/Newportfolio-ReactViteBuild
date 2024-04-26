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
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>,
    selectedFilter: string[] , 
    setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>,
    labels:Record<string,string>
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

    const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
    
    const labels:Record<string,string> = {
        'HTML' : '#E14E1D',
        'CSS': '#0277BD',
        'SASS': '#CD6799',
        'Tailwind':'linear-gradient(82.5deg,#F5F5F5, #CD6799 19%,#3886EC 31%, #F5F5F5 )',
        'JavaScript': '#CAB108',
        'TypeScript': '#32A3EE',
        'React': '#242938',
        'Firebase': '#CF5E1C',
        'PHP': '#7229D1',
        'MySQL': '#F57C00'
    }


    const contextValues = {
        tabRef,
        filterListRef,
        backgroundSelectRef,
        searchTerm, setSearchTerm,
        liveDemos,setLiveDemo,
        tabSelect, setTabSelect,
        openFilter, setOpenFilter,
        selectedFilter, setSelectedFilter,
        labels
    }

    return <BrowserAppContext.Provider value={contextValues} >{children}</BrowserAppContext.Provider>
}