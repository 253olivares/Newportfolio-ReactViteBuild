import { memo} from "react";
import BrowserTabs from '../tabs';
import BrowserControls from '../browserControls';
import WindowContent from '../windowContent';

const index = memo(() => {

  return (
    <div 
    data-aos='fade'
    data-aos-duration='1250'
    data-aos-delay='800'
    className="
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