const index = () => {
  return (
        <div className="flex 
          sLaptop:gap-[1.325rem]
          mLaptop:gap-[1.65rem]
          desktop:gap-[2rem]
          largeDesktop:gap-[2.5rem]">
            <div className='bubble bg-PrimaryWhite animate-[reversebounce_1s_infinite] animationDelay3s' />
            <div className='bubble bg-PrimaryWhite animate-[reversebounce_1s_infinite] animationDelay2s' />
            <div className='bubble bg-PrimaryWhite animate-[reversebounce_1s_infinite] animationDelay1s' />
            <div className='bubble bg-PrimaryWhite animate-[reversebounce_1s_infinite]' />
        </div>
  )
}

export default index