import React from 'react'

const ImageViewer = ({}) => {
  return (
    <div className='fixed flex items-center flex-col h-[70vh] w-[50%] z-20 bg-slate-100 rounded-2xl px-10 py-4 overflow-hidden border-[2px] border-slate-200'>

      <section className='w-full flex justify-between items-center gap-x-4'>
        <h1 className='font-semibold text-slate-800'>Kartu Tanda Penduduk Aan Bahudin</h1>
        <X className='stroke-newRed' size={35} />
      </section>

      <img className='min-w-fit max-w-full overflow-hidden h-[70%] my-auto object-contain' src={data.ktp} alt="" />
    </div>
  )
}

export default ImageViewer