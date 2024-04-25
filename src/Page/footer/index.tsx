import { AppContext } from "../contextSidebarAPI";
import { useContext } from "react";
import FooterBack from '/assets/Footer.svg'
import Character2 from '/assets/character_2.svg'
import instagram from '/assets/instagram.svg';
import linkedIn from '/assets/linkedin.svg';
import github from '/assets/github.svg';

const index = () => {

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const {pageRef} = appContext;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const links:Record<string,string> = {
    "https://github.com/253olivares":github, 
    "https://www.instagram.com/carne_asada_wf/":instagram, 
    "https://www.linkedin.com/in/253olivares/" : linkedIn 
  }

  return (
    <footer ref={el => {
        if(el) pageRef.current[4] = el
      }} id="Footer" className="
      w-full
      flex flex-col">
        <div className="
        w-full relative">
          <img className="
          sLaptop:w-[calc(100%-3.333rem)]
          mLaptop:w-[calc(100%-4.167rem)]
          desktop:w-[calc(100%-5rem)]
          largeDesktop:w-[calc(100%-6.25rem)]
          float-right" src={FooterBack} alt="Footer" />
          <div onClick={()=>scrollToTop()} className="
          absolute 
          right-0 top-0 
          sLaptop:w-[calc(100%-3.333rem)]
          mLaptop:w-[calc(100%-4.167rem)]
          desktop:w-[calc(100%-5rem)]
          largeDesktop:w-[calc(100%-6.25rem)] 
          flex justify-center">
            <p className="
            w-[30rem] 
            sLaptop:py-[0.65rem]
            mLaptop:py-[.75rem]
            desktop:py-[.875rem]
            largeDesktop:py-[1rem] 
            font-semibold 
            text-center 
            sLaptop:text-[1.5rem]
            mLaptop:text-[2.05rem]
            desktop:text-[2.5rem]
            largeDesktop:text-[3.125rem] 
            cursor-pointer 
            text-PrimaryWhite">To Top</p>
          </div>
        </div>
        <div className="w-full bg-SidebarGray">
           <div className="
           sLaptop:w-[calc(100%-3.333rem)]
           mLaptop:w-[calc(100%-4.167rem)]
           desktop:w-[calc(100%-5rem)]
           largeDesktop:w-[calc(100%-6.25rem)]
           sLaptop:px-[1.55rem] sLaptop:py-[0.234rem]
           mLaptop:px-[1.875rem] mLaptop:py-[0.291rem]
           desktop:px-[2.313rem] desktop:py-[0.35rem]
           largeDesktop:px-[2.906rem] largeDesktop:py-[0.438rem]
           float-right flex 
           items-center
           justify-between ">
            <img className="
            sLaptop:w-[5.5rem]
            mLaptop:w-[7.25rem]
            desktop:w-[8.75rem]
            largeDesktop:w-[10rem]
            " src={Character2} alt="Character_2" />
            <div className="flex sLaptop:gap-[1.5rem] mLaptop:gap-[1.875rem] desktop:gap-[2.25rem] largeDesktop:gap-[2.813rem]">
              {
                Object.entries(links).map(([k,v],index) => 
                  <a key={index} href={k} className="h-full" >
                    <img 
                    className=" sLaptop:w-[2.125rem] mLaptop:w-[2.5rem] desktop:w-[3.125rem] largeDesktop:w-[3.75rem] cursor-pointer hover:opacity-75" 
                    src={v} 
                    alt={`svg${index}`} />
                  </a>
                )
              }
            </div>
           </div>
        </div>
      </footer>
  )
}

export default index