import React, { useState } from 'react'
import { AtSign, KeyRound, X, EyeClosed, Eye, LoaderCircle, UserRound, Landmark } from 'lucide-react'
import customFetch from '../utils/customFetch'
import { Form, Link, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'

export const action = async({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customFetch.post('/auth/register', data)
    toast.success('Pendaftaran berhasil')
    return redirect('/')
  } catch (error) {
    const errArr = error.response.data.msg

    if (typeof errArr === 'string') {
      toast.error(errArr)
    } else {
      toast.error(errArr.join(' '));
    }
    return error
  }
}

const Register = () => {

  const [showPass, setShowPass] = useState(false)
  const [isNama, setNama] = useState('')
  const [isEmail, setEmail] = useState('')
  const isSubmitting = useNavigation().state === 'submitting'

  return (
    <Form method='POST' className='w-full h-[100%] p-10 flex items-center justify-center'>

      <section className='w-full h-[100%] rounded-xl bg-slate-200 flex justify-between items-center shadow-lg'>
        <div className='w-full pl-20 '>
          <Landmark size={45} className='bg-newBlue py-1 px-2 rounded-md stroke-white mb-2' />
          <h1 className='text-slate-600 font-bold text-2xl'>Selamat Datang di Pengajuan SKTM</h1>
          <p className='text-slate-500 text-sm'>Silahkan daftar terlebih dahulu untuk masuk ke dalam website</p>

          {/* INPUT SECTION CONTAINER */}
          <div className='w-[70%] mt-8 flex flex-col gap-y-4'>

            {/* SINGLE INPUT */}

            <div className=''>
              <label htmlFor="" className='font-semibold text-slate-700 mb-2'>Nama Lengkap</label>

              <div className='flex bg-slate-300 w-full h-12 items-center justify-between px-4 rounded-md'>
                <div className='flex items-center gap-x-4 w-full'>
                  <div className='h-full w-fit'>
                    <UserRound className='stroke-slate-600 w-6 h-full pr-2 ' />
                  </div>
                  <input type="text" name='nama' id='nama' required className='w-full bg-transparent h-full text-sm outline-none flex-1' placeholder='nama anda ...' autoFocus autoComplete='off' onChange={(e) => setNama(e.target.value)} value={isNama} />
                </div>

                <div className={`h-full ${ isNama ? 'visible' : 'invisible' }`}>
                  <X onClick={() => setNama("")} className='stroke-newRed mx-auto w-6 h-full pr-2 ' />
                </div>
              </div>
            </div>

            <div className=''>
              <label htmlFor="" className='font-semibold text-slate-700 mb-2'>Username</label>

              <div className='flex bg-slate-300 w-full h-12 items-center justify-between px-4 rounded-md'>
                <div className='flex items-center gap-x-4 w-full'>
                  <div className='h-full w-fit'>
                    <AtSign className='stroke-slate-600 w-6 h-full pr-2 ' />
                  </div>
                  <input type="email" name='email' id='email' required className='w-full bg-transparent h-full text-sm outline-none flex-1' placeholder='email anda ...' autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={isEmail} />
                </div>

                <div className={`h-full ${ isEmail ? 'visible' : 'invisible' }`}>
                  <X onClick={() => setEmail("")} className='stroke-newRed mx-auto w-6 h-full pr-2 ' />
                </div>
              </div>
            </div>


            <div className=''>
              <label htmlFor="" className='font-semibold text-slate-700 mb-2'>Password</label>

              <div className='flex bg-slate-300 w-full h-12 items-center justify-between px-4 rounded-md'>
                <div className='flex items-center gap-x-4 w-full'>
                  <div className='h-full w-fit'>
                    <KeyRound className='stroke-slate-600 w-6 h-full pr-2 ' />
                  </div>
                  <input name='password' id='password' required type={showPass ? 'text' : 'password'} className='w-full bg-transparent h-full text-sm outline-none flex-1' placeholder='password anda ...' />
                </div>

                <div className='h-full bg-red-' onClick={() => setShowPass(!showPass)}>
                  {showPass ? <Eye className='stroke-newBlue mx-auto w-6 h-full pr-2 ' /> : <EyeClosed className='stroke-newBlue mx-auto w-6 h-full pr-2 ' /> }

                </div>
              </div>
            </div>

            <button type='submit' disabled={isSubmitting} className='bg-newBlue/70 hover:bg-newBlue/90 disabled:bg-newBlue cursor-default py-2 rounded-lg my-2 text-white font-medium duration-200 ease-in-out flex justify-center items-center gap-x-2'>
              { isSubmitting && <LoaderCircle className='w-4 h-4 animate-spin' /> }
              <span>{ isSubmitting ? 'tunggu sebentar' : 'daftar' }</span>
            </button>
            <div className='flex items-start justify-start gap-x-2'>
              <input type="checkbox" name="aggrement" id="aggrement" required />
              <label htmlFor="aggrement" className='text-[12px] text-slate-700/80'>Dengan menyetujui proses daftar ini, Anda menerima dan setuju untuk mematuhi <span className='text-newBlue'> Ketentuan Layanan, Kebijakan Privasi, </span> serta semua aturan dan regulasi yang berlaku</label>
            </div>

            <p className='text-slate-900 text-[14px] text-center mt-4 leading-relaxed'>Sudah punya akun? <Link to='/' className='text-newBlue underline leading-relaxed'>Masuk dsini</Link></p>
          </div>
        </div>

        <div className='w-full h-full bg-newYellow rounded-r-xl'>
          <h1>Picture section</h1>
        </div>
      </section>

    </Form>
  )
}

export default Register