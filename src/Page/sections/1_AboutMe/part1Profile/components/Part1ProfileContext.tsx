import { memo } from "react";
import ProfileImage from "./ProfileImage";
import MobilePersonalMessage from "./MobilePersonalMessage";
import Content from "./Content";


const Part1ProfileContext = memo(() => {

  return (
    <div className=' profilePart1ContentHolder '>
            
            <ProfileImage />

            <MobilePersonalMessage />
           
            <Content />
          </div>
  )
})

export default Part1ProfileContext