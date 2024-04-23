import { memo} from "react"
import BrowserTabs from '../tabs'
import BrowserControls from '../browserControls'

const index = memo(() => {

  return (
    <div className="
    mockBrowser
    ">
      <div className="
      flex flex-row 
      justify-between
      ">
        <BrowserTabs />
        <BrowserControls />
      </div>
      <div className="w-full h-full bg-PrimaryWhite
      sLaptop:min-h-[26.667rem]
      mLaptop:min-h-[33.333rem]
      desktop:min-h-[40rem]
      largeDesktop:min-h-[50rem]
      sLaptop:rounded-[.66rem]
      mLaptop:rounded-[.83rem]
      desktop:rounded-[1rem]
      largeDesktop:rounded-[1.25rem]
      ">

      </div>
    </div>
  )
})

export default index