import resume from '/Olivares_Resume2024_Current.pdf';
import downloadSVG from '/assets/downloadResume.svg';
import { memo } from 'react';

const index = memo(() => {
  return (
        <div 
        data-aos='slide-left'
        data-aos-duration='1250'
        data-aos-delay='500'
        className="
            w-[93.49%]
            ml-[calc(100%-93.49%)]
            sLaptop:ml-0
            sLaptop:w-[48%] 
            flex 
            items-center
            sLaptop:justify-normal

            pl-[15.84%]
            sLaptop:px-[5rem]
            mLaptop:px-[6.25rem]
            desktop:px-[7.5rem]
            largeDesktop:px-[9.375rem]

            mt-[1.953rem] mobile:mt-[2.604rem] sMobile:mt-[4.166rem] mMobile:mt-[5rem]
            sLaptop:mt-[1.421rem] mLaptop:mt-[1.792rem] desktop:mt-[2.163rem] largeDesktop:mt-[2.688rem]

            contactDivShadowmTiny mobile:contactDivShadowMobile sMobile:contactDivShadowsMobile mMobile:contactDivShadowmMobile
            sLaptop:contactDivShadowSmall mLaptop:contactDivShadowMedium desktop:contactDivShadowDesktop largeDesktop:contactDivShadowLarge

            rounded-l-[0.223rem] mobile:rounded-l-[0.297rem] sMobile:rounded-l-[0.474rem] mMobile:rounded-l-[0.569rem]
            sLaptop:rounded-l-[0.54rem] mLaptop:rounded-l-[0.675rem] desktop:rounded-l-[0.81rem] largeDesktop:rounded-l-[1.013rem]

            h-[13.526rem] mobile:h-[18.034rem] sMobile:h-[28.854rem] mMobile:h-[34.625rem]
            sLaptop:h-[26.033rem] mLaptop:h-[32.542rem] desktop:h-[39.05rem] largeDesktop:h-[48.813rem] 

            bg-SiteYellow">
            <a className='
            w-full h-full flex items-center
            sLaptop:flex-none sLaptop:w-auto sLaptop:h-auto
            ' href={resume} download>
              <img className="
              transition-all
              duration-200
              w-[60.26%]
              sLaptop:w-[18.72rem]
              mLaptop:w-[23.4rem]
              desktop:w-[28.08rem]
              largeDesktop:w-[35.1rem]
              hover:cursor-pointer
              hover:opacity-75
              " src={downloadSVG}
              alt="" />
            </a>
        </div>
  )
})

export default index