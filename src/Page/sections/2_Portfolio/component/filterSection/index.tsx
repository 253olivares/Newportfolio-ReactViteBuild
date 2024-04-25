import { memo, useContext } from "react"
import SearchBar from '../searchBar';
import DemoAndFilter from '../liveandAdditionalFilter';
import { BrowserAppContext } from "../../mockBrowserContext";

const index = memo(() => {

  const appContext = useContext(BrowserAppContext)
  const {tabSelect} = appContext!;
  
  return (
    <div className="flex 
    justify-between
    w-full
    ">
     <SearchBar />
    {
      tabSelect !== 'Art' && tabSelect !== 'UI / UX' && <DemoAndFilter />
    }
    </div>
  )
})

export default index