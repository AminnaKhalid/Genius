import React from "react";
import loginbg from "./assets/logo.png";
import "./styles/Login.css";
import mainlogo from "./assets/mainlogo.png";
import login from "../assets/loginpagelogo.png";
import id1 from "../assets/id1.png";
import id2 from "../assets/id2.png";
import pass1 from "../assets/pass1.png";
import pass2 from "../assets/pass2.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main">
      <div className="login_container">
        <img src={loginbg} alt="" className="login_bg" />
        <div className="login_center">
          <img src={mainlogo} alt="" className="h-40 w-56" />
          <div className="text_box">
            <h1 className="login_title">
              <img src={login} alt="" className="login_image" />
            </h1>
            <form className="subtitle" action="">
              <label htmlFor="Email" className="label">
                Genius ID{" "}
              </label>
              <div className="input-container">
                <img src={id2} alt="" className="input-icon4 left" />
                <input
                  type="id"
                  placeholder="12345678"
                  className="input_login"
                />
                <img src={id1} alt="" className="input-icon1 right" />
              </div>
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="input-container">
                <img src={pass2} alt="" className="input-icon2 left" />
                <input
                  type="password"
                  placeholder="**********"
                  className="input_login"
                />
                <img src={pass1} alt="" className="input-icon3 right" />
              </div>
              <Link className="button" to="/Dashboard">
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
