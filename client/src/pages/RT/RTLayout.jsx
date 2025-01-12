import React, { useState, createContext, useContext } from 'react'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import handleErrorMessage from '../../utils/handleErrorMessage'
import { handleToast } from '../../components/CustomToast'
import { Sidebar } from '../../components'
import { rtSidebarLinks } from '../../utils/constant'

export const loader = async() => {
  try {
    const { data } = await customFetch.get('user/currentUser')
    return data
  } catch (error) {
    console.log(error.response.data.msg);
    
    handleToast('error', 'Ada yang tidak beres', handleErrorMessage(error.response.data.msg), 3000)
    return handleErrorMessage(error.response.data.msg)
  }
}


const RTContext = createContext()

const RTLayout = () => {

  const { user } = useLoaderData()
  const navigate = useNavigate()
  const [showImageReview, setShowImageReview] = useState({ show: false, judul: '' })
  
    const toggleImageReview = (show, judul) => {
      setShowImageReview(prevState => ({...prevState, show, judul}))
    }


  const logoutUser = async() => {
    handleToast('success', 'Sampai Jumpa Kembali', 'Senang Dapat Melayani Anda !')
    await customFetch.get('/auth/logout')
    return navigate('/')
  }

  return (
    <RTContext.Provider value={{
      showImageReview,
      toggleImageReview,
      logoutUser
    }}>
      <div className='w-full h-[100vh] flex overflow-hidden'>
        <Sidebar data={user} link={rtSidebarLinks} logoutUser={logoutUser} />

        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    </RTContext.Provider>
  )
}


export const useRtContext = () => useContext(RTContext)
export default RTLayout