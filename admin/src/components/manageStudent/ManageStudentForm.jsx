import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import UseAxiosPrivate from "../hooks/UseAxiosPrivate";
import { UseAxiosGetAll } from "../hooks/UseAxiosMethod";
import { UseAxiosDelete } from "../hooks/UseAxiosMethod";
import { Link } from 'react-router-dom'

function ManageStudentForm() {

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    { field: "fullname", headerName: "Student Name", width: 150 },
    { field: "regNo", headerName: "Reg. No. ", width: 150 },
    {
      field: "class",
      headerName: "Class",
      width: 150,
      renderCell: (params) => {
        return <div>{params?.row?.studentClassId?.className}</div>;
      },
    },
    { field: "createdAt", headerName: "Registration Date", width: 150 },
    {
      field: "col5",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link  className="class_edit_text" to={`/admin/manage_Student/${params.row._id}`}>
            <button className="class_edit_text" style={{ cursor: "pointer" }}>
              Edit
            </button>
            </Link>
            <DeleteForeverIcon
              className="class__delete_icon"
              onClick={() => handleDelete(params?.row?._id, params?.row?.studentClassId?._id)}
              style={{ cursor: "pointer" }}
            />
          </>
        );
      },
    },
  ];

  const secureAxiosApi = UseAxiosPrivate();
  const AxiosGet = UseAxiosGetAll();
  const [Data, setData] = useState([]);
  const [Del, setDel] = useState(false);
  const AxiosDelete = UseAxiosDelete()

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    AxiosGet("/student", secureAxiosApi, controller, isMounted, setData);
    console.log(Data);

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [Del]);

  const handleDelete = async (id,stdClassId) => {
    AxiosDelete(`/student/${id}/${stdClassId}`,secureAxiosApi.delete,setDel,"Student Deleted Successfully")
  };

  return (
    <div className="classTable">
      <ToastContainer/>
      <div className="tableWrapper">
        <DataGrid
          rows={Data}
          getRowId={(Data) => Data._id}
          columns={columns}
          disableRowSelectionOnClick
          checkboxSelection
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}

export default ManageStudentForm;
