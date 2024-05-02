import { Fragment, memo } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../../store/hook"
import { getEmailState, getFormErrorState, setEmail } from "../../../../../../store/contactSlice"

const index = memo(() => {
    const dispatch = useAppDispatch()

    const email = useAppSelector(getEmailState);
    const formError = useAppSelector(getFormErrorState);

    return (
        <Fragment>
            <label className="contactLabelText" htmlFor="reply_to">Email:
            {
                formError === 'email' ?
                    (
                        <span
                        className="
                         font-bold
                         sLaptop:text-[1.06rem]
                         mLaptop:text-[1.32rem]
                         desktop:text-[1.6rem]
                         largeDesktop:text-[2rem] 
                         leading-tight 
                        ">
                            Problem Found in the Email Field!
                        </span>
                    )
                :''
            }
            </label>
            <input
                value={email}
                onChange={(e)=> dispatch(setEmail(e.target.value.trim()))}
                name="reply_to" 
                id="reply_to" 
                type="email" 
                className={`
                ${
                    formError === 'email' && 'bg-[rgba(255,148,148,1)]'
                }
                w-[100%]
                sLaptop:w-[calc(100vw*.3234)]
                largeDesktop:w-[38.813rem]
                extra:w-[45rem]
                py-[0.1953rem]
                px-[0.3906rem]
                mobile:py-[0.2604rem]
                mobile:px-[0.5208rem]
                sMobile:py-[0.4166rem]
                sMobile:px-[0.8333rem]
                mMobile:py-[.5rem]
                mMobile:px-[1rem]
                sLaptop:px-[.4rem]
                sLaptop:py-[.2rem]
                mLaptop:px-[.6rem]
                mLaptop:py-[.3rem]
                desktop:px-[.8rem]
                desktop:py-[.4rem]
                largeDesktop:px-[1rem]
                largeDesktop:py-[.5rem]
                rounded-[0.106rem]
                mobile:rounded-[0.141rem]
                sMobile:rounded-[0.225rem]
                mMobile:rounded-[0.27rem]
                sLaptop:rounded-[0.27rem]
                mLaptop:rounded-[0.338rem]
                desktop:rounded-[0.405rem]
                largeDesktop:rounded-[0.506rem]
                focus:outline-none
                focus:outline-offset-0
                focus:outline-4
                focus:outline-SelectBlue
                text-[0.9522rem]
                mobile:text-[1.2697rem]
                sMobile:text-[2.0316rem]
                mMobile:text-[2.438rem]
                sLaptop:text-[1.75rem]
                mLaptop:text-[2rem]
                desktop:text-[2.25rem]
                largeDesktop:text-[2.5rem]                    
                font-medium
                `}
            required/>
        </Fragment>
    )
})

export default index