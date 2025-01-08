import React, { useContext, createContext } from 'react'
import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import { Sidebar } from '../../components'
import { handleToast } from '../../components/CustomToast'

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

  const logoutUser = async() => {
    handleToast('info', 'Logout Berhasil', 'Senang Dapat Melayani Anda !')
    await customFetch.get('/auth/logout')
    return redirect('/')
  }

  return (
    <DashboardUserContext.Provider value={{
      user,
      logoutUser
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