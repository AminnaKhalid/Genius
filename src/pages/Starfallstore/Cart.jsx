import React from "react";
import "./styles/Cart.css";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import product from "./assets/starfall1.png";
import cartstar from "./assets/cartstar.png";
import plus from "./assets/plus.png";
import minus from "./assets/minus.png";

const Cart = () => {
  return (
    <>
      <div className="mmain">
        <Navbar />
        <div className="ccontainer">
          <Heading headingtitle="Cart" />
          <div className="cart_data_container">
            <div className="cart_items">
              <div className="cart_items_add">
                <div className="cart_products">
                  <img src={product} alt="" className="cart_image" />
                  <div className="product_heading">
                    <span className="cart_product_heading">
                      Tasty jelly rings
                    </span>
                    <div className="cart_icon_number">
                      <img src={cartstar} alt="" className="cart_icon" />
                      <span className="cart_number">20</span>
                    </div>
                  </div>
                </div>
                <div className="cart_id">
                  <img src={plus} alt="" className="add_icon" />
                  <span className="quantity">2</span>
                  <img src={minus} alt="" className="add_icon" />
                </div>
              </div>
              <button className="cart_button">
                <img src={cartstar} alt="" className="cart_icon" />
                <span>Hard Work Pays Off!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
