import { Link } from "react-router-dom"

function LoginInputForm() {
  return (
    <>
        <form className="loginformstyle">
            <div>
                <div>
                    <label >User Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" />
                </div>
            </div>

            <Link to="/admin">
                <input className="logsubmit" type="submit"/>
            </Link>
            <small>Not Registered? <span><a href="">Register</a></span></small>

        </form>
    </>
  )
}

export default LoginInputForm