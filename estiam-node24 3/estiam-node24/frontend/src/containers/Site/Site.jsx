import { BrowserRouter, Routes, Route } from "react-router-dom"
/*import NavBar from "../../components/UI/NAVBAR/NavBar"  <NavBar />*/

import Accueil from "./Accueil/Accueil"
import Application from "./Application/Application"
import TeacherLogin from "./Accueil/Teacher"
import StudentLogin from "./Accueil/Student"
import AdminLogin from "./Accueil/Admin"
import DashboardTeacher from "./Application/Intervenant/EspaceIntervenant"
import CalendarComponent from "./Application/Intervenant/Calendar"
import AvailabilityForm from "./Application/Intervenant/Form"
import CourseSection from "./Application/Etudiant/Coursection"
import StudentDashboard from "./Application/Etudiant/EspaceEtudiant"
import UserProfileInfo from "./Application/Etudiant/Information"
import Dashboard from "./Application/EspaceAdministration/Dashboard"
import CourseSection2 from "./Application/Intervenant/Coursection2"
import Header from "./Application/EspaceAdministration/Header"
import IntervenantStats from "./Application/EspaceAdministration/IntervenantStats"
import Sidebar from "./Application/EspaceAdministration/Sidebar"
import ProfileDetails from "./Application/Intervenant/ProfileDetails"
import EspaceAdministration from "./Application/EspaceAdministration/EspaceAdministation"
import SettingsComponent from "./Application/Etudiant/Parametre"
export default function Site() {
  
    return (
        <>
           
            <Routes>     
                <Route path="/" exact element={<Accueil />} />
                <Route path="/livres" exact element={<Application />} />
                <Route path="/teacher-login" exact element={<TeacherLogin />} />
                <Route path="/student-login" exact element={<StudentLogin />} />
                <Route path="/Coursection" exact element={<CourseSection />} />
                <Route path="/Admin-login" exact element={<AdminLogin />} />
                <Route path="/EspaceIntervenant" exact element={<DashboardTeacher />} />
                <Route path="/Calendar" exact element={<CalendarComponent />} />
                <Route path="/Form" exact element={<AvailabilityForm />} />
                <Route path="/Coursection2" exact element={<CourseSection2 />} />
                <Route path="/ProfileDetails" exact element={<ProfileDetails />} />
                <Route path="/EspaceEtudiant" exact element={<StudentDashboard />} />
                <Route path="/UserProfileInfo" exact element={<UserProfileInfo />} />
                <Route path="/Dashboard" exact element={<Dashboard />} />
                <Route path="/EspaceAdministration" exact element={<EspaceAdministration  />} />
                <Route path="/IntervenantStats" exact element={<IntervenantStats />} />
                <Route path="/Sidebar" exact element={<Sidebar />} />
                <Route path="/Header" exact element={<Header />} />
                <Route path="/parametres" exact element={<SettingsComponent/>} />

               

              
            </Routes>
        </>
    
  )
}