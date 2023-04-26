

function CreateSubjectForm() {
    const handleDefault =(e)=>{
        e.preventDefault()
    }
  return (
    <>
      <form onSubmit={handleDefault}>
        <div className="class-form">
          <label>Subject Name</label>
          <br />
          <input type="text" placeholder="Enter" />
          <p>eg.Mathematics,Computer Science</p>
        </div>
        <div className="class-form">
          <label>Subject Code</label>
          <br />
          <input type="text" placeholder="enter Subject code"/>
          <p>eg.Mth 112,GSS 112</p>  
        </div>

        <button className="createSubBtn">Create Subject</button>
      </form>
    </>
  )
}

export default CreateSubjectForm