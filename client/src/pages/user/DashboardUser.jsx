import React, { useContext, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import { Sidebar } from '../../components'

const DashboardUserContext = createContext()
export const loader = async() => {
  try {
    const { data } = await customFetch.get('/user/currentUser')
    return data
  } catch (error) {
    console.log(error.response.data.msg);
    return error
  }
}

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