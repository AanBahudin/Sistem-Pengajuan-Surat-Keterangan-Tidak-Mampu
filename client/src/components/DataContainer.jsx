import React from 'react'

const DataContainer = () => {
  return (
    <div className='w-full flex flex-col gap-x-1'>
        <p className='text-slate-800 font-semibold capitalize'>{ labelInput }</p>
        <h5 className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/60 placeholder:lowercase'>Aan Bahudin</h5>
    </div>
  )
}

export default DataContainer