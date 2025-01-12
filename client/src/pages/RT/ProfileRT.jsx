import React from 'react'
import customFetch from '../../utils/customFetch'
import { redirect, useLoaderData } from 'react-router-dom'

export const loader = async() => {
  try {
    const { data } = await customFetch.get('/user/currentUser')
    return data
  } catch (error) {
    console.log(error);
    return redirect('/')
  }
}

export const action = async() => {
    return null
}

const ProfileRT = () => {

  const { user } = useLoaderData()
  
  

  return (
    <div>ProfileRT</div>
  )
}

export default ProfileRT