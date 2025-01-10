import React, { useEffect, useState } from 'react'
import { User, Pencil, Camera, X, Save } from 'lucide-react'
import { Link, useLoaderData, useLocation, redirect } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import { DataContainer, BigDataContainer, FormInput, FormTextarea } from '../../components'
import { baubauData } from '../../utils/constant'

export const loader = async() => {
  try {
    const { data } = await customFetch.get('/user/currentUser')
    return data
  } catch (error) {
    console.log(error);
    return redirect('/')
  }
}

const ProfilUser = () => {

  const { user } = useLoaderData()
  
  const isEdit = new URLSearchParams(useLocation().search).get('edit') === 'true';
  const [selectedKecamatan, setSelectedKecamatan] = useState('Wolio')
  const [selectedKelurahan, setSelectedKelurahan] = useState([])
  console.log(user)

  useEffect(() => {
    const getKecamatan = baubauData.find(item => {
      return item.kecamatan === selectedKecamatan
    })

    setSelectedKelurahan(getKecamatan ? getKecamatan.kelurahan : [])
  }, [])

  const setChaining = (event) => {
    setSelectedKecamatan(event.target.value)

    const getKecamatan = baubauData.find(item => {
      return item.kecamatan === (event.target.value || selectedKecamatan) 
    })

    setSelectedKelurahan(getKecamatan ? getKecamatan.kelurahan : [])
  }  

  return (
    <section className='w-full h-full overflow-y-auto p-10 flex items-center flex-col'>
      <section className='w-full h-full rounded-xl p-4'>
        <h1 className='text-4xl font-semibold text-slate-900 capitalize'>Hallo, {user.nama} ✨</h1>
        <p className='text-md w-[80%] mt-2 text-slate-500'>Selamat datang di halaman profil Anda. Di sini, Anda dapat melihat detail informasi pribadi dan memperbaruinya jika diperlukan.</p>

        <section className='w-full pb-20 rounded-2xl shadow-lg mt-10'>
          <div className='w-full h-[30vh] bg-gradient-to-b from-newBlue to-blue-500 rounded-t-2xl flex justify-end items-end gap-x-4 p-4 group'>

            { isEdit ? (
                <button className={`bg-newBlue w-[12%] text-white text-center justify-center py-2 px-4 rounded-lg text-sm flex items-center gap-x-3 group duration-100 ease-in-out cursor-default select-none transition-opacity opacity-0 group-hover:opacity-100`}><Save className='w-4 h-4 stroke-white'/> Simpan</button>
            ) : null }

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
              <h1 className='text-lg font-semibold text-slate-800 capitalize'>{ user.nama }</h1>
              <p className='text-sm text-slate-600'>{ user.email }</p>
              <p className='text-sm text-slate-600 mt-2'>login sejak 12/12/24</p>

              <div className='mt-10'>
                <h1 className='text-2xl font-bold text-slate-800'>Identitas Diri</h1>

                <section className='w-full grid grid-cols-3 gap-x-6 gap-y-4 mt-6'>
                  <DataContainer labelData='nama lengkap' valueData={user.nama} />
                  <DataContainer labelData='nomor induk keluarga' valueData={user.nik} />
                  <DataContainer labelData='jenis kelamin' valueData={user.jenisKelamin} />
                  <DataContainer labelData='email' valueData={user.email} />
                  <DataContainer labelData='kontak ' valueData={user.nomor_hp} />
                  <DataContainer labelData='tempat lahir ' valueData={user.tanggalLahir} />
                  {/* { user.role === 'USER' ? <FormInput inputName='nik' placeholder='nomor induk keluarga'labelInput='Nomor induk keluarga' isReadOnly={!isEdit} defaultValue={user.nik || '-'} />  : null}
                  <FormInput inputName='jenisKelamin'labelInput='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} isReadOnly={!isEdit} defaultValue='Pria' />
                  <FormInput inputName='email' placeholder='email'labelInput='email' isReadOnly={!isEdit} defaultValue={user.email} />
                  <FormInput inputName='kontak' placeholder='Kontak' labelInput='kontak' isReadOnly={!isEdit} defaultValue='081217597905' />
                  <FormInput inputName='tempatLahir' labelInput='tanggal Lahir' inputType='date' isReadOnly={!isEdit} defaultValue='16/05/2003' /> */}
                </section>
              </div>

              <div className='mt-5'>
                <h1 className='text-2xl font-bold text-slate-800'>Informasi Domisili</h1>

                <section className='w-full grid grid-cols-12 gap-x-6 gap-y-4 mt-6'>


                  {/* sisi kiri */}
                  <article className='w-full col-span-7 gap-x-6 gap-y-4 grid grid-cols-2'>
                    <DataContainer labelData='Kecamatan ' valueData={user.kecamatan} />
                    <DataContainer labelData='Kelurahan ' valueData={user.kelurahan} />
                    <DataContainer labelData='Rukun Tetangga ' valueData={user.RT} />
                    <DataContainer labelData='Rukun Warga ' valueData={user.RW} />
                  </article>

                  
                  {/* sisi kanan */}
                  <article className='w-full col-span-5 grid grid-cols-1'>
                    <BigDataContainer labelInput='Alamat Lengkap' dataValue={user.alamat} />
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