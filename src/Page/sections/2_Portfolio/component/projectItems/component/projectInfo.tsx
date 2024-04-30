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
        flex flex-row flex-wrap
        sLaptop:gap-[0.29839rem]
        mLaptop:gap-[0.37158rem]
        desktop:gap-[0.4504rem]
        largeDesktop:gap-[0.563rem]
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
            flex flex-col
            sLaptop:gap-[0.36464rem]
            mLaptop:gap-[0.45408rem]
            desktop:gap-[0.5504rem]
            largeDesktop:gap-[0.688rem]
            w-full 
            text-PrimaryWhite
            bg-DarkerGlass
            sLaptop:py-[0.62964rem]
            mLaptop:py-[0.78408rem]
            desktop:py-[0.9504rem]
            largeDesktop:py-[1.188rem]
            sLaptop:pl-[0.36464rem]
            mLaptop:pl-[0.45408rem]
            desktop:pl-[0.5504rem]
            largeDesktop:pl-[0.688rem]
            sLaptop:rounded-b-[0.40068rem]
            mLaptop:rounded-b-[0.49896rem]
            desktop:rounded-b-[0.6048rem]
            largeDesktop:rounded-b-[.756rem]
            '>
                <h1 className='
                font-semibold
                sLaptop:text-[0.72875rem]
                mLaptop:text-[0.9075rem]
                desktop:text-[1.1rem]
                largeDesktop:text-[1.375rem]
                leading-none
                '>{projectName}</h1>
                <p className='
                font-semibold
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