import triangle from '/assets/Triangle.svg'
import profile from '/assets/profileImage.svg'
import bracketLeft from '/assets/leftBraket.svg'
import braketRight from '/assets/rightBraket.svg'
import moneySign from '/assets/dollarSign.svg'
import { memo } from 'react'

const index = memo(() => {

  return (
    <div className="partOneCSS">
        <div className="w-fill relative flex flex-col">
          <div className="relative sLaptop:pl-[calc(3.6%-1.4rem)] mLaptop:pl-[calc(3.6%-1.65rem)] desktop:pl-[calc(3.6%-2rem)] largeDesktop:pl-[calc(3.6%-2.45rem)] extra:pl-0  extra:w-full extra:max-w-[1920px] extra:mx-auto">
            <h1 className="
            flex
            items-center
            sectionCSS
            "><img 
            className='
            sLaptop:w-[1rem]
            sLaptop:mr-[.4rem]
            mLaptop:w-[1.25rem]
            mLaptop:mr-[.4rem]
            desktop:w-[1.4rem]
            desktop:mr-[.6rem]
            largeDesktop:w-[1.65rem]
            largeDesktop:mr-[.8rem]
            '
            src={bracketLeft} alt="" />
            <span
            data-aos='fade'
            data-aos-duration='1250'
            data-aos-delay='0'
            >
              ABOUT ME! 
            </span>
            <img 
            className='
            sLaptop:w-[1rem]
            sLaptop:ml-[.4rem]
            mLaptop:w-[1.25rem]
            mLaptop:ml-[.4rem]
            desktop:w-[1.4rem]
            desktop:ml-[.6rem]
            largeDesktop:w-[1.65rem]
            largeDesktop:ml-[.8rem]
            '
            src={braketRight} alt="" /></h1>
          </div>
          <div className='w-full 
          sLaptop:pt-[3.379rem]
          mLaptop:pt-[4.396rem]
          desktop:pt-[5.25rem]
          largeDesktop:pt-[6.563rem]
          flex flex-row
          justify-between
          '>
            <div
            data-aos='slide-right'
            data-aos-duration='1250'
            data-aos-delay='500'
            className='
            bg-SiteGreen 
            min-h-32 w-[39.94%] 
            sLaptop:rounded-r-[0.267rem]
            mLaptop:rounded-r-[0.333rem]
            desktop:rounded-r-[0.4rem]
            largeDesktop:rounded-r-[0.5rem]
            sLaptop:pr-[2.4rem]
            mLaptop:pr-[3rem]
            desktop:pr-[3.6rem]
            largeDesktop:pr-[4.5rem]
            sLaptop:py-[1.733rem]
            mLaptop:py-[2.167rem]
            desktop:py-[2.6rem]
            largeDesktop:py-[3.25rem]
            sLaptop:divSmallShadow
            mLaptop:divMediumShadow
            desktop:divDesktopShadow
            largeDesktop:divLargeDesktopShadow
            flex justify-end items-center
            '>
                <img className='
                sLaptop:w-[13.333rem]
                mLaptop:w-[16.667rem]
                desktop:w-[20rem]
                largeDesktop:w-[25rem]
                ' src={profile} alt="My_Profile_Image" /> 
            </div>
            <div
            data-aos='slide-left'
            data-aos-duration='1250'
            data-aos-delay='500'
            className='
            min-h-32 w-[57.69%]'>
                <h1 className='
                sLaptop:text-[3.167rem]
                mLaptop:text-[3.958rem]
                desktop:text-[4.75rem]
                largeDesktop:text-[5.938rem]
                text-SiteGreen
                leading-none
                font-bold
                '
                >MIGUEL OLIVARES<span
                className='
                sLaptop:text-[4rem]
                mLaptop:text-[5rem]
                desktop:text-[6rem]
                largeDesktop:text-[7.5rem]
                text-GrayBackground
                font-medium
                '
                >*</span></h1>
                <div className='
                sLaptop:mt-[0.233rem]
                mLaptop:mt-[0.313rem]
                desktop:mt-[0.35rem]
                largeDesktop:mt-[0.438rem]
                w-full
                sLaptop:rounded-l-[0.267rem]
                mLaptop:rounded-l-[0.333rem] 
                desktop:rounded-l-[0.4rem]
                largeDesktop:rounded-l-[0.5rem]
                flex items-center 
                justify-start 
                bg-SiteYellow
                sLaptop:divSmallShadow
                mLaptop:divMediumShadow
                desktop:divDesktopShadow
                largeDesktop:divLargeDesktopShadow
                '>
                    <p
                    className='
                    sLaptop:text-[1.833rem]
                    mLaptop:text-[2.292rem]
                    desktop:text-[2.75rem]
                    largeDesktop:text-[3.438rem]
                    sLaptop:px-[0.933rem]
                    mLaptop:px-[1.167rem]
                    desktop:px-[1.4rem]
                    largeDesktop:px-[1.75rem]
                    sLaptop:py-[1rem]
                    mLaptop:py-[1.15rem]
                    desktop:py-[1.5rem]
                    largeDesktop:py-[1.875rem]
                    text-PrimaryWhite
                    font-bold
                    leading-none
                    '
                    >PROGRAMMER, ILLUSTRATOR, & Designer</p>
                </div>
                <div className='flex flex-col
                sLaptop:pt-[0.877rem]
                mLaptop:pt-[1.167rem]
                desktop:pt-[1.4rem]
                largeDesktop:pt-[1.75rem]

                sLaptop:gap-[.5rem]
                mLaptop:gap-[0.625rem]
                desktop:gap-[0.75rem]
                largeDesktop:gap-[0.938rem]

                relative
                '> 
                  <div className='
                  absolute
                  bg-SiteYellow
                  sLaptop:w-[9.533rem]
                  mLaptop:w-[11.917rem]
                  desktop:w-[14.3rem]
                  largeDesktop:w-[17.875rem]
                  sLaptop:h-[0.5rem]
                  mLaptop:h-[0.625rem]
                  desktop:h-[0.75rem]
                  largeDesktop:h-[0.938rem]
                  top-[3.156rem]
                  sLaptop:left-[16.717rem]
                  mLaptop:left-[22.458rem]
                  desktop:left-[26.95rem]
                  largeDesktop:left-[33.688rem]
                  rounded-full
                  ' />
                  <div className='
                  absolute
                  bg-SiteYellow
                  sLaptop:w-[8.533rem]
                  mLaptop:w-[10.667rem]
                  desktop:w-[12.8rem]
                  largeDesktop:w-[16rem]
                  sLaptop:h-[0.5rem]
                  mLaptop:h-[0.625rem]
                  desktop:h-[0.75rem]
                  largeDesktop:h-[0.938rem]
                  top-[5.406rem]
                  sLaptop:left-[24.135rem]
                  mLaptop:left-[30.167rem]
                  desktop:left-[36.2rem]
                  largeDesktop:left-[45.25rem]
                  rounded-full
                  ' />
                  <div className='flex flex-col
                  sLaptop:gap-[0.333rem]
                  mLaptop:gap-[0.438rem]
                  desktop:gap-[.5rem]
                  largeDesktop:gap-[0.625rem]
                  '>
                      <h3 className='
                      sLaptop:text-[2rem]
                      mLaptop:text-[2.5rem]
                      desktop:text-[3rem]
                      largeDesktop:text-[3.75rem]
                      font-semibold
                      text-SidebarGray
                      leading-none
                      '>Bachelors:</h3>
                      <p className='
                      sLaptop:text-[1.667rem]
                      mLaptop:text-[2.083rem]
                      desktop:text-[2.5rem]
                      largeDesktop:text-[3.125rem]
                      font-semibold
                      text-SiteGreen
                      leading-none
                      '>Informatics & MAS</p>
                  </div>
                  <div className='flex flex-col
                  sLaptop:gap-[0.333rem]
                  mLaptop:gap-[0.438rem]
                  desktop:gap-[.5rem]
                  largeDesktop:gap-[0.625rem]
                  '>
                      <h3 className='
                      sLaptop:text-[2rem]
                      mLaptop:text-[2.5rem]
                      desktop:text-[3rem]
                      largeDesktop:text-[3.75rem]
                      font-semibold
                      text-SidebarGray
                      leading-none
                      '>School:</h3>
                      <p className='
                      sLaptop:text-[1.667rem]
                      mLaptop:text-[2.083rem]
                      desktop:text-[2.5rem]
                      largeDesktop:text-[3.125rem]
                      font-semibold
                      text-SiteGreen
                      leading-none
                      '>IUPUI 2018-2022</p>
                  </div>
                </div>
            </div>
          </div>
          <div className='flex 
            pl-[7.03%]
            largeDesktop:pl-[8.063rem]
            sLaptop:pt-[1.1rem]
            mLaptop:pt-[1.375rem]
            desktop:pt-[1.65rem]
            largeDesktop:pt-[2.063rem]
            sLaptop:pb-[13.579rem]
            mLaptop:pb-[16.958rem]
            desktop:pb-[20.338rem]
            largeDesktop:pb-[25.438rem]
            sLaptop:text-[1.333rem]
            mLaptop:text-[1.667rem]
            desktop:text-[2rem]
            largeDesktop:text-[2.5rem]
            extra:w-full
            extra:max-w-[1920px]
            extra:mx-auto
            font-medium
            leading-none
          '>
            <p><span className='
            sLaptop:text-[2rem]
            mLaptop:text-[2.5rem]
            desktop:text-[3rem]
            largeDesktop:text-[3.75rem]
            text-GrayBackground
            ' >"</span>
            My passion is to draw and code!
            <span className='
            sLaptop:text-[2rem]
            mLaptop:text-[2.5rem]
            desktop:text-[3rem]
            largeDesktop:text-[3.75rem]
            text-GrayBackground
            '>"</span></p>
          </div>
        </div>
        <span className='
        absolute
        sLaptop:top-[31.633rem]
        mLaptop:top-[39.542rem]
        desktop:top-[47.45rem]
        largeDesktop:top-[59.313rem]
        left-[23%]
        font-medium
        sLaptop:text-[11.92rem]
        mLaptop:text-[14.9rem]
        desktop:text-[17.88rem]
        largeDesktop:text-[22.35rem]
        text-GrayBackground
        '>*</span>
        <img className=' absolute 
        right-[15.26%]
        sLaptop:w-[2.633rem]
        mLaptop:w-[3.292rem]
        desktop:w-[3.95rem]
        largeDesktop:w-[4.938rem]
        top-0 
        ' src={moneySign} alt="DollarSign" />
        <img className=' absolute
        right-[34.37%]
        sLaptop:top-[32.5rem]
        mLaptop:top-[40.625rem]
        desktop:top-[48.75rem]
        largeDesktop:top-[60.938rem]
        sLaptop:w-[3.233rem]
        mLaptop:w-[4.042rem]
        desktop:w-[4.85rem]
        largeDesktop:w-[6.063rem]
        '
        src={moneySign} alt="DollarSign2" />
        <img className='absolute 
        sLaptop:w-[1.313rem]
        mLaptop:w-[1.688rem]
        desktop:w-[2rem] 
        largeDesktop:w-[2.5rem] 
        left-[44.53%] 
        sLaptop:top-[3.54rem]
        mLaptop:top-[4.417rem]
        desktop:top-[5.313rem]
        largeDesktop:top-[6.625rem]' src={bracketLeft} alt="Left_Bracket_background" />
        <img className='absolute 
        sLaptop:w-[1.313rem]
        mLaptop:w-[1.688rem]
        desktop:w-[2rem] 
        largeDesktop:w-[2.5rem] 
        right-[07.13%] 
        sLaptop:top-[26.3rem]
        mLaptop:top-[32.875rem]
        desktop:top-[39.438rem]
        largeDesktop:top-[49.313rem]'  src={braketRight} alt="Right_Bracket_background" />
        <img className="
        imgCSS" src={triangle}/>
      </div>
  )
})

export default index