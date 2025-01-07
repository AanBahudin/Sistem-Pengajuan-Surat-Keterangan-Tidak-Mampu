import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='min-h-full h-[100%] bg-slate-100 w-full'>
      <Outlet />
    </div>
  )
}

export default MainLayout