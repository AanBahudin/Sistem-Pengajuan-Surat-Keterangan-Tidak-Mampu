import React from 'react'
import { toast } from 'react-toastify'
import { Check, X } from 'lucide-react'
import { useAppContext } from '../../App'

export const loader = async() => {
  return null
}

const StatusPengajuanUser = () => {

  const { handleToast } = useAppContext()
  return (
    <div>
      <button onClick={() => handleToast('error', 'Pengajuan anda diterima !', 'Surat keterangan akan segera dibuat')}> show toast </button>
    </div>
  )
}

export default StatusPengajuanUser