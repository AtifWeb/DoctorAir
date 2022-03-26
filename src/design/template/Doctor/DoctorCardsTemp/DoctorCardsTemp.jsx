import React from "react";
import demiimg from "../../../../assets/img/bestDoctorss.png";
import DoctorCard from "../../../organism/Doctors/DoctorCard/DoctorCard";

import "./DoctorCardsTemp.css";
const DoctorCardsTemp = () => {
  return (
    <div className="DoctorCardsTemp">
      <h1>Our Best Doctors</h1>
      <div className="cards_content_wrapper">
        <DoctorCard img={demiimg} stars={5} redirectlinkId={22} />
        <DoctorCard img={demiimg} stars={3} redirectlinkId={12} />
        <DoctorCard img={demiimg} stars={2} redirectlinkId={92} />
        <DoctorCard img={demiimg} stars={4} redirectlinkId={76} />
        <DoctorCard img={demiimg} stars={1} redirectlinkId={89} />
      </div>
    </div>
  );
};
export default DoctorCardsTemp;
