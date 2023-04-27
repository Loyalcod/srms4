import { DataGrid } from "@mui/x-data-grid";
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function MangStdSubComboTable() {
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
        { field: "col1", headerName: "Student Name", width: 150 },
        { field: "col2", headerName: "Subject ", width: 150 },
        { field: "col3", headerName: "Creation Date", width: 150 },
        {field: "col4", headerName: "Status", width: 150, renderCell: ()=>{
            return (
                <>
                    <CheckCircleOutlineIcon style={{color: "green", cursor:"pointer"}} />
                </>
            )
        }},
        {
          field: "col5",
          headerName: "Action",
          width: 150,
          renderCell: () => {
            return (
              <>
                <DeleteForeverIcon style={{color: "red", cursor: "pointer"}}/>
                
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

export default MangStdSubComboTable