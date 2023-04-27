import CreateStdSubCombo from "../../components/createStdSubCombo/CreateStdSubCombo"


function AddSubjectCombo() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Add Subject Combination</h3>
        </div>

        <div className="class-title color-class">
            <CreateStdSubCombo/>
        </div>

    </div>
  )
}

export default AddSubjectCombo