import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import { windowResize } from '../hook';
import { memo } from 'react';

const Layout = memo(() => {

  // hook that runs code when window resizes
  // intented to make sure that our select tab is keep track in the correct space
  windowResize();

  return (
      <main className='
      block
      relative w-full 
      min-h-dvh
      overflow-x-hidden
      overflow-y-hidden
      '>
        <Sidebar  />
        <div>
          <Outlet />
        </div>
      </main>
  )
})

export default Layout