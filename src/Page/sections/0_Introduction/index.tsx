import { useContext } from "react";
import { AppContext } from "../../contextAPI";
import heroDrawing from '/assets/hero_Drawing.svg'
import triangleColapse from '/assets/trianglePNG.png'

const index = () => {
  
  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const {pageRef} = appContext;

  return (
    <div ref={el =>{
      if(el) pageRef.current[0] = el
    }} id="Home" className={`relative w-full sLaptop:min-h-[42rem] mLaptop:min-h-[52.5rem] desktop:min-h-[63rem] largeDesktop:min-h-[78.75rem]`}>
      {/* <img className="absolute w-full top-0 left-0 z-[3]" src={rectangle1} alt="svg1" />
      <img className="absolute w-full top-0 left-0 z-[2]" src={rectangle2} alt="svg2" />
      <img className="absolute w-full top-0 left-0 z-[1]" src={rectangle3} alt="svg" /> */}
      <img className="block relative w-full" src={triangleColapse} alt="Wavebackground" />
      <div className="w-full top-0 absolute">
        <div className="
        max-w-[1920px]
        mx-auto
        relative z-[5] 
        flex flex-col
        sLaptop:gap-[0.5rem]
        largeDesktop:gap-[1rem]
        sLaptop:pl-[8%] 
        largeDesktop:pl-[10.625rem]
        sLaptop:pt-[8rem]
        mLaptop:pt-[10rem]
        desktop:pt-[12rem]
        largeDesktop:pt-[15rem]
        sLaptop:heroTextSmall
        mLaptop:heroTextMedium
        desktop:heroTextDesktop
        largeDesktop:heroTextLarge
        ">
          <p className="
          sLaptop:text-[4.333rem]
          mLaptop:text-[5.375rem]
          desktop:text-[6.5rem]
          largeDesktop:text-[8.125rem] 
          leading-none
          text-SiteYellow 
          font-bold
          ">WELCOME !</p>

          <p className="
          font-bold 
          sLaptop:text-[2.833rem]
          mLaptop:text-[3.5rem]
          desktop:text-[4.25rem]
          largeDesktop:text-[5.313rem]
          leading-none 
          text-PrimaryWhite
          " >
            <span className="text-SiteYellow" >T</span>o <span className="text-SiteYellow" >M</span>y <span className="text-SiteYellow">P</span>ortfolio
          </p>
          <img className={`
            sLaptop:right-[2%]
            largeDesktop:right-[2.4rem]
            absolute z-[5]
            sLaptop:top-[2.625rem]
            mLaptop:top-[3.313rem] 
            desktop:top-[4rem] 
            largeDesktop:top-[5rem]
            sLaptop:w-[55%]
            largeDesktop:w-[65.25rem]`} src={heroDrawing} alt="" />
             {/* top left */}
            <div className="circle1" />
            {/* second bubble to left */}
            <div className="circle2" />
            {/* third circle */}
            <div className="circle3" />
            {/* 4th Bubble */}
            <div className="circle4" />
        </div>
      </div>
    </div>
  )
}

export default index