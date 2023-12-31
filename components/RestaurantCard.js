import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { ArrayData } = props;

  const { cloudinaryImageId, name, areaName, avgRating } = ArrayData?.info;

  return (
    <div className="restaurant-card">
      <p className="restaurant-open">Open</p>
      <div className="card1">
        <img
          src={IMG_URL + cloudinaryImageId}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body1">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{areaName}</p>
          <p className="rating-text">{avgRating}</p>
        </div>
      </div>
    </div>
  );
};

export const Open = (RestaurantCards) => {
  return (props) => {
    return (
      <div className="card-open">
        <p>Not Open</p>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
