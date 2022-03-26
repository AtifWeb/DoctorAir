import React from "react";
import BenefitsImg from "../../../../assets/img/bestDoctors.png";

// css
import "./Benefits.css";
const Benefits = ({ img, heading, desc, first }) => {
  return (
    <div className="Benefits">
      <div className="content">
        {/* img */}

        {first && <img src={img} alt="" />}

        <div className="presentation">
          <h1>{heading}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            labore, impedit eveniet tenetur suscipit ullam commodi corporis quae
            aspernatur ipsam, soluta reiciendis et voluptates exercitationem
            atque. Praesentium voluptatum tempore repellendus.
          </p>
        </div>

        {!first && <img src={img} alt="" />}
      </div>
    </div>
  );
};
export default Benefits;
// bestDoctors
