import React, { createContext, useContext } from "react"
import CustomToast from "./components/CustomToast"
import { toast, ToastContainer } from "react-toastify"

import { MainLayout, LoginPage, RegisterPage} from './pages'

import { DashboardUser, PengajuanUser, ProfilUser, StatusPengajuanUser } from './pages/user'
import { pengajuanLoader, profileLoader, statusLoader } from './pages/user'

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

  const handleToast = (type, title, deskripsi) => {
    
    let bg = 'bg-newGreen';

    if (type === 'success') {
      bg = 'bg-newGreen'
    } else if (type === 'info') {
      bg = 'bg-newBlue'
    } else if (type === 'error') {
      bg = 'bg-newRed'
    } else {
      bg = 'bg-newYellow'
    }

    return toast(<CustomToast type={type} title={title} description={deskripsi} />, {
      closeButton: false,
      className: `py-1 px-4 w-[400px] ${bg} border-[1px] border-slate-300 rounded-xl`,
      ariaLabel: 'Login Berhasil',
    })
  }

  return (

    <>
      <ToastContainer position='top-right' hideProgressBar={true} autoClose={3000} closeButton={false}/>
      <AppContext.Provider value={{
        handleToast
      }}>
        <div className='h-[100vh] w-full'>
          <RouterProvider router={router} />
        </div>
      </AppContext.Provider>
    </>
  )
}

export const useAppContext = () => useContext(AppContext)
export default App
