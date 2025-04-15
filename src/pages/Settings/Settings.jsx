import React, { useState } from "react";
import "./styles/Settings.css";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import settings from "./assets/profilesetting.png";
import right from "./assets/rightarrow.png";
import iconstar from "./assets/iconstarsetting.png";
import { useNavigate } from "react-router-dom";
import SettingsModal from "./SettingsModal";
const Settings = () => {
  const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate();
  const settingscontent = [
    { id: 1, settingscontent: "Earnings Overview", icon: right, path: '/Settings/earnings' },
    { id: 2, settingscontent: "About Us", icon: right, path: '/Settings/about' },
    { id: 3, settingscontent: "Privacy Policy", icon: right, path:'/Settings/privacy' },
  ];
  return (
    <>
      <div className="mmain">
        <Navbar />
        <div className="ccontainer">
          <Heading headingtitle="Settings" />
          <div className="settings_area">
            <div className="settings_content">
              {settingscontent.map((item) => (
                <div className="heading_settings" key={item}>
                  <span className="heading_settings_name">
                    {item.settingscontent}
                  </span>
                  <img
                    src={item.icon}
                    alt=""
                    className="settings_icon"
                    onClick={() => navigate(item.path)}
                  />
                </div>
              ))}
            </div>
            <div className="settings_second">
              <img src={settings} alt="" className="settings_image" />
              <img src={iconstar} alt="" className="iconstar_setting" />
              <span className="settings_second_heading">Ellington Thom</span>
              <span className="settings_numbers">123-456-7890</span>
            </div>
          </div>
          <button
            className="settings_logout"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Logout
          </button>
        </div>
      </div>

      {modalOpen && <SettingsModal onClose={()=> setModalOpen(!modalOpen)} />}
    </>
  );
};

export default Settings;
