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