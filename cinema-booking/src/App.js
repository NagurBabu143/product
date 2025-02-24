import React, { useState } from "react";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import DateAndTimeSelection from "./components/DateAndTimeSelection";
import SeatSelection from "./components/SeatSelection";
import BookingSummary from "./components/BookingSummary";
import Payment from "./components/Payment";
import Confirmation from "./components/Confirmation";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1); // Step for navigation
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const resetBooking = () => {
    setStep(1);
    setSelectedMovie(null);
    setSelectedDate("");
    setSelectedTime("");
    setSelectedSeats([]);
    setBookingConfirmed(false);
  };

  return (
    <div className="app">
      <h1>Cinema Ticket Booking</h1>
      {step === 1 && <MovieList setSelectedMovie={setSelectedMovie} setStep={setStep} />}
      {step === 2 && <MovieDetails movie={selectedMovie} setStep={setStep} />}
      {step === 3 && (
        <DateAndTimeSelection
          setSelectedDate={setSelectedDate}
          setSelectedTime={setSelectedTime}
          setStep={setStep}
        />
      )}
      {step === 4 && (
        <SeatSelection
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          setStep={setStep}
        />
      )}
      {step === 5 && (
        <BookingSummary
          movie={selectedMovie}
          date={selectedDate}
          time={selectedTime}
          seats={selectedSeats}
          setStep={setStep}
        />
      )}
      {step === 6 && (
        <Payment
          setBookingConfirmed={setBookingConfirmed}
          setStep={setStep}
        />
      )}
      {step === 7 && (
        <Confirmation
          movie={selectedMovie}
          date={selectedDate}
          time={selectedTime}
          seats={selectedSeats}
          resetBooking={resetBooking}
          bookingConfirmed={bookingConfirmed}
        />
      )}
    </div>
  );
};

export default App;
