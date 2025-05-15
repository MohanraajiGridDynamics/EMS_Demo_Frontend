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
import Navigator from "./pages/Navigator";


import PerformanceReview from "./performance-pages/Performance-Review";
import CreateReview from "./performance-pages/CreateReview";
import { ReviewProvider } from "./performance-pages/ReviewContext";
import ViewReview from "./performance-pages/ViewReview";
import EditReview from "./performance-pages/EditReview";
import ReviewCharts from "./performance-pages/ReviewCharts";
import GoalTypeDashboard from "./performance-pages/GoalTypeDashboard";
import { GoalContextProvider } from "./performance-pages/GoalContext";
import CreateGoalType from "./performance-pages/CreateGoalType";
import EditGoalType from "./performance-pages/EditGoalType";
import GoalDetail from "./performance-pages/GoalDetail";


import ManageLeads from "./accountPages/ManageLeads"; 
import ViewLead from "./accountPages/ViewLeads"; // correct path
import ManageCustomers from "./accountPages/ManageCustomers";
import ViewCustomer from "./accountPages/ViewCustomer";
import EditCustomer from "./accountPages/EditCustomer"; // correct path
import AddCustomer from "./accountPages/AddCustomer";
import ManageProject from "./accountPages/ManageProject"; // correct path
import ViewProject from "./accountPages/ViewProject";
import EditProject from "./accountPages/EditProject"; // correct path
import AddProject from "./accountPages/AddProject";


import ManageDemands from "./demandPages/ManageDemands"; // correct path
import Staffing from "./demandPages/Staffing";
import ViewDemand from "./demandPages/ViewDemands";


import CandidateRegister from "./talentAcquisationPages/CandidateRegister";
import InterviewWorkflow from "./talentAcquisationPages/InterviewWorkFlow";
import TIScreen from "./talentAcquisationPages/TIScreen";
import NTIScreen from "./talentAcquisationPages/NTIScreen";
import TAReports from "./talentAcquisationPages/TAReports";


import ManageProgram from "./trainingModulePages/ManageProgram";


import FinanceModule from "./financePages/FinanceModule";


function App() {
  return (
    <ColorProvider>
    <ReviewProvider>
       <GoalContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/employee-admin-dashboard" element={<AdminDashboard />} />
          <Route path="/employee-role-management" element={<RoleManagementPage />} />
          <Route path="/employee-department-management" element={<ManageDepartment/>} />
          <Route path="/employee-title-management" element={<ManageTitles />} />
          <Route path="/employee-grade-management" element={<ManageGrades />} />
          <Route path="/employee-create-employee" element={<CreateEmployee />} />
          <Route path="/employee-manage-users" element={<ManageUsers />} />
          <Route path="/employee-manage-location" element={<EmployeeLocationManagement />} />
          <Route path="/employee-manage-holidays" element={<ManageHolidays />} />
          <Route path="/employee-manage-docs" element={< ManageDocuments/>}/>
          <Route path="/employee-manage-announcement" element={<ManageAnnouncement/>}/>
          <Route path="/employee-manage-timesheet" element={<ManageTimesheet/>}/>
          <Route path="/employee-dashboard" element={<EmployeeDashboard/>}/>

             <Route path="/navigator" element={<Navigator/>}/>

          {/* Performance Pages */}
        
          <Route path="/performance-review" element={<PerformanceReview/>}/>
          <Route path="/performance-review/create" element={<CreateReview />} />
          <Route path="/performance-review/view/" element={<ViewReview />}/>
          <Route path="/performance-review/view/:id" element={<ViewReview />}/>
          <Route path="/performance-review/edit/" element={<EditReview />} />
          <Route path="/performance-review/edit/:id" element={<EditReview />} />
          <Route path="/performance-review/charts" element={<ReviewCharts/>} />
          <Route path="/performance-review/goal-types" element={<GoalTypeDashboard />} />
          <Route path="/performance-review/goal-types/add" element={<CreateGoalType />} />
          <Route path="/performance-review/goal-types/edit/:id" element={<EditGoalType />} />
          <Route path="/performance-review/goal-types/view/:id" element={<GoalDetail />} /> 

          {/* Account Pages */}

          <Route path="/account/manage-leads" element={<ManageLeads />} />
          <Route path="/account/view-lead/:id" element={<ViewLead />} />
          <Route path="/account/manage-customers" element={<ManageCustomers />} />
          <Route path="/account/view-customer/:id" element={<ViewCustomer />} />
          <Route path="/account/edit-customer/:id" element={<EditCustomer />} />
          <Route path="/account/add-customer" element={<AddCustomer />} />
          <Route path="/account/manage-projects" element={<ManageProject />} />
          <Route path="/account/view-project/:id" element={<ViewProject />} />
          <Route path="/account/edit-project/:id" element={<EditProject />} />
          <Route path="/account/add-project" element={<AddProject />} />


          {/* Demand pages */}

           <Route path="/demand/manage-demands" element={<ManageDemands />} /> 
           <Route path="/demand/staffing" element={<Staffing/>} />
            <Route path="/demand/view/:id" element={<ViewDemand />} />


            {/* Talent Acquisation Pages */}

            <Route path="/ta/candidate-register" element={<CandidateRegister/>} />
            <Route path="/ta/interview-workflow" element={<InterviewWorkflow/>} />
            <Route path="/ta/TIScreen" element={<TIScreen/>} />
            <Route path="/ta/NTIScreen" element={<NTIScreen/>} />
            <Route path="/ta/tareports" element={<TAReports/>} />


            <Route path="/training/manageProg" element={<ManageProgram/>} />

            <Route path="/finance/fin-module" element={<FinanceModule/>} />
        </Routes>
      </Router>
      </GoalContextProvider>
      </ReviewProvider>
    </ColorProvider>
  );
}

export default App;
