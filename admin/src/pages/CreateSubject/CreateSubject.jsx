
import CreateSubjectForm from "../../components/createSubjectForm/CreateSubjectForm"

function CreateSubject() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Create Subject</h3>
        </div>

        <div className="class-title color-class">
            <CreateSubjectForm />
        </div>

    </div>
  )
}

export default CreateSubject