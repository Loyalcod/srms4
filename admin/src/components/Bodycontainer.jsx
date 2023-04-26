import "./container.css";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookIcon from '@mui/icons-material/Book';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from "react";


function Bodycontainer() {

  const [icons, setIcons] = useState([
    {
      name: "Registered Student",
      num: "70",
      iconName: PeopleAltIcon,
    },
    {
      name: "Total Class",
      num: "12",
      iconName: BookIcon,
    },
    {
      name: "Total Subject",
      num: "14",
      iconName: CollectionsBookmarkIcon,
    },
    {
      name: "Decleared Result",
      num: "67",
      iconName: MenuBookIcon,
    },
  ])
  

  return (
    <div>
      
      <div className="body-con">
        <div className="con-flex">
          <h2>Dashboard</h2>
        </div>
        <div className="con-flex comp-area">
          
          {icons.map((items)=> (
            <div className="cardall">
            <div className="compCard">
              <p>{items.name}</p>
              <h3>{items.num}</h3>
            </div>
            <div>
              <items.iconName className="iconColor" fontSize="large" sx={{ fontSize: 80 }}/>
            </div>
        </div>

          ))}   
          
          
        </div>
      </div>
    </div>
  );
}

export default Bodycontainer;
