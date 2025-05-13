import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ColorProvider } from "./ColorContext"; // correct path
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import RoleManagementPage from "./pages/RoleManagementPage"; 
import ManageDepartment from "./pages/ManageDepartment";
import ManageTitles from "./pages/ManageTitles";
import ManageGrades from "./pages/ManageGrades";
import CreateEmployee from "./pages/CreateEmployee";
import ManageUsers from "./pages/ManageUsers";
import EmployeeLocationManagement from "./pages/EmployeeLocationManagement";
import ManageHolidays from "./pages/ManageHolidays";
import ManageDocuments from "./pages/ManageDocuments";
import ManageAnnouncement from "./pages/ManageAnnouncement";
import ManageTimesheet from "./pages/ManageTimeSheet";
import EmployeeDashboard from "./pages/EmployeeDashboard";

function App() {
  return (
    <ColorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/role-management" element={<RoleManagementPage />} />
          <Route path="/department-management" element={<ManageDepartment/>} />
          <Route path="/title-management" element={<ManageTitles />} />
          <Route path="/grade-management" element={<ManageGrades />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-location" element={<EmployeeLocationManagement />} />
          <Route path="/manage-holidays" element={<ManageHolidays />} />
          <Route path="/manage-docs" element={< ManageDocuments/>}/>
          <Route path="/manage-announcement" element={<ManageAnnouncement/>}/>
          <Route path="/manage-timesheet" element={<ManageTimesheet/>}/>
          <Route path="/employee-dashboard" element={<EmployeeDashboard/>}/>
        </Routes>
      </Router>
    </ColorProvider>
  );
}

export default App;
