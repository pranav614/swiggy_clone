import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const userName = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <div className="header-container">
      <div className="header">
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
        <nav>
          <ul className="ul-container">
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "poppins",
                  color: "white",
                fontSize:"16px",

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
                fontSize:"16px",

                }}

                to="/grocery"
              >
                Contact
              </Link>
            </li>
            <li className="cartLi">
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "poppins",
                  color: "white",
                fontSize:"16px",

                }}
                to="/cart"
              >
                Cart <span className="cartLength "> {cartItems.length}</span>
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
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "poppins",
                  color: "white",
                fontSize:"16px",

                }}
                to=""
              >
                Hi! {userName.loginUser}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
