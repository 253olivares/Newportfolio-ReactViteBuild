import { memo } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../contextAPI";


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

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const {currentSection, setCurrentSection, setScrollState} = appContext;

  let section:string =''
  let imgcss:string = ''

  switch (item) {
    case 'Home':
      section="Home"
      imgcss = `sLaptop:w-[2.133rem] mLaptop:w-[2.667rem] desktop:w-[3.2rem] largeDesktop:w-[4rem]`
      break;
    case 'About Me':
      section="AboutMe"
      imgcss = `sLaptop:w-[2.133rem] mLaptop:w-[2.667rem] desktop:w-[3.2rem] largeDesktop:w-[4rem]`
      break;
    case 'Portfolio':
      section = "Portfolio"
      imgcss = `sLaptop:w-[1.472rem] mLaptop:w-[1.84rem] desktop:w-[2.208rem] largeDesktop:w-[2.76rem]`
      break;
    case 'Contact Me':
      section = "ContactMe"
      imgcss = `sLaptop:w-[1.92rem] mLaptop:w-[2.4rem] desktop:w-[2.88rem] largeDesktop:w-[3.6rem]`
      break;
  }


  return (
    <Link to={'/Newportfolio-ReactViteBuild/'}>
        <div 
        onClick={()=>{
          setScrollState(section);
          setCurrentSection(section);
        }}
        className={`flex flex-col
        w-full 
        relative items-center 
        sLaptop:py-[calc(1.333rem/2)]
        mLaptop:py-[calc(1.667rem/2)]
        desktop:py-[1rem] 
        largeDesktop:py-[1.25rem]
        ${currentSection !== section && 'group'}
        ${currentSection !== section  ? `cursor-pointer hover:opacity-75`: 'cursor-default'}
        sLaptop:gap-[0.333rem] mLaptop:gap-[0.417rem] desktop:gap-[0.5rem] largeDesktop:gap-[0.625rem]`}
        >
          <img className={imgcss} src={currentSection === section ? imgAlternate : imgURLBase} alt={section} />
          <p className={`
          font-medium 
          text-center 
          ${currentSection === section ? ' text-SiteYellow' : 'text-PrimaryWhite'}
          text-PrimaryWhite 
          sLaptop:min-w-[3.333rem] 
          mLaptop:min-w-[4.167rem] 
          desktop:min-w-[5rem] 
          largeDesktop:min-w-[6.25rem]
          sLaptop:text-[0.6rem] 
          mLaptop:text-[0.75rem] 
          desktop:text-[0.9rem] 
          largeDesktop:text-[1.125rem]
          `}
          >{item}</p>

        <div className={`
        transition-all
        absolute 
        sLaptop:w-[.225rem] 
        mLaptop:w-[.25rem]
        desktop:w-[.275rem]
        largeDesktop:w-[.3rem]
        ${currentSection === section ? 
          'h-[100%] top-0' 
          : 
          'h-[0rem] top-[50%] group-hover:h-[50%] group-hover:top-[25%]'
        } 
        right-0 bg-SiteYellow
        `} />
        </div>
    </Link>
  )
})

export default index;