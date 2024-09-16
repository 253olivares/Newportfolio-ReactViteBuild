
const tags = ({tag}:{tag:string}) => {

    let content;

    let color;

    switch(tag){
        case 'XD':
        color = '#2E001D';
            break;
        case 'PS':
        color = '#18152E';
            break;
        case'Mobile Responsive':
        color = '#b148d2';
        break;
        case'Live':
        color='#333533';
            break;
        case'HTML':
        color='#CF5E1C';
            break;
        case 'CSS':
        color='#0277BD';
            break;
        case 'SASS':
        color='#CD6799';
            break;
        case 'Tailwind':
        color='linear-gradient(45deg,#F5F5F5, #CD6799 37%,#3886EC 50%, #F5F5F5 )';
            break;
        case 'JavaScript':
        color='#CAB108';
            break;
        case 'TypeScript':
        color='#32A3EE';
            break;
        case 'React':
        color='#242938';
            break;
        case 'Firebase':
        color='#CF5E1C'
            break;
        case 'PHP':
        color='#7229D1';
            break;
        case 'SQL':
        color='#F57C00';
            break;
        case 'Figma':
        color='#0ACF83';
            break;
        case 'Java':
        color = '#f4474c';
        break;
        case 'SpringBoot':
            color = '#00ED64'
            break;
            case 'MongoDB':
            color='#00684A'
            break;

    }

    if(tag==='Live'){
        content=(
            <>
                <div className="
                 bg-[#E14E1D]
                 block

                 animate-pulse
                 
                 w-[0.219rem]
                 mobile:w-[0.293rem]
                 sMobile:w-[0.469rem]
                 mMobile:w-[0.563rem]
                 sLaptop:w-[0.32807rem]
                 mLaptop:w-[0.40854rem]
                 desktop:w-[0.4952rem]
                 largeDesktop:w-[0.619rem]

                 h-[0.219rem]
                 mobile:h-[0.293rem]
                 sMobile:h-[0.469rem]
                 mMobile:h-[0.563rem]
                 sLaptop:h-[0.32807rem]
                 mLaptop:h-[0.40854rem]
                 desktop:h-[0.4952rem]
                 largeDesktop:h-[0.619rem]

                 rounded-full
                " />
                <span className="
                spanCSSTags
                ">Demo</span>
            </>
        )
    } else {
        content = tag
    }

  return (
    <div
    className={`
    flex flex-row
    justify-center
    items-center 

    py-[0.097rem]
    mobile:py-[0.130rem]
    sMobile:py-[0.208rem]
    mMobile:py-[0.20rem]
    sLaptop:py-[0.14893rem]
    mLaptop:py-[0.18546rem]
    desktop:py-[0.2248rem]
    largeDesktop:py-[0.281rem]
    
        gap-[0.193rem]
        mobile:gap-[0.257rem]
        sMobile:gap-[0.412rem]
        mMobile:gap-[0.495rem]
        sLaptop:gap-[0.10918rem]
        mLaptop:gap-[0.13596rem]
        desktop:gap-[0.1648rem]
        largeDesktop:gap-[0.206rem]

        w-[1.667rem]
        mobile:w-[2.223rem]
        sMobile:w-[3.557rem]
        mMobile:w-[4.269rem]
        sLaptop:w-[2.51432rem]
        mLaptop:w-[3.13104rem]
        desktop:w-[3.7952rem]
        largeDesktop:w-[4.744rem]

        mb-[0.195rem]
        mobile:mb-[0.260rem]
        sMobile:mb-[0.416rem]
        mMobile:mb-[0.5rem]
        sLaptop:mb-[0.29839rem]
        mLaptop:mb-[0.37158rem]
        desktop:mb-[0.4504rem]
        largeDesktop:mb-[0.563rem]

    rounded-[0.036328125rem]
    mobile:rounded-[0.04843749999rem]
    sMobile:rounded-[0.07749999999rem]
    mMobile:rounded-[0.093rem]
    sLaptop:rounded-[0.05459rem]
    mLaptop:rounded-[0.06798rem]
    desktop:rounded-[0.0824rem]
    largeDesktop:rounded-[0.103rem]

    text-PrimaryWhite
    font-semibold
    text-[0.29296875rem]
    mobile:text-[0.39062499999rem]
    sMobile:text-[0.62499999999rem]
    mMobile:text-[.75rem]
    sLaptop:text-[0.52807rem]
    mLaptop:text-[0.60854rem]
    desktop:text-[0.6952rem]
    largeDesktop:text-[0.819rem]
    leading-[1]
    `}
    style={{
        background:color
    }}
    >
        {content}
    </div>
  )
}

export default tags