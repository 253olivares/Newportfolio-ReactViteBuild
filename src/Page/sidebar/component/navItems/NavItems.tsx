import { memo } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { getCurrentSection,setScrollState, setCurrentSelection } from "../../../../store/sidebarSlice";

const NavItems = memo((
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
      imgcss = `
      w-[1.841rem] 
      mobile:w-[2.455rem] 
      sMobile:w-[3.928rem] 
      mMobile:w-[4.714rem] 
      sLaptop:w-[2.133rem] 
      mLaptop:w-[2.667rem] 
      desktop:w-[3.2rem] 
      largeDesktop:w-[4rem]
      4k:w-[5.333rem]
      `
      break;
    case 'About Me':
      section="AboutMe"
      imgcss = `
      w-[1.218rem] 
      mobile:w-[1.624rem] 
      sMobile:w-[2.598rem] 
      mMobile:w-[3.118rem] 
      sLaptop:w-[1.40238rem] 
      mLaptop:w-[1.74636rem] 
      desktop:w-[2.1168rem] 
      largeDesktop:w-[2.646rem]
      4k:w-[3.527rem]`
      break;
    case 'Portfolio':
      section = "Portfolio"
      imgcss = `w-[1.271rem] 
      mobile:w-[1.694rem] 
      sMobile:w-[2.711rem] 
      mMobile:w-[3.253rem] 
      sLaptop:w-[1.472rem] 
      mLaptop:w-[1.84rem] 
      desktop:w-[2.208rem] 
      largeDesktop:w-[2.76rem]
      4k:w-[3.679rem]`
      break;
    case 'Contact Me':
      section = "ContactMe"
      imgcss = `w-[1.658rem] 
      mobile:w-[2.209rem] 
      sMobile:w-[3.536rem] 
      mMobile:w-[4.243rem] 
      sLaptop:w-[1.92rem] 
      mLaptop:w-[2.4rem] 
      desktop:w-[2.88rem] 
      largeDesktop:w-[3.6rem]
      4k:w-[4.799rem]`
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
        px-[calc(1.151rem/2)]
        mobile:px-[calc(1.534rem/2)]
        sMobile:px-[calc(2.455rem/2)]
        mMobile:px-[calc(2.946rem/2)]
        sLaptop:px-0
        pb-[0.325rem]
        mobile:pb-[0.475rem]
        sMobile:pb-[0.729rem]
        mMobile::pb-[0.868rem]
        sLaptop:py-[calc(1.333rem/2)]
        mLaptop:py-[calc(1.667rem/2)]
        desktop:py-[1rem] 
        largeDesktop:py-[1.25rem]
        4k:py-[1.666rem]
        ${currentSection !== section && 'group'}
        ${currentSection !== section  ? `cursor-pointer hover:opacity-75`: 'cursor-default'}
         gap-[0.288rem] 
         mobile:gap-[0.384rem] 
         sMobile:gap-[0.614rem]
        mMobile:gap-[0.736rem] 
        sLaptop:gap-[0.333rem] 
        mLaptop:gap-[0.417rem] 
        desktop:gap-[0.5rem] 
        largeDesktop:gap-[0.625rem]
        4k:gap-[0.833rem]
        `}
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
          4k:min-w-[8.333rem]
          text-[0.518rem]
          mobile:text-[0.691rem]
          sMobile:text-[1.105rem]
          mMobile:text-[1.326rem]
          sLaptop:text-[0.6rem] 
          mLaptop:text-[0.75rem] 
          desktop:text-[0.9rem] 
          largeDesktop:text-[1.125rem]
          4k:text-[1.5rem]
          `}
          >{item}</p>

        <YellowBarMobile bool = {currentSection === section}/>

        <YellowBarDesktop bool ={currentSection === section} />

        </div>
    </Link>
  )
})

const YellowBarMobile = memo(({
  bool
}: {bool:boolean})=> {
  return <div className={`
  block sLaptop:hidden
  transition-all
  absolute
  bg-SiteYellow
  top-0
  h-[0.1171rem]
  mobile:h-[0.1562rem]
  sMobile:h-[0.2499rem]
  mMobile:h-[.3rem]
  ${bool ? 
    `
    w-[100%]
    left-0` 
    : 
    `
    w-[0rem] 
    left-[50%] `
  } 
  `} />
})

const YellowBarDesktop = memo(({
  bool
}: {bool:boolean}) => {
  return <div className={`
  hidden sLaptop:block
  transition-all
  absolute 
  ${bool ? 
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
  4k:w-[0.399rem]
  sLaptop:right-0 
  bg-SiteYellow
  `} />
})

export default NavItems;