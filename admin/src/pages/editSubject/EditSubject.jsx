import CreateSubjectForm from "../../components/createSubjectForm/CreateSubjectForm"
import {useParams} from 'react-router-dom'
import { ToastContainer } from "react-toastify"

function EditSubject() {
  const {subjectId } = useParams()
  return (
    <div className="create-class-flex">

        <div className="class-title">
          <ToastContainer/>
            <h3>Edit Subject</h3>
        </div>

        <div className="class-title color-class">
            <CreateSubjectForm btnText={"Update Subject"} subjectId={subjectId}/>
        </div>

    </div>
  )
}

export default EditSubject