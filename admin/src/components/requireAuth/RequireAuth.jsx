import UseAuth from "../hooks/UseAuth"
import { useLocation, Navigate, Outlet } from "react-router-dom"


export default function RequireAuth() {
    const {auth} = UseAuth()
    const location = useLocation()
   

  return (
    auth?.accessToken
    ? <Outlet/>
    : <Navigate to="/" state={{from: location}} replace/>

  
  )
}

