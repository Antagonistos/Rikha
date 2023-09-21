import React from "react";
import Card from "./Card";

const Cards = ({ goods, getOneCard }) => {
  return (
    <div className="cards">
      {goods.map((item) => (
        <Card getOneCard={getOneCard} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cards;
