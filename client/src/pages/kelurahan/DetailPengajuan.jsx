import React from 'react'

const DetailPengajuan = () => {
  return (
    <section className='w-full h-full overflow-y-auto no-scrollbar p-10 flex items-center justify-center flex-col'>

    {/* welcome sign */}
    <section className='w-full h-full rounded-xl p-4'>
      <h1 className='text-4xl font-semibold text-slate-900 capitalize'>Detail Permohonan</h1>
      <p className='text-md mt-2 text-slate-500 w-[80%]'>Pastikan semua data pemohon sudah sesuai dan lakukan verifikasi sebelum mengambil tindakan lanjutan. Anda dapat menyetujui, ataupun menolak.</p>

      {/* kartu pengajuan */}
      <section className='my-10 w-full grid grid-cols-12 gap-x-4'>  
      </section>

    </section>
  </section>
  )
}

export default DetailPengajuan