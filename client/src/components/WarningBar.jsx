import React from 'react'
import { TriangleAlert } from 'lucide-react'
import { Link } from 'react-router-dom'

const WarningBar = () => {
  return (
    <div className='w-full mt-4 py-2 px-2 gap-x-2 flex rounded-lg bg-newRed/60 items-center'>
        <TriangleAlert className='w-4 h-4 stroke-newRed' />
        <h1 className='font-medium text-white'>Maaf, Anda tidak bisa mengajukan surat keterangan jika data diri anda belum lengkap. <Link to='/user/profil' className='underline'>Silahkan lengkapi terlebih dahulu</Link> </h1>
    </div>
  )
}

export default WarningBar