import React from 'react'
import customFetch from '../../utils/customFetch'
import handleErrorMessage from '../../utils/handleErrorMessage'
import { handleToast } from '../../components/CustomToast'
import { useLoaderData } from 'react-router-dom'

export const loader = async({ params }) => {
    try {
      const { data } = await customFetch.get(`/user/permohonan/${params.id}`)
      return data
    } catch (error) {
      const errMsg = handleErrorMessage(error.response.data.msg)
      handleToast('error', 'Ada yang tidak beres', errMsg, 3000)
      return errMsg
    }
}

const DetailAjuanUser = () => {

  const { data } = useLoaderData()
  

  return (
    <div>DetailAjuanUser</div>
  )
}

export default DetailAjuanUser