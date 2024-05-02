import { skillsStateType } from "../../../../../../store/skillsSlice"
import { memo, useContext } from "react"
import { AppContext } from "../../../../../contextRefs"

const index = memo(({selectSkill}: {selectSkill:skillsStateType}) => {

   const appContext = useContext(AppContext);
   const {descRef} = appContext!;

   if(!selectSkill) {
      return
   }

  return (
     <div
     ref={descRef}
     className="
     relative
     w-full 
     sLaptop:min-h-[14.157rem]
     mLaptop:min-h-[17.696rem]
     desktop:min-h-[21.236rem]
     largeDesktop:min-h-[26.544rem] 
     sLaptop:mb-[2.663rem]
     mLaptop:mb-[3.321rem]
     desktop:mb-[3.984rem]
     largeDesktop:mb-[4.979rem]
     bg-PrimaryWhite 
     infoLargeDesktop
     flex flex-col
     text-SidebarGray
     ">
      <div className="w-full 
      flex justify-between items-center
      sLaptop:mt-[1.32rem]
      mLaptop:mt-[1.65rem]
      desktop:mt-[1.98rem]
      largeDesktop:mt-[2.475rem]
      sLaptop:pl-[0.99rem]
      mLaptop:pl-[1.238rem]
      desktop:pl-[1.485rem]
      largeDesktop:pl-[1.856rem]
      ">
         <h1 className="
         sLaptop:text-[1.98rem]
         mLaptop:text-[2.475rem]
         desktop:text-[2.97rem]
         largeDesktop:text-[3.713rem]
         font-bold
         leading-none
         ">{selectSkill.title}</h1>
         <span className={`
         sLaptop:text-[1.815rem]
         mLaptop:text-[2.269rem]
         desktop:text-[2.723rem]
         largeDesktop:text-[3.403rem]
         sLaptop:py-[.4rem]
         mLaptop:py-[.525rem]
         desktop:py-[.650rem]
         largeDesktop:py-[.65rem]
         sLaptop:pl-[0.938rem]
         mLaptop:pl-[1.238rem]
         desktop:pl-[1.485rem]
         largeDesktop:pl-[1.856rem]
         sLaptop:w-[13.2rem]
         mLaptop:w-[16.5rem]
         desktop:w-[19.8rem]
         largeDesktop:w-[24.75rem]
         font-semibold
         leading-none
         text-PrimaryWhite
         ${selectSkill.skillLevel === 'Proficient' ? ' bg-SiteYellow' : 'bg-SiteGreen'}
         `}>{selectSkill.skillLevel}</span>
      </div>
      <p className="
      font-medium
      sLaptop:px-[0.938rem]
      mLaptop:px-[1.238rem]
      desktop:px-[1.485rem]
      largeDesktop:px-[1.856rem]
      sLaptop:mt-[0.719rem]
      mLaptop:mt-[0.931rem]
      desktop:mt-[1.083rem]
      largeDesktop:mt-[1.346rem]
      sLaptop:text-[1.584rem]
      mLaptop:text-[1.98rem]
      desktop:text-[2.376rem]
      largeDesktop:text-[2.97rem]
      sLaptop:mb-[3.634rem]
      mLaptop:mb-[4.558rem]
      desktop:mb-[5.451rem]
      largeDesktop:mb-[6.821rem]
      leading-[1.15]
      ">{selectSkill.desc}</p>
      <span className="
      absolute
      sLaptop:left-[0.938rem]
      mLaptop:left-[1.238rem]
      desktop:left-[1.485rem]
      largeDesktop:left-[1.856rem]
      sLaptop:bottom-[1.287rem]
      mLaptop:bottom-[1.609rem]
      desktop:bottom-[1.931rem]
      largeDesktop:bottom-[2.288rem]
      sLaptop:text-[1.485rem]
      mLaptop:text-[1.856rem]
      desktop:text-[2.228rem]
      largeDesktop:text-[2.784rem]
      font-medium
      ">Years Experience: {selectSkill.years}</span>
     </div>
  )
})

export default index