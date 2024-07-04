import { memo } from "react"
import { fetchSkills } from "../../../../../store/skillsSlice"
import { store } from "../../../../../store/store"

const TechincalDataFail = memo(() => {
  return (
    <div className=' tehcnicalFailHolder '>
        <p className='
         sLaptop:text-[1.9875rem]
         mLaptop:text-[2.475rem]
         desktop:text-[3rem]
         largeDesktop:text-6xl
         font-semibold
        '>Data Failed to load please try again.</p>
        <button
         className='
          sLaptop:text-[1.59rem]
          mLaptop:text-[1.98rem]
          desktop:text-[2.4rem]
          largeDesktop:text-5xl
          hover:cursor-pointer
          hover:underline
         '
        onClick={()=>store.dispatch(fetchSkills())}>Reload</button>
      </div>
  )
})

export default TechincalDataFail