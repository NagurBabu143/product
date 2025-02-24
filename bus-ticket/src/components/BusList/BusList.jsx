import React from "react";
import "./BusList.css";

const buses = [
  { id: 1, name: "City Express", price: 500 },
  { id: 2, name: "Highway Rider", price: 750 },
  { id: 3, name: "Night Traveler", price: 900 },
];

function BusList({ onBusSelect }) {
  return (
    <div className="bus-list">
      <h2>Select a Bus</h2>
      {buses.map((bus) => (
        <div
          key={bus.id}
          className="bus-item"
          onClick={() => onBusSelect(bus)}
        >
          <p>{bus.name}</p>
          <p>Price: ₹{bus.price} per ticket</p>
        </div>
      ))}
    </div>
  );
}

export default BusList;
