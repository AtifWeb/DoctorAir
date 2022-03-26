import React from "react";
import Header from "../../common/components/Header/Header";
import DoctorProfileTemp from "../../design/template/DoctorProfileTemp/DoctorProfileTemp";
const DoctorProfile = () => {
  return (
    <div className="DoctorProfile">
      {/* header */}
      <Header />

      {/* profile Doctor Area */}
      <DoctorProfileTemp />
    </div>
  );
};
export default DoctorProfile;
