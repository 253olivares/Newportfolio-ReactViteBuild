import { getTabSelect } from "../../../../../store/projectSlice";
import { useAppSelector } from "../../../../../store/hook";
import DemoAndFilter from '../liveandAdditionalFilter';
import SearchBar from '../searchBar';
import { memo } from "react"

const index = memo(() => {

  const tabSelect = useAppSelector(getTabSelect);

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