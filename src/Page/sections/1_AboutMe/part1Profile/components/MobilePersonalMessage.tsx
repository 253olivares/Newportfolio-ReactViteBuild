import { useAppSelector } from "../../../../../store/hook"
import { getWindowWidth } from "../../../../../store/sidebarSlice"


const MobilePersonalMessage = () => {

    const width = useAppSelector(getWindowWidth);

  return (
    <div
    className='
    mobilePersonalMessage
    '>
      <p
      data-aos='slide-right'
      data-aos-duration='1250'
      data-aos-delay={
        width <1024 ?
        '1500'
        :
        '500'
      }>
        <span
        className='
        text-[0.781rem]
        mobile:text-[1.041rem]
        sMobile:text-[1.666rem]
        mMobile:text-[2rem]
        text-GrayBackground
        '>
          "
        </span>
        My passion is to draw and code!
        <span
        className='
        text-[0.781rem]
        mobile:text-[1.041rem]
        sMobile:text-[1.666rem]
        mMobile:text-[2rem]
        text-GrayBackground
        '>
          "
        </span>
      </p>
    </div>
  )
}

export default MobilePersonalMessage