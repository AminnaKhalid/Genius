import React from "react";
import Navbar from "../components/Navbar";
import "./styles/Dashboard.css";
import dashbg from "./assets/dashbg.png";
import dashprofile from "./assets/dashprofile.png";
import Heading from "../components/Heading"

const Dashboard = () => {
  const stats = [
    { title: "Activities Completed", value: "10" },
    { title: "Stars Earned", value: "25" },
    { title: "Pending Activities", value: "10" },
    { title: "Surveys Completed", value: "05" },
    { title: "Stars Pending", value: "05" },
    { title: "Surveys Pending", value: "05" },
  ];

  return (
    <div className="dashboard">
      <Navbar />

      <div className="main-container">
      
        <div className="left-section">
          <div className="profile-section">
            <img src={dashprofile} alt="Profile" className="profile-image" />
            <div className="profile-text">
              <h1>Welcome Christina Dykes</h1>
              <p>Discover the Statistics of Your Genius</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="right-section">
          <img src={dashbg} alt="Background" className="background-image" />
        </div>

        {/* Cards Section - Starts below profile text, overlaps right */}
        <div className="cards-section">
          <h2 className="...">
            <Heading
            headingtitle="Dashboard"
             />
          </h2>

          <div className="cards-container">
            {/* First Row - 3 Cards */}
            <div className="cards-row">
              {stats.slice(0, 3).map((stat, index) => (
                <div key={`first-${index}`} className="stat-card">
                  <h3>{stat.title}</h3>
                  <p>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Second Row - 3 Cards */}
            <div className="cards-row">
              {stats.slice(3, 6).map((stat, index) => (
                <div key={`second-${index}`} className="stat-card">
                  <h3>{stat.title}</h3>
                  <p>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
