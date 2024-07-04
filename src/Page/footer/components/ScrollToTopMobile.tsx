import { memo } from 'react';
import FooterMobile from '/assets/FooterMobile.svg'


const ScrollToTopMobile = memo(() => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

  return (
    <img 
    className="
    w-full
    sLaptop:hidden
    "
    onClick={()=>scrollToTop()}
    src={FooterMobile}
    alt="MobileFooter" />
  )
})

export default ScrollToTopMobile