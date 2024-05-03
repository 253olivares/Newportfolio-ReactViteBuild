import Tags from './tags'

const projectInfo = ({tag,demo,projectName,date}:{tag:string[],demo:boolean,projectName:string,date:string}) => {

  return (
    <div
    className="
    flex flex-col
    w-full
    absolute 
    bottom-0 left-0 
    "
    >
        <div className="
        flex 
        flex-row 
        flex-wrap
        gap-[0.1953125rem]
        mobile:gap-[0.26041666666rem]
        sMobile:gap-[0.41666666666rem]
        mMobile:gap-[0.5rem]
        sLaptop:gap-[0.29839rem]
        mLaptop:gap-[0.37158rem]
        desktop:gap-[0.4504rem]
        largeDesktop:gap-[0.563rem]

        px-[0.1953125rem]
        mobile:px-[0.26041666666rem]
        sMobile:px-[0.41666666666rem]
        mMobile:px-[.5rem]
        sLaptop:px-[0.29839rem]
        mLaptop:px-[0.37158rem]
        desktoP:px-[0.4504rem]
        largeDesktop:px-[0.563rem]
        ">
            {
                demo ? 
                (
                    <Tags tag={'Live'} />
                )
                :
                ''
            }
            {
                tag.map((t)=> 
                    <Tags key={t} tag={t} />
                )
            }
        </div>
        <div className='
            text-PrimaryWhite
            bg-DarkerGlass
            flex flex-col
            w-full 

            gap-[0.390rem]
            mobile:gap-[0.325rem]
            sMobile:gap-[0.520rem]
            mMobile:gap-[0.625rem]
            sLaptop:gap-[0.36464rem]
            mLaptop:gap-[0.45408rem]
            desktop:gap-[0.5504rem]
            largeDesktop:gap-[0.688rem]

            py-[0.427rem]
            mobile:py-[0.520rem]
            sMobile:py-[0.911rem]
            mMobile:py-[1.094rem]
            sLaptop:py-[0.62964rem]
            mLaptop:py-[0.78408rem]
            desktop:py-[0.9504rem]
            largeDesktop:py-[1.188rem]

            pl-[0.243rem]
            mobile:pl-[0.325rem]
            sMobile:pl-[0.520rem]
            mMobile:pl-[0.625rem]
            sLaptop:pl-[0.36464rem]
            mLaptop:pl-[0.45408rem]
            desktop:pl-[0.5504rem]
            largeDesktop:pl-[0.688rem]

            rounded-b-[0.266rem]
            mobile:rounded-b-[0.354rem]
            sMobile:rounded-b-[0.567rem]
            mMobile:rounded-b-[0.681rem]
            sLaptop:rounded-b-[0.40068rem]
            mLaptop:rounded-b-[0.49896rem]
            desktop:rounded-b-[0.6048rem]
            largeDesktop:rounded-b-[.756rem]
            '>
                <h1 className='
                font-semibold
                text-[0.585rem]
                mobile:text-[0.781rem]
                sMobile:text-[1.249rem]
                mMobile:text-[1.5rem]
                sLaptop:text-[0.72875rem]
                mLaptop:text-[0.9075rem]
                desktop:text-[1.1rem]
                largeDesktop:text-[1.375rem]
                leading-none
                '>{projectName}</h1>
                <p className='
                font-semibold
                text-[0.488rem]
                mobile:text-[0.651rem]
                sMobile:text-[1.041rem]
                mMobile:text-[1.25rem]
                sLaptop:text-[0.54643rem]
                mLaptop:text-[0.68046rem]
                desktop:text-[0.8248rem]
                largeDesktop:text-[1.031rem]
                leading-none
                opacity-80
                '>{date}</p>
        </div>
    </div>
  )
}

export default projectInfo