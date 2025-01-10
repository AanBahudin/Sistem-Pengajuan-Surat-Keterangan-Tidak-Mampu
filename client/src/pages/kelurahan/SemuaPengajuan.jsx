import React, { useState } from 'react'
import { AtSign, Search, X, ExternalLink, Clipboard, MapPinHouse  } from 'lucide-react'
import { Link } from 'react-router-dom'

const SemuaPengajuan = () => {

  const [isEmail, setEmail] = useState('')

  return (
    <section className='w-full h-full p-10 flex items-center justify-center flex-col overflow-y-scroll no-scrollbar'>

      <section className='w-full h-full rounded-xl p-4'>
        <h1 className='text-4xl font-semibold text-slate-900 capitalize'>Daftar Semua Pengajuan</h1>
        <p className='text-md mt-2 text-slate-500 w-[80%]'>Berikut adalah daftar lengkap pengajuan Surat Keterangan Tidak Mampu yang masuk.
        Pantau status, verifikasi kelengkapan data, dan ambil tindakan sesuai kebutuhan.</p>


      {/* filter container */}
      <section className="w-full rounded-xl mt-10 flex items-center gap-x-4">

        <div className='w-[60%]'>
          <div className='flex border-[2px] border-slate-300 w-full h-12 items-center justify-between px-4 rounded-xl shadow-lg'>
            <div className='flex items-center gap-x-4 w-full'>
              <div className='h-full w-fit'>
                <AtSign className='stroke-slate-600 w-6 h-full pr-2 ' />
              </div>
              <input type="email" name='email' id='email' required className='w-full bg-transparent h-full text-sm outline-none flex-1' placeholder='cari nama pemohon' autoFocus autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={isEmail} />
            </div>

            <div className={`h-full ${ isEmail ? 'visible' : 'invisible' }`}>
              <X onClick={() => setEmail("")} className='stroke-newRed mx-auto w-6 h-full pr-2 ' />
            </div>
          </div>
        </div>

        <select className='w-[20%] h-12 border-[2px] border-slate-300 rounded-xl shadow-md text-sm px-2 text-slate-700' name="filter" id="filter">
          <option value="">Status</option>
        </select>

        <button className='w-[20%] flex h-12 items-center justify-center gap-x-4 rounded-xl bg-newBlue/80 text-sm lowercase text-white'>
          <Search className='w-5 h-5 stroke-white' />
          Cari Pengajuan
        </button>

      </section>

        {/* kartu pengajuan */}
      <section className='mt-10 w-full grid grid-cols-3 gap-y-4 gap-x-10'>
        <Link to='pengajuan' className='w-[380px] h-[35vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-between flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
          {/* deret icon */}
          <div className='w-full flex items-center justify-end'>
          <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
          </div>

          <h2 className='mt-1 font-semibold text-lg text-slate-900 capitalize'>Aan Bahudin</h2>
          <p className='text-xs text-slate-600  text-justify'>Pembuatan surat keterangan tidak mampu diajukan oleh <span className='font-bold text-newBlue'> Aan Bahudin </span> pada tanggal 22/12/2021 di kelurahan Bukit Wolio Indah</p>

          <div className='w-full'>
            
            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 truncate'>
              <MapPinHouse className='w-4 h-4 stroke-newBlue' />
              Jalan gatot subroto No 34 A
            </p>

            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 mt-2 truncate'>
              <Clipboard className='w-4 h-4 stroke-newBlue' />
               RT 012
            </p>
            
            <p className='text-sm bg-newBlue/70 py-2 px-4 rounded-md text-center text-white mt-4'>lihat detail</p>
          </div>
        </Link>

        <Link to='pengajuan' className='w-[380px] h-[35vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-between flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
          {/* deret icon */}
          <div className='w-full flex items-center justify-end'>
          <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
          </div>

          <h2 className='mt-1 font-semibold text-lg text-slate-900 capitalize'>Aan Bahudin</h2>
          <p className='text-xs text-slate-600  text-justify'>Pembuatan surat keterangan tidak mampu diajukan oleh <span className='font-bold text-newBlue'> Aan Bahudin </span> pada tanggal 22/12/2021 di kelurahan Bukit Wolio Indah</p>

          <div className='w-full'>
            
            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 truncate'>
              <MapPinHouse className='w-4 h-4 stroke-newBlue' />
              Jalan gatot subroto No 34 A
            </p>

            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 mt-2 truncate'>
              <Clipboard className='w-4 h-4 stroke-newBlue' />
               RT 012
            </p>
            
            <p className='text-sm bg-newBlue/70 py-2 px-4 rounded-md text-center text-white mt-4'>lihat detail</p>
          </div>
        </Link>

        <Link to='pengajuan' className='w-[380px] h-[35vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-between flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
          {/* deret icon */}
          <div className='w-full flex items-center justify-end'>
          <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
          </div>

          <h2 className='mt-1 font-semibold text-lg text-slate-900 capitalize'>Aan Bahudin</h2>
          <p className='text-xs text-slate-600  text-justify'>Pembuatan surat keterangan tidak mampu diajukan oleh <span className='font-bold text-newBlue'> Aan Bahudin </span> pada tanggal 22/12/2021 di kelurahan Bukit Wolio Indah</p>

          <div className='w-full'>
            
            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 truncate'>
              <MapPinHouse className='w-4 h-4 stroke-newBlue' />
              Jalan gatot subroto No 34 A
            </p>

            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 mt-2 truncate'>
              <Clipboard className='w-4 h-4 stroke-newBlue' />
               RT 012
            </p>
            
            <p className='text-sm bg-newBlue/70 py-2 px-4 rounded-md text-center text-white mt-4'>lihat detail</p>
          </div>
        </Link>

        <Link to='pengajuan' className='w-[380px] h-[35vh] rounded-xl border-slate-300 hover:border-newBlue/40 border-[2px] px-4 py-2 flex items-start justify-between flex-col cursor-default hover:shadow-xl duration-200 ease-in-out'>
          {/* deret icon */}
          <div className='w-full flex items-center justify-end'>
          <ExternalLink className='w-5 h-5 stroke-slate-500 hover:stroke-slate-700 duration-200 ease-in-out' />
          </div>

          <h2 className='mt-1 font-semibold text-lg text-slate-900 capitalize'>Aan Bahudin</h2>
          <p className='text-xs text-slate-600  text-justify'>Pembuatan surat keterangan tidak mampu diajukan oleh <span className='font-bold text-newBlue'> Aan Bahudin </span> pada tanggal 22/12/2021 di kelurahan Bukit Wolio Indah</p>

          <div className='w-full'>
            
            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 truncate'>
              <MapPinHouse className='w-4 h-4 stroke-newBlue' />
              Jalan gatot subroto No 34 A
            </p>

            <p className='text-xs flex items-center w-full text-slate-700 gap-x-4 mt-2 truncate'>
              <Clipboard className='w-4 h-4 stroke-newBlue' />
               RT 012
            </p>
            
            <p className='text-sm bg-newBlue/70 py-2 px-4 rounded-md text-center text-white mt-4'>lihat detail</p>
          </div>
        </Link>
      
        
        
      </section>
      </section>
  </section>
  )
}

export default SemuaPengajuan