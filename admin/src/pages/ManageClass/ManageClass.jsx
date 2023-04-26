import ClassTable from "../../components/classTable/ClassTable"


function ManageClass() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Manage Class</h3>
        </div>

        <div className="class-title color-class">
            <ClassTable/>
        </div>

    </div>
  )
}

export default ManageClass