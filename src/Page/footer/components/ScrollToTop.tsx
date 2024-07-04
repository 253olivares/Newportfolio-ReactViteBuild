import { memo } from "react";


const ScrollToTop = memo(() => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

  return (
    <div onClick={()=>scrollToTop()} className="
    backtoTopBar
    ">
      <p className="
      backToTopBarParagraph
      ">To Top</p>
    </div>
  )
})

export default ScrollToTop