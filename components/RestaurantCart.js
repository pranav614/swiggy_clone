import React, { useSyncExternalStore } from "react";
import AllCartItems from "./AllCartItems";
import cartLogo from '../images/nocart.jpg';
import { Link } from "react-router-dom";
import useRestaurantCart from "../customHooks/useRestaurantCart";
import { useSelector, useStore } from "react-redux";


const RestaurantCart = () => {
  const {incDecprice,arrayTotal,itemList}=useRestaurantCart();
  const store=useSelector((store)=>store);
  console.log(store);
  if (itemList.length === 0) {
    return (
      <div className="no-items-container">
        <img src={cartLogo} alt="" />
        <h3 style={{ textAlign: 'center' }}>This Cart is Empty</h3>
        <Link to="/"><button className="empty-cart-but">Restaurants Near By</button></Link>
      </div>
    );
  }
  return (
    <div className="wholeCartContainer">

      <div className="headerContainer">
      <h1 className="cart-header">Cart</h1>
      </div>

      

    <div className="cart-container">
      
      <div className="cart-sub-container">
        <div>
          {itemList.map((item) => (
            <AllCartItems key={item.arrayRes.card.info.id} item={item} />
          ))}
        </div>
      </div>
      <div className="total-container">
        <h1 className="total-header" style={{ textAlign: 'center' }}>Total</h1>
        <div>
          <p><strong>Items</strong>: {itemList.length}</p>
          <p><strong>Total Price</strong>(Rs): {Math.floor(arrayTotal/100+incDecprice)}  </p>
        </div>
      </div>
    </div>

      
    </div>
  
    
  );
}

export default RestaurantCart;
