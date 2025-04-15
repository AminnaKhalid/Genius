import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import "./styles/Activities.css";

import dropdown from "./assets/dropdown .png";
import ToDoActivities from "./ToDoActivities";
import CompletedActivities from "./CompletedActivities";
import searchIcon from "./assets/searchiconbar.png";
import filtericon from "./assets/filtericon.png";

const Activities = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Subject");
  const [quaterOption, setQuaterOption] = useState("Quater");
  const [isOpenQuater, setIsOpenQuater] = useState(false);
  const [isActive, setIsActive] = useState("todo");
  const [showFilterModal, setShowFilterModal] = useState(false);

  const options = ["Mathematics", "Science", "History"];
  const quater = ["2 months", "3 months", "4 months", "6 months"];

  return (
    <div className="mmain">
    
      {showFilterModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="filter_heading">
              <Heading headingtitle="Filter" />
            </div>
            <div>
              <div className="modal_filter gap-3 md:gap-10">
                <div className="filter-option">
                  <label className="filter_label">Start Date</label>
                  <input type="date" className="filter_input" />
                </div>
                <div className="filter-option">
                  <label className="filter_label">End Date</label>
                  <input type="date" className="filter_input" />
                </div>
              </div>

              <div className="modal_filter gap-3 md:gap-10">
                <div className="filter_drop ">
                  <label className="filter_label">Select Subject</label>
                  <select className="filter_options">
                    <option>All </option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="filter_drop">
                  <label className="filter_label">Quater</label>
                  <select className="filter_options">
                    <option>All</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button
                className="modal-cancel-btn"
                onClick={() => setShowFilterModal(false)}
              >
                Cancel
              </button>
              <button
                className="modal-apply-btn"
                onClick={() => setShowFilterModal(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar />
      <div className="ccontainer">
        <div className="container_activity">
          <div className="subject">
            <Heading headingtitle="Activities" />

            <div className="dropdown_wrapper">
              <div className="dropdown_subject">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="dropdown_header"
                >
                  <span>{selectedOption}</span>
                  <img
                    src={dropdown}
                    alt="dropdown arrow"
                    className={`dropdown_icon ${isOpen ? "open" : ""}`}
                  />
                </div>
                {isOpen && (
                  <div className="dropdown_options">
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setSelectedOption(option);
                          setIsOpen(false);
                        }}
                        className="dropdown_option"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="dropdown_subject">
                <div
                  onClick={() => setIsOpenQuater(!isOpenQuater)}
                  className="dropdown_header"
                >
                  <span>{quaterOption}</span>
                  <img
                    src={dropdown}
                    alt="dropdown arrow"
                    className={`dropdown_icon ${isOpenQuater ? "open" : ""}`}
                  />
                </div>
                {isOpenQuater && (
                  <div className="dropdown_options quater_options">
                    {quater.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setQuaterOption(item);
                          setIsOpenQuater(false);
                        }}
                        className="dropdown_option"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex space-x-4 flex-col md:flex-row space-y-2 md:space-y-0">
            <div className="button_filter">
              <div className="buttons_activity">
                <div
                  onClick={() => setIsActive("todo")}
                  className={`todo ${isActive === "todo" ? "active" : ""}`}
                >
                  To-Do
                </div>
                <div
                  className={`completed ${
                    isActive === "completed" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("completed")}
                >
                  Completed
                </div>
              </div>
            </div>
            {/* filter and search icons */}
            <div className="search_wrapper">
              <input
                type="text"
                placeholder={
                  isActive === "todo"
                    ? "Filter activities..."
                    : "Search activities..."
                }
                className="search_input"
              />
              {isActive === "todo" ? (
                <img
                  src={filtericon}
                  alt="Filter"
                  className="search_icon"
                  onClick={() => setShowFilterModal(true)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <img src={searchIcon} alt="Search" className="search_icon" />
              )}
            </div>
          </div>
        </div>
        {/* todoactivities or completedactivites ka components */}
        <div className="activities_content">
          {isActive === "todo" ? <ToDoActivities /> : <CompletedActivities />}
        </div>
      </div>
    </div>
  );
};

export default Activities;
