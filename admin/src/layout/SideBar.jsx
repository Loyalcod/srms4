import "./sidebar.css";
import Bodycontainer from "../components/Bodycontainer";
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

function SideBar() {
  return (
    <div className="main">
      <div class="sidebar">
        <div className="side-divide">
          <a href="/">
            <h4>Dashboard</h4>
          </a>
          <div className="side-item">
            <div>
              <a href="/">
                <div>
                  <RoofingSharpIcon fontSize="small" />
                </div>
                <div>Home</div>
              </a>
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
              <a href="">
                <div>
                  <ClassSharpIcon fontSize="small" />
                </div>
                <div>Create Class</div>
              </a>
              <a href="">
                <div>
                  <SchoolSharpIcon fontSize="small" />
                </div>
                <div>Manage Class</div>
              </a>
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
              <a href="">
                <div>
                  <ModeEditOutlineSharpIcon fontSize="small" />
                </div>
                <div>Create Subject</div>
              </a>
              <a href="">
                <div>
                  <MenuIcon fontSize="small" />
                </div>
                <div>Manage Subject</div>
              </a>
              <a href="">
                <div>
                  <AddSharpIcon fontSize="small" />
                </div>
                <div>Add Subject Combo</div>
              </a>
              <a href="">
                <div>
                  <AdjustSharpIcon fontSize="small" />
                </div>
                <div>Manage Subject Combo</div>
              </a>
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
              <a href="">
                <div>
                  <AddBoxSharpIcon fontSize="small" />
                </div>
                <div>Create Student</div>
              </a>
              <a href="">
                <div>
                  <CreateNewFolderSharpIcon fontSize="small" />
                </div>
                <div>Manage Student</div>
              </a>
              
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
              <a href="">
                <div>
                  <SystemSecurityUpdateGoodSharpIcon fontSize="small" />
                </div>
                <div>Create Result</div>
              </a>
              <a href="">
                <div>
                  <SecurityUpdateWarningSharpIcon fontSize="small" />
                </div>
                <div>Manage Result</div>
              </a>
              <a href="">
                <div>
                  <ExitToAppIcon fontSize="small" />
                </div>
                <div>Logout</div>
              </a>
              
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <Bodycontainer/>    
      </div>
    </div>
  );
}

export default SideBar;
