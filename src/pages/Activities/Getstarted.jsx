import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import "./styles/Todo.css";
import star from "./assets/star.png";
import attachment1 from "./assets/attachment.png";
import attachment2 from "./assets/attachment1.png";
import link from "./assets/linkstarted.png";
import file from "./assets/file.png";
import video from "./assets/video.png";
import image from "./assets/image.png";
import document from "./assets/document.png";
import SubmitTodoModal from "./SubmitTodoModal";

const Getstarted = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  return (
    <>
      <div className="getstarted_main">
        <Navbar />
        <div className="getstarted_content">
          <Heading headingtitle="Activities" />
          <div className="todo_container">
            <div className="getstarted_container">
              <span className="getstarted_heading">Question:</span>
              <div className="getstarted_question">
                <div className="activity_line">
                  What benefits will I receive as a Lyft Pink member?
                </div>
                <img src={star} alt="" className="star_icon" />
              </div>
              <span className="getstarted_heading">Description :</span>
              <div className="getstarted_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                nisi maxime nam sit architecto vel, voluptatem numquam tempore
                enim illo.lorem20 Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ipsam distinctio eos, eligendi deserunt
                recusandae voluptates vero dolorum tempore alias suscipit.
              </div>
              <div className="getstarted_subheading">Attachment</div>
              <div className="attachment_images">
                <img src={attachment1} alt="" className="attach_image" />
                <img src={attachment2} alt="" className="attach_image" />
              </div>
              <div className="getstarted_heading">Answer : </div>
              <div className="textarea_container">
                <img
                  src={link}
                  alt="..."
                  className="answer_icon"
                  onClick={() => setIsOpen(!isOpen)}
                />

                {isOpen && (
                  <div className="getstarted_menu">
                    <div className="getstarted_item">
                      <img
                        src={image}
                        alt=""
                        className="getstarted_dropdown_icon"
                      />
                      <span>Image</span>
                    </div>
                    <div className="getstarted_item">
                      <img
                        src={file}
                        alt=""
                        className="getstarted_dropdown_icon"
                      />
                      <span>File</span>
                    </div>
                    <div className="getstarted_item">
                      <img
                        src={video}
                        alt=""
                        className="getstarted_dropdown_icon"
                      />
                      <span>Video</span>
                    </div>
                    <div className="getstarted_item">
                      <img
                        src={document}
                        alt=""
                        className="getstarted_dropdown_icon"
                      />
                      <span>Document</span>
                    </div>
                  </div>
                )}
                <textarea
                  className="getstarted_answer"
                  placeholder="Type your answer here..."
                />
              </div>
              <button
                className="getstarted_button"
                onClick={() => setShowSubmitModal(true)}
              >
                Submit Answer
              </button>

              {showSubmitModal && (
                <SubmitTodoModal
                  onClose={() => setShowSubmitModal(false)}
                  onSubmit={() => {
                    console.log("Answer submitted!");
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getstarted;
