import { getTabSelect } from "../../../../../store/projectSlice";
import { useAppSelector } from "../../../../../store/hook";
import DemoAndFilter from '../liveandAdditionalFilter';
import SearchBar from '../searchBar';
import { memo } from "react"

const index = memo(() => {

  const tabSelect = useAppSelector(getTabSelect);

  return (
    <div className="
    flex
    flex-col
    sLaptop:flex-row
    sLaptop:justify-between
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