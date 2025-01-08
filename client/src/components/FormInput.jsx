import React from 'react'

const FormInput = ({ labelInput, inputType='text', inputName, placeholder, isAutoFocus=false, isRequired=true, defaultValue='', list=[], isReadOnly=false }) => {
  return (
    <div className='w-full flex flex-col gap-x-1'>
      <label htmlFor="Nama" className='text-slate-800 font-semibold capitalize'>{ labelInput }</label>

      {inputType === 'select' ? (
        <select className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/60 placeholder:lowercase' defaultValue={defaultValue} name={inputName} id={inputName} disabled={isReadOnly} value={isReadOnly ? defaultValue : null}>
          {list.map((item, index) => {
            return <option value={item} className='capitalize'>{item}</option>
          })}
        </select>
      ) : (
        <input className='text-sm px-4 py-2 outline-none rounded-md border-[2px] border-slate-300 text-slate-800 focus:border-newBlue/60 placeholder:lowercase' name={inputName} id={inputName} defaultValue={defaultValue} type={inputType} disabled={isReadOnly} value={isReadOnly ? defaultValue : null} placeholder={placeholder} autoFocus={isAutoFocus} required={isRequired} autoComplete='off' />
      )}
      </div>
  )
}

export default FormInput