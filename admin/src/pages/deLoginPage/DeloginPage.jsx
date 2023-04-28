import './loginpage.css'
import LoginInputForm from '../../components/LoginInputForm/LoginInputForm'

function DeloginPage() {
  return (
    <div className="loginPage">
        <div className="login_page_contain_1">
            <h3>Student Result Management System</h3>
        </div>
        <div className="login_page_contain">
            <div className="loginform">
                <LoginInputForm/>
            </div>
        </div>
    </div> 
  )
}

export default DeloginPage