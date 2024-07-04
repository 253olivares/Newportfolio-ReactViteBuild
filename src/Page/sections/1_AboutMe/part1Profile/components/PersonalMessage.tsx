import { memo } from 'react'

const PersonalMessage = memo(() => {
  return (
    <div className='personalMessageHolder'>
        <p
            data-aos='slide-right'
            data-aos-duration='1250'
            data-aos-delay='500'
            >
            <span className='
            sLaptop:text-[1.799rem]
            mLaptop:text-[2.249rem]
            desktop:text-[2.7rem]
            largeDesktop:text-[3.375rem]
            text-GrayBackground
            ' >"</span>
                My passion is to draw and code!
            <span className='
            sLaptop:text-[1.799rem]
            mLaptop:text-[2.249rem]
            desktop:text-[2.7rem]
            largeDesktop:text-[3.375rem]
            text-GrayBackground
            '>"</span>
        </p>
    </div>
  )
})

export default PersonalMessage