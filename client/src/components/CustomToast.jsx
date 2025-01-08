import React from 'react'
import { toast } from 'react-toastify'
import { Check, Info, TriangleAlert, CircleAlert } from 'lucide-react'

 const CustomToast = ({ closeToast, type, title, description }) => {
    return (
      <div className="w-[500px] flex items-center gap-x-6">
        {/* WILL FIX THIS LOGIC LATER */}
        { type === 'success' ?  <Check className='stroke-white ' /> : (
            type === 'info' ? <Info className='stroke-white '/> : (
                type === 'warning' ? <CircleAlert className='stroke-white'/> : <TriangleAlert className='stroke-white ' />
            )
        )}
        
        <div>
            <h1 className='text-white font-semibold text-sm'>{title}</h1>
            <p className='text-[12px] mt-1 text-white'>{description}</p>
        </div>
      </div>
    )
  }

  export const handleToast = (type, title, deskripsi, closeTime) => {
      
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
        autoClose: closeTime === false ? false : closeTime,
        className: `py-1 px-4 w-[400px] ${bg} border-[1px] border-slate-300 rounded-xl`,
        ariaLabel: 'Login Berhasil',
      })
    }

export default CustomToast;