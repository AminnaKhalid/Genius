import React from "react";
import "./styles/Splash.css";
import video from "./assets/splashvideo.mp4";
import logo from "./assets/mainlogo.png";
import arrow from "./assets/loginarrow.png";
import { Link } from "react-router-dom";
const SplashScreen = () => {
  return (
    <>
      <div className="splash_content">
        <div className="w-full h-screen bg-black/50 z-2">
          <video src={video} loop autoPlay muted className="splash-video" />
          <img src={logo} alt="" className="splash_logo" />
          <div className="...">
            <h1 className="splash_heading">
              Where education <br /> and imagination meet.
            </h1>
            <h2 className="splash_subheading">
              Unlock your full potential with <br /> customized learning
              experience for every <br /> curious mind.
            </h2>
            <Link to="/Login" className="login_button">
              <button className="login">Login</button>
              <img src={arrow} alt="" className="h-12 w-12" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
