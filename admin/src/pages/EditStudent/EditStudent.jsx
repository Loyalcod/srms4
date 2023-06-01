import CreateStudentForm from "../../components/createStudentForm/CreateStudentForm"
import { useParams } from "react-router-dom"

function EditStudent() {
  const {studentId} = useParams()
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Update Student</h3>
        </div>

        <div className="class-title color-class">
           <CreateStudentForm btnText="Update Student" studentId = {studentId}/>
        </div>

    </div>
  )
}

export default EditStudent