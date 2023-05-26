import ClassTable from "../../components/classTable/ClassTable"
import { ToastContainer } from "react-toastify"


function ManageClass() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
          <ToastContainer/>
            <h3>Manage Class</h3>
        </div>

        <div className="class-title color-class">
            <ClassTable/>
        </div>

    </div>
  )
}

export default ManageClass