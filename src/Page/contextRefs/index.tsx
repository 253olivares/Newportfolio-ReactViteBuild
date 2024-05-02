import Character1 from '/assets/character_1.svg';
import HomeIcon from '/assets/homeIcon.svg';
import AboutMeIcon from '/assets/aboutmeIcon.svg';
import PortfolioIcon from '/assets/portfolioIcon.svg';
import ContactMeIcon from '/assets/contactmeIcon.svg';
import HomeIconSelected from '/assets/HomeIconSelected.svg';
import AboutMeIconSelected from '/assets/aboutmeIconSelected.svg';
import PortfolioIconSelected from '/assets/portfolioIconSelected.svg';
import ContactMeIconSelected from '/assets/contactmeIconSelected.svg';
import square from '/assets/backgroundStrips1.svg';
import pointer from '/assets/pointer.svg'
import Arrow from '/assets/filter_arrow.svg';
import minimize from '/assets/browser_MinimizeButto.svg';
import fullscreen from '/assets/browser_fullscreenButton.svg';
import close from '/assets/browser_closeButton.svg';
import strips from '/assets/backgroundStrings2.svg';
import downloadSVG from '/assets/downloadResume.svg';
import triangle from '/assets/Triangle.svg';
import mobileTriangle from '/assets/TriangleMobile.svg';
import profile from '/assets/profileImage.svg';
import bracketLeft from '/assets/leftBraket.svg';
import bracketRight from '/assets/rightBraket.svg';
import moneySign from '/assets/dollarSign.svg';
import { MutableRefObject,createContext, ReactElement, useRef } from "react";
// context that looks over our nav scroll and section scroll
// creates ref for each section and allows us to scroll to section when we
// click on it
export type contextType = {
    
    pageRef: MutableRefObject<(HTMLDivElement | HTMLElement)[]>,
    svgArray:Record<string,string>,
    selectSVGArray:string[],
    Character1:string

    // About me section
    triangle:string,
    mobileTriangle:string,
    profile:string,
    bracketLeft:string,
    bracketRight:string,
    moneySign:string

    // Skill Section
    iconsRef: MutableRefObject<(HTMLImageElement)[]>,
    arrowRef: MutableRefObject<HTMLImageElement | null>,
    descRef: MutableRefObject<HTMLDivElement|null>,
    square:string,
    pointer:string,

    // Portfolio section
    tabRef: MutableRefObject<HTMLDivElement[]>,
    filterListRef: MutableRefObject<HTMLDivElement | null>,
    backgroundSelectRef: MutableRefObject<HTMLDivElement | null>,
    labels:Record<string,string>,
    Arrow:string,
    minimize: string,
    fullscreen: string,
    close: string,

    // contact me
    strips:string,
    downloadSVG:string
  }

export const AppContext = createContext<contextType | null>(null);

export const PageProvider = ({children}:{children:ReactElement}) => {

    // ref to keep track of all our page sections
    const pageRef = useRef<(HTMLDivElement | HTMLElement)[]>([]);

    // Skill stuff to keep ref
    const iconsRef = useRef<(HTMLImageElement)[]>([]);
    const arrowRef = useRef<HTMLImageElement | null>(null);
    const descRef = useRef<HTMLDivElement | null>(null);

    // Portfolio refs
    const tabRef = useRef<HTMLDivElement[]>([]);
    const filterListRef = useRef<HTMLDivElement | null>(null);
    const backgroundSelectRef = useRef<HTMLDivElement | null>(null);

    // svg array of our sidebar icons
    const svgArray = {
      "Home" : HomeIcon,
      "About Me": AboutMeIcon ,
      "Portfolio": PortfolioIcon,
      "Contact Me": ContactMeIcon
    }

    // sidebar icons when they are selected
    const selectSVGArray = [
      HomeIconSelected,
      AboutMeIconSelected,
      PortfolioIconSelected,
      ContactMeIconSelected
    ]

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
        pageRef,
        svgArray,
        selectSVGArray,
        Character1,

        // about me svgs

        triangle,
        mobileTriangle,
        profile,
        bracketLeft,
        bracketRight,
        moneySign,

        // Skill refs and svgs
        iconsRef,
        arrowRef,
        descRef,
        square,
        pointer,

        // Portfolio refs and svg
        tabRef,
        filterListRef,
        backgroundSelectRef,
        labels,
        Arrow,
        minimize,
        fullscreen,
        close,

        // Contact me
        strips,
        downloadSVG
    }

    return <AppContext.Provider value={contextValues} >{children}</AppContext.Provider>
};