import React from 'react'
import { User, CalendarRange, MapPin } from 'lucide-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const KelurahanCardDashboard = ({_id, nama, nik, alamat, createdAt, kelurahan}) => {
  return (
    <Link to={`pengajuan/${_id}`} className='w-[280px] h-[25vh] rounded-xl bg-slate-100 p-2 cursor-default'>
        <section className='w-full flex items-center gap-x-4'>
            <User className='w-10 h-10 rounded-full p-2 stroke-slate-500 bg-white' />

            <div className='flex-1'>
            <h5 className='text-sm font-semibold'>{nama}</h5>
            <p className='text-xs text-slate-500'>{nik}</p>
            </div>
        </section>

        <section className='flex flex-col w-full'>
            <p className='text-xs flex items-center gap-x-4 mt-4 text-slate-700'> 
            <CalendarRange className='w-5 h-5 stroke-newBlue' />
            { moment(createdAt).format('L') }
            </p>

            <p className='text-xs flex items-center gap-x-4 mt-2 text-slate-700'> 
            <MapPin className='w-5 h-5 stroke-newBlue' />
            {kelurahan}
            </p>                  
        </section>
        <button className='text-sm w-[100%] bg-newBlue/30 text-slate-800 py-1 rounded-md mt-5'>lihat</button>
    </Link>
  )
}

export default KelurahanCardDashboard