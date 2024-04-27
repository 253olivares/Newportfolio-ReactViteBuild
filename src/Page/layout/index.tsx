  import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import { memo } from 'react';

const index = memo(() => {
  return (
    <>
      <main className='relative flex justify-center items-center h-screen text-center sLaptop:hidden'>
        <p className=' text-5xl'>Please open this page on a desktop view! <br/> <br />
          Mobile view is under development.
        </p>
      </main>
      <main className='
      hidden sLaptop:block 
      relative w-full 
      min-h-[100vh]
      overflow-x-hidden
      overflow-y-hidden
      '>
        <Sidebar  />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
})

export default index