import React from 'react'
import '../Activities/styles/Todo.css'
import star from '../Starfallstore/assets/cartstar.png'
const Completed_Survey = () => {
   
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
    
   
  return (
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
                <img src={star} alt="star icon" className="survey_icon" />
                <span className="completed_survey">10</span>
              </div>
            </div>
            {index !== Completed.length - 1 && (
              <div className="todo_line"></div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Completed_Survey