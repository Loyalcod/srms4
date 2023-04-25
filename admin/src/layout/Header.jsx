import './Header.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Header() {
  return (
    <div>
        <div className="container">
            <div className="header_flex">
                <a href='/'>
                    <h2>
                        <span>STUDENT RESULT MANAGEMENT</span>
                    </h2>
                </a>
            </div>
            <div className="header_flex pushLeft">                
                <div className='cont'>
                    <div className="flexIcons">
                            <a href="" className='flexIcon'>
                                <NotificationsNoneOutlinedIcon fontSize='medium'/>
                            </a>
                    </div>
                    <div className="flexIcons">
                            <a href="" className='flexIcon'>
                                <SettingsIcon />
                            </a> 
                    </div>
                    <div className="flexIcons">
                            <a href="" className='flexIcon'>
                                <AccountCircleIcon/>
                            </a> 
                    </div>
                    <div className="flexIcons ">
                            <a href="" className='flexIcon'>
                                <ExitToAppIcon/>
                                Logout
                            </a> 
                    </div>

                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Header