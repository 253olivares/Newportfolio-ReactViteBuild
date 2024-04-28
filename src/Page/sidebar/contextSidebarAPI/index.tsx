import Character1 from '/assets/character_1.svg';
import HomeIcon from '/assets/homeIcon.svg';
import AboutMeIcon from '/assets/aboutmeIcon.svg';
import PortfolioIcon from '/assets/portfolioIcon.svg';
import ContactMeIcon from '/assets/contactmeIcon.svg';
import HomeIconSelected from '/assets/HomeIconSelected.svg';
import AboutMeIconSelected from '/assets/aboutmeIconSelected.svg';
import PortfolioIconSelected from '/assets/portfolioIconSelected.svg';
import ContactMeIconSelected from '/assets/contactmeIconSelected.svg';
import { MutableRefObject,createContext, ReactElement, useRef } from "react";
// context that looks over our nav scroll and section scroll
// creates ref for each section and allows us to scroll to section when we
// click on it
export type contextType = {
    pageRef: MutableRefObject<(HTMLDivElement | HTMLElement)[]>,
    svgArray:Record<string,string>,
    selectSVGArray:string[],
    Character1:string
  }

export const AppContext = createContext<contextType | null>(null);

export const PageProvider = ({children}:{children:ReactElement}) => {

    const svgArray = {
        "Home" : HomeIcon,
        "About Me": AboutMeIcon ,
        "Portfolio": PortfolioIcon,
        "Contact Me": ContactMeIcon
      }
    
      const selectSVGArray = [
        HomeIconSelected,
        AboutMeIconSelected,
        PortfolioIconSelected,
        ContactMeIconSelected
      ]

    // ref to keep track of all the section
    const pageRef = useRef<(HTMLDivElement | HTMLElement)[]>([]);
    const contextValues = {
        pageRef,
        svgArray,
        selectSVGArray,
        Character1
    }

    return <AppContext.Provider value={contextValues} >{children}</AppContext.Provider>
};