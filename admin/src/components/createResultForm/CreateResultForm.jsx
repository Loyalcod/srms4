

function CreateResultForm() {
    const handleClick = (e)=>{
        e.preventDefault()
    }
  return (
    <>
        <div className="comboContainer">
            <div className="comboholder">
                <form onSubmit={handleClick} className="addStdSubComboForm">
                    <div className="formcontrol">
                        <label>Select Student:</label><br />
                        <select name="" id="">
                            <option value="">Select Student</option>
                            <option value="">Maryann Isaac</option>
                            <option value="">Chukwu Chidera</option>
                            <option value="">Nnenne Mbah</option>
                        </select>
                    </div>
                    <div className="formcontrol">
                        <label>Select Subject:</label><br />
                        <select name="" id="">
                            <option value="">Select Subject</option>
                            <option value="">Mathematics (MATH 112)</option>
                            <option value="">English Language (GSS 111)</option>
                            <option value="">Computer Science (CSC 113)</option>
                        </select>
                    </div>
                    <div className="formcontrol">
                        <label>Select Subject:</label><br />
                        <input type="number"  />
                    </div>

                    <button>Add Result</button>
                </form>
            </div>
        </div>
        
    </>
  )
}

export default CreateResultForm