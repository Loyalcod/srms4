import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import {toast } from "react-toastify"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "../../api/Axios"


function RegisterInputForm() {
    const timerRef = useRef(null)
    const Navigate = useNavigate()
    const Location = useLocation()
    
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

  

    const handleRegisterBtn = async(e)=>{
        e.preventDefault()
        
        if(fullname === "" || username === "" ||  password === "" || confirmPassword === "") return toast("please fill in the empty field areas")
        if(password !== confirmPassword) return toast ("password does not match")
        const admin = {fullname,username,password}

        try {
            const response = await axios.post('/admin', admin,{
                headers:{"Content-Type":"application/json"}
            })
            if(response.status === 200){
                toast("Registration Successfull")
                timerRef.current = setTimeout(()=>Navigate('/',{replace:true}), 4000)

            }
                       
            
        } catch (error) {
            console.log(error)
            if(error?.request?.status === 401){
                toast("user already exist")
            }else if(!error.respons){
                toast("no server response")
            }else{
                toast("registration failed")
            }
            
        }
    }
    useEffect(()=>{
        return ()=>clearTimeout(timerRef.current)
    },[])

  return (
    <>
     {/* {propToast} */}
    <form onSubmit={handleRegisterBtn} className="registerformstyle">
        <div>
            <div>
                <label >FullName</label>
                <input value={fullname} type="text" autoComplete onChange={(e)=> setFullname(e.target.value)} />
            </div>
            <div>
                <label >User Name</label>
                <input value={username} type="text" autoComplete onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div>
                <label >Password</label>
                <input value={password} type="password" autoComplete onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
                <label >Confirm Password</label>
                <input value={confirmPassword} type="password" autoComplete onChange={(e)=>{setconfirmPassword(e.target.value)}} />
            </div>
        </div>

        {/* <Link to="/login"> */}
            <input className="registersubmit" type="submit"/>
        {/* </Link> */}
        <small>Already have an account?<span><Link to='/'><a href=""> Login</a></Link></span></small>

    </form>
</>
  )
}

export default RegisterInputForm