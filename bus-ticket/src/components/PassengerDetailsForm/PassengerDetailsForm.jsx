import React, { useState } from "react";
import "./PassengerDetailsForm.css";

function PassengerDetailsForm({ seatNumbers, onSubmitDetails }) {
  const [details, setDetails] = useState(
    seatNumbers.map((seat) => ({ seat, name: "", age: "" }))
  );

  const handleChange = (index, field, value) => {
    const updatedDetails = [...details];
    updatedDetails[index][field] = value;
    setDetails(updatedDetails);
  };

  const handleSubmit = () => {
    onSubmitDetails(details);
  };

  return (
    <div className="passenger-details-form">
      <h2>Passenger Details</h2>
      {details.map((detail, index) => (
        <div key={index} className="passenger-row">
          <p>Seat {detail.seat}</p>
          <input
            type="text"
            placeholder="Name"
            value={detail.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={detail.age}
            onChange={(e) => handleChange(index, "age", e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Details</button>
    </div>
  );
}

export default PassengerDetailsForm;
