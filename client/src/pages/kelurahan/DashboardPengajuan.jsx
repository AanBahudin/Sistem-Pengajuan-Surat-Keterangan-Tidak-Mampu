import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarRange, FileCheck2, FileCog, FileText, FileWarning, MapPin, User, History, FolderCheck } from 'lucide-react'

const DashboardPengajuan = () => {
  return (
    <section className='w-full h-full overflow-y-auto no-scrollbar p-10 flex items-center justify-center flex-col'>

      {/* welcome sign */}
      <section className='w-full h-full rounded-xl p-4'>
        <h1 className='text-4xl font-semibold text-slate-900 capitalize'>Selamat Datang di Dashboard </h1>
        <p className='text-md mt-2 text-slate-500 w-[80%]'>Kelola dan pantau seluruh pengajuan Surat Keterangan Tidak Mampu dengan mudah dan efisien.
        Jangan lupa untuk selalu memeriksa kelengkapan data dan memberikan keputusan secara bijak.</p>

        {/* kartu pengajuan */}
        <section className='my-10 w-full grid grid-cols-12 gap-x-4'>
          
          {/* sisi kiri */}
          <div className='col-span-9 '>
            
            {/* summary total pengajuan, pengajuan yang diterima, pengajuan akan proses (ketika sudah di acc RT), ditolak () */}
            <article className='w-full grid grid-cols-4'>
              
              {/* dashboard kartu */}
              <div className='bg-newBlue/30 rounded-xl w-[200px] h-[20vh] flex flex-col justify-center items-center'>
                <FileText className='w-8 h-8 stroke-newBlue ' />
                <h1 className='text-slate-800 text-2xl font-semibold my-2'>23</h1>
                <p className='text-sm text-slate-600'>total pengajuan</p>
              </div>

              <div className='bg-newGreen/30 rounded-xl w-[200px] h-[20vh] flex flex-col justify-center items-center'>
                <FileCheck2 className='w-8 h-8 stroke-newGreen ' />
                <h1 className='text-slate-800 text-2xl font-semibold my-2'>23</h1>
                <p className='text-sm text-slate-600'>Diterima</p>
              </div>

              <div className='bg-newYellow/30 rounded-xl w-[200px] h-[20vh] flex flex-col justify-center items-center'>
                <FileCog className='w-8 h-8 stroke-newYellow ' />
                <h1 className='text-slate-800 text-2xl font-semibold my-2'>23</h1>
                <p className='text-sm text-slate-600'>Proses</p>
              </div>

              <div className='bg-newRed/30 rounded-xl w-[200px] h-[20vh] flex flex-col justify-center items-center'>
                <FileWarning className='w-8 h-8 stroke-newRed ' />
                <h1 className='text-slate-800 text-2xl font-semibold my-2'>23</h1>
                <p className='text-sm text-slate-600'>Ditolak</p>
              </div>
            </article>

            <h4 className='mt-6 text-lg text-slate-800 font-medium'>Pengajuan yang disarankan</h4>        
            <article className='w-full grid grid-cols-3 gap-y-4 mt-4'>

              {/* card */}
              <div className='w-[280px] h-[25vh] rounded-xl bg-slate-100 p-2'>
                <section className='w-full flex items-center gap-x-4'>
                  <User className='w-10 h-10 rounded-full p-2 stroke-slate-500 bg-white' />

                  <div className='flex-1'>
                    <h5 className='text-sm font-semibold'>Aan Bahudin</h5>
                    <p className='text-xs text-slate-500'>aanbahudin@gmail.com</p>
                  </div>
                </section>

                <section className='flex flex-col w-full'>
                  <p className='text-xs flex items-center gap-x-4 mt-4 text-slate-700'> 
                    <CalendarRange className='w-5 h-5 stroke-newBlue' />
                    22/ 12 / 2012
                  </p>

                  <p className='text-xs flex items-center gap-x-4 mt-2 text-slate-700'> 
                    <MapPin className='w-5 h-5 stroke-newBlue' />
                    Murhum
                  </p>                  
                </section>
                <button className='text-sm w-[100%] bg-newBlue/30 text-slate-800 py-1 rounded-md mt-5'>lihat</button>
              </div>

              <div className='w-[280px] h-[25vh] rounded-xl bg-slate-100 p-2'>
                <section className='w-full flex items-center gap-x-4'>
                  <User className='w-10 h-10 rounded-full p-2 stroke-slate-500 bg-white' />

                  <div className='flex-1'>
                    <h5 className='text-sm font-semibold'>Aan Bahudin</h5>
                    <p className='text-xs text-slate-500'>aanbahudin@gmail.com</p>
                  </div>
                </section>

                <section className='flex flex-col w-full'>
                  <p className='text-xs flex items-center gap-x-4 mt-4 text-slate-700'> 
                    <CalendarRange className='w-5 h-5 stroke-newBlue' />
                    22/ 12 / 2012
                  </p>

                  <p className='text-xs flex items-center gap-x-4 mt-2 text-slate-700'> 
                    <MapPin className='w-5 h-5 stroke-newBlue' />
                    Murhum
                  </p>                  
                </section>
                <button className='text-sm w-[100%] bg-newBlue/30 text-slate-800 py-1 rounded-md mt-5'>lihat</button>
              </div>

              <div className='w-[280px] h-[25vh] rounded-xl bg-slate-100 p-2'>
                <section className='w-full flex items-center gap-x-4'>
                  <User className='w-10 h-10 rounded-full p-2 stroke-slate-500 bg-white' />

                  <div className='flex-1'>
                    <h5 className='text-sm font-semibold'>Aan Bahudin</h5>
                    <p className='text-xs text-slate-500'>aanbahudin@gmail.com</p>
                  </div>
                </section>

                <section className='flex flex-col w-full'>
                  <p className='text-xs flex items-center gap-x-4 mt-4 text-slate-700'> 
                    <CalendarRange className='w-5 h-5 stroke-newBlue' />
                    22/ 12 / 2012
                  </p>

                  <p className='text-xs flex items-center gap-x-4 mt-2 text-slate-700'> 
                    <MapPin className='w-5 h-5 stroke-newBlue' />
                    Murhum
                  </p>                  
                </section>
                <button className='text-sm w-[100%] bg-newBlue/30 text-slate-800 py-1 rounded-md mt-5'>lihat</button>
              </div>

              <div className='w-[280px] h-[25vh] rounded-xl bg-slate-100 p-2'>
                <section className='w-full flex items-center gap-x-4'>
                  <User className='w-10 h-10 rounded-full p-2 stroke-slate-500 bg-white' />

                  <div className='flex-1'>
                    <h5 className='text-sm font-semibold'>Aan Bahudin</h5>
                    <p className='text-xs text-slate-500'>aanbahudin@gmail.com</p>
                  </div>
                </section>

                <section className='flex flex-col w-full'>
                  <p className='text-xs flex items-center gap-x-4 mt-4 text-slate-700'> 
                    <CalendarRange className='w-5 h-5 stroke-newBlue' />
                    22/ 12 / 2012
                  </p>

                  <p className='text-xs flex items-center gap-x-4 mt-2 text-slate-700'> 
                    <MapPin className='w-5 h-5 stroke-newBlue' />
                    Murhum
                  </p>                  
                </section>
                <button className='text-sm w-[100%] bg-newBlue/30 text-slate-800 py-1 rounded-md mt-5'>lihat</button>
              </div>

              <div className='w-[280px] h-[25vh] rounded-xl bg-slate-100 p-2'>
                <section className='w-full flex items-center gap-x-4'>
                  <User className='w-10 h-10 rounded-full p-2 stroke-slate-500 bg-white' />

                  <div className='flex-1'>
                    <h5 className='text-sm font-semibold'>Aan Bahudin</h5>
                    <p className='text-xs text-slate-500'>aanbahudin@gmail.com</p>
                  </div>
                </section>

                <section className='flex flex-col w-full'>
                  <p className='text-xs flex items-center gap-x-4 mt-4 text-slate-700'> 
                    <CalendarRange className='w-5 h-5 stroke-newBlue' />
                    22/ 12 / 2012
                  </p>

                  <p className='text-xs flex items-center gap-x-4 mt-2 text-slate-700'> 
                    <MapPin className='w-5 h-5 stroke-newBlue' />
                    Murhum
                  </p>                  
                </section>
                <button className='text-sm w-[100%] bg-newBlue/30 text-slate-800 py-1 rounded-md mt-5'>lihat</button>
              </div>

              <div className='w-[280px] h-[25vh] rounded-xl bg-slate-100 p-2'>
                <section className='w-full flex items-center gap-x-4'>
                  <User className='w-10 h-10 rounded-full p-2 stroke-slate-500 bg-white' />

                  <div className='flex-1'>
                    <h5 className='text-sm font-semibold'>Aan Bahudin</h5>
                    <p className='text-xs text-slate-500'>aanbahudin@gmail.com</p>
                  </div>
                </section>

                <section className='flex flex-col w-full'>
                  <p className='text-xs flex items-center gap-x-4 mt-4 text-slate-700'> 
                    <CalendarRange className='w-5 h-5 stroke-newBlue' />
                    22/ 12 / 2012
                  </p>

                  <p className='text-xs flex items-center gap-x-4 mt-2 text-slate-700'> 
                    <MapPin className='w-5 h-5 stroke-newBlue' />
                    Murhum
                  </p>                  
                </section>
                <button className='text-sm w-[100%] bg-newBlue/30 text-slate-800 py-1 rounded-md mt-5'>lihat</button>
              </div>

              
            </article>

            

          </div>

          {/* sisi kanan */}
          <div className="col-span-3 rounded-xl h-full bg-slate-100">
            <section className='w-full rounded-t-xl bg-newBlue/30 px-2 py-4'>
              <h2 className='text-slate-700 font-semibold text-lg'>Aktivitas Terbaru</h2>
            </section>

            <section className='mt-4 w-full flex flex-col justify-start gap-y-4'>

              <article className='w-full flex justify-start items-center gap-x-5 px-4'>
                <History className='w-12 h-12' />
                <div>
                  <p className='text-[12px] text-slate-600'>Anda mengubah status pengajuan milik <span className='text-newBlue'> Maria Ulfah </span> menjadi Sedang Diproses.</p>
                </div>
              </article>

              <article className='w-full flex justify-start items-center gap-x-5 px-4'>
                <FolderCheck className='w-12 h-12' />
                <div>
                  <p className='text-[12px] text-slate-600'>Anda mengubah status pengajuan milik <span className='text-newBlue'> Maria Ulfah </span> menjadi Sedang Diproses.</p>
                </div>
              </article>

              <article className='w-full flex justify-start items-center gap-x-5 px-4'>
                <History className='w-12 h-12' />
                <div>
                  <p className='text-[12px] text-slate-600'>Anda mengubah status pengajuan milik <span className='text-newBlue'> Maria Ulfah </span> menjadi Sedang Diproses.</p>
                </div>
              </article>

              

            </section>
          </div>
          
        </section>
      </section>
    </section>
  )
}

export default DashboardPengajuan