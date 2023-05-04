import RegisterInputForm from "../../components/registerForm/RegisterInputForm"
import './RegisterPage.css'
import { ToastContainer, toast } from "react-toastify"

function RegisterPage() {
  const propToast = (<ToastContainer />)
  return (
    <div className="registerPage">
      { propToast }
        <div className="register_page_contain_1">
            <h3>Student Result Management System</h3>
        </div>
        <div className="register_page_contain">
            <div className="registerform">
                <RegisterInputForm/>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage