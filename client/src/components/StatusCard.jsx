import React from 'react'
import { CircleEllipsis, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const StatusCard = ({ _id, nama, createdAt, kelurahan, urutan, statusAccKelurahan, alasanPengajuan}) => {
  return (
    <Link to='pengajuan' className='w-[350px] h-[30vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-between flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
      {/* deret icon */}
      <div className='w-full flex items-center justify-end'>
      <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
      </div>

      <h2 className='mt-1 font-semibold text-lg text-slate-900 capitalize'>{nama}</h2>
      <p className='text-xs text-slate-600 mt-2 text-justify'>Diajukan pada tanggal <span className='text-newBlue font-semibold'>{ moment(createdAt).format('L') } </span> untuk { alasanPengajuan.slice(0, 70) } ...</p>

      <div className='w-full mt-4'>
      <p className='flex items-center justify-start text-sm gap-x-2 text-slate-900'>
          <CircleEllipsis className='w-4 h-4' />
          status
      </p>
      
      <p className={`text-sm ${statusAccKelurahan === 'terima' ? 'bg-newBlue/70' : (statusAccKelurahan === 'tolak' ? 'bg-newRed/70' : 'bg-slate-500')} py-2 px-4 rounded-md text-center text-white mt-1`}>{statusAccKelurahan === 'terima' ? 'Telah Diterima' : (statusAccKelurahan === 'tolak' ? 'Ajuan Tertolak' : 'Ajuan Pending')}</p>
      </div>
    </Link>
  )
}

export default StatusCard