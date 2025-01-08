import React from 'react'
import { MoveRight, NotepadTextDashed } from 'lucide-react'

const SidebarLink = ({ icon, name, path }) => {
  return (
    <section className='border-l-[2px] hover:shadow-md group hover:bg-slate-200 w-full px-2 py-4 border-transparent hover:border-l-[2px] rounded-md hover:border-newBlue duration-200 ease-in-out pl-4'>
        <div className='flex items-center justify-between'>

          <div className='flex gap-x-4'>
            <span className='group-hover:stroke-slate-900'>
              {icon}
            </span>
            <p className='text-sm text-slate-600 group-hover:text-slate-950'>{name}</p>
          </div>

          <MoveRight className='w-3 h-3 mr-4 my-auto stroke-slate-900 group-hover:visible invisible' />
        </div>
    </section>
  )
}

export default SidebarLink