import React from "react";
import "./TicketSummary.css";

function TicketSummary({ bus, seatNumbers, passengerDetails }) {
  const totalPrice = bus.price * seatNumbers.length;

  return (
    <div className="ticket-summary">
      <h2>Booking Summary</h2>
      <p>Bus: {bus.name}</p>
      <p>Seats: {seatNumbers.join(", ")}</p>
      <p>Total Price: ₹{totalPrice}</p>
      <h3>Passenger Details:</h3>
      {passengerDetails.map((detail, index) => (
        <div key={index}>
          <p>
            Seat {detail.seat}: {detail.name}, Age {detail.age}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TicketSummary;
