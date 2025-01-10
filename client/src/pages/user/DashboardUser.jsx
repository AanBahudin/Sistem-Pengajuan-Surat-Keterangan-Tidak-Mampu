import React, { useContext, createContext } from 'react'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import { Sidebar } from '../../components'
import { handleToast } from '../../components/CustomToast'
import { sidebarLinks } from '../../utils/constant'

const DashboardUserContext = createContext()
export const loader = async() => {
  try {
    const { data } = await customFetch.get('/user/currentUser')
    
    return data
  } catch (error) {
    console.log(error.response.data.msg);
    return redirect('/')
  }
}

const DashboardUser = () => {

  const { user } = useLoaderData()
  const navigate = useNavigate()
  

  const checkIsUserEligible = () => {
    return Object.values(user).filter(item => {
      return item === ''
    }).length === 0
  }
  
  const logoutUser = async() => {
    handleToast('success', 'Sampai Jumpa Kembali', 'Senang Dapat Melayani Anda !')
    await customFetch.get('/auth/logout')
    return navigate('/')
  }

  return (
    <DashboardUserContext.Provider value={{
      user,
      checkIsUserEligible,
      logoutUser
    }}>

      <div className='w-full h-[100vh] flex overflow-hidden'>
        <Sidebar data={user} link={sidebarLinks} logoutUser={logoutUser} />

        <div className='flex-1'>
          <Outlet />
        </div>
      </div>

    </DashboardUserContext.Provider>
  )
}

export const useUserDashboardContext = () => useContext(DashboardUserContext)
export default DashboardUser