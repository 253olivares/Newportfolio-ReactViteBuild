import { memo } from "react"


const TechnicalHeader = memo(() => {
  return (
    <div
          data-aos='fade'
          data-aos-duration='1000'
          data-aos-delay='0'
          className=" technicalHeaderHolder ">
            <h1  className="sectionCSS">MY TECHNICAL SKILLS</h1>
            <p className="
            technicalHeaderP
            ">Check out some of my strongest technical skills!</p>
          </div>
  )
})

export default TechnicalHeader