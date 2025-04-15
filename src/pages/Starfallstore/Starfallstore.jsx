import React, { useState } from "react";
import Heading from "../../components/Heading";
import "./styles/starfall.css";
import Navbar from "../../components/Navbar";
import starfall1 from "./assets/starfall1.png";
import starfall2 from "./assets/starfall2.png";
import star from "./assets/star.png";
import CompletedModal from "../Activities/CompletedModal";
import starfallmodal from "./assets/storemodal.png";
import { useNavigate } from "react-router-dom";

const Starfallstore = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const starfall = [
    { id: 1, name: "Tasty jelly rings", icon: star, image: starfall1 },
    { id: 2, name: "Heap of bright candies", icon: star, image: starfall2 },
    { id: 3, name: "Heap of bright candies", icon: star, image: starfall2 },
    { id: 4, name: "Tasty jelly rings", icon: star, image: starfall1 },
    { id: 5, name: "Heap of bright candies", icon: star, image: starfall2 },
  ];

  const handleResults = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="store-main">
        <Navbar />
        <div className="store_container">
          <Heading headingtitle="Starfall Store" />
          <div className="cards_store">
            {starfall.map((item) => (
              <div className="card_store_data" key={item.id}>
                <img src={item.image} alt="" className="image_store" />
                <div className="image_overlay"></div>
                <img src={item.icon} alt="" className="card_store_icon" />
                <div className="card_store_desc">
                  <span className="card_store_heading">{item.name}</span>
                  <button
                    className="card_store_redeem"
                    onClick={() => handleResults(item)}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CompletedModal
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
          completed_desc="Your hard work has truly paid off! Your prize is on its way and will arrive on Starfall Day. Keep shining bright and chasing your dreams. You are a bright star! Thank you for your amazing perseverance!"
          completed_heading="You Earned it!"
          completedmodal_image={starfallmodal}
          completed_button="Thank You For Participating"
          onButtonClick={()=>{
            setIsModalOpen(false);
navigate('/Starfallstore/Cart');
          }}
        />
      )}
    </>
  );
};

export default Starfallstore;
