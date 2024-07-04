import { memo } from 'react';
import Icons from './Icons';
import Character2 from '/assets/character_2.svg';
import github from '/assets/github.svg';
import instagram from '/assets/instagram.svg';
import linkedIn from '/assets/linkedin.svg';

const BottomFooter = memo(() => {

    const links:Record<string,string> = {
        "https://github.com/253olivares":github, 
        "https://www.instagram.com/carne_asada_wf/":instagram, 
        "https://www.linkedin.com/in/253olivares/" : linkedIn 
      }

  return (
    <div className="
        w-full 
        bg-SidebarGray
        ">
        <div className="
           footerItemsHolder
           ">
            <Character />
            <div className="flex gap-[0.769rem] mobile:gap-[1.026rem] sMobile:gap-[1.642rem] mMobile:gap-[1.97rem] sLaptop:gap-[1.5rem] mLaptop:gap-[1.875rem] desktop:gap-[2.25rem] largeDesktop:gap-[2.813rem]">
              {
                Object.entries(links).map(([k,v],index) => 
                    <Icons key={k} pos={index} src1={k} src2={v} />
                )
              }
            </div>
        </div>
    </div>
  )
})

const Character = () => {
    return <img className="
    w-[3.113rem]
    mobile:w-[4.15rem]
    sMobile:w-[6.64rem]
    mMobile:w-[7.968rem]
    sLaptop:w-[5.5rem]
    mLaptop:w-[7.25rem]
    desktop:w-[8.75rem]
    largeDesktop:w-[10rem]
    " src={Character2} alt="Character_2" />
}

export default BottomFooter