import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
const GuestRoutes = () => {

  const {isAuth} = useSelector((state)=>state.auth)

  return (
    isAuth ? <Outlet/> : <Navigate to='/'/>
  )
}

export default GuestRoutes