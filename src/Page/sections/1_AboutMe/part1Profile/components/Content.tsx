import { memo } from "react"
import Education from "./Education"


const Content = () => {
  return (
    <div
            data-aos='slide-left'
            data-aos-duration='1250'
            data-aos-delay='500'
            className='
            personalInfoPart1Holder
            '>
                <Name />

                <TitleCard />

                <Education />
            </div>
  )
}

const TitleCard = memo(()=> {
    return <div className='titleCardHolder'>
        <p className='titleCardHolderText'
        >Programmer, Illustrator, & Designer</p>
    </div>
})

const Name = memo(() => {
    return <h1 className='
    w-fill
    text-center
    text-[1.465rem]
    mobile:text-[1.953rem]
    sMobile:text-[3.125rem]
    mMobile:text-[3.75rem]
    sLaptop:text-[2.850rem]
    mLaptop:text-[3.562rem]
    desktop:text-[4.275rem]
    largeDesktop:text-[5.344rem]
    text-SiteGreen
    leading-none
    font-bold
    '
    >MIGUEL OLIVARES<span
    className='
    text-[1.91rem]
    mobile:text-[2.546rem]
    sMobile:text-[4.074rem]
    mMobile:text-[4.889rem]
    sLaptop:text-[3.466rem]
    mLaptop:text-[4.333rem]
    desktop:text-[5.2rem]
    largeDesktop:text-[6.5rem]
    text-GrayBackground
    font-medium
    '
    >*</span>
    </h1>
})

export default Content