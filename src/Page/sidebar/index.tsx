import Character1 from '/assets/character_1.svg';
import HomeIcon from '/assets/homeIcon.svg';
import AboutMeIcon from '/assets/aboutmeIcon.svg';
import PortfolioIcon from '/assets/portfolioIcon.svg';
import ContactMeIcon from '/assets/contactmeIcon.svg';
import HomeIconSelected from '/assets/HomeIconSelected.svg';
import AboutMeIconSelected from '/assets/aboutmeIconSelected.svg';
import PortfolioIconSelected from '/assets/portfolioIconSelected.svg';
import ContactMeIconSelected from '/assets/contactmeIconSelected.svg';
import Doll from './component/doll'
import NavItems from './component/navItems'

const index =() => {

  const svgArray:Record<string,string> = {
    "Home" : HomeIcon,
    "About Me": AboutMeIcon ,
    "Portfolio": PortfolioIcon,
    "Contact Me": ContactMeIcon
  }

  const selectSVGArray:string[] = [
    HomeIconSelected,
    AboutMeIconSelected,
    PortfolioIconSelected,
    ContactMeIconSelected
  ]

  return (
  <div className="
  fixed z-30 left-0 
  sLaptop:py-[0.667rem]
  mLaptop:py-[0.833rem]
  desktop:py-[1rem]
  largeDesktop:py-5
  sLaptop:min-w-[3.333rem] 
  mLaptop:min-w-[4.167rem] 
  desktop:min-w-[5rem] 
  largeDesktop:min-w-[6.25rem] 
  bg-SidebarGray 
  h-[100vh] 
  flex flex-col
  justify-between 
  items-center
  customShadow
  ">
      <Doll character={Character1} />
      <div className='
      flex flex-col 
      items-center w-full
      '>
      {
        Object.entries(svgArray).map(
          ([k,v],index) => 
          <NavItems item={k} imgURLBase={v} imgAlternate={selectSVGArray[index]} key={index} />
        )
      }
      </div>
      {/* blank div just for flex box purposes */}
      <div className="
      blank block 
      sLaptop:w-[2.5rem] 
      mLaptop:w-[3.125rem] 
      desktop:w-[3.75rem] 
      largeDesktop:w-[4.688rem] 
      sLaptop:min-h-[1.657rem]
      mLaptop:min-h-[2.071rem]
      desktop:min-h-[2.485rem]
      largeDesktop:min-h-[3.106rem]">
      </div>
    </div>
  )
}

export default index