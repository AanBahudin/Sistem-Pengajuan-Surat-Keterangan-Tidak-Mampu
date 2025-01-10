import React from 'react'
import { CircleEllipsis, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const StatusCard = ({ nama, createdAt, kelurahan, urutan}) => {
  return (
    <Link to='pengajuan' className='w-[350px] h-[30vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-between flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
      {/* deret icon */}
      <div className='w-full flex items-center justify-end'>
      <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
      </div>

      <h2 className='mt-1 font-semibold text-lg text-slate-900 capitalize'>Pengajuan {urutan}</h2>
      <p className='text-xs text-slate-600 mt-2 text-justify'>Diajukan oleh <span className='font-bold text-newBlue'> {nama} </span> pada tanggal { moment(createdAt).format('L') } untuk di kelurahan { kelurahan }</p>

      <div className='w-full mt-4'>
      <p className='flex items-center justify-start text-sm gap-x-2 text-slate-900'>
          <CircleEllipsis className='w-4 h-4' />
          status
      </p>
      
      <p className='text-sm bg-newYellow/70 py-2 px-4 rounded-md text-center text-white mt-1'>pending</p>
      </div>
    </Link>
  )
}

export default StatusCard