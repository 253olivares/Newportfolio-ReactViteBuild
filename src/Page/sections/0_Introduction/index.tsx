import { memo, useContext } from "react";
import { AppContext } from "../../contextRefs";
import heroDrawing from '/assets/hero_Drawing.svg'
import triangleColapse from '/assets/trianglePNG.png'
import waveBackgroundMobile from '/assets/HeaderWaveMobile.svg'

const index = memo(() => {
  
  const appContext = useContext(AppContext);
  const {pageRef} = appContext!;

  return (
    <div ref={el =>{
      if(el) pageRef.current['Home'] = el
    }} id="Home" className={`relative w-full sLaptop:min-h-[42rem] mLaptop:min-h-[52.5rem] desktop:min-h-[63rem] largeDesktop:min-h-[78.75rem]`}>
      {/* <img className="absolute w-full top-0 left-0 z-[3]" src={rectangle1} alt="svg1" />
      <img className="absolute w-full top-0 left-0 z-[2]" src={rectangle2} alt="svg2" />
      <img className="absolute w-full top-0 left-0 z-[1]" src={rectangle3} alt="svg" /> */}
      <img className="
      block sLaptop:hidden  
      relative w-full
      " src={waveBackgroundMobile} alt="WavebackgroundMobile" />

      <img className="
      hidden sLaptop:block relative w-full
      " src={triangleColapse} alt="Wavebackground" />

      <div className="w-full top-0 absolute">
        <div className="
        max-w-[1920px]
        mx-auto
        relative z-[5] 
        flex flex-col
        gap-[0.264rem]
        mobile:gap-[0.351rem]
        sMobile:gap-[0.563rem]
        mMobile:gap-[0.675rem]
        sLaptop:gap-[0.5rem]
        largeDesktop:gap-[1rem]
        pl-[3.255%]
        mobile:pl-[06.51%]
        sLaptop:pl-[8%] 
        largeDesktop:pl-[10.625rem]
        pt-[1.221rem]
        mobile:pt-[1.628rem]
        sMobile:pt-[2.604rem]
        mMobile:pt-[3.125rem]
        sLaptop:pt-[8rem]
        mLaptop:pt-[10rem]
        desktop:pt-[12rem]
        largeDesktop:pt-[15rem]
        heroTextMobileTiny
        mobile:heroTextMobile
        sMobile:heroTextSmallMobile
        mMobile:heroTextMediumMobile
        sLaptop:heroTextSmall
        mLaptop:heroTextMedium
        desktop:heroTextDesktop
        largeDesktop:heroTextLarge
        ">
          <p 
          data-aos='slide-right'
          data-aos-duration='1250'
          data-aos-delay='1300'
          className="
          text-[2.285rem]
          mobile:text-[3.047rem]
          sMobile:text-[4.875rem]
          mMobile:text-[5.85rem]
          sLaptop:text-[4.333rem]
          mLaptop:text-[5.375rem]
          desktop:text-[6.5rem]
          largeDesktop:text-[8.125rem] 
          leading-none
          text-SiteYellow 
          font-bold
          ">WELCOME !</p>

          <p 
          data-aos='slide-right'
          data-aos-duration='1250'
          data-aos-delay='1800'
          className="
          font-bold 
          text-[1.494rem]
          mobile:text-[1.992rem]
          sMobile:text-[3.188rem]
          mMobile:text-[3.825rem]
          sLaptop:text-[2.833rem]
          mLaptop:text-[3.5rem]
          desktop:text-[4.25rem]
          largeDesktop:text-[5.313rem]
          leading-none 
          text-PrimaryWhite
          " >
            <span className="text-SiteYellow" >T</span>o <span className="text-SiteYellow" >M</span>y <span className="text-SiteYellow">P</span>ortfolio
          </p>
          <img 
          data-aos='fade'
          data-aos-duration='1250'
          data-aos-delay='800'
          className={`
            right-[3.255%]
            mobile:right-[06.51%]
            sLaptop:right-[2%]
            largeDesktop:right-[2.4rem]
            absolute z-[5]
            top-[5.5rem]
            mobile:top-[7.5rem]
            sMobile:top-[12.49rem]
            mMobile:top-[15.063rem]
            sLaptop:top-[2.625rem]
            mLaptop:top-[3.313rem] 
            desktop:top-[4rem] 
            largeDesktop:top-[5rem]
            extra:top-[12.5rem]
            w-[70%]
            sMobile:w-[67.40%]
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
})

export default index