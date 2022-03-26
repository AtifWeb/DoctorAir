import React from "react";
import demiimg from "../../../assets/img/bestDoctorss.png";
import Stars from "../../../common/components/Stars/Stars";
import Avatar from "../../../common/Avatar/Avatar";
import Comments from "../../../common/comments/Comments";
import "./DoctorProfileTemp.css";
const DoctorProfileTemp = () => {
  return (
    <div className="DoctorProfileTemp">
      <div
        className="profile_img_area_wrapper"
        style={{ backgroundImage: `url(${demiimg})` }}
      >
        <div className="profile_img_wrapper">
          <img src={demiimg} alt="" />
        </div>
      </div>

      <div className="profile_content_area">
        <div className="left_side">
          <div className="desc_area">
            <h1>Description</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique omnis tempora sint maiores quisquam aliquid autem qui
              beatae neque dolores!
            </p>
          </div>
        </div>
        <div className="right_side">
          <div className="top_area">
            <Avatar img={demiimg} />
            <p>Atif Asim has (35) reviews</p>
            <Stars stars={3} />
          </div>

          <div className="comments_section">
            <Comments img={demiimg} />
            <Comments img={demiimg} />
            <Comments img={demiimg} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorProfileTemp;
