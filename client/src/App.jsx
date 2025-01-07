import React from "react"
import { MainLayout, LoginPage, RegisterPage} from './pages'

import { DashboardUser, PengajuanUser, ProfilUser, StatusPengajuanUser } from './pages/user'
import { pengajuanLoader, profileLoader, statusLoader } from './pages/user'

import { action as LoginAction } from './pages/Login'
import { action as RegisterAction } from './pages/Register'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
      children: [
        {
          index: true,
          element: <StatusPengajuanUser />,
          loader: statusLoader
        },
        {
          path: 'pengajuan',
          element: <PengajuanUser />,
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
      path: '/admin'
    }
  ])

  return (
    <div className='h-[100vh] w-full'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
