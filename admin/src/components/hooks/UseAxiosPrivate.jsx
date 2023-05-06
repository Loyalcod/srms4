import { privateAxios } from '../../api/Axios'
import { useEffect } from 'react'
import UseAuth from './UseAuth'
import useRefreshToken from './useRefreshToken'



const UseAxiosPrivate = ()=>{
    const refresh = useRefreshToken()
    const { auth } = UseAuth()

    useEffect(()=>{
        const requestIntercept = privateAxios.interceptors.request.use(
            (config)=>{
                if(!config.headers.Authorization){
                    config.headers.Authorization = `Bearer ${auth.accessToken}`
                }
                return config
            },(error)=>{return Promise.reject(error)}
        )
        const responseIntercent = privateAxios.interceptors.response.use(
            (response)=>{return response},
            async(error) =>{
                const prevRequest = error?.config
                if(error?.response?.status === 403 && !prevRequest.sent){
                    prevRequest.sent = true
                    const newAccesstoken = await refresh()
                    prevRequest.headers.Authorization= `Bearer ${newAccesstoken}`


                    return privateAxios(prevRequest)
                }
                return Promise.reject(error)
            }
        )
        return ()=>{
            privateAxios.interceptors.request.eject(requestIntercept)
            privateAxios.interceptors.response.eject(responseIntercent)
        }
    },[auth, refresh])
    return privateAxios
}

export default UseAxiosPrivate