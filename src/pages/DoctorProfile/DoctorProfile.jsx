import React, { useState } from "react";
import Header from "../../common/components/Header/Header";
import DoctorProfileTemp from "../../design/template/DoctorProfileTemp/DoctorProfileTemp";
import Sidebar from "../../common/components/Sidebar/Sidebar";
const DoctorProfile = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  return (
    <div className="DoctorProfile">
      {/* header */}
      <Header setsidebarshow={setsidebarshow} sidebarshow={sidebarshow} />

      {/* Sidebar */}
      <Sidebar sidebarState={sidebarshow} />

      {/* profile Doctor Area */}
      <DoctorProfileTemp />
    </div>
  );
};
export default DoctorProfile;
