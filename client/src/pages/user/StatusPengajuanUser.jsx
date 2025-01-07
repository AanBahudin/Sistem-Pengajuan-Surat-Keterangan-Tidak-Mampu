import React from 'react'
import { toast } from 'react-toastify'

export const loader = async() => {
  return null
}

const CustomToast = ({ closeToast }) => {
  return (
    <div className="grid grid-cols-[1fr_1px_80px] w-full">
      <div className="flex flex-col p-4">
        <h3 className="text-zinc-800 text-sm font-semibold">Email Received</h3>
        <p className="text-sm">You received a new email from somebody</p>
      </div>
      {/* that's the vertical line which separate the text and the buttons*/}
      <div className="bg-zinc-900/20 h-full" />
      <div className="grid grid-rows-[1fr_1px_1fr] h-full">
        {/*specifying a custom closure reason that can be used with the onClose callback*/}
        <button onClick={() => closeToast("reply")} className="text-purple-600">
          Reply
        </button>
        <div className="bg-zinc-900/20 w-full" />
        {/*specifying a custom closure reason that can be used with the onClose callback*/}
        <button onClick={() => closeToast("ignore")}>Ignore</button>
      </div>
    </div>
  )
}

const StatusPengajuanUser = () => {

  const handleToast = () => {
    toast(CustomToast, {
      closeButton: false,
      // remove the padding on the toast wrapper
      // make it 400px width
      // add a thin purple border because I like purple
      className: 'p-0 w-[400px] border border-purple-600/40',
      ariaLabel: 'Email received',
    })
  }

  return (
    <div>
      <button onClick={handleToast}> show toast </button>
    </div>
  )
}

export default StatusPengajuanUser