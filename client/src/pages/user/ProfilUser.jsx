import React, { useState } from 'react'
import { User, Pencil, Camera, X, Save } from 'lucide-react'
import { Link, useLoaderData, useLocation, redirect, Form } from 'react-router-dom'
import customFetch from '../../utils/customFetch'
import { DataContainer, BigDataContainer, FormInput, FormTextarea } from '../../components'
import { baubauData } from '../../utils/constant'
import { useUserDashboardContext } from './DashboardUser'
import { handleToast } from '../../components/CustomToast'

export const loader = async() => {
  try {
    const { data } = await customFetch.get('/user/currentUser')
    return data
  } catch (error) {
    console.log(error);
    return redirect('/')
  }
}

export const action = async({ request }) => {
  const formData = await request.formData()

  const file = formData.get('photo');
  if (file && file.size > 500000) {
    handleToast('warning', 'Peringatan file', 'Gambar yang anda pilih melebihi 5 MB.', 4000)
    return null
  }

  try {
    await customFetch.patch('/user/update', formData)
    handleToast('success', 'Profil diperbaharui !', 'Data diri dan domisili anda telah diperbaharui', 3000)    
    return redirect('/user/profil')
  } catch (error) {
    const errArr = error.response.data.msg

    if (typeof errArr === 'string') {
      handleToast('error', 'Ada yang tidak beres', errArr, 4000)
    } else {
      handleToast('error', 'Ada yang tidak beres', errArr.join(', '), 4000)
    }
    return error
  }
}


const ProfilUser = () => {

  const { user } = useLoaderData()
  
  const { dataKelurahan } = useUserDashboardContext()
  const isEdit = new URLSearchParams(useLocation().search).get('edit') === 'true';
  
  const [selectedKecamatan, setSelectedKecamatan] = useState(user.kecamatan)
  const [selectedKelurahan, setSelectedKelurahan] = useState(dataKelurahan)
  const [selectedImage, setSelectedImage] = useState(null)
  
  const imageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  const setChaining = (event) => {
    setSelectedKecamatan(event.target.value)
    const getKecamatan = baubauData.find(item => {
      return item.kecamatan === (event.target.value || selectedKecamatan) 
    })
    setSelectedKelurahan(getKecamatan ? getKecamatan.kelurahan : [])
  }  

  return (
    <section className='w-full h-full overflow-y-auto p-10 flex items-center flex-col'>
      <Form method='POST' encType='multipart/form-data' className='w-full h-full rounded-xl p-4'>
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


            <input type="file" name="photo" id="photo" accept='image/*' className='hidden' onChange={(event) => imageUpload(event)}/>
          </div>

            <article className='w-full flex px-6 gap-x-4'>
              {
                selectedImage && isEdit ? (
                  <img className='w-40 h-40 rounded-full object-cover border-4 border-white -mt-20 bg-slate-300 stroke-slate-200' src={selectedImage} alt="" />
                ) : (
                  user.photo ? (
                    <img className='w-40 h-40 rounded-full object-cover border-4 border-white -mt-20 bg-slate-300 stroke-slate-200' src={user.photo} alt="" />
                  ) : (
                    <User className='w-40 h-40 rounded-full border-4 border-white -mt-20 bg-slate-300 stroke-slate-200'/>
                  )
                )
              }
              {isEdit && <label htmlFor='photo'  className='bg-newBlue/70 w-fit h-fit mt-2 hover:bg-newBlue py-2 px-4 rounded-lg text-sm text-slate-600 flex items-center gap-x-3 group hover:text-slate-950 duration-200 ease-in-out cursor-default select-none'><Camera className='w-5 h-5 stroke-slate-600 group-hover:stroke-slate-950' /> Pilih gambar</label>}
              
            </article>

            <article className='w-full px-10 mt-2'>
              <h1 className='text-lg font-semibold text-slate-800 capitalize'>{ user.nama }</h1>
              <p className='text-sm text-slate-600'>{ user.email }</p>
              <p className='text-sm text-slate-600 mt-2'>login sejak 12/12/24</p>

              <div className='mt-10'>
                <h1 className='text-2xl font-bold text-slate-800'>Identitas Diri</h1>

                <section className='w-full grid grid-cols-3 gap-x-6 gap-y-4 mt-6'>

                  { !isEdit ? (
                    <>
                      <DataContainer labelData='nama lengkap' valueData={user.nama} />
                      <DataContainer labelData='nomor induk keluarga' valueData={user.nik} />
                      <DataContainer labelData='jenis kelamin' valueData={user.jenisKelamin} />
                      <DataContainer labelData='email' valueData={user.email} />
                      <DataContainer labelData='kontak ' valueData={user.nomor_hp} />
                      <DataContainer labelData='tanggal lahir ' valueData={user.tanggalLahir} />
                    </>
                  ) : (
                    <>
                      <FormInput inputName='nama' labelInput='nama lengkap' placeholder='masukan nama lengkap' isAutoFocus={true} defaultValue={user.nama} />
                      <FormInput inputName='nik' labelInput='nomor induk keluarga' placeholder='nik 16 digit' defaultValue={user.nik || ''} />
                      <FormInput inputName='jenisKelamin' labelInput='jenis kelamin' inputType='select'  defaultValue={user.jenisKelamin || 'Pria'} list={['Pria', 'Wanita']} />
                      <FormInput inputName='email' labelInput='Email' placeholder='masukan email' defaultValue={user.email} />
                      <FormInput inputName='nomor_hp' placeholder='masukan nomor telepon'labelInput='kontak' defaultValue={user.nomor_hp} />
                      <FormInput inputName='tanggalLahir' labelInput='tanggal Lahir' inputType='date' defaultValue={ user.tanggalLahir } />
                    </>

                  ) }
                </section>
              </div>

              <div className='mt-5'>
                <h1 className='text-2xl font-bold text-slate-800'>Informasi Domisili</h1>

                <section className='w-full grid grid-cols-12 gap-x-6 gap-y-4 mt-6'>


                  {/* sisi kiri */}
                  <article className='w-full col-span-7 gap-x-6 gap-y-4 grid grid-cols-2'>

                    {!isEdit ? (
                      <>
                        <DataContainer labelData='Kecamatan ' valueData={user.kecamatan} />
                        <DataContainer labelData='Kelurahan ' valueData={user.kelurahan} />
                        <DataContainer labelData='Rukun Tetangga ' valueData={user.RT} />
                        <DataContainer labelData='Rukun Warga ' valueData={user.RW} />
                      </>
                    ) : (
                      <>
                        <div className='w-full flex flex-col gap-x-1'>
                          <label htmlFor="kecamatan" className='text-slate-800 font-semibold capitalize'>Kecamatan</label>
                            <select onChange={(e) => setChaining(e)} className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/60 placeholder:lowercase'  name='kecamatan' id='kecamatan' >
                              {baubauData.map((item, index) => {
                                return <option key={index} value={item.kecamatan} className='capitalize'>{item.kecamatan}</option>
                              })}
                            </select>
                        </div>

                        <div className='w-full flex flex-col gap-x-1'>
                          <label htmlFor="kecamatan" className='text-slate-800 font-semibold capitalize'>Kelurahan</label>
                            <select className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/60 placeholder:lowercase' name='kelurahan' id='kelurahan'>
                              {selectedKelurahan.map((item, index) => {
                                return <option key={index} value={item} className='capitalize'>{item}</option>
                              })}
                            </select>
                        </div>

                        <FormInput inputName='RT' labelInput='rukun tetangga' placeholder='nomor rukun tetangga' defaultValue={user.RT} />                    
                        <FormInput inputName='RW' labelInput='Rukun Warga' placeholder='nomor rukun warga' defaultalue={user.RW} />                    
                      </>
                    )}


                  </article>

                  
                  {/* sisi kanan */}
                  <article className='w-full col-span-5 grid grid-cols-1'>
                    {!isEdit ? (
                      <BigDataContainer labelInput='Alamat Lengkap' dataValue={user.alamat || '-'} />
                    ) : (
                      <FormTextarea nameInput='alamat' defaultValue={user.alamat || ''} labelInput='alamat lengkap' placeholder='masukan alamat domisili lengkap' />
                    )}
                  </article>

                </section>
              </div>
              
            </article>
        </section>
      </Form>
  </section>
  )
}

export default ProfilUser