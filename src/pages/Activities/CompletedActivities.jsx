import React, { useState } from "react";
import './styles/Todo.css'
import star from "./assets/star.png";
import CompletedModal from "./CompletedModal";
import completedmodal from './assets/completedmodal.png'


const CompletedActivities = () => {
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const Completed = [
    { id: "01.", line: "What benefits will I receive as a Lyft Pink member?" },
    {
      id: "02.",
      line: "How does the free Priority Pickup upgrades benefit work?",
    },
    { id: "03.", line: "Which rides does member-exclusive pricing apply to?" },
    { id: "04.", line: "Do discounts impact driver pay?" },
    {
      id: "05.",
      line: "How does the bike benefit work and where is it available?",
    },
    { id: "06.", line: "What is Bike Angels?" },
    { id: "07.", line: "What benefits will I receive as a Lyft Pink member?" },
    { id: "08.", line: "What benefits will I receive as a Lyft Pink member?" },
  ];

  const handleShowResults = (item) => {
    setSelectedItem(item);
    setShowCompleteModal(true);
  };

  return (
    <>
      <div className="todo_container">
        {Completed.map((item, index) => (
          <React.Fragment key={index}>
            <div className="todo_item">
              <div className="todo_list">
                <div className="todolist_first">
                  <span className="activity_id">{item.id}</span>
                  <span className="activity_line">{item.line}</span>
                </div>
                <div className="todolist_second">
                  <button
                    className="todolist_button"
                    onClick={() => handleShowResults(item)}
                  >
                    Show Results
                  </button>
                  <img src={star} alt="star icon" className="star_icon" />
                </div>
              </div>
              {index !== Completed.length - 1 && (
                <div className="todo_line"></div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Single modal outside the map */}
      {showCompleteModal && (
        <CompletedModal
          onClose={() => setShowCompleteModal(false)}
          item={selectedItem}
          completed_desc="Your hard work helped you navigate this challenge like a true astronaut Remember, every effort expands your universe of knowledge. What new constellation of skills will you explore next?"
          completed_heading="Mission Accomplished"
          completedmodal_image={completedmodal}
          completed_button="Pending Review"
        />
      )}
    </>
  );
};

export default CompletedActivities;
