import React, { createContext, useContext } from "react"
import { toast, ToastContainer } from "react-toastify"

import { MainLayout, LoginPage, RegisterPage} from './pages'

// user page import
import { DashboardUser, PengajuanUser, ProfilUser, StatusPengajuanUser } from './pages/user'
import { dashboardUserLoader, pengajuanLoader, profileLoader, statusLoader } from './pages/user'
import { pengajuanAction, profilAction } from "./pages/user"

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
          action: LoginAction
        },
        {
          path: 'register',
          element: <RegisterPage />,
          action: RegisterAction
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
          path: 'profil',
          element: <ProfilUser />,
          loader: profileLoader,
          action: profilAction
        }
      ]
    },
    {
      path: '/rt'
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
    </>
  )
}

export const useAppContext = () => useContext(AppContext)
export default App
