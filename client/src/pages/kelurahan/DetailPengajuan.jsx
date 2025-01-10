import React from 'react'
import {DataContainer } from '../../components'
import { useLoaderData, useNavigation } from 'react-router-dom'
import customFetch from '../../utils/customFetch'

export const loader = async({ params }) => {
  try {
    const { data } = await customFetch.get(`/kelurahan/${params.id}`)
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}

const DetailPengajuan = () => {

  const isSubmitting = useNavigation().state === 'submitting'
  const {data} = useLoaderData()
  

  return (
    <section className='w-full h-full overflow-y-auto no-scrollbar p-10 flex items-center justify-center flex-col'>

    {/* welcome sign */}
    <section className='w-full h-full rounded-xl p-4'>
      <h1 className='text-4xl font-semibold text-slate-900 capitalize'>Detail Permohonan</h1>
      <p className='text-md mt-2 text-slate-500 w-[80%]'>Pastikan semua data pemohon sudah sesuai dan lakukan verifikasi sebelum mengambil tindakan lanjutan. Anda dapat menyetujui, ataupun menolak.</p>

      <section className='mt-10 w-full'>

        <div className='w-full grid grid-cols-12 gap-x-6'>

          {/* kolom kiri */}
          <section className='w-full col-span-7 h-fit'>

            <h4 className='text-lg font-medium text-slate-800 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Pemohon</h4>

            <article className='grid grid-cols-2 gap-4'>

              <DataContainer labelData='Nama lengkap' valueData={data.nama} />
              <DataContainer labelData='Nomor induk keluarga' valueData={data.nik} />
              <DataContainer inputName='jenisKelamin'labelData='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} />
              <DataContainer inputName='pekerjaan' placeholder='Pekerjaan' labelData='pekerjaan' />
              <DataContainer inputName='tanggalLahir' placeholder='tanggal lahir' labelData='tanggal lahir' inputType='date' />
              <DataContainer inputName='tempatLahir' placeholder='Kota lahir' labelData='tempat lahir'  />
              
            </article>

            <h4 className='text-lg font-medium text-slate-800 mt-6 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Ayah</h4>

            <article className='grid grid-cols-2 gap-4'>
              <DataContainer inputName='namaAyah' placeholder='nama lengkap'labelData='Nama ayah' />
              <DataContainer inputName='nikAyah' placeholder='nomor induk keluarga'labelData='Nomor induk keluarga' />
              <DataContainer inputName='jenisKelaminAyah'labelData='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} defaultValue='Pria' />
              <DataContainer inputName='pekerjaanAyah' placeholder='Pekerjaan ayah'labelData='pekerjaan' />
              <DataContainer inputName='tanggalLahirAyah' placeholder='kota lahir' labelData='tanggal lahir'  inputType='date' />
              <DataContainer inputName='tempatLahirAyah' placeholder='Kota lahir' labelData='tempat lahir' />
            </article>

            <h4 className='text-lg font-medium text-slate-800 mt-6 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Ibu</h4>

            <article className='grid grid-cols-2 gap-4'>
              <DataContainer inputName='namaIbu' placeholder='nama lengkap'labelData='Nama ibu' />
              <DataContainer inputName='nikIbu' placeholder='nomor induk keluarga'labelData='Nomor induk keluarga' />
              <DataContainer inputName='jenisKelaminIbu'labelData='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} defaultValue='Wanita' />
              <DataContainer inputName='pekerjaanIbu' placeholder='Pekerjaan'labelData='pekerjaan ibu' />
              <DataContainer inputName='tanggalLahirIbu' placeholder='kota lahir'labelData='tanggal lahir' inputType='date' />
              <DataContainer inputName='tempatLahirIbu' placeholder='Kota lahir'labelData='tempat lahir' />
            </article>

            
          </section>

            {/* kolom kanan */}
          <section className='w-full col-span-5 grid grid-cols-1 ml-6 gap-y-4 h-fit'>

        
          </section>

          <div className='col-span-7 mt-6 mb-20 flex flex-col'>
            <button disabled={isSubmitting} type='submit' className='w-full flex justify-center items-center gap-x-4 py-3 font-semibold cursor-default rounded-md text-sm text-white bg-newBlue/80 hover:bg-newBlue duration-200 ease-in-out col-span-2 text-center'>
              { isSubmitting && <LoaderCircle className='w-4 h-4 animate-spin' /> }
              <span>{ isSubmitting ? 'Mengajukan ...' : 'Ajukkan' }</span>
              </button>
              <p className='text-xs text-slate-500 italic mt-2'> <span className='text-newBlue font-bold'>Peringatan! </span> pastikan semua data yang Anda masukkan benar dan sesuai dengan fakta. Manipulasi data atau memberikan informasi palsu dapat dikenakan sanksi hukum sesuai peraturan yang berlaku.</p>
            </div>
          </div>


        </section>

    </section>
  </section>
  )
}

export default DetailPengajuan