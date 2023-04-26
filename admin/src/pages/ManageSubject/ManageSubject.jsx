import ManageSubjectTable from "../../components/manageSubjectTable/ManageSubjectTable"


function ManageSubject() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Manage Subject</h3>
        </div>

        <div className="class-title color-class">
            <ManageSubjectTable/>
        </div>

    </div>
  )
}

export default ManageSubject