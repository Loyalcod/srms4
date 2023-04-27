import MangStdSubComboTable from "../../components/manageStdSubComboTable/MangStdSubComboTable"

function ManageAddSubCombo() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Manage Add Subject Combination</h3>
        </div>

        <div className="class-title color-class">
          <MangStdSubComboTable/>
            
        </div>

    </div>
  )
}

export default ManageAddSubCombo