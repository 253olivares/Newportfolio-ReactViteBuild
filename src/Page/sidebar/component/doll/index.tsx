import { memo, useEffect, useRef } from "react"

const index = memo(({character}: {character:string}) => {

    const dollref = useRef<HTMLImageElement|null>(null);

    useEffect(()=> {
        const aniamtedDoll = () => {
            if(dollref.current) {
                dollref.current.style.transform= `rotate(${window.scrollY/10}deg)`;
            }
        }
        window.addEventListener('scroll',aniamtedDoll,true);
        ()=> {
            window.removeEventListener('scroll',aniamtedDoll,true);
        }
    },[])

  return (
    <img 
    ref={dollref}
    className='
      w-[1.838rem]
      mobile:w-[2.451rem]
      sMobile:w-[3.921rem]  
      mMobile:w-[4.706rem]
      sLaptop:w-[2.5rem] 
      mLaptop:w-[3.125rem] 
      desktop:w-[3.75rem] 
      largeDesktop:w-[4.688rem]
      4k:w-[6.250rem]
    ' 
      src={character} alt="Character_1_svg" />
  )
})

export default index