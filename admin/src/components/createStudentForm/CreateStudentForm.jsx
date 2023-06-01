import { useState, useEffect } from "react";
import UseAxiosPrivate from "../hooks/UseAxiosPrivate";
import { ToastContainer, toast } from "react-toastify";
import { UseAxiosPostPatch, postPatchAxios } from "../hooks/UseAxiosMethod";

function CreateStudentForm({ btnText, studentId }) {
  const [studentName, setStudentName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const secureAxiosApi = UseAxiosPrivate();
  const postPatchAxiosApi = UseAxiosPostPatch();

  const [classGrade, setClassGrade] = useState([]);
  const [classId, setClassId] = useState("");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getClassGrade = async () => {
      try {
        const response = await secureAxiosApi.get("/classes", {
          signal: controller.signal,
        });
        {
          isMounted && setClassGrade(response.data);
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getClassGrade();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (btnText === "Update Student") {
      let isMounted = true;
      const controller = new AbortController();
      const getStudentUdate = async () => {
        try {
          const response = await secureAxiosApi.get(`/student/${studentId}`, {
            signal: controller.signal,
          });
          if(isMounted){
            setStudentName(response?.data?.fullname)
            setRegNo(response?.data?.regNo)
            setEmailAddress(response?.data?.email)
            setGender(response?.data?.gender)
            setClassId(response?.data?.studentClassId)
            setDob(response?.data?.dob)
          }
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      getStudentUdate();    
      return ()=>{
        isMounted=false
        controller.abort()
      }
    }
  }, []);

  const handleCreateStudent = async (e) => {
    e.preventDefault();
    if (
      studentName === "" ||
      regNo === "" ||
      emailAddress === "" ||
      gender === "" ||
      classId === "" ||
      dob === ""
    )
      return toast("pls fill in the missing space");

    const requstData = {
      fullname: studentName,
      regNo,
      email: emailAddress,
      gender,
      dob,
      studentClassId: classId,
    };

    if(btnText === "Create Student"){
      postPatchAxiosApi(
        "/student",
        secureAxiosApi.post,
        "student Created Successfully",
        requstData
      );
      setStudentName("");
      setRegNo("");
      setEmailAddress("");
      setGender("");
      setDob("");
      setClassId("");
    }else{
      postPatchAxiosApi(
        `student/${studentId}`,
        secureAxiosApi.patch,
        "student updated Successfully",
        requstData
      );
    }
  };

  return (
    <>
      <div className="student_form_box">
        <ToastContainer />
        <form className="student_form" onSubmit={handleCreateStudent}>
          <div>
            <label>Student Name:</label>
            <br />
            <input
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              type="text"
            />
          </div>

          <div>
            <label>Registration No.:</label>
            <br />
            <input
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Email Address:</label>
            <br />
            <input
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Gender:</label>
            <br />
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Others
            </div>
          </div>
          <div>
            <label>Select Student Class:</label>
            <br />

            <select
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
            >
              <option value="">Select Student Class</option>
              {classGrade.map((classitem) => (
                <option key={classitem._id} value={classitem._id}>
                  {classitem.className}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Date of Birth:</label>
            <br />
            <input
              placeholder="mm/dd/yyy"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <button className="createSubBtn">{btnText}</button>
        </form>
      </div>
    </>
  );
}

export default CreateStudentForm;
