import CreateStudentForm from "../../components/createStudentForm/CreateStudentForm"


function CreateStudent() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Create Student</h3>
        </div>

        <div className="class-title color-class">
           <CreateStudentForm/>
        </div>

    </div>
  )
}

export default CreateStudent