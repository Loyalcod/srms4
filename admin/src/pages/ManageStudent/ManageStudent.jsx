import ManageStudentForm from "../../components/manageStudent/ManageStudentForm"

function ManageStudent() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Manage Student</h3>
        </div>

        <div className="class-title color-class">
            <ManageStudentForm />
        </div>

    </div>
  )
}

export default ManageStudent