import React from 'react'
import { useUserDashboardContext } from './DashboardUser'
import { CircleEllipsis, ExternalLink, SquarePlus } from 'lucide-react'
import { Link } from 'react-router-dom'

export const loader = async() => {
  return null
}

const StatusPengajuanUser = () => {

  const { user } = useUserDashboardContext()

  return (
    <section className='w-full h-full p-10 flex items-center justify-center flex-col'>

      {/* welcome sign */}
      <section className='w-full h-full rounded-xl p-4'>
        <h1 className='text-4xl font-semibold text-slate-900'>Selamat Datang {user.nama} 👋</h1>
        <p className='text-md mt-2 text-slate-500'>Pantau status pengajuan surat Anda dengan mudah. Anda hanya dapat memiliki maksimal 3 pengajuan. Untuk mengajukan yang baru, Anda harus membatalkan salah satu dari yang sedang berjalan.</p>

        {/* kartu pengajuan */}
        <section className='mt-10 w-full grid grid-cols-3'>
          

          {/* tampilkan jika tidak ada pengajuan sama sekali */}

          {/* <Link to='pengajuan' className='w-[350px] h-[30vh] rounded-xl border-2 border-transparent px-4 bg-newBlue/60 hover:bg-newBlue/80 flex items-center justify-center flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
            <SquarePlus size={50} className='rounded-md stroke-slate-100 mb-2' />
            <h1 className='text-xl font-semibold text-slate-900'>Tambah Pengajuan</h1>
            <p className='text-sm text-center  mt-2 text-slate-800'>ingin mengajukan? klik kartu ini untuk melakukan pengajuan</p>
          </Link> */}

          <Link to='pengajuan' className='w-[350px] h-[30vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-start flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
            {/* deret icon */}
            <div className='w-full flex items-center justify-end'>
              <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
            </div>

            <h2 className='mt-1 font-semibold text-lg text-slate-900'>Pengajuan Pertama</h2>
            <p className='text-sm text-slate-600 mt-2 text-justify'>Diajukan oleh <span className='font-bold text-newBlue'> {user.nama} </span> pada tanggal 12/12/2004 untuk di kelurahan Bukit Wolio Indah</p>

            <div className='w-full mt-2'>
              <p className='flex items-center justify-start text-sm gap-x-2 text-slate-900'>
                <CircleEllipsis className='w-4 h-4' />
                status
              </p>
              
              <p className='text-sm bg-newYellow/70 py-2 px-4 rounded-md text-center text-white mt-1'>pending</p>
            </div>
          </Link>

          <Link to='pengajuan' className='w-[350px] h-[30vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-start flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
            {/* deret icon */}
            <div className='w-full flex items-center justify-end'>
              <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
            </div>

            <h2 className='mt-1 font-semibold text-lg text-slate-900'>Pengajuan Kedua</h2>
            <p className='text-sm text-slate-600 mt-2 text-justify'>Diajukan oleh <span className='font-bold text-newBlue'> {user.nama} </span> pada tanggal 12/12/2004 untuk di kelurahan Bukit Wolio Indah</p>

            <div className='w-full mt-2'>
              <p className='flex items-center justify-start text-sm gap-x-2 text-slate-900'>
                <CircleEllipsis className='w-4 h-4' />
                status
              </p>
              
              <p className='text-sm bg-newBlue/70 py-2 px-4 rounded-md text-center text-white mt-1'>diterima</p>
            </div>
          </Link>

          <Link to='pengajuan' className='w-[350px] h-[30vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-start flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
            {/* deret icon */}
            <div className='w-full flex items-center justify-end'>
              <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
            </div>

            <h2 className='mt-1 font-semibold text-lg text-slate-900'>Pengajuan Ketiga</h2>
            <p className='text-sm text-slate-600 mt-2 text-justify'>Diajukan oleh <span className='font-bold text-newBlue'> {user.nama} </span> pada tanggal 12/12/2004 untuk di kelurahan Bukit Wolio Indah</p>

            <div className='w-full mt-2'>
              <p className='flex items-center justify-start text-sm gap-x-2 text-slate-900'>
                <CircleEllipsis className='w-4 h-4' />
                status
              </p>
              
              <p className='text-sm bg-newRed/70 py-2 px-4 rounded-md text-center text-white mt-1'>ditolak</p>
            </div>
          </Link>
        </section>
      </section>


    </section>
  )
}

export default StatusPengajuanUser