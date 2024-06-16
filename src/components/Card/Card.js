import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="cardImgContainer">
        <img className="cardImg" src={item.images[0]} alt={item.title} />
      </div>
      <span className="cardTitle">{item.title}
</span>
    </div>
  );
};

export default Card;
