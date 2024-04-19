import triangle from '/assets/Triangle.svg'
import profile from '/assets/profileImage.svg'

const index = () => {
  return (
    <div className="partOneCSS">
        <div className="w-fill flex flex-col">
          <div className="relative pl-[3.6%] extra:pl-0 extra:w-full extra:max-w-[1920px] extra:mx-auto">
            <h1 className="
            sectionCSS
            ">ABOUT ME!</h1>
          </div>
          <div className='w-full 
          sLaptop:pt-[3.379rem]
          mLaptop:pt-[4.396rem]
          desktop:pt-[5.25rem]
          largeDesktop:pt-[6.563rem]
          flex flex-row
          justify-between
          '>
            <div className='bg-SiteGreen 
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
            <div className='min-h-32 w-[57.69%]'>
                <h1 className='
                sLaptop:text-[3.167rem]
                mLaptop:text-[3.958rem]
                desktop:text-[4.75rem]
                largeDesktop:text-[5.938rem]
                text-SiteGreen
                leading-none
                font-bold
                '
                >MIGUEL OLIVARES</h1>
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
                '>
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
        <img className="
        imgCSS" src={triangle}/>
      </div>
  )
}

export default index