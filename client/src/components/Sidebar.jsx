import React from 'react'
import { Landmark, NotepadTextDashed } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='w-[14%] bg-slate-100'>

      {/* sidebar main logo */}
      <section className='w-full flex items-center justify-center gap-x-3 mt-6'>
        <Landmark size={29} className='bg-newBlue p-1 rounded-md stroke-white' />
        <h1 className='text-xl font-semibold text-slate-900'>Dashboard</h1>
      </section>


      {/* links */}
      <section className='bg-slate-200 w-full px-2 py-4 border-transparent border-l-[4px] rounded-md hover:border-newBlue duration-200 ease-in-out pl-4 mt-16'>
        <div className='flex items-center gap-x-4'>
          <NotepadTextDashed className='w-5 h-5 stroke-slate-500' />
          <p className='text-sm text-slate-800'>Pengajuan</p>
        </div>
      </section>
    </div>
  )
}

export default Sidebar