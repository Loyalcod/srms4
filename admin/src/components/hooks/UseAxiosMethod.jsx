import { toast } from "react-toastify"

export const UseAxiosPostPatch = ()=>{

    const postPatchAxios = async(url, func_type, message, requestData)=>{
        try {
            const response = await func_type(url, requestData)
            console.log(response)
            if(response.status === 200){
              toast(message)
            }
            
            
          } catch (error) {
            if(!error.response){
              toast("no response from server")
            }else if(error?.request?.status === 409){
              toast("this class already exist")
            }else{
              toast("Failed to Create")
            }
          }
    }
    return postPatchAxios
}

export const UseAxiosGetAll = ()=>{
    const getAllAxios = async(url, func_type, cntrl,isMnted, func_set)=>{
        try {
            const response = await func_type(url,{ signal: cntrl.signal })
            // console.log(response.data)
            if(isMnted) return func_set(response.data)
          } catch (error) {
            if(error.name === 'AbortError') {
              console.log(error)
            }
            console.log(error)
                    
          }
    }
    return getAllAxios
}