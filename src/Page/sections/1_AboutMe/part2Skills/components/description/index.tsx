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
     w-[calc(100%-13.02%)]
     mx-auto
     sLaptop:w-full 
     mt-[0.976rem]
     mobile:mt-[1.302rem]
     sMobile:mt-[2.083rem]
     mMobile:mt-[2.5rem]
     sLaptop:mt-0
     min-h-[10.62rem]
     mobile:min-h-[14.16rem]
     sMobile:min-h-[22.656rem]
     mMobile:min-h-[27.188rem]
     sLaptop:min-h-[14.157rem]
     mLaptop:min-h-[17.696rem]
     desktop:min-h-[21.236rem]
     largeDesktop:min-h-[26.544rem] 
     mb-[1.258rem]
     mobile:mb-[1.258rem]
     sMobile:mb-[2.822rem]
     mMobile:mb-[3.361rem]
     sLaptop:mb-[2.663rem]
     mLaptop:mb-[3.321rem]
     desktop:mb-[3.984rem]
     largeDesktop:mb-[4.979rem]
     bg-PrimaryWhite 
     infoTiny
     mobile:informobile
     sMobile:infosMobile
     mMobile:informMobile
     sLaptop:infoSmall
     mLaptop:infoMedium
     desktop:infoDesktop
     largeDesktop:infoLargeDesktop
     flex flex-col
     text-SidebarGray
     ">
      <div className="w-full 
      flex justify-between items-center
      mt-[0.889rem]
      mobile:mt-[1.153rem]
      sMobile:mt-[1.872rem]
      mMobile:mt-[2.213rem]
      sLaptop:mt-[1.32rem]
      mLaptop:mt-[1.65rem]
      desktop:mt-[1.98rem]
      largeDesktop:mt-[2.475rem]
      pl-[0.854rem]]
      mobile:pl-[1.139rem]
      sMobile:pl-[1.823rem]
      mMobile:pl-[2.188rem]
      sLaptop:pl-[0.99rem]
      mLaptop:pl-[1.238rem]
      desktop:pl-[1.485rem]
      largeDesktop:pl-[1.856rem]
      ">
         <h1 className="
         text-[0.976rem]
         mobile:text-[1.302rem]
         sMobile:text-[2.083rem]
         mMobile:text-[2.5rem]
         sLaptop:text-[1.98rem]
         mLaptop:text-[2.475rem]
         desktop:text-[2.97rem]
         largeDesktop:text-[3.713rem]
         font-bold
         leading-none
         ">{selectSkill.title}</h1>
         <span className={`
         text-[0.873rem]
         mobile:text-[1.163rem]
         sMobile:text-[1.861rem]
         mMobile:text-[2.233rem]
         sLaptop:text-[1.815rem]
         mLaptop:text-[2.269rem]
         desktop:text-[2.723rem]
         largeDesktop:text-[3.403rem]
         py-[0.234rem]
         mobile:py-[0.312rem]
         sMobile:py-[0.499rem]
         mMobile:py-[.6rem]
         sLaptop:py-[.4rem]
         mLaptop:py-[.525rem]
         desktop:py-[.650rem]
         largeDesktop:py-[.65rem]
         pl-[0.487rem]
         mobile:pl-[0.649rem]
         sMobile:pl-[1.039rem]
         mMobile:pl-[1.247rem]
         sLaptop:pl-[0.938rem]
         mLaptop:pl-[1.238rem]
         desktop:pl-[1.485rem]
         largeDesktop:pl-[1.856rem]
         w-[6.344rem]
         mobile:w-[8.459rem]
         sMobile:w-[13.535rem]
         mMobile:w-[16.243rem]
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
      px-[0.854rem]
      mobile:px-[1.139rem]
      sMobile:px-[1.823rem]
      mMobile:px-[2.188rem]
      sLaptop:px-[0.938rem]
      mLaptop:px-[1.238rem]
      desktop:px-[1.485rem]
      largeDesktop:px-[1.856rem]
      mt-[0.763rem]
      mobile:mt-[1.016rem]
      sMobile:mt-[1.626rem]
      mMobile:mt-[1.951rem]
      sLaptop:mt-[0.719rem]
      mLaptop:mt-[0.931rem]
      desktop:mt-[1.083rem]
      largeDesktop:mt-[1.346rem]
      text-[0.781rem]
      mobile:text-[1.042rem]
      sMobile:text-[1.667rem]
      mMobile:text-[2rem]
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
      left-[0.854rem]
      mobile:left-[1.139rem]
      sMobile:left-[1.823rem]
      mMobile:left-[2.188rem]
      sLaptop:left-[0.938rem]
      mLaptop:left-[1.238rem]
      desktop:left-[1.485rem]
      largeDesktop:left-[1.856rem]
      bottom-[0.733rem]
      mobile:bottom-[1.171rem]
      sMobile:bottom-[1.823rem]
      mMobile:bottom-[2.224rem]
      sLaptop:bottom-[1.287rem]
      mLaptop:bottom-[1.609rem]
      desktop:bottom-[1.931rem]
      largeDesktop:bottom-[2.288rem]
      text-[0.781rem]
      mobile:text-[1.041rem]
      sMobile:text-[1.666rem]
      mMobile:text-[2rem]
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