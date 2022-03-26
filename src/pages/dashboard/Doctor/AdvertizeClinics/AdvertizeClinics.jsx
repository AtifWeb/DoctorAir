import React from "react";
import Sidebar from "../../../../common/dashboard/doctor/sidebar/Sidebar";
import AdvertizeClinicsDashboard from "../../../../design/template/dashboard/doctor/AdvertizeClinicsDashboard/AdvertizeClinicsDashboard";
import "./AdvertizeClinics.css";
const AdvertizeClinics = () => {
  return (
    <div className="AdvertizeClinics">
      {/* sidebar */}

      <Sidebar />

      {/* dashboard */}
      <AdvertizeClinicsDashboard />
    </div>
  );
};
export default AdvertizeClinics;
