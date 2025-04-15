import React from "react";
import "./styles/CompletedModal.css";
import modalstar from "./assets/modalstar.png";

const CompletedModal = ({
  onClose,
  completed_desc,
  completedmodal_image,
  completed_heading,
  completed_button,
  onButtonClick,
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick(); 
    } else {
      onClose(); 
    }
  };

  return (
    <div className="CompletedModal_Main">
      <div className="CompletedModal_Container">
        <div className="completedimage_container">
          <img
            src={completedmodal_image}
            alt=""
            className="completedmodalImage"
          />
          <span className="completedmodal_heading">{completed_heading}</span>
          <span className="completemodal_para">{completed_desc}</span>
          <button className="completedmodal_button" onClick={handleButtonClick}>
            <img src={modalstar} alt="" className="modalstaricon" />
            {completed_button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedModal;
