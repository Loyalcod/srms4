import DeloginPage from "./pages/deLoginPage/DeloginPage";
import Bodycontainer from "./components/Bodycontainer";
import ManageClass from "./pages/ManageClass/ManageClass";
import Home from "./pages/Home/Home"
import CreateClass from "./pages/CreateClass/CreateClass";
import AddSubjectCombo from "./pages/AddSubjectCombo/AddSubjectCombo";
import CreateResult from "./pages/CreateResult/CreateResult";
import CreateStudent from "./pages/CreateStudent/CreateStudent";
import CreateSubject from "./pages/CreateSubject/CreateSubject"
import ManageAddSubCombo from "./pages/ManageAddSubCombo/ManageAddSubCombo";
import ManageResult from "./pages/ManageResult/ManageResult";
import ManageStudent from "./pages/ManageStudent/ManageStudent";
import ManageSubject from "./pages/ManageSubject/ManageSubject";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DeloginPage/>}></Route>
      <Route path="admin" element={<Home />}>
          <Route path="/admin" element={<Bodycontainer/>}></Route>
          <Route path="createClass" element={<CreateClass/>}></Route>
          <Route path="manage_class" element={<ManageClass/>}></Route>
          <Route path="add_subject_combo" element={<AddSubjectCombo/>}></Route>
          <Route path="Create_Result" element={<CreateResult/>}></Route>
          <Route path="Create_Student" element={<CreateStudent/>}></Route>
          <Route path="Create_Subject" element={<CreateSubject/>}></Route>
          <Route path="Manage_Add_SubCombo" element={<ManageAddSubCombo/>}></Route>
          <Route path="Manage_Result" element={<ManageResult/>}></Route>
          <Route path="Manage_Student" element={<ManageStudent/>}></Route>
          <Route path="Manage_Subject" element={<ManageSubject/>}></Route>
      </Route>
    </Routes>
    

  
  );
}


export default App