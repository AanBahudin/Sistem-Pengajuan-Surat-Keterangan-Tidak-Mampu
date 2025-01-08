import React, { useContext, createContext } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
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

  const { user } = useLoaderData()

  return (
    <DashboardUserContext.Provider value={{
      user
    }}>

      <div className='w-full h-[100vh] flex overflow-hidden'>
        <Sidebar data={user} />

        <div className='flex-1'>
          <Outlet />
        </div>
      </div>

    </DashboardUserContext.Provider>
  )
}

export const useUserDashboardContext = () => useContext(DashboardUserContext)
export default DashboardUser