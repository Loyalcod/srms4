import CreateSubjectForm from "../../components/createSubjectForm/CreateSubjectForm"

function EditSubject() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Edit Subject</h3>
        </div>

        <div className="class-title color-class">
            <CreateSubjectForm btnText={"Update Subject"} />
        </div>

    </div>
  )
}

export default EditSubject