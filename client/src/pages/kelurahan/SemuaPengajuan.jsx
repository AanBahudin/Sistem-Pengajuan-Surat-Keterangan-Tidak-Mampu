import React from 'react'

const SemuaPengajuan = () => {
  return (
    <section className='w-full h-full p-10 flex items-center justify-center flex-col'>

      <section className='w-full h-full rounded-xl p-4'>
        <h1 className='text-4xl font-semibold text-slate-900 capitalize'>Daftar Semua Pengajuan</h1>
        <p className='text-md mt-2 text-slate-500 w-[80%]'>Berikut adalah daftar lengkap pengajuan Surat Keterangan Tidak Mampu yang masuk.
        Pantau status, verifikasi kelengkapan data, dan ambil tindakan sesuai kebutuhan.</p>

        {/* kartu pengajuan */}
        <section className='mt-10 w-full grid grid-cols-3 bg-blue-100'>
          <h1>test</h1>
          
        </section>
      </section>
  </section>
  )
}

export default SemuaPengajuan