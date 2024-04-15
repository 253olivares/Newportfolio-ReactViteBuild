import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';

const index = () => {
  return (
    <main className='relative w-full min-h-[100vh]'>
      <Sidebar  />
      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default index