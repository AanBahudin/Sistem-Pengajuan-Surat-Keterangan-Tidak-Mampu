import React from 'react'
import { ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'


const SidebarLink = ({ icon, name, path }) => {
  return (
    <NavLink className={({ isActive }) =>
      `border-l-[2px] hover:shadow-md group hover:bg-slate-200 w-full px-2 py-5 
       border-transparent hover:border-l-[2px] rounded-md hover:border-newBlue 
       duration-200 ease-in-out pl-4 ${isActive ? 'bg-slate-200 text-slate-900' : ''}`
    } end={true} to={path}>
        <div className='flex items-center justify-between'>

          <div className='flex gap-x-4'>
            <span className='group-hover:stroke-slate-900'>
              {icon}
            </span>
            <p className='text-sm text-slate-600 group-hover:text-slate-950'>{name}</p>
          </div>

          <NavLink className={({ isActive }) => `${isActive ? 'visible' : 'invisible'}`} to={path} end>
            <ChevronRight className="w-3 h-3 mr-4 my-auto group-hover:stroke-newBlue group-hover:visible" />
          </NavLink>
        </div>
    </NavLink>
  )
}

export default SidebarLink