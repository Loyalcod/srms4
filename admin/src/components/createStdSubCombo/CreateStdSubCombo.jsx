import { useState, useEffect } from "react"
import UseAxiosPrivate from "../hooks/UseAxiosPrivate"
import {ToastContainer, toast} from "react-toastify"
import {UseAxiosPostPatch} from "../hooks/UseAxiosMethod"






function CreateStdSubCombo() {
    const [allstudent, setAllStudent] = useState([])
    const [allSubject, setAllSubject] = useState([])
    const [studentId, setStudentId] = useState("")
    const [subjectId, setSubjectId] = useState("")

    const secureAxios = UseAxiosPrivate()
    const AxiosPostPatch = UseAxiosPostPatch()

    useEffect(()=>{
        let isMounted = true
        const Controller = new AbortController()
        const getAllStudentSubject = async()=>{
            try {
                const response = await secureAxios.get('/student',{signal: Controller.signal})
                isMounted && setAllStudent(response.data)
                console.log(response.data)
                const res = await secureAxios.get('/subject',{signal: Controller.signal})
                isMounted && setAllSubject(res.data)      
                console.log(res.data)          
            } catch (error) {
                console.error(error)
            }
        }
        getAllStudentSubject()
        return ()=>{
            isMounted = false
            Controller.abort()
        }
    },[])

    const handleClick = async (e)=>{
        e.preventDefault()
        if(studentId === "" || subjectId ==="") return toast("pls fill in the space")
        const reqstData = {studentId, subjectId}
        AxiosPostPatch('/combo',secureAxios.post,"Student and Subject Assigned Successfully",reqstData)

    }
  return (
    <>
        <div className="comboContainer">
            <ToastContainer/>
            <div className="comboholder">
                <form onSubmit={handleClick} className="addStdSubComboForm">
                    <div className="formcontrol">
                        <label>Select Student:</label><br />
                        <select value={studentId} onChange={(e)=>setStudentId(e.target.value)}>
                            <option value="">Select Student</option>
                            {allstudent.map((student)=>(
                            <option key={student._id} value={student._id}>{student.fullname} ({student?.studentClassId?.className})</option>
                            ))}
                            
                        </select>
                    </div>
                    <div className="formcontrol">
                        <label>Select Subject:</label><br />
                        <select value={subjectId} onChange={(e)=>setSubjectId(e.target.value)} >
                            <option value="">Select Subject</option>
                            {allSubject.map((subject)=>(
                            <option key={subject._id} value={subject._id}>{subject.subjectName} ({subject.subjectCode})</option>
                            ))}
                            
                        </select>
                    </div>

                    <input type="submit" />
                </form>
            </div>
        </div>
        
    </>
  )
}

export default CreateStdSubCombo