import React, { useState } from 'react'
import customFetch from '../../utils/customFetch'
import { useRtContext } from './RTLayout'
import handleErrorMessage from '../../utils/handleErrorMessage'
import { LoaderCircle } from 'lucide-react'
import { handleToast } from '../../components/CustomToast'
import { BigDataContainer, DataContainer, FormTextarea, ImageViewer, Maps } from '../../components'
import moment from 'moment'
import { Form, useLoaderData, useNavigation } from 'react-router-dom'

export const loader = async({params}) => {
  
  try {
    const { data } = await customFetch.get(`/rt/${params.id}`)
    return data
  } catch (error) {
    const errMsg = handleErrorMessage(error.response.data.msg)
    handleToast('error', 'Ada yang tidak beres', errMsg, 3000)
    return errMsg
  }

}

export const action = async({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  
  try {
      await customFetch.patch(`/rt/${params.id}`, data)
      return handleToast('success', 'Pengajuan di Terima', 'Hasil pengajuan akan segera dikirim ke pemohon', 3000)
  } catch (error) {
      console.log(error);
    return error
  }
}

const DetailPengajuanRT = () => {
  
  const {data} = useLoaderData()
  const [currentTab, setCurrentTab] = useState('first')
  
  const { showImageReview, toggleImageReview } = useRtContext()
  const isSubmitting = useNavigation().state === 'submitting'

  return (
    <Form method='POST' className='relative w-full h-full overflow-y-auto no-scrollbar p-10 flex items-center justify-center flex-col'>

      {/* image viewer test */}
      { showImageReview.show && <ImageViewer toggleImageReview={toggleImageReview} data={showImageReview.judul === 'ktp' ? data.ktp : data.kk} judul={showImageReview.judul === 'ktp' ? 'Kartu Tanda Penduduk'  : 'Kartu Keluarga'} nama={data.nama} /> }


    {/* welcome sign */}
      <section className='w-full h-full rounded-xl p-4'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-4xl font-semibold text-slate-900 capitalize'>Detail Permohonan</h1>
        </div>

        <p className='text-md mt-2 text-slate-500 w-[80%]'>Pastikan semua data pemohon sudah sesuai dan lakukan verifikasi sebelum mengambil tindakan lanjutan. Anda dapat menyetujui, ataupun menolak.</p>


        {/* TABS */}
        <div className='bg-white w-full border-[2px] slate-400 rounded-xl items-stretch flex justify-center mt-5'>
          <h1 onClick={() => setCurrentTab('first')} className={`p-3 ${currentTab === 'first' ? 'bg-slate-700 text-white' : null} text-slate-700 font-semibold w-full text-center  duration-200 ease-in-out rounded-md select- cursor-default`}>Identitas</h1>
          <h1 onClick={() => setCurrentTab('second')} className={`p-3 ${currentTab === 'second' ? 'bg-slate-700 text-white' : null} text-slate-700 font-semibold w-full text-center  duration-200 ease-in-out rounded-md select-none cursor-default`}>Alamat dan Alasan</h1>
          <h1 onClick={() => setCurrentTab('third')} className={`p-3 ${currentTab === 'third' ? 'bg-slate-700 text-white' : null} text-slate-700 font-semibold w-full text-center  duration-200 ease-in-out rounded-md select-none cursor-default`}>Koordinat Tempat Tinggal</h1>
        </div>


        <section className='mt-10 w-full'>
          <div className='w-full grid grid-cols-12 gap-x-6'>

          {currentTab === 'first' ? (
              <section className='w-full col-span-12 h-fit'>

                <h4 className='text-lg font-medium text-slate-800 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Pemohon</h4>

                <article className='grid grid-cols-2 gap-4'>

                  <DataContainer labelData='Nama lengkap' valueData={data.nama} />
                  <DataContainer labelData='Nomor induk keluarga' valueData={data.nik} />
                  <DataContainer labelData='jenis kelamin' valueData={data.jenisKelamin} />
                  <DataContainer labelData='pekerjaan' valueData={data.pekerjaan} />
                  <DataContainer labelData='Tanggal lahir' valueData={ moment(data.createdAt).format('L') } />
                  <DataContainer labelData='tempatLahir' valueData={data.tempatLahir} />
                  
                </article>

                <h4 className='text-lg font-medium text-slate-800 mt-6 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Ayah</h4>

                <article className='grid grid-cols-2 gap-4'>
                  <DataContainer valueData={data.namaAyah} labelData='Nama ayah' />
                  <DataContainer valueData={data.nikAyah} labelData='Nomor induk keluarga' />
                  <DataContainer valueData={data.jenisKelaminAyah} labelData='Jenis kelamin' />
                  <DataContainer valueData={data.pekerjaanAyah} labelData='pekerjaan' />
                  <DataContainer valueData={data.tanggalLahirAyah} labelData='tanggal lahir'  inputType='date' />
                  <DataContainer valueData={data.tempatLahirAyah} labelData='tempat lahir' />
                </article>

                <h4 className='text-lg font-medium text-slate-800 mt-6 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Ibu</h4>

                <article className='grid grid-cols-2 gap-4'>
                  <DataContainer valueData={data.namaIbu} placeholder='nama lengkap'labelData='Nama ibu' />
                  <DataContainer valueData={data.nikIbu} placeholder='nomor induk keluarga'labelData='Nomor induk keluarga' />
                  <DataContainer valueData="Wanita" labelData='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} defaultValue='Wanita' />
                  <DataContainer valueData={data.pekerjaanIbu} placeholder='Pekerjaan'labelData='pekerjaan ibu' />
                  <DataContainer valueData={data.tanggalLahirIbu} placeholder='kota lahir'labelData='tanggal lahir' inputType='date' />
                  <DataContainer valueData={data.tempatLahirIbu} placeholder='Kota lahir'labelData='tempat lahir' />
                </article>
                

                <h4 className='text-lg font-medium text-slate-800 mt-6 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Informasi Tambahan</h4> 

                <article className='w-full grid gap-x-4'>

                  { data.statusAccRt === 'belum' ? (
                    <FormTextarea   labelInput='Tambahkan catatan anda' nameInput='message' defaultValue=' ' placeholder="tambahkan catatan "  />
                  ) : (
                    <BigDataContainer labelInput='Catatan Ketua RT' dataValue={data.pesan.rt || 'Tidak ada catatan tambahan'} />
                  ) }
                
                </article>
                
              </section>

          ) : (
            currentTab === 'second' ? (
              <section className='w-full col-span-12 grid grid-cols-1 ml-6 gap-y-4 h-fit'>
                <BigDataContainer labelInput="alasan pengajuan" dataValue={data.alasanPengajuan} />
                <BigDataContainer labelInput="Alamat Lengkap" dataValue={data.alamatPemohon} />
                <BigDataContainer labelInput="Alamat Wali" dataValue={data.alamatwali} />

                <div className='flex flex-col gap-x-4'>
                    <p className='text-slate-800 font-semibold'>Foto KTP Pemohon</p>
                    <section className='w-full h-[30vh] text-sm px-10 py-5 group outline-none rounded-md border-[2px] red overflow-hidden border-slate-300 text-slate-800 focus:border-newBlue/80 flex items-center justify-center' >
                        <div className=' relative w-full h-full overflow-hidden rounded-md'>
                          <button onClick={() => toggleImageReview(true, 'ktp')} className='text-sm w-[10vw] absolute z-10 top-1/2 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-newBlue text-white rounded-xl py-2 px-10 transition-opacity opacity-0 group-hover:opacity-100'>lihat foto</button>
                          <img className='w-full h-full object-cover rounded-md group-hover:opacity-70 duration-200 ease-in-out' src={data.ktp} alt="" />
                        </div>
                    </section>
                </div>

                <div className='flex flex-col gap-x-1 mt-4'>
                    <p className='text-slate-800 font-semibold'>Foto KK Pemohon</p>
                    <section className='w-full h-[30vh] text-sm px-10 py-5 group outline-none rounded-md border-[2px] red overflow-hidden border-slate-300 text-slate-800 focus:border-newBlue/80 flex items-center justify-center' >
                        <div className=' relative w-full z-10 h-full overflow-hidden rounded-md'>
                          <button onClick={() => toggleImageReview(true, 'kk')} className='text-sm w-[10vw] absolute z-10 top-1/2 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-newBlue text-white rounded-xl py-2 px-10 transition-opacity opacity-0 group-hover:opacity-100'>lihat foto</button>
                          <img className='w-full h-full object-cover rounded-md group-hover:opacity-70 duration-200 ease-in-out' src={data.kk} alt="" />
                        </div>
                    </section>
                </div>
            
              </section>

            ) : (
              <div className='col-span-12 mb-10 flex flex-col'>
                  <p className='mb-6 text-slate-600 font-medium px-2 py-1'>
                    Pastikan lokasi perangkat Anda aktif untuk membantu kami melacak lokasi Anda dengan akurat. Jika lokasi yang terdeteksi tidak sesuai, Anda dapat menyeret pin pada peta untuk menyesuaikan lokasi Anda secara manual
                    </p>
                  <Maps />
                </div>
            )
          )}
          {/* kolom kiri */}

            {/* kolom kanan */}

          <div className='col-span-7 mt-10 mb-20 flex gap-x-6'>


            {data.statusAccRt === 'belum' ? (
              <>
                <div className='w-full'>
                  <button disabled={isSubmitting} name='status' value='terima' type='submit' className='w-full flex justify-center items-center gap-x-4 py-3 font-semibold cursor-default rounded-md text-sm text-white bg-newBlue/80 hover:bg-newBlue duration-200 ease-in-out col-span-2 text-center'>
                    { isSubmitting && <LoaderCircle className='w-4 h-4 animate-spin' /> }
                    <span>{ isSubmitting ? 'Mengajukan ...' : 'Terima' }</span>
                  </button>
                </div>

                <div className='w-full'>
                  <button disabled={isSubmitting} name='status' value='tolak' className='w-full flex justify-center items-center gap-x-4 py-3 font-semibold cursor-default rounded-md text-sm text-white bg-newRed/80 hover:bg-newRed duration-200 ease-in-out col-span-2 text-center'>
                    { isSubmitting && <LoaderCircle className='w-4 h-4 animate-spin' /> }
                    <span>{ isSubmitting ? 'Menolak ...' : 'Tolak' }</span>
                  </button>
                </div>
              </>
            ) : (
              <p className={`w-full flex justify-center items-center gap-x-4 py-3 font-semibold cursor-default rounded-md text-sm text-white ${data.statusAccRt === 'terima' ? 'bg-newBlue/80 hover:bg-newBlue' : 'bg-newRed/80 hover:bg-newRed'} duration-200 ease-in-out col-span-2 text-center`} >{ data.statusAccRt === 'terima' ? 'Sudah diterima' : 'tertolak' }</p>
            )}
            </div>
          </div>


        </section>

    </section>
  </Form>
  )
}

export default DetailPengajuanRT