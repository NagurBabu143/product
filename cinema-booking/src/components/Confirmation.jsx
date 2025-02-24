import React from "react";

const Confirmation = ({ movie, date, time, seats, resetBooking, bookingConfirmed }) => {
  return (
    <div className="confirmation">
      {bookingConfirmed ? (
        <>
          <h2>Booking Confirmed!</h2>
          <p><strong>Movie:</strong> {movie.name}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Seats:</strong> {seats.join(", ")}</p>
          <p>Thank you for booking with us!</p>
        </>
      ) : (
        <h2>Payment Failed. Try Again!</h2>
      )}
      <button onClick={resetBooking}>Book Another Movie</button>
    </div>
  );
};

export default Confirmation;
