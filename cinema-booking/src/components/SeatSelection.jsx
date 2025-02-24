import React from "react";
import "./SeatSelection.css";

const SeatSelection = ({ selectedSeats, setSelectedSeats, setStep }) => {
  const totalSeats = Array.from({ length: 40 }, (_, i) => i + 1);

  const toggleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-selection">
      <h2>Select Seats</h2>
      <div className="seats">
        {totalSeats.map((seat) => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
            onClick={() => toggleSeatSelection(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <button onClick={() => setStep(5)}>Next</button>
    </div>
  );
};

export default SeatSelection;
