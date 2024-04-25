import { memo } from 'react'
import downloadSVG from '/assets/downloadResume.svg'
import resume from '/Olivares_Resume2024_Current.pdf';

const index = memo(() => {
  return (
        <div className="
            w-[48%] 
            flex items-center
            sLaptop:px-[5rem]
            mLaptop:px-[6.25rem]
            desktop:px-[7.5rem]
            largeDesktop:px-[9.375rem]
            sLaptop:mt-[1.421rem] mLaptop:mt-[1.792rem] desktop:mt-[2.163rem] largeDesktop:mt-[2.688rem]
            sLaptop:contactDivShadowSmall mLaptop:contactDivShadowMedium desktop:contactDivShadowDesktop largeDesktop:contactDivShadowLarge
            sLaptop:rounded-l-[0.54rem] mLaptop:rounded-l-[0.675rem] desktop:rounded-l-[0.81rem] largeDesktop:rounded-l-[1.013rem]
            sLaptop:h-[26.033rem] mLaptop:h-[32.542rem] desktop:h-[39.05rem] largeDesktop:h-[48.813rem] 
            bg-SiteYellow">
            <a href={resume} download>
              <img className="
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