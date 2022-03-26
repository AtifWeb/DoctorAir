import React from "react";
import homebanner from "../../../../assets/img/homebanner.png";
import banner_circle from "../../../../assets/img/banner_circle.png";
// css
import { Link } from "react-router-dom";

import "./homebanner.css";
const HomeBanner = () => {
  return (
    <div className="homebanner">
      <div className="homebanner_content">
        {/* content area */}
        <div className="presentation">
          <h1>Book Appointment Anywere Anytime</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            accusantium veritatis amet repellendus nemo vel consequatur optio.
          </p>
          <Link to="/Doctors" className="main_buttons">
            Book an appointment
          </Link>
        </div>
        <div className="image_wrapper">
          <img src={banner_circle} alt="" className="circle_img" />
          <img src={homebanner} alt="" className="bigImage" />
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
