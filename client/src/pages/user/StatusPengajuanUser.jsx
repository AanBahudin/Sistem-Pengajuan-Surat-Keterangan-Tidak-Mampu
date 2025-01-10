import React from 'react'
import { useUserDashboardContext } from './DashboardUser'
import { SquarePlus } from 'lucide-react'
import { Link, useLoaderData } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import { StatusCard } from '../../components'


export const loader = async() => {
  try {
    const { data } = await customFetch.get('/user/permohonan')
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}

const StatusPengajuanUser = () => {

  const { permohonan } = useLoaderData()
  console.log(permohonan);
  
  const { user } = useUserDashboardContext()

  return (
    <section className='w-full h-full p-10 flex items-center justify-center flex-col'>

      {/* welcome sign */}
      <section className='w-full h-full rounded-xl p-4'>
        <h1 className='text-4xl font-semibold text-slate-900 capitalize'>Selamat Datang {user.nama} 👋</h1>
        <p className='text-md mt-2 text-slate-500'>Pantau status pengajuan surat Anda dengan mudah. Pengajuan yang ditampilkan merupakan 6 pengajuan terakhir.</p>

        {/* kartu pengajuan */}
        <section className='mt-10 w-full grid grid-cols-3 gap-y-6'>
          {/* tampilkan jika tidak ada pengajuan sama sekali */}
          
          { permohonan.length === 0 ? (
            <Link to='pengajuan' className='w-[350px] h-[30vh] rounded-xl border-2 border-transparent px-4 bg-newBlue/60 hover:bg-newBlue/80 flex items-center justify-center flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
              <SquarePlus size={50} className='rounded-md stroke-slate-100 mb-2' />
              <h1 className='text-xl font-semibold text-slate-900'>Tambah Pengajuan</h1>
              <p className='text-sm text-center  mt-2 text-slate-800'>ingin mengajukan? klik kartu ini untuk melakukan pengajuan</p>
            </Link>
          )  : (
            <>
              {permohonan.map((item, index) => {
                const urutan = ['Pertama', 'Kedua', 'Terakhir']
                return <StatusCard key={index} {...item} urutan={urutan[index]} />
              })}
            </>
          )}



        </section>
      </section>


    </section>
  )
}

export default StatusPengajuanUser