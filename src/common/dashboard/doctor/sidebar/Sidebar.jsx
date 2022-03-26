import React from "react";
import "./Sidebar.css";
import logo from "../../../../assets/img/logo.png";
const Sidebar = () => {
  return (
    <aside className="side-bar">
      <div className="logo">
        <a href="#" className="brand-logo">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="icons sidebar-options">
        <a href="/practice/dashboard" className="sidebar-option">
          <div className="sidebar-option">
            <div className="icon-wrapper">
              <svg
                id="dashboard-sidebar-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="18.386"
                height="17.587"
                viewBox="0 0 18.386 17.587"
              >
                <g
                  id="Group_18318"
                  data-name="Group 18318"
                  transform="translate(-91.307 -191.5)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="16.386"
                    transform="translate(92.307 192.5)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="16.386"
                    transform="translate(92.307 200.293)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_3"
                    data-name="Line 3"
                    x2="10.193"
                    transform="translate(92.307 208.087)"
                    fill="none"
                    stroke="#07f"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
            <small>Dashboard</small>
          </div>
        </a>

        <a href="/practice/patients" className="sidebar-option">
          <div className="sidebar-option">
            <div className="icon-wrapper active-sideoption">
              <svg
                id="patient-sidebar-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M9,10a5,5,0,1,1,5-5A5.006,5.006,0,0,1,9,10ZM9,1.5A3.5,3.5,0,1,0,12.5,5,3.5,3.5,0,0,0,9,1.5Z"
                  fill="#07f"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M6.5,21H.75A.75.75,0,0,1,0,20.25v-3.5A4.756,4.756,0,0,1,4.75,12h8.5a4.731,4.731,0,0,1,3.425,1.465.751.751,0,1,1-1.09,1.032,3.223,3.223,0,0,0-2.335-1H4.75a3.254,3.254,0,0,0-3.25,3.25V19.5h5a.75.75,0,1,1,0,1.5Z"
                  fill="#07f"
                />
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M14.5,24a.75.75,0,0,1-.651-.378L12.065,20.5H9.75a.75.75,0,0,1,0-1.5H12.5a.751.751,0,0,1,.651.378l1.278,2.236,2.39-5.179A.753.753,0,0,1,17.475,16a.784.784,0,0,1,.683.391L20.945,21.5H23.25a.75.75,0,0,1,0,1.5H20.5a.749.749,0,0,1-.658-.391l-2.286-4.19-2.375,5.146a.75.75,0,0,1-.648.435H14.5Z"
                  fill="#07f"
                />
              </svg>
            </div>
            <small>Patient</small>
          </div>
        </a>

        <a href="/practice/callAnalytics" className="sidebar-option">
          <div className="sidebar-option">
            <div className="icon-wrapper">
              <svg
                id="call-analytics-sidebar-option"
                data-name="Group 19376"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                {/* <!-- <path id="Path_59307" data-name="Path 59307" d="M0,0H24V24H0Z" fill="none"/> --> */}
                <path
                  id="Path_59308"
                  data-name="Path 59308"
                  d="M5,4H9l2,5L8.5,10.5a11,11,0,0,0,5,5L15,13l5,2v4a2,2,0,0,1-2,2A16,16,0,0,1,3,6,2,2,0,0,1,5,4"
                  fill="none"
                  stroke="#07f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <small>Call Analytics</small>
          </div>
        </a>

        <a href="/practice/messaging" className="sidebar-option">
          <div className="sidebar-option">
            <div className="icon-wrapper">
              <svg
                id="Group_19385"
                data-name="Group 19385"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_59326"
                  data-name="Path 59326"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_59327"
                  data-name="Path 59327"
                  d="M12,20,9,17H7a3,3,0,0,1-3-3V8A3,3,0,0,1,7,5H17a3,3,0,0,1,3,3v6a3,3,0,0,1-3,3H15l-3,3"
                  fill="none"
                  stroke="#07f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <line
                  id="Line_146"
                  data-name="Line 146"
                  x2="8"
                  transform="translate(8 9)"
                  fill="none"
                  stroke="#07f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <line
                  id="Line_147"
                  data-name="Line 147"
                  x2="6"
                  transform="translate(8 13)"
                  fill="none"
                  stroke="#07f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <small>Messaging</small>
          </div>
        </a>

        <a href="/practice/billingManagement" className="sidebar-option">
          <div className="sidebar-option">
            <div className="icon-wrapper">
              <svg
                id="billing-sidebar-icon"
                data-name="Group 17457"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                {/* <path id="Path_54226" data-name="Path 54226" d="M0,0H24V24H0Z" fill="none"/> */}
                <path
                  id="Path_54227"
                  data-name="Path 54227"
                  d="M5,21V5A2,2,0,0,1,7,3H17a2,2,0,0,1,2,2V21l-3-2-2,2-2-2-2,2L8,19,5,21M9,7h6M9,11h6m-2,4h2"
                  fill="none"
                  stroke="#07f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <small>Billing Management</small>
          </div>
        </a>

        <a href="/practice/invoices" className="sidebar-option">
          <div className="sidebar-option">
            <div className="icon-wrapper">
              <svg
                id="Invoicing-sidebar-icon"
                data-name="Group 17480"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                {/* <path id="Path_54235" data-name="Path 54235" d="M0,0H24V24H0Z" fill="none"/> */}
                <path
                  id="Path_54236"
                  data-name="Path 54236"
                  d="M5,21V5A2,2,0,0,1,7,3H17a2,2,0,0,1,2,2V21l-3-2-2,2-2-2-2,2L8,19,5,21"
                  fill="none"
                  stroke="#07f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_54237"
                  data-name="Path 54237"
                  d="M14,8H11.5a1.5,1.5,0,0,0,0,3h1a1.5,1.5,0,0,1,0,3H10m2,0v1.5m0-9V8"
                  fill="none"
                  stroke="#07f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <small>Invoicing</small>
          </div>
        </a>

        <a href="/practice/dashboard/support" className="sidebar-option">
          <div className="sidebar-option">
            <div className="icon-wrapper">
              <svg
                id="Group_19954"
                data-name="Group 19954"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle
                  id="Ellipse_700"
                  data-name="Ellipse 700"
                  cx="9"
                  cy="9"
                  r="9"
                  transform="translate(3 3)"
                  fill="none"
                  stroke="#0077FF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></circle>
                <line
                  id="Line_234"
                  data-name="Line 234"
                  y2="0.01"
                  transform="translate(12 17)"
                  fill="none"
                  stroke="#0077FF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></line>
                <path
                  id="Path_62906"
                  data-name="Path 62906"
                  d="M12,13.5A1.5,1.5,0,0,1,13,12a2.6,2.6,0,1,0-3-4"
                  fill="none"
                  stroke="#0077FF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </svg>
            </div>
            <small>Support</small>
          </div>
        </a>
        <a href="/practice/peachyTransactions" className="sidebar-option">
          <div className="sidebar-option">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.483"
                height="20.483"
                viewBox="0 0 20.483 20.483"
              >
                <path
                  id="Path_61553"
                  data-name="Path 61553"
                  d="M19.083,0h-3.6a1.4,1.4,0,0,0-1.4,1.4V6.6a1.8,1.8,0,0,0,1.4,1.755V9a1.8,1.8,0,0,0,1.2,1.7v.7a3.285,3.285,0,0,0,1.1,2.453,2.083,2.083,0,0,1,.7,1.556V17a.6.6,0,0,1-.6.6H16.4v-.259a4.212,4.212,0,0,0-3.084-4.049l-2.717-.75v-.82A4.6,4.6,0,0,0,12.8,7.8V3.4A2.6,2.6,0,0,0,10.2.8H9.636A3.307,3.307,0,0,0,7.47,0H5.4A3.4,3.4,0,0,0,2,3.4,2.2,2.2,0,0,0,3.6,5.517V7.8a4.6,4.6,0,0,0,2.2,3.923v.82l-2.717.75A4.212,4.212,0,0,0,0,17.344v2.539a.6.6,0,0,0,.6.6H15.8a.6.6,0,0,0,.6-.6V18.8h1.48a1.8,1.8,0,0,0,1.8-1.8v-1.6a3.285,3.285,0,0,0-1.1-2.453,2.083,2.083,0,0,1-.7-1.556v-.7a1.8,1.8,0,0,0,1.2-1.7V8.356a1.8,1.8,0,0,0,1.4-1.755V1.4a1.4,1.4,0,0,0-1.4-1.4ZM4.2,4.4h0a1,1,0,0,1-1-1A2.2,2.2,0,0,1,5.4,1.2H7.47a2.118,2.118,0,0,1,1.507.624A.6.6,0,0,0,9.4,2h.8a1.4,1.4,0,0,1,1.4,1.4v.987A3.471,3.471,0,0,1,9.426,3.376a.6.6,0,0,0-.733-.09A7.823,7.823,0,0,1,4.668,4.4Zm.6,3.4V5.6A9.026,9.026,0,0,0,8.92,4.536,4.656,4.656,0,0,0,11.6,5.592V7.8a3.4,3.4,0,0,1-6.8,0Zm4.6,4.442V13.6a1.2,1.2,0,1,1-2.4,0V12.243a4.605,4.605,0,0,0,2.4,0Zm5.8,7.04H13.6V17.8a.6.6,0,0,0-1.2,0v1.48H4V17.8a.6.6,0,0,0-1.2,0v1.48H1.2V17.344a3.009,3.009,0,0,1,2.2-2.892l2.406-.664a2.4,2.4,0,0,0,4.785,0L13,14.452a3.009,3.009,0,0,1,2.2,2.892ZM17.883,9a.6.6,0,1,1-1.2,0V8.4h1.2Zm1.4-2.4a.6.6,0,0,1-.6.6h-2.8a.6.6,0,0,1-.6-.6V4h4Zm0-3.8h-4V1.4a.2.2,0,0,1,.2-.2h3.6a.2.2,0,0,1,.2.2Z"
                  transform="translate(0 0)"
                  fill="#07f"
                />
              </svg>
            </div>
            <small>Charge Patient</small>
          </div>
        </a>
      </div>

      <div className="admin">
        <a href="/practice/practiceProfile" className="sidebar-option">
          <div className="admin-name">
            <div className="admin-pic"></div>
            <small>Atif Asim</small>
          </div>
        </a>
        <div className="logout-option">
          <div className="icon">
            <svg
              id="logout-icon"
              data-name="Group 16"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="Path_11"
                data-name="Path 11"
                d="M0,0H24V24H0Z"
                fill="none"
              />
              <path
                id="Path_12"
                data-name="Path 12"
                d="M7,6A7.75,7.75,0,1,0,17,6"
                fill="none"
                stroke="#ef1a21"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <line
                id="Line_4"
                data-name="Line 4"
                y2="8"
                transform="translate(12 4)"
                fill="none"
                stroke="#ef1a21"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </div>
          <small>Logout</small>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
