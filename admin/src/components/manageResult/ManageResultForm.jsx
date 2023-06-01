import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useEffect, useState } from "react";
import { UseAxiosGetAll, UseAxiosDelete } from "../hooks/UseAxiosMethod";
import UseAxiosPrivate from "../hooks/UseAxiosPrivate";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ManageResultForm({ resultId }) {
  const columns = [
    {
      field: "fullname",
      headerName: "Student Name",
      width: 150,
      renderCell: (params) => {
        return <>{params?.row?.studentId?.fullname}</>;
      },
    },
    {
      field: "class",
      headerName: "Class ",
      width: 150,
      renderCell: (params) => {
        return <>{params?.row?.classId?.className}</>;
      },
    },
    {
      field: "subject",
      headerName: "Subject | Subject Code",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {params?.row?.subjectId?.subjectName} (
            {params?.row?.subjectId?.subjectCode})
          </>
        );
      },
    },
    { field: "mark", headerName: "Mark", width: 150 },
    {
      field: "col5",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              className="class_edit_text"
              to={`/admin/manage_Result/${params.row._id}`}
              style={{ cursor: "pointer" }}
            >
              <button className="class_edit_text">Edit</button>
            </Link>
            {/* /:resultId/:studentId/:subjectId' */}
            <DeleteForeverIcon
              onClick={() =>
                handleDelete(
                  params.row._id,
                  params.row.studentId._id,
                  params.row.subjectId._id
                )
              }
              className="class__delete_icon"
              style={{ cursor: "pointer" }}
            />
          </>
        );
      },
    },
  ];

  const getAxiosMethod = UseAxiosGetAll();
  const secureApiAxios = UseAxiosPrivate();
  const [Data, setData] = useState([]);
  const deleteAxiosMethod = UseAxiosDelete()
  const [del, setDel] = useState(false)

  const handleDelete= async(resultId,studentId,subjectId)=>{
    deleteAxiosMethod(`result/${resultId}/${studentId}/${subjectId}`,secureApiAxios.delete,setDel,"Result Deleted successfully")
  }

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    getAxiosMethod(
      "/result",
      secureApiAxios.get,
      controller,
      isMounted,
      setData
    );
    console.log(Data);
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [del]);

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

export default ManageResultForm;
