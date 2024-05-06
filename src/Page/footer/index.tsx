import { AppContext } from "../contextRefs";
import { useContext } from "react";
import FooterMobile from '/assets/FooterMobile.svg'
import FooterBack from '/assets/Footer.svg'
import Character2 from '/assets/character_2.svg'
import instagram from '/assets/instagram.svg';
import linkedIn from '/assets/linkedin.svg';
import github from '/assets/github.svg';

const index = () => {

  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;

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
          <img 
            className="
            w-full
            sLaptop:hidden
            "
            onClick={()=>scrollToTop()}
           src={FooterMobile}
           alt="MobileFooter" />
          <img className="
          hidden
          sLaptop:block
          sLaptop:w-[calc(100%-3.333rem)]
          mLaptop:w-[calc(100%-4.167rem)]
          desktop:w-[calc(100%-5rem)]
          largeDesktop:w-[calc(100%-6.25rem)]
          float-right" src={FooterBack} alt="Footer" />
          <div onClick={()=>scrollToTop()} className="
          hidden
          absolute 
          right-0 top-0 
          sLaptop:w-[calc(100%-3.333rem)]
          mLaptop:w-[calc(100%-4.167rem)]
          desktop:w-[calc(100%-5rem)]
          largeDesktop:w-[calc(100%-6.25rem)] 
          sLaptop:flex justify-center">
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
            text-PrimaryWhite
            ">To Top</p>
          </div>
        </div>
        <div className="
        w-full 
        bg-SidebarGray
        ">
           <div className="
           w-full
           sLaptop:w-[calc(100%-3.333rem)]
           mLaptop:w-[calc(100%-4.167rem)]
           desktop:w-[calc(100%-5rem)]
           largeDesktop:w-[calc(100%-6.25rem)]
           px-[0.802rem] py-[0.308rem]
           mobile:px-[1.069rem] mobile:py-[0.411rem]
           sMobile:px-[1.71rem] sMobile:py-[0.658rem]
           mMobile:px-[2.053rem] mMobile:py-[0.789rem]
           sLaptop:px-[1.55rem] sLaptop:py-[0.234rem]
           mLaptop:px-[1.875rem] mLaptop:py-[0.291rem]
           desktop:px-[2.313rem] desktop:py-[0.35rem]
           largeDesktop:px-[2.906rem] largeDesktop:py-[0.438rem]

           sLaptop:float-right 
           flex 
           items-center
           justify-between 
           ">
            <img className="
            w-[3.113rem]
            mobile:w-[4.15rem]
            sMobile:w-[6.64rem]
            mMobile:w-[7.968rem]
            sLaptop:w-[5.5rem]
            mLaptop:w-[7.25rem]
            desktop:w-[8.75rem]
            largeDesktop:w-[10rem]
            " src={Character2} alt="Character_2" />
            <div className="flex gap-[0.769rem] mobile:gap-[1.026rem] sMobile:gap-[1.642rem] mMobile:gap-[1.97rem] sLaptop:gap-[1.5rem] mLaptop:gap-[1.875rem] desktop:gap-[2.25rem] largeDesktop:gap-[2.813rem]">
              {
                Object.entries(links).map(([k,v],index) => 
                  <a key={index} href={k} className="h-full" >
                    <img 
                    className=" w-[1.108rem] mobile:w-[1.642rem] sMobile:w-[2.627rem] mMobile:w-[3.153rem] sLaptop:w-[2.125rem] mLaptop:w-[2.5rem] desktop:w-[3.125rem] largeDesktop:w-[3.75rem] cursor-pointer hover:opacity-75" 
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