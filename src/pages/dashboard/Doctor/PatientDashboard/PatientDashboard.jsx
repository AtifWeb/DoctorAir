import React from "react";
import Sidebar from "../../../../common/dashboard/doctor/sidebar/Sidebar";
import AdvertizeClinicsDashboard from "../../../../design/template/dashboard/doctor/AdvertizeClinicsDashboard/AdvertizeClinicsDashboard";
import "./PatientDashboard.css";
const PatientDashboard = () => {
  return (
    <div className="AdvertizeClinics">
      {/* sidebar */}

      <Sidebar />

      {/* dashboard */}
      <AdvertizeClinicsDashboard />
    </div>
  );
};
export default PatientDashboard;
