import UseAuth from "./UseAuth";
import UseAxiosPrivate from "./UseAxiosPrivate";


const useLogOut = ()=>{
    const {setAuth} = UseAuth()
    const secureAxios = UseAxiosPrivate()

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