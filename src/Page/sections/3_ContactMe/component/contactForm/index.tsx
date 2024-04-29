import { FormEvent, memo, useRef } from "react"
import emailjs from '@emailjs/browser';
import EmailInput from './emailInput';
import MessageInput from './messageInput';
import ButtonSubmission from './buttonSubmission'
import { useAppDispatch, useAppSelector } from "../../../../../store/hook";
import { getEmailState, setEmail, setFormError, setMessage } from "../../../../../store/contactSlice";

const index = memo(() => {

    const dispatch = useAppDispatch();
      
    const email = useAppSelector(getEmailState);
    const message = useAppSelector(getEmailState);

    const emailRef = useRef<HTMLFormElement|null>(null);

    const formSubmission = (e:FormEvent) => {
      e.preventDefault();
      // first check out inputs

      if(email.trim() === ''){
        dispatch(setFormError('email'));
        return
      } 
[]
      if(message.trim() === ''){
        dispatch(setFormError('message'));
        return
      }
      
      emailjs.sendForm(
        "service_xmr60i9",
        "template_p24aqcx",
        emailRef.current!,
        'p1fPRoGfTzwSIiheG'
        ).then(
          (x)=> {
            alert('Thank you for your response!')
            console.log(x);
          }
        ).catch((err)=> {
          alert('Problem has occurred please try again')
          console.log(err)
        }
        )

      dispatch(setFormError('none'));
      dispatch(setEmail(''));
      dispatch(setMessage(''));
      // email and message should be validated and sanitized
      alert('Message has been sent. Thank you!');

    }

  return (
          <form
          ref={emailRef}
          onSubmit={(e)=> formSubmission(e)}
          className="flex flex-col 
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
                    <EmailInput />
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
                    <MessageInput />
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
                    <ButtonSubmission />
              </div>
          </form>
  )
})

export default index