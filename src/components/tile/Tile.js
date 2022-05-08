import React from "react";

export const Tile = ({ tile }) => {
const values = Object.values(tile);
  return (
    <div className="tile-container">
      {values.map((el, index) => (
        <p className={index == 0 ? "tile-title" : "tile"} >{el}</p>
      ))}
    </div>
  );
};
