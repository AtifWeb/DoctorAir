import React from "react";
import loginmain from "../../../assets/img/login_main.png";
import logo from "../../../assets/img/logo.png";
import "./Login.css";
const Register = () => {
  return (
    <div className="Login">
      <div className="left_side">
        <form action="" className="form_wrapper">
          <img src={logo} alt="" />
          <div className="input_wraper">
            <label htmlFor="mb_no">Enter Mobile Numnber</label>
            <input type="text" placeholder="Enter Mobile Number" id="mb_no" />
            <button>Sign in</button>
          </div>
        </form>
      </div>
      <img src={loginmain} alt="" />
    </div>
  );
};
export default Register;
