
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
                " />
                <span className="
                spanCSSTags
                ">{tag}</span>
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
    sLaptop:gap-[0.10918rem]
    mLaptop:gap-[0.13596rem]
    desktop:gap-[0.1648rem]
    largeDesktop:gap-[0.206rem]
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