import React, { useState, useEffect, useContext, createContext } from 'react'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import { Sidebar } from '../../components'
import { handleToast } from '../../components/CustomToast'
import { baubauData, sidebarLinks } from '../../utils/constant'
import { useAppContext } from '../../App'

const DashboardUserContext = createContext()
export const loader = async() => {
  try {
    const { data } = await customFetch.get('/user/currentUser')

    if (data.user.role !== 'USER') {
      return redirect('/')
    }

    return data
  } catch (error) {
    console.log(error.response.data.msg);
    return redirect('/')
  }
}

const DashboardUser = () => {

  const { user } = useLoaderData()
  const { position, setPosition } = useAppContext()
  const [isLocationActive, setLocationActive] = useState(false)
  const navigate = useNavigate()
  

   useEffect(() => {
      // Mendapatkan lokasi pengguna secara otomatis
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition([latitude, longitude]);
            setLocationActive(true)
          },
          (err) => {
            handleToast('error', 'Lokasi tidak Ditemukan', 'Izinkan akses lokasi untuk melakukan pengajuan', false)
            setLocationActive(false)
            setPosition([-5.463573110237984, 122.60159597384775]); // Lokasi default jika gagal
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setLocationActive(false)
        handleToast('error', 'Lokasi tidak Ditemukan', 'Browser ini tidak mendukung pelacakan lokasi', false)
        setPosition([-5.463573110237984, 122.60159597384775]); // Lokasi default jika tidak didukung
      }
    }, []);
  

  const checkIsUserEligible = () => {
    return Object.values(user).filter(item => {
      return item === ''
    }).length === 0
  }
  
  const dataKelurahan = baubauData.find(item => {
    return item.kecamatan === user.kecamatan
  }).kelurahan

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
    <DashboardUserContext.Provider value={{
      user,
      isLocationActive,
      dataKelurahan,
      showImageReview,
      position,
      toggleImageReview,
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