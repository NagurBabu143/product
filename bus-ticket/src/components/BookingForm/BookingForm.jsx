import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({ onSubmitBooking }) {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    travelDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.source || !formData.destination || !formData.travelDate) {
      alert("Please fill out all fields!");
      return;
    }
    onSubmitBooking(formData);
  };

  return (
    <div className="booking-form">
      <h2>Bus Ticket Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="source">Source</label>
          <input type="text" id="source" name="source" value={formData.source} onChange={handleChange} placeholder="Enter source city" />
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} placeholder="Enter destination city"/>
        </div>

        <div className="form-group">
          <label htmlFor="travelDate">Travel Date</label>
          <input type="date" id="travelDate" name="travelDate" value={formData.travelDate} onChange={handleChange}/>
        </div>

        <button type="submit" className="submit-btn"> Search Buses </button>
      </form>
    </div>
  );
}

export default BookingForm;
