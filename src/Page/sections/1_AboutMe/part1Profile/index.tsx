import { memo, useContext } from 'react'
import { AppContext } from '../../../contextRefs'
import { useAppSelector } from '../../../../store/hook';
import { getWindowWidth } from '../../../../store/sidebarSlice';

const index = memo(() => {

  const appContext = useContext(AppContext);
  const {triangle,mobileTriangle,profile,bracketLeft,bracketRight, moneySign} = appContext!;

  const width = useAppSelector(getWindowWidth);

  return (
    <div className="
    partOneCSS
    ">
        <div className="w-fill relative flex flex-col">
          <div className="relative 
          mt-[1.465rem]
          mobile:mt-[1.953rem]
          sMobile:mt-[3.125rem]
          mMobile:mt-[3.75rem]
          sLaptop:mt-0
          pl-[calc(6.51%-0.488rem)]
          mobile:pl-[calc(6.51%-0.651rem)]
          sMobile:pl-[calc(6.51%-1.041rem)]
          mMobile:pl-[calc(6.51%-1.25rem)]
          sLaptop:pl-[calc(3.6%-1.4rem)] 
          mLaptop:pl-[calc(3.6%-1.65rem)] 
          desktop:pl-[calc(3.6%-2rem)] 
          largeDesktop:pl-[calc(3.6%-2.45rem)] 
          extra:pl-0  
          extra:w-full 
          extra:max-w-[1920px] 
          extra:mx-auto">
            <h1 className="
            flex
            items-center
            sectionCSS
            "><img 
            className='
            w-[0.488rem]
            mr-[0.244rem]
            mobile:w-[0.651rem]
            mobile:mr-[0.325rem]
            sMobile:w-[1.041rem]
            sMobile:mr-[0.520rem]
            mMobile:w-[1.25rem]
            mMobile:mr-[0.625rem]
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
            data-aos-delay={
              width <1024 ?
              '1300'
              :
              '0'
            }
            >
              ABOUT ME! 
            </span>
            <img 
            className='
            w-[0.488rem]
            ml-[0.244rem]
            mobile:w-[0.651rem]
            mobile:ml-[0.325rem]
            sMobile:w-[1.041rem]
            sMobile:ml-[0.520rem]
            mMobile:w-[1.25rem]
            mMobile:ml-[0.625rem]
            sLaptop:w-[1rem]
            sLaptop:ml-[.4rem]
            mLaptop:w-[1.25rem]
            mLaptop:ml-[.4rem]
            desktop:w-[1.4rem]
            desktop:ml-[.6rem]
            largeDesktop:w-[1.65rem]
            largeDesktop:ml-[.8rem]
            '
            src={bracketRight} alt="" /></h1>
          </div>
          <div className='
          w-full 
          pt-[1.207rem]
          mobile:pt-[1.651rem]
          sMobile:pt-[2.604rem]
          mMobile:pt-[3.125rem]
          sLaptop:pt-[3.379rem]
          mLaptop:pt-[4.396rem]
          desktop:pt-[5.25rem]
          largeDesktop:pt-[6.563rem]
          sLaptop:flex flex-row
          justify-between
          '>
            <div
            data-aos='slide-right'
            data-aos-duration='1250'
            data-aos-delay={
              width <1024 ?
              '1500'
              :
              '500'
            }
            className='
            bg-SiteGreen 
            sLaptop:min-h-32 
            w-[76.69%]
            sLaptop:w-[39.94%] 
            rounded-r-[0.117rem]
            mobile:rounded-r-[0.156rem]
            sMobile:rounded-r-[0.249rem]
            mMobile:rounded-r-[0.299rem]
            sLaptop:rounded-r-[0.267rem]
            mLaptop:rounded-r-[0.333rem]
            desktop:rounded-r-[0.4rem]
            largeDesktop:rounded-r-[0.5rem]
            sLaptop:pr-[2.4rem]
            mLaptop:pr-[3rem]
            desktop:pr-[3.6rem]
            largeDesktop:pr-[4.5rem]
            py-[0.561rem]
            mobile:py-[0.749rem]
            sMobile:py-[1.198rem]
            mMobile:py-[1.438rem]
            sLaptop:py-[1.733rem]
            mLaptop:py-[2.167rem]
            desktop:py-[2.6rem]
            largeDesktop:py-[3.25rem]
            divTinyShadow
            mobile:divMobileShadow
            sMobile:divsMobileShadow
            mMobile:divmMobileShadow
            sLaptop:divSmallShadow
            mLaptop:divMediumShadow
            desktop:divDesktopShadow
            largeDesktop:divLargeDesktopShadow
            flex 
            justify-end 
            items-center
            '>
                <img className='
                mr-[12.93%]
                w-[43.60%]
                sLaptop:mr-0
                sLaptop:w-[13.333rem]
                mLaptop:w-[16.667rem]
                desktop:w-[20rem]
                largeDesktop:w-[25rem]
                ' src={profile} alt="My_Profile_Image" /> 
            </div>
            <div
            className='
            flex
            sLaptop:hidden
            w-full justify-center
            pt-[0.610rem]
            mobile:pt-[0.814rem]
            sMobile:pt-[1.302rem]
            mMobile:pt-[1.563rem]
            text-[0.628rem]
            mobile:text-[0.837rem]
            sMobile:text-[1.339rem]
            mMobile:tet-[1.608rem]
            font-medium
            leading-none
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
            {/*  
            w-[93.48%]
            ml-[calc(100%-93.48%)]
            */}
            <div
            data-aos='slide-left'
            data-aos-duration='1250'
            data-aos-delay='500'
            className='
            relatives
            sLaptop:min-h-32 
            w-full
            sLaptop:w-[57.69%]
            mt-[0.488rem]
            mobile:mt-[0.651rem]
            sMobile:mt-[1.041rem]
            mMobile:mt-[1.25rem]
            sLaptop:mt-0
            '>
                <h1 className='
                w-fill
                text-center
                text-[1.465rem]
                mobile:text-[1.953rem]
                sMobile:text-[3.125rem]
                mMobile:text-[3.75rem]
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
                text-[1.91rem]
                mobile:text-[2.546rem]
                sMobile:text-[4.074rem]
                mMobile:text-[4.889rem]
                sLaptop:text-[4rem]
                mLaptop:text-[5rem]
                desktop:text-[6rem]
                largeDesktop:text-[7.5rem]
                text-GrayBackground
                font-medium
                '
                >*</span></h1>
                <div className='
                mt-[0.304rem]
                mobile:mt-[0.447rem]
                sMobile:mt-[0.677rem]
                mMobile:mt-[0.813rem]
                sLaptop:mt-[0.233rem]
                mLaptop:mt-[0.313rem]
                desktop:mt-[0.35rem]
                largeDesktop:mt-[0.438rem]
                w-[93.48%]
                ml-[calc(100%-93.48%)]
                sLaptop:ml-0
                sLaptop:w-full
                rounded-l-[0.117rem]
                mobile:rounded-l-[0.156rem]
                sMobile:rounded-l-[0.249rem]
                mMobile:rounded-l-[0.299rem]
                sLaptop:rounded-l-[0.267rem]
                mLaptop:rounded-l-[0.333rem] 
                desktop:rounded-l-[0.4rem]
                largeDesktop:rounded-l-[0.5rem]
                flex 
                items-center 
                relative
                justify-end
                sLaptop:justify-start
                bg-SiteYellow
                divTinyShadow
                mobile:divMobileShadow
                sMobile:divsMobileShadow
                mMobile:divmMobileShadow
                sLaptop:divSmallShadow
                mLaptop:divMediumShadow
                desktop:divDesktopShadow
                largeDesktop:divLargeDesktopShadow
                '>
                    <p
                    className='
                    text-[0.928rem]
                    mobile:text-[1.237rem]
                    sMobile:text-[1.979rem]
                    mMobile:text-[2.375rem]
                    sLaptop:text-[1.833rem]
                    mLaptop:text-[2.292rem]
                    desktop:text-[2.75rem]
                    largeDesktop:text-[3.438rem]
                    pr-[calc(53.48%-7.313rem)]
                    mobile:pr-[calc(53.48%-9.746rem)]
                    sMobile:pr-[calc(53.48%-15.594rem)]
                    mMobile:pr-[calc(53.48%-18.716rem)]
                    sLaptop:px-[0.933rem]
                    mLaptop:px-[1.167rem]
                    desktop:px-[1.4rem]
                    largeDesktop:px-[1.75rem]
                    py-[0.366rem]
                    mobile:py-[0.488rem]
                    sMobile:py-[0.781rem]
                    mMobile:py-[0.938rem]
                    sLaptop:py-[1rem]
                    mLaptop:py-[1.15rem]
                    desktop:py-[1.5rem]
                    largeDesktop:py-[1.875rem]
                    text-PrimaryWhite
                    font-bold
                    leading-none
                    '
                    >Programmer, Illustrator, & Designer</p>
                </div>
                <div className='
                flex flex-col
                pt-[0.733rem]
                mobile:pt-[0.976rem]
                sMobile:pt-[1.563rem]
                mMobile:pt-[1.875rem]
                sLaptop:pt-[0.877rem]
                mLaptop:pt-[1.167rem]
                desktop:pt-[1.4rem]
                largeDesktop:pt-[1.75rem]

                pl-[8.98%]
                sLaptop:ml-auto

                gap-[0.253rem]
                mobile:gap-[0.338rem]
                sMobile:gap-[0.54rem]
                mMobile:gap-[0.648rem]
                sLaptop:gap-[.5rem]
                mLaptop:gap-[0.625rem]
                desktop:gap-[0.75rem]
                largeDesktop:gap-[0.938rem]

                relative
                w-full
                sLaptop:w-auto
                '> 
                  <div className='
                  absolute
                  bg-SiteYellow
                  w-[22.23%]
                  sLaptop:w-[9.533rem]
                  mLaptop:w-[11.917rem]
                  desktop:w-[14.3rem]
                  largeDesktop:w-[17.875rem]
                  h-[0.219rem]
                  mobile:h-[0.291rem]
                  sMobile:h-[0.466rem]
                  mMobile:h-[0.56rem]
                  sLaptop:h-[0.5rem]
                  mLaptop:h-[0.625rem]
                  desktop:h-[0.75rem]
                  largeDesktop:h-[0.938rem]
                  sLaptop:top-[3.156rem]
                  right-[16.68%]
                  sLaptop:right-auto
                  sLaptop:left-[16.717rem]
                  mLaptop:left-[22.458rem]
                  desktop:left-[26.95rem]
                  largeDesktop:left-[33.688rem]
                  rounded-full
                  ' />
                  <div className='
                  absolute
                  bg-SiteYellow
                  w-[19.90%]
                  sLaptop:w-[8.533rem]
                  mLaptop:w-[10.667rem]
                  desktop:w-[12.8rem]
                  largeDesktop:w-[16rem]

                  h-[0.219rem]
                  mobile:h-[0.291rem]
                  sMobile:h-[0.466rem]
                  mMobile:h-[0.56rem]
                  sLaptop:h-[0.5rem]
                  mLaptop:h-[0.625rem]
                  desktop:h-[0.75rem]
                  largeDesktop:h-[0.938rem]
                  
                  top-[1.254rem]
                  mobile:top-[1.673rem]
                  sMobile:top-[2.676rem]
                  mMobile:top-[3.211rem]

                  sLaptop:top-[5.406rem]

                  right-[4.63%]
                  sLaptop:right-auto
                  sLaptop:left-[24.135rem]
                  mLaptop:left-[30.167rem]
                  desktop:left-[36.2rem]
                  largeDesktop:left-[45.25rem]
                  rounded-full
                  ' />
                  <div className='
                  flex flex-col
                  gap-[0.169rem]
                  mobile:gap-[0.225rem]
                  sMobile:gap-[0.36rem]
                  mMobile:gap-[0.433rem]
                  sLaptop:gap-[0.333rem]
                  mLaptop:gap-[0.438rem]
                  desktop:gap-[.5rem]
                  largeDesktop:gap-[0.625rem]
                  '>
                      <h3 className='
                      text-[1.013rem]
                      mobile:text-[1.351rem]
                      sMobile:text-[2.161rem]
                      mMobile:text-[2.593rem]
                      sLaptop:text-[2rem]
                      mLaptop:text-[2.5rem]
                      desktop:text-[3rem]
                      largeDesktop:text-[3.75rem]
                      font-semibold
                      text-SidebarGray
                      leading-none
                      '>Bachelors:</h3>
                      <p className='
                      text-[0.844rem]
                      mobile:text-[1.126rem]
                      sMobile:text-[1.801rem]
                      mMobile:text-[2.161rem]
                      sLaptop:text-[1.667rem]
                      mLaptop:text-[2.083rem]
                      desktop:text-[2.5rem]
                      largeDesktop:text-[3.125rem]
                      font-semibold
                      text-SiteGreen
                      leading-none
                      '>Informatics & MAS</p>
                  </div>
                  <div className='
                  flex flex-col
                  gap-[0.169rem]
                  mobile:gap-[0.225rem]
                  sMobile:gap-[0.36rem]
                  mMobile:gap-[0.433rem]
                  sLaptop:gap-[0.333rem]
                  mLaptop:gap-[0.438rem]
                  desktop:gap-[.5rem]
                  largeDesktop:gap-[0.625rem]
                  '>
                      <h3 className='
                      text-[1.013rem]
                      mobile:text-[1.351rem]
                      sMobile:text-[2.161rem]
                      mMobile:text-[2.593rem]
                      sLaptop:text-[2rem]
                      mLaptop:text-[2.5rem]
                      desktop:text-[3rem]
                      largeDesktop:text-[3.75rem]
                      font-semibold
                      text-SidebarGray
                      leading-none
                      '>School:</h3>
                      <p className='
                      text-[0.844rem]
                      mobile:text-[1.126rem]
                      sMobile:text-[1.801rem]
                      mMobile:text-[2.161rem]
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
          <div className='
            hidden
            sLaptop:flex 
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
            <p
            data-aos='slide-right'
            data-aos-duration='1250'
            data-aos-delay='500'
            ><span className='
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
        hidden
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
        <img className=' 
        absolute 
        right-[7.94%]
        sLaptop:right-[15.26%]
        w-[1.587rem]
        mobile:w-[2.116rem]
        sMobile:w-[3.375rem]
        mMobile:w-[4.063rem]
        sLaptop:w-[2.633rem]
        mLaptop:w-[3.292rem]
        desktop:w-[3.95rem]
        largeDesktop:w-[4.938rem]
        top-[0.368rem]
        mobile:top-[0.491rem]
        sMobile:top-[0.786rem]
        mMobile:top-[0.943rem]
        sLaptop:top-0 
        ' src={moneySign} alt="DollarSign" />
        <img className=' absolute
        right-[23.22%]
        sLaptop:right-[34.37%]
        top-[80%]
        sLaptop:top-[32.5rem]
        mLaptop:top-[40.625rem]
        desktop:top-[48.75rem]
        largeDesktop:top-[60.938rem]
        w-[1.245rem]
        mobile:w-[1.66rem]
        sMobile:w-[2.656rem]
        mMobile:w-[3.188rem]
        sLaptop:w-[3.233rem]
        mLaptop:w-[4.042rem]
        desktop:w-[4.85rem]
        largeDesktop:w-[6.063rem]
        '
        src={moneySign} alt="DollarSign2" />
        <img className='
        absolute 
        w-[0.585rem]
        mobile:w-[0.700rem]
        sMobile:w-[1.249rem]
        mMobile:w-[1.5rem]
        sLaptop:w-[1.313rem]
        mLaptop:w-[1.688rem]
        desktop:w-[2rem] 
        largeDesktop:w-[2.5rem] 
        left-[6.51%]
        sLaptop:left-[44.53%] 
        bottom-[40%]
        sLaptop:bottom-0
        sLaptop:top-[3.54rem]
        mLaptop:top-[4.417rem]
        desktop:top-[5.313rem]
        largeDesktop:top-[6.625rem]' src={bracketLeft} alt="Left_Bracket_background" />
        <img className='
        absolute 
        w-[0.585rem]
        mobile:w-[0.700rem]
        sMobile:w-[1.249rem]
        mMobile:w-[1.5rem]
        sLaptop:w-[1.313rem]
        mLaptop:w-[1.688rem]
        desktop:w-[2rem] 
        largeDesktop:w-[2.5rem] 
        left-[6.51%]
        sLaptop:left-auto
        sLaptop:right-[07.13%] 
        top-[87.5%]
        sLaptop:top-[26.3rem]
        mLaptop:top-[32.875rem]
        desktop:top-[39.438rem]
        largeDesktop:top-[49.313rem]'  src={bracketRight} alt="Right_Bracket_background" />
        <img 
        className='
        block
        sLaptop:hidden
        w-full
        absolute
        bottom-0
        right-0
        '
        src={mobileTriangle} alt="MobileTriangle" />
        <img className="
        hidden sLaptop:block
        imgCSS" src={triangle}/>
      </div>
  )
})

export default index