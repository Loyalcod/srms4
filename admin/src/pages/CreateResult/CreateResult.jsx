import CreateResultForm from "../../components/createResultForm/CreateResultForm"


function CreateResult() {
  return (
    <div className="create-class-flex">

        <div className="class-title">
            <h3>Create Result</h3>
        </div>

        <div className="class-title color-class">
            <CreateResultForm />
        </div>

    </div>
  )
}

export default CreateResult