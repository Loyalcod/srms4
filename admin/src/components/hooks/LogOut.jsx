import UseAuth from "./UseAuth";
import UseAxiosPrivate from "./UseAxiosPrivate";
import useRefreshToken from "./useRefreshToken";
import { Navigate, useLocation } from "react-router-dom";


const useLogOut = ()=>{
    const {auth, setAuth} = UseAuth()
    const refresh = useRefreshToken()
    const secureAxios = UseAxiosPrivate()
    const location = useLocation()

    const logout = async()=>{
        try {
            const response = await secureAxios.get('/admin/logout')
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
        setAuth({})
        
    }
    return logout
}


export default useLogOut