
import CreateSubjectForm from "../../components/createSubjectForm/CreateSubjectForm"
import { ToastContainer } from "react-toastify"

function CreateSubject() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
          <ToastContainer/>
            <h3>Create Subject</h3>
        </div>

        <div className="class-title color-class">
            <CreateSubjectForm btnText={"Create Subject"}/>
        </div>

    </div>
  )
}

export default CreateSubject