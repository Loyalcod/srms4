

function CreateStudentForm() {
  return (
    <>
        <div className="student_form_box">
            <form className="student_form">
                <div>
                    <label>Student Name:</label><br />
                    <input type="text" />
                </div>

                <div>
                    <label>Registration No.:</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label>Email Address:</label><br />
                    <input type="text" />
                </div>                
                <div>
                <label>Gender:</label><br />
                    <div>
                    <input type="radio" name="gender"  value="Male" /> Male 
                    <input type="radio" name="gender" value="Female" /> Female
                    <input type="radio" name="gender" value="Other" /> Others
                    </div>
                </div>
                <div>
                    <label>Select Student Class:</label><br />
                    
                    <select>
                        <option value="">Select Student Class</option>
                        <option value="">Grade 1</option>
                        <option value="">Grade 2</option>
                        <option value="">Grade 3</option>
                    </select>
                    
                </div>
                <div>
                    <label>Date of Birth:</label><br />
                    <input placeholder="mm/dd/yyy" type="text" />
                </div>
                
                <input type="submit" />
                
            </form>
        </div>
    </>
  )
}

export default CreateStudentForm