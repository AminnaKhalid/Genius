import React from "react";
import "./styles/Todomodalsubmit.css";
import star from "./assets/star.png"
import attachment1 from "./assets/attachment.png"
const SubmitTodoModal = ({ onClose }) => {
  return (
    <>
    <div>
         <div className="todomodalsubmit">
        <div className="todosubmitmodal_container">
          <div className="todosubmit_heading">
            <div className="todosubmit_subheading">
              What benefits will I receive as a Lyft Pink member?
            </div>
            <img src={star} alt="" className="star_icon" />
          </div>
          <div className="todomodaldesc_container">
            <div className="todosubmitmodal_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur laboriosam, labore dolorum autem assumenda beatae
              nobis laborum ullam nemo cupiditate, impedit unde ipsum eius error
              quos molestias? Dolorum beatae minima, explicabo quaerat
              consequuntur voluptates saepe ipsum incidunt. Laboriosam,
              accusamus autem.lorem15 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis quam dolor illum soluta, dolore
              culpa!
            </div>
            <img src={attachment1} alt="" className="attach_image" />
          </div>
          <div className="submit_todo_modal_footer">
            <button className="canceltodo-button" onClick={onClose}>
              Cancel
            </button>
            <button className="submittodo-button" onClick={onClose}>
              Submit Activity
            </button>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default SubmitTodoModal;
