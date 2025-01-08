import React from 'react'
import { useUserDashboardContext } from './DashboardUser'

export const loader = async() => {
  return null
}

const ProfilUser = () => {

  const { user } = useUserDashboardContext()

  return (
    <section className='w-full h-full overflow-y-auto p-10 flex items-center justify-center flex-col'>

    {/* welcome sign */}
    <section className='w-full h-full rounded-xl p-4'>
      <h1 className='text-4xl font-semibold text-slate-900'>Hallo, {user.nama} ✨</h1>
      <p className='text-md w-[80%] mt-2 text-slate-500'>Selamat datang di halaman profil Anda. Di sini, Anda dapat melihat detail informasi pribadi dan memperbaruinya jika diperlukan.</p>

    </section>


  </section>
  )
}

export default ProfilUser