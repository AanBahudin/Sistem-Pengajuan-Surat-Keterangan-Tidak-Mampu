import React from 'react'

const FormTextarea = ({ labelInput, nameInput, placeholder='', defaultValue='', isReadOnly=false }) => {
  return (
    <div className='flex flex-col gap-x-1'>
        <label htmlFor={nameInput} className='text-slate-800 font-semibold capitalize'>{labelInput}</label>
        <textarea name={nameInput} id={nameInput} className='w-full h-[20vh] text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 placeholder:lowercase focus:border-newBlue/80 resize-none overflow-y-auto' placeholder={placeholder} required autoComplete='off' defaultValue={defaultValue} value={isReadOnly ? defaultValue : null} disabled={isReadOnly}></textarea>
    </div>
  )
}

export default FormTextarea