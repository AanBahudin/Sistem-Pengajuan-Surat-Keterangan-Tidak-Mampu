import React, { useState } from 'react'
import { AtSign, X, Search } from 'lucide-react'
import { KelurahanPengajuanCard } from '../../components'
import customFetch from '../../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import handleErrorMessage from '../../utils/handleErrorMessage'
import { handleToast } from '../../components/CustomToast'

export const loader = async() => {
  try {
    const { data } = await customFetch.get('/rt')
    console.log(data);
    
    return data
  } catch (error) {
    const errMsg = handleErrorMessage(error.response.data.msg)
    handleToast('error', 'Ada yang tidak beres', errMsg, 3000)
    return errMsg
  }
}

export const action = async() => {
  return null
}

const PengajuanRT = () => {

  const { data:ajuan } = useLoaderData()
  const [isEmail, setEmail] = useState('')
  const [filter, setFilter] = useState('belum')
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

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

        <select className='w-[20%] h-12 border-[2px] border-slate-300 rounded-xl shadow-md text-sm px-2 text-slate-700' name="filter" id="filter" value={filter} onChange={(event) => handleFilterChange(event)}>
          <option value="belum">Belum diproses</option>
          <option value="terima">Diterima</option>
          <option value="tolak">Tertolak</option>
        </select>

        <button className='w-[20%] flex h-12 items-center justify-center gap-x-4 rounded-xl bg-newBlue/80 text-sm lowercase text-white'>
          <Search className='w-5 h-5 stroke-white' />
          Cari Pengajuan
        </button>

      </section>

        {/* kartu pengajuan */}
      <section className='mt-10 w-full grid grid-cols-3 gap-y-4 gap-x-10'>
        
        {
          ajuan.length === 0 ? (
            <h1 className='text-slate-600'>Belum ada pengajuan terbaru ...</h1>
          ) : (
            (() => {
              const filteredAjuan = ajuan.filter((filteredItem) => {
                if (filter) {
                  return filteredItem.statusAccRt === filter;
                } else {
                  return filteredItem;
                }
              });
        
              if (filteredAjuan.length === 0) {
                return <h1 className='text-slate-600'>
                  {filter === 'belum' ? 'Belum ada pengajuan terbaru...' : ( filter === 'tolak' ? 'Belum ada pengajuan yang ditolak...' : 'Belum ada pengajuan yang diterima...' )}
                </h1>;
              }
        
              return filteredAjuan.map((item, index) => (
                <KelurahanPengajuanCard
                  url={`/rt/pengajuan/${item._id}`}
                  key={index}
                  {...item}
                />
              ));
            })()
          )
        }

        
      </section>
      </section>
    </section>
  )
}

export default PengajuanRT