import { DataGrid } from "@mui/x-data-grid";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import {UseAxiosGetAll, UseAxiosDelete} from '../hooks/UseAxiosMethod'

function ManageSubjectTable() {


  const columns = [
    { field: "_id", headerName: "Subject Id", hide:true, width: 150 },
    { field: "subjectName", headerName: "Subject Name", width: 150 },
    { field: "subjectCode", headerName: "Subject Code", width: 150 },
    { field: "createdAt", headerName: "Creation Date", width: 150 },
    {
      field: "col4",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
           <Link className="class_edit_text" to={`/admin/manage_Subject/${params.row._id}`}>
            <button className="class_edit_text" style={{cursor:"pointer"}}>Edit</button>
            </Link>
            <HighlightOffIcon className="class__delete_icon" onClick={()=>handleDelete(params?.row?._id)} style={{cursor:"pointer"}} />
          </>
        );
      },
    },
  ];

  const SecureApi = UseAxiosPrivate()
  const AxiosGet =UseAxiosGetAll()
  const [Data, setData] = useState([])
  const axiosDelete = UseAxiosDelete()
  const [del, setDel] = useState(false)
  useEffect(()=>{
    let isMounted = true
    const controller = new AbortController()
    AxiosGet('/subject',SecureApi.get,controller,isMounted,setData)
    return ()=>{
      isMounted= false
      controller.abort()
    }
    
  },[del])


  const handleDelete = (id)=>{
    axiosDelete(`/subject/${id}`, SecureApi.delete, setDel,"Delete was successful")
  }
  return (
    <div className="classTable">
      <div className="tableWrapper">
        <DataGrid
          rows={Data}
          getRowId={(Data)=>Data._id}
          columns={columns}
          disableRowSelectionOnClick
          checkboxSelection
          pageSize={6}
          rowsPerPageOptions={[6]}
        />
      </div>
    </div>
  );
}

export default ManageSubjectTable;
