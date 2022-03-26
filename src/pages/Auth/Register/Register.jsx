import React from "react";
import registermain from "../../../assets/img/register_main.png";
import logo from "../../../assets/img/logo.png";
import "./Register.css";
const Register = () => {
  return (
    <div className="registerscreen">
      <div className="left_side">
        <form action="" className="form_wrapper">
          <img src={logo} alt="" />
          <div className="input_wraper">
            <label htmlFor="name">Enter Name</label>
            <input type="text" placeholder="Enter Name" id="name" />
          </div>
          <div className="input_wraper">
            <label htmlFor="mb_no">Enter Mobile Numnber</label>
            <input type="text" placeholder="Enter Mobile Number" id="mb_no" />
          </div>

          <div className="input_wraper">
            <label htmlFor="Password">Enter Password</label>
            <input type="text" placeholder="Enter Password" id="Password" />
          </div>

          <button>Sign Up</button>
        </form>
      </div>
      <img src={registermain} alt="" />
    </div>
  );
};
export default Register;
