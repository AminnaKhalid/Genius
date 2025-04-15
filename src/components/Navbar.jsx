import React, { useState } from "react";
import "./styles/nav.css";
import logo from "../assets/mainlogo.png";
import activities from "../assets/activities.png";
import dashboard from "../assets/dashboard.png";
import profile from "../assets/profile.png";
import settings from "../assets/settings.png";
import store from "../assets/store.png";
import surveys from "../assets/surveys.png";
import lightdashboard from "../assets/lighthome.png";
import lightactivities from "../assets/activitieslight.png";
import lightstore from "../assets/lightstore.png";
import lightsurveys from "../assets/lightsurveys.png";
import lightsettings from "../assets/lightsettings.png";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      icon: dashboard,
      lightIcon: lightdashboard,
      path: "/Dashboard",
    },
    {
      name: "Activities",
      icon: activities,
      lightIcon: lightactivities,
      path: "/activities",
    },
    {
      name: "Starfall Store",
      icon: store,
      lightIcon: lightstore,
      path: "/Starfallstore",
    },
    {
      name: "Surveys",
      icon: surveys,
      lightIcon: lightsurveys,
      path: "/surveys",
    },
    {
      name: "Settings",
      icon: settings,
      lightIcon: lightsettings,
      path: "/Settings",
    },
  ];

  // Determine active item based on current route
  const activeItem =
    navItems.find((item) => location.pathname.startsWith(item.path))?.name ||
    "Dashboard";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="main_nav hidden md:flex">
        <div>
          <img src={logo} alt="Company Logo" className="nav_logo" />
        </div>
        <div className="nav_center">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className={`nav_item ${activeItem === item.name ? "active" : ""}`}
            >
              <img
                src={activeItem === item.name ? item.lightIcon : item.icon}
                alt={item.name}
                className="nav_icon"
              />
              {item.name}
              {activeItem === item.name && <div className="nav_rec"></div>}
            </Link>
          ))}
        </div>
        <div className="nav_profile">
          <img src={profile} alt="User Profile" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mobile-nav">
        <div className="mobile-nav-header">
          <img src={logo} alt="Company Logo" className="mobile-nav-logo" />
          <button
            onClick={toggleMenu}
            className="hamburger-btn"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <button
            onClick={toggleMenu}
            className="mobile-close-btn"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className={`mobile-nav-item ${
                  activeItem === item.name ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  src={activeItem === item.name ? item.lightIcon : item.icon}
                  alt={item.name}
                  className="mobile-nav-icon"
                />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="mobile-nav-profile">
              <img src={profile} alt="User Profile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
