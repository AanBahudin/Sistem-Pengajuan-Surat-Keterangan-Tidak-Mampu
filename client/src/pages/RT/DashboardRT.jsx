import React from 'react'
import customFetch from '../../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import handleErrorMessage from '../../utils/handleErrorMessage'
import { handleToast } from '../../components/CustomToast'

export const loader = async() => {
  try {
    const { data } = await customFetch.get('/rt')
    return data
  } catch (error) {
    const errMsg = handleErrorMessage(error.responsse.data.msg)
    handleToast('error', 'Ada yang tidak beres', errMsg, 3000)
    return errMsg
  }
}

const DashboardRT = () => {

  const data = useLoaderData()
  console.log(data);
  

  return (
    <div>DashboardRT</div>
  )
}

export default DashboardRT