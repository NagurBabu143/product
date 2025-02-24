import React, { useState } from "react";
import BookingForm from "./BookingForm/BookingForm";
import BusList from "./BusList/BusList";
import SeatSelection from "./SeatSelection/SeatSelection";
import PassengerDetailsForm from "./PassengerDetailsForm/PassengerDetailsForm";
import TicketSummary from "./TicketSummary/TicketSummary";
import "./Bus.css";

function Bus() {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);
  const [seatNumbers, setSeatNumbers] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState([]);

  const handleBookingSubmit = (details) => {
    setBookingDetails(details);
    setSelectedBus(null); 
    setSeatNumbers([]);
    setPassengerDetails([]);
  };


  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    setSeatNumbers([]);
    setPassengerDetails([]);
  };

 
  const handleSeatSelection = (seats) => {
    setSeatNumbers(seats);
  };

  
  const handlePassengerDetails = (details) => {
    setPassengerDetails(details);
  };

  return (
    <div className="app-container">
      <h1>Bus Ticket Booking App</h1>

      
      {!bookingDetails && <BookingForm onSubmitBooking={handleBookingSubmit} />}

      
      {bookingDetails && !selectedBus && (
        <BusList onBusSelect={handleBusSelect} />
      )}

      
      {selectedBus && seatNumbers.length === 0 && (
        <SeatSelection
          bus={selectedBus}
          selectedSeats={seatNumbers}
          onSeatSelection={handleSeatSelection}
        />
      )}

      
      {seatNumbers.length > 0 && passengerDetails.length === 0 && (
        <PassengerDetailsForm
          seatNumbers={seatNumbers}
          onSubmitDetails={handlePassengerDetails}
        />
      )}

      
      {passengerDetails.length > 0 && (
        <TicketSummary
          bus={selectedBus}
          seatNumbers={seatNumbers}
          passengerDetails={passengerDetails}
        />
      )}
    </div>
  );
}

export default Bus;
