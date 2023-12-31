import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div className="header-container">
      <div className="header1">
        <Link
          style={{
            fontSize: "24px",
            textDecoration: "none",
            fontFamily: "poppins",
            color: "white",
          }}
          to="/"
        >
          <div>P.S.V.M.C</div>
        </Link>

    {
      isActive? <nav>
       <ul className="ulContainer">
         <li >
           <Link
             style={{
               textDecoration: "none",
               fontFamily: "poppins",
               color: "white",
             }}
             to="/about"
           >
             About
           </Link>
         </li>
         <li>
           <Link
             style={{
               textDecoration: "none",
               fontFamily: "poppins",
               color: "white",
             }}
             to="/grocery"
           >
             Contact
           </Link>
         </li>
       </ul>
     </nav>:<div></div>

    }   
        <div className="mobileNavSub">
          <li className="cartLi1">
            <Link
              style={{
                textDecoration: "none",
                fontFamily: "poppins",
                color: "white",
              }}
              to="/cart"
            >
              Cart <span className="cartLength1 "> {cartItems.length}</span>
              <svg
                className="_1GTCc _2MSid"
                viewBox="-1 0 37 32"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"
                  fill="black"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </Link>
          </li>
          <div className="MenuContainer">
            <button
              className={`hamburger hamburger--arrow ${
                isActive ? "is-active" : ""
              }`}
              type="button"
              onClick={handleClick}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
