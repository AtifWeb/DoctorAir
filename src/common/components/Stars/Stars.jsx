import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Stars.css";
const Stars = ({ stars }) => {
  const [FillStars, setFillStars] = useState([]);
  const [NonFillStars, setNonFillStars] = useState([]);

  useEffect(() => {
    let TotalStars = 5;
    let NonFillCount = TotalStars - stars;

    let FillStarsArr = [];
    let NonFillStarsArr = [];

    for (let i = 0; i < stars; i++) {
      FillStarsArr.push(1);
    }

    for (let i = 0; i < NonFillCount; i++) {
      NonFillStarsArr.push(1);
    }

    setFillStars(FillStarsArr);
    setNonFillStars(NonFillStarsArr);
  }, []);
  return (
    <div className="stars">
      {FillStars.map((EachFIllStar) => (
        <StarIcon fontSize="22" className="fill_star_color" />
      ))}

      {NonFillStars.map((EachNonFIllStar) => (
        <StarIcon fontSize="22" className="nonfill_star_color" />
      ))}
    </div>
  );
};
export default Stars;
