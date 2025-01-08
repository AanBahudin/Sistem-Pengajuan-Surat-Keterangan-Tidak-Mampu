import React, { useContext, createContext } from 'react'
import { Outlet } from 'react-router-dom'

const DashboardUserContext = createContext()

const DashboardUser = () => {


  return (
    <DashboardUserContext.Provider value={{}}>
      <Outlet />
    </DashboardUserContext.Provider>
  )
}

export const useUserDashboardContext = () => useContext(DashboardUserContext)
export default DashboardUser