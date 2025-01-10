import React from 'react'
import { X } from 'lucide-react'
import { useKelurahanContext } from '../pages/kelurahan/KelurahanLayout'

const ImageViewer = ({judul, nama, data}) => {

  const { toggleImageReview } = useKelurahanContext()

  return (
    <div className='fixed flex items-center flex-col h-[70vh] w-[50%] z-20 bg-white rounded-2xl px-10 py-4 overflow-hidden border-[2px] border-slate-200'>

      <section className='w-full flex justify-between items-center gap-x-4'>
        <h1 className='font-semibold text-slate-800'>{judul} {nama}</h1>
        <X onClick={() => toggleImageReview(false, '')} className='stroke-newRed' size={35} />
      </section>

      <img className='min-w-fit max-w-full overflow-hidden h-[70%] my-auto object-contain' src={data} alt="" />
    </div>
  )
}

export default ImageViewer