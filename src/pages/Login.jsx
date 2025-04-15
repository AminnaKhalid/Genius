import React from "react";
import loginbg from "./assets/logo.png";
import "./styles/Login.css";
import mainlogo from "./assets/mainlogo.png";
import login from "./assets/logintitle.png";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
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
              <label htmlFor="Email" className="label">Genius ID </label>
              <input type="id" placeholder="12345678" className="input_login" />
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                placeholder="**********"
                className="input_login"
              />
              <Link className="button" to="/Dashboard">Login</Link>
            </form>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Login;
