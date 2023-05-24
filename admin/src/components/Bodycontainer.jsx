import "./container.css";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookIcon from '@mui/icons-material/Book';
import { useEffect, useState } from "react";
import UseAxiosPrivate from "./hooks/UseAxiosPrivate";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { UseAxiosGetAll } from "./hooks/UseAxiosMethod";






function Bodycontainer() {

  const privateAxios = UseAxiosPrivate()
  const [totals, setTotals] = useState({})
  const GetAxiosHook = UseAxiosGetAll()

  useEffect(()=>{
    const controller = new AbortController()
    let isMounted = true
    const getTotals = async()=>{
      GetAxiosHook("/total",privateAxios.get,controller,isMounted,setTotals)
      // try {
      //   const response = await privateAxios.get("/total",{ signal: controller.signal })
      //   console.log(response.data)
      //   if(isMounted) return setTotals(response.data)
      // } catch (error) {
      //   if(error.name === 'AbortError') {
      //     console.log(error)
      //   }
      //   console.log(error)
                
      // }
    }
    getTotals()
    return () => {
      isMounted = false
      controller.abort(); 
    }    
  },[])


  const icons=[
    {
      id:1,
      name: "Registered Student",
      num: `${totals?.studentCount}`,
      iconName: PeopleAltIcon,
    },
    {
      id:2,
      name: "Total Class",
      num: `${totals?.studentClasscount}`,
      iconName: BookIcon,
    },
    {
      id:3,
      name: "Total Subject",
      num: `${totals?.subjectCount}`,
      iconName: CollectionsBookmarkIcon,
    },
    {
      id:4,
      name: "Decleared Result",
      num: `${totals?.resultCount}`,
      iconName: MenuBookIcon,
    },
  ]
  
  

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
