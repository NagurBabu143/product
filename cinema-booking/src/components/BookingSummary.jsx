import React from "react";

const BookingSummary = ({ movie, date, time, seats, setStep }) => {
  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      <p><strong>Movie:</strong> {movie.name}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Seats:</strong> {seats.join(", ") || "None selected"}</p>
      <p><strong>Total:</strong> ${seats.length * movie.price}</p>
      <button onClick={() => setStep(6)}>Proceed to Payment</button>
    </div>
  );
};

export default BookingSummary;
