import { DataGrid } from "@mui/x-data-grid";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function ManageSubjectTable() {
  const rows = [
    { id: 1, col1: "Hello", col2: "World", col3: "4-10-2022" },
    {
      id: 2,
      col1: "DataGridPro",
      col2: "is Awesome",
      col3: "4-10-2022",
    },
    {
      id: 3,
      col1: "MUI",
      col2: "is Amazing",
      col3: "4-10-2022",
    },
  ];

  const columns = [
    { field: "col1", headerName: "Subject Name", width: 150 },
    { field: "col2", headerName: "Subject Code", width: 150 },
    { field: "col3", headerName: "Creation Date", width: 150 },
    {
      field: "col4",
      headerName: "Action",
      width: 150,
      renderCell: () => {
        return (
          <>
            <button className="class_edit_text">Edit</button>
            <HighlightOffIcon className="class__delete_icon" />
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

export default ManageSubjectTable;