import { memo, useContext, useEffect, useMemo} from "react"
import { BrowserAppContext } from "../../mockBrowserContext/index.tsx"
import { filterProjects, selectAll} from "../../../../../store/projectSlice.tsx";
import { useAppSelector } from "../../../../../store/hook.tsx";

const index = memo(() => {

  

  return (
    <div className="  
    w-fill
    sLaptop:min-h-[23.467rem]
    mLaptop:min-h-[29.333rem]
    desktop:min-h-[35.2rem]
    largeDesktop:min-h-[44rem]
    sLaptop:pt-[0.667rem]
    mLaptop:pt-[0.846rem]
    desktop:pt-[1.016rem]
    largeDesktop:pt-[1.25rem]
    overflow-hidden
    overflowFix
    ">
  
    </div>
  )
})

export default index