import Header from "../../layout/Header"
import SideBar from "../../layout/SideBar"
import { Outlet } from "react-router-dom"

function Home() {
  return (
    <>
        <Header />
        <div className="main">
            <SideBar />
            <div class="content">
                <Outlet />   
            </div>
        </div>
    </>
  )
}

export default Home