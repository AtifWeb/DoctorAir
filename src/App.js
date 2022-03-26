import logo from "./logo.svg";
import "./App.css";
import "./global/styles/components.css";
import Index from "./pages/home/Index";
import Doctors from "./pages/Doctors/Doctors";
import DoctorProfile from "./pages/DoctorProfile/DoctorProfile";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import AdvertizeClinics from "./pages/dashboard/Doctor/AdvertizeClinics/AdvertizeClinics";
import PatientDashboard from "./pages/dashboard/Doctor/PatientDashboard/PatientDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Doctors" element={<Doctors />} />
          <Route path="/Doctors/:id" element={<DoctorProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/doctor/AdvertizeClinics"
            element={<AdvertizeClinics />}
          />{" "}
          <Route
            path="/doctor/PatientDashboard"
            element={<PatientDashboard />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
