import React, { useContext, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Check } from 'lucide-react'
import CustomToast from '../../components/CustomToast'
import { toast, ToastContainer } from 'react-toastify'


const DashboardUserContext = createContext()

const DashboardUser = () => {

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
    <DashboardUserContext.Provider value={{
      handleToast
    }}>
      <ToastContainer position='top-right' hideProgressBar={true} autoClose={3000} closeButton={false}/>
      <Outlet />
    </DashboardUserContext.Provider>
  )
}

export const useUserDashboardContext = () => useContext(DashboardUserContext)
export default DashboardUser