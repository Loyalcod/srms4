import UseAxiosPrivate from "./hooks/UseAxiosPrivate";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function ClassInput({className,gradeName, classCrateEg, gradeEg, classPh, gradePh, btnName, classId}) {

  const SecureApi = UseAxiosPrivate()
  const [classname, setClassname] = useState("")
  const [section, setSection] = useState("")
  const [id, setId] = useState("")

  useEffect(()=>{

    if(btnName === "Update"){
      let isMounted = true
      const controller = new AbortController()

      const getEdit = async()=>{
        try {
          const response = await SecureApi.get(`classes/${classId}`,{
            signal: controller.signal
          })
         console.log(response.data)
         if(isMounted){
          setClassname(response.data.className)
          setSection(response.data.grade)
          setId(response.data._id)
         }
        } catch (error) {
          console.log(error)
        }
      }
      getEdit()
      return ()=>{
        isMounted = false
        controller.abort()
      }
    }
  },[])

  const handleDefault = async (e) =>{
    e.preventDefault()
    if(classname === "" || section === "") return toast ("Fill the Missing Field")
    const reqData = {className:classname, grade:section}

    if(btnName === 'Create'){

      try {
        const response = await SecureApi.post("/classes", reqData)
        console.log(response)
        if(response.status === 200){
          toast("Creating was successful")
        }
        setClassname('')
        setSection("")
        
      } catch (error) {
        if(!error.response){
          toast("no response from server")
        }else if(error?.request?.status === 409){
          toast("this class already exist")
        }else{
          toast("Failed to Create")
        }
      }
    }else{
      try {
        const response = await SecureApi.patch(`/classes/${id}`, reqData)
        console.log(response.data)
        if(response.status === 200){
          toast("Updating was successful")
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
   
  }
  return (
    <>
      <form onSubmit={handleDefault} >
        <div className="class-form">
          <label>{className}</label>
          <br />
          <input type="text" value={classname} placeholder={classPh} onChange={(e)=>setClassname(e.target.value)}/>
          <p>{classCrateEg}</p>
        </div>
        <div className="class-form">
          <label>{gradeName}</label>
          <br />
          <input type="text" value={section} onChange={(e)=>setSection(e.target.value)} placeholder={gradePh}/>
          <p>{gradeEg}</p>  
        </div>

        <button>{btnName}</button>
      </form>
    </>
  );
}

export default ClassInput;
