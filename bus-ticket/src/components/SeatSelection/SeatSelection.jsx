import React, { useState } from "react";
import "./SeatSelection.css";

function SeatSelection({ bus, selectedSeats, onSeatSelection }) {
  const totalSeats = 40;
  const [seats, setSeats] = useState(Array(totalSeats).fill(false));

  const handleSeatClick = (index) => {
    const updatedSeats = [...seats];
    updatedSeats[index] = !updatedSeats[index];
    setSeats(updatedSeats);

    const selected = updatedSeats
      .map((isSelected, i) => (isSelected ? i + 1 : null))
      .filter((seat) => seat !== null);

    onSeatSelection(selected);
  };

  return (
    <div className="seat-selection">
      <h2>Seat Selection for {bus.name}</h2>
      <div className="seats-grid">
        {seats.map((isSelected, index) => (
          <button
            key={index}
            className={`seat ${isSelected ? "selected" : ""}`}
            onClick={() => handleSeatClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SeatSelection;
