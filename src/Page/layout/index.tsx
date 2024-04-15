import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';

const index = () => {
  return (
    <>
    <main className='relative flex justify-center items-center h-screen text-center sLaptop:hidden'>
      <p>Please open this page on a desktop view!</p>
    </main>
    <main className='relative w-full min-h-[100vh] hidden sLaptop:block'>
      <Sidebar  />
      <div>
        <Outlet />
      </div>
    </main>
    </>
  )
}

export default index