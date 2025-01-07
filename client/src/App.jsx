import React from "react"
import { 
  MainLayout,
  LoginPage,
  RegisterPage
} from './pages'

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
      path: '/user'
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
