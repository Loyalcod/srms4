import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import UseAxiosPrivate from "../hooks/UseAxiosPrivate";
import { UseAxiosPostPatch, UseAxiosGetAll } from "../hooks/UseAxiosMethod";

function CreateResultForm({ btnText, isActive, resultId }) {
  const secureApiAxios = UseAxiosPrivate();
  const postPatchAxios = UseAxiosPostPatch();
  const getAllAxios = UseAxiosGetAll();
  const [allStudent, setAllStudent] = useState([]);
  const [studentId, setStudentId] = useState("")
  const [studentClassId, setStudentClassId] = useState("")
  const [studentSubject, setStudentSubject] = useState([])
  const [subjectId, setSubjectId] = useState("")
  const [mark, setMark] = useState("")
  const [resultIdNum, setResultIdNum] = useState("")

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    getAllAxios(
      "/student",
      secureApiAxios.get,
      controller,
      isMounted,
      setAllStudent
    );
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  useEffect(()=>{
    const newStudentId = studentId
    const alltheStudent = [...allStudent]
    const subforAStudent = alltheStudent.find(stdnt =>{
        return stdnt._id === newStudentId
    })
    setStudentSubject(subforAStudent?.subjectId)
  },[studentId])

  useEffect(()=>{
    let isMounted = true
    const controller = new AbortController()
    const getResultEdit = async()=>{
      try {
        const response = await secureApiAxios.get(`/result/${resultId}`,{
          signal: controller.signal
        })
        setResultIdNum(response?.data?._id)
        setStudentId(response?.data?.studentId?._id)
        setStudentClassId(response?.data?.classId?._id)
        setSubjectId(response?.data?.subjectId?._id)
        setMark(response?.data?.mark)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getResultEdit()
    return()=>{
      isMounted=false
      controller.abort()
    }
  },[])



  const handleClick = (e) => {
    e.preventDefault();

    if(studentId === "" || studentClassId === "" || subjectId === "" || mark === "") return toast ("fill in the Missing field/s*")
    const reqstData = {
      studentId,
      subjectId,
      classId:studentClassId,
      mark
    }

    if(btnText === "Update Result"){
      postPatchAxios(`/result/${resultId}`,secureApiAxios.patch,"Result Updated Successfully", reqstData)
    }else{
      postPatchAxios('/result',secureApiAxios.post,"Result Have Been Declared Successfully",reqstData)
      setStudentId("")
      setStudentClassId("")
      setSubjectId("")
      setMark("")
    }    
  };

  useEffect(()=>{
    const newStudentId = studentId
    const alltheStudent = [...allStudent]
    const subforAStudent = alltheStudent.find(knowStd =>{
        return knowStd._id === newStudentId
    })
    setMark("")
  },[studentId])

  return (
    <>
      <div className="comboContainer">
        <ToastContainer />
        <div className="comboholder">
          <form onSubmit={handleClick} className="addStdSubComboForm">
            <div className="formcontrol">
              <label>{btnText === "Update Result" ? "Student" : "Select Student"}</label>
              <br />
              <select value={studentId} disabled={isActive} onChange={(e)=>{
                setStudentId(e.target.value)
                setStudentClassId(e.target.options[e.target.selectedIndex].dataset.classid)
                }}>
                <option value="">Select Student</option>
                {allStudent.map((students) => (
                  <option
                    key={students._id}
                    value={students._id}
                    data-classid={students.studentClassId._id}
                  >
                    {students.fullname} ({students.studentClassId.className})
                  </option>
                ))}
              </select>
            </div>
            <div className="formcontrol">
              <label>{btnText === "Update Result" ? "Subject" : "Select Subject"}</label>
              <br />
              <select
                value={subjectId}
                disabled={isActive}
                onChange={(e)=>setSubjectId(e.target.value)}
              > <option >Select Subject</option>              
                {studentSubject === undefined ?
                <option>Select the Student Field</option> 
                : studentSubject.length === 0 ?
                <option>No subject have been assigned to this student yet</option>
                : studentSubject.map((subjects)=>(                  
                  <option key={subjects._id} value={subjects._id}>{subjects.subjectName} ({subjects.subjectCode})</option>
                ))
              }
               
              </select>
            </div>
            <div className="formcontrol">
              <label>Input Mark</label>
              <br />
              <input min={0} max={100} placeholder="input Subject Mark" type="number"
              value={mark}
              onChange={(e)=>setMark(e.target.value)}
              disabled={studentSubject === undefined || studentSubject.length === 0 || subjectId === "" ? true : false}
              />
            </div>

            <button>{btnText}</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateResultForm;
