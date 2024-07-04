import { memo, useContext } from "react";
import { useAppSelector } from "../../../../../store/hook"
import { getWindowWidth } from "../../../../../store/sidebarSlice"
import { AppContext } from "../../../../contextRefs";


const HeadName = memo(() => {

    const appContext = useContext(AppContext);
    const {bracketLeft, bracketRight} = appContext!;


    const bracketHolders = {
        "aboutmeHeadLeft" : bracketLeft,
        "aboutmeHeadRight" : bracketRight
    }

  return (
    <div className="
    aboutmeHeadHolder
          ">
            <h1 className="
            flex
            items-center
            sectionCSS
            ">
                <Bracket clsName={Object.keys(bracketHolders)[0]}
                imgSrc={bracketHolders.aboutmeHeadLeft}
                />

                <AboutMe />

                <Bracket 
                clsName={Object.keys(bracketHolders)[1]}
                imgSrc={bracketHolders.aboutmeHeadRight}
                />
            
            </h1>
          </div>
  )
})

const AboutMe = memo(() => {

    const width = useAppSelector(getWindowWidth);

    return <span
    data-aos='fade'
    data-aos-duration='1250'
    data-aos-delay={
      width <1024 ?
      '1300'
      :
      '0'
    }
    >
      ABOUT ME! 
    </span>
})

const Bracket = memo(({clsName,imgSrc}: {clsName:string,imgSrc:string}) => {
    return <img 
    className={clsName}
    src={imgSrc} alt={clsName} />
})

export default HeadName