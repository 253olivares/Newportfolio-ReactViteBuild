import { AppContext } from "../contextRefs";
import { useContext } from "react";
import FooterBack from '/assets/Footer.svg'
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopMobile from "./components/ScrollToTopMobile";
import BottomFooter from "./components/BottomFooter";

const Footer = () => {

  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;



  return (
    <footer ref={el => {
        if(el) pageRef.current[4] = el
      }} id="Footer" className="
      w-full
      sLaptop:flex 
      flex-col
      relative
      z-[5]
      ">
        <div className="
        sLaptop:block
        w-full 
        relative
        ">
          <ScrollToTopMobile />
          <FoolterBackground />
          <ScrollToTop />
        </div>
        <BottomFooter />
      </footer>
  )
}

const FoolterBackground = () => {
  return <img className="
  hidden
  sLaptop:block
  sLaptop:w-[calc(100dvw-3.333rem)]
  mLaptop:w-[calc(100dvw-4.167rem)]
  desktop:w-[calc(100dvw-5rem)]
  largeDesktop:w-[calc(100dvw-6.25rem)]
  4k:w-[calc(100dvw-8.333rem)]
  float-right" src={FooterBack} alt="Footer" />
}

export default Footer;