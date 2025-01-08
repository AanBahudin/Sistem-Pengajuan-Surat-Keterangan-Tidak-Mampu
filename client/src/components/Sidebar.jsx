import React from 'react'
import { Landmark, User } from 'lucide-react'
import SidebarLink from './SidebarLink'
import { sidebarLinks } from '../utils/constant'

const Sidebar = ({ data, logoutUser }) => {
  return (
    <div className='w-[15%] bg-slate-100 flex flex-col justify-between'>

      <article>
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
      </article>

      
      {/* logout container */}
      <section className='flex items-center justify-center gap-x-4 px-2 py-4 border-t-[1px] border-slate-200 bg-slate-200/60'>
          <User className='w-10 h-10 bg-slate-300/70 p-2 rounded-full stroke-slate-400' />
          
          <div>
            <h1 className='text-sm text-slate-900 font-bold'>{data.nama}</h1>
            <p className='text-[12px] text-slate-500 truncate'>{data.email}</p>
            <button onClick={logoutUser} className='text-[12px] bg-slate-200 border-[1px] border-newRed/40 w-full py-1 rounded-md mt-2 hover:bg-newRed hover:text-white cursor-default duration-200 ease-in-out'>keluar</button>
          </div>
      </section>
    </div>
  )
}

export default Sidebar