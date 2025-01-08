import { Scan, SquarePlus } from 'lucide-react'
import React from 'react'
import { Form } from 'react-router-dom'
import { FormInput } from '../../components'

export const loader = async() => {
  return null
}

const PengajuanUser = () => {
  return (
    <section className='w-full h-full overflow-y-auto p-10 flex items-center justify-center flex-col'>

      {/* welcome sign */}
      <section className='w-full h-full rounded-xl p-4'>
        <h1 className='text-4xl font-semibold text-slate-900'>Ajukan Surat Keterangan Tidak Mampu Anda!</h1>
        <p className='text-md w-[80%] mt-2 text-slate-500'>Isi formulir pengajuan di bawah ini untuk memulai proses permohonan. Pastikan data yang Anda masukkan lengkap dan benar agar proses berjalan lancar.</p>

        {/* container pengajuan */}
        <Form method='POST' className='mt-10 w-full'>

          <div className='w-full grid grid-cols-12 gap-x-6'>

            {/* kolom kiri */}
            <section className='w-full col-span-7 h-fit'>

              <h4 className='text-lg font-medium text-slate-800 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Pemohon</h4>

              <article className='grid grid-cols-2 gap-4'>

                <FormInput inputName='nama' placeholder='nama lengkap'Tanggal lahir labelInput='Nama' isAutoFocus={true} />
                <FormInput inputName='nik' placeholder='nomor induk keluarga'Tanggal lahir labelInput='Nomor induk keluarga' />
                <FormInput inputName='jenisKelamin'Tanggal lahir labelInput='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} />
                <FormInput inputName='pekerjaan' placeholder='Pekerjaan'Tanggal lahir labelInput='pekerjaan' />
                <FormInput inputName='tanggalLahir' placeholder='kota lahir'Tanggal lahir labelInput='Tempat lahir' />
                <FormInput inputName='tempatLahir' placeholder='Kota lahir'Tanggal lahir labelInput='Tanggal lahir' inputType='date' />
                
              </article>

              <h4 className='text-lg font-medium text-slate-800 mt-6 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Ayah</h4>

              <article className='grid grid-cols-2 gap-4'>
                <FormInput inputName='namaAyah' placeholder='nama lengkap'Tanggal lahir labelInput='Nama ayah' />
                <FormInput inputName='nikAyah' placeholder='nomor induk keluarga'Tanggal lahir labelInput='Nomor induk keluarga' />
                <FormInput inputName='jenisKelaminAyah'Tanggal lahir labelInput='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} defaultValue='Pria' />
                <FormInput inputName='pekerjaanAyah' placeholder='Pekerjaan ayah'Tanggal lahir labelInput='pekerjaan' />
                <FormInput inputName='tanggalLahirAyah' placeholder='kota lahir'Tanggal lahir labelInput='Tempat lahir' />
                <FormInput inputName='tempatLahirAyah' placeholder='Kota lahir'Tanggal lahir labelInput='Tanggal lahir' inputType='date' />
              </article>

              <h4 className='text-lg font-medium text-slate-800 mt-6 mb-4 bg-slate-200 px-2 py-1 rounded-md'>Identitas Ibu</h4>

              <article className='grid grid-cols-2 gap-4'>
                <FormInput inputName='namaIbu' placeholder='nama lengkap'Tanggal lahir labelInput='Nama ibu' />
                <FormInput inputName='nikIbu' placeholder='nomor induk keluarga'Tanggal lahir labelInput='Nomor induk keluarga' />
                <FormInput inputName='jenisKelaminIbu'Tanggal lahir labelInput='Jenis kelamin' inputType='select' list={["Pria", "Wanita"]} defaultValue='Wanita' />
                <FormInput inputName='pekerjaanIbu' placeholder='Pekerjaan'Tanggal lahir labelInput='pekerjaan' />
                <FormInput inputName='tanggalLahirIbu' placeholder='kota lahir'Tanggal lahir labelInput='Tempat lahir' />
                <FormInput inputName='tempatLahirIbu' placeholder='Kota lahir'Tanggal lahir labelInput='Tanggal lahir' inputType='date' />
              </article>

            </section>

            {/* kolom kanan */}
            <section className='w-full col-span-5 grid grid-cols-1 ml-6 gap-y-4 h-fit'>
              <div className='flex flex-col gap-x-1'>
                <label htmlFor="Nama" className='text-slate-800 font-semibold'>Alamat Pemohon</label>
                <textarea name="alamat" id="alamat" className='w-full h-[20vh] text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/80 resize-none overflow-y-auto' placeholder='Alamat lengkap'></textarea>
              </div>

              <div className='flex flex-col gap-x-1'>
                <label htmlFor="Nama" className='text-slate-800 font-semibold'>Alamat Wali</label>
                <textarea name="alamat" id="alamat" className='w-full h-[20vh] text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/80 resize-none overflow-y-auto' placeholder='Alamat lengkap'></textarea>
              </div>

              <div className='flex flex-col gap-x-1'>
                <p className='text-slate-800 font-semibold'>Foto KTP Pemohon</p>
                <section className='w-full h-[20vh] text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/80 resize-none overflow-y-auto flex items-center justify-center' >
                    <Scan className='w-14 h-14 stroke-slate-500/40' />
                </section>
                <label htmlFor="ktp" className='bg-newBlue/80 w-full py-2 rounded-md text-white text-center mt-2 text-sm'>upload kartu identitas</label>
                <input type="file" name="ktp" id="ktp" accept='image/*' className='hidden' />
              </div>

              <div className='flex flex-col gap-x-1'>
                <p className='text-slate-800 font-semibold'>Foto Scan Kartu Keluarga</p>
                <section className='w-full h-[20vh] text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/80 resize-none overflow-y-auto flex items-center justify-center' >
                    <Scan className='w-14 h-14 stroke-slate-500/40' />
                </section>
                <label htmlFor="kk" className='bg-newBlue/80 w-full py-2 rounded-md text-white text-center mt-2 text-sm'>upload kartu keluarga</label>
                <input type="file" name="kk" id="kk" accept='image/*' className='hidden' />
              </div>
            </section>

            <div className='col-span-7 mt-6 mb-20 flex flex-col'>
              <button className='w-full py-3 font-semibold cursor-default rounded-md text-sm text-white bg-newBlue/80 hover:bg-newBlue duration-200 ease-in-out col-span-2 text-center'>Ajukan</button>
              <p className='text-xs text-slate-500 italic mt-2'> <span className='text-newBlue font-bold'>Peringatan! </span> pastikan semua data yang Anda masukkan benar dan sesuai dengan fakta. Manipulasi data atau memberikan informasi palsu dapat dikenakan sanksi hukum sesuai peraturan yang berlaku.</p>
            </div>
          </div>


        </Form>
      </section>


    </section>
  )
}

export default PengajuanUser