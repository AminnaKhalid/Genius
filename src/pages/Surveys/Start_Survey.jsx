import React from "react";
import "./styles/Start_Survey.css";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import startbg from "./assets/startsurveybg.png";
import mainlogo from "../../assets/mainlogo.png";

const Start_Survey = () => {
  return (
    <>
      <div className="mmain">
        <Navbar />
        <div className="ccontainer">
          <Heading headingtitle="Surveys" />
          <div className="start_bg">
            <img src={startbg} alt="" className="start_image_bg" />
            <img src={mainlogo} alt="" className="startsurvey_image" />
          </div>
          <div className="start_content">
            <div className="privacy_head">What is Bike Angels?</div>
            <span className="privacy_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <div className="start_form">
              <span className="privacy_head">
                Name <sup>*</sup>
              </span>
              <input
                type="text"
                className="start_form_input"
                placeholder="short answer text"
              />
            </div>
            <div className="start_form">
              <span className="privacy_head">
                Address <sup>*</sup>
              </span>
              <input
                type="text"
                className="start_form_input"
                placeholder="long answer text"
              />
            </div>
            <div className="start_form">
              <span className="privacy_head">
                Phone number <sup>*</sup>
              </span>
              <input
                type="text"
                className="start_form_input"
                placeholder="short answer text"
              />
            </div>
            <div className="start_form">
              <span className="privacy_head">
                Comments <sup>*</sup>
              </span>
              <input
                type="text"
                className="start_form_input"
                placeholder="Long answer text"
              />
            </div>
            <button className="survey_submit">Survey Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start_Survey;
