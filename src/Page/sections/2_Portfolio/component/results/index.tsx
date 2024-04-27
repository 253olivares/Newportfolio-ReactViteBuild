import { memo, useContext } from "react"
import { BrowserAppContext } from "../../mockBrowserContext/index.tsx"
import { filterProjects, getProjectState, selectAll } from "../../../../../store/projectSlice.tsx";
import { useAppSelector } from "../../../../../store/hook.tsx";

const index = memo(() => {

  // const [content, setContent] = useState<JSX.Element>();

  const appContext = useContext(BrowserAppContext);
  // @ts-ignore
  const { searchTerm,tabSelect, liveDemos, selectedFilter } = appContext!;

  const content = useAppSelector((state)=>filterProjects(state,searchTerm,tabSelect,liveDemos,selectedFilter))

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
      {content}
    </div>
  )
})

export default index