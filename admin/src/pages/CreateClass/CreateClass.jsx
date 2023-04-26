import './createClass.css'
import ClassInput from '../../components/ClassInput'

function CreateClass() {
    // this for create class
    const classLable = 'Class Name'
    const classLableGrade = "Class Grade"
    const createClassExample = "e.g First Grade, Third Grade"
    const gradeExample ="e.g A,B,C"
    const classCreatePh ="Enter Details"
    const gradePh = "Enter Details"
    // create class ends here



  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Create Student Class</h3>
        </div>

        <div className="class-title color-class">
            <ClassInput className={classLable} gradeName={classLableGrade} classCrateEg={createClassExample} gradeEg={gradeExample} classPh={classCreatePh} gradePh={gradePh}/>
        </div>

    </div>
  )
}

export default CreateClass