import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
const index = () => {
  return (
    <main>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default index