import React, { useState, useEffect, createContext, useContext } from 'react'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import handleErrorMessage from '../../utils/handleErrorMessage'
import { handleToast } from '../../components/CustomToast'
import { Sidebar } from '../../components'
import { rtSidebarLinks } from '../../utils/constant'
import { useAppContext } from '../../App'

export const loader = async() => {
  try {
    const { data } = await customFetch.get('user/currentUser')

    if (data.user.role !== 'RT') {
      return redirect('/')
    }

    return data
  } catch (error) {
    console.log(error.response.data.msg);
    
    handleToast('error', 'Ada yang tidak beres', handleErrorMessage(error.response.data.msg), 3000)
    return redirect('/')
  }
}


const RTContext = createContext()

const RTLayout = () => {

  const { user } = useLoaderData()
  const { setPosition } = useAppContext()
  const navigate = useNavigate()
  const [showImageReview, setShowImageReview] = useState({ show: false, judul: '' })
  
  const toggleImageReview = (show, judul) => {
    setShowImageReview(prevState => ({...prevState, show, judul}))
  }

  useEffect(() => {
        // Mendapatkan lokasi pengguna secara otomatis
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const { latitude, longitude } = pos.coords;
              setPosition([latitude, longitude]);
            },
            (err) => {
              console.error('Geolocation error:', err.message);
              setPosition([-5.463573110237984, 122.60159597384775]); // Lokasi default jika gagal
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
          setPosition([-5.463573110237984, 122.60159597384775]); // Lokasi default jika tidak didukung
        }
      }, []);


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