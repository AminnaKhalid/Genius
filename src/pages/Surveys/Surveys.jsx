import React, { useState } from "react";
import "./styles/Surveys.css";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import searchIcon from "./assets/searchiconbar.png";
import Completed_Survey from "./Completed_Survey";
import Todo_Survey from "./Todo_Survey";

const Surveys = () => {
  const [activityTab, setActivityTab] = useState("todo");
  const [surveyTab, setSurveyTab] = useState("student");

  return (
    <div className="mmain">
      <Navbar />
      <div className="ccontainer">
        <div className="surveys_header">
          <div className="header_left">
            <Heading headingtitle="Surveys" />
            <div className="survey_tabs">
              <div
                onClick={() => setSurveyTab("student")}
                className={`survey_tab ${
                  surveyTab === "student" ? "active" : ""
                }`}
              >
                Student Surveys
              </div>
              <div
                onClick={() => setSurveyTab("family")}
                className={`survey_tab ${
                  surveyTab === "family" ? "active" : ""
                }`}
              >
                Family Surveys
              </div>
            </div>
          </div>
          <div className="header_right">
            <div className="activity_tabs">
              <div
                onClick={() => setActivityTab("todo")}
                className={`activity_tab ${
                  activityTab === "todo" ? "active" : ""
                }`}
              >
                To-Do
              </div>
              <div
                onClick={() => setActivityTab("completed")}
                className={`activity_tab ${
                  activityTab === "completed" ? "active" : ""
                }`}
              >
                Completed
              </div>
            </div>
            <div className="search_wrapper">
              <input
                type="text"
                placeholder="Searching..."
                className="search_input"
              />
              <img src={searchIcon} alt="Search" className="search_icon" />
            </div>
          </div>
        </div>
        <div className="surveys_content">
          {activityTab === "todo" ? (
            <Todo_Survey />
          ) : (
            <Completed_Survey />
          )}
        </div>
      </div>
    </div>
  );
};

export default Surveys;
