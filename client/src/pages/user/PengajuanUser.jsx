import React, { useEffect, useState } from 'react'
import { Scan } from 'lucide-react'
import { Form, useNavigation } from 'react-router-dom'
import { FormInput, FormTextarea, Maps, WarningBar } from '../../components'
import { handleToast } from '../../components/CustomToast'
import {useUserDashboardContext} from './DashboardUser'
import customFetch from '../../utils/customFetch'

export const loader = async() => {
  return null
}

export const action = async({ request }) => {
  const formData = await request.formData()
  try {
    customFetch.post('/data', formData)
    return handleToast('success', 'Pengajuan dikirim', 'Ajuanmu telah dikirim. Lihat detailnya dimenu informasi', 3000)
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

const PengajuanUser = () => {
  
  const [selectedImage, setSelectedImage] = useState({ktpImage: null, kkImage: null})
  const { user, checkIsUserEligible, position } = useUserDashboardContext()
  const [currentTab, setCurrentTab] = useState('first')
  const { nama, jenisKelamin, pekerjaan, nik, tanggalLahir, tempatLahir, alamat } = user


  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  
  
  // for review photo before upload
  const imageUpload = (event, name) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(prevState => ({...prevState, [name]: URL.createObjectURL(file)
    }));
    }
  }

  return (
    <section className='w-full h-full overflow-y-auto p-10 flex items-center no-scrollbar justify-center flex-col'>

      <section className='w-full h-full rounded-xl p-4'>
        <h1 className='text-4xl font-semibold text-slate-900'>Ajukan Surat Keterangan Tidak Mampu Anda!</h1>
        <p className='text-md w-[80%] mt-2 text-slate-500'>Isi formulir pengajuan di bawah ini untuk memulai proses permohonan. Pastikan data yang Anda masukkan lengkap dan benar agar proses berjalan lancar.</p>


        <div className='bg-white w-full border-[2px] slate-400 rounded-xl items-stretch flex justify-center mt-5'>
          <h1 onClick={() => setCurrentTab('first')} className={`p-3 ${currentTab === 'first' ? 'bg-slate-700 text-white' : null} text-slate-700 font-semibold w-full text-center  duration-200 ease-in-out rounded-md`}>Identitas</h1>
          <h1 onClick={() => setCurrentTab('second')} className={`p-3 ${currentTab === 'second' ? 'bg-slate-700 text-white' : null} text-slate-700 font-semibold w-full text-center  duration-200 ease-in-out rounded-md`}>Alamat dan Alasan</h1>
          <h1 onClick={() => setCurrentTab('third')} className={`p-3 ${currentTab === 'third' ? 'bg-slate-700 text-white' : null} text-slate-700 font-semibold w-full text-center  duration-200 ease-in-out rounded-md`}>Koordinat Tempat Tinggal</h1>

        </div>

        { !checkIsUserEligible() && <WarningBar /> }

        {/* container pengajuan */}
        <Form method='POST' encType='multipart/form-data' className='mt-10 w-full'>

          <div className='w-full grid grid-cols-12 gap-x-6'>

            {/* kolom kiri */}

            { currentTab === 'first' ? (
              <section className='w-full col-span-12 h-fit'>

                <h4 className='text-lg font-medium text-slate-800 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Pemohon</h4>

                <article className='grid grid-cols-3 gap-4'>

                  <FormInput inputName='nama' placeholder='nama lengkap' labelInput='Nama' isAutoFocus={false} defaultValue={nama} />
                  <FormInput inputName='nik' placeholder='nomor induk keluarga' labelInput='Nomor induk keluarga' defaultValue={nik} />
                  <FormInput inputName='jenisKelamin'labelInput='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} defaultValue={jenisKelamin} />
                  <FormInput inputName='pekerjaan' placeholder='Pekerjaan' labelInput='pekerjaan' defaultValue={pekerjaan} />
                  <FormInput inputName='tanggalLahir' placeholder='tanggal lahir' labelInput='tanggal lahir' inputType='date' defaultValue={tanggalLahir.split('T')[0]} />
                  <FormInput inputName='tempatLahir' placeholder='Kota lahir' labelInput='tempat lahir' defaultValue={tempatLahir || ''}  />
                  
                </article>

                <h4 className='text-lg font-medium text-slate-800 mt-6 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Ayah</h4>

                <article className='grid grid-cols-3 gap-4'>
                  <FormInput inputName='namaAyah' placeholder='nama lengkap'labelInput='Nama ayah' />
                  <FormInput inputName='nikAyah' placeholder='nomor induk keluarga'labelInput='Nomor induk keluarga' />
                  <FormInput inputName='jenisKelaminAyah'labelInput='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} defaultValue='Pria' />
                  <FormInput inputName='pekerjaanAyah' placeholder='Pekerjaan ayah'labelInput='pekerjaan' />
                  <FormInput inputName='tanggalLahirAyah' placeholder='kota lahir' labelInput='tanggal lahir'  inputType='date' />
                  <FormInput inputName='tempatLahirAyah' placeholder='Kota lahir' labelInput='tempat lahir' />
                </article>

                <h4 className='text-lg font-medium text-slate-800 mt-6 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Ibu</h4>

                <article className='grid grid-cols-3 gap-4'>
                  <FormInput inputName='namaIbu' placeholder='nama lengkap'labelInput='Nama ibu' />
                  <FormInput inputName='nikIbu' placeholder='nomor induk keluarga'labelInput='Nomor induk keluarga' />
                  <FormInput inputName='jenisKelaminIbu'labelInput='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} defaultValue='Wanita' />
                  <FormInput inputName='pekerjaanIbu' placeholder='Pekerjaan'labelInput='pekerjaan ibu' />
                  <FormInput inputName='tanggalLahirIbu' placeholder='kota lahir'labelInput='tanggal lahir' inputType='date' />
                  <FormInput inputName='tempatLahirIbu' placeholder='Kota lahir'labelInput='tempat lahir' />
                </article>
              </section>
            ) : (
              currentTab === 'second' ? (
                <section className='w-full col-span-12 grid grid-cols-3  gap-4 h-fit'>

                  <FormTextarea labelInput='Alasan Pengajuan' nameInput='alasanPengajuan' placeholder='alasan' />
                  <FormTextarea labelInput='Alamat Pemohon' nameInput='alamatPemohon' placeholder='masukan alamat' defaultValue={alamat} />
                  <FormTextarea labelInput='Alamat wali' nameInput='alamatwali' placeholder='masukan alamat' />

                  <div className='flex flex-col gap-x-1'>
                    <p className='text-slate-800 font-semibold'>Foto KTP Pemohon</p>
                    <section className='w-full h-[20vh] text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/80 flex items-center justify-center' >
                        { selectedImage.ktpImage ? (
                          <img className='w-full h-full object-contain' src={selectedImage.ktpImage} alt="" />
                        ) : (
                          <Scan className='w-14 h-14 stroke-slate-500/40' />
                        ) }
                    </section>
                    <div className='flex gap-x-6'>
                      <button type='button' onClick={() => setSelectedImage(prevState => ({...prevState, ktpImage: null }))}  className={`bg-newRed/80 w-full py-2 rounded-md text-white text-center mt-2 text-sm ${selectedImage.ktpImage ? 'visible' : 'hidden'}`}>Hapus</button>
                      <label htmlFor="ktp" className='bg-newBlue/80 w-full py-2 rounded-md text-white text-center mt-2 text-sm'>upload kartu identitas</label>
                    </div>
                    <input type="file" name="ktp" id="ktp" accept='image/*' className='hidden' onChange={(event) => imageUpload(event, 'ktpImage')} />
                  </div>

                  <div className='flex flex-col gap-x-1'>
                    <p className='text-slate-800 font-semibold'>Foto Scan Kartu Keluarga</p>
                    <section className='w-full h-[20vh] text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/80 resize-none overflow-y-auto flex items-center justify-center' >
                        { selectedImage.kkImage ? (
                          <img className='w-full h-full object-contain' src={selectedImage.kkImage} alt="" />
                        ) : (
                          <Scan className='w-14 h-14 stroke-slate-500/40' />
                        ) }
                    </section>

                    <div className='flex gap-x-5'>
                      <button type='button' onClick={() => setSelectedImage(prevState => ({...prevState, kkImage: null }))} htmlFor="kk" className={`bg-newRed/80 w-full py-2 rounded-md text-white text-center mt-2 text-sm ${selectedImage.kkImage ? 'visible' : 'hidden'}`}>Hapus</button>
                      <label htmlFor="kk" className='bg-newBlue/80 w-full py-2 rounded-md text-white text-center mt-2 text-sm'>upload kartu keluarga</label>
                    </div>
                    <input type="file" name="kk" id="kk" accept='image/*' className='hidden' onChange={(event) => imageUpload(event, 'kkImage')} />
                  </div>
                </section>
              ) : (
              <div className='col-span-12 mb-10 flex flex-col'>
                <Maps />
              </div>
              )
            ) }
          </div>


        </Form>
      </section>


    </section>
  )
}

export default PengajuanUser
{/* { 
  checkIsUserEligible() && (
  <button disabled={isSubmitting} type='submit' className='w-full flex justify-center items-center gap-x-4 py-3 font-semibold cursor-default rounded-md text-sm text-white bg-newBlue/80 hover:bg-newBlue duration-200 ease-in-out col-span-2 text-center'>
    { isSubmitting && <LoaderCircle className='w-4 h-4 animate-spin' /> }
    <span>{ isSubmitting ? 'Mengajukan ...' : 'Ajukkan' }</span>
  </button>
  )
} */}