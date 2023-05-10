import "./sidebar.css";
import RoofingSharpIcon from "@mui/icons-material/RoofingSharp";
import ClassSharpIcon from "@mui/icons-material/ClassSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import AddSharpIcon from '@mui/icons-material/AddSharp';
import AdjustSharpIcon from '@mui/icons-material/AdjustSharp';
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import CreateNewFolderSharpIcon from '@mui/icons-material/CreateNewFolderSharp';
import SystemSecurityUpdateGoodSharpIcon from '@mui/icons-material/SystemSecurityUpdateGoodSharp';
import SecurityUpdateWarningSharpIcon from '@mui/icons-material/SecurityUpdateWarningSharp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate  } from "react-router-dom";
import useLogOut from '../components/hooks/LogOut';


// import { useState } from "react";

function SideBar() {

  const logout = useLogOut()
    const navigate = useNavigate()

    const handleLogOutClick = async()=>{
    
        await logout()
        navigate('/')
    }
    


 
  
  return (
    
    
    
      <div class="sidebar">
        <div className="side-divide">
          <Link  to='admin'>
            <h4>Dashboard</h4>
          </Link>
          <div className="side-item">
            <div>
              
              <Link className="decorate_link" to='/admin'>
                <div>
                  <RoofingSharpIcon fontSize="small" />
                </div>
                <div>Home</div>
              </Link>
            </div>
          </div>
        </div>

        {/* this is for class  */}
        <div className="side-divide">
          <a href="">
            <h4>
              <div> Class </div>
            </h4>
          </a>
          <div className="side-item">
            <div>
              <Link className="decorate_link" to="createClass">
                <div>
                  <ClassSharpIcon fontSize="small" />
                </div>
                <div>Create Class</div>
              </Link>
              <Link className="decorate_link" to="manage_class">
                <div>
                  <SchoolSharpIcon fontSize="small" />
                </div>
                <div>Manage Class</div>
              </Link>
            </div>
          </div>
        </div>
        {/* /* -------------------------- SUBJECT MENUE ------------------------- */}
        <div className="side-divide">
          <a href="">
            <h4>
              <div> Subject </div>
            </h4>
          </a>
          <div className="side-item">
            <div>
              <Link className="decorate_link" to="Create_Subject">
                <div>
                  <ModeEditOutlineSharpIcon fontSize="small" />
                </div>
                <div>Create Subject</div>
              </Link>
              <Link className="decorate_link" to="Manage_Subject">
                <div>
                  <MenuIcon fontSize="small" />
                </div>
                <div>Manage Subject</div>
              </Link>
              <Link className="decorate_link" to="add_subject_combo">
                <div>
                  <AddSharpIcon fontSize="small" />
                </div>
                <div>Add Subject Combo</div>
              </Link>
              <Link className="decorate_link" to="Manage_Add_SubCombo">
                <div>
                  <AdjustSharpIcon fontSize="small" />
                </div>
                <div>Manage Subject Combo</div>
              </Link>
            </div>
          </div>
        </div>
        {/* student side bar menu */}

        <div className="side-divide">
          <a href="">
            <h4>
              <div> Student </div>
            </h4>
          </a>
          <div className="side-item">
            <div>
              <Link className="decorate_link" to="Create_Student">
                <div>
                  <AddBoxSharpIcon fontSize="small" />
                </div>
                <div>Create Student</div>
              </Link>
              <Link className="decorate_link" to="Manage_Student">
                <div>
                  <CreateNewFolderSharpIcon fontSize="small" />
                </div>
                <div>Manage Student</div>
              </Link>
              
            </div>
          </div>
        </div>

        {/* this result side bar menu */}

        <div className="side-divide">
          <a href="">
            <h4>
              <div> Result </div>
            </h4>
          </a>
          <div className="side-item">
            <div>
              <Link className="decorate_link" to="Create_Result">
                <div>
                  <SystemSecurityUpdateGoodSharpIcon fontSize="small" />
                </div>
                <div>Create Result</div>
              </Link>
              <Link className="decorate_link" to="Manage_Result">
                <div>
                  <SecurityUpdateWarningSharpIcon fontSize="small" />
                </div>
                <div>Manage Result</div>
              </Link>
              <a href="" onClick={handleLogOutClick} className="decorate_link">
                <div>
                  <ExitToAppIcon fontSize="small" />
                </div>
                <div>Logout</div>
              </a>
              
            </div>
          </div>
        </div>
      </div>


    
    
  );
}

export default SideBar;
