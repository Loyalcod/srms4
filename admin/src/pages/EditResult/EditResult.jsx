import React from 'react'
import CreateResultForm from '../../components/createResultForm/CreateResultForm'
import { useParams } from 'react-router-dom'

function EditResult() {

    const {resultId} = useParams()
  return (    
    <div className="create-class-flex">

    <div className="class-title">
        <h3>Create Result</h3>
    </div>

    <div className="class-title color-class">
        <CreateResultForm btnText = "Update Result" isActive={true} resultId={resultId} />
    </div>

</div>
  )
}

export default EditResult