import React from "react";
import Header from "../../common/components/Header/Header";
import SearchBanner from "../../design/organism/Doctors/SearchBanner/SearchBanner";
import "./Doctors.css";
import DoctorCardsTemp from "../../design/template/Doctor/DoctorCardsTemp/DoctorCardsTemp";
const Doctors = () => {
  return (
    <div className="DoctorsWrapper">
      {/* header */}
      <Header />

      {/* SearchBanner */}
      <SearchBanner />

      {/* DoctorCardsTemp */}
      <DoctorCardsTemp />
    </div>
  );
};
export default Doctors;
