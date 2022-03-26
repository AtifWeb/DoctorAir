import React from "react";
import "./AdvertizeClinicsDashboard.css";
import ladyhome from "../../../../../assets/img/lady_home.png";
const AdvertizeClinicsDashboard = () => {
  return (
    <section className="patient-list">
      <div className="patient-list-welcome">
        <div className="welcome-left stagger">
          <strong className="welcome">Experience Peachy Patient </strong>
          <h1 className="patient-list-heading">Patients List</h1>
          <p className="welcome-message-desc">
            Keep up with all of your Peachy Patients here! Every patient that is
            sent your practice though our platform will appear here.
          </p>
          <div className="patient-presentation">
            <div className="box calender">
              <div className="calender-top">
                <div className="icon-wrapper" id="calender-back-icon-wrapper">
                  <img
                    src="../../assets/img/calender back.png"
                    alt=""
                    id="calender-back-icon"
                  />
                </div>
                <strong className="Calender-DateTime">Dec, 2021</strong>
                <div
                  className="icon-wrapper"
                  id="calender-towards-icon-wrapper"
                >
                  <img
                    src="../../assets/img/calender front.png"
                    alt=""
                    id="calender-towards-icon"
                  />
                </div>
              </div>
              <div className="calender-days-name">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
              <div className="calender-days"></div>
            </div>

            <h2 id="presentation-heading">All Patients</h2>

            <div className="search-input-wrapper d-none">
              <input
                type="text"
                placeholder="Search"
                className="search_input"
              />
              <i className="fas fa-times" id="cancel-icon"></i>
            </div>
            <div className="icons">
              <div className="icon-wrapper" id="search-icon">
                <svg
                  id="Group_15347"
                  data-name="Group 15347"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_53847"
                    data-name="Path 53847"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <circle
                    id="Ellipse_233"
                    data-name="Ellipse 233"
                    cx="7.5"
                    cy="7.5"
                    r="7.5"
                    transform="translate(3.336 3)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_85"
                    data-name="Line 85"
                    x1="5"
                    y1="5"
                    transform="translate(16.336 16)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div className="icon-wrapper" id="caledner-icon">
                <svg
                  id="Group_15263"
                  data-name="Group 15263"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_200"
                    data-name="Path 200"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <rect
                    id="Rectangle_1601"
                    data-name="Rectangle 1601"
                    width="16"
                    height="16"
                    rx="2"
                    transform="translate(3.545 5)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_5"
                    data-name="Line 5"
                    y2="4"
                    transform="translate(15.545 3)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_6"
                    data-name="Line 6"
                    y2="4"
                    transform="translate(7.545 3)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_58047"
                    data-name="Path 58047"
                    d="M0,0H16"
                    transform="translate(3.545 11)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_8"
                    data-name="Line 8"
                    x2="1"
                    transform="translate(10.545 15)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_9"
                    data-name="Line 9"
                    y2="3"
                    transform="translate(11.545 15)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-right stagger">
          <img src={ladyhome} className="lady-image" />
          <h1>Hello, Anne!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="./profile.html" className="view-btn">
            View My Profile{" "}
          </a>
        </div>
      </div>

      <div className="patients-cards">
        <div className="card stagger">
          <a href="/practice/patientProfile/2">
            <div className="card-image">
              <img src="../../assets/img/laptop2.jfif" />
            </div>
            <div className="card-details">
              <h3>Sara Vargas</h3>
              <p>Implant Patient</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default AdvertizeClinicsDashboard;
