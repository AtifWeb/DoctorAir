import React from "react";
import "./DoctorCard.css";
import Stars from "../../../../common/components/Stars/Stars";
import { Link } from "react-router-dom";
const DoctorCard = ({ img, stars, redirectlinkId }) => {
  return (
    <Link to={`/Doctors/${redirectlinkId}`}>
      <div className="DoctorCard">
        {/* img */}
        <img src={img} alt="" />

        {/* text */}
        <div className="presentation_area">
          <img src={img} alt="" />
          <div className="content_area">
            <p>I will Check your mental health</p>
            <span>Phycology</span>

            <div className="reviews_area">
              {/* stars */}
              <Stars stars={stars} />
              {/* reviews count */}
              <p>(6)</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default DoctorCard;
