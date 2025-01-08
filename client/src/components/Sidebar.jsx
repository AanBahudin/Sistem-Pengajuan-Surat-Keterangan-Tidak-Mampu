import React from 'react'
import { Landmark, NotepadTextDashed } from 'lucide-react'
import SidebarLink from './SidebarLink'
import { sidebarLinks } from '../utils/constant'

const Sidebar = () => {
  return (
    <div className='w-[14%] bg-slate-100'>

      {/* sidebar main logo */}
      <section className='w-full flex items-center justify-center gap-x-3 mt-6'>
        <Landmark size={29} className='bg-newBlue p-1 rounded-md stroke-white' />
        <h1 className='text-xl font-semibold text-slate-900'>Dashboard</h1>
      </section>


      {/* links */}
      <section className='w-full flex flex-col gap-y-2 mt-16'>
        {sidebarLinks.map((item, index) => {
          return <SidebarLink {...item} key={index} />
        })}
      </section>
    </div>
  )
}

export default Sidebar