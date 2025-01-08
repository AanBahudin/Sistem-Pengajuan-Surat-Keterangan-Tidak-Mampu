import React, { useContext, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components'

const DashboardUserContext = createContext()

const DashboardUser = () => {


  return (
    <DashboardUserContext.Provider value={{}}>

      <div className='w-full h-[100vh] flex overflow-hidden'>
        <Sidebar />

        <div className='flex-1'>
          <Outlet />
        </div>
      </div>

    </DashboardUserContext.Provider>
  )
}

export const useUserDashboardContext = () => useContext(DashboardUserContext)
export default DashboardUser