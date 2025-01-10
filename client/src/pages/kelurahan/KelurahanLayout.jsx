import React, { createContext, useContext, useState } from 'react'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import { Sidebar } from '../../components'
import { handleToast } from '../../components/CustomToast'
import { adminSidebarLinks } from '../../utils/constant'

const KelurahaanContext = createContext()

export const loader = async() => {
  try {
    const { data } = await customFetch.get('/user/currentUser')
    return data
  } catch (error) {
    console.log(error.response.data.msg);
    return redirect('/')
  }
}
const KelurahanLayout = () => {

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
    <KelurahaanContext.Provider value={{
      showImageReview,
      user,
      toggleImageReview,
      logoutUser
    }}>
       <div className='w-full h-[100vh] flex overflow-hidden'>
          <Sidebar data={user} link={adminSidebarLinks} logoutUser={logoutUser} />
      
          <div className='flex-1'>
            <Outlet />
          </div>
        </div>
    </KelurahaanContext.Provider>
  )
}

export const useKelurahanContext = () => useContext(KelurahaanContext)
export default KelurahanLayout