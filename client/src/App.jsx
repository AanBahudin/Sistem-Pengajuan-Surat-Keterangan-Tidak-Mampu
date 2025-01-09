import React, { createContext, useContext } from "react"
import { toast, ToastContainer } from "react-toastify"

import { MainLayout, LoginPage, RegisterPage} from './pages'

// user page import
import { DashboardUser, PengajuanUser, ProfilUser, StatusPengajuanUser } from './pages/user'
import { dashboardUserLoader, pengajuanLoader, profileLoader, statusLoader } from './pages/user'
import { pengajuanAction } from "./pages/user"

// kelurahan page import
import { DashboardPengajuan, DetailPengajuan, KelurahanLayout, SemuaPengajuan } from './pages/kelurahan'
import { kelurahanLayoutLoader } from "./pages/kelurahan"

import { action as LoginAction } from './pages/Login'
import { action as RegisterAction } from './pages/Register'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


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
          loader: profileLoader
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
          element: <DashboardPengajuan />
        },
        {
          path: 'pengajuan',
          element: <SemuaPengajuan />
        },
        {
          path: 'pengajuan/:id',
          element: <DetailPengajuan />
        },
        {
          path: 'profil',
          element: <ProfilUser />,
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
