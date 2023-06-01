import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import UseAxiosPrivate from "../hooks/UseAxiosPrivate";
import { UseAxiosPostPatch, UseAxiosGetAll } from "../hooks/UseAxiosMethod";

function CreateResultForm({ btnText }) {
  const secureApiAxios = UseAxiosPrivate();
  const postPatchAxios = UseAxiosPostPatch();
  const getAllAxios = UseAxiosGetAll();
  const [allStudent, setAllStudent] = useState([]);
  const [studentId, setStudentId] = useState("")
  const [studentClassId, setStudentClassId] = useState("")
  const [studentSubject, setStudentSubject] = useState([])

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

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="comboContainer">
        <ToastContainer />
        <div className="comboholder">
          <form onSubmit={handleClick} className="addStdSubComboForm">
            <div className="formcontrol">
              <label>Select Student:</label>
              <br />
              <select value={studentId} onChange={(e)=>{
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
              <label>Select Subject:</label>
              <br />
              <select>
                <option value="">Select Subject</option>
                <option>English Language</option>
              </select>
            </div>
            <div className="formcontrol">
              <label>Select Subject:</label>
              <br />
              <input type="number" />
            </div>

            <button>{btnText}</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateResultForm;
