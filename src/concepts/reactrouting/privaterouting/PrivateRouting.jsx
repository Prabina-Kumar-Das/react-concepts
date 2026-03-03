import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const PrivateRouting = ({children}) => {
  const token = JSON.parse(localStorage.getItem("jwt_token"))
  return (
    <div>
      {
        token ? children : <Navigate to="/login"/>
      }
    </div>
  )
}

export default PrivateRouting