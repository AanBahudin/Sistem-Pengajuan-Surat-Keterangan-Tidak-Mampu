import React, { createContext, useContext } from "react"
import { ToastContainer } from "react-toastify"
import Maps from "./Maps"

import { MainLayout, LoginPage, RegisterPage} from './pages'
import { loader as loginLoader } from './pages/Login'
import { loader as registerLoader } from './pages/Register'

// masyarakat page import
import { DashboardUser, DetailAjuanUser, PengajuanUser, ProfilUser, StatusPengajuanUser } from './pages/user'
import { dashboardUserLoader, detailAjuanUserLoader, pengajuanLoader, profileLoader, statusLoader } from './pages/user'
import { pengajuanAction, profilAction } from "./pages/user"

// RT page import
import { DashboardRT, DetailPengajuanRT, PengajuanRT, ProfileRT, RTLayout } from './pages/RT'
import { dashboardRTLoader, detailPengajuanRtLoader, pengajuarRTLoader, profileRTLoader, rtLayoutLoader } from './pages/RT'
import { detailPengajuanRtAction, profileRTAction } from './pages/RT'

// kelurahan page import
import { DashboardPengajuan, dashboardPengajuanLoader, DetailPengajuan, detailPengajuanLoader, KelurahanLayout, SemuaPengajuan } from './pages/kelurahan'
import { kelurahanLayoutLoader, semuaPengajuanLoader } from "./pages/kelurahan"
import { detailPengajuanAction } from './pages/kelurahan'

import { action as LoginAction } from './pages/Login'
import { action as RegisterAction } from './pages/Register'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfileKelurahan from "./pages/kelurahan/ProfileKelurahan"


const AppContext = createContext()

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
          loader: loginLoader,
          action: LoginAction
        },
        {
          path: 'register',
          element: <RegisterPage />,
          loader: registerLoader,
          action: RegisterAction
        },
        {
          path: 'maps',
          element: <Maps />
        }
      ]
    },
    {
      path: '/user',
      element: <DashboardUser />,
      loader: dashboardUserLoader,
      children: [
        {
          index: true,
          element: <StatusPengajuanUser />,
          loader: statusLoader
        },
        {
          path: 'pengajuan',
          element: <PengajuanUser />,
          action: pengajuanAction,
          loader: pengajuanLoader
        }, 
        {
          path: 'pengajuan/:id',
          element: <DetailAjuanUser />,
          loader: detailAjuanUserLoader
        },
        {
          path: 'profil',
          element: <ProfilUser />,
          loader: profileLoader,
          action: profilAction
        }
      ]
    },
    {
      path: '/rt',
      element: <RTLayout /> ,
      loader: rtLayoutLoader,
      children: [
        {
          index: true,
          element: <DashboardRT />,
          loader: dashboardRTLoader
        },
        {
          path: 'pengajuan',
          element: <PengajuanRT />,
          loader: pengajuarRTLoader
        },
        {
          path: 'pengajuan/:id',
          element: <DetailPengajuanRT />,
          loader: detailPengajuanRtLoader,
          action: detailPengajuanRtAction
        },
        {
          path: 'profil',
          element: <ProfileRT />,
          loader: profileRTLoader,
          action: profileRTAction
        }
      ]
    },
    {
      path: '/kelurahan',
      element: <KelurahanLayout />,
      loader: kelurahanLayoutLoader,
      children: [
        {
          index: true,
          element: <DashboardPengajuan />,
          loader: dashboardPengajuanLoader
        },
        {
          path: 'pengajuan',
          element: <SemuaPengajuan />,
          loader: semuaPengajuanLoader
        },
        {
          path: 'pengajuan/:id',
          element: <DetailPengajuan />,
          loader: detailPengajuanLoader,
          action: detailPengajuanAction
        },
        {
          path: 'profil',
          element: <ProfileKelurahan />,
          loader: profileLoader
        }
      ]
    }
  ])

  return (

    <>
      <ToastContainer position='top-right' hideProgressBar={true} closeButton={false}/>
      <AppContext.Provider value={{}}>
        <div className='h-[100vh] w-full'>
          <RouterProvider router={router} />
        </div>
      </AppContext.Provider>
      {/* <Maps /> */}
    </>
  )
}

export const useAppContext = () => useContext(AppContext)
export default App
