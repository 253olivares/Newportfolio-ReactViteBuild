import { memo } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { getCurrentSection,setScrollState, setCurrentSelection } from "../../../../store/sidebarSlice";

const index = memo((
  {
    item,
    imgURLBase,
    imgAlternate
  }: {
    item:string,
    imgURLBase:string
    imgAlternate:string
  }
) => {

  const dispatch  = useAppDispatch()

  const currentSection = useAppSelector(getCurrentSection);

  let section:string =''
  let imgcss:string = ''

  switch (item) {
    case 'Home':
      section="Home"
      imgcss = `w-[1.4061rem] mobile:w-[1.8749rem] sMobile:w-[2.9988rem] mMobile:w-[3.6rem] sLaptop:w-[2.133rem] mLaptop:w-[2.667rem] desktop:w-[3.2rem] largeDesktop:w-[4rem]`
      break;
    case 'About Me':
      section="AboutMe"
      imgcss = `w-[0.9300rem] mobile:w-[1.2401rem] sMobile:w-[1.983373rem] mMobile:w-[2.381rem] sLaptop:w-[1.40238rem] mLaptop:w-[1.74636rem] desktop:w-[2.1168rem] largeDesktop:w-[2.646rem]`
      break;
    case 'Portfolio':
      section = "Portfolio"
      imgcss = `w-[0.9702rem] mobile:w-[1.2937rem] sMobile:w-[2.069172rem] mMobile:w-[2.484rem] sLaptop:w-[1.472rem] mLaptop:w-[1.84rem] desktop:w-[2.208rem] largeDesktop:w-[2.76rem]`
      break;
    case 'Contact Me':
      section = "ContactMe"
      imgcss = `w-[1.265rem] mobile:w-[1.6874rem] sMobile:w-[2.69892rem] mMobile:w-[3.24rem] sLaptop:w-[1.92rem] mLaptop:w-[2.4rem] desktop:w-[2.88rem] largeDesktop:w-[3.6rem]`
      break;
  }


  return (
    <Link className="h-full" to={'/Newportfolio-ReactViteBuild/'}>
        <div 
        onClick={()=>{
          dispatch(setCurrentSelection(section));
          dispatch(setScrollState(item));
        }}
        className={`
        flex flex-col
        h-full
        sLaptop:h-auto
        sLaptop:w-full 
        relative 
        items-center 
        justify-end
        px-[calc(0.8788rem/2)]
        mobile:px-[calc(1.1718rem/2)]
        sMobile:px-[calc(1.87425rem/2)]
        mMobile:px-[calc(2.25rem/2)]
        sLaptop:px-0
        pb-[0.1953rem]
        mobile:pb-[0.2604rem]
        sMobile:pb-[0.4165rem]
        mMobile::pb-[0.5rem]
        sLaptop:py-[calc(1.333rem/2)]
        mLaptop:py-[calc(1.667rem/2)]
        desktop:py-[1rem] 
        largeDesktop:py-[1.25rem]
        ${currentSection !== section && 'group'}
        ${currentSection !== section  ? `cursor-pointer hover:opacity-75`: 'cursor-default'}
         gap-[0.2441rem] mobile:gap-[.3255rem] sMobile:gap-[0.520625rem] mMobile:gap-[0.625rem] sLaptop:gap-[0.333rem] mLaptop:gap-[0.417rem] desktop:gap-[0.5rem] largeDesktop:gap-[0.625rem]`}
        >
          <img className={imgcss} src={currentSection === section ? imgAlternate : imgURLBase} alt={section} />
          <p className={`
          font-medium 
          text-center 
          leading-none
          ${currentSection === section ? ' text-SiteYellow' : 'text-PrimaryWhite'}
          text-PrimaryWhite 
          sLaptop:min-w-[3.333rem] 
          mLaptop:min-w-[4.167rem] 
          desktop:min-w-[5rem] 
          largeDesktop:min-w-[6.25rem]
          text-[0.3957rem]
          mobile:text-[0.5276rem]
          sMobile:text-[0.843829rem]
          mMobile:text-[1.013rem]
          sLaptop:text-[0.6rem] 
          mLaptop:text-[0.75rem] 
          desktop:text-[0.9rem] 
          largeDesktop:text-[1.125rem]
          `}
          >{item}</p>
        <div className={`
        block sLaptop:hidden
        transition-all
        absolute
        bg-SiteYellow
        top-0
        h-[0.1171rem]
        mobile:h-[0.1562rem]
        sMobile:h-[0.2499rem]
        mMobile:h-[.3rem]
        ${currentSection === section ? 
          `
          w-[100%]
          left-0` 
          : 
          `
          w-[0rem] 
          left-[50%] 
          group-hover:w-[50%] 
          group-hover:left-[25%]`
        } 
        `} />

        <div className={`
        hidden sLaptop:block
        transition-all
        absolute 
        ${currentSection === section ? 
          `
          sLaptop:h-[100%] 
          sLaptop:top-0` 
          : 
          `
          sLaptop:h-[0rem] 
          sLaptop:top-[50%] 
          group-hover:sLaptop:h-[50%] 
          group-hover:sLaptop:top-[25%]`
        } 
        sLaptop:w-[.225rem] 
        mLaptop:w-[.25rem]
        desktop:w-[.275rem]
        largeDesktop:w-[.3rem]
        sLaptop:right-0 
        bg-SiteYellow
        `} />
        </div>
    </Link>
  )
})

export default index;