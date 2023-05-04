import "./loginpage.css";
import { useState } from "react";
import UseAuth from "../../components/hooks/UseAuth";
import axios from "../../api/Axios";
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate } from "react-router-dom";


function DeloginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()
  // const Location = useLocation()
  const {setAuth } = UseAuth()

  const handLeLoginSubmit = async(e)=>{
    e.preventDefault()
    if(!username || !password) return toast("fill in the missing field/s")
    const admin = {username, password}
    try {
      const response = await axios.post("/admin/login", admin, {  
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
      })
      // console.log(response.data)
      if(response.status === 200){
        const accessToken = response.data.accessToken
        console.log(accessToken)
        setUsername("")
        setPassword("")
        setAuth({accessToken})
        Navigate('/admin', {replace: true})
      }

    } catch (error) {
      console.log(error)
      if(!error.response){
        toast("No Server Response")
      }else if(error?.request?.status === 404){
        toast("User Does Not Exist")
      }else if(error?.request?.status === 400){
        toast("Incorrect Password")
      }else{
        toast("login Field")
      }
    }
  }

  return (
    <div className="loginPage">
      <ToastContainer />
      <div className="login_page_contain_1">
        <h3>Student Result Management System</h3>
      </div>
      <div className="login_page_contain">
        <div className="loginform">
          <form onSubmit={handLeLoginSubmit} className="loginformstyle">
            <div>
              <div>
                <label>User Name</label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
              </div>
              <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
            </div>

            {/* <Link to="/admin"> */}
              <input className="logsubmit" type="submit" />
            {/* </Link> */}
            <small>
              Not Registered?{" "}
              <span>
                <Link to="register">Register</Link>
              </span>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeloginPage;
