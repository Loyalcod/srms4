import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ManageStudentForm() {
  const rows = [
    { id: 1, col1: "Marynn Isaac", col2: "65364", col3: "Grade 1", col4: "4-10-2022", },
    {
      id: 2,
      col1: "Chidera Chukwu",
      col2: "877887",
      col3: "Grade 2",
      col4: "4-10-2022",
    },
    {
      id: 3,
      col1: "Nnenne",
      col2: "347563",
      col3: "Grade 3",
      col4: "4-10-2022",
    },
  ];

  const columns = [
    { field: "col1", headerName: "Student Name", width: 150 },
    { field: "col2", headerName: "Reg. No. ", width: 150 },
    { field: "col3", headerName: "Class", width: 150 },
    { field: "col4", headerName: "Registration Date", width: 150 },
    {
      field: "col5",
      headerName: "Status",
      width: 150,
      renderCell: () => {
        return (
          <>
            <button className="class_edit_text" style={{cursor: "pointer"}}>Edit</button>
            <DeleteForeverIcon className="class__delete_icon" style={{cursor: "pointer"}} />
          </>
        );
      },
    },
    
  ];
  return (
    <div className="classTable">
      <div className="tableWrapper">
        <DataGrid
          rows={rows}
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
