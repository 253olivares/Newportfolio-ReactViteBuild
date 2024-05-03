const index = ({color}:{color:string}) => {
  return (
        <div className="flex 
          gap-[0.585rem]
          mobile:gap-[0.781rem]
          sMobile:gap-[1.249rem]
          mMobile:gap-[1.5rem]
          sLaptop:gap-[1.325rem]
          mLaptop:gap-[1.65rem]
          desktop:gap-[2rem]
          largeDesktop:gap-[2.5rem]">
            <div className={`bubble ${color} animate-[reversebounce_1s_infinite] animationDelay3s`} />
            <div className={`bubble ${color} animate-[reversebounce_1s_infinite] animationDelay2s`} />
            <div className={`bubble ${color} animate-[reversebounce_1s_infinite] animationDelay1s`} />
            <div className={`bubble ${color} animate-[reversebounce_1s_infinite]`} />
        </div>
  )
}

export default index