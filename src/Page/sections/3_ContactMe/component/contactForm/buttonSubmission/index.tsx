import { memo } from "react";
import { getEmailState, getMessageState } from "../../../../../../store/contactSlice"
import { useAppSelector } from "../../../../../../store/hook"


const index =memo(() => {

    const email = useAppSelector(getEmailState);
    const message = useAppSelector(getMessageState);
    const buttonDisablity = [email,message].every(Boolean)
  return (
    <button
        type="submit"
        disabled={!buttonDisablity}
        className="
        w-full
        sLaptop:w-auto
        sLaptop:float-right
        bg-PrimaryWhite
        text-SidebarGray
        font-medium
        h-[1.708rem]
        mobile:h-[2.278rem]
        sMobile:h-[3.645rem]
        mMobile:h-[4.375rem]
        sLaptop:h-[3.133rem]
        mLaptop:h-[3.917rem]
        desktop:h-[4.7rem]
        largeDesktop:h-[5.875rem]
        sLaptop:px-[2.658rem]
        mLaptop:px-[3.292rem]
        desktop:px-[3.925rem]
        largeDesktop:px-[4.875rem]
        rounded-[0.166rem]
        mobile:rounded-[0.222rem]
        sMobile:rounded-[0.354rem]
        mMobile:rounded-[0.426rem]
        sLaptop:rounded-[0.267rem]
        mLaptop:rounded-[0.333rem]
        desktop:rounded-[0.4rem]
        largeDesktop:rounded-[0.5rem]
        text-[1.247rem]
        mobile:text-[1.663rem]
        sMobile:text-[2.659rem]
        mMobile:text-[3.191rem]
        sLaptop:text-[2rem]
        mLaptop:text-[2.5rem]
        desktop:text-[3rem]
        largeDesktop:text-[3.75rem]
        leading-[1.708rem]
        mobile:leading-[2.278rem]
        sMobile:leading-[3.645rem]
        mMobile:leading-[4.375rem]
        sLaptop:leading-[3.133rem]
        mLaptop:leading-[3.917rem]
        desktop:leading-[4.7rem]
        largeDesktop:leading-[5.875rem]
        hover:bg-SelectBlue
        hover:text-PrimaryWhite
        transition-[color,background-color]
        duration-300
        cursor-pointer
        active:transition-none
        active:bg-[#1c3d5b]
        disabled:opacity-50
        disabled:hover:bg-PrimaryWhite
        disabled:hover:text-SidebarGray
        disabled:hover:cursor-default
        "
        >
            Send
        </button>
  )
})

export default index