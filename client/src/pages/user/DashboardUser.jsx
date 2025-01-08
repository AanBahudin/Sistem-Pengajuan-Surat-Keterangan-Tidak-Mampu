import React, { useContext, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../App'


const DashboardUserContext = createContext()

const DashboardUser = () => {

  const { handleToast } = useAppContext()

  return (
    <DashboardUserContext.Provider value={{
      handleToast
    }}>
      <Outlet />
    </DashboardUserContext.Provider>
  )
}

export const useUserDashboardContext = () => useContext(DashboardUserContext)
export default DashboardUser