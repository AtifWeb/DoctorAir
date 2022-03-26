import React, { useState } from "react";
import Header from "../../common/components/Header/Header";
import SearchBanner from "../../design/organism/Doctors/SearchBanner/SearchBanner";
import "./Doctors.css";
import DoctorCardsTemp from "../../design/template/Doctor/DoctorCardsTemp/DoctorCardsTemp";

import Sidebar from "../../common/components/Sidebar/Sidebar";
const Doctors = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  return (
    <div className="DoctorsWrapper">
      {/* header */}
      <Header setsidebarshow={setsidebarshow} sidebarshow={sidebarshow} />

      {/* Sidebar */}
      <Sidebar sidebarState={sidebarshow} />

      {/* SearchBanner */}
      <SearchBanner />

      {/* DoctorCardsTemp */}
      <DoctorCardsTemp />
    </div>
  );
};
export default Doctors;
