import React from 'react'
import { ExternalLink, MapPinHouse, Fingerprint } from 'lucide-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const KelurahanPengajuanCard = ({ nama, nik, createdAt, kelurahan, alamatPemohon }) => {
  return (
    <Link to='pengajuan' className='w-[380px] h-[35vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-between flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
          {/* deret icon */}
          <div className='w-full flex items-center justify-end'>
          <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
          </div>

          <h2 className='mt-1 font-semibold text-lg text-slate-900 capitalize'>{nama}</h2>
          <p className='text-xs text-slate-600  text-justify'>Pembuatan surat keterangan tidak mampu diajukan oleh <span className='font-bold text-newBlue'> {nama} </span> pada tanggal { moment(createdAt).format('L') } di kelurahan {kelurahan}</p>

          <div className='w-full'>
            
            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 truncate'>
              <MapPinHouse className='w-4 h-4 stroke-newBlue' />
              {alamatPemohon}
            </p>

            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 mt-2 truncate'>
              <Fingerprint className='w-4 h-4 stroke-newBlue' />
               {nik}
            </p>
            
            <p className='text-sm bg-newBlue/70 py-2 px-4 rounded-md text-center text-white mt-4'>lihat detail</p>
          </div>
        </Link>
  )
}

export default KelurahanPengajuanCard