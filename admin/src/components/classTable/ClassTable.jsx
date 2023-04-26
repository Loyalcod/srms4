import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const rows = [
    { id: 1, col1: 'Hello', col2: 'World', col3: "Grade 1", col4: '4-10-2022' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome', col3: "Grade 2", col4: '4-10-2022' },
    { id: 3, col1: 'MUI', col2: 'is Amazing', col3: "Grade 4", col4: '4-10-2022' },
    
  ];
  
  const columns = [
    { field: 'col1', headerName: 'Student Name', width: 150 },
    { field: 'col2', headerName: 'Registration Number', width: 150 },
    { field: 'col3', headerName: 'Class', width: 150 },
    { field: 'col4', headerName: 'Registration Date', width: 150 },
    { field: 'col5', headerName: 'Action', width: 150,
        renderCell: ()=>{
            return (
                <>
                <button className='class_edit_text'>Edit</button>
                <DeleteForeverIcon className='class__delete_icon'/>
                </>
            )
        }
        },
  ];

function ClassTable() {      
  return (
    <div className="classTable">
        <div className="tableWrapper">
            <DataGrid rows={rows} columns={columns} disableSelectionOnClick checkboxSelection pageSize={5} rowsPerPageOptions={[5]} />
        </div>
    </div>
  )
}

export default ClassTable