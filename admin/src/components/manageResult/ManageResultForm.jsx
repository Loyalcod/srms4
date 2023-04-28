import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ManageResultForm() {
  const rows = [
    { id: 1, col1: "Marynn Isaac", col2: "Fourth Grade", col3: "Mathematics (MTH 112)", col4: "78", },
    {
      id: 2,
      col1: "Chidera Chukwu",
      col2: "First Grade",
      col3: "Mathematics (MTH 112",
      col4: "98",
    },
    {
      id: 3,
      col1: "Nnenne",
      col2: "Third Grade",
      col3: "English Language (GSS 112)",
      col4: "88",
    },
  ];

  const columns = [
    { field: "col1", headerName: "Student Name", width: 150 },
    { field: "col2", headerName: "Class ", width: 150 },
    { field: "col3", headerName: "Subject | Subject Code", width: 150 },
    { field: "col4", headerName: "Mark", width: 150 },
    {
      field: "col5",
      headerName: "Action",
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
  )
}

export default ManageResultForm