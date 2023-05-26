import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UseAxiosPrivate from "../hooks/UseAxiosPrivate";
import { UseAxiosGetAll, UseAxiosDelete } from '../hooks/UseAxiosMethod';





function ClassTable() {

  const columns = [
    { field: "_id", headerName: "ID", hide:true},
    { field: "className", headerName: "Class Name", width: 150 },
    { field: "grade", headerName: "Section", width: 150 },
    { field:"createdAt", headerName: "Creation Date", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* {console.log(params)} */}
            <Link className="class_edit_text" to={`/admin/manage_class/${params.row._id}`}>
            <button className="class_edit_text">Edit</button>
            </Link>
            <DeleteForeverIcon className="class__delete_icon" onClick={()=>handleDelete(params.row._id)}/>
          </>
        );
      },
    },
  ];
  
  const [dataArray, setDataArray] = useState([])
  const axiosApi = UseAxiosPrivate()
  const [del, setDel] = useState(false)
  const GetAxiosHook = UseAxiosGetAll()
  const DelAxiosHook = UseAxiosDelete()

  useEffect(()=>{
    const controller = new AbortController()
      let isMounted = true
    const getClassData = async()=>{
      GetAxiosHook('/classes',axiosApi.get,controller,isMounted,setDataArray) 
      // try {
      //   const response = await axiosApi.get('/classes',{
      //     signal: controller.signal
      //   })
      //   isMounted && setDataArray(response.data)
      //   console.log(response.data)

      // } catch (error) {
      //   console.log(error)
      // }
    }
    getClassData()
    return ()=>{
      isMounted = false
      controller.abort()
    }
  },[del])

  const handleDelete = async(id)=>{
    DelAxiosHook(`/classes/${id}`,axiosApi.delete, setDel,"class deleted successfully")
    // let text = "Are you sure you want to Delete"
    // if(window.confirm(text)=== true){
    //   setDel(true)
    //   try {
    //     const response = await axiosApi.delete(`/classes/${id}`)
    //     console.log(response.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   setDel(false)
    // }
  }

 
  
  return (
    <div className="classTable">
      <div className="tableWrapper">
        <DataGrid
          rows={dataArray}
          columns={columns}
          disableRowSelectionOnClick
          getRowId={(dataArray)=> dataArray._id}
          checkboxSelection
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}

export default ClassTable;
