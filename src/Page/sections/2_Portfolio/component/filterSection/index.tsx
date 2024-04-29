import { memo } from "react"
import SearchBar from '../searchBar';
import DemoAndFilter from '../liveandAdditionalFilter';
import { useAppSelector } from "../../../../../store/hook";
import { getTabSelect } from "../../../../../store/projectSlice";

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