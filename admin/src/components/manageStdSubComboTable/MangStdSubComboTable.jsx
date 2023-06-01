import { DataGrid } from "@mui/x-data-grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState, useEffect } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { ToastContainer, toast } from "react-toastify";
import UseAxiosPrivate from "../hooks/UseAxiosPrivate";
import { UseAxiosGetAll, UseAxiosDelete } from "../hooks/UseAxiosMethod";

function MangStdSubComboTable() {
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "col2",
      headerName: "Subject Name/Code ",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {params?.row?.subjectId.subjectName} (
            {params?.row?.subjectId.subjectCode})
          </div>
        );
      },
    },
    {
      field: "col3",
      headerName: "Student Name",
      width: 150,
      renderCell: (params) => {
        return <div>{params?.row?.studentId?.fullname}</div>;
      },
    },
    {
      field: "col4",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {params?.row?.status ? (
              <CheckCircleOutlineIcon
                onClick={() => toggleStatus(params?.row?._id)}
                style={{ color: "green", cursor: "pointer" }}
              />
            ) : (
              <CancelOutlinedIcon
                onClick={() => toggleStatus(params?.row?._id)}
                style={{ color: "red", cursor: "pointer" }}
              />
            )}
          </>
        );
      },
    },
    {
      field: "col5",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteForeverIcon onClick={()=>handleDelete(params?.row?._id, params?.row?.studentId?._id, params?.row?.subjectId._id)} style={{ color: "red", cursor: "pointer" }} />
          </>
        );
      },
    },
  ];

  const secureAxiosApi = UseAxiosPrivate();
  const AxiosGetApi = UseAxiosGetAll();
  const [Data, setData] = useState([]);
  const [activeStatus, setActiveStatus] = useState(false);
  const [Del, setDel] = useState(false)
  const delAxiosApi = UseAxiosDelete()

  useEffect(() => {
    let isMounted = true;
    let Controller = new AbortController();
    AxiosGetApi("/combo", secureAxiosApi.get, Controller, isMounted, setData);
    console.log(Data);
    return () => {
      isMounted = false;
      Controller.abort();
    };
  }, [activeStatus, Del]);

  const toggleStatus = async (id) => {
    setActiveStatus(true);
    try {
      const response = await secureAxiosApi.get(`/combo/toggole/${id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setActiveStatus(false);
  };

  const handleDelete = async(id,stdId,subId)=>{
    delAxiosApi(`/combo/${id}/${stdId}/${subId}`,secureAxiosApi.delete,setDel,"Student Subject Removed successfully")
    
  }

  return (
    <div className="classTable">
      <ToastContainer/>
      <div className="tableWrapper">
        <DataGrid
          rows={Data}
          columns={columns}
          getRowId={(Data) => Data._id}
          disableRowSelectionOnClick
          checkboxSelection
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}

export default MangStdSubComboTable;
