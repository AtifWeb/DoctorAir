import React from "react";
import "./Comments.css";
import Avatar from "../../common/Avatar/Avatar";
import Stars from "../components/Stars/Stars";
const Comments = ({ img }) => {
  return (
    <div className="Comments">
      <Avatar img={img} />
      <div className="presentation">
        <p>Atif Asim</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          reiciendis.
        </p>
        <Stars stars={3} />
      </div>
    </div>
  );
};
export default Comments;
