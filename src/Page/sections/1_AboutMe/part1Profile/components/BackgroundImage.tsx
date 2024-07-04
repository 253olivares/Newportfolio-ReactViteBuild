import { memo } from "react"


const BackgroundImage = memo(({clsName,imgSrc}:{clsName:string,imgSrc:string}) => {
  return <img className={clsName}  src={imgSrc} alt={clsName} />
})

export default BackgroundImage