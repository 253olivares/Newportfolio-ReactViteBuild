import { memo} from "react";
import BrowserTabs from '../tabs';
import BrowserControls from '../browserControls';
import WindowContent from '../windowContent';

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
      <WindowContent />
    </div>
  )
})

export default index