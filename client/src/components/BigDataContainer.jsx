import React from 'react'

const BigDataContainer = ({ labelInput, dataValue }) => {
  return (
    <div className='flex flex-col gap-x-1'>
        <h5 className='text-slate-800 font-semibold capitalize'>{labelInput}</h5>
        <p className='w-full h-[20vh] text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 placeholder:lowercase focus:border-newBlue/80 resize-none overflow-y-auto'> {dataValue} </p>
    </div>
  )
}

export default BigDataContainer