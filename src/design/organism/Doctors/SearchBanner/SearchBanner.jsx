import React from "react";
// css
import "./SearchBanner.css";

// img
import SearchBannerImg from "../../../../assets/img/bestDoctors.png";

// icons
import SearchIcon from "@mui/icons-material/Search";

const SearchBanner = () => {
  return (
    <div className="SearchBanner">
      <div className="content">
        <div className="presentation">
          <h1>Explore Thousands of Doctors</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            doloremque sapiente delectus enim minima cum eius corporis quo
            natus. Repudiandae
          </p>

          {/* form for search */}
          <form>
            <div className="input_wrapper">
              <SearchIcon />

              <input type="text" placeholder="Search Any Doctor" />
            </div>

            <select name="" id="">
              <option value="1+">1+</option>
              <option value="2+">2+</option>
              <option value="3+">3+</option>
              <option value="4+">4+</option>
              <option value="5+">5+</option>
            </select>

            <button className="search_button">
              <SearchIcon />
            </button>
          </form>
        </div>

        {/* img */}
        <img src={SearchBannerImg} alt="" />
      </div>
    </div>
  );
};
export default SearchBanner;
