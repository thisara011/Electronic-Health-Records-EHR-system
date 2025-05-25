// src/routes/index.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import RegisterPatientPage from "../pages/RegisterPatient";
import DoctorRegistration from "../pages/RegisterDoctor";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/register" element={<RegisterPatientPage />} />
        <Route path="/registerdoctor" element={<DoctorRegistration />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
