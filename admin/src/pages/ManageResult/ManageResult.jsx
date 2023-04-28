import ManageResultForm from "../../components/manageResult/ManageResultForm"


function ManageResult() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Manage Result</h3>
        </div>

        <div className="class-title color-class">
            <ManageResultForm />
        </div>

    </div>
  )
}

export default ManageResult