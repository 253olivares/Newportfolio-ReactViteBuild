import { useState } from "react"

const index = () => {

    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const buttonDisablity = [email,message].every(Boolean)

  return (
    <div className="flex flex-col 
            sLaptop:gap-[1.333rem]
            mLaptop:gap-[1.667rem]
            desktop:gap-[2rem]
            largeDesktop:gap-[2.5rem]">
              <div className=" flex flex-col
                  sLaptop:pr-[3.3rem]
                  mLaptop:pr-[4.125rem]
                  desktop:pr-[4.95rem]
                  largeDesktop:pr-[6.188rem]
                  sLaptop:gap-[0.667rem]
                  mLaptop:gap-[0.833rem]
                  desktop:gap-[1rem]
                  largeDesktop:gap-[1.25rem]
                  ">
                    <label className="contactLabelText" htmlFor="Email">Email:</label>
                    <input
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className="
                    sLaptop:w-[calc(100vw*.3234)]
                    largeDesktop:w-[38.813rem]
                    extra:w-[45rem]
                    sLaptop:px-[.4rem]
                    sLaptop:py-[.2rem]
                    mLaptop:px-[.6rem]
                    mLaptop:py-[.3rem]
                    desktop:px-[.8rem]
                    desktop:py-[.4rem]
                    largeDesktop:px-[1rem]
                    largeDesktop:py-[.5rem]
                    sLaptop:rounded-[0.27rem]
                    mLaptop:rounded-[0.338rem]
                    desktop:rounded-[0.405rem]
                    largeDesktop:rounded-[0.506rem]
                    focus:outline-none
                    focus:outline-offset-0
                    focus:outline-4
                    focus:outline-SelectBlue
                    sLaptop:text-[1.75rem]
                    mLaptop:text-[2rem]
                    desktop:text-[2.25rem]
                    largeDesktop:text-[2.5rem]
                    font-medium
                    " name="Email" id="Email" type="email" required/>
              </div>
              <div className="flex flex-col
                  sLaptop:pr-[3.3rem]
                  mLaptop:pr-[4.125rem]
                  desktop:pr-[4.95rem]
                  largeDesktop:pr-[6.188rem]
                  sLaptop:gap-[0.667rem]
                  mLaptop:gap-[0.833rem]
                  desktop:gap-[1rem]
                  largeDesktop:gap-[1.25rem]
                  ">
                    <label className="contactLabelText" htmlFor="Message">Message:</label>
                    <textarea
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                    className="resize-none
                    w-full
                    sLaptop:px-[.4rem]
                    sLaptop:py-[.2rem]
                    mLaptop:px-[.6rem]
                    mLaptop:py-[.3rem]
                    desktop:px-[.8rem]
                    desktop:py-[.4rem]
                    largeDesktop:px-[1rem]
                    largeDesktop:py-[.5rem]
                    sLaptop:rounded-[0.27rem]
                    mLaptop:rounded-[0.338rem]
                    desktop:rounded-[0.405rem]
                    largeDesktop:rounded-[0.506rem]
                    focus:outline-none
                    focus:outline-offset-0
                    focus:outline-4
                    focus:outline-SelectBlue
                    sLaptop:min-h-[14.58rem]
                    mLaptop:min-h-[18.225rem]
                    desktop:min-h-[21.87rem]
                    largeDesktop:min-h-[27.338rem]
                    sLaptop:text-[1.5rem]
                    mLaptop:text-[1.75rem]
                    desktop:text-[2rem]
                    largeDesktop:text-[2.25rem]
                    font-medium
                    " name="Message" id="Message"></textarea>
              </div>
              <div className="
                  sLaptop:mt-[1.4rem]
                  mLaptop:mt-[1.75rem]
                  desktop:mt-[2.119rem]
                  largeDesktop:mt-[2.5rem]
                  sLaptop:pr-[1rem]
                  mLaptop:pr-[1.25rem]
                  desktop:pr-[1.5rem]
                  largeDesktop:pr-[1.875rem]">
                    <button
                    disabled={!buttonDisablity}
                    className="
                    float-right
                    bg-PrimaryWhite
                    text-SidebarGray
                    font-medium
                    leading-none
                    sLaptop:h-[3.133rem]
                    mLaptop:h-[3.917rem]
                    desktop:h-[4.7rem]
                    largeDesktop:h-[5.875rem]
                    sLaptop:leading-[3.133rem]
                    mLaptop:leading-[3.917rem]
                    desktop:leading-[4.7rem]
                    largeDesktop:leading-[5.875rem]
                    sLaptop:px-[2.658rem]
                    mLaptop:px-[3.292rem]
                    desktop:px-[3.925rem]
                    largeDesktop:px-[4.875rem]
                    sLaptop:rounded-[0.267rem]
                    mLaptop:rounded-[0.333rem]
                    desktop:rounded-[0.4rem]
                    largeDesktop:rounded-[0.5rem]
                    sLaptop:text-[2rem]
                    mLaptop:text-[2.5rem]
                    desktop:text-[3rem]
                    largeDesktop:text-[3.75rem]
                    hover:bg-SelectBlue
                    hover:text-PrimaryWhite
                    transition-[color,background-color]
                    duration-500
                    cursor-pointer
                    active:transition-none
                    active:bg-[#1c3d5b]
                    disabled:opacity-50
                    disabled:hover:bg-PrimaryWhite
                    disabled:hover:text-SidebarGray
                    disabled:hover:cursor-default
                    "
                    >Send</button>
              </div>
            </div>
  )
}

export default index