
const tags = ({tag}:{tag:string}) => {

    let content;

    let color;

    switch(tag){
        case'Live':
        color='#333533'
            break;
        case'HTML':
        color='#CF5E1C'
            break;
        case 'CSS':
        color='#0277BD'
            break;
        case 'SASS':
        color='#CD6799'
            break;
        case 'Tailwind':
        color='linear-gradient(45deg,#F5F5F5, #CD6799 37%,#3886EC 50%, #F5F5F5 )'
            break;
        case 'JavaScript':
        color='#CAB108'
            break;
        case 'TypeScript':
        color='#32A3EE'
            break;
        case 'React':
        color='#242938'
            break;
        case 'Firebase':
        color='#CF5E1C'
            break;
        case 'PHP':
        color='#7229D1'
            break;
        case 'MySQL':
        color='#F57C00'
            break;
        case 'Figma':
        color='#0ACF83'
            break;

    }

    if(tag==='Live'){
        content=(
            <>
                <div className="
                 bg-[#E14E1D]
                 block
                 sLaptop:w-[0.32807rem]
                 mLaptop:w-[0.40854rem]
                 desktop:w-[0.4952rem]
                 largeDesktop:w-[0.619rem]
                 sLaptop:h-[0.32807rem]
                 mLaptop:h-[0.40854rem]
                 desktop:h-[0.4952rem]
                 largeDesktop:h-[0.619rem]
                 rounded-full
                " />
                <span className="
                spanCSSTags
                ">Live Demo</span>
            </>
        )
    } else {
        content = <span className="
        spanCSSTags
        ">{tag}</span>
    }

  return (
    <div
    className="
    flex flex-row
    justify-center
    items-center 
    sLaptop:gap-[0.10918rem]
    mLaptop:gap-[0.13596rem]
    desktop:gap-[0.1648rem]
    largeDesktop:gap-[0.206rem]
    sLaptop:py-[0.14893rem]
    mLaptop:py-[0.18546rem]
    desktop:py-[0.2248rem]
    largeDesktop:py-[0.281rem]
    sLaptop:w-[2.51432rem]
    mLaptop:w-[3.13104rem]
    desktop:w-[3.7952rem]
    largeDesktop:w-[4.744rem]
    sLaptop:rounded-[0.05459rem]
    mLaptop:rounded-[0.06798rem]
    desktop:rounded-[0.0824rem]
    largeDesktop:rounded-[0.103rem]
    sLaptop:mb-[0.29839rem]
    mLaptop:mb-[0.37158rem]
    desktop:mb-[0.4504rem]
    largeDesktop:mb-[0.563rem]
    "
    style={{
        background:color
    }}
    >
        {content}
    </div>
  )
}

export default tags