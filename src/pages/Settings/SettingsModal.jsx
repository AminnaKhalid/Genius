import React from "react";
import "./styles/Logout.css";
import logout from "./assets/logoutsetting.png";
import { useNavigate } from "react-router-dom";

const SettingsModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="todomodalsubmit">
      <div className="todosubmitmodal_container">
        <div className="logout_content">
          <img src={logout} alt="" className="logout_icon" />
          <span className="logout_head">Taking a break?</span>
          <div className="logout_buttons">
            <button className="button_logout_content1" onClick={onClose}>
              Go Back
            </button>
            <button
              className="button_logout_content2"
              onClick={() => navigate("/Login")} // Goes to login
            >
              Return To Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
