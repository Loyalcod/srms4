import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import UseAuth from "../hooks/UseAuth";
import { Audio, Puff } from  'react-loader-spinner'

const PersistenLogin = ()=>{
    const refresh = useRefreshToken()
    const {auth} = UseAuth()
    const [isLoading, setIsLoading] = useState(true)

    useEffect (()=>{
        let isMounted = true
        const verifyRefreshToken = async ()=>{
            try {
                await refresh()
            } catch (error) {
                console.log(error)
            }finally{
                isMounted && setIsLoading(false)
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
        return () => isMounted = false
    },[])

    useEffect(()=>{
        console.log(`isLoading ${isLoading}`)
        console.log(`accessToken ${auth?.accessToken}`)
    },[isLoading])

    return(
        <>
            {
                isLoading
                ? <Puff
                height="100"
                width="100"
                color="blue"
                ariaLabel="loading"
              />
                : <Outlet />
            }
        </>
    )
}

export default PersistenLogin