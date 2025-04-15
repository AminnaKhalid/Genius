import React from 'react';
import Navbar from '../../components/Navbar';
import Heading from '../../components/Heading';
import earning1 from "./assets/earning1.png";
import earning2 from "./assets/earning2.png";
import './styles/Earning.css';
import earningimage from "./assets/starfall1.png";
import pending from "./assets/pending.png";
import deliver from "./assets/deliver.png";
import earn from "./assets/earn.png";

const Earnings = () => {
  const earningsData = [
    {
      id: 1,
      earnimag: earningimage,
      icon: pending,
      content: "Variety party hundreds celebration yummy",
    },
    {
      id: 2,
      earnimag: earn,
      icon: deliver,
      content: "Variety party hundreds celebration yummy",
    },
    {
      id: 1,
      earnimag: earningimage,
      icon: pending,
      content: "Variety party hundreds celebration yummy",
    },
    {
      id: 2,
      earnimag: earn,
      icon: deliver,
      content: "Variety party hundreds celebration yummy",
    },
    {
      id: 1,
      earnimag: earningimage,
      icon: pending,
      content: "Variety party hundreds celebration yummy",
    },
    {
      id: 2,
      earnimag: earn,
      icon: deliver,
      content: "Variety party hundreds celebration yummy",
    },
  ];

  return (
    <div className="mmain">
      <Navbar />
      <div className="ccontainer">
        <Heading headingtitle="Earnings Overview" />
        <div className="earning_contentbar">
          <div className="earn_heading">Redemption Status</div>
          <div className="earn_icons">
            <img src={earning1} alt="Earning icon 1" className="earn_icon" />
            <img src={earning2} alt="Earning icon 2" className="earn_icon" />
          </div>
        </div>
        <div className="cards_store">
          {earningsData.map((item) => (
            <div className="card_store_data" key={item.id}>
              <img src={item.earnimag} alt="Earning" className="image_store" />
              <div className="image_overlay"></div>
              <img src={item.icon} alt="Status" className="settings_pending_icon" />  
              <div className="card_store_desc">
                <span className="card_store_heading">{item.content}</span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}

export default Earnings;