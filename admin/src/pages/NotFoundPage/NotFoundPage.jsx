import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{flex:1}}>
          <h1 className="iamnotfoundpage" style={{color:"red"}}>404</h1>
          <h3>Oop! nothing was found on this page</h3>
          <Link to='/'>Return to Homepage</Link>
      </div>    
    </div>
  )
}

export default NotFoundPage