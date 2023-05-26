import { useState,useEffect } from "react"
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import {toast} from 'react-toastify'
import { UseAxiosPostPatch } from "../hooks/UseAxiosMethod"

function CreateSubjectForm({btnText, subjectId}) {
  const [subjectName, setSubjectName] = useState('')
  const [subjectCode, setSubjectCode] = useState('')
  const [id, setId] = useState('')
  const SecureAxios = UseAxiosPrivate()
  const postPatchAxios = UseAxiosPostPatch()

    const handleDefault =(e)=>{
        e.preventDefault()
        if(subjectName === '' || subjectCode=== '') return toast("pls fill in the missing fields")
        const reqtData = {subjectName, subjectCode}
        if(btnText === "Create Subject"){
          postPatchAxios("/subject",SecureAxios.post, "Successful",reqtData)
          setSubjectName("")
          setSubjectCode("")
        }else{
          postPatchAxios(`/subject/${id}`,SecureAxios.patch,"updated Successfully",reqtData)
        }      
    }

    useEffect(()=>{
      if(btnText === "Update Subject"){
        let isMounted = true
      const controller = new AbortController()

        const getForEditSubject = async()=>{
          try {
            const response = await SecureAxios.get(`/subject/${subjectId}`, {
              signal: controller.signal
            })
            if(isMounted){
              setSubjectName(response?.data?.subjectName)
              setSubjectCode(response?.data?.subjectCode)
              setId(response?.data?._id)
            }            
          } catch (error) {
            console.log(error.message)
          }
        }
        getForEditSubject()
      }
    },[])
  return (
    <>
      <form onSubmit={handleDefault}>
        <div className="class-form">
          <label>Subject Name</label>
          <br />
          <input type="text" value={subjectName} onChange={(e)=>setSubjectName(e.target.value)} placeholder="Enter" />
          <p>eg.Mathematics,Computer Science</p>
        </div>
        <div className="class-form">
          <label>Subject Code</label>
          <br />
          <input type="text" value={subjectCode} onChange={(e)=>setSubjectCode(e.target.value)} placeholder="enter Subject code"/>
          <p>eg.Mth 112,GSS 112</p>  
        </div>

        <button className="createSubBtn">{btnText}</button>
      </form>
    </>
  )
}

export default CreateSubjectForm