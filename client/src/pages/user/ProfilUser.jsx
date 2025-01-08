import React from 'react'
import { useUserDashboardContext } from './DashboardUser'
import { User, Pencil, Camera, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'


export const loader = async() => {
  return null
}

const ProfilUser = () => {

  const { user } = useUserDashboardContext()
  const isEdit = new URLSearchParams(useLocation().search).get('edit') === 'true';

  return (
    <section className='w-full h-full overflow-y-auto p-10 flex items-center flex-col'>
      <section className='w-full h-full rounded-xl p-4'>
        <h1 className='text-4xl font-semibold text-slate-900'>Hallo, {user.nama} ✨</h1>
        <p className='text-md w-[80%] mt-2 text-slate-500'>Selamat datang di halaman profil Anda. Di sini, Anda dapat melihat detail informasi pribadi dan memperbaruinya jika diperlukan.</p>

        <section className='w-full pb-20 rounded-2xl shadow-lg mt-10'>
          <div className='w-full h-[30vh] bg-gradient-to-b from-newBlue to-blue-500 rounded-t-2xl flex justify-end items-end p-4 group'>
            <Link to={`${isEdit ? '/user/profil'  : '/user/profil?edit=true'}`} className={`${isEdit ? 'bg-newRed/80 hover:bg-newRed text-white ' : 'bg-white hover:bg-slate-200 text-slate-600 hover:text-slate-950 '} w-[12%] text-center justify-center py-2 px-4 rounded-lg text-sm flex items-center gap-x-3 group duration-100 ease-in-out cursor-default select-none transition-opacity opacity-0 group-hover:opacity-100`}>
              
                {isEdit ? <X className='w-3 h-3 stroke-white' /> : <Pencil className='w-3 h-3 stroke-slate-600 group-hover:stroke-slate-950' />}
                {isEdit ? 'Batal' : 'Edit Profil'}
            </Link>
            <input type="file" name="profile" id="profile" accept='image/*' className='hidden'/>
          </div>

            <article className='w-full flex px-6 gap-x-4'>
              {/* <img className='w-40 h-40 rounded-full border-4 border-white -mt-20 bg-slate-300' src="" alt="" /> */}
              <User className='w-40 h-40 rounded-full border-4 border-white -mt-20 bg-slate-300 stroke-slate-200' src="" alt="" />

              {isEdit && <p className='bg-newBlue/70 w-fit h-fit mt-2 hover:bg-newBlue py-2 px-4 rounded-lg text-sm text-slate-600 flex items-center gap-x-3 group hover:text-slate-950 duration-200 ease-in-out cursor-default select-none'><Camera className='w-5 h-5 stroke-slate-600 group-hover:stroke-slate-950' /> Pilih gambar</p>}
              
            </article>

            <article className='w-full px-10 mt-2'>
              <h1 className='text-lg font-semibold text-slate-800'>Aan Bahudin</h1>
              <p className='text-sm text-slate-600'>aanbahudin@gmail.com</p>
              <p className='text-sm text-slate-600 mt-2'>login sejak 12/12/24</p>

              <div className='mt-10'>
                <h1 className='text-2xl font-bold text-slate-800'>Identitas Diri</h1>

                <section className='w-full grid grid-cols-3 gap-x-6 gap-y-4 mt-6'>
                  <div className='w-full flex flex-col gap-x-1'>
                    <h5 className='text-slate-600 font-semibold capitalize'>nama lengkap</h5>
                    <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                  </div>

                  <div className='w-full flex flex-col gap-x-1'>
                    <h5 className='text-slate-600 font-semibold capitalize'>nomor induk keluarga</h5>
                    <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                  </div>

                  <div className='w-full flex flex-col gap-x-1'>
                    <h5 className='text-slate-600 font-semibold capitalize'>jenis kelamin</h5>
                    <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                  </div>

                  <div className='w-full flex flex-col gap-x-1'>
                    <h5 className='text-slate-600 font-semibold capitalize'>email</h5>
                    <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                  </div>

                  <div className='w-full flex flex-col gap-x-1'>
                    <h5 className='text-slate-600 font-semibold capitalize'>kontak</h5>
                    <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                  </div>

                  <div className='w-full flex flex-col gap-x-1'>
                    <h5 className='text-slate-600 font-semibold capitalize'>tanggal lahir</h5>
                    <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                  </div>
                </section>
              </div>

              <div className='mt-5'>
                <h1 className='text-2xl font-bold text-slate-800'>Informasi Domisili</h1>

                <section className='w-full grid grid-cols-12 gap-x-6 gap-y-4 mt-6'>


                  {/* sisi kiri */}
                  <article className='w-full col-span-7 gap-x-6 gap-y-4 grid grid-cols-2'>
                    <div className='w-full flex flex-col gap-x-1'>
                      <h5 className='text-slate-600 font-semibold capitalize'>nama lengkap</h5>
                      <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                    </div>

                    <div className='w-full flex flex-col gap-x-1'>
                      <h5 className='text-slate-600 font-semibold capitalize'>nomor induk keluarga</h5>
                      <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                    </div>

                    <div className='w-full flex flex-col gap-x-1'>
                      <h5 className='text-slate-600 font-semibold capitalize'>jenis kelamin</h5>
                      <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                    </div>

                    <div className='w-full flex flex-col gap-x-1'>
                      <h5 className='text-slate-600 font-semibold capitalize'>email</h5>
                      <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                    </div>

                    <div className='w-full flex flex-col gap-x-1'>
                      <h5 className='text-slate-600 font-semibold capitalize'>kontak</h5>
                      <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                    </div>

                    <div className='w-full flex flex-col gap-x-1'>
                      <h5 className='text-slate-600 font-semibold capitalize'>tanggal lahir</h5>
                      <p className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600 '>Aan Bahudin</p>
                    </div>
                  </article>

                  
                  {/* sisi kanan */}
                  <article className='w-full col-span-5 grid grid-cols-1'>
                    <div className='flex flex-col gap-x-1'>
                        <h5 className='text-slate-600 font-semibold capitalize'>Alamat Lengkap</h5>
                        <p className='w-full h-[20vh] text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-600  overflow-y-auto'></p>
                    </div>
                  </article>

                </section>
              </div>
              
            </article>
        </section>
      </section>



  </section>
  )
}

export default ProfilUser