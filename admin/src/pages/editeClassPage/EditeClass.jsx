// import './createClass.css'
import ClassInput from '../../components/ClassInput'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function EditeClass() {
    // this for create class
    const classLable = 'Class Name'
    const classLableGrade = "Class Grade"
    const createClassExample = "e.g First Grade, Third Grade"
    const gradeExample ="e.g A,B,C"
    const classCreatePh ="Enter Details"
    const gradePh = "Enter Details"
    // create class ends here
    const {classId} = useParams()



  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Update Class</h3>
            <ToastContainer/>
        </div>

        <div className="class-title color-class">
            <ClassInput btnName="Update" classId={classId} className={classLable} gradeName={classLableGrade} classCrateEg={createClassExample} gradeEg={gradeExample} classPh={classCreatePh} gradePh={gradePh}/>
        </div>

    </div>
  )
}

export default EditeClass