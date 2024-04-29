import { Fragment, memo } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../../store/hook"
import { setMessage, getMessageState, getFormErrorState } from "../../../../../../store/contactSlice"

const index = memo(() => {
    const dispatch = useAppDispatch()

    const message = useAppSelector(getMessageState);
    const formError = useAppSelector(getFormErrorState);

    return (
        <Fragment>
                <label className="contactLabelText" htmlFor="Message">Message:
                {
                    formError === 'message'?
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
                            Problem in message field!
                        </span>
                    ):''
                }
                </label>
                <textarea
                    value={message}
                    onChange={(e)=> dispatch(setMessage(e.target.value))}
                    name="Message" 
                    id="Message"
                    className={`
                    ${
                        formError === 'email' && 'bg-[rgba(255,148,148,1)]'
                    }
                    resize-none
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
                    `}
                />
        </Fragment>
    )
})

export default index