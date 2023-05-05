import axios from '../../api/Axios'
import UseAuth from './UseAuth'
import { useNavigate } from 'react-router-dom'

export default function useRefreshToken (){
    const {setAuth} = UseAuth()
    const navigate = useNavigate()

    const refresh = async()=>{
        try {
            const response = await axios.get('/admin/refreshLogin', {
                withCredentials: true
            })
            if(response.status === 200){
                setAuth(prev =>{
                    console.log("previous accesstoken: " + prev.accessToken)
                    console.log("new access token: " + response?.data?.newAccesstoken)
                    return{...prev, accessToken: response?.data?.newAccesstoken}
                })
                return response?.data?.newAccesstoken
            }
        } catch (error) {
            console.log(error)
            if(error?.response?.status === 403){
                navigate('/',{replace: true})
            }
        }
    }

    return refresh
}